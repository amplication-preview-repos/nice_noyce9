import { Message } from "../message/Message";
import { JsonValue } from "type-fest";
import { Profile } from "../profile/Profile";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  profilePicture: JsonValue;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
