import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  match?: MatchWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
