var React = require('react');
var VideoListItem = require('./VideoListItem');
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var VideoList = React.createClass({
  propTypes: {
    videoIds: React.PropTypes.array.isRequired,
    deleteCallBack: React.PropTypes.func
  },

  render: function() {
    var videoList = this.props.videoIds.map((id, index) => {
      return (<VideoListItem
                videoId={id}
                key={index}
                deleteCallback={this.props.deleteCallback} />
          );
    });
    return (

        <Grid>
          <Row>{videoList}</Row>
        </Grid>

    );
  }

});

module.exports = VideoList;
