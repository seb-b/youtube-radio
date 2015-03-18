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
    debugger;
    firebaseUtils.getIds(this.receivedIds);
  },

  componentWillMount: function() {
    this.getVideoIds();
  },

  receivedIds: function(data)
  {
    debugger;
    this.setState({
      ids: data
    });
  },

  render: function() {
    return (
      <div className="start">
        <VideoList videoIds={this.state.ids} deleteCallback={this.getVideoIds} />
      </div>
    );
  }
});

module.exports = Start;
