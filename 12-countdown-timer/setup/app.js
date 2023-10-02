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
const givaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4')
// console.log(items);


let tempDate = new Date();
let tempYear=tempDate.getFullYear()
let tepMonth=tempDate.getMonth()
let tempDat=tempDate.getDate()+10
let futureDate=new Date(tempYear,tepMonth,tempDat,11,3);


const year=futureDate.getFullYear();
const monthNom=futureDate.getMonth();
const date=futureDate.getDate()
const weaknom=futureDate.getDay()
const month=months[monthNom]
const weak=weekdays[weaknom]
const hours=futureDate.getHours()
const menit=futureDate.getMinutes()<10?`0${futureDate.getMinutes()}`:futureDate.getMinutes()
// console.log(futureDate)

givaway.textContent=`giveaway ends on ${weak}, ${date} ${month} ${year} ${hours} : ${menit} am `
const futureTime=futureDate.getTime();


function getRemainigTime(){
  const today=new Date().getTime()
  const t = futureTime-today;
  // 1s = 1000ms 
  // im=60s
  // 1hr = 60min
  //1d=24hr
  const oneDay=24*60*60*1000;
  const oneHours=60*60*1000;
  const oneMinite=60*1000;
  // caslculate all values
  let Remday=Math.floor(t/oneDay);
  let Remhours = Math.floor((t % oneDay)/oneHours);
  let Remmin = Math.floor((t % oneHours)/oneMinite)
  let Remsec = Math.floor((t % oneMinite)/1000)

  const values=[Remday,Remhours,Remmin,Remsec]
  function format (item){
    if(item<10){
      item =`0${item}`
    }
    return item
  }

  items.forEach((item,index)=>{
    item.innerHTML=format(values[index])
  })

  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML=`<h4 class='expired'>Sorry this giveaway has expired</h4>`
  }
}
let countdown = setInterval(getRemainigTime,1000)
getRemainigTime();