/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8090/assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */

	'use strict'

	var React = __webpack_require__(2);
	var Countdown = __webpack_require__(3);

	React.render(React.createElement(Countdown, null), document.getElementById('content'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */'use strict'

	var React = __webpack_require__(2);

	var INTERVAL_MS = 1000;
	var COUNTDOWN_TIME = 5 * 60 * INTERVAL_MS;

	module.exports = React.createClass({displayName: "module.exports",

	  getInitialState:function () {
	    return {
	      time: COUNTDOWN_TIME
	    };
	  },

	  componentWillMount:function () {
	    this.timer = setInterval(this.incrementTime, INTERVAL_MS);
	    window.addEventListener('keydown',   this.handleKeyDown);
	  },

	  componentWillUnmount:function () {
	    if (this.timer) clearInterval(this.timer);
	    window.removeEventListener('keydown',   this.handleKeyDown);
	  },

	  render:function () {
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
	    var minutes = Math.floor(totalSeconds / 60);
	    var seconds = Math.abs((totalSeconds % 60)) + '';

	    if (seconds.length == 1) seconds = '0' + seconds;

	    // HIGHWAY TO THE DANGER ZONE
	    if (totalSeconds < 30) {
	      style.fontWeight = '700';
	      style.backgroundColor = 'rgba('+ (255 - ((totalSeconds/30)*255)) +',0,0,1)';
	    }

	    return (
	      React.createElement("div", {style: style}, 
	        React.createElement("div", {style: {flex:1}}, 
	          minutes, ":", seconds
	        )
	      )
	    );
	  },

	  incrementTime:function () {
	    this.setState({
	      time: this.state.time - INTERVAL_MS 
	    });
	  },

	  handleKeyDown:function (event) {
	    if (event.keyCode == 0 || event.keyCode == 32) {
	      this.setState({ time: COUNTDOWN_TIME });
	      event.preventDefault();
	    }
	  },
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "http://localhost:8090/assets";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(1);
		(function webpackMissingModule() { throw new Error("Cannot find module \"bundle.js\""); }());


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		/** @jsx React.DOM *//** @jsx React.DOM */

		'use strict'

		var React = __webpack_require__(2);
		var Countdown = __webpack_require__(3);

		React.render(React.createElement(Countdown, null), document.getElementById('content'));

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = React;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		/** @jsx React.DOM */'use strict'

		var React = __webpack_require__(2);

		var INTERVAL_MS = 1000;
		var COUNTDOWN_TIME = 5 * 60 * INTERVAL_MS;

		module.exports = React.createClass({displayName: "module.exports",

		  getInitialState:function () {
		    return {
		      time: COUNTDOWN_TIME
		    };
		  },

		  componentWillMount:function () {
		    this.timer = setInterval(this.incrementTime, INTERVAL_MS);
		    window.addEventListener('keydown',   this.handleKeyDown);
		  },

		  componentWillUnmount:function () {
		    if (this.timer) clearInterval(this.timer);
		    window.removeEventListener('keydown',   this.handleKeyDown);
		  },

		  render:function () {
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
		    var minutes = Math.floor(totalSeconds / 60);
		    var seconds = Math.abs((totalSeconds % 60)) + '';

		    if (seconds.length == 1) seconds = '0' + seconds;

		    // HIGHWAY TO THE DANGER ZONE
		    if (totalSeconds < 30) {
		      style.fontWeight = '700';
		      style.backgroundColor = 'rgba('+ (255 - ((totalSeconds/30)*255)) +',0,0,1)';
		    }

		    return (
		      React.createElement("div", {style: style}, 
		        React.createElement("div", {style: {flex:1}}, 
		          minutes, ":", seconds
		        )
		      )
		    );
		  },

		  incrementTime:function () {
		    this.setState({
		      time: this.state.time - INTERVAL_MS 
		    });
		  },

		  handleKeyDown:function (event) {
		    if (event.keyCode == 0 || event.keyCode == 32) {
		      this.setState({ time: COUNTDOWN_TIME });
		      event.preventDefault();
		    }
		  },
		});

	/***/ }
	/******/ ]);

/***/ }
/******/ ]);