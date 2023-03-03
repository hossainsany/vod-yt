import { Link } from "react-router-dom";
import "./navbar.scss";

import { logo } from "../utils/data";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>

            <form className="search">
                <input type="text" placeholder="Search" />
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
