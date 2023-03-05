import { Link } from "react-router-dom";
import "./navbar.scss";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            searchTerm("");
        }
    };
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="/img/vod-logo-light.png" alt="logo" />
                </Link>
            </div>

            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>

            <div className="profile">
                <div className="notification">
                    <NotificationsNoneIcon />
                </div>
                <div className="avatar">
                    <AccountCircleIcon />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
