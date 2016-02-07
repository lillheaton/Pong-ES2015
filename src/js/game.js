import {GameHandler} from "./gameHandler"

export var gameWindow = {};

export class Game {
	constructor(width, height){
		this.keys = [];
		gameWindow.width = width;
		gameWindow.height = height;
		window.onkeydown = s => { this.keys[s.keyCode] = true; };
		window.onkeyup = s => { this.keys[s.keyCode] = false; }
 
		this.gameHandler = new GameHandler(this);
	}

	update(time) {
		this.gameHandler.update(time);
	}

	draw(ctx) {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

		this.gameHandler.draw(ctx);
	}
}