class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
            buttonContainer: document.querySelector('.button-container'),
            button1: document.querySelector('.chatbox__button-1'),
            button2: document.querySelector('.chatbox__button-2'),
            // Add more buttons here as needed
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton, buttonContainer, button1, button2 } = this.args;

        openButton.addEventListener('click', () => {
            this.toggleState(chatBox);
            buttonContainer.style.display = 'flex';
        });

        sendButton.addEventListener('click', () => this.onSendButton(chatBox));

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatBox);
            }
        });

        button1.addEventListener('click', () => {
            this.sendMessage(chatBox, "Message from Button 1");
        });

        button2.addEventListener('click', () => {
            this.sendMessage(chatBox, "Message from Button 2");
        });

        // Add event listeners for more buttons as needed
    }

    sendMessage(chatbox, message) {
        const messagesContainer = chatbox.querySelector('.chatbox__messages');
        const messageItem = document.createElement('div');
        messageItem.textContent = message;
        messageItem.classList.add('messages__item', 'messages__item--visitor');
        messagesContainer.appendChild(messageItem);
    }

    toggleState(chatbox) {
        this.state = !this.state;
        // show or hide the box
        if (this.state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }
}

const chatbox = new Chatbox();
chatbox.display();
