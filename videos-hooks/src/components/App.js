import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

//We might need a VM if we are running some node js API. However, since we are not running any code and just returning JSX, we do not need to actually run it onto a VM.

const App = () =>
{
    //The piece of state is defined inside useVideos still counts as a piece of state in this functional component, hence it is still re-rendered.
    const[videos, search] = useVideos('buildings');
    const[selectedVideo, setSelectedVideo] = useState(null);

    useEffect( () =>
    {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className = "ui container">
            <SearchBar onFormSubmit = {search} />
            <div className = "ui grid">
                <div className = "ui row">
                    <div className = "eleven wide column">
                        <VideoDetail video = {selectedVideo} />
                    </div>
                    <div className = "five wide column">
                        {/* One arguement functions can be passed directly through without using the arrow key syntax, as it explicitly identifies that the callback will eventually be invoked with an arguement. */}
                        <VideoList onVideoSelect = {setSelectedVideo} videos = {videos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;