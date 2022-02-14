import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import LoginPage from "./LoginPage/LoginPage";
import ChatRoom from "./ChatRoom/ChatRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/:roomName/:userName" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
