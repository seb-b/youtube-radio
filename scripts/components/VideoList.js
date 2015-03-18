var React = require('react');
var VideoListItem = require('./VideoListItem');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;

var VideoList = React.createClass({
  propTypes: {
    videoIds: React.PropTypes.array.isRequired
  },

  render: function() {
    var videoList = this.props.videoIds.map((id, index) => {
      return <VideoListItem videoId={id} key={index} />
    });
    return <Grid><Row>{videoList}</Row></Grid>
  }

});

module.exports = VideoList;
