import React from "react";
import { useParams } from 'react-router-dom';
import ChatHandle from "../ChatHandle";

import "./ChatRoom.css";

const ChatRoom = () => {
  const { roomName, userName } = useParams();
  const { messages, sendMessage } = ChatHandle(roomName);
  const [newMessage, setNewMessage] = React.useState("");

  var dt = new Date();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    if(hours < 10)
      hours = "0"+hours;
    if(minutes < 10)
      minutes = "0"+minutes;
    sendMessage(`[${hours}:${minutes}] ${userName}: ${newMessage}`);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Pokój: {roomName}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <ul
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? "my-message" : "received-message"
              }`}
            >
              {message.body}
            </ul>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Napisz wiadomość"
        className="message-input"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Wyślij
      </button>
    </div>
  );
};

export default ChatRoom;