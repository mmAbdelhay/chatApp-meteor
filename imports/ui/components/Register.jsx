import { Accounts } from "meteor/accounts-base";
import React, { useState } from "react";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    Accounts.createUser({
      username: username,
      password: password,
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
