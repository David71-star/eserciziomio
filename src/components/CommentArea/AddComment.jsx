import { useState } from "react";

const AddComment = ({ onAddComment }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      comment: text,
      rate: rating,
      elementId: onAddComment,
      // elementId: asin
    };
    onAddComment(newComment);
    setText("");
    setRating(1);
  };

  return (
    <div>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your comment..."
          required
        ></textarea>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          />
        </label>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default AddComment;
