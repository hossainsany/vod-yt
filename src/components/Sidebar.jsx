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
            <p className="copyright">All rights reserved © Hossain Sany</p>
        </div>
    );
};

export default Sidebar;
