import { Meteor } from "meteor/meteor";
import "../imports/api/messages/MessagesPublications";
import "../imports/api/messages/MessagesMethods";
import "../imports/api/messages/MessagesCollection";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername("abdelhay")) {
    Accounts.createUser({
      username: "abdelhay",
      password: "123456",
    });
  }
});
