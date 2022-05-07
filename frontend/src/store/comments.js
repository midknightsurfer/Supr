import { csrfFetch } from "./csrf";

const LOAD = "comments/LOAD";
const ADD = "comments/ADD"
const DELETE = "comments/DELETE"

const loadComments = (comments) => ({
  type: LOAD,
  comments,
});

const addAComment = (comment) => {
  return {
    type: ADD,
    comment
  }
}

const deleteAComment = (commentId) => {
  return {
    type: DELETE,
    commentId
  }
}

export const getComments = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${id}`);
  console.log(res)
  if (res.ok) {
    const comments = await res.json();
    dispatch(loadComments(comments));
  }
};

export const addComment = (data) => async (dispatch) => {
    const res = await csrfFetch('/api/comments', {
      method: "POST",
      body: JSON.stringify(data)
    });
  
    if (res.ok) {
      const comment = await res.json();
      dispatch(addAComment(comment));
      return comment;
    }
  }

  export const deleteComment = (data) => async (dispatch) => {
    const res = await csrfFetch(`/api/comments/${data}`, {
      method: "DELETE",
    });
  
    if (res.ok) {
      dispatch(deleteAComment(data));
      return;
    }
  };

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      const newState = {};
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return {
        ...newState,
      };
    case ADD: {
      const newState = {
        ...state,
        [action.comment.id]: action.comment,
      };
      return newState;      
    }
    case DELETE: {
      const newState = { ...state };
      delete newState[action.commentId];
      return newState;
    }

    default:
      return state;
  }
};

export default commentsReducer;