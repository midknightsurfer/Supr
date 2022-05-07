import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import {
  SignupFormPage,
  Navigation,
  Footer,
  UserProfile,
  SingleImage,
} from "./components";

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
  } else {
    // eslint-disable-next-line no-lone-blocks
    splash = isLoaded && (
        <Switch>
          <Route exact path="/">
            <UserProfile />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/images/:id">
            <SingleImage />
          </Route>
        </Switch>
      );
    }

  return (
    <>
      {splash}
      <Navigation isLoaded={isLoaded} />
      <Footer />
    </>
  );
}

export default App;
