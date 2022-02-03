import React from "react";
import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Header } from "./partials/Header";
import { App } from "./App";

export default function Routes() {
  const user = useTracker(() => Meteor.user());
  return (
    <div>
      <Header user={user} />
      <ReactRoutes>
        {user ? (
          <Route path="/" element={<App user={user} />} />
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        <Route path="*" element={user ? <Navigate to="/" /> : <Navigate to="/login" />} />
      </ReactRoutes>
    </div>
  );
}
