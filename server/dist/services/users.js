"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserFromList = void 0;
function deleteUserFromList(users, currentUserId) {
    return users.filter((user) => user._id !== currentUserId);
}
exports.deleteUserFromList = deleteUserFromList;
