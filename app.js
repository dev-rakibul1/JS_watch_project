// DOM calling
let hours = document.getElementById("hours");
let minutes = document.getElementById("minures");
let date = document.getElementById("date");

// date function
setInterval(() =>{
function ourDate(){
    // create date object
    let dateObject = new Date();
    let hr,min = (dateObject.getMinutes() < 10) ? "0" + dateObject.getMinutes() : dateObject.getMinutes();
    let sec = (dateObject.getSeconds() < 10) ? "0" + dateObject.getSeconds() : dateObject.getSeconds();
    let ho = (dateObject.getHours() >= 12) ? "PM" : "AM";

    if(dateObject.getHours() === 0){
        hr = 12;
    }else if(dateObject.getHours() > 12){
        hr = dateObject.getHours() - 12;
    }else{
        hr = dateObject.getHours();
    }

    let currentHours = hr + ":" + min + ":" + sec + " "+ ho;
   //console.log(currentHours)
    hours.innerHTML = currentHours;

    // Day & month array
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = dateObject.getDate(); 
    let week = daysInWeek[dateObject.getDay()];
    let month = monthArr[dateObject.getMonth()];
    let year = dateObject.getFullYear();


    let currentDay = [`${week}, ${day} ${month}, ${year}`];

    date.innerHTML = currentDay;

}


console.dir(ourDate())
// colling our date
    ourDate();
}, 1000);