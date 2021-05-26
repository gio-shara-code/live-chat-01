import { User } from "../interfaces";

export function deleteUserFromList(users: User[], currentUserId: string) {
  return users.filter((user) => user._id !== currentUserId);
}
