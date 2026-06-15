import type { Notification } from "../types/notification";

export const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "user_joined",
    userName: "Carol Jar",
    isRead: false,
    createdAt: new Date(Date.now() - 54 * 60 * 1000),
  },
  {
    id: "2",
    type: "user_joined",
    userName: "Simona Winch",
    isRead: false,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
  },
  {
    id: "3",
    type: "review_cancelled",
    userName: "Jim Beam",
    companyName: "Example Company",
    isRead: true,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    type: "review_requested",
    userName: "Jim Beam",
    companyName: "Example Company",
    isRead: true,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "5",
    type: "review_requested",
    userName: "Peter Pan",
    companyName: "Example Company 2",
    isRead: true,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
];
