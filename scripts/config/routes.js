var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('../app');
var Start = require('../start');
var Player = require('../player');

var routes = (
  <Route name="app" handler={App} path="/">
    <Route name="start" path="start" handler={Start} />
    <Route name="player" path="player/:id" handler={Player}/>
    <DefaultRoute handler={Start} />
  </Route>
);

module.exports = routes;
