var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var firebaseUtils = require('../utils/firebaseUtils');

var Footer = React.createClass({

  handleAdd: function()
  {
    //TODO: validation
    var url = this.refs.add.getValue();
    var startIndex = url.indexOf('v=') + 2;
    var id = url.substr(startIndex, startIndex + 11);

    firebaseUtils.addId(id);
    this.refs.add.getDOMNode()
      .getElementsByTagName('input')[0].value = '';
  },

  render: function() {
    return (
      <div className='footer'>
        <Input type="text" placeholder='Add new radio url' ref='add' buttonAfter={
          <Button onClick={this.handleAdd} bsStyle="success">
            <Glyphicon glyph="music" />
          </Button>} />
      </div>
    );
  }
});

module.exports = Footer;
