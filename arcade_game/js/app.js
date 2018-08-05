// Enemies our player must avoid
var Enemy = function(row, speed) {
    this.sprite = 'images/enemy-bug.png';

    this.x = 0;
    // sets the y value, based on specified row
    this.y = row * 75;
    this.speed = speed;

    // the width and height will be used for collision detection
    this.width = 100;
    this.height = 60;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.move(dt);
    this.collidingWithPlayer();
};

//enemy moves in horizontal line
Enemy.prototype.move = function(dt) {
    this.x += this.speed * dt;
};

Enemy.prototype.collidingWithPlayer = function() {
    //detect whether player and enemy rectangles overlap
    var playerX = player.getX() + 20;
    var playerY = player.getY() + 60;
    var playerWidth = player.getWidth();
    var playerHeight = player.getHeight();

    // retrieve player variables to create a player rectangle
    // these values are used for collision detection
    // x, y coordinates need to be adjusted for proper use in rectangle
    if (this.x < playerX + playerWidth &&
        this.x + this.width > playerX &&
        this.y + 80 < playerY + playerHeight &&
        this.height + this.y + 80 > playerY) {

        // if overlapped, trigger a loss and move Player to starting position
        player.reset("loss");
    }
};

Enemy.prototype.randomSpeed = function(minSpeed, maxSpeed) {
    this.speed = Math.floor(Math.random() * maxSpeed + minSpeed);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    this.sprite = 'images/char-boy.png';

    // initial player position
    this.x = 200;
    this.y = 400;

    // width & height for collision detection
    this.width = 60;
    this.height = 80;

    // without any commands given, direction will start without a value
    this.direction = "none";

    //player starts with a score of 0
    this.score = 0;

    //this is the character index 0 to 4, initially 0
    //each number represent a different character
    //you can switch in the game by press the key 'c'
    this.character = 0;
};

Player.prototype.update = function(dt) {

    //draw a colorful gradient rectangle score board
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, 150, 30);

    //update and print score points
    ctx.clearRect(15, 15, 140, 20);
    ctx.font = "bold 20pt arial";
    ctx.fillText("Score: " + this.score, 20, 35);

    // use the direction to move the player
    switch (this.direction) {

        // if the direction is left, move Player to the left one slot
        // unless Player is about to go off the border
        case 'left':
            if (this.x >= 20) {
                this.x -= 100;
            }
            break;

            // if the direction is up, move Player up one slot
        case 'up':
            this.y -= 80;
            break;

            // if the direction is right, move Player right one slot
            // unless Player is about to go off the border
        case 'right':
            if (this.x <= 350) {
                this.x += 100;
            }
            break;

            // if direction is down, move Player down one slot
            // unless Player is about to go off the border
        case 'down':
            if (this.y <= 360) {
                this.y += 80;
            }
            break;
    }

    // reset the direction to none
    this.direction = "none";

    //change the player picture by pressing 'c'
    //a total of five characters to switch around
    switch (this.character) {

      case 0:
      this.sprite = 'images/char-boy.png';
      break;

      case 1:
      this.sprite = 'images/char-cat-girl.png';
      break;

      case 2:
      this.sprite = 'images/char-horn-girl.png';
      break;

      case 3:
      this.sprite = 'images/char-pink-girl.png';
      break;

      case 4:
      this.sprite = 'images/char-princess-girl.png';
      break;
    }

    // if the player has reached the water,
    // call the reset function, and trigger a win
    if (this.y <= 70) {
        this.reset("win");
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {

    //handles direction keys
    this.direction = keyCode;

    //handles character change key 'c'
    if (keyCode == 'c') {
      this.character += 1;
      if (this.character > 4) {
        this.character = 0;
      }
    }
};

// returns player's x coordinate
// for use in collision detection by Enemy instances
Player.prototype.getX = function() {
    return this.x;
};

// returns player's y coordinate
// for use in collision detection by Enemy instances
Player.prototype.getY = function() {
    return this.y;
};

// returns player's width property,
// for use in collision detection by Enemy instances
Player.prototype.getWidth = function() {
    return this.width;
};

// returns plater's height property,
// for use in collision detection by Enemy instances
Player.prototype.getHeight = function() {
    return this.height;
};


// Return player to starting location
// Input: outcomt - "loss" or "win"
Player.prototype.reset = function(outcome) {
    // reset starting position in either outcome
    this.x = 200;
    this.y = 400;

    // if outcome is loss, reset score to 0
    if (outcome == "loss") {
        this.score = 0;
    // if the outcome is a win, add 10 points to score
    } else if (outcome == "win") {
        this.score += 10;
    }
};

// ---------- instantiate player and enemy objects ------------------

// All enemy objects are added to an array called allEnemies
var allEnemies = [];

// spawn enemies at a regular interval
var myVar;

function spawnEnemies() {
    myVar = setInterval(enemySpawner, 1000);
}

// function for creating a random number within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function for spawning enemies in a random row
// and at a random speed (within acceptable speeds)
function enemySpawner() {
    var row = getRandomInt(1, 3);
    var speed = getRandomInt(150, 250);
    allEnemies.push(new Enemy(row, speed));
}

// Begin spawning enemies every interval
spawnEnemies();

// player object saved in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        67: 'c'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
