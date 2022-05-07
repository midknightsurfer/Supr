import { csrfFetch } from "./csrf";

const LOAD = "images/lOAD";
const DELETE = "images/DELETE";
const EDIT = "images/EDIT";
const UPLOAD = "images/UPLOAD";

const load = (list) => ({
  type: LOAD,
  list,
});

const edit = (image) => {
  return {
    type: EDIT,
    image,
  };
};

const deleteImg = (imageId) => {
  return {
    type: DELETE,
    imageId,
  };
};

const uploadImg = (image) => {
  return {
    type: UPLOAD,
    image,
  };
};

export const getImages = () => async (dispatch) => {
  
  const response = await csrfFetch("/api/images");
console.log('frontend')
  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export const editImage = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const image = await res.json();
    dispatch(edit(image));
    return image;
  }
};

export const deleteImage = (data) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${data}`, {
    method: "DELETE",
  });
  console.log(data);

  if (res.ok) {
    dispatch(deleteImg(data));
    return data;
  }
};

export const uploadImage = (data) => async (dispatch) => {
  const res = await csrfFetch('/api/images', {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const image = await res.json();
    dispatch(uploadImg(image));
    return image;
  }
}

const initialState = {
  list: {},
};

const sortList = (list) => {
  return list
    .sort((imageA, imageB) => {
      return imageA.number - imageB.number;
    })
    .map((image) => image.id);
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allImages = {};
      action.list.forEach((image) => {
        allImages[image.id] = image;
      });
      return {
        ...allImages,
        ...state,
        list: sortList(action.list),
      };
    case EDIT: {
      const newState = { ...state, [action.image.id]: action.image };
      return newState;
    }
    case DELETE: {
      const newState = { ...state };
      delete newState[action.imageId];
      return newState;
    }
    case UPLOAD: {
      const newState = {
        ...state,
        [action.image.id]: action.image,
      }
      return newState;
    }
    default:
      return state;
  }
};

export default imagesReducer;
