import { mockNotifications } from "@/data/notifications";
import type { Notification } from "@/types/notification";
import { useCallback, useMemo, useState } from "react";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const unreadCount = useMemo(() => notifications.filter((notification) => !notification.isRead).length, [notifications]);

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) => prev.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)));
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, isRead: true })));
  }, []);

  return { notifications, unreadCount, markAsRead, markAllAsRead };
};
