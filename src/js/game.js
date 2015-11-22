export class Game {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	update() {
	}

	draw(ctx) {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, this.width, this.height);
	}
}