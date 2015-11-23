import {PaddleHandler} from "./paddleHandler"

export var gameWindow = {};

export class Game {
	constructor(width, height){
		this.keys = [];
		gameWindow.width = width;
		gameWindow.height = height;
		window.onkeydown = s => { this.keys[s.keyCode] = true; };
		window.onkeyup = s => { this.keys[s.keyCode] = false; }

		this.paddleHandler = new PaddleHandler(this);
	}

	update(time) {
		this.paddleHandler.update(time);
	}

	draw(ctx) {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, gameWindow.width, gameWindow.height);

		this.paddleHandler.draw(ctx);
	}
}