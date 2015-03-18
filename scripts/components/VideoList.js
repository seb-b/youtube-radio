var React = require('react');
var VideoListItem = require('./VideoListItem');

var VideoList = React.createClass({
  propTypes: {
    videoIds: React.PropTypes.array.isRequired
  },

  render: function() {
    var videoList = this.props.videoIds.map((id, index) => {
      return <VideoListItem videoId={id} key={index} />
    });
    return <div className='videoList'>{videoList}</div>;
  }

});

module.exports = VideoList;
