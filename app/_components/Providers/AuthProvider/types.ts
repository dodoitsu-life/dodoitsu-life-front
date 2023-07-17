import { User } from "@/src/types/User";
export type AuthContextType = {
  user: User | null;
  logIn: (userData: User) => void;
  logOut: () => void;
};
