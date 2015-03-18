var React = require('react');
var VideoList = require('./components/VideoList');
var firebaseUtils = require('./utils/firebaseUtils');
var Start = React.createClass({

  getInitialState: function() {
    return {
      ids: []
    };
  },

  getVideoIds: function(){
    firebaseUtils.getIds(this.receivedIds);
  },

  componentWillMount: function() {
    this.getVideoIds();
  },

  receivedIds: function(data)
  {
    this.setState({
      ids: data
    });
  },

  render: function() {
    return (
      <div className="start">
        <h2 className="header">Pick a video to start a radio <small> Enjoy :)</small></h2>
        <hr className="header"/>
        <VideoList videoIds={this.state.ids} deleteCallback={this.getVideoIds} />
      </div>
    );
  }
});

module.exports = Start;
