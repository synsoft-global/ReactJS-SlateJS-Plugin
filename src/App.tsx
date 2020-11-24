import React, { useState, useRef } from "react";
import "./App.css";
import BreakBlock from "./breakBlock";
import BorderedBlock from "./borderedBlock";

export default function App() {
  return (
    <div className="App">
      <BreakBlock />
      <BorderedBlock />
    </div>
  );
}
