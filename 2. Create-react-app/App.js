import React from "react";
//import ReactDOM from "react-dom"; Throws error in react 19 as createRoot moved to react-dom/client
import { createRoot } from 'react-dom/client';


const heading  =  React.createElement("h1",{id: "heading"},"Hello World from App.js "); //Returns a react object (not HTML element)
const root  = createRoot(document.getElementById("root"));     //Creates a root node of DOM tree
root.render(heading);   //Converts the react object into actual HTML element h1