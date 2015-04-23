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
        return {loading: 0};
    },
    onClick: function() {
        var i = setInterval(() => {
          if (this.state.loading < 100) {
              this.setState({loading:this.state.loading + 10*Math.random()});
          }
          if (this.state.loading > 100) {
              this.setState({loading: 100});
              clearInterval(i);
          }
        }, 500);
    },
    render: function () {
        loadingStyles.width = this.state.loading + "%";
        return (
            <div style={containerStyles}>
                <i style={filmIconStyles} className="fa fa-film"></i>
                <i style={cogIconStyles} className="fa fa-cogs"></i>
                <i style={centeredSearchIconStyles} className="fa fa-search"></i>
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
