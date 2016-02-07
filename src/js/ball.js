import {Rectangle} from "./rectangle"
import {gameWindow} from "./game"
import {Paddle} from "./paddle"

const settings = {
	size: 20	
}

export class Ball extends Rectangle {
	constructor(x,y){
		super(x, y, settings.size, settings.size)

		this._startX = x;
		this._startY = y;

		this.speed = 5;
		this.maxBounceAngle = 5*Math.PI/12;
		this.bounceAngle = Math.PI*1.3;
	}

	draw(ctx){
		ctx.fillStyle = "#FFF";
		ctx.fillRect(this.x, this.y, settings.size, settings.size);
	}

	update(time, paddles){
		this.x += this.speed * Math.cos(this.bounceAngle);
		this.y += this.speed * Math.sin(this.bounceAngle);

		if(this.x + settings.size > gameWindow.width || this.x < 0)
			this._reset();

		for(let p of paddles){
			if(this.intersect(p)){
				let relativeIntersectY = p.center().y - this.y;
				let normalizedRelativeIntersectionY = relativeIntersectY / (Paddle.settings().height / 2);
				this.bounceAngle = (normalizedRelativeIntersectionY * this.maxBounceAngle) * -1;
			}
		}

		console.log(this.bounceAngle);

		if(this.y + settings.size > gameWindow.height || this.y < 0){
			this.bounceAngle *= -1;
		}
	}

	_reset(){
		this.x = this._startX;
		this.y = this._startY;
	}

	static settings(){
		return settings;
	}
}