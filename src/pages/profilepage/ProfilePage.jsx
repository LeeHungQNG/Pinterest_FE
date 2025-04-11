import './ProfilePage.css';
import Image from '../../components/Image/Image';
import { useState } from 'react';
import Collections from '../../components/Collections/Collections';
import Gallery from '../../components/Gallery/Gallery';
const ProfilePage = () => {
  const [type, setType] = useState('saved');
  return (
    <div className="profile-page">
      <Image className="profile-img" w={100} h={100} path={'/general/noAvatar.png'} alt={''} />
      <h1 className="profile-name">John Doe</h1>
      <span className="profile-username">@johndoe</span>
      <div className="follow-counts">10 followers - 20 followings</div>
      <div className="profile-inter">
        <Image path={'/general/share.svg'} alt={''} />
        <div className="profile-btn">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path={'/general/more.svg'} alt={''} />
      </div>
      <div className="profile-options">
        <span onClick={() => setType('created')} className={type === 'created' ? 'active' : ''}>
          Created
        </span>
        <span onClick={() => setType('saved')} className={type === 'saved' ? 'active' : ''}>
          Saved
        </span>
      </div>
      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  );
};
export default ProfilePage;
