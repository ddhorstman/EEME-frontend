import { Container } from "@material-ui/core";
import React from "react";

import useLocalStorage from "../../utils/useLocalStorage";
import RenderMainCard from "./RenderMainCard";

export default function LandingPageContainer(props: any) {
  const [val, setVal] = useLocalStorage("val", true);
  return (
    <div style={{ backgroundColor: "navy" }}>
      <Container maxWidth='md'>
        <RenderMainCard />
      </Container>
    </div>
  );
}
