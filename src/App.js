import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // 🔹 
  const fullName = "YAP IAN KURTNEY S";
  const section = "IT3B";
  const subject = "C-PCIT9";

  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");

  // 🔹 Map of keys to messages
  const messages = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic",
    NAME: fullName.toUpperCase(),
    SUBJ: subject.toUpperCase(),
  };

  // 🔹 Listen for key presses
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (messages[key]) {
        setDisplayText(messages[key]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h2>{fullName} - {section}</h2>
      </header>
      <main>
        <h1>{displayText}</h1>
        <p className="hint">(Press keys 1–0, or type "NAME" or "SUBJ")</p>
      </main>
    </div>
  );
}

export default App;
