import Image from '../Image/Image';
import './LeftBar.css';
const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="menu-icons">
        <a href="/" className="menu-icon">
          <Image path="/general/logo.png" alt="" className="logo" />
        </a>
        <a href="/" className="menu-icon">
          <Image path="/general/home.svg" alt="" />
        </a>
        <a href="/" className="menu-icon">
          <Image path="/general/create.svg" alt="" />
        </a>
        <a href="/" className="menu-icon">
          <Image path="/general/updates.svg" alt="" />
        </a>
        <a href="/" className="menu-icon">
          <Image path="/general/messages.svg" alt="" />
        </a>
      </div>
      <a href="/" className="menu-icon">
        <Image path="/general/messages.svg" alt="" />
      </a>
    </div>
  );
};
export default LeftBar;
