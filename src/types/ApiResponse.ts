import { Message } from "@/model/User";

export interface ApiRespomse{
    success: boolean;
    message: string;
    isAcceptingMessages ?: boolean;
    messages ?: Array<Message>;
}