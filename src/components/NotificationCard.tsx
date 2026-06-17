import type { Notification, NotificationType } from "@/types/notification";
import { cn } from "@/lib/utils";
import { formatRelativeTime } from "@/utils/date";
import { getNotificationMessage } from "@/utils/notifications";
import { IconFileText, IconTrashX, IconUserCircle } from "@tabler/icons-react";

interface NotificationCardProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

const iconMap = {
  user_joined: IconUserCircle,
  review_requested: IconFileText,
  review_cancelled: IconTrashX,
} as const;

const iconColorMap: Record<NotificationType, string> = {
  user_joined: "bg-blue-600",
  review_requested: "bg-blue-600",
  review_cancelled: "bg-pink-700",
};

const NotificationCard = ({ notification, onMarkAsRead }: NotificationCardProps) => {
  const message = getNotificationMessage(notification);
  const NotificationIcon = iconMap[notification.type];

  return (
    <button
      type="button"
      onClick={() => onMarkAsRead(notification.id)}
      className={cn(
        "flex min-h-20 w-full items-start gap-4 px-5 py-5 text-left transition hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none",
        notification.isRead ? "bg-white" : "bg-slate-100",
      )}
    >
      <span aria-hidden="true" className={cn("flex size-10 items-center justify-center rounded-full", iconColorMap[notification.type])}>
        <NotificationIcon className="size-5 text-white" stroke={1.7} />
      </span>
      <span className="min-w-0 flex-1 pt-0.5">
        <span className="block max-w-96 text-sm leading-5 text-slate-700">
          <strong className="font-semibold text-zinc-800">{message.actor}</strong>
          {message.description}
        </span>
        <time className="mt-1 block text-xs font-semibold leading-4 text-zinc-500" dateTime={notification.createdAt.toISOString()}>
          {formatRelativeTime(notification.createdAt)}
        </time>
      </span>
      {!notification.isRead && <data aria-label="Unread" className="size-3 rounded-full bg-blue-500" value="unread" />}
    </button>
  );
};

export default NotificationCard;
