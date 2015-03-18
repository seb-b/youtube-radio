var React = require('react');
var Col = require('react-bootstrap').Col;

var VideoListItem = React.createClass({

  proptypes: {
    videoId: React.PropTypes.string.isRequired
  },

  setIntialState: function() {
    return {
      title: ''
    }
  },

  render: function() {
    var id = this.props.videoId;
    return (
      <Col md='4' xs='6'><img src={`http://img.youtube.com/vi/${id}/0.jpg`} width='85%' height='85%'/></Col>
    );
  }
});

module.exports = VideoListItem;
