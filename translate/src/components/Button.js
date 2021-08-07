import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component{
    render()
    {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className = {`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => value.language === 'english' ? 'Submit' : 'Voorlegen'}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button