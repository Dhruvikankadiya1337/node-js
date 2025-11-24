import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainFeed from "./components/createtweet";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainFeed />
    </div>
  );
}

export default App;
