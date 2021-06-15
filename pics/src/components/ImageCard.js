import React from 'react';

class ImageCard extends React.Component
{
    //Remember, changing the state of a component always causes it to re-render.
    //We only put data into the state if we expect it to change over time.

    //React Refs
    //Give access to a single DOM element.
    //We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props.
    constructor(props)
    {
        super(props);

        //Create an image ref
        this.imageRef = React.createRef();

        this.state = {spans: 0};
    }

    componentDidMount()
    {
        //We need to use a callback here as this is called immediately after render, and so accessing the image height here directly (this.imageRef.current.clientHeight) will return 0 as the image has not actually loaded into the DOM.
        //Hence, we should only try to access the height after it has become available.
        
        //Hence, we need to add an eventListener to the load event of the image and attach a function as a callback.
        this.imageRef.current.addEventListener( 'load', this.setSpans );
    }

    setSpans = () =>
    {
        //Wait till the event loads then we only get the clientHeight of it.
        //We also know each row must be equal to 10px.

        const height = this.imageRef.current.clientHeight;

        //Get the number of spans required.
        const spans = Math.ceil(height/10)
        //Update the state object.
        this.setState( {spans: spans });
    }


    render()
    {
        const {description, urls} = this.props.image;
        return(
            <div style = {{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref = {this.imageRef} alt = {description} src = {urls.regular} />
            </div>
        )
    }
}

export default ImageCard;