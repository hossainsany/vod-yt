import "./sidebarBtn.scss";

const SidebarBtn = ({ category, isSelected, setIsSelected }) => {
    return (
        <button
            className="sidebar-btn"
            onClick={() => {
                setIsSelected(category.name);
            }}
            style={{ background: isSelected === category.name ? "#272727" : "none" }}
        >
            {isSelected === category.name ? <span className="icon">{category.filledIcon}</span> : <span className="icon">{category.outlined}</span>}
            <span className="text">{category.name}</span>
        </button>
    );
};

export default SidebarBtn;
