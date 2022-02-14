import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_EVENT = "newChatEvent";

const ChatHandle = (roomName) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    
    socketRef.current = socketIOClient("http://localhost:5556", {
      query: { roomName },
    });
    

    socketRef.current.on(NEW_CHAT_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomName]);


  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default ChatHandle;