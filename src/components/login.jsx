import React from "react";
import { useState } from "react";
import { userLogin } from "../services/auth.service";
import { setUserName, setToken, setLogin } from "../feature/users/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Login = (props) => {
  const [username, setUsernameState] = useState("");
  const [password, setPasswordState] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  function handleUsernameChange(event) {
    setUsernameState(event.target.value);
  }
  function handlePasswordChange(event) {
    setPasswordState(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    // Data available here
    // Data validation

    // Try login
    userLogin(username, password)
      .then((data) => {
        console.log(data);
        dispatch(setUserName(username));
        dispatch(setToken(data.token));
        dispatch(setLogin());
        console.log(token);
      })
      .catch((error) => {
        console.log("in error");
        console.log(error);
        setMessage(error.code);
      });
  }
  function showMessage() {
    return <span className="text-danger">{message}</span>;
  }
  return (
    <div
      className="w-50 m-auto border p-3"
      style={{ backgroundColor: "rgba(0,0,0,0)" }}
    >
      <h2 className="text-success text-center">Login</h2>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Username
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="row mb-4 text-center">
          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </div>
        <div className="text-center">
          <p>
            Not a member? <a href="/">Register</a>
          </p>
        </div>
      </form>
      {showMessage()}
    </div>
  );
};

export default Login;
