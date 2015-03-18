var $ = require('jquery');
//pls don't steal :)
var googleApiKey = 'AIzaSyAFk_7PYm1GScy5VfoXySUSzKv4bdV34mw';

var youtubeUtils = {

  getVideoDetails: function(id, cb)
  {
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${googleApiKey}`,
      type: 'GET',
      beforeSend: function(request) {
        request.setRequestHeader('Content-Type', 'application/json');
      },
      success: function(data) {
        cb(data);
      }
    });
  }

};

module.exports = youtubeUtils;
