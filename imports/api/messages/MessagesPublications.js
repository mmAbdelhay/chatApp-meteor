import { Meteor } from "meteor/meteor";
import { MessagesCollection } from "./MessagesCollection";

Meteor.publish("messages", function publishAllMessages() {
  return MessagesCollection.find();
});
