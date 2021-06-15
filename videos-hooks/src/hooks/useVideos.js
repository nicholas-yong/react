import { useState, useEffect } from "react";
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) =>
{
    const[videos, setVideos] = useState([]);

    //Roughly equivalent to componentDidMount()
    useEffect( () =>
    {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);


    const search = async term =>
    {
        const response = await youtube.get( '/search',
            {
                params:
                {
                    q: term
                }
            });
        
        setVideos(response.data.items);
    };

    //Return an array as per the React Tradition
    return [videos, search]
}
export default useVideos;