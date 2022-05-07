import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../store/images";

const Upload = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const payload = {
      imageUrl: imageUrl,
      description: description,
      tags: tags,
      userId: sessionUser.id,
    };

    dispatch(uploadImage(payload));

    setDescription(() => "")
    setImageUrl(() => "")
    setTags(() => "")    

  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={submitHandler}>
        <h2>Upload your own Images</h2>
        <label>Image Url</label>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Upload</button>
        <button onClick={(e) => {
          e.preventDefault();
          setDescription(() => "")
          setImageUrl(() => "")
          setTags(() => "")          
        }}>Reset</button>
      </form>
    </div>
  );
};

export default Upload;
