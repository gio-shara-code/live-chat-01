import { User } from "../models";

export function deleteUserFromList(users: User[], currentUserId: string){
    const tempUsers = [...users]
    const index = users.findIndex(user => user._id === currentUserId)
    tempUsers.splice(index, 1)
    return tempUsers
} 