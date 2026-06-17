import type { Notification, NotificationType } from "@/types/notification";

type NotificationMessage = {
  actor: string;
  description: string;
  label: string;
};

const descriptionByType: Record<NotificationType, (notification: Notification) => string> = {
  user_joined: () => " joined your team.",
  review_requested: (notification) => ` from ${notification.companyName ?? "your company"} has requested a review`,
  review_cancelled: (notification) => ` from ${notification.companyName ?? "your company"} has cancelled their review request`,
};

export const getNotificationMessage = (notification: Notification): NotificationMessage => {
  const description = descriptionByType[notification.type](notification);

  return {
    actor: notification.userName,
    description,
    label: `${notification.userName}${description}`,
  };
};
