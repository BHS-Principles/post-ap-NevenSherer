var CARD = document.getElementById(".card");
var TARGET = document.getElementById("target");
var TEMP = document.getElementById("temp")

class Card {
    constructor (i) {
        this.id = i;
        this.suit = Math.floor(i / 13);
        this.val = i % 13 + 1
        this.background = "cards.png";
        this.suits = ["H", "S", "C", "D"];
    }

    get_suit() {
        return this.suit;
    }

    get_down() {
        var card_copy = CARD.cloneNode(true);
        return card_copy;
    }

    draw() {
        var card_copy = CARD.cloneNode(true);
        card_copy.innerHTML = "silver" + this.id;
        card_copy.style.backgroundPositionX = -(this.id) + "00%";
        card_copy.style.backgroundPositionY = -Math.floor(this.id / 13) + "00%";
        TARGET.append(card_copy)
    }
}

class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
    }
}

class Deck {
    constructor (num_of_cards) {
        this.card_count = num_of_cards;
        this.cards = [];
        this.make();
        this.shuffle();
    }

    make() {
        for (var i = 0; i < this.card_count; i++) {
            var card = new Card(i);
            this.cards.push(card);
        }
        return this.cards;
    }

    shuffle() {
        for (var i = 0; i < this.card_count; i++) {
            let rand = Math.floor(Math.random() * this.card_count);
            let temp = this.cards[i];
            this.cards[i] = this.cards[rand];
            this.cards[rand] = temp;
        }
    }
}

class Game {
    constructor (size, players) {
        this.deck = new Deck(size);
        this.players = [];
        for (var i = 0; i < players; i++) {
            let temp_player = new Player(String("player_" + i));
            this.players[i] = temp_player;
        }
        this.next_card = 0;
        this.current_player = 0;

        this.start_game()
    }

    start_game() {
        this.deal(1);
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
        this.fight();
    }

    end_game() {
        console.log('deck ran out. game over.')
    }

    deal(cards_per_person) {
        for (var i = 0; i < (cards_per_person * this.players.length); i++){
            this.draw()
        }
    }

    draw() {
        this.players[this.current_player].hand.push(this.deck.cards[this.next_card]);
        this.current_player++;
        if (this.current_player >= this.players.length) {
            this.current_player = 0;
        }
        this.next_card++;
        if (this.next_card >= 52) {
            this.end_game();
        }
    }

    fight() {
        var field = []
        this.players[0].hand[0].id 
        for (var i = 0; i < this.players.length; i++) {
            field.push(this.players[i].hand[0].val);
            this.discard(this.players[i]);
        }

        let winners = arrayAllMaxIndexes(field);
        let winner_announcement = "The winners are player(s): "

        for (var i = 0; i < winners.length; i++) {
            winner_announcement += (winners[i] + 1) + " ";
        }

        this.deal(1);

        console.log(winner_announcement)
    }

    discard(player) {
        player.hand = []
    }
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function arrayAllMaxIndexes(array) {
    return getAllIndexes(array, Math.max.apply(null, array));
}

var game = new Game(52, 4);