import { VideoCard, ChannelCard } from "./";
import "./videoFeed.scss";

const VideoFeed = ({ isSelected, videos }) => {
    return (
        <div className="video-feed">
            {videos.map((item, i) => {
                return (
                    <>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channel={item} />}
                    </>
                );
            })}
        </div>
    );
};

export default VideoFeed;
