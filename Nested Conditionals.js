var player1score = 30
var player2score = 30
if (player1score > player2score) {
    println ("Player1 is the winner!");
} else {
    if(player2score > player1score) {
        println ("Player2 is the winner!");
    } else {
        println ("It's a tie!");
    }
}



var level;

if (rating <5000) {
    level = "mild";
} else if (rating < 20000) {
        level = "medium";
    } else if (rating < 70000) {
            level = "hot";
        } else {
            level = "extreme";
        }
    



var isNeutered = true;
var isDog = false;
var weightLB = 13;

//Calculate weight in KG and RER (Resting Energy Requirement)
var weightKG = weightLB / 2.2;
var restingEnergyReq = 70 * Math.pow (weightKG, 0.75);

//Output daily caloric needs
if (isDog) {
    if (isNeutered) {
        println (1.6 * restingEnergyReq);
    } else {
        println (1.8 * restingEnergyReq);
    }
} else { //is cat!
    if (isNeutered){
        println (1.2 * restingEnergyReq);
    } else {
        println (1.4 * restingEnergyReq);
    }
}