import React from "react";
import ReactDOM from "react-dom/client";


//React Element

const heading = (
    <h1 className="head" tabIndex="5">
        Namaste React using react element
     </h1>
)

//React funtional Component
const Heading =() =>(
    <div>
        <h1>Namaste react form functional Component</h1>
    </div>
)

const jsxHeading = <h1> Namaste react from Jsx</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
