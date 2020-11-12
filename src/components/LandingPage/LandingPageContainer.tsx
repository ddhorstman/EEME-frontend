import React from "react";

import useLocalStorage from "../../utils/useLocalStorage";

export default function LandingPageContainer(props: any) {
  const [val, setVal] = useLocalStorage("val", true);
  return <div>Welcome!</div>;
}
