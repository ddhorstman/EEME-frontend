export interface ShortenLinkRequest {
  target: string;
}

export interface EncodedLink {
  id: number;
  target: string;
  encodedPath: string;
}

export type EncodedLinkHandler = (link: EncodedLink | void ) => void;

export interface EEMEServerResponse {
  data: EncodedLink;
}