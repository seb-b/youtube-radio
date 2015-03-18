var Firebase = require('firebase');
var appConstants = require('../constants/appConstants');

var firebaseHost = 'https://youtube-react-radio.firebaseio.com/'

var firebaseUtils = {

  homeInstance: function() {
    return new Firebase(firebaseHost);
  },

  addId: function(youtubeId) {
    //TODO: sandbox per user
    this.homeInstance().child('seb').push(youtubeId);
  },

  getIds: function(cb) {
    debugger;
    this.homeInstance().child('seb').on('value', function(snapshot) {
      cb(snapshot.val());
    });
  }
};

module.exports = firebaseUtils;
