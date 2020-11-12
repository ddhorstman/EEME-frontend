export interface ShortenLinkRequest {
  target: string;
}

export interface EncodedLink {
  id: number;
  target: string;
  encodedPath: string;
}
