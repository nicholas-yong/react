import React from 'react';
import './SeasonDisplay.css';


//Configuration object (makes it very easy to see the object and data used as well as makes it easy to update.)
const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'massive sun icon'
    },
    winter: {
        text: 'Burr, it\'s chilly!',
        iconName: 'massive snowflake icon'
    }
}

const getSeason = (lat, month) =>
{
    if( month > 2 && month < 9)
    {
        return lat > 0 ? 'summer':'winter';
    }
    else
    {
        return lat > 0 ? 'winter':'summer';
    }
};

const SeasonDisplay = (props) =>
{
    const season = getSeason(props.lat, new Date().getMonth())
    //This will return the object with the text and iconName inside of it.
    const {text, iconName} = seasonConfig[season] // {text, iconName}


    //We can also put any sort of JS expression inside the curly brackets.
    //Remember that template strings can also be considered a form javascript expression, which is why we need to wrap them inside the {} identifier.
    return(
        //make sure that the class name of the root element in the JSX matches the name of the component.
        <div className = {`season-display ${season}`}>
            <i className = {`icon-left ${iconName}`} />
            <h1>{text}</h1>
            <i className = {`icon-right ${iconName}`} />
        </div>
    )
};

export default SeasonDisplay;