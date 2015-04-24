'use strict';
var React = require('react');
window.React = React;
require("react-tap-event-plugin")();
var {Splash} = require('./pages/splash');
var {Main} = require('./pages/main');
var {Settings} = require('./pages/settings');
var {Search} = require('./pages/search');
var {Playback} = require('./pages/playback');
var {FlatButton} = require('material-ui');
var Swipeable = require('react-swipeable');
var {videoStyles, blurVideoStyles} = require('./styles');

React.initializeTouchEvents(true);

navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia ||
                          function(){ alert("camera not available")};

var stream;
navigator.getUserMedia({video: true}, function(camera) {
    stream = window.URL.createObjectURL(camera);
    React.render(
        <PrototypeApplication/>,
        document.getElementById('container')
    );
  }, function() {
    console.log('camera denied');
});

var containerStyles = { 
    position: 'absolute',
    margin: '5px',
    height: '100%', 
    width: '100%', 
    boxShadow: '0 0 10px rgba(0,0,0,0.6)',
    overflow: 'hidden'
};

var pageInfo = {
  Splash: {
    component: Splash,
    blurVideo: true,
    up: "Main",
    down: "Main",
    left: "Main",
    right: "Main"
  },
  Main: {
    component: Main,
    blurVideo: false,
    up: "Playback",
    down: "Search",
    left: "Settings"
  },
  Settings: { //special case, returns to previous state
    component: Settings,
    blurVideo: true,
  },
  Search: {
    component: Search,
    blurVideo: false,
    up: "Main",
    left: "Settings"
  },
  Playback: {
    component: Playback,
    blurVideo: false,
    left: "Settings",
    down: "Main"
  }
};

var PrototypeApplication = React.createClass({
    getInitialState: function() {
        return { page: "Splash", lastpage: "Splash" };
    },
    pageSelectorFactory: function(curr, i) {
        var self = this;
        return function() {
            self.setState({ page: i, lastpage: curr });
        };
    },
    renderPage: function() {
        return pageInfo[this.state.page] ? React.createElement(pageInfo[this.state.page].component, {goto: this.goto.bind(this), from: this.state.lastpage}) : '';
    },
    goto: function(page) {
      this.setState({ page: page, lastpage: this.state.page });
    },
    handleSettings: function() {
      if (this.state.page == "Settings") {
        this.setState({ page: this.state.lastpage, lastpage: this.state.page });
        return true;
      }  
      return false;
    },
    onSwipeUp: function(e) {
      e.preventDefault();
      //go up      
      var page = pageInfo[this.state.page].up;
      if (page) {
        this.goto(page);
      }
    },
    onSwipeDown: function(e) {
      e.preventDefault();
      //go down      
      var page = pageInfo[this.state.page].down;
      if (page) {
        this.goto(page);
      }      
    },
    onSwipeLeft: function(e) {
      e.preventDefault();
      //go right
      if (this.handleSettings()) return;
      
      var page = pageInfo[this.state.page].right;
      if (page) {
        this.goto(page);
      }
    },
    onSwipeRight: function(e) {
      e.preventDefault();
      //go left      
      var page = pageInfo[this.state.page].left;
      if (page) {
        this.goto(page);
      }
    },
    render: function () {
      var page = this.renderPage();
      var factory = this.pageSelectorFactory;
      var state = this.state;
      return (
        <Swipeable 
          style={containerStyles} 
          onSwipedLeft={this.onSwipeLeft} 
          onSwipedRight={this.onSwipeRight} 
          onSwipedUp={this.onSwipeUp} 
          onSwipedDown={this.onSwipeDown}>
            <video src={stream} style={pageInfo[this.state.page].blurVideo ? blurVideoStyles : videoStyles} muted autoPlay></video>
            {page}
        </Swipeable>
      );
    }
});
