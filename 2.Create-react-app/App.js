import React from "react";
import ReactDOM from "react-dom/client"

//Create heading using JSX
//JSX is a html-like syntax
//Babel converts the JSX into React element
const heading = <h1 id="heading">Heading from JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
//Render will convert the react element into HTML element
root.render(heading);
