'use strict';
var React = require('react');
var {
  containerStyles,
  videoStyles,
  searchIconStyles,
  searchStyles,
  carouselContainerStyles,
  posterCardStyles,
  posterImageStyles,
  settingsIconStyles
} = require('../styles');
var {TextField, Paper} = require('material-ui');

var Search = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <i style={settingsIconStyles} onClick={() => {this.props.goto('Main')}} className="fa fa-chevron-left"></i>
                <Paper zDepth={1} style={searchStyles}>
                    <TextField hintText="Enter a movie title..." />
                </Paper>
                <div style={carouselContainerStyles}>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/django.jpg" style={posterImageStyles} />
                </Paper>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/elephant.jpg" style={posterImageStyles} />
                </Paper>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/guardians.jpg" style={posterImageStyles} />
                </Paper>
                <Paper zDepth={1} style={posterCardStyles}>
                    <img src="img/pacific.jpg" style={posterImageStyles} />
                </Paper>
                </div>
            </div>
        );
    }
});

module.exports = {Search};
