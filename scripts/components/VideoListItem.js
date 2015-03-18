var React = require('react');

var VideoListItem = React.createClass({

  proptypes: {
    videoId: React.PropTypes.string.isRequired
  },

  render: function() {
    return(
      <div>{this.props.videoId}</div>
    );
  }
});

module.exports = VideoListItem;
