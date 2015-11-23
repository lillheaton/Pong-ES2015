export class Time {
	constructor() {
		this.lastTime = this._now();
		this.elapsed = 0.0; // seconds  (0.016)
		this.elapsedMs = 0.0;
		this.sinceStart = 0.0;
	}

	update(){
		let t = this._now();
		
		this.elapsedMs = t - this.lastTime;
		this.elapsed = this.elapsedMs / 1000.0;
		this.lastTime = t;
		this.sinceStart += this.elapsed;
	}

	_now(){
		return performance.now();
	}
}