//set variables for what it's like outside
var temperature = 72
var weather = "sunny"
var transportMode = "walking"

//based on weather and temperature should I wear a jacket?
if (temperature < 40 || weather === "rain") {
    document.write ("Wear a jacket!<br><br>");
}

//based on weather and mode of transportation do I need an umbrella?
if (weather === "rain" &&
transportMode === "walking") {
    document.write ("Take an umbrella<br><br>");
}
// Is it a gardening day?
if (!(temperature < 70 || weather === "rain")) {
    document.write ("Gardening day!<br><br>");
}