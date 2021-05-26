export interface User {
  nickname: string;
  _id: string;
}

export interface Message {
  type: "message" | "connect" | "disconnect";
  fromId: string;
  timestamp: number;
  content: string;
  id: string;
}
