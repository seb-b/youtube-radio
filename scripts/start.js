var React = require('react');
var appConstants = require('./constants/appConstants');
var VideoList = require('./components/VideoList');

var Start = React.createClass({

  setInitialState: function() {
    return {
      ids: []
    };
  },

  componentWillMount: function() {
    //TODO: change to firebase
    this.setState({
      ids: appConstants._TESTING_IDS
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
