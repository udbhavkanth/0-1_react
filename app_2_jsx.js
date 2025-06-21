import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
    "h1",
    {id : "heading"},
    "namaste React"
);

const jsxHeading = <h1> Namaste react from Jsx</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
