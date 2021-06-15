import React from 'react'

const Link = ({className, href, children}) =>
{
    const onClick = (event) =>
    {
        //mac == meta key
        //windows = ctrl key
        if(event.metakey || event.ctrlKey)
        {
            return;
        }


        event.preventDefault();
        //use browser default function window.history.pushState( {}, empty string, new pathname )
        window.history.pushState({}, '', href);
        //Purpose of this code is to tell the Route component that the URL just changed.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    };


    return <a className = {className} href = {href} onClick = {onClick}>
        {children}
        </a>
};

export default Link;