var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        APP
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
