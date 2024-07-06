import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  age?: number | null;
  gender?: string | null;
  interests?: string | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
