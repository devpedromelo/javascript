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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
 
// let futureDay = new Date(2023, 5, 15, 15,30, 0);
const futureDay = new Date(tempYear, tempMonth, tempDay + 10, 11,30, 0);

const date = futureDay.getDate();
const year = futureDay.getFullYear();
const hours = futureDay.getHours();
const minutes = futureDay.getMinutes();

let month = futureDay.getMonth();
month = months[month];

const weekday = weekdays[futureDay.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDay.getTime();//miliseconds of future day

function getRemainingTime(){
  const today = new Date().getTime();//miliseconds now
  const t = futureTime - today;
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1day = 24hr 

  //values in ms
  const oneDay = 24*60*60*1000; //transformando em milisegundos de um dia
  const oneHour = 60*60*1000;//transformando em milisegundos de uma hora
  const oneMinute = 60*1000;//transformando em milisegundos de um dia
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array

  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  if(t < 0){
    clearInterval(coutdown);
    deadline.innerHTML = `<h4 class="expired"> sorry, this giveaway has expired</h4>`
  }~;
};

//coutdown
let coutdown = setInterval(getRemainingTime, 1000);
getRemainingTime();