import "./App.css";
import { useState } from "react";
import axios from "axios";
import Component from "./components/component";
import ColorChangeComponent from "./components/colorChangeComponent";
import Timer from "./components/timer/index";

function App() {
  return (
    <div className="App">
      <Component />
      <ColorChangeComponent />
      <Timer />
    </div>
  );
}

export default App;
