import { Container } from "@material-ui/core";
import React from "react";

import { EncodedLink, EncodedLinkHandler } from "../../types/dataExchangeTypes";
import useLocalStorage from "../../utils/useLocalStorage";
import RenderMainCard from "./RenderMainCard";
import RenderLinksCard from "./RenderLinksCard";
import { LinkContext } from "../contexts/linkContext";

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
