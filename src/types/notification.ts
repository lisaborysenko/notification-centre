export type NotificationType = "user_joined" | "review_requested" | "review_cancelled";

export interface Notification {
  id: string;
  type: NotificationType;
  userName: string;
  companyName?: string;
  isRead: boolean;
  createdAt: Date;
}
