const day = document.getElementById("day");
const Cdate = document.getElementById("date");

let date = new Date();
const CurrentDay = () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const crrDay = weekday[date.getDay()];
    return crrDay;
}
const currentDate = ()=>{
    const month = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    ]
let crrmonth = month[date.getMonth()]; 

let currDate = date.getDate();
return `${currDate} ${crrmonth}`
}
day.innerHTML = CurrentDay();
Cdate.innerHTML = currentDate();