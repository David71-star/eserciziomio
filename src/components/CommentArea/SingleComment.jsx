const SingleComment = ({ comment }) => {
    return (
      <div>
        <p>{comment.text}</p>
        <p>Rating: {comment.rating}</p>
      </div>
    );
  };

export default SingleComment;