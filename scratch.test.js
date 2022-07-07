var expect = chai.expect;

describe ("WarFunctions", function() {
    describe ("#declareWinner", function(){
        it ("should log the final score and name the winner", function(){
            let declareWinner = (`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. ${player1.name} wins!`);
            expect(declareWinner).to.equal(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. ${player1.name} wins!`);
        });
    });
});







// declareWinner () {
//     if (this.players[0].score > this.players[1].score){
//         console.log(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. ${player1.name} wins!`)
//         // console.log(`${player1.name} wins!`)
//     }    
//     else if (this.players[0].score < this.players[1].score){
//         console.log(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. ${player2.name} wins!`)
//         // console.log(`${player2.name} wins!`)
//     }
//     else {
//         console.log(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. It's a tie!`)
//         // console.log("It's a tie!")
//     }
// }
// }