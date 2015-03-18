var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Footer = require('./components/Footer');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Footer />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
