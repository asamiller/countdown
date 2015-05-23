'use strict'

var React = require('react');

var INTERVAL_MS = 1000;
var COUNTDOWN_TIME = 5 * 60 * INTERVAL_MS;

module.exports = React.createClass({

  getInitialState () {
    return {
      time: COUNTDOWN_TIME
    };
  },

  componentWillMount () {
    this.timer = setInterval(this.incrementTime, INTERVAL_MS);
    window.addEventListener('keydown',   this.handleKeyDown);
  },

  componentWillUnmount () {
    if (this.timer) clearInterval(this.timer);
    window.removeEventListener('keydown',   this.handleKeyDown);
  },

  render () {
    var style = {
      fontSize: '300px',
      fontWeight: '300',
      backgroundColor: 'rgba(0,0,0,1)',
      color: '#fff',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 200ms'
    };

    var totalSeconds = Math.floor(this.state.time / INTERVAL_MS);
    var minutes = Math.floor(Math.abs(totalSeconds / 60));
    var seconds = Math.abs((totalSeconds % 60)) + '';

    if (seconds.length == 1) seconds = '0' + seconds;

    // HIGHWAY TO THE DANGER ZONE
    if (totalSeconds < 30) {
      style.fontWeight = '700';
      style.backgroundColor = 'rgba('+ (255 - ((totalSeconds/30)*255)) +',0,0,1)';
    }

    return (
      <div style={style}>
        <div style={{flex:1}}>
          {minutes}:{seconds}
        </div>
      </div>
    );
  },

  incrementTime () {
    this.setState({
      time: this.state.time - INTERVAL_MS 
    });
  },

  handleKeyDown (event) {
    if (event.keyCode == 0 || event.keyCode == 32) {
      this.setState({ time: COUNTDOWN_TIME });
      event.preventDefault();
    }
  },
});