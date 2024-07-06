import { MessageUpdateManyWithoutMatchesInput } from "./MessageUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  messages?: MessageUpdateManyWithoutMatchesInput;
  user1?: string | null;
  user2?: string | null;
};
