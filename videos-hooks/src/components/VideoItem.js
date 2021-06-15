import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>
{
    //The reason why we use () => onVideoSelect(video) instead of onVideoSelect(video) is because the latter provides a function to the render method, and it is called everytime the component is re-rendered.
    //However, () => onVideoSelect(video) binds it to the onClick eventHandler instead, which means that it will only be called if the onClick event is triggered.
    return <div onClick = {() => onVideoSelect(video)} className = "video-item item">
                <img alt = {video.snippet.title} src = {video.snippet.thumbnails.medium.url} className = "ui image" />
                <div className = "content">
                    <div className = "header">
                        {video.snippet.title}
                    </div>
                </div>
           </div>
};

export default VideoItem;