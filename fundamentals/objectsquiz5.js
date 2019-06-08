/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

var facebookProfile = {
  name: "SpiderZ",
  friends: 0,
  messages: [],
  //methods;
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index,1);
  },
  addFriend: function() {
    facebookProfile.friends += 1;
  },
  removeFriend: function() {
    facebookProfile.friends -= 1;
  }
}

console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);

facebookProfile.postMessage("hello");
facebookProfile.postMessage("world");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);

facebookProfile.addFriend();
facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);
