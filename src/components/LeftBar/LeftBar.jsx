import Image from '../Image/Image';
import './LeftBar.css';
import { Link } from 'react-router';
const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="menu-icons">
        <Link to="/" className="menu-icon">
          <Image path="/general/logo.png" alt="" className="logo" />
        </Link>
        <Link to="/" className="menu-icon">
          <Image path="/general/home.svg" alt="" />
        </Link>
        <Link to="/create" className="menu-icon">
          <Image path="/general/create.svg" alt="" />
        </Link>
        <Link to="/" className="menu-icon">
          <Image path="/general/updates.svg" alt="" />
        </Link>
        <Link to="/" className="menu-icon">
          <Image path="/general/messages.svg" alt="" />
        </Link>
      </div>
      <Link to="/" className="menu-icon">
        <Image path="/general/messages.svg" alt="" />
      </Link>
    </div>
  );
};
export default LeftBar;
