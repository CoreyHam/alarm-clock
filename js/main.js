
// Date

const date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
if (month == 1) {
    month = "January"
}
if (month == 2) {
    month = "Febuary"
}
if (month == 3) {
    month = "March"
}
if (month == 4) {
    month = "April"
}
if (month == 5) {
    month = "May"
}
if (month == 6) {
    month = "June"
}
if (month == 7) {
    month = "July"
}
if (month == 8) {
    month = "August"
}
if (month == 9) {
    month = "September"
}
if (month == 10) {
    month = "October"
}
if (month == 11) {
    month = "November"
}
if (month == 12) {
    month = "December"
}
var day = date.getDate();


var dateString = month + " " + day + ", " + year;

document.getElementById("dateDisplay").innerHTML = dateString;

// Time

let mindnight = false;
let checkHours = 0;

const toggle = document.querySelector('#flexSwitchCheckDefault');
console.log(toggle.checked);

function updateTime() {
    var currentTime = new Date()
    if(toggle.checked == true){
        var hours = currentTime.getHours()
        if(hours == 0){
            hours = "00";
        }

    } else { 
        var hours = currentTime.getHours()
        if(hours == 0){
            let mindnight = true;
            hours = "12";
            checkHours = "0"
        } else {
            let mindnight = false;
        }
        if(hours > 12){
                checkHours = hours
                hours = hours - 12
            }
            
        }
        console.log(hours)
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var seconds = currentTime.getSeconds()
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if(toggle.checked == true){
        var timeString = hours + ":" + minutes + ":" + seconds;
    } else {

        var timeString = hours + ":" + minutes + ":" + seconds + " ";
        if (checkHours > 11) {
            timeString += "PM";
        } else {
            timeString += "AM";
        }
    }
        document.getElementById('timeDisplay').innerHTML = timeString;

    
}

let setIntervalSwitch = true;
function setIntervalToggler(){
    if(setIntervalSwitch = true){
        setInterval(updateTime, 1000);

    } else {
        clearInterval(updateTime())
    }
}
setInterval(updateTime, 1000);


// Alarms

function newAlarmButton(){
    document.getElementById('screenDimmer').style.visibility = "visible";
    console.log("it works")
}
function closeNewAlarm(){
    document.getElementById('screenDimmer').style.visibility = "hidden";
    console.log("it works")
}
function submitNewAlarm(){
    var input = document.getElementById("timeInput").value;
    input = input + ":00"
    console.log(input)
    document.getElementById('alarmDisplay').innerHTML = "Alarm set for " + input;
    document.getElementById('screenDimmer').style.visibility = "hidden";
    document.getElementById('alarmDisplay').style.visibility = "visible";
}


function updateAlarm(){
    //grab time from alarmDisplay

    timeSet = document.getElementById('alarmDisplay').textContent
    timeSet = timeSet.replace("Alarm set for ","")
    console.log(timeSet)

    //grab time from timeDisplay

    currentTime = document.getElementById('timeDisplay').textContent
    currentTime = currentTime.split(" ").shift();
    console.log(currentTime)

    //compare

    if(timeSet == currentTime){
        alert("TIME'S UP!")
        document.getElementById('resetButton').style.visibility = "visible";
    }
}

setInterval(updateAlarm, 1000);


function resetButtonFunc(){
    document.getElementById('resetButton').style.visibility = "hidden";
    document.getElementById('alarmDisplay').style.visibility = "hidden";

    setInterval(updateTime, 1000)
}
