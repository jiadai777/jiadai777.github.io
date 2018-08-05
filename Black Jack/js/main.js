var deck = [];
var player_cards = [];
var ai_cards = [];
var player_finished = true;
var ai_finished = true;
var game_over = true;

function Card(value, name, suit, img_url){
	this.value = value;
	this.name = name;
	this.suit = suit;
	this.img_url = img_url
}

function create_deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['hearts','diamonds','spades','clubs'];
	var img_string;
	var cards = [];
    
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
        	var value = n + 1;
        	if (value == 1) {
        		img_string = "ace_of_" + this.suits[s] + ".png";
        	} else if (value == 11) {
        		value = 10;
        		img_string = "jack_of_" + this.suits[s] + ".png";
        	} else if (value == 12) {
        		value = 10;
        		img_string = "queen_of_" + this.suits[s] + ".png";
        	} else if (value == 13) {
        		value = 10;
        		img_string = "king_of_" + this.suits[s] + ".png";
        	} else {
        		img_string = value + "_of_" + this.suits[s] + ".png";
        	}

            cards.push( new Card( value, this.names[n], this.suits[s], "img/" + img_string ) );
        }
    }

    return cards;
}

function display_time() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if (s < 10) {
		s = "0" + s;
	}

	if (h < 12) {
		return (h + ":" + m + ":" + s + " am: ");
	} else {
		return ((h - 12) + ":" + m + ":" + s + " pm: ");
	}
}

function reset_game() {

	$("#actions").prepend("<p>" + display_time() + "You started the game. Press Restart Game anytime when you want to start a new game.</p>");

	deck = create_deck();
	player_cards = [];
	ai_cards = [];

	player_finished = false;
	ai_finished = false;
	game_over = false;
	player_drew = false;
	ai_drew = false;

	$(".card").remove();

	$("#start-btn").text("Restart Game");
	$("#result").text("Game Result: In Progress");
	$("#player-score").text("Your total: 0");
	$("#ai-score").text("Opponent total: 0");
}

function player_win() {
	$("#result").text("Game Result: You Win!");
	$("#actions").prepend("<p>" + display_time() + "You won the game! Press Restart Game to begin another game.</p>");
	ai_finished = true;
	game_over = true;
}

function player_lose() {
	$("#result").text("Game Result: You Lose!");
	$("#actions").prepend("<p>" + display_time() + "You lost the game! Press Restart Game to begin another game.</p>");
	player_finished = true;
	game_over = true;
}

function game_draw() {
	$("#result").text("Game Result: It's a Draw!");
	$("#actions").prepend("<p>" + display_time() + "Nobody won the game! Press Restart Game to begin another game.</p>");
	game_over = true;
}

// check the highest possible total of a hand
function check_hands(hands) {
	var hand = 0;

	for (i = 0; i < hands.length; i++) {
		if (hands[i].value == 1) {
			if((hand + 11) <= 21) {
				hand += 11;
			} else {
				hand += 1;
			}
		} else {
			hand += hands[i].value;
		}
	}

	return hand;
}

// check the pure total without countin Ace as 11
function check_pure_total(hands) {
	var hand = 0;

	for (i = 0; i < hands.length; i++) {
		hand += hands[i].value;
	}

	return hand;
}

function compare_total() {
	if (check_hands(player_cards) < check_hands(ai_cards)) {
		player_lose();
	} else if (check_hands(player_cards) > check_hands(ai_cards)) {
		player_win();
	} else {
		game_draw();
	}
}

function player_draw() {

	if (!player_finished && !game_over) {
		var deck_index = Math.floor(Math.random() * deck.length);
		var card = deck[deck_index];
	
		$("#player-cards").append("<img src=" + card.img_url + " class=card>");
		player_cards.push(card);
		deck.splice(deck_index, 1);
		var total = check_hands(player_cards);

		$("#actions").prepend("<p>" + display_time() + "You drew a card.</p>");
		$("#player-score").text("Your total: " + total);

		if(total > 21) {
			player_lose();
		} else if (!ai_finished) {
			ai_action();
		}
	}
}

function computer__draw() {

	if (!ai_finished && !game_over) {
		var deck_index = Math.floor(Math.random() * deck.length);
		var card = deck[deck_index];

		$("#ai-cards").append("<img src=" + card.img_url + " class=card>");
		ai_cards.push(card);
		deck.splice(deck_index, 1);
		var total = check_hands(ai_cards);

		$("#ai-score").text("Opponent total: " + total);
		$("#actions").prepend("<p>" + display_time() + "Your opponent drew a card.</p>");

		if(total > 21) {
			player_win();
		}
	}
	
}

function ai_action() {

	var total = check_hands(ai_cards);
	if (total < 12 || total < check_hands(player_cards)){
		computer__draw();
	} else {
		ai_finished = true;
		$("#actions").prepend("<p>" + display_time() + "Your opponent finished drawing.</p>");
	}	
}

function player_finish() {
	if (!player_finished) {
		player_finished = true;
		$("#actions").prepend("<p>" + display_time() + "You finished drawing.</p>");
	}

	while (!ai_finished && !game_over) {
		ai_action();
	}

	if (!game_over) {
		compare_total();
	}
}