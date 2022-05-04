import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import SingleImage from "./components/SingleImage";

function App() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  let splash;

  if (!sessionUser) {
    splash = (
      <ul className="cb-slideshow">
        <li>
          <span>Image 01</span>
        </li>
        <li>
          <span>Image 02</span>
        </li>
        <li>
          <span>Image 03</span>
        </li>
        <li>
          <span>Image 04</span>
        </li>
        <li>
          <span>Image 05</span>
        </li>
        <li>
          <span>Image 06</span>
        </li>
        <li>
          <span>Image 07</span>
        </li>
        <li>
          <span>Image 08</span>
        </li>
      </ul>
    );
  }

  return (
    <>
      {splash}
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <UserProfile />
            <Footer />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/image/:id">
        <SingleImage />
      </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
