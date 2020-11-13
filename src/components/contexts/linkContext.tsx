import { createContext } from "react";
import { EncodedLink, EncodedLinkHandler } from "../../types/dataExchangeTypes";

export interface LinkContextValue {
  links: EncodedLink[];
  addLink: EncodedLinkHandler;
}

export const LinkContext = createContext<Partial<LinkContextValue>>({});
