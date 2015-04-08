'use strict';
var React = require('react');
var Styles = require('../styles');
var {TextField, Paper} = require('material-ui');

navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia ||
                          function(){ alert("camera not available")};

var stream;
navigator.getUserMedia({video: true}, function(camera) {
    stream = window.URL.createObjectURL(camera);
  }, function() {
    console.log('camera denied');
});

var containerStyles = Styles.containerStyles;
var videoStyles = Styles.blurVideoStyles;
var searchIconStyles = Styles.searchIconStyles;
var searchStyles = Styles.searchStyles;
var carouselContainerStyles = Styles.carouselContainerStyles;
var posterCardStyles = Styles.posterCardStyles;
var posterImageStyles = Styles.posterImageStyles;

var Search = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <video src={stream} style={videoStyles} muted autoPlay></video>
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
