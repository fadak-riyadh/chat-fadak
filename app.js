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


    button1.addEventListener("click", () => {
      const buttonValue1 = button1.getAttribute("value");
      sendButton.setAttribute("value", buttonValue1);
      //this.sendMessage("button1", chatBox, "Message from Button 1");
      //console.log("Button 1 Value:", buttonValue1);
    
    });

    button2.addEventListener("click", () => {
      const buttonValue2 = button2.getAttribute("value");
      sendButton.setAttribute("value", buttonValue2);
      //this.sendMessage("button2", chatBox, "Message from Button 2");
     // console.log("Button 2 Value:", buttonValue2);
    });

    const node = chatBox.querySelector("input");
    node.addEventListener("keyup", ({ key }) => {
      if (key === "Enter") {
        this.onSendButton(chatBox);
      }
    });

    // Add event listeners for more buttons as needed
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

  onSendButton(chatbox) {

      ///
      let  mysendButton = document.getElementsByTagName("button")[0];
      const sendButtonValue = mysendButton.getAttribute("value");

      if (sendButtonValue === "classification") {
        mysendButton.setAttribute("value", "classification");
        console.log(sendButtonValue);
      } else {
        mysendButton.setAttribute("value", "analysis");
        console.log(sendButtonValue);
      }
  /// 


    var textField = chatbox.querySelector('input');
    let text1 = textField.value
    if (text1 === "" ){
        return;
    }
    let msg1 = { name: "User" , message : text1 }
    this.messages.push(msg1) 


  /// 
}

updateChatText(chatbox) {
  var html = '';
  this.messages.slice().reverse().forEach(function (item, index) {
      if (item.name === "Sam"){
          html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
      } else  {
          html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
      }
  });
  const chatmessage = chatbox.querySelector('.chatbox__messages');
  chatmessage.innerHTML = html;
}


}


const chatbox = new Chatbox();
chatbox.display();
