import {Game} from "./game";
import {Time} from "./util/time"

class Pong {
	constructor(){
		// Setup canvas
		this.canvas = document.getElementById('Game');
		this.canvas.width = document.body.clientWidth;
		this.canvas.height = document.body.clientHeight;
		this.ctx = this.canvas.getContext('2d');

		// Create Game 
		this.game = new Game(this.canvas.width, this.canvas.height);

		// Game time
		this.time = new Time();

		// Start main loop
		this.loop();
	}

	loop() {
		window.requestAnimationFrame(() => { this.loop() });
		this.time.update();
		this.game.update(this.time);
		this.game.draw(this.ctx);
	}
}

const pongGame = new Pong();