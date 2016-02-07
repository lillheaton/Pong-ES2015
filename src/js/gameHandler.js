import {Paddle} from "./paddle"
import {gameWindow} from "./game"
import {Ball} from "./ball"

export class GameHandler {
	constructor(game){
		this.game = game;
		this.paddles = [];
		this.ball = null;
		this.setup(game)
	}

	setup(game){
		// Create paddles
		let padding = Paddle.settings().width;

		this.paddles.push(new Paddle(padding, 0, false));
		this.paddles.push(new Paddle(gameWindow.width - padding * 2, 0, true));

		// Create ball
		let centerSize = Ball.settings().size / 2;
		this.ball = new Ball(gameWindow.width / 2 - centerSize, gameWindow.height / 2 - centerSize);
	}

	update(time) {
		if(this.game.keys[38]){
			this.paddles[0].moveUp();	
		}
		if(this.game.keys[40]){
			this.paddles[0].moveDown();
		}

		for (let p of this.paddles){
			p.update(time, this.ball);
		}

		this.ball.update(time, this.paddles);
	}

	draw(ctx){
		// Draw the paddles
		for (let p of this.paddles){
			p.draw(ctx);
		}

		// Draw the ball
		this.ball.draw(ctx);
	}
}