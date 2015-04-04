'use strict';
var React = require('react');

var containerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(175,175,175,1)'
};

var headerStyle = {
    maxWidth: '50%'
};

var Splash = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <div style={headerStyle}>
                    <h1 style={{marginBottom: '1px'}}>Subtitld</h1>
                    <small>Wait a second while we set things up...</small>
                </div>
            </div>
        );
    }
});

module.exports = {Splash};