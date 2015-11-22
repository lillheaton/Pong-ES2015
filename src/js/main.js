import {Game} from "./game.js";

class Pong {
	constructor(){
		// Setup canvas
		this.canvas = document.getElementById('Game');
		this.canvas.width = document.body.clientWidth;
		this.canvas.height = document.body.clientHeight;
		this.ctx = this.canvas.getContext('2d');

		// Create Game 
		this.game = new Game(this.canvas.width, this.canvas.height);

		// Start main loop
		this.loop();
	}

	loop() {
		window.requestAnimationFrame(() => { this.loop() });
		this.game.update();
		this.game.draw(this.ctx);
	}
}

const pongGame = new Pong();