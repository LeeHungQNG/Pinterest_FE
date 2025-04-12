import './GalleryItem.css';
import { Link } from 'react-router';
import Image from '../Image/Image';
const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div className="gallery-item" style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
      {/* <img src={item.media} alt="" /> */}
      <Image src={item.media} w={372} h={optimizedHeight} alt="" />
      <Link to={`/pin/${item._id}`} className="overlay" />
      <button className="save-btn">Save</button>
      <div className="overlay-icons">
        <button>
          <Image path="/general/share.svg" alt="" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default GalleryItem;
