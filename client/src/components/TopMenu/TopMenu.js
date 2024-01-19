import { onlineIcon, closeIcon } from "../../components";
import "./TopMenu.css";

const TopMenu = ({ room }) => {
  return (
    <div className="TopMenu">
      <div className="TopMenu-left">
        <img src={onlineIcon} alt="Online Icon" />
        <h3 className="TopMenu-left-heading">{room}</h3>
      </div>

      <div className="TopMenu-right">
        <a href="/">
          <img className="TopMenu-right-image" src={closeIcon} alt="Close Icon" />
        </a>
      </div>
    </div>
  );
};

export default TopMenu;
