import './ProfilePage.css';
import Image from '../../components/Image/Image';
import { useState } from 'react';
import Collections from '../../components/Boards/Boards';
import Gallery from '../../components/Gallery/Gallery';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import { useParams } from 'react-router';
import Boards from '../../components/Boards/Boards';
const ProfilePage = () => {
  const [type, setType] = useState('saved');

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['profile', username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return 'Loading data...';

  if (error) return 'An error has occurred: ' + error.message;

  if (!data) return 'User not found';
  console.log(data);
  return (
    <div className="profile-page">
      <Image className="profile-img" w={100} h={100} src={data.img || '/general/noAvatar.png'} alt={''} />
      <h1 className="profile-name">{data.displayName}</h1>
      <span className="profile-username">@{data.username}</span>
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
      {type === 'created' ? <Gallery userId={data._id} /> : <Boards userId={data._id} />}
    </div>
  );
};

export default ProfilePage;
