var React = require('react');
var Youtube = require('react-youtube');
var youtubeUtils = require('../utils/youtubeUtils');
var firebaseUtils = require('../utils/firebaseUtils');
var Navigation = require('react-router').Navigation;
var Glyphicon = require('react-bootstrap').Glyphicon;
var Link = require('react-router').Link;

var VideoPlayer = React.createClass({

  mixins: [Navigation],

  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      id: this.props.id,
      queuedIds: []
    }
  },

  addSuggestions: function(data)
  {
    var currentQueue = this.state.queuedIds;
    data.items.forEach(function(video) {
      currentQueue.push(video.id.videoId);
    });
    this.setState({
      queuedIds: currentQueue
    });
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.id !== this.state.id;
  },

  getSuggestions: function()
  {
    youtubeUtils.getSuggestions(this.state.id, this.addSuggestions);
  },

  onVideoEnd: function() {
    var possible = this.state.queuedIds;
    var randomId = possible[Math.floor(Math.random() * possible.length)];
    if (!randomId)
    {
      debugger;
      window.location.reload();
    }
    this.setState({
      id: randomId,
      queuedIds: []
    });
  },

  addCurrent: function(e){
    e.preventDefault();
    firebaseUtils.addId(this.state.id);
  },

  render: function() {
    return (
      <div>
        <a
          className="control add btn-success"
          onClick={this.addCurrent}
          title="add this video as a radio">
          <Glyphicon glyph="star" />
        </a>
        <Link
          to="start"
          className="control back btn-primary"
          title="back to radio selction">
          <Glyphicon glyph="menu-hamburger" />
        </Link>
        <Youtube
          autoplay={true}
          url={`http://www.youtube.com/watch?v=${this.state.id}`}
          onPlay={this.getSuggestions}
          onEnd={this.onVideoEnd} />
        <a
          className="control next btn-danger"
          onClick={this.onVideoEnd}
          title="next video">
          <Glyphicon glyph="forward" />
        </a>
      </div>
    );
  }
});

module.exports = VideoPlayer;
