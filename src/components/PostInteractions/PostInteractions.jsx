import Image from '../Image/Image';
import './PostInteractions.css';
const PostInteractions = () => {
  return (
    <div className="post-inter">
      <div className="inter-icons">
        <Image path={'/general/react.svg'} alt="" />
        273
        <Image path={'/general/share.svg'} alt="" />
        <Image path={'/general/more.svg'} alt="" />
      </div>
      <button>Save</button>
    </div>
  );
};
export default PostInteractions;
