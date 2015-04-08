'use strict';
var React = require('react');
var Styles = require('../styles');
var {LeftNav, MenuItem} = require('material-ui');

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

var Settings = React.createClass({
    render: function () {
        var menuItems = [{
            type: MenuItem.Types.SUBHEADER,
            text: 'Settings'
        }, {
            route: 'language',
            text: 'Language'
        }, {
            route: 'about',
            text: 'About'
        }, {
            route: 'advance',
            text: 'Advance'
        }];
        return (
            <div style={containerStyles}>
                <video src={stream} style={videoStyles} muted autoPlay></video>
                <LeftNav ref="nav" docked={false} menuItems={menuItems} />
            </div>
        );
    },
    componentDidMount: function() {
        this.refs.nav.toggle();

        //the following is a hack to make the fullscreen drawer fit into the phone 'emulator' for prototyping
        //aka not needed on a real device
        var node = React.findDOMNode(this.refs.nav);
        for (var i=0; i<node.children.length; i++) {
            let elem = node.children[i];
            elem.style.position = 'absolute';
        };
    }
});

module.exports = {Settings};
