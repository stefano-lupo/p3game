const WS_URL = "ws://localhost:8025/websockets/game/state";

class BackendConnector {
	constructor(onStateUpdate) {
		this.ws = new WebSocket(WS_URL);
		this.ws.onopen = this.onServerConnect;
		this.ws.addEventListener("message", this.handleMessage.bind(this));
		this.onStateUpdate = onStateUpdate;
		this.id = null;
	}

	onServerConnect() {
		console.log("Succesfully connected with WS")
	}

	handleMessage(message) {
		const parsed = JSON.parse(message.data);
		if (parsed.messageType === "ID_INFORM") {
			this.id = parsed.id;
			return;
		}
		this.onStateUpdate(parsed.gameObjectMap)
	}

	updateLocal(x, y) {
		const message = {
			gameObject: {x, y},
			messageType: "NODE_UPDATE"
		}
		this.sendMessage(JSON.stringify(message))
	}

	sendMessage(message) {
		if (this.id) {
			this.ws.send(message)
		} else {
			console.log("Skipping message as not open");
		}
	}
}
 