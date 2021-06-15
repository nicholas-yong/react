import React, { useState } from 'react';

const Accordian = ({items}) =>
{
    //Example of array destructuring. Shortcut to get access to some elements inside an array.
    //E.G: const colors = ['red', 'green']
    // const redColor = colors[0]
    // const greenColor = colors[1]

    //Versus

    //Array destructuring
    //const [firstElement, secondElement] =  colors gets the first and second element(0 and 1) of the colors array and automatically assigns the values inside the firstElement and secondElement constant variables.

    //Hence, the function useStae creates an array containing two elements.
    //Index 0 contains the piece of state that we are trying to keep track of.
    //Index 1 is the function that we call to update that piece of state. (i.e: Calling this function causes the whole component to automatically re-render)
    //The arguement to useState gives the initial value to the item in the first index (null in this case).
    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClick = (index) =>
    {
        //As soon as we call a setter function, the component is automatically re-rendered.
        //Remember that once a functional component is re-rendered, the default value placed to the useState function is no longer used. (null in this case)
        //Presumably this would also be extended to the other state constants.
        setActiveIndex(index);
    };



    const renderedItems = items.map( ( item, index ) =>
    {
        const active = index === activeIndex ? 'active': '';

        return (
            <React.Fragment key = {item.title}>
                <div
                    onClick = {() => onTitleClick(index)} 
                    className = {`title ${active}`} 
                >
                    <i className = "dropdown icon"></i>
                    {item.title}
                </div>
                <div className = {`content ${active}`} >
                    <p>{item.content}</p>
                </div>
            </React.Fragment >
        );        
    });
    return <div className = "ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordian;