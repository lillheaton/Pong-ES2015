import {Rectangle} from "./rectangle"
import {gameWindow} from "./game"

const settings = {
	width: 20,
	height: 90
}

export class Paddle extends Rectangle {
	constructor(x, y, isAi){
		super(x, y, settings.width, settings.height)
		
		this.ai = isAi;
		this.speed = 0;
		this.acceleration = 10;
	}

	update(time, ball){
		this._calculateAi(ball);

		this.speed *= 0.95;
		this.y += this.speed / time.elapsedMs;

		if(this.y < 0){
			this.y = 0;
		} 
		else if(this.y + settings.height > gameWindow.height){
			this.y = gameWindow.height - settings.height;
		}
	}

	draw(ctx){
		ctx.fillStyle = "#FFF";
		ctx.fillRect(this.x, this.y, settings.width, settings.height);
	}

	moveUp() {
		this.speed += this.acceleration * -1;
	}

	moveDown(){
		this.speed += this.acceleration;
	}

	center(){
		return {
			x: this.x + settings.width / 2,
			y: this.y + settings.height / 2
		}
	}

	_calculateAi(ball){
		if(!this.ai)
			return;

		let centerY = this.y + settings.height / 2;
		if(ball.y > centerY)
			this.moveDown();
		else if(ball.y < centerY)
			this.moveUp();
	}

	static settings(){
		return settings;
	}
}