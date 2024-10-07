export default function getHourlyWeatherStartingFromNow(
  hourlyTimes,
  currentDateTime,
  limit = 24
) {
  const currentHour = currentDateTime.getUTCHours();
  const currentMinutes = currentDateTime.getUTCMinutes();
  const startIndex = hourlyTimes.findIndex((timeString) => {
    const hourDate = new Date(timeString);
    return (
      hourDate.getUTCDate() === currentDateTime.getUTCDate() &&
      (hourDate.getUTCHours() > currentHour ||
        (hourDate.getUTCHours() === currentHour &&
          hourDate.getUTCMinutes() >= currentMinutes))
    );
  });

  const validStartIndex =
    startIndex === -1 ? Math.max(0, hourlyTimes.length - limit) : startIndex;

  return hourlyTimes.slice(validStartIndex, validStartIndex + limit);
}
