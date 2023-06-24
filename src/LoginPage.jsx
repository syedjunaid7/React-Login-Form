import React, { useState } from "react";
import "./index.css";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMssg, setErrorMssg] = useState("");
  const [passwordErrorMssg, setPasswordErrorMssg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInPassword, setLoggedInPassword] = useState(false);

  function userInput(e) {
    const user = e.target.value;
    if (
      user.charAt(0) == "" ||
      user.charAt(0) == "@" ||
      user.charAt(0) == "!" ||
      user.charAt(0) == "+" ||
      user.charAt(0) == "~" ||
      user.charAt(0) == "#" ||
      user.charAt(0) == "&" ||
      user.charAt(0) == "$" ||
      user.charAt(0) == "%" ||
      user.charAt(0) == "*"
    ) {
      setUserError(true);
    } else {
      setErrorMssg("Invalid Data");
      setUserError(false);
      setUserId(user);
    }
  }
  function passwordInput(e) {
    const passData = e.target.value;
    setPassword(passData.trim());
  }

  function login(e) {
    e.preventDefault();
    const hasAtSymbol = userId.includes("@");

    if (userId === "") {
      setUserError(true);
      setErrorMssg("Empty Field");
    } else {
      setUserError(true);
      if (userId.includes(".in") || userId.includes(".com") || hasAtSymbol) {
        setUserError(false);
        if (hasAtSymbol) {
          setUserError(false);
          if (userId.includes(".in") || userId.includes(".com")) {
            setUserError(false);
            setLoggedIn(true);
          } else {
            setUserError(true);
            setErrorMssg("Must include - .in/.com");
          }
        } else {
          setUserError(true);
          setErrorMssg("Must include @");
        }
      } else {
        setUserError(true);
        setErrorMssg("Missing @, .in or .com");
      }
    }
    if (password === "") {
      setPasswordError(true);
      setPasswordErrorMssg("Empty Field");
    } else {
      setPasswordError(false);
      if (password.length >= 15) {
        setPasswordError(true);
        setPasswordErrorMssg("Character Limit Exceed");
      } else {
        setLoggedInPassword(true);
        setPasswordError(false);
      }
    }
  }
  function logOut(e) {
    e.preventDefault();
    setLoggedInPassword(false);
    setLoggedIn(false);
  }

  return (
    <>
      {loggedIn && loggedInPassword ? (
        <div className="main">
          <div className="container">
            <h1>Logged In</h1>
            <h5>UserId : {userId}</h5>
            <h5>Password : {password}</h5>
            <button type="submit" onClick={logOut}>
              LogOut
            </button>
          </div>
        </div>
      ) : (
        <div className="main">
          <div className="container">
            <h1>Login</h1>
            <form>
              <input
                type="text"
                placeholder="Enter Id or UserId"
                onChange={userInput}
              />
              <div className="error">{userError ? "*" + errorMssg : null}</div>
              <br />
              <br />
              <input
                type="password"
                placeholder="Enter User Password"
                onChange={passwordInput}
              />
              <div className="error">
                {passwordError ? "*" + passwordErrorMssg : null}
              </div>
              <br />
              <br />
              <button type="submit" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default LoginPage;
