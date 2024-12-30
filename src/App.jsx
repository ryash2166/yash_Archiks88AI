import React from "react";
import Navbar from "./Components/Navbar.jsx/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
