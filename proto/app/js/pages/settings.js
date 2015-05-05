'use strict';
var React = require('react');
var {containerStyles} = require('../styles');
var {LeftNav, MenuItem} = require('material-ui');

var Settings = React.createClass({
    render: function () {
        var menuItems = [{
            type: MenuItem.Types.SUBHEADER,
            text: 'Language'
        }, {
            route: 'english',
            text: 'English'
        }, {
            route: 'french',
            text: 'French'
        }, {
            type: MenuItem.Types.SUBHEADER,
            text: 'Font Display Size'
        }, {
            route: 'small',
            text: 'Small'
        }, {
            route: 'medium',
            text: 'Medium'
        }, {
            route: 'large',
            text: 'Large'
        }];
        return (
            <div style={containerStyles} onClick={() => this.props.goto(this.props.from)}>
                <LeftNav ref="nav" docked={false} menuItems={menuItems} onChange={this._onItemTap} />
            </div>
        );
    },
    _onItemTap(e, key, menuItem) {
      if ( menuItem.route == "english") {
        localStorage.language = "ENG";
      }
      if ( menuItem.route == "french") {
        localStorage.language = "FRE";
      }
      if ( menuItem.route == "small") {
        localStorage.fontSize = "small";
      }
      if ( menuItem.route == "medium") {
        localStorage.fontSize = "medium";
      }
      if ( menuItem.route == "large") {
        localStorage.fontSize = "large";
      }
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
