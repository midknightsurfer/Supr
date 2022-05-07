import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import modalImg from "../../assets/modal-spiderman.png";

function LoginForm({ modal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const demoLogin = (e) => {
    e.preventDefault();

    setCredential("Demo-lition");
    setPassword("password");

    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <ul className="errorsContainer">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <img src={modalImg} className="modalImg" />
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
      <button onClick={demoLogin}>Demo</button>
      <button onClick={() => showModal}>Cancel</button>
    </form>
  );
}

export default LoginForm;
