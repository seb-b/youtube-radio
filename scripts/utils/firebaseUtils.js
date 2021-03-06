var Firebase = require('firebase');

var firebaseHost = 'https://youtube-react-radio.firebaseio.com/';

var firebaseUtils = {

  homeInstance: function() {
    return new Firebase(firebaseHost);
  },

  addId: function(youtubeId) {
    //TODO: sandbox per user
    this.homeInstance().child('seb').push(youtubeId);
  },

  removeId: function(youtubeId, cb) {
    //FIXME there must be an easier way to query on value
    this.homeInstance().child('seb')
      .orderByValue().equalTo(youtubeId)
        .once('value', function(snapshot){
          for(var key in snapshot.val()) break;
          this.removeViaKey(key, cb);
    }.bind(this));
  },

  removeViaKey: function(key, cb) {
    this.homeInstance().child('seb').child(key).remove();
    //this is shit, this callback goes 3 levels deep
    //FIXME flux would fix this
    cb();
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
