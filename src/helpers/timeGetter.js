export default function getTimeFromDate(dateString) {
  const date = new Date(dateString);

  date.setHours(date.getHours());

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return time;
}
