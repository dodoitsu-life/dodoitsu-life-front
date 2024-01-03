import { User } from "./User";
import { Theme } from "./Theme";
export interface Dodoitsu {
  id: string;
  content: string;
  createdAt: string;
  isLiked: boolean;
  likeCount: number;
  description?: string;
  author?: User;
  theme?: Theme;
}
