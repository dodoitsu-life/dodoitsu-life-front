export interface Author {
  id: string;
  name: string;
  photo: string;
  twitterId: string;
  createdAt: Date;
}

export interface Dodoitsu {
  id: string;
  content: string;
  description?: string;
  author?: Author;
  createdAt: Date;
}
