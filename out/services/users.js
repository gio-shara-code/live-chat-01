"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserFromList = void 0;
function deleteUserFromList(users, currentUserId) {
    const tempUsers = [...users];
    const index = users.findIndex(user => user._id === currentUserId);
    tempUsers.splice(index, 1);
    return tempUsers;
}
exports.deleteUserFromList = deleteUserFromList;
