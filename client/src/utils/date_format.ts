export function getChatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    let minute: string = date.getMinutes().toString(), hour:string = date.getHours().toString();

    if(date.getMinutes() <= 9) minute = `${0}${minute}`;
    if(date.getHours() <= 9) hour = `${0}${hour}`;
    
    return `${hour}:${minute}`;
}