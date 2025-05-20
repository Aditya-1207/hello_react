//Adding divs to DOM using React
const parent = React.createElement(
    "div",
    {id :"parent"},
    React.createElement(
        "div",
        {id:"child"},
        //Array of sibiling elements
        [React.createElement(
            "h1",
            {},
            "This is h1"),
        React.createElement(
            "h2",
            {},
            "This is h2"),
        ]
    )
);

const root  = ReactDOM.createRoot(document.getElementById("root"));     //Creates a root node of DOM tree
root.render(parent);   //Converts the react object into actual HTML element h1

