

class BouncingBall {
	constructor(x, y, diameter = DEFAULT_DIAMETER, speed = DEFAULT_SPEED) {
		this.x = x;
		this.y = y;
		this.diameter = diameter;
		this.radius = this.diameter / 2;
		this.speed = speed;
		this.gameEngine = gameEngine;
	}

	tick() {
		this.gravity()
		this.move();
	}

	move() {
		this.y = Math.min(this.y + this.speed, gameEngine.getHeight() - this.radius);
		this.bounce();
	}

	bounce() {

		if (this.y + this.radius >= gameEngine.getHeight() || this.y - this.radius <= 0) {
			this.speed *= (-1 * BOUNCE_ENERGY_LOSS_FACTOR);
		}
	}

	gravity() {
		this.speed += ACCELERATION_DUE_TO_GRAVITY;
	}

	draw() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}

}