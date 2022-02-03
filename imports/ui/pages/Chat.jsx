import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { MessagesCollection } from "../../api/messages/MessagesCollection";
import { useSubscribe, useFind } from "meteor/react-meteor-data";

export const Chat = () => {
  const isLoading = useSubscribe("messages");
  const messages = useFind(() => MessagesCollection.find({}));
  const [content, setContent] = useState("");

  const send = () => {
    Meteor.call("insertMessage", { content }, (err) => {
      if (err) {
        alert(err);
      } else {
        setContent("");
      }
    });
  };

  return (
    <div className="conatiner p-4">
      <div style={{ height: "70vh", overflowY: "scroll", overflowX: "hidden" }}>
        {!isLoading() ? (
          messages.map((message) => (
            <div
              className="row rounded"
              key={message._id}
              style={{
                backgroundColor: localStorage.getItem("Meteor.userId") === message.sender._id ? "#7c7d83" : "#d2d4db",
              }}
            >
              <p className="col-7">
                {message.sender.username} : {message.content}
              </p>
              <p className="col-5">{message.createdAt.toISOString()}</p>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div style={{ position: "absolute", bottom: "10px", width: "90%", display: "flex", justifyContent: "around" }}>
        <input
          type="text"
          className="form-control w-75"
          value={content}
          onChange={(e) => setContent(e.target?.value)}
        />
        <button className="btn btn-sm btn-primary" onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
};
