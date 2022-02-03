import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../imports/ui/Routes";

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    document.getElementById("react-target")
  );
});
