'use strict';
var React = require('react');
var {
  containerStyles,
  overlayContainerStyles,
  settingsIconStyles,
  pauseIconStyles,
  timestampStyles,
  timelineStyles,
  subtitleStyles
} = require('../styles');
var {Snackbar, Slider} = require('material-ui');
var reactVtt = require('react-vtt');
var srtparse = require('../SRTparse');

var subtitleFile = '../subs/ElephantsDream.txt';
var subText;
var subObject;
var client = new XMLHttpRequest();
client.open('GET', subtitleFile);
client.onreadystatechange = function() {
  if (client.readyState == 4 && client.status == 200) {
    subText = client.responseText;
    subObject = srtparse(subText);
  }
}
client.send();

Date.prototype.getHMS = function(){
  var hours = (this.getHours() - 19) < 10 ? "0" + (this.getHours() - 19) : (this.getHours() - 19);
  var minutes = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
  var seconds = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
  return (hours + ":" + minutes + ":" + seconds);
}


var Playback = React.createClass({
    getInitialState: function() {
        return {
          title: "Elephant's Dream",
          time: 0,
          totalTime: 540000,
          snack: true,
          text: ""
        };
    },
    closeSnack: function() {
        this.setState({
          title: "Elephant's Dream",
          time: this.state.time,
          totalTime: this.state.totalTime,
          snack: false
        });
        this.refs.snack.dismiss();
    },
    render: function () {
        var message = "We found '"+this.state.title+"' for you! Enjoy the film!";
        var timestamp = (new Date(this.state.time)).getHMS();
        var perTime = this.state.time / this.state.totalTime;
        var snackbar = (
          <Snackbar ref="snack" message={message} action="dismiss" openOnMount={true} onActionTouchTap={this.closeSnack} />
                        );
        return (
            <div style={containerStyles}>
                 {snackbar}
                <i style={settingsIconStyles} onTouchTap={() => {this.props.goto('Settings')}} className="fa fa-bars"></i>
                <i style={pauseIconStyles} className="fa fa-pause"></i>
                <Slider name="timeline" defaultValue={0.0} value={perTime} style={timelineStyles} />
                <h3 style={timestampStyles}>{timestamp}</h3>
                <h2 style={subtitleStyles}>
                    {this.state.text}
                </h2>
            </div>
        );
    },
    componentDidMount: function() {
        var i = setInterval(() => {
          this.setState({
            title: "Elephant's Dream",
            time: this.state.time+500,
            totalTime: this.state.totalTime,
            snack: this.state.snack,
            text: this.state.text
          });

          var ts = (new Date(this.state.time)).getHMS();
          if (subObject.hasOwnProperty(ts)) {
            this.state.text = subObject[ts];
          }

          if (this.state.time == this.state.totalTime) {
            clearInterval(i);
          }
        }, 500);

        //the following is a hack to make the snackbar fit into the phone 'emulator' for prototyping
        //aka not needed on a real device
        var node = React.findDOMNode(this.refs.snack);
        node.style.position = 'absolute';
        node.style.bottom = 'default';
        node.style.top = '10px';
        node.style.marginLeft = '74px';
    }
});

// React.renderComponent(
//   reactVtt.IsolatedCue({
//     traget: './assets/chocolate_rain.vtt',
//     currentTime: function(){ return this.state.time; }
//   }),
//   document.getElementById('#video-vtt')
// );

module.exports = {Playback};
