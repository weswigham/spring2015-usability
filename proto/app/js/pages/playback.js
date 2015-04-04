'use strict';
var React = require('react');
var {Snackbar, Slider} = require('material-ui');

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
    left: '0px',
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

var pauseIconStyles = {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    margin: '12px',
    fontSize: '50px',
    color: 'white'
};

var timestampStyles = {
    position: 'absolute',
    bottom: '0px',
    right: '0px',
    margin: '20px',
    color: 'white'
};

var timelineStyles = {
    position: 'absolute',
    bottom: '0px',
    left: '74px',
    margin: '24px',
    right: '124px'
};

var subtitleStyles = {
    position: 'absolute',
    bottom: '80px',
    left: '0px',
    right: '0px',
    textAlign: 'center',
    color: 'white',
    textShadow: '1px 1px black'
};

var Playback = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <video src={window.URL.createObjectURL(stream)} style={videoStyles} muted autoPlay></video>
                <div style={overlayContainerStyles}>
                    <Snackbar ref="snack" message="We found 'Inception' for you! Enjoy the film!" action="dismiss" openOnMount={true} />
                </div>
                <i style={settingsIconStyles} className="fa fa-bars"></i>
                <i style={pauseIconStyles} className="fa fa-pause"></i>
                <Slider name="timeline" defaultValue={0.32} style={timelineStyles} />
                <h3 style={timestampStyles}>00:24:33</h3>
                <h2 style={subtitleStyles}>
                    I need an architect
                    who's as good as I was.
                </h2>
            </div>
        );
    },
    componentDidMount: function() {
        //the following is a hack to make the snackbar fit into the phone 'emulator' for prototyping
        //aka not needed on a real device
        var node = React.findDOMNode(this.refs.snack);
        node.style.position = 'absolute';
        node.style.bottom = 'default';
        node.style.top = '10px';
        node.style.marginLeft = '74px';
    }
});

module.exports = {Playback};