var React = require('react');
var RouteHandler = require('react-router');

var App = React.createClass({
  render() {
    return (
      <div>
        {/*header or menu?? */}
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
