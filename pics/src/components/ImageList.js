import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) =>
{
    //In order to allow react to easily identify what items need to be added/removed from the DOM, we need to an ID to each element (each image to use the example below).
    //Having keys just makes react identifiy things faster, improving performance (for lists of items).
    //Below is also an example of object destructuring.
    const images = props.images.map( ( image ) =>
    {
        //Adding a key to the img
        //We only need to assign the key to the root element that's storing everything.
        return <ImageCard key = {image.id} image = {image} /> 
    });

    return <div className = "image-list">{images}</div>
}

export default ImageList