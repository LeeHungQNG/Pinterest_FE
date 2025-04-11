import './Comments.css';
import Image from '../Image/Image';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="comment-list">
        <span className="comment-count">5 comments</span>
        {/* Comments */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="comment-content">
            <span className="comment-username">John Doe</span>
            <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="comment-time">1h</span>
          </div>
        </div>
        {/* Comments */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="comment-content">
            <span className="comment-username">John Doe</span>
            <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="comment-time">1h</span>
          </div>
        </div>
        {/* Comments */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="comment-content">
            <span className="comment-username">John Doe</span>
            <p className="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="comment-time">1h</span>
          </div>
        </div>
      </div>
      <form className="comment-form">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={() => setOpen((prev) => !prev)}>🥰</div>
          {open && (
            <div className="emoji-picker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Comments;
