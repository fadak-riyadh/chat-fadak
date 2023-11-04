class Chatbox {
  constructor() {
    this.args = {
      openButton: document.querySelector(".chatbox__button"),
      chatBox: document.querySelector(".chatbox__support"),
      sendButton: document.querySelector(".send__button"),
      buttonContainer: document.querySelector(".button-container"),
      button1: document.querySelector(".chatbox__button-1"),
      button2: document.querySelector(".chatbox__button-2"),
      // Add more buttons here as needed
    };

    this.state = false;
    this.messages = [];
  }

  display() {
    const {
      openButton,
      chatBox,
      sendButton,
      buttonContainer,
      button1,
      button2,
    } = this.args;

    openButton.addEventListener("click", () => {
      this.toggleState(chatBox);
      buttonContainer.style.display = "flex";
    });

    sendButton.addEventListener("click", () => this.onSendButton(chatBox));

    const node = chatBox.querySelector("input");
    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        this.onSendButton(chatBox);
      }
    });

    button1.addEventListener("click", (event) => {
      this.sendMessage("button1", chatBox, "Message from Button 1");
    });

    button2.addEventListener("click", (event) => {
      this.sendMessage("button2", chatBox, "Message from Button 2");
    });

    // Add event listeners for more buttons as needed
  }

  sendMessage(selectedBtn, chatbox, message, btnValue) {
    let messagesContainer;
    if (selectedBtn === "button1") {
      // btn 1
      messagesContainer = chatbox.querySelector(".msg-1");
    } else {
      // btn 2
      messagesContainer = chatbox.querySelector(".msg-2");
    }
    messagesContainer.textContent = message;
    messagesContainer.classList.add(
      "messages__item",
      "messages__item--visitor"
    );
  }

  toggleState(chatbox) {
    this.state = !this.state;
    // show or hide the box
    if (this.state) {
      chatbox.classList.add("chatbox--active");
    } else {
      chatbox.classList.remove("chatbox--active");
    }
  }
}

const chatbox = new Chatbox();
chatbox.display();
