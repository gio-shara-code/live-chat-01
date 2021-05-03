export interface User {
    nickname: string;
    _id: string
} 

export interface Message {
    type: 'message' | 'connect' | 'disconnect'
    from: string,
    timestamp: number,
    content: string,
    id: string
}