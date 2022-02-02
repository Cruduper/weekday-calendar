export default function dayNamer(year, month, day) {
  let date = new Date(year, month, day);
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return weekdays[date.getDay()];
}

