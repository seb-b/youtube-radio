var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Footer = require('./components/Footer');

var App = React.createClass({
  render: function() {
    return (
      <div className="body">
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
