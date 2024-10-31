import { BaseEntity } from "typeorm";
import EmailHistory from "./email-history.entity";
import FacebookHistory from "./facebook-history.entity";
import HDOrder from "./hd-order.entity";
import SMSHistory from "./sms-history.entity";
import Transaction from "./transaction.entity";
import User from "./user.entity";
import VoiceHistory from "./voice-history.entity";
import WebChatHistory from "./web-chat-history.entity";
export default class Customer extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    number: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    status: string;
    department: string;
    priority: string;
    agent: string;
    whatsapp: string;
    instagram: string;
    messenger: string;
    telegram: string;
    wechat: string;
    avatar: string;
    facebookMessageSid: string;
    uid: string;
    responseTime: number;
    resolutionTime: number;
    userId: number;
    agentUserId: number;
    bid: string;
    mergedCustomers: string;
    completedDate: Date;
    createdDate: Date;
    updatedDate: Date;
    user: User;
    agentUser: User;
    sms: SMSHistory[];
    emails: EmailHistory[];
    voices: VoiceHistory[];
    facebook: FacebookHistory[];
    webchat: WebChatHistory[];
    transactions: Transaction[];
    hdOrders: HDOrder[];
}
