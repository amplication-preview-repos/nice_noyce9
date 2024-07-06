import { User } from "../user/User";

export type Profile = {
  age: number | null;
  createdAt: Date;
  gender: string | null;
  id: string;
  interests: string | null;
  location: string | null;
  updatedAt: Date;
  user?: User | null;
};
