import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import "./videoDetails.scss";
import VideoFeed from "./VideoFeed";

const VideoDetails = () => {
    const { id } = useParams();
    const [videoDetails, setVideoDetails] = useState("");
    const [videos, setVideos] = useState("");

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetails(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items));
    }, [id]);

    if (!videoDetails?.snippet) return "Loadning...";
    const {
        snippet: { title, channelId, channelTitle, description },
        statistics: { viewCount, likeCount },
    } = videoDetails;

    return (
        <div className="video-details">
            <div className="video">
                <div className="video-player">
                    <ReactPlayer className="react-player" url={`https://youtube.com/watch?v=${id}`} controls />
                </div>
                <div className="video-text">
                    <h3 className="video-title">{title}</h3>
                    <div className="sub-title">
                        <h3 className="channel-name">{channelTitle}</h3>
                        <div className="interactions">
                            <div className="like">{parseInt(likeCount).toLocaleString()} Likes</div>
                            <div className="views">{parseInt(viewCount).toLocaleString()} Views</div>
                        </div>
                    </div>
                </div>
                <div className="video-description">
                    <p>{description}</p>
                </div>
            </div>

            <div className="suggested-videos">
                <VideoFeed videos={videos} />
            </div>
        </div>
    );
};

export default VideoDetails;
