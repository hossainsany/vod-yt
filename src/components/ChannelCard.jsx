import { Link } from "react-router-dom";
import "./channelCard.scss";

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../utils/data";

const ChannelCard = ({
    channel: {
        id: { videoId },
        snippet,
    },
}) => {
    console.log(videoId, snippet);
    return (
        <div className="channel-card">
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <div className="channel-icon">
                    <img src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
                </div>
            </Link>
            <div className="channel-text">
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <h3 className="video-title">{snippet?.title.slice(0, 60)}</h3>
                </Link>
            </div>
        </div>
    );
};

export default ChannelCard;
