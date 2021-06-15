import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ( {options, selected, onSelectedChange, label}) =>
{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    //Empty Array causes useEffect to only run once.
    //DOM manual event listerners awlays occur first (prior to any react generated ones). (Manual refers to one generated with addEventListener.)
    //Whenever we remove an element from the DOM, that ref property attached to the component gets set to NULL.
    //However, if we still have an event handler setup, then that will end up in an error.
    //Hence, if we remove a component from the DOM, we should also remove any attached eventListners.
    useEffect( () =>
    {
        const onBodyClick = (event) =>
        {
            //If the click came from an element that was generated inside the Dropdown component, return immediately. Else, run the setOpen setState function to close the dropdown component.
            if(ref.current.contains(event.target))
            {
                return;
            }
            else
            {
                setOpen(false);
            }
        };

        document.body.addEventListener( 'click', onBodyClick, {capture: true});

        //The other scenario where the cleanup function is called when the component is removed from the DOM entirely.
        return () =>
        {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
    }, []);
    
    const renderedOptions = options.map((option) =>
    {
        if( option.value === selected.value )
        {
            return null;
        }
        return(
            <div key = {option.value} className = "item" onClick = {() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    //UseRef allows us to get a reference to DOM Elements and refer to them that way.
    return (
        <div ref = {ref} className = "ui form">
        <div className = "field">
            <label className = "label">{label}</label>
                <div onClick = {() => setOpen(!open)} className= {`ui selection dropdown ${open ? "visible active" : ""}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className= {`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
                </div>
        </div>
    </div>
    );
};

export default Dropdown;