import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment, deleteComment } from "../../store/comments";

const Comments = ({ image }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comments));
  const sessionUser = useSelector((state) => state.session.user);
  const [comment, setComment] = useState();

  useEffect(() => {
    dispatch(getComments(image.id));
  }, [dispatch]);

  const commentHandler = (e) => {
    e.preventDefault();

    const data = {
      comment: comment,
      imageId: image.id,
      userId: sessionUser.id,
    };

    dispatch(addComment(data));

    setComment(() => "");
  };

  return (
    <div>
      <div className="comments">
        <h2>Comments</h2>

        {comments.map((comment) => (
          <p>
            {comment.comment}
            {sessionUser.id === comment.userId ? (
              <button
                className="deleteBtn2"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteComment(comment.id));
                }}
              >
                <i className="fas fa-eraser"></i>
              </button>
            ) : (
              ""
            )}
          </p>
        ))}
      </div>
      <form onSubmit={commentHandler}>
        <textarea
          id="commentsContainer"
          name="comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="commentsSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
