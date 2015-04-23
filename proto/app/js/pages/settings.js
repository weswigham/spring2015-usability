'use strict';
var React = require('react');
var {containerStyles} = require('../styles');
var {LeftNav, MenuItem} = require('material-ui');

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
