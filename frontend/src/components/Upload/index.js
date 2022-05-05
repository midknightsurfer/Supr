import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../store/images";

const Upload = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      imageUrl: imageUrl,
      description: description,
      tags: tags,
      userId: sessionUser.id

    }
    console.log(payload)
    dispatch(uploadImage(payload))
  }

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={submitHandler}>
        <h2>Upload your own Images</h2>
        <label>Image Url</label>
        <input
          type="text"
          name="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Upload</button>
        <button>Reset</button>
      </form>
    </div>
  )
  }

  export default Upload;