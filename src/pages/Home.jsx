import React from "react";
import "../assets/styles/index.css";

const Home = () => {
  return (
    <div className="container text-center">
      <h1>WELCOME TO WITBOT!</h1>
      <div id="wit_bot_logo">
        <img src="/images/bot_logo.png" className="img-fluid" alt="Bot Logo" />
      </div>
      <h1>Sign In</h1>
      <div className="row py-5 justify-content-center">
        <div className="col-md-6 char_bubble">
          <form>
            <div className="form-group">
              <label>Username</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
