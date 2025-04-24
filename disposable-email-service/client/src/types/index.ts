// client/src/types/index.ts

export interface Email {
    address: string;
    messages: Message[];
    ttl: number; // Time to live in seconds
}

export interface Message {
    id: string;
    subject: string;
    body: string;
    timestamp: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}