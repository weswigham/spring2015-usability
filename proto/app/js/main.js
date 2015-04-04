'use strict';
var React = require('react');
var {Splash} = require('./pages/splash');
var {Main} = require('./pages/main');
var {Settings} = require('./pages/settings');
var {Search} = require('./pages/search');
var {Playback} = require('./pages/playback');
var {FlatButton} = require('material-ui');

var containerStyles = { 
    position: 'absolute',
    top: '45px', 
    left: '20px', 
    height: '540px', 
    width: '960px', 
    boxShadow: '0 0 10px rgba(0,0,0,0.6)'
};


var pages = ["Splash", "Main", "Settings", "Search", "Playback"];
var pageComponents = [Splash, Main, Settings, Search, Playback];

var PrototypeApplication = React.createClass({
    getInitialState: function() {
        return { page: 0 };
    },
    pageSelectorFactory: function(i) {
        var self = this;
        return function() {
            self.setState({ page: i });
        };
    },
    renderPage: function() {
        return pageComponents[this.state.page] ? React.createElement(pageComponents[this.state.page]) : '';
    },
    render: function () {
        var page = this.renderPage();
        var factory = this.pageSelectorFactory;
        return (
            <div>
                <div>{
                  pages.map(function(elem, index){
                    return <FlatButton label={elem} onClick={factory(index)} key={index} />
                  })   
                }</div>
                <div style={containerStyles}>
                    {page}
                </div>
            </div>
        );
    }
});

React.render(
    <PrototypeApplication/>,
    document.getElementById('container')
);

window.React = React;