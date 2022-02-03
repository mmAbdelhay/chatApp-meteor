import React from "react";
import { Chat } from "./pages/Chat";

export const App = ({ user }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="conatiner">
        <Chat />
      </div>
    </div>
  );
};
