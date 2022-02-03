import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { MessagesCollection } from "./MessagesCollection";

Meteor.methods({
  insertMessage({ content }) {
    check(content, String);
    if (!content) {
      throw new Meteor.Error("Content is required.");
    }
    return MessagesCollection.insert({
      content,
      createdAt: new Date(),
      sender: Meteor.users
        .find(
          { _id: this.userId },
          {
            fields: { username: 1, _id: 1 },
          }
        )
        .fetch()[0],
    });
  },
});
