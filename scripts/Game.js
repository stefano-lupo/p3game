
var gameEngine;

function setup() {
	const WIDTH = displayWidth * 0.7;
	const HEIGHT = displayHeight * 0.7;
	// frameRate(15);
	createCanvas(WIDTH, HEIGHT);
	gameEngine = new GameEngine(WIDTH, HEIGHT);
}

function draw() {
	background(0);
	gameEngine.tick();

	if (keyIsPressed) {
		const gameCommand = translateKeyCode(keyCode);
		if (gameCommand) {
			gameEngine.onKeyPress(gameCommand);
		}
	}
}

function mouseClicked() {
	gameEngine.onClick(mouseX, mouseY);
}

function translateKeyCode(keyCode) {
	switch (keyCode) {
		case LEFT_ARROW:
			return KEY_STROKES.MOVE_LEFT;
		case RIGHT_ARROW:
			return KEY_STROKES.MOVE_RIGHT;
		case DOWN_ARROW:
			return KEY_STROKES.MOVE_DOWN;
		case UP_ARROW:
			return KEY_STROKES.MOVE_UP;
		default:
			return null;
	}
}
