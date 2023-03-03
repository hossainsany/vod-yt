import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Feed, Search, VideoDetails, ChannelDetails } from "./components/index";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/search/:searchTerm" element={<Search />} />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/channel/:id" element={<ChannelDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
