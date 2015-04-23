'use strict';
var React = require('react');
var {
  containerStyles, 
  videoStyles, 
  searchIconStyles, 
  searchStyles, 
  carouselContainerStyles, 
  posterCardStyles, 
  posterImageStyles
} = require('../styles');
var {TextField, Paper} = require('material-ui');

var Search = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <i style={searchIconStyles} className="fa fa-search"></i>
                <Paper zDepth={1} style={searchStyles}>
                    <TextField hintText="Enter a movie title..." />
                </Paper>
                <div style={carouselContainerStyles}>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/inception_xlg.jpg" style={posterImageStyles} />
                </Paper>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/inception_xlg.jpg" style={posterImageStyles} />
                </Paper>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/inception_xlg.jpg" style={posterImageStyles} />
                </Paper>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/inception_xlg.jpg" style={posterImageStyles} />
                </Paper>
                </div>
            </div>
        );
    }
});

module.exports = {Search};
