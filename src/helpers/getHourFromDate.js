function getHourFromDate(dateString) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const formattedHour = hours % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";

  return `${formattedHour} ${ampm}`;
}

export default getHourFromDate;
