var React = require('react');
var youtubeUtils = require('../utils/youtubeUtils');
var firebaseUtils = require('../utils/firebaseUtils');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var Link = require('react-router').Link;
var Well = ReactBootstrap.Well;
var Glyphicon = ReactBootstrap.Glyphicon;

var VideoListItem = React.createClass({

  proptypes: {
    videoId: React.PropTypes.string.isRequired,
    deleteCallback: React.PropTypes.func
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

  delete: function(){
    firebaseUtils.removeId(this.props.videoId, this.props.deleteCallback);
  },

  componentWillMount: function() {
    youtubeUtils.getVideoDetails(this.props.videoId, this.responseRecieved);
  },

  componentWillReceiveProps: function(nextProps){
    //new title
    if(nextProps.videoId !== this.props.videoId)
    {
      youtubeUtils.getVideoDetails(nextProps.videoId, this.responseRecieved);
    }
  },

  render: function() {
    var id = this.props.videoId;
    return (
      <Col md={4} xs={6}>
        <Well>
        <span className='delete' onClick={this.delete}> <Glyphicon glyph="remove-sign"/> </span>
        <Link to="player" params={{id: id}}>
          <h4 className='title'>{this.state.title}</h4>
          <img src={`http://img.youtube.com/vi/${id}/0.jpg`} width='85%' height='85%'/>
        </Link>
      </Well>
      </Col>
    );
  }
});

module.exports = VideoListItem;
