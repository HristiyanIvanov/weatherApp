export default function getShortDayNames(dateStrings) {
  return dateStrings.map((dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", { weekday: "short" });
  });
}
