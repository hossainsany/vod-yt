import { Link } from "react-router-dom";
import "./videoCard.scss";

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../utils/data";

const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => {
    console.log(videoId, snippet);
    return (
        <div className="video-card">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <div className="video-thumbnail">
                    <img src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
                </div>
            </Link>
            <div className="video-text">
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <h3 className="video-title">{snippet?.title.slice(0, 60)}</h3>
                </Link>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <h3 className="channel-title">{snippet?.channelTitle.slice(0, 60)}</h3>
                </Link>
            </div>
        </div>
    );
};

export default VideoCard;
