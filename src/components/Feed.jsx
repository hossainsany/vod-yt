import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Sidebar, VideoFeed } from "./";

import "./feed.scss";

const Feed = () => {
    const [isSelected, setIsSelected] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${isSelected}`).then((data) => setVideos(data.items));
    }, [isSelected]);
    console.log(videos[1]);

    return (
        <div className="home-feed">
            <Sidebar isSelected={isSelected} setIsSelected={setIsSelected} />
            <VideoFeed isSelected={isSelected} videos={videos} />
        </div>
    );
};

export default Feed;
