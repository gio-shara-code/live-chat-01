import { User } from "../interfaces";

export const isHandShakeAuthNotValid = (handShakeAuth: User) => {
  return !handShakeAuth.nickname && !handShakeAuth._id;
};
