'use strict';
var React = require('react');
var {TextField, Paper} = require('material-ui');

navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

var stream;
navigator.getUserMedia({video: true}, function(camera) {
    stream = camera;
  }, function() {
    console.log('camera denied');
});

var containerStyles = {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
};


var videoStyles = {
    position: 'relative',
    zIndex: '-1000',
    backgroundSize: '100% 100%',
    top: '0px',
    left: '0px',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    filter: 'blur(10px)',
    WebkitFilter: 'blur(10px)'
};

var searchIconStyles = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    margin: '12px',
    fontSize: '50px',
    color: 'white'
};

var searchStyles = {
    position: 'absolute',
    top: '0px',
    left: '74px',
    right: '12px',
    margin: '12px',
    fontSize: '50px',
    backgroundColor: 'white'
};

var carouselContainerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'absolute',
    top: '94px',
    height: 'calc(100% - 94px)',
    left: '12px',
    right: '0px',
    overflow: 'hidden'
};

var posterCardStyles = {
    minWidth: '280px',
    margin: '12px',
    backgroundColor: 'white',
    overflow: 'hidden'
};

var posterImageStyles = {
    width: '100%',
    padding: '5px',
    position: 'relative',
    top: '5px'
};

var Search = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <video src={window.URL.createObjectURL(stream)} style={videoStyles} muted autoPlay></video>   
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