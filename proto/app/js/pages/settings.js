'use strict';
var React = require('react');
var {LeftNav, MenuItem} = require('material-ui');

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

var closeIconStyles = {
    margin: '12px',
    marginTop: '8px',
    fontSize: '50px',
    color: 'black'
};


var Settings = React.createClass({
    render: function () {
        var menuItems = [{
            type: MenuItem.Types.SUBHEADER,
            text: 'Settings'
        }, {
            route: 'language',
            text: 'Language'
        }, {
            route: 'stuff',
            text: 'Stuff'
        }, {
            route: 'otherstuff',
            text: 'Other stuff'
        }];
        return (
            <div style={containerStyles}>
                <video src={window.URL.createObjectURL(stream)} style={videoStyles} muted autoPlay></video>
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