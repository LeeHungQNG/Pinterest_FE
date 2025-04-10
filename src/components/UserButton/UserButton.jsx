import { useState } from 'react';
import './UserButton.css';
const UserButton = () => {
  const currentUser = true;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className="user-button">
      <img src="/general/noAvatar.png" alt="" />
      <img onClick={() => setOpen((prev) => !prev)} src="/general/arrow.svg" alt="" className="arrow" />
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
