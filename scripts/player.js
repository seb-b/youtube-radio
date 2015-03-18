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
      <div className="playerContainer">
        <div className="player">
          <VideoPlayer id={this.state.videoId} />
        </div>
      </div>
    );
  }

});

module.exports = Player;
