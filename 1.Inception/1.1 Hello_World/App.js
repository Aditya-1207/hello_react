const heading  =  React.createElement("h1",{id: "heading"},"Hello World from App.js "); //Returns a react object (not HTML element)
const root  = ReactDOM.createRoot(document.getElementById("root"));     //Creates a root node of DOM tree
root.render(heading);   //Converts the react object into actual HTML element h1