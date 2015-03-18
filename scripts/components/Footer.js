var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Glyphicon = ReactBootstrap.Glyphicon;
var Input = ReactBootstrap.Input;
var Button = ReactBootstrap.Button;
var firebaseUtils = require('../utils/firebaseUtils');
var Alert = require('react-bootstrap').Alert;

var Footer = React.createClass({

  getInitialState: function(){
    return {
      alertVisible: false
    }
  },

  handleAdd: function()
  {
    var url = this.refs.add.getValue();

    //no way I wrote this myself: http://stackoverflow.com/questions/6903823/regex-for-youtube-id
    var ytRegex =/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    var match = url.match(ytRegex);
    if (match) {
      var id = match[1];
      firebaseUtils.addId(id);
    }else {
      this.setState({
        alertVisible: true
      })
    }
    this.refs.add.getDOMNode()
      .getElementsByTagName('input')[0].value = '';
  },

  handleDismiss: function() {
    this.setState({
      alertVisible: false
    })
  },

  render: function() {
    var alert = !this.state.alertVisible ? null :
    <Alert bsStyle="danger" onDismiss={this.handleDismiss} dismissAfter={4000}>
      Bad Url, must be a valid youtube url
    </Alert>;
    return (
      <div className='footer'>
        {alert}
        <Input type="text" placeholder='Add new radio url' ref='add' buttonAfter={
          <Button onClick={this.handleAdd} bsStyle="success">
            <Glyphicon glyph="music" />
          </Button>} />
      </div>
    );
  }
});

module.exports = Footer;
