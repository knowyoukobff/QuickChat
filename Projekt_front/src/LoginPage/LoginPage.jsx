import React from "react";
import { Link } from "react-router-dom";

import "./LoginPage.css";

const LoginPage = () => {
  const [roomName, setRoomName] = React.useState("");
  const [userName, setUserName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="login-page-container">
      <h1>QuickChat</h1>
      <input
        type="text"
        placeholder="Podaj nazwę pokoju"
        value={roomName}
        onChange={handleRoomNameChange}
        className="roomInput"
      />
      <input
        type="text"
        placeholder="Podaj nazwę użytkownika"
        value={userName}
        onChange={handleUserNameChange}
        className="userInput"
      />
      <Link to={`/${roomName}/${userName}`} className="enter-room-button">
        Dołącz
      </Link>
    </div>
  );
};

export default LoginPage;