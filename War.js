class Card {
    constructor (suit, value, description) {
        this.description = description;
        this.suit = suit;
        this.value = value;
    }
}
// combines all of the suits and ranks to create a full deck, maps a value to face cards
class Deck {
    constructor (){
        this.deckOfCards = [];
        this.createHand();
    }
    createHand() {
        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        const ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','Ace'];
        const ranksMap = {
            'J': 11,
            'Q': 12,
            'K': 13,
            'Ace': 14
        };

        for (let suit in suits){
            for (let rank in ranks){
                const r = ranks[rank];
                this.deckOfCards.push(new Card(suits[suit], ranksMap[r] || r,`${ranks[rank]} of ${suits[suit]}`));
           }
    
        }
    }
}

class Player {
    constructor (name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

class startGame {
    constructor (deck, players){
    this.deck = deck;
    this.players = players;
   
    }

    shuffleCards () {
        
        for (let i = this.deck.deckOfCards.length - 1; i > 0; i--){
            let x = Math.floor(Math.random() * (i + 1));
            let y = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[x];
            this.deck.deckOfCards[x] = y;
             }
    
         }

    dealCards () {
        let list = this.deck.deckOfCards;
        let half = Math.ceil(list.length / 2);
        this.players[0].hand = list.slice(0, half);
        this.players[1].hand = list.slice(-half);
      
            }
        

    // each player lays down a card as long as their hand contains more than 0 cards, each card is displayed and the player with the high card is awarded a point
    playCards () {
        this.score = 0;
        while (this.players[0].hand.length > 0 && this.players[1].hand.length > 0){
               const cards1 = this.players[0].hand.shift();
               const cards2 = this.players[1].hand.shift();
               

            if (cards1.value > cards2.value){
                this.players[0].score +=1;
                console.log(`${player1.name} played ${cards1.description} and ${player2.name} played ${cards2.description}. ${player1.name} won this round!`);
            }
            else if (cards1.value < cards2.value){
                this.players[1].score += 1;
                console.log(`${player1.name} played ${cards1.description} and ${player2.name} played ${cards2.description}. ${player2.name} won this round!`);
        }
            else  {
                console.log(`${player1.name} played ${cards1.description} and ${player2.name} played ${cards2.description}. It's a tie!`);
    
                }
            }
    }
    // compares players score and announces winner
    declareWinner () {
            if (this.players[0].score > this.players[1].score){
                console.log(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. ${player1.name} wins!`)
            }    
            else if (this.players[0].score < this.players[1].score){
                console.log(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. ${player2.name} wins!`)
            }
            else {
                console.log(`${player1.name} scored ${player1.score} and ${player2.name} scored ${player2.score}. It's a tie!`)
            }
    }
}

    
    let fullDeck = new Deck();
    let player1 = new Player("Lexie");
    let player2 = new Player("Mark");


    const game = new startGame(fullDeck, [player1, player2]);
    
    game.shuffleCards();
    game.dealCards();
    game.playCards();
    game.declareWinner();  
    



