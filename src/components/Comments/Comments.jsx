import './Comments.css';
import Image from '../Image/Image';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import Comment from './Comment';
import CommentForm from './CommentForm';
const Comments = ({ id }) => {
  
  const { isPending, error, data } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return 'Loading data...';

  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return (
    <div className="comments">
      <div className="comment-list">
        <span className="comment-count">{data.length === 0 ? 'No comments' : `${data.length} Comments`}</span>
        {/* Comments */}
        {data.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </div>
      <CommentForm />
    </div>
  );
};
export default Comments;
