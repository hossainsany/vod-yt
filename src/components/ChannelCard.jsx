import { Link } from "react-router-dom";
import "./channelCard.scss";

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../utils/data";

const ChannelCard = ({ channel }) => {
    return (
        <div className="channel-card">
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <div className="channel-icon">
                    <img src={channel?.snippet?.thumbnails?.high?.url} alt="thumbnail" />
                </div>
            </Link>
            <div className="channel-text">
                <Link to={channel ? `/channel/${channel}` : demoVideoUrl}>
                    <h3 className="channel-title">{channel?.snippet?.title.slice(0, 60)}</h3>
                    {channel?.statistics?.subscriberCount && (
                        <h3 className="channel-sub">{parseInt(channel?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers</h3>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default ChannelCard;
