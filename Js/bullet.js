class bullet {

	constructor(x,y,sin,cos,lvl,bLvl,id){

		this.w = 7;
		this.h = 7;
		this.x = x - this.w/2;
		this.y = y - this.h/2;
		let speed = 4+lvl*.2;
		this.vx = cos*speed;
		this.vy = sin*speed;

		this.lvl = lvl;
		this.bLvl = bLvl;
		this.cllsn = false;
		this.id = id;
	}

	update(){

		this.x += this.vx;
		this.y += this.vy;
	}

	draw(){
		ctx.fillStyle = 'rgb(' + (100 + (255-100)*this.lvl/(this.lvl+2)) + ',' + (40 + this.lvl*3) + ',' + (80 + this.lvl*7) + ')';
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}


}