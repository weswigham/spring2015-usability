'use strict';
var React = require('react');
var {
  containerStyles,
  videoStyles,
  targetAreaStyles,
  leftBorderStyles,
  rightBorderStyles,
  directionTextStyles,
  loadingStyles,
  filmIconStyles,
  cogIconStyles,
  centeredSearchIconStyles
} = require('../styles');

var Main = React.createClass({
    getInitialState: function() {
        return {
          loading: 0,
          text: "Center a movie here and press to identify"
        };
    },
    leftCapture: function() {
        this.setState({
          loading: this.state.loading,
          text: this.state.text,
          movie: "Elephant's Dream"
        });
        this.capture();
    },
    rightCapture: function() {
        this.setState({
          loading: this.state.loading,
          text: this.state.text,
          movie: "Sintel"
        });
        this.capture();
    },
    capture: function() {
        var i = setInterval(() => {
          if (this.state.loading < 100) {
              this.setState({
                loading:this.state.loading + 10*Math.random(),
                text:"Capturing Movie...",
                movie: this.state.movie
              });
          }
          if (this.state.loading > 100) {
              clearInterval(i);
              this.props.goto('Playback');
          }
        }, 500);
    },
    render: function () {
        loadingStyles.width = this.state.loading + "%";
        return (
            <div style={containerStyles}>
                <i style={filmIconStyles} className="fa fa-film" onClick={() => this.props.goto('Playback')}></i>
                <i style={cogIconStyles} className="fa fa-cogs" onClick={() => this.props.goto('Settings')}></i>
                <i style={centeredSearchIconStyles} className="fa fa-search" onClick={() => this.props.goto('Search')}></i>
                <div style={targetAreaStyles}>
                    <div id="loading" style={loadingStyles}></div>
                    <div style={leftBorderStyles} onClick={this.leftCapture}></div>
                    <div style={rightBorderStyles} onClick={this.rightCapture}></div>
                    <h3 style={directionTextStyles}>{this.state.text}</h3>
                </div>
            </div>
        );
    }
});

module.exports = {Main};
