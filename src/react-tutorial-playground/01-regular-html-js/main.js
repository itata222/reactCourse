const form = document.getElementById("form-messages");
const divMessages = document.getElementById("div-messages");
// form.className = "blue";

const messages = [];

function createMessage(message, index) {
	const div = document.createElement("div");
	const divMessage = document.createElement("div");
	divMessage.innerHTML = message;
	divMessage.className = index % 2 === 0 ? "message blue" : "message yellow";

	const button = document.createElement("button");
	button.className = "message";
	button.innerHTML = "Delete";
	button.addEventListener("click", () => {
		messages.splice(index, 1);
		renderMessages();
	});
	div.appendChild(divMessage);
	div.appendChild(button);
	return div;
}

function renderMessages() {
	while (divMessages.children.length > 0) {
		divMessages.removeChild(divMessages.lastChild);
	}

	if (messages.length === 0) {
		const div = document.createElement("div");
		div.innerHTML = "No messages";
		divMessages.appendChild(div);
		return;
	}

	for (let i = 0; i < messages.length; i++) {
		divMessages.appendChild(createMessage(messages[i], i));
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	messages.push(form.children[0].value);
	form.children[0].value = "";
	renderMessages();
});
