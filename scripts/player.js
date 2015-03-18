var React = require('react');
var VideoPlayer = require('./components/VideoPlayer');
var Router = require('react-router');

var Player = React.createClass({

  mixins: [Router.State],

  componentWillMount: function() {
    var id = this.getParams().id;
    this.setState({
      videoId: id
    });
  },

  render: function() {
    return (
      <div className="player">
        <VideoPlayer id={this.state.videoId} />
      </div>
    );
  }

});

module.exports = Player;
