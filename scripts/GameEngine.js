class GameEngine {

	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.remotesById = new Map();
		this.remotesById.set("99", new RemoteBall(500, 500))
		this.local = new MovableBall(100, 100);
		this.backendConnector = new BackendConnector(this.onStateUpdate.bind(this));
	}

	getWidth() {
		return this.width;
	}

	getHeight() {
		return this.height;
	}

	addLocal(gameObj) {
		this.locals.push(gameObj);
	}

	addRemote(gameObj) {
		this.remotes.push(gameObj);
	}

	tick() {
		// Update local ball
		this.local.tick();


		// this.remotesById.keys().forEach(function (gameObj) { gameObj.tick() });

		this.drawObjects();
	}

	drawObjects() {
		fill(255, 0, 0);
		this.local.draw();
		// console.log(this.backendConnector.id)

		fill(0, 255, 0);
		this.remotesById.forEach(function(value, key) {
			value.draw();
		})
	}

	onStateUpdate(remotes) {
		const that = this;
		// console.log(remotes)
		Object.keys(remotes).forEach(function(key) {
			const val = remotes[key]
			const remoteBall = new RemoteBall(val.x, val.y)
			that.remotesById.set(key, remoteBall)
		})
	}

	onClick(mouseX, mouseY) {
		// this.addLocal(new BouncingBall(mouseX, mouseY));
		return false;
	}

	onKeyPress(keyCode) {
		const moved = this.local.userMove(keyCode);
		if (moved) {
			this.backendConnector.updateLocal(this.local.getX(), this.local.getY());
		}
		
	}
}

