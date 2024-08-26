import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Du hast ${count} Mal geklickt!`;
  }, [count]);

  return (
    <div>
      <p>Du hast {count} Mal geklickt!</p>
      <button onClick={() => setCount(count + 1)}>Klick mich!</button>
    </div>
  );
}

export default App;
