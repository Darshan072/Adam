import React from "react";
import "./App.css";

function App() {
  return (
      <h1>
        hello
        <br />
        {process.env.REACT_APP_NAME}

        <br />

        Address :   {process.env.REACT_APP_ADDRESS}

        <br />
        Country :   {process.env.REACT_APP_COUNTRY}

      </h1>
    );
}

export default App;
