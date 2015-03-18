var React = require('react');
var VideoList = require('./components/VideoList');
var firebaseUtils = require('./utils/firebaseUtils');

var Start = React.createClass({

  setInitialState: function() {
    return {
      ids: []
    };
  },

  componentWillMount: function() {
    var initIds = firebaseUtils.getIds(this.receivedIds);
  },

  receivedIds: function(data)
  {
    debugger;
  }

  render: function() {
    return (
      <div className="start">
        <VideoList videoIds={this.state.ids} />
      </div>
    );
  }
});

module.exports = Start;
