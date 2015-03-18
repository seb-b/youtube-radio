var React = require('react');
var VideoList = require('./components/VideoList');
var firebaseUtils = require('./utils/firebaseUtils');

var Start = React.createClass({

  getInitialState: function() {
    return {
      ids: []
    };
  },

  componentWillMount: function() {
    var initIds = firebaseUtils.getIds(this.receivedIds);
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
        <VideoList videoIds={this.state.ids} />
      </div>
    );
  }
});

module.exports = Start;
