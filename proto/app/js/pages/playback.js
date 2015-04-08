'use strict';
var React = require('react');
var Styles = require('../styles');
var {Snackbar, Slider} = require('material-ui');

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
var videoStyles = Styles.videoStyles;
var overlayContainerStyles = Styles.overlayContainerStyles;
var settingsIconStyles = Styles.settingIconStyles;
var pauseIconStyles = Styles.pauseIconStyles;
var timestampStyles = Styles.timestampStyles;
var timelineStyles = Styles.timelineStyles;
var subtitleStyles = Styles.subtitleStyles;

var Playback = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <video src={stream} style={videoStyles} muted autoPlay></video>
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
                </h2> // end quote to make syntax easier to read '
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
