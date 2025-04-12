import './Boards.css';
import Image from '../Image/Image';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import { format } from 'timeago.js';
import { Link } from 'react-router';
const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['boards', userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return 'Loading data...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="collections">
      {data?.map((item) => {
        return (
          <Link to={`/search?boardId=${item._id}`} className="collection" key={item._id}>
            <Image src={item.firstPin.media} alt={''} />
            <div className="collection-info">
              <h1>{item.title}</h1>
              <span>
                {item.pinCount} Pins - {format(item.createdAt)}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Boards;
