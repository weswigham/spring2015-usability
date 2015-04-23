'use strict';
var React = require('react');
var Styles = require('../styles');

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

var containerStyles = {
    height: '100%',
    width: '100%',
    overflow: 'hidden'
};

var videoStyles = Styles.videoStyles;
var targetAreaStyles = Styles.targetAreaStyles;
var leftBorderStyles = Styles.leftBorderStyles;
var rightBorderStyles = Styles.rightBorderStyles;
var directionTextStyles = Styles.directionTextStyles;
var loadingStyles = Styles.loadingStyles;

var Main = React.createClass({
    getInitialState: function() {
        return {loading: 0};
    },
    onClick: function() {
        var self = this;
        var i = setInterval( function() {
          if (self.state.loading < 100) {
              self.setState({loading:self.state.loading + 10*Math.random()});
          }
          if (self.state.loading > 100) {
              self.setState({loading: 100});
              clearInterval(i);
          }
        }, 500);
    },
    render: function () {
        loadingStyles.width = this.state.loading + "%";
        return (
            <div style={containerStyles}>
                <video src={stream} style={videoStyles} muted autoPlay></video>
                <div style={targetAreaStyles} onClick={this.onClick}>
                    <div id="loading" style={loadingStyles}></div>
                    <div style={leftBorderStyles}></div>
                    <div style={rightBorderStyles}></div>
                    <h3 style={directionTextStyles}>Center a movie here and press to identify</h3>
                </div>
            </div>
        );
    }
});

module.exports = {Main};
