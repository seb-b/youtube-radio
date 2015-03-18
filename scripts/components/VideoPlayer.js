var React = require('react');
var Youtube = require('react-youtube');
var youtubeUtils = require('../utils/youtubeUtils');
var Navigation = require('react-router').Navigation

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
    youtubeUtils.getSuggestions(this.props.id, this.addSuggestions);
  },

  onVideoEnd: function() {
    var randomId = this.state.queuedIds[Math.floor(Math.random() * 3)]
    this.setState({
      id: randomId,
      queuedIds: []
    });
  },

  render: function() {
    return (
      <Youtube autoplay={true} url={`http://www.youtube.com/watch?v=${this.state.id}`} onPlay={this.getSuggestions} onEnd={this.onVideoEnd} />
    );
  }
});

module.exports = VideoPlayer;
