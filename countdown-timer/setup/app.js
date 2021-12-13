const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// hardcoded future date
// const futureDate = new Date(2021, 11, 31, 11, 15);

//dynamic future date (always 10 ahead of current date)
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 15);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${futureDate.getDate()} ${month} ${year} ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  let t = futureTime - today;
  // console.log(t);
  // 1 s = 1000ms
  // 1 m = 60s
  // 1hr = 60min
  // 1d = 24hr

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 className="expired">So sorry, this giveaway has expired!</h4>`;
  }
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate all values
  const days = Math.floor(t / oneDay);
  t %= oneDay;
  const hours = Math.floor(t / oneHour);
  t %= oneHour;
  const minutes = Math.floor(t / oneMin);
  t %= oneMin;
  const seconds = Math.floor(t / 1000);
  t %= 1000;

  // set values array
  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });
}

function format(time) {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
}

let countdown = setInterval(getRemainingTime, 1000);
console.log(countdown);
