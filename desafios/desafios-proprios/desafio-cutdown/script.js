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
 
let futureDay = new Date(2023, 5, 10, 11,30, 0);

const date = futureDay.getDate();
const year = futureDay.getFullYear();
const hours = futureDay.getHours();
const minutes = futureDay.getMinutes();

let month = futureDay.getMonth();
month = months[month];

const weekday = weekdays[futureDay.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDay.getTime();//miliseconds of future day
console.log(futureTime);

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
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
  console.log(days);
  let hours = Math.floor((t%oneDay) / oneHour);
  console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000)

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
};

//coutdown
let coutdown = setInterval(getRemainingTime, 1000);
getRemainingTime();