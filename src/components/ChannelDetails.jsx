import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, VideoCard, VideoFeed, Feed } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import "./channelDetails.scss";

const ChannelDetails = () => {
    const { id } = useParams();

    const [channelDetail, setChannelDetail] = useState(null);
    console.log(channelDetail);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
    }, [id]);

    return (
        <>
            <div className="channel-details">
                <div className="bg-gradient" />
                <div className="container">
                    <div className="channel-profile">
                        <ChannelCard channel={channelDetail} />
                        <button className="subscribe">Subscribe</button>
                    </div>
                    <div className="channel-videos">
                        <VideoFeed videos={videos} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChannelDetails;
