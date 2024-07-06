import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  age?: IntNullableFilter;
  gender?: StringNullableFilter;
  id?: StringFilter;
  interests?: StringNullableFilter;
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
