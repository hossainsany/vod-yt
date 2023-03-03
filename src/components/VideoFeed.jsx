import { VideoCard, ChannelCard } from "./";
import "./videoFeed.scss";

const VideoFeed = ({ isSelected, videos }) => {
    if (!videos) return "loading...";

    return (
        <div className="video-feed">
            {videos.map((item, i) => {
                return (
                    <div key={i}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channel={item} />}
                    </div>
                );
            })}
        </div>
    );
};

export default VideoFeed;
