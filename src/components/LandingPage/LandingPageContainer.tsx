import { Container } from "@material-ui/core";
import React from "react";

import { EncodedLink } from "../../types/dataExchangeTypes";
import useLocalStorage from "../../utils/useLocalStorage";
import RenderMainCard from "./RenderMainCard";
import RenderLinksCard from "./RenderLinksCard";

export default function LandingPageContainer(props: any) {
  const initialLinks: EncodedLink[] = [
    { id: 2, target: "https://davidhorstman.com", encodedPath: "me" },
  ];
  const [links, setLinks] = useLocalStorage<EncodedLink[]>("links", initialLinks);
  return (
    <div style={{ backgroundColor: "navy" }}>
      <Container maxWidth='md'>
        <RenderMainCard />
        {links && links.length > 0 &&  <RenderLinksCard links={links} />}
      </Container>
    </div>
  );
}
