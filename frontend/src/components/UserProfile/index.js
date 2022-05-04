import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { getImages } from "../../store/images";

import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();

  const imagesObj = useSelector((state) => state.images);
  const images = Object.values(imagesObj);

  console.log(images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="images">
      {images.map((image) => (
        <div className={`imgContainer`}>
          <NavLink key={image.id} to={`/image/${image.id}`}>
            <img src={image.imageUrl} />
          </NavLink>
        </div>
      ))}

    </div>
  );
};

export default UserProfile;
