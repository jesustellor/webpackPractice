import React from "react";

function MyButt() {
    return (
      <button>
        I'm a button
      </button>
    );
  }
  
  export default function MyAp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButt />
      </div>
    );
  }