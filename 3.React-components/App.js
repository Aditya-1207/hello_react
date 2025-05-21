import React from "react";
import ReactDOM from "react-dom/client"

//JavaScript variable
const heading = (
    <h3>H3 Heading from pure JavaScript</h3>
)
//Add Functional component for Component Composition
const Title = () => {
    return <h1>H1 Heading from React Component</h1>
}



//React Functional Component
const FunctionalHeader = () => {
    return (<div id="container">        
                 <Title/>                                       {/*Way of adding a React Component    */}
                 <Title></Title>                                {/*Another Way of adding a React Component    */}
                <h2>This is h2 from functional Component</h2>   {/*Way of adding a JSX */}
                {heading}                                       {/*Way of adding a Normal JavaScript  */}
                {Title()}                                       {/*Way of adding a React component as a JavaScript function  */}
            </div>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));
//Render will convert the react element into HTML element 
root.render(<FunctionalHeader/> );
