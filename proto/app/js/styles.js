Styles = {
  videoStyles: {
      position: 'relative',
      zIndex: '-1000',
      backgroundSize: '100% 100%',
      top: '0px',
      left: '0px',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      backgroundColor: 'black'
  },

  blurVideoStyles: {
      position: 'relative',
      zIndex: '-1000',
      backgroundSize: '100% 100%',
      top: '0px',
      left: '0px',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      filter: 'blur(10px)',
      WebkitFilter: 'blur(10px)',
      backgroundColor: 'black'
  },

  closeIconStyles: {
      margin: '12px',
      marginTop: '8px',
      fontSize: '50px',
      color: 'black'
  },

  containerStyles: {
      height: '100%',
      width: '100%',
      overflow: 'hidden'
  },

  searchIconStyles: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      margin: '12px',
      fontSize: '50px',
      color: 'white'
  },

  searchStyles: {
      position: 'absolute',
      top: '0px',
      left: '74px',
      right: '12px',
      margin: '12px',
      fontSize: '50px',
      backgroundColor: 'white'
  },

  carouselContainerStyles: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      position: 'absolute',
      top: '94px',
      height: 'calc(100% - 94px)',
      left: '12px',
      right: '0px',
      overflow: 'hidden'
  },

  posterCardStyles: {
      minWidth: '280px',
      margin: '12px',
      backgroundColor: 'white',
      overflow: 'hidden'
  },

  posterImageStyles: {
      width: '100%',
      padding: '5px',
      position: 'relative',
      top: '5px'
  },

  subtitleStyles: {
      position: 'absolute',
      bottom: '80px',
      left: '0px',
      right: '0px',
      textAlign: 'center',
      color: 'white',
      textShadow: '1px 1px black'
  },

  timelineStyles: {
      position: 'absolute',
      bottom: '0px',
      left: '74px',
      margin: '24px',
      right: '124px'
  },

  timestampStyles: {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      margin: '20px',
      color: 'white'
  },

  overlayContainerStyles: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      top: '0px',
      left: '0px',
      zIndex: 1
  },

  settingsIconStyles: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      margin: '12px',
      marginTop: '8px',
      fontSize: '50px',
      color: 'white'
  },

  pauseIconStyles: {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      margin: '12px',
      fontSize: '50px',
      color: 'white'
  },

  directionTextStyles: {
      textAlign: 'center',
      color: 'white',
      paddingTop: '15%'
  },

  targetAreaStyles: {
      position: 'absolute',
      top: '150px',
      left: '150px',
      right: '150px',
      bottom: '150px',
      backgroundColor: 'rgba(0,0,0,0.3)'
  },

  leftBorderStyles: {
      borderLeft: '2px solid white',
      borderTop: '2px solid white',
      borderBottom: '2px solid white',
      position: 'absolute',
      width: '15%',
      height: '100%',
  },

  rightBorderStyles: {
      borderRight: '2px solid white',
      borderTop: '2px solid white',
      borderBottom: '2px solid white',
      position: 'absolute',
      width: '15%',
      right: '0px',
      height: '100%'
  }

};

module.exports = Styles;
