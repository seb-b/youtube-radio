
var React = require('react'),
    Router = require('react-router'),
    { Route, DefaultRoute, RouteHandler } = Router,
    App = require('./app');


var routes = (
  <Route handler={App} path='/'>
    <Route name="login" path='/login' handler={Login} />
    <Route name="search" path='/search' handler = {Search} />
    <Route name="logout" path='/logout' handler = {Logout} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});
