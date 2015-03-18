var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function(Handler) {
  debugger;
  React.render(<Handler />, document.getElementById('content'));
});
