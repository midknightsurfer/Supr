import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImages, deleteImage  } from "../../store/images";
import Upload from "../Upload/Upload";

import "./UserProfile.css";

const UserProfile = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.images));

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div>
      <h2 className="userImgTitle">Your Images</h2>
      <div className="userProfile">
        {images.map((image) => (
          <div className="imgProfile">
            {image.userId === sessionUser.id ? (
              <>
                <NavLink key={image.id} to={`/images/${image.id}`}>
                  <img src={image.imageUrl} />
                </NavLink>
                <button
                  className="deleteBtn"
                  onClick={() => dispatch(deleteImage(image.id))}
                >
                  <i className="fas fa-eraser"></i>
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
      <div>
        <div className="userUpload">
          <Upload />
        </div>
      </div>

      <div className="images">
        {images.map((image) => (
          <div className={`imgContainer`}>
            <NavLink key={image.id} to={`/images/${image.id}`}>
              <img src={image.imageUrl} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
