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
    this.homeInstance().child('seb').on('value', function(snapshot) {
      var idObj = snapshot.val();
      var arr = [];
      for(var key in idObj){
        arr.push(idObj[key]);
      }
      cb(arr);
    });
  }
};

module.exports = firebaseUtils;
