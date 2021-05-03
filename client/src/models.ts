export interface Message {
    type: 'message' | 'connect' | 'disconnect'
    from: string;
    content?: string;
    timestamp: number;
    id: string
}

export interface User {
    nickname: string,
    _id: string
}
