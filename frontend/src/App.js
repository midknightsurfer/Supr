import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from './components/Footer'
import bg0 from "./assets/Superhero-1-1.jpg";
import bg1 from "./assets/theboys.webp";
import bg2 from "./assets/avengers_2.webp";
import bg3 from "./assets/e6hWKhmXszRLNSvPRHizZ5.jpg";
import bg4 from "./assets/247132.jpg";
import bg5 from "./assets/https___bamsmackpow.com_files_image-exchange_2016_04_ie_42627.jpeg";
import bg6 from "./assets/The-Batman.jpeg";
import bg7 from "./assets/PFcEYaKOWp8rKVEL.jpg";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const changeBg = () => {
    const images = [bg0, bg1, bg2, bg3, bg4, bg5, bg6, bg7];

    const bg = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url("${bg}")`;
    document.body.style.backgroundPositionX = "50%";
    document.body.style.backgroundSize = "cover 100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
  };

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    document.body.style.backgroundImage = `url("${bg3}")`;
    setInterval(changeBg, 5000);
  });

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Footer />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>

      )}
    </>
  );
}

export default App;
