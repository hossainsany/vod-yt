import { categories, explore } from "../utils/data";

//styles
import "./sidebar.scss";
import { SidebarBtn } from "./";

const Sidebar = ({ isSelected, setIsSelected }) => {
    return (
        <div className="sidebar">
            {categories.map((category) => {
                return <SidebarBtn category={category} isSelected={isSelected} key={category.name} setIsSelected={setIsSelected} />;
            })}
            <h3 className="ex">Explore</h3>
            {explore.map((ex) => {
                return <SidebarBtn category={ex} isSelected={isSelected} key={ex.name} setIsSelected={setIsSelected} />;
            })}
            <div className="copyright">
                 <p className="copyright">All rights reserved © 2024</p>
                <p><a href="httsp://hossainsany.com">Hossain Sany</a> | <a href="https://webexis.net">Webexis</a></p>
            </div>
            
        </div>
    );
};

export default Sidebar;
