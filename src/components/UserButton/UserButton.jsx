import { useState } from 'react';
import './UserButton.css';
import Image from '../Image/Image';
const UserButton = () => {
  const currentUser = true;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className="user-button">
      <Image path="/general/noAvatar.png" alt="" />
      <Image path="/general/arrow.svg" onClick={() => setOpen((prev) => !prev)} alt="" className="arrow" />
      {open && (
        <div className="user-options">
          <div className="user-option">Profile</div>
          <div className="user-option">Setting</div>
          <div className="user-option">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="login-link">
      Login / Sign Up
    </a>
  );
};
export default UserButton;
