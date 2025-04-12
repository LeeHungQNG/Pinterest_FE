import './PostPage.css';
import Image from '../../components/Image/Image';
import PostInteractions from '../../components/PostInteractions/PostInteractions';
import { Link, useParams } from 'react-router';
import Comments from '../../components/Comments/Comments';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
const PostPage = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['pin', id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return 'Loading data...';

  if (error) return 'An error has occurred: ' + error.message;

  if (!data) return 'Pin not found';

  return (
    <div className="container">
      <div className="post-page">
        <svg height="20" viewBox="0 0 24 24" width="20" style={{ cursor: 'pointer' }}>
          <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
        </svg>
        <div className="post-container">
          <div className="post-img">
            <Image src={data.media} alt="" w={736} />
          </div>
          <div className="post-details">
            <PostInteractions />
            <Link to={`/${data.user.username}`} className="post-user">
              <Image src={data.user.img || '/general/noAvatar.png'} alt="" className="avatar" />
              <span>{data.user.displayName}</span>
            </Link>
            <Comments id={data._id} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostPage;
