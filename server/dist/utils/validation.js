"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHandShakeAuthNotValid = void 0;
const isHandShakeAuthNotValid = (handShakeAuth) => {
    return !handShakeAuth.nickname && !handShakeAuth._id;
};
exports.isHandShakeAuthNotValid = isHandShakeAuthNotValid;
