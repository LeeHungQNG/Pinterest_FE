import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
const CommentForm = () => {
  const [open, setOpen] = useState(false);
  return (
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
  );
};
export default CommentForm;
