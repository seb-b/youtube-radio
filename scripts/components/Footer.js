var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;

var Footer = React.createClass({
  render: function() {
    return (
      <div className='footer'>
        <h5>Add new radio url</h5>
        <Input type="text" buttonAfter={
          <Button onClick={this.handleAdd} bsStyle="success">
            <Glyphicon glyph="music" />
          </Button>} />
      </div>
    );
  }
});

module.exports = Footer;
