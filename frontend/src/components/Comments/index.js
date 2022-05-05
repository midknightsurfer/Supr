import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment } from "../../store/comments";

const Comments = ({ image }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comments));
  const sessionUser = useSelector((state) => state.session.user);
  const [comment, setComment] = useState()

  useEffect(() => {
    dispatch(getComments(image.id));
  }, [dispatch]);

  const commentHandler = (e) => {
    e.preventDefault();

    const data = {
      comment: comment,
      imageId: image.id,
      userId: sessionUser.id
    }

    dispatch(addComment(data))
  }

  return (
    <div>
      <h2>Comments</h2>
      <div>
        {comments.map((comment) => (
          <p>
            {comment.comment}{" "}
            <button>
              <i class="commentBtns fas fa-edit"></i>
            </button>
            <button>
              <i class="fas fa-eraser"></i>
            </button>            
          </p>
        ))}
      </div>
      <form onSubmit={commentHandler}>
        <textarea name="comment" onChange={(e) => setComment(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Comments;
