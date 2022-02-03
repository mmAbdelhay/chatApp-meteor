import { Meteor } from "meteor/meteor";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, function (err) {
      err ? alert(err.message) : navigate("/");
    });
  };

  return (
    <div className="m-5">
      <form onSubmit={submit} className="container">
        <div className="mb-3">
          <label htmlFor="username">Username</label>

          <input
            type="text"
            placeholder="Username"
            name="username"
            className="form-control"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-control"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="btn btn-outline-dark float-end">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};
