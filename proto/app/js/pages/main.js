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

var overlayContainerStyles = {
    height: '100%',
    width: '100%',  
    position: 'absolute',
    top: '0px',    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 1
};

var settingsIconStyles = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    margin: '12px',
    marginTop: '8px',
    fontSize: '50px',
    color: 'white'
};

var searchIconStyles = {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    margin: '12px',
    fontSize: '50px',
    color: 'white'
};

var recordCircleStyles = {
    width: '100px',
    height: '100px',
    borderRadius: '50px',
    backgroundColor: 'rgba(255,255,255,0.7)',
    border: '5px solid',
    borderColor: 'rgba(255,255,255,1)',
    margin: '12px'
};

var Main = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <video src={window.URL.createObjectURL(stream)} style={videoStyles} muted autoPlay></video>
                <div style={overlayContainerStyles}>
                    <div style={recordCircleStyles} />
                </div>
                <i style={settingsIconStyles} className="fa fa-bars"></i>
                <i style={searchIconStyles} className="fa fa-search"></i>
            </div>
        );
    }
});

module.exports = {Main};