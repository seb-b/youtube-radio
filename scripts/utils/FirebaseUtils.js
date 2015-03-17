var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');

var firebaseUtils = {
  homeInstance: function() {
    return new Firebase(appConstants.FIREBASE_HOST);
  },
  addId: function(youttubeId) {
    //TODO: sandbox per user
    this.homeInstance().child('seb').push(youtubeId);
  },
  toArray: function(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push(obj[key]);
    }
    return arr;
  }
};

module.exports = firebaseUtils;
