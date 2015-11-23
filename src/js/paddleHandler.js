import {Paddle} from "./paddle"
import {gameWindow} from "./game"

export class PaddleHandler {
	constructor(game){
		this.game = game;
		this.paddles = [];
		this.setupPaddles(game)
	}

	setupPaddles(game){
		let padding = Paddle.settings().width;

		this.paddles.push(new Paddle(padding, 0));
		this.paddles.push(new Paddle(gameWindow.width - padding * 2, 0));
	}

	update(time) {
		if(this.game.keys[38]){
			this.paddles[0].moveY(-5);	
		}
		if(this.game.keys[40]){
			this.paddles[0].moveY(5);
		}

		for (let p of this.paddles){
			p.update(time);
		}
	}

	draw(ctx){
		for (let p of this.paddles){
			p.draw(ctx);
		}
	}
}