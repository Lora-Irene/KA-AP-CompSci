//set variables for what it's like outside
var temperature
var weather
var transportMode

//based on weather and temperature should I wear a jacket?
if (temperature < 40 || weather === "rain") {
    println ("Wear a jacket!");
}

//based on weather and mode of transportation do I need an umbrella?
if (weather === "rain" &&
transportMode === "walking") {
    document.write ("Take an umbrella")
}