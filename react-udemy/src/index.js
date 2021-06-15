// Import the React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () =>
{
    const buttonText = "Click on Me!";

    return (
        <div>
            <label className = "label" htmlFor ="name">Enter Name:</label>
            <input id = "name" type = "text"/>
            <button style = {{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    );
};

// Take the react component and show it on the screen.
ReactDOM.render( <App />, document.querySelector('#root'));