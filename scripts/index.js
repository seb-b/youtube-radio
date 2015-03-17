var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler } = Router;

var App = require('./app');
var Start = require('./start');

var routes = (
  <Route handler={App} path='/'>
    <Route name="start" path='/start' handler={Start} />
  </Route>
);

Router.run(routes, function(Handler) {
  debugger;
  React.render(<Handler />, document.getElementById('content'));
});
