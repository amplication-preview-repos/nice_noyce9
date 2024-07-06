import { Match } from "../match/Match";
import { User } from "../user/User";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  match?: Match | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
