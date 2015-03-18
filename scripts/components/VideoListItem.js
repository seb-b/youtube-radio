var React = require('react');
var Col = require('react-bootstrap').Col;
var youtubeUtils = require('../utils/youtubeUtils');
var Link = require('react-router').Link;

var VideoListItem = React.createClass({

  proptypes: {
    videoId: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      title: ''
    }
  },

  responseRecieved: function(data) {
    var videoTitle = data.items[0].snippet.title;
    this.setState({
      title: videoTitle
    });
  },

  componentWillMount: function() {
    youtubeUtils.getVideoDetails(this.props.videoId, this.responseRecieved);

  },

  render: function() {
    var id = this.props.videoId;
    return (
      <Col md={4} xs={6}>
        <Link to="player" params={{id: id}}>
          <h4>{this.state.title}</h4>
          <img src={`http://img.youtube.com/vi/${id}/0.jpg`} width='85%' height='85%'/>
        </Link>
      </Col>
    );
  }
});

module.exports = VideoListItem;
