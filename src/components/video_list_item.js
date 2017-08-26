import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return(
        <li onClick={() => onVideoSelect(video)} className="media">
            <div className="video-list media">
                <div className="media-left">
                    <img className="d-flex mr-3" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="mt-0 mb-1">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;