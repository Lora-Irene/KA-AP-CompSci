//set variables for what day and time it is
var currentDay = "Friday";
var currentTime = 17; //24-hour time

//Daily Bedtime
if (currentTime >= 20.5) {
    document.write ("Time for bed!");
}

//Monday- Friday work
if ((currentDay === "Monday" || 
currentDay === "Tuesday" ||
currentDay === "Wednesday" ||
currentDay === "Thursday" ||
currentDay === "Friday") && 
currentTime >= 7 && currentTime <= 16) {
    document.write ("You should be at work now!");
}

//Monday- Friday Study Time
if ((currentDay === "Monday" || 
currentDay === "Tuesday" ||
currentDay === "Wednesday" ||
currentDay === "Thursday" ||
currentDay === "Friday") && 
currentTime >= 16 && currentTime <= 20.5) {
    document.write ("Time to study Comp Sci!");
}

//Weekend Play
if (currentDay === "Saturday" ||
currentDay === "Sunday") {
    document.write ("Enjoy your day off!");
}
