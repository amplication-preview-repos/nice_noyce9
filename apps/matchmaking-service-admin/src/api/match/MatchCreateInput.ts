import { MessageCreateNestedManyWithoutMatchesInput } from "./MessageCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  messages?: MessageCreateNestedManyWithoutMatchesInput;
  user1?: string | null;
  user2?: string | null;
};
