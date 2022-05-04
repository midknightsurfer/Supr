import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteImage } from "../../store/images";
import { editImage } from "../../store/images"

const SingleImage = () => {
  const dispatch = useDispatch();
  const imageId = useParams();
  const image = useSelector((state) => state.images[imageId.id]);
  const [editForm, setEditForm] = useState(false);
  const [description, setDescription] = useState(image.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(deleteImage(image.id));
  };


  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      id: image.id,
      userId: image.userId,
      imageURL: image.imageURL,
      description: description
    };
    
    dispatch(editImage(payload));
    console.log(payload)
  };

  return (
    <div>
      <div className="imageContainer">
        <img src={image.imageUrl} />
        <div className="descriptionContainer">{image.description}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Delete</button>
      </form>
      <button onClick={() => setEditForm(!editForm)}>
        {editForm ? "Hide" : "Show"}
      </button>
      {editForm && (
        <form onSubmit={submit}>
          <textarea id="editBox" name="description" value={description}
          onChange={(e) => setDescription(e.target.value)}>{image.description}</textarea>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SingleImage;
