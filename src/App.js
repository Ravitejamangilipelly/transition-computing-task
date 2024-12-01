import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Conversation from "./components/Conversation";
import Messaging from "./components/Messaging";
import ActionLauncher from "./components/ActionLauncher";
import CaseFavorite from "./components/CaseFavorite";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <ProfileCard />
          <Conversation />
          <div className="right-panel">
            <Messaging />
            <ActionLauncher />
            <CaseFavorite />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
