//Set Variables
var player1score = 30
var player2score = 30

//Who is the winner based on score?
if (player1score > player2score) {
    println ("Player1 is the winner!");
} else {
    if(player2score > player1score) {
        println ("Player2 is the winner!");
    } else {
        println ("It's a tie!");
    }
}
