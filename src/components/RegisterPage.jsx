import React from "react";

const RegisterPage = () => {
  return (
    <>
      <h1>Register</h1>
      <div>
        <label htmlFor="userInput">Username</label>
        <input id="userInput" type={"text"}></input>
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" type={"text"}></input>
      </div>
      <button className="btn btn-secondary">Create Account</button>
    </>
  );
};

export default RegisterPage;
