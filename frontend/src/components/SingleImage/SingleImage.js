import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteImage } from "../../store/images";
import { editImage } from "../../store/images";
import Comments from "../Comments/Comments"
import { useHistory } from "react-router-dom"

const SingleImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imageId = useParams();
  const image = useSelector((state) => state.images[imageId.id]);
  const sessionUser = useSelector((state) => state.session.user);
  const [editForm, setEditForm] = useState(false);
  const [description, setDescription] = useState(image.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(deleteImage(image.id));

    history.push("/");
  };

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      id: image.id,
      userId: image.userId,
      imageURL: image.imageURL,
      description: description,
    };

    dispatch(editImage(payload));

    setEditForm(!editForm)
  };

  return (
    <div>
      <div className="imageContainer">
        <img src={image.imageUrl} />
      </div>
      <div className="infoContainer">
        <div className="descriptionContainer">{image.description}</div>
        {sessionUser.id === image.userId ?
        <form onSubmit={handleSubmit}>
          <button className="imageDeleteBtn" type="submit">Delete</button>
        </form>
                : ""}
        {sessionUser.id === image.userId ?        
        <button className="imageEditBtn" onClick={() => setEditForm(!editForm)}>
          {editForm ? "Cancel" : "Edit"}
        </button>
        : ""}
        {editForm && (
          <form className="editForm" onSubmit={submit}>
            <textarea
              id="editBox"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              {image.description}
            </textarea>
            <button type="submit" className="submitBtn" >Submit</button>
          </form>
        )}

        <Comments image={image} />
      </div>
    </div>
  );
};

export default SingleImage;
