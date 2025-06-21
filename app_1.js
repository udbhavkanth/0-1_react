import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => Object => HTMLElement(render)
//this code is showcasing how react work under the hood
const heading = React.createElement(
    "h1",
    {id : "heading"},
    "namaste React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
