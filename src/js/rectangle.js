
export class Rectangle {
	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}



	left(){
		return this.x;
	}

	right(){
		return this.x + this.width;
	}

	top(){
		return this.y;
	}

	bottom(){
		return this.y + this.height;
	}

	intersect(r){

		if(r.left() < this.right() && this.left() < r.right() && r.top() < this.bottom()){
			return this.top() < r.bottom();
		}
		return false;
/*
		return !(this.left > r.right ||
				this.right < r.left ||
				this.top > r.bottom ||
				this.bottom < r.top);*/
	}
}

/*
if (rect.X < this.X + this.Width && this.X < rect.X + rect.Width && rect.Y < this.Y + this.Height)
    return this.Y < rect.Y + rect.Height;
  else
    return false;

    */