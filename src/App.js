import React from "react";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import UserPageContent from "./components/page-content/dashboard/user-page-content";

function App() {
  return (
    <div>
      <NavBar />
      <UserPageContent />
    </div>
  );
}

export default App;
