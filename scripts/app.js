var React = require('react'),
   RouteHandler = require('react-router'),


var App = React.createClass({
  render() { 
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
