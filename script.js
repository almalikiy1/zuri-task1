let dayRef = document.getElementById("day");
let DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateToday = new Date();
let dayToday = dateToday.getDay();
dayRef.innerHTML = `Today is <span>${DaysOfWeek[dayToday]}</span>`;

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const d = new Date();
let h = addZero(d.getUTCHours());
let m = addZero(d.getUTCMinutes());
let s = addZero(d.getUTCSeconds());
let time = h + ":" + m + ":" + s;
document.getElementById("demo").innerHTML = time;