import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Header = ({ user }) => {
  let navigate = useNavigate();
  const logout = () => {
    Meteor.logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark rounded">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Chat app
        </a>
        {user ? (
          <div onClick={logout} style={{ color: "white", cursor: "pointer" }}>
            {user.username} <span className="logout">→</span>
          </div>
        ) : (
          <div>
            <Link to="login" className="btn btn-sm btn-outline-light mx-2">
              login
            </Link>
            <Link to="register" className="btn btn-sm btn-outline-light">
              register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
