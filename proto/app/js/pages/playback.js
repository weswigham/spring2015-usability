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

var STARTTIME = new Date().getTime();

var subtitleFile;
if (localStorage.movie == undefined) {
  localStorage.movie = 'ElephantsDream';
}
if (localStorage.language == undefined) {
  localStorage.language = 'ENG';
}
if (localStorage.fontSize == undefined) {
  localStorage.fontSize = 'medium';
}
var subText;
var subObject;
var client;

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
          totalTime: 658000,
          snack: true,
          text: "",
          lang: ""
        };
    },
    closeSnack: function() {
        this.setState({
          title: "Elephant's Dream",
          time: this.state.time,
          totalTime: this.state.totalTime,
          snack: false,
          text: this.state.text,
          lang: this.state.lang
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
        if (localStorage.fontSize == "small") {
          subtitleStyles.fontSize = "2em";
        }
        if (localStorage.fontSize == "medium") {
          subtitleStyles.fontSize = "3em";
        }
        if (localStorage.fontSize == "large") {
          subtitleStyles.fontSize = "5em";
        }
        return (
            <div style={containerStyles}>
                 {snackbar}
                <i style={settingsIconStyles} onClick={() => {this.props.goto('Main')}} className="fa fa-chevron-left"></i>
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

        if ((this.state.lang != localStorage.language) ||
              (this.state.movie != localStorage.movie)) {
          this.state.lang = localStorage.language;
          this.state.movie = localStorage.movie;
          subtitleFile = '../subs/'+this.state.movie+'-'+this.state.lang+'.srt';
          subText;
          subObject;
          client = new XMLHttpRequest();
          client.open('GET', subtitleFile);
          client.onreadystatechange = function() {
            if (client.readyState == 4 && client.status == 200) {
              subText = client.responseText;
              subObject = srtparse(subText);
            }
          }
          client.send();
        }

        var i = setInterval(() => {
          /* get the new time */
          var newTime = (new Date().getTime() - STARTTIME) % this.state.totalTime;

          /* get the new text */
          var newText = this.state.text;

          var ts = (new Date(newTime)).getHMS();
          if (subObject.hasOwnProperty(ts)) {
            newText = subObject[ts];
          }

          this.setState({
            title: "Elephant's Dream",
            time: newTime,
            totalTime: this.state.totalTime,
            snack: this.state.snack,
            text: newText,
            lang: this.state.lang
          });

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

module.exports = {Playback};
