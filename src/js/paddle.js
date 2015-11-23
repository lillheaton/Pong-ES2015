import {gameWindow} from "./game"

const settings = {
	width: 20,
	height: 90
}

export class Paddle {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	update(time){
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

	moveY(value) {
		this.y += value;
	}

	static settings(){
		return settings;
	}
}