export default function getCurrentInfo(currentTime, hourlyTimes, hourlyData) {
  let closestIndex = 0;
  let minTimeDifference = Infinity;

  // Convert current time to Date object
  const currentDate = new Date(currentTime);

  hourlyTimes.forEach((time, index) => {
    const hourlyDate = new Date(time);
    const timeDifference = Math.abs(hourlyDate - currentDate);

    if (timeDifference < minTimeDifference) {
      minTimeDifference = timeDifference;
      closestIndex = index;
    }
  });
  return hourlyData[closestIndex];
}
