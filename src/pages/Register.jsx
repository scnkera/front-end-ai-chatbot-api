import React from "react";
import "../assets/styles/register.css";

const Register = () => {
  return (
    <div className="container text-center">
      <h1>Register</h1>
      <div id="wit_bot_logo">
        <img src="/images/bot_logo.png" className="img-fluid" alt="Bot Logo" />
      </div>
      <h1><i>Join Now!</i></h1>
      <div className="char_bubble">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
