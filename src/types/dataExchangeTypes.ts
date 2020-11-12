export interface ShortenLinkRequest {
  target: string;
}

export interface ShortenedLink {
  id: number;
  target: string;
  encodedPath: string;
}
