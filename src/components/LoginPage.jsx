import React from "react";

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="userInput">Username</label>
        <input id="userInput" type={"text"}></input>
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" type={"text"}></input>
      </div>
      <button className="btn btn-secondary">Login</button>
    </>
  );
};

export default LoginPage;
