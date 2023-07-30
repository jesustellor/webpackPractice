import React from "react";
import { useState } from "react";


function App() {
  const [state, setState] = useState(0);

  const handleChange = () => {
    const value = setState(state + 1);
    return value;
  };

    return (
      <button className="avatar" onClick={handleChange}>
        Button Pressed {state}
      </button>
    );
  }

  export default App;