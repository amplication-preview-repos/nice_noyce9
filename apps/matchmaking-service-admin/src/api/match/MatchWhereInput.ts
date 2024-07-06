import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};