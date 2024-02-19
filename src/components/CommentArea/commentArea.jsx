import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CommentArea = ({ asin }) => {
  console.log("SEI UN ID ???????" + { asin });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/books/${asin}/comments`
        );
        if (response.ok) {
          const commentsData = await response.json();
          setComments(commentsData.comments);
        } else {
          console.error("fetchComments fallita");
        }
      } catch (error) {
        console.error("Errore fetchComments: " + error);
      }
    };
    if ({ asin }) {
      fetchComments();
    }
  }, [asin]);

  const handleAddComment = async (newComment) => {
    try {
      const response = await fetch(`api/books/${asin}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });
      if (response.ok) {
        const addedComment = await response.json();
        setComments([...comments, addedComment]);
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div>
      <CommentList comments={comments} />
      <AddComment asin={asin} onAddComment={handleAddComment} />
    </div>
  );
};

function CommentAreaModal(asin) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log(asin);
    setShow(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Commenta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Area Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <CommentArea asin={asin} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Conferma
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentAreaModal;
