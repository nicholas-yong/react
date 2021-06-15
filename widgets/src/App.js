import React from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate  from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import { useState, useEffect } from 'react';

const items = 
[
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },

    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },

    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = 
[
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
]

export default () =>
{
    const [selected, setSelected] = useState(options[0]);
    return(
    <div>
        <Header/>
       <Route path = "/">
           <Accordion items = {items}></Accordion>
       </Route>
       <Route path = "/list">
           <Search/>
       </Route>
       <Route path = "/translate">
           <Translate/>
       </Route>
       <Route path = "/dropdown">
           <Dropdown label = "Select a color" options = {options} selected = {selected} onSelectedChange = {setSelected} />
       </Route>
    </div>
    );
}