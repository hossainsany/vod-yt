import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";

import "./search.scss";
import { VideoFeed } from "./";

import "./feed.scss";

const Search = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
    }, [searchTerm]);

    return (
        <div className="search-feed">
            <div className="container">
                <h2 className="search-title">Search results for: {searchTerm}</h2>
                <VideoFeed videos={videos} />
            </div>
        </div>
    );
};

export default Search;
