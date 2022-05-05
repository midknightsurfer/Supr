import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImages } from "../../store/images";
import Upload from '../Upload';

import "./UserProfile.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.images));

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div>
      <Upload />
      <div className="images">
        {images.map((image) => (
          <div className={`imgContainer`}>
            <NavLink key={image.id} to={`/image/${image.id}`}>
              <img src={image.imageUrl} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
