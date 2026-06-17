const MINUTE_IN_MS = 60_000;
const HOUR_IN_MINUTES = 60;
const DAY_IN_HOURS = 24;

const relativeTimeFormatter = new Intl.RelativeTimeFormat("en", {
  numeric: "auto",
});

export const formatRelativeTime = (date: Date, now = new Date()) => {
  const rawDiffInMinutes = Math.round((date.getTime() - now.getTime()) / MINUTE_IN_MS);
  const diffInMinutes = rawDiffInMinutes || (date.getTime() >= now.getTime() ? 1 : -1);
  const absoluteMinutes = Math.abs(diffInMinutes);

  if (absoluteMinutes < HOUR_IN_MINUTES) {
    return relativeTimeFormatter.format(diffInMinutes, "minute");
  }

  const diffInHours = Math.round(diffInMinutes / HOUR_IN_MINUTES);
  const absoluteHours = Math.abs(diffInHours);

  if (absoluteHours < DAY_IN_HOURS) {
    return relativeTimeFormatter.format(diffInHours, "hour");
  }

  return relativeTimeFormatter.format(Math.round(diffInHours / DAY_IN_HOURS), "day");
};
