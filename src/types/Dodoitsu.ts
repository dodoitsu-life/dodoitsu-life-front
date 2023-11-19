import { User } from "./User";
export interface Dodoitsu {
  id: string;
  content: string;
  createdAt: string;
  isLiked: boolean;
  likeCount: number;
  description?: string;
  author?: User;
}
