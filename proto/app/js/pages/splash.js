'use strict';
var React = require('react');

var containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
};

var textStyle = {
  textShadow: '1px 1px #000000',
  color: 'white',
  marginBottom: '1px'
};

var headerStyle = {
  maxWidth: '50%',
};

var Splash = React.createClass({
    render: function () {
        return (
            <div style={containerStyles} onClick={() => this.props.goto('Main')}>
                <div style={headerStyle}>
                    <h1 style={textStyle}>Subtitld</h1>
                    <small style={textStyle}>Wait a second while we set things up...</small>
                </div>
            </div>
        );
    }
});

module.exports = {Splash};