import './GalleryItem.css';
import { Link } from 'react-router';

const GalleryItem = ({ item }) => {
  return (
    <div className="gallery-item" style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="save-btn">Save</button>
      <div className="overlay-icons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
export default GalleryItem;
