import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Dio" /> {/* This is a rendered functional component */}
    <NameTag name="Shawnie" />
    <NameTag name="Myles" />
    <NameTag name="Ashtyn" />
  </div>
);

{
  /* Above is a arrow funtiona and functional component that uses the component and prop from the "NameTag.js" module */
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
{
  /* This code tells the console and broswser to render whatever functional component comes before the "," - in this instance, that would be the "<App />" functional component */
}
