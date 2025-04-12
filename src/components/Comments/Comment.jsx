import Image from '../Image/Image';
import { format } from 'timeago.js';
const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Image src={comment.user.img || '/general/noAvatar.png'} alt="" />
      <div className="comment-content">
        <span className="comment-username">{comment.user.displayName}</span>
        <p className="comment-text">{comment.description}</p>
        <span className="comment-time">{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};
export default Comment;
