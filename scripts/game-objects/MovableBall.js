const DEFAULT_DIAMETER = 100;
const DEFAULT_SPEED = 10;
const ACCELERATION_DUE_TO_GRAVITY = 1;
const BOUNCE_ENERGY_LOSS_FACTOR = 0.9;

class MovableBall {

	constructor(x, y, gameEngine, diameter = DEFAULT_DIAMETER, speed = DEFAULT_SPEED) {
		this.x = x;
		this.y = y;
		this.diameter = diameter;
		this.radius = this.diameter / 2;
		this.speed = speed;
		this.gameEngine = gameEngine;
	}

	setId(id) {
		this.id = id;
	}

	tick() {
		this.draw();
	}

	userMove(keyStroke) {
		var moved = false
		switch(keyStroke) {
			case KEY_STROKES.MOVE_RIGHT:
				this.x += this.speed;
				return true;
			case KEY_STROKES.MOVE_LEFT:
				this.x -= this.speed;
				return true;
		}

		return moved;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	draw() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}