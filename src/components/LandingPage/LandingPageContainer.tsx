import { Container } from "@material-ui/core";
import React from "react";

import { EncodedLink, EncodedLinkHandler } from "../../types/dataExchangeTypes";
import useLocalStorage from "../../utils/useLocalStorage";
import RenderMainCard from "./RenderMainCard";
import RenderLinksCard from "./RenderLinksCard";
import { LinkContext } from "../contexts/linkContext";
import { axiosWithoutAuth } from "../../utils/axiosWithAuth";

export default function LandingPageContainer(props: any) {
  const initialLinks: EncodedLink[] = [];
  const [links, setLinks] = useLocalStorage<EncodedLink[]>(
    "links",
    initialLinks
  );

  const addLink: EncodedLinkHandler = link => {
    // console.log("In addLink "+ link);
    link && setLinks([...links, link]);
  };

  React.useEffect(() => {
    // On page load, check all links found in localStorage for validity
    const checkLinks = async (links: EncodedLink[]) => {
      // Using a set here to clear any duplicates
      let paths: Set<string> = new Set(
        links.map(({ encodedPath }) => encodedPath)
      );
      // Array to store the tested links
      let testedLinks: EncodedLink[] = [];

      await Promise.all(
        // Convert back to array in order to use map
        [...paths].map(path =>
          axiosWithoutAuth()
            // Try to decode each encodedPath found
            .get<EncodedLink>(`links/decode/${path}`)
            // If the link isn't found, do nothing
            .catch(() => null)
            // Otherwise, extract the link data
            .then(r => r && r.data)
            .then(l => l && testedLinks.push(l))
        )
      );
      setLinks(testedLinks);
    };

    checkLinks(links);
    // Dependency array is intentionally empty to avoid an infinite loop
  }, []); //eslint-disable-line
  return (
    <div>
      <LinkContext.Provider value={{ links, addLink }}>
        <Container maxWidth='md'>
          <RenderMainCard />
          {links.length > 0 && <RenderLinksCard links={links} />}
        </Container>
      </LinkContext.Provider>
    </div>
  );
}
