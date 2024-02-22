import { useEffect, useState } from "react";
import CommentList from "./commenst list";
import AddComment from "./addComment";
import Loading from "../SPINNER/spinner";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getFetchComments = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYjE3ZDQwZjQxNzAwMTg5YTM4MTAiLCJpYXQiOjE3MDg0NDM2NDEsImV4cCI6MTcwOTY1MzI0MX0.QWLXlw7lRYxS40RHNaH8Uap8RVbEXh0jY3HfXqxedtA",
            },
          }
        );
        if (response.ok) {
          let comments = await response.json();
          console.log(comments);
          setIsLoading(false);
          setComments(comments);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    if (asin) {
      getFetchComments();
    }
  }, [asin]);
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
