webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    Router = __webpack_require__(2);

	var Document = __webpack_require__(24),
	    Footer = __webpack_require__(203);

	__webpack_require__(25);

	var App = React.createClass({
	  displayName: 'App',

	  render: function render() {
	    return React.createElement(
	      'main',
	      { className: 'main' },
	      React.createElement(Router.RouteHandler, this.props),
	      React.createElement(Footer, null)
	    );
	  }
	});

	var routes = React.createElement(
	  Router.Route,
	  { name: 'app', path: '/', handler: App },
	  React.createElement(Router.DefaultRoute, { handler: Document })
	);

	Router.run(routes, Router.HistoryLocation, function (Handler, state) {
	  React.render(React.createElement(Handler, null), document.body);
	});

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Editor = __webpack_require__(62),
	    Preview = __webpack_require__(63);

	var Document = React.createClass({
	  displayName: 'Document',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'app' },
	      React.createElement(Editor, null),
	      React.createElement(Preview, null)
	    );
	  }
	});

	module.exports = Document;

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Editor = React.createClass({
	  displayName: "Editor",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "editor" },
	      React.createElement("textarea", null)
	    );
	  }

	});

	module.exports = Editor;

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Preview = React.createClass({
	  displayName: "Preview",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "preview" },
	      React.createElement("p", null)
	    );
	  }
	});

	module.exports = Preview;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);

	var Footer = React.createClass({
	  displayName: "Footer",

	  render: function render() {
	    return React.createElement(
	      "footer",
	      { className: "footer" },
	      React.createElement(
	        "div",
	        { className: "footer__credits" },
	        React.createElement(
	          "span",
	          null,
	          "Created by Chris Keathley"
	        )
	      )
	    );
	  }

	});

	module.exports = Footer;

/***/ }

});