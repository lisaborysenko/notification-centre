import { Button } from "@/uikit/Button";
import { Header } from "@/uikit/Header";
import { Popover, PopoverContent, PopoverTrigger } from "@/uikit/Popover";
import NotificationCard from "@/components/NotificationCard";
import { cn } from "@/lib/utils";
import { useNotifications } from "@/utils/hooks/useNotifications";
import { IconBell, IconCheck, IconSettings } from "@tabler/icons-react";
import { useState } from "react";

type NotificationFilter = "all" | "unread";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<NotificationFilter>("all");

  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();

  const visibleNotifications = activeFilter === "unread" ? notifications.filter((notification) => !notification.isRead) : notifications;

  return (
    <main className="min-h-screen bg-slate-50">
      <Header className="mx-auto flex h-18 w-full  justify-end gap-7 border-b bg-white px-12 py-0">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open notifications"
              className="relative size-8 rounded-full text-zinc-900 hover:bg-slate-100"
            >
              <IconBell className="size-6" stroke={1.7} />
              {unreadCount > 0 && (
                <sup className="absolute -top-1 -right-1 flex min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-xs leading-5 font-bold text-white">
                  {unreadCount}
                </sup>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-full max-w-2xl gap-0 rounded-lg border border-slate-200 bg-white p-0 shadow-xl ring-0">
            <header className="px-6 pt-6 pb-0">
              <h1 className="flex items-start gap-2 text-2xl leading-none font-semibold text-slate-900">
                Notifications
                {unreadCount > 0 && (
                  <sup className="-mt-1.5 flex min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-xs leading-5 font-bold text-white">
                    {unreadCount}
                  </sup>
                )}
              </h1>

              <nav aria-label="Notification filters and actions" className="mt-8 flex items-center gap-5">
                <menu className="flex list-none items-center gap-5 p-0">
                  <li>
                    <Button
                      variant={activeFilter === "all" ? "outline" : "secondary"}
                      onClick={() => setActiveFilter("all")}
                      aria-pressed={activeFilter === "all"}
                      className={cn(
                        "h-11 rounded px-5 text-sm font-semibold",
                        activeFilter === "all"
                          ? "border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-white"
                          : "border border-transparent bg-slate-100 text-slate-700",
                      )}
                    >
                      All Notifications
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant={activeFilter === "unread" ? "outline" : "secondary"}
                      onClick={() => setActiveFilter("unread")}
                      aria-pressed={activeFilter === "unread"}
                      className={cn(
                        "h-11 rounded px-5 text-sm font-semibold",
                        activeFilter === "unread"
                          ? "border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-white"
                          : "border border-transparent bg-slate-100 text-slate-700",
                      )}
                    >
                      Unread Notifications
                    </Button>
                  </li>
                </menu>

                <Button
                  variant="ghost"
                  onClick={markAllAsRead}
                  className="ml-auto h-8 gap-1.5 px-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                >
                  <i aria-hidden="true" className="relative flex w-7 items-center justify-center not-italic">
                    <IconCheck className="absolute left-0 size-4" stroke={2.2} />
                    <IconCheck className="absolute left-2.5 size-4" stroke={2.2} />
                  </i>
                  Mark all as read
                </Button>

                <Button variant="ghost" size="icon" aria-label="Notification settings" className="size-8 text-zinc-400 hover:bg-slate-100">
                  <IconSettings className="size-5" stroke={1.8} />
                </Button>
              </nav>
            </header>

            <section
              aria-label="Notifications list"
              className="mt-6 max-h-96 overflow-x-hidden overflow-y-auto overscroll-contain px-4 pb-6"
            >
              <ul className="space-y-2.5">
                {visibleNotifications.length > 0 ? (
                  visibleNotifications.map((notification) => (
                    <li key={notification.id}>
                      <NotificationCard notification={notification} onMarkAsRead={markAsRead} />
                    </li>
                  ))
                ) : (
                  <li className="px-7 py-12 text-center text-base font-medium text-zinc-500">You're all caught up.</li>
                )}
              </ul>
            </section>
          </PopoverContent>
        </Popover>
      </Header>
    </main>
  );
};

export default Home;
