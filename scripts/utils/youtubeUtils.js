var $ = require('jquery');
//pls don't steal :)
var googleApiKey = 'AIzaSyAFk_7PYm1GScy5VfoXySUSzKv4bdV34mw';

var youtubeUtils = {

  getVideoDetails: function(id, cb)
  {
    var url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${googleApiKey}&type=video`;
    doAjax(url, cb);
  },

  getSuggestions: function(id, cb)
  {
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&key=${googleApiKey}&type=video&maxResults=5`;
    doAjax(url, cb);
  }

};

function doAjax(url, cb)
{
  $.ajax({
    url: url,
    type: 'GET',
    beforeSend: function(request) {
      request.setRequestHeader('Content-Type', 'application/json');
    },
    success: function(data) {
      cb(data);
    },
    error: function(error) {
      debugger;
      console.log(error);
    }
  });
}

module.exports = youtubeUtils;
