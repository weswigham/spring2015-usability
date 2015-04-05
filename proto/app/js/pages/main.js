'use strict';
var React = require('react');

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
    height: 'auto'
};

var targetAreaStyles = {
    position: 'absolute',
    top: '150px',
    left: '150px',
    right: '150px',
    bottom: '150px',
    backgroundColor: 'rgba(0,0,0,0.3)'
};

var leftBorderStyles = {
    borderLeft: '2px solid white',
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    position: 'absolute',
    width: '15%',
    height: '100%',
};

var rightBorderStyles = {
    borderRight: '2px solid white',
    borderTop: '2px solid white',
    borderBottom: '2px solid white',
    position: 'absolute',
    width: '15%',
    right: '0px',
    height: '100%'
};

var directionTextStyles = {
    textAlign: 'center',
    color: 'white',
    paddingTop: '15%'
};

var Main = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <video src={window.URL.createObjectURL(stream)} style={videoStyles} muted autoPlay></video>
                <div style={targetAreaStyles}>
                    <div style={leftBorderStyles}></div>
                    <div style={rightBorderStyles}></div>
                    <h3 style={directionTextStyles}>Center a movie here and press to identify</h3>
                </div>
            </div>
        );
    }
});

module.exports = {Main};