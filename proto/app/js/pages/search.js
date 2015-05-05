'use strict';
var React = require('react');
var {
  containerStyles,
  videoStyles,
  searchIconStyles,
  searchStyles,
  carouselContainerStyles,
  posterCardStyles,
  posterImageStyles,
  settingsIconStyles
} = require('../styles');
var {TextField, Paper} = require('material-ui');
var Slick = require('react-slick');

var movies = [{
    name: 'Django Unchained',
    poster: 'img/django.jpg'
}, {
    name: 'Elephant\'s Dream',
    poster: 'img/elephant.jpg'
}, {
    name: 'Guardians of the Galaxy',
    poster: 'img/guardians.jpg'
}, {
    name: 'Pacific Rim',
    poster: 'img/pacific.jpg'
}, {
    name: 'Sintel',
    poster: 'img/sintel.jpg'
}];

var Search = React.createClass({
    getInitialState: function() {
        return {search: ''};
    },    
    _onSearchChange: function(e) {
        this.setState({search: e.target.value});
    },
    _bindPosterTap: function(movie) {
        var self = this;
        return function(e) {
            console.log('Tapped on '+movie.name);
        }  
    },
    render: function () {   
        var self = this; 
        var filtered = movies.filter(function(movie) {
            if (self.state.search && (self.state.search.trim() !== '')) {
                return (movie.name.toLowerCase().indexOf(self.state.search.toLowerCase()) > -1) || 
                       (self.state.search.toLowerCase().indexOf(movie.name.toLowerCase()) > -1);
            } else {
                return true;
            }
        });
        return (
            <div style={containerStyles}>
                <i style={settingsIconStyles} onClick={() => {this.props.goto('Main')}} className="fa fa-chevron-left"></i>
                <Paper zDepth={1} style={searchStyles}>
                    <TextField className="search-input" hintText="Enter a movie title..." onChange={this._onSearchChange}/>
                </Paper>
                <div style={carouselContainerStyles}>
                    <Slick dots={false} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1} arrows={false}>
                        {(filtered.map(function(movie, i) {
                            return(
                            <Paper key={i} zDepth={1} style={posterCardStyles} onTouchTap={self._bindPosterTap(movie)}>
                                <img alt={movie.name} src={movie.poster} style={posterImageStyles} />
                            </Paper>
                            );  
                        }))}
                    </Slick>
                </div>
            </div>
        );
    }
});

module.exports = {Search};
