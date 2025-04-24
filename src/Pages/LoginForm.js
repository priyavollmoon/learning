import React from "react";
import "./Home.css"

function LoginForm() {
  return (
    <div className="d-flex justify-content-center ">
      <form
        action="submit"
        className="border hover-card p-5 w-100  justify-content-center rounded shadow-sm bg-light mt-2"
      >
        <div className="mb-3">
          <label for="UserName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label for="email">Email </label>
          <input
            type="email"
            className="form-control"
            placeholder="Your email"
            required
          />
        </div>
        <div className="mb-3">
          <label for="Password"> Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
