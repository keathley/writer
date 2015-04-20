webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1),
	    Router = __webpack_require__(2),
	    Reflux = __webpack_require__(26);
	
	var Document = __webpack_require__(24),
	    Footer = __webpack_require__(25);
	
	__webpack_require__(27);
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var Editor = __webpack_require__(64),
	    Preview = __webpack_require__(65);
	
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
/* 25 */
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

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var AppActions = __webpack_require__(131);
	
	var Editor = React.createClass({
	  displayName: 'Editor',
	
	  getInitialState: function getInitialState() {
	    return { value: '' };
	  },
	  handleChange: function handleChange(e) {
	    var newText = e.target.value;
	    this.setState({ value: newText });
	    AppActions.textUpdate(newText);
	  },
	  render: function render() {
	    var value = this.state.value;
	
	    return React.createElement(
	      'div',
	      { className: 'editor' },
	      React.createElement('textarea', { value: value, onChange: this.handleChange })
	    );
	  }
	});
	
	module.exports = Editor;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Reflux = __webpack_require__(26);
	var Remarkable = __webpack_require__(149);
	var md = new Remarkable('commonmark');
	
	var DocumentStore = __webpack_require__(132);
	
	var Preview = React.createClass({
	  displayName: 'Preview',
	
	  mixins: [Reflux.connect(DocumentStore, 'text')],
	  render: function render() {
	    var text = this.state.text;
	
	    return React.createElement(
	      'div',
	      { className: 'preview' },
	      React.createElement('span', { dangerouslySetInnerHTML: { __html: md.render(text) } })
	    );
	  }
	});
	
	module.exports = Preview;

/***/ },
/* 66 */,
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports.ActionMethods = __webpack_require__(135);
	
	exports.ListenerMethods = __webpack_require__(136);
	
	exports.PublisherMethods = __webpack_require__(137);
	
	exports.StoreMethods = __webpack_require__(138);
	
	exports.createAction = __webpack_require__(139);
	
	exports.createStore = __webpack_require__(140);
	
	exports.connect = __webpack_require__(141);
	
	exports.connectFilter = __webpack_require__(142);
	
	exports.ListenerMixin = __webpack_require__(143);
	
	exports.listenTo = __webpack_require__(144);
	
	exports.listenToMany = __webpack_require__(145);
	
	
	var maker = __webpack_require__(146).staticJoinCreator;
	
	exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility
	
	exports.joinLeading = maker("first");
	
	exports.joinStrict = maker("strict");
	
	exports.joinConcat = maker("all");
	
	var _ = __webpack_require__(147);
	
	exports.EventEmitter = _.EventEmitter;
	
	exports.Promise = _.Promise;
	
	/**
	 * Convenience function for creating a set of actions
	 *
	 * @param definitions the definitions for the actions to be created
	 * @returns an object with actions of corresponding action names
	 */
	exports.createActions = function(definitions) {
	    var actions = {};
	    for (var k in definitions){
	        if (definitions.hasOwnProperty(k)) {
	            var val = definitions[k],
	                actionName = _.isObject(val) ? k : val;
	
	            actions[actionName] = exports.createAction(val);
	        }
	    }
	    return actions;
	};
	
	/**
	 * Sets the eventmitter that Reflux uses
	 */
	exports.setEventEmitter = function(ctx) {
	    var _ = __webpack_require__(147);
	    exports.EventEmitter = _.EventEmitter = ctx;
	};
	
	
	/**
	 * Sets the Promise library that Reflux uses
	 */
	exports.setPromise = function(ctx) {
	    var _ = __webpack_require__(147);
	    exports.Promise = _.Promise = ctx;
	};
	
	
	/**
	 * Sets the Promise factory that creates new promises
	 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
	 */
	exports.setPromiseFactory = function(factory) {
	    var _ = __webpack_require__(147);
	    _.createPromise = factory;
	};
	
	
	/**
	 * Sets the method used for deferring actions and stores
	 */
	exports.nextTick = function(nextTick) {
	    var _ = __webpack_require__(147);
	    _.nextTick = nextTick;
	};
	
	/**
	 * Provides the set of created actions and stores for introspection
	 */
	exports.__keep = __webpack_require__(148);
	
	/**
	 * Warn if Function.prototype.bind not available
	 */
	if (!Function.prototype.bind) {
	  console.error(
	    'Function.prototype.bind not available. ' +
	    'ES5 shim required. ' +
	    'https://github.com/spoike/refluxjs#es5'
	  );
	}


/***/ },
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Reflux = __webpack_require__(26);
	
	var appActions = Reflux.createActions(['textUpdate']);
	
	module.exports = appActions;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var AppActions = __webpack_require__(131);
	var Reflux = __webpack_require__(26);
	
	var DocumentStore = Reflux.createStore({
	  listenables: AppActions,
	
	  onTextUpdate: function onTextUpdate(text) {
	    this._text = text;
	    this.trigger(text);
	  }
	});
	
	module.exports = DocumentStore;

/***/ },
/* 133 */,
/* 134 */,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all actions.
	 * This module is consumed by `createAction`.
	 */
	module.exports = {
	};


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(147),
	    maker = __webpack_require__(146).instanceJoinCreator;
	
	/**
	 * Extract child listenables from a parent from their
	 * children property and return them in a keyed Object
	 *
	 * @param {Object} listenable The parent listenable
	 */
	var mapChildListenables = function(listenable) {
	    var i = 0, children = {}, childName;
	    for (;i < (listenable.children||[]).length; ++i) {
	        childName = listenable.children[i];
	        if(listenable[childName]){
	            children[childName] = listenable[childName];
	        }
	    }
	    return children;
	};
	
	/**
	 * Make a flat dictionary of all listenables including their
	 * possible children (recursively), concatenating names in camelCase.
	 *
	 * @param {Object} listenables The top-level listenables
	 */
	var flattenListenables = function(listenables) {
	    var flattened = {};
	    for(var key in listenables){
	        var listenable = listenables[key];
	        var childMap = mapChildListenables(listenable);
	
	        // recursively flatten children
	        var children = flattenListenables(childMap);
	
	        // add the primary listenable and chilren
	        flattened[key] = listenable;
	        for(var childKey in children){
	            var childListenable = children[childKey];
	            flattened[key + _.capitalize(childKey)] = childListenable;
	        }
	    }
	
	    return flattened;
	};
	
	/**
	 * A module of methods related to listening.
	 */
	module.exports = {
	
	    /**
	     * An internal utility function used by `validateListening`
	     *
	     * @param {Action|Store} listenable The listenable we want to search for
	     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
	     */
	    hasListener: function(listenable) {
	        var i = 0, j, listener, listenables;
	        for (;i < (this.subscriptions||[]).length; ++i) {
	            listenables = [].concat(this.subscriptions[i].listenable);
	            for (j = 0; j < listenables.length; j++){
	                listener = listenables[j];
	                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
	                    return true;
	                }
	            }
	        }
	        return false;
	    },
	
	    /**
	     * A convenience method that listens to all listenables in the given object.
	     *
	     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
	     */
	    listenToMany: function(listenables){
	        var allListenables = flattenListenables(listenables);
	        for(var key in allListenables){
	            var cbname = _.callbackName(key),
	                localname = this[cbname] ? cbname : this[key] ? key : undefined;
	            if (localname){
	                this.listenTo(allListenables[key],localname,this[cbname+"Default"]||this[localname+"Default"]||localname);
	            }
	        }
	    },
	
	    /**
	     * Checks if the current context can listen to the supplied listenable
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @returns {String|Undefined} An error message, or undefined if there was no problem.
	     */
	    validateListening: function(listenable){
	        if (listenable === this) {
	            return "Listener is not able to listen to itself";
	        }
	        if (!_.isFunction(listenable.listen)) {
	            return listenable + " is missing a listen method";
	        }
	        if (listenable.hasListener && listenable.hasListener(this)) {
	            return "Listener cannot listen to this listenable because of circular loop";
	        }
	    },
	
	    /**
	     * Sets up a subscription to the given listenable for the context object
	     *
	     * @param {Action|Store} listenable An Action or Store that should be
	     *  listened to.
	     * @param {Function|String} callback The callback to register as event handler
	     * @param {Function|String} defaultCallback The callback to register as default handler
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
	     */
	    listenTo: function(listenable, callback, defaultCallback) {
	        var desub, unsubscriber, subscriptionobj, subs = this.subscriptions = this.subscriptions || [];
	        _.throwIf(this.validateListening(listenable));
	        this.fetchInitialState(listenable, defaultCallback);
	        desub = listenable.listen(this[callback]||callback, this);
	        unsubscriber = function() {
	            var index = subs.indexOf(subscriptionobj);
	            _.throwIf(index === -1,'Tried to remove listen already gone from subscriptions list!');
	            subs.splice(index, 1);
	            desub();
	        };
	        subscriptionobj = {
	            stop: unsubscriber,
	            listenable: listenable
	        };
	        subs.push(subscriptionobj);
	        return subscriptionobj;
	    },
	
	    /**
	     * Stops listening to a single listenable
	     *
	     * @param {Action|Store} listenable The action or store we no longer want to listen to
	     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
	     */
	    stopListeningTo: function(listenable){
	        var sub, i = 0, subs = this.subscriptions || [];
	        for(;i < subs.length; i++){
	            sub = subs[i];
	            if (sub.listenable === listenable){
	                sub.stop();
	                _.throwIf(subs.indexOf(sub)!==-1,'Failed to remove listen from subscriptions list!');
	                return true;
	            }
	        }
	        return false;
	    },
	
	    /**
	     * Stops all subscriptions and empties subscriptions array
	     */
	    stopListeningToAll: function(){
	        var remaining, subs = this.subscriptions || [];
	        while((remaining=subs.length)){
	            subs[0].stop();
	            _.throwIf(subs.length!==remaining-1,'Failed to remove listen from subscriptions list!');
	        }
	    },
	
	    /**
	     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
	     * @param {Action|Store} listenable The publisher we want to get initial state from
	     * @param {Function|String} defaultCallback The method to receive the data
	     */
	    fetchInitialState: function (listenable, defaultCallback) {
	        defaultCallback = (defaultCallback && this[defaultCallback]) || defaultCallback;
	        var me = this;
	        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
	            var data = listenable.getInitialState();
	            if (data && _.isFunction(data.then)) {
	                data.then(function() {
	                    defaultCallback.apply(me, arguments);
	                });
	            } else {
	                defaultCallback.call(this, data);
	            }
	        }
	    },
	
	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the last emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinTrailing: maker("last"),
	
	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with the first emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinLeading: maker("first"),
	
	    /**
	     * The callback will be called once all listenables have triggered at least once.
	     * It will be invoked with all emission from each listenable.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinConcat: maker("all"),
	
	    /**
	     * The callback will be called once all listenables have triggered.
	     * If a callback triggers twice before that happens, an error is thrown.
	     * @param {...Publishers} publishers Publishers that should be tracked.
	     * @param {Function|String} callback The method to call when all publishers have emitted
	     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
	     */
	    joinStrict: maker("strict")
	};


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(147);
	
	/**
	 * A module of methods for object that you want to be able to listen to.
	 * This module is consumed by `createStore` and `createAction`
	 */
	module.exports = {
	
	    /**
	     * Hook used by the publisher that is invoked before emitting
	     * and before `shouldEmit`. The arguments are the ones that the action
	     * is invoked with. If this function returns something other than
	     * undefined, that will be passed on as arguments for shouldEmit and
	     * emission.
	     */
	    preEmit: function() {},
	
	    /**
	     * Hook used by the publisher after `preEmit` to determine if the
	     * event should be emitted with given arguments. This may be overridden
	     * in your application, default implementation always returns true.
	     *
	     * @returns {Boolean} true if event should be emitted
	     */
	    shouldEmit: function() { return true; },
	
	    /**
	     * Subscribes the given callback for action triggered
	     *
	     * @param {Function} callback The callback to register as event handler
	     * @param {Mixed} [optional] bindContext The context to bind the callback with
	     * @returns {Function} Callback that unsubscribes the registered event handler
	     */
	    listen: function(callback, bindContext) {
	        bindContext = bindContext || this;
	        var eventHandler = function(args) {
	            if (aborted){
	                return;
	            }
	            callback.apply(bindContext, args);
	        }, me = this, aborted = false;
	        this.emitter.addListener(this.eventLabel, eventHandler);
	        return function() {
	            aborted = true;
	            me.emitter.removeListener(me.eventLabel, eventHandler);
	        };
	    },
	
	    /**
	     * Attach handlers to promise that trigger the completed and failed
	     * child publishers, if available.
	     *
	     * @param {Object} The promise to attach to
	     */
	    promise: function(promise) {
	        var me = this;
	
	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;
	
	        if (!canHandlePromise){
	            throw new Error('Publisher must have "completed" and "failed" child publishers');
	        }
	
	        promise.then(function(response) {
	            return me.completed(response);
	        }, function(error) {
	            return me.failed(error);
	        });
	    },
	
	    /**
	     * Subscribes the given callback for action triggered, which should
	     * return a promise that in turn is passed to `this.promise`
	     *
	     * @param {Function} callback The callback to register as event handler
	     */
	    listenAndPromise: function(callback, bindContext) {
	        var me = this;
	        bindContext = bindContext || this;
	        this.willCallPromise = (this.willCallPromise || 0) + 1;
	
	        var removeListen = this.listen(function() {
	
	            if (!callback) {
	                throw new Error('Expected a function returning a promise but got ' + callback);
	            }
	
	            var args = arguments,
	                promise = callback.apply(bindContext, args);
	            return me.promise.call(me, promise);
	        }, bindContext);
	
	        return function () {
	          me.willCallPromise--;
	          removeListen.call(me);
	        };
	
	    },
	
	    /**
	     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
	     */
	    trigger: function() {
	        var args = arguments,
	            pre = this.preEmit.apply(this, args);
	        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
	        if (this.shouldEmit.apply(this, args)) {
	            this.emitter.emit(this.eventLabel, args);
	        }
	    },
	
	    /**
	     * Tries to publish the event on the next tick
	     */
	    triggerAsync: function(){
	        var args = arguments,me = this;
	        _.nextTick(function() {
	            me.trigger.apply(me, args);
	        });
	    },
	
	    /**
	     * Returns a Promise for the triggered action
	     *
	     * @return {Promise}
	     *   Resolved by completed child action.
	     *   Rejected by failed child action.
	     *   If listenAndPromise'd, then promise associated to this trigger.
	     *   Otherwise, the promise is for next child action completion.
	     */
	    triggerPromise: function(){
	        var me = this;
	        var args = arguments;
	
	        var canHandlePromise =
	            this.children.indexOf('completed') >= 0 &&
	            this.children.indexOf('failed') >= 0;
	
	        var promise = _.createPromise(function(resolve, reject) {
	            // If `listenAndPromise` is listening
	            // patch `promise` w/ context-loaded resolve/reject
	            if (me.willCallPromise) {
	                _.nextTick(function() {
	                    var old_promise_method = me.promise;
	                    me.promise = function (promise) {
	                        promise.then(resolve, reject);
	                        // Back to your regularly schedule programming.
	                        me.promise = old_promise_method;
	                        return me.promise.apply(me, arguments);
	                    };
	                    me.trigger.apply(me, args);
	                });
	                return;
	            }
	
	            if (canHandlePromise) {
	                var removeSuccess = me.completed.listen(function(args) {
	                    removeSuccess();
	                    removeFailed();
	                    resolve(args);
	                });
	
	                var removeFailed = me.failed.listen(function(args) {
	                    removeSuccess();
	                    removeFailed();
	                    reject(args);
	                });
	            }
	
	            me.triggerAsync.apply(me, args);
	
	            if (!canHandlePromise) {
	                resolve();
	            }
	        });
	
	        return promise;
	    }
	};


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A module of methods that you want to include in all stores.
	 * This module is consumed by `createStore`.
	 */
	module.exports = {
	};


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(147),
	    Reflux = __webpack_require__(67),
	    Keep = __webpack_require__(148),
	    allowed = {preEmit:1,shouldEmit:1};
	
	/**
	 * Creates an action functor object. It is mixed in with functions
	 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
	 * be overridden in the definition object.
	 *
	 * @param {Object} definition The action object definition
	 */
	var createAction = function(definition) {
	
	    definition = definition || {};
	    if (!_.isObject(definition)){
	        definition = {actionName: definition};
	    }
	
	    for(var a in Reflux.ActionMethods){
	        if (!allowed[a] && Reflux.PublisherMethods[a]) {
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }
	
	    for(var d in definition){
	        if (!allowed[d] && Reflux.PublisherMethods[d]) {
	            throw new Error("Cannot override API method " + d +
	                " in action creation. Use another method name or override it on Reflux.PublisherMethods instead."
	            );
	        }
	    }
	
	    definition.children = definition.children || [];
	    if (definition.asyncResult){
	        definition.children = definition.children.concat(["completed","failed"]);
	    }
	
	    var i = 0, childActions = {};
	    for (; i < definition.children.length; i++) {
	        var name = definition.children[i];
	        childActions[name] = createAction(name);
	    }
	
	    var context = _.extend({
	        eventLabel: "action",
	        emitter: new _.EventEmitter(),
	        _isAction: true
	    }, Reflux.PublisherMethods, Reflux.ActionMethods, definition);
	
	    var functor = function() {
	        return functor[functor.sync?"trigger":"triggerPromise"].apply(functor, arguments);
	    };
	
	    _.extend(functor,childActions,context);
	
	    Keep.createdActions.push(functor);
	
	    return functor;
	
	};
	
	module.exports = createAction;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(147),
	    Reflux = __webpack_require__(67),
	    Keep = __webpack_require__(148),
	    mixer = __webpack_require__(193),
	    allowed = {preEmit:1,shouldEmit:1},
	    bindMethods = __webpack_require__(194);
	
	/**
	 * Creates an event emitting Data Store. It is mixed in with functions
	 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
	 * and `shouldEmit` may be overridden in the definition object.
	 *
	 * @param {Object} definition The data store object definition
	 * @returns {Store} A data store instance
	 */
	module.exports = function(definition) {
	
	    definition = definition || {};
	
	    for(var a in Reflux.StoreMethods){
	        if (!allowed[a] && (Reflux.PublisherMethods[a] || Reflux.ListenerMethods[a])){
	            throw new Error("Cannot override API method " + a +
	                " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }
	
	    for(var d in definition){
	        if (!allowed[d] && (Reflux.PublisherMethods[d] || Reflux.ListenerMethods[d])){
	            throw new Error("Cannot override API method " + d +
	                " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
	            );
	        }
	    }
	
	    definition = mixer(definition);
	
	    function Store() {
	        var i=0, arr;
	        this.subscriptions = [];
	        this.emitter = new _.EventEmitter();
	        this.eventLabel = "change";
	        bindMethods(this, definition);
	        if (this.init && _.isFunction(this.init)) {
	            this.init();
	        }
	        if (this.listenables){
	            arr = [].concat(this.listenables);
	            for(;i < arr.length;i++){
	                this.listenToMany(arr[i]);
	            }
	        }
	    }
	
	    _.extend(Store.prototype, Reflux.ListenerMethods, Reflux.PublisherMethods, Reflux.StoreMethods, definition);
	
	    var store = new Store();
	    Keep.createdStores.push(store);
	
	    return store;
	};


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(67),
	    _ = __webpack_require__(147);
	
	module.exports = function(listenable,key){
	    return {
	        getInitialState: function(){
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (key === undefined) {
	                return listenable.getInitialState();
	            } else {
	                return _.object([key],[listenable.getInitialState()]);
	            }
	        },
	        componentDidMount: function(){
	            _.extend(this,Reflux.ListenerMethods);
	            var me = this, cb = (key === undefined ? this.setState : function(v){me.setState(_.object([key],[v]));});
	            this.listenTo(listenable,cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(67),
	  _ = __webpack_require__(147);
	
	module.exports = function(listenable, key, filterFunc) {
	    filterFunc = _.isFunction(key) ? key : filterFunc;
	    return {
	        getInitialState: function() {
	            if (!_.isFunction(listenable.getInitialState)) {
	                return {};
	            } else if (_.isFunction(key)) {
	                return filterFunc.call(this, listenable.getInitialState());
	            } else {
	                // Filter initial payload from store.
	                var result = filterFunc.call(this, listenable.getInitialState());
	                if (result) {
	                  return _.object([key], [result]);
	                } else {
	                  return {};
	                }
	            }
	        },
	        componentDidMount: function() {
	            _.extend(this, Reflux.ListenerMethods);
	            var me = this;
	            var cb = function(value) {
	                if (_.isFunction(key)) {
	                    me.setState(filterFunc.call(me, value));
	                } else {
	                    var result = filterFunc.call(me, value);
	                    me.setState(_.object([key], [result]));
	                }
	            };
	
	            this.listenTo(listenable, cb);
	        },
	        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
	    };
	};
	


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(147),
	    ListenerMethods = __webpack_require__(136);
	
	/**
	 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
	 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
	 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
	 * import everything this mixin contains!
	 */
	module.exports = _.extend({
	
	    /**
	     * Cleans up all listener previously registered.
	     */
	    componentWillUnmount: ListenerMethods.stopListeningToAll
	
	}, ListenerMethods);


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(67);
	
	
	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method.
	 *
	 * @param {Action|Store} listenable An Action or Store that should be
	 *  listened to.
	 * @param {Function|String} callback The callback to register as event handler
	 * @param {Function|String} defaultCallback The callback to register as default handler
	 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
	 */
	module.exports = function(listenable,callback,initial){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenTo(listenable,callback,initial);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var Reflux = __webpack_require__(67);
	
	/**
	 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
	 * without having to manually set listeners in the `componentDidMount` method. This version is used
	 * to automatically set up a `listenToMany` call.
	 *
	 * @param {Object} listenables An object of listenables
	 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
	 */
	module.exports = function(listenables){
	    return {
	        /**
	         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
	         * and then make the call to `listenTo` with the arguments provided to the factory function
	         */
	        componentDidMount: function() {
	            for(var m in Reflux.ListenerMethods){
	                if (this[m] !== Reflux.ListenerMethods[m]){
	                    if (this[m]){
	                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
	                    }
	                    this[m] = Reflux.ListenerMethods[m];
	                }
	            }
	            this.listenToMany(listenables);
	        },
	        /**
	         * Cleans up all listener previously registered.
	         */
	        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
	    };
	};


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Internal module used to create static and instance join methods
	 */
	
	var slice = Array.prototype.slice,
	    _ = __webpack_require__(147),
	    createStore = __webpack_require__(140),
	    strategyMethodNames = {
	        strict: "joinStrict",
	        first: "joinLeading",
	        last: "joinTrailing",
	        all: "joinConcat"
	    };
	
	/**
	 * Used in `index.js` to create the static join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
	 */
	exports.staticJoinCreator = function(strategy){
	    return function(/* listenables... */) {
	        var listenables = slice.call(arguments);
	        return createStore({
	            init: function(){
	                this[strategyMethodNames[strategy]].apply(this,listenables.concat("triggerAsync"));
	            }
	        });
	    };
	};
	
	/**
	 * Used in `ListenerMethods.js` to create the instance join methods
	 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
	 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
	 */
	exports.instanceJoinCreator = function(strategy){
	    return function(/* listenables..., callback*/){
	        _.throwIf(arguments.length < 3,'Cannot create a join with less than 2 listenables!');
	        var listenables = slice.call(arguments),
	            callback = listenables.pop(),
	            numberOfListenables = listenables.length,
	            join = {
	                numberOfListenables: numberOfListenables,
	                callback: this[callback]||callback,
	                listener: this,
	                strategy: strategy
	            }, i, cancels = [], subobj;
	        for (i = 0; i < numberOfListenables; i++) {
	            _.throwIf(this.validateListening(listenables[i]));
	        }
	        for (i = 0; i < numberOfListenables; i++) {
	            cancels.push(listenables[i].listen(newListener(i,join),this));
	        }
	        reset(join);
	        subobj = {listenable: listenables};
	        subobj.stop = makeStopper(subobj,cancels,this);
	        this.subscriptions = (this.subscriptions || []).concat(subobj);
	        return subobj;
	    };
	};
	
	// ---- internal join functions ----
	
	function makeStopper(subobj,cancels,context){
	    return function() {
	        var i, subs = context.subscriptions,
	            index = (subs ? subs.indexOf(subobj) : -1);
	        _.throwIf(index === -1,'Tried to remove join already gone from subscriptions list!');
	        for(i=0;i < cancels.length; i++){
	            cancels[i]();
	        }
	        subs.splice(index, 1);
	    };
	}
	
	function reset(join) {
	    join.listenablesEmitted = new Array(join.numberOfListenables);
	    join.args = new Array(join.numberOfListenables);
	}
	
	function newListener(i,join) {
	    return function() {
	        var callargs = slice.call(arguments);
	        if (join.listenablesEmitted[i]){
	            switch(join.strategy){
	                case "strict": throw new Error("Strict join failed because listener triggered twice.");
	                case "last": join.args[i] = callargs; break;
	                case "all": join.args[i].push(callargs);
	            }
	        } else {
	            join.listenablesEmitted[i] = true;
	            join.args[i] = (join.strategy==="all"?[callargs]:callargs);
	        }
	        emitIfAllListenablesEmitted(join);
	    };
	}
	
	function emitIfAllListenablesEmitted(join) {
	    for (var i = 0; i < join.numberOfListenables; i++) {
	        if (!join.listenablesEmitted[i]) {
	            return;
	        }
	    }
	    join.callback.apply(join.listener,join.args);
	    reset(join);
	}


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
	 * order to remove the dependency
	 */
	var isObject = exports.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	};
	
	exports.extend = function(obj) {
	    if (!isObject(obj)) {
	        return obj;
	    }
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	        source = arguments[i];
	        for (prop in source) {
	            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
	                Object.defineProperty(obj, prop, propertyDescriptor);
	            } else {
	                obj[prop] = source[prop];
	            }
	        }
	    }
	    return obj;
	};
	
	exports.isFunction = function(value) {
	    return typeof value === 'function';
	};
	
	exports.EventEmitter = __webpack_require__(215);
	
	exports.nextTick = function(callback) {
	    setTimeout(callback, 0);
	};
	
	exports.capitalize = function(string){
	    return string.charAt(0).toUpperCase()+string.slice(1);
	};
	
	exports.callbackName = function(string){
	    return "on"+exports.capitalize(string);
	};
	
	exports.object = function(keys,vals){
	    var o={}, i=0;
	    for(;i<keys.length;i++){
	        o[keys[i]] = vals[i];
	    }
	    return o;
	};
	
	exports.Promise = __webpack_require__(216);
	
	exports.createPromise = function(resolver) {
	    return new exports.Promise(resolver);
	};
	
	exports.isArguments = function(value) {
	    return typeof value === 'object' && ('callee' in value) && typeof value.length === 'number';
	};
	
	exports.throwIf = function(val,msg){
	    if (val){
	        throw Error(msg||val);
	    }
	};


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	exports.createdStores = [];
	
	exports.createdActions = [];
	
	exports.reset = function() {
	    while(exports.createdStores.length) {
	        exports.createdStores.pop();
	    }
	    while(exports.createdActions.length) {
	        exports.createdActions.pop();
	    }
	};


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	module.exports = __webpack_require__(213);


/***/ },
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(147);
	
	module.exports = function mix(def) {
	    var composed = {
	        init: [],
	        preEmit: [],
	        shouldEmit: []
	    };
	
	    var updated = (function mixDef(mixin) {
	        var mixed = {};
	        if (mixin.mixins) {
	            mixin.mixins.forEach(function (subMixin) {
	                _.extend(mixed, mixDef(subMixin));
	            });
	        }
	        _.extend(mixed, mixin);
	        Object.keys(composed).forEach(function (composable) {
	            if (mixin.hasOwnProperty(composable)) {
	                composed[composable].push(mixin[composable]);
	            }
	        });
	        return mixed;
	    }(def));
	
	    if (composed.init.length > 1) {
	        updated.init = function () {
	            var args = arguments;
	            composed.init.forEach(function (init) {
	                init.apply(this, args);
	            }, this);
	        };
	    }
	    if (composed.preEmit.length > 1) {
	        updated.preEmit = function () {
	            return composed.preEmit.reduce(function (args, preEmit) {
	                var newValue = preEmit.apply(this, args);
	                return newValue === undefined ? args : [newValue];
	            }.bind(this), arguments);
	        };
	    }
	    if (composed.shouldEmit.length > 1) {
	        updated.shouldEmit = function () {
	            var args = arguments;
	            return !composed.shouldEmit.some(function (shouldEmit) {
	                return !shouldEmit.apply(this, args);
	            }, this);
	        };
	    }
	    Object.keys(composed).forEach(function (composable) {
	        if (composed[composable].length === 1) {
	            updated[composable] = composed[composable][0];
	        }
	    });
	
	    return updated;
	};


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(store, definition) {
	  for (var name in definition) {
	    if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
	        var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);
	
	        if (!propertyDescriptor.value || typeof propertyDescriptor.value !== 'function' || !definition.hasOwnProperty(name)) {
	            continue;
	        }
	
	        store[name] = definition[name].bind(store);
	    } else {
	        var property = definition[name];
	
	        if (typeof property !== 'function' || !definition.hasOwnProperty(name)) {
	            continue;
	        }
	
	        store[name] = property.bind(store);
	    }
	  }
	
	  return store;
	};


/***/ },
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var assign       = __webpack_require__(225).assign;
	var Renderer     = __webpack_require__(226);
	var ParserCore   = __webpack_require__(227);
	var ParserBlock  = __webpack_require__(228);
	var ParserInline = __webpack_require__(229);
	var Ruler        = __webpack_require__(230);
	
	/**
	 * Preset configs
	 */
	
	var config = {
	  'default':    __webpack_require__(231),
	  'full':       __webpack_require__(232),
	  'commonmark': __webpack_require__(233)
	};
	
	/**
	 * The `StateCore` class manages state.
	 *
	 * @param {Object} `self` Remarkable instance
	 * @param {String} `str` Markdown string
	 * @param {Object} `env`
	 */
	
	function StateCore(self, str, env) {
	  this.src = str;
	  this.env = env;
	  this.options = self.options;
	  this.tokens = [];
	  this.inlineMode = false;
	
	  this.inline = self.inline;
	  this.block = self.block;
	  this.renderer = self.renderer;
	  this.typographer = self.typographer;
	}
	
	/**
	 * The main `Remarkable` class. Create an instance of
	 * `Remarkable` with a `preset` and/or `options`.
	 *
	 * @param {String} `preset` If no preset is given, `default` is used.
	 * @param {Object} `options`
	 */
	
	function Remarkable(preset, options) {
	  if (typeof preset !== 'string') {
	    options = preset;
	    preset = 'default';
	  }
	
	  this.inline   = new ParserInline();
	  this.block    = new ParserBlock();
	  this.core     = new ParserCore();
	  this.renderer = new Renderer();
	  this.ruler    = new Ruler();
	
	  this.options  = {};
	  this.configure(config[preset]);
	  this.set(options || {});
	}
	
	/**
	 * Set options as an alternative to passing them
	 * to the constructor.
	 *
	 * ```js
	 * md.set({typographer: true});
	 * ```
	 * @param {Object} `options`
	 * @api public
	 */
	
	Remarkable.prototype.set = function (options) {
	  assign(this.options, options);
	};
	
	/**
	 * Batch loader for components rules states, and options
	 *
	 * @param  {Object} `presets`
	 */
	
	Remarkable.prototype.configure = function (presets) {
	  var self = this;
	
	  if (!presets) { throw new Error('Wrong `remarkable` preset, check name/content'); }
	  if (presets.options) { self.set(presets.options); }
	  if (presets.components) {
	    Object.keys(presets.components).forEach(function (name) {
	      if (presets.components[name].rules) {
	        self[name].ruler.enable(presets.components[name].rules, true);
	      }
	    });
	  }
	};
	
	/**
	 * Use a plugin.
	 *
	 * ```js
	 * var md = new Remarkable();
	 *
	 * md.use(plugin1)
	 *   .use(plugin2, opts)
	 *   .use(plugin3);
	 * ```
	 *
	 * @param  {Function} `plugin`
	 * @param  {Object} `options`
	 * @return {Object} `Remarkable` for chaining
	 */
	
	Remarkable.prototype.use = function (plugin, options) {
	  plugin(this, options);
	  return this;
	};
	
	
	/**
	 * Parse the input `string` and return a tokens array.
	 * Modifies `env` with definitions data.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */
	
	Remarkable.prototype.parse = function (str, env) {
	  var state = new StateCore(this, str, env);
	  this.core.process(state);
	  return state.tokens;
	};
	
	/**
	 * The main `.render()` method that does all the magic :)
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {String} Rendered HTML.
	 */
	
	Remarkable.prototype.render = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parse(str, env), this.options, env);
	};
	
	/**
	 * Parse the given content `string` as a single string.
	 *
	 * @param  {String} `string`
	 * @param  {Object} `env`
	 * @return {Array} Array of tokens
	 */
	
	Remarkable.prototype.parseInline = function (str, env) {
	  var state = new StateCore(this, str, env);
	  state.inlineMode = true;
	  this.core.process(state);
	  return state.tokens;
	};
	
	/**
	 * Render a single content `string`, without wrapping it
	 * to paragraphs
	 *
	 * @param  {String} `str`
	 * @param  {Object} `env`
	 * @return {String}
	 */
	
	Remarkable.prototype.renderInline = function (str, env) {
	  env = env || {};
	  return this.renderer.render(this.parseInline(str, env), this.options, env);
	};
	
	/**
	 * Expose `Remarkable`
	 */
	
	module.exports = Remarkable;
	
	/**
	 * Expose `utils`, Useful helper functions for custom
	 * rendering.
	 */
	
	module.exports.utils = __webpack_require__(225);


/***/ },
/* 214 */,
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  if (!this._events || !this._events[event]) return [];
	  if (this._events[event].fn) return [this._events[event].fn];
	
	  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
	    ee[i] = this._events[event][i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  if (!this._events || !this._events[event]) return false;
	
	  var listeners = this._events[event]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this);
	
	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true);
	
	  if (!this._events) this._events = {};
	  if (!this._events[event]) this._events[event] = listener;
	  else {
	    if (!this._events[event].fn) this._events[event].push(listener);
	    else this._events[event] = [
	      this._events[event], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
	  if (!this._events || !this._events[event]) return this;
	
	  var listeners = this._events[event]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
	      events.push(listeners);
	    }
	    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
	      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
	        events.push(listeners[i]);
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[event] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[event];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[event];
	  else this._events = {};
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the module.
	//
	EventEmitter.EventEmitter = EventEmitter;
	EventEmitter.EventEmitter2 = EventEmitter;
	EventEmitter.EventEmitter3 = EventEmitter;
	
	//
	// Expose the module.
	//
	module.exports = EventEmitter;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*! Native Promise Only
	    v0.7.6-a (c) Kyle Simpson
	    MIT License: http://getify.mit-license.org
	*/
	!function(t,n,e){n[t]=n[t]||e(),"undefined"!=typeof module&&module.exports?module.exports=n[t]:"function"=="function"&&__webpack_require__(278)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return n[t]}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}("Promise","undefined"!=typeof global?global:this,function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain))}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n?n:!1}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function o(t,e,o){var r,i;try{e===!1?o.reject(t.msg):(r=e===!0?t.msg:e.call(void 0,t.msg),r===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r))}catch(c){o.reject(c)}}function r(o){var c,u,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(c=n(o))?(u=new f(a),c.call(o,function(){r.apply(u,arguments)},function(){i.apply(u,arguments)})):(a.msg=o,a.state=1,a.chain.length>0&&t(e,a))}catch(s){i.call(u||new f(a),s)}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o))}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then(function(t){e(r,t)},o)}(r)}function f(t){this.def=t,this.triggered=!1}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"==typeof n?n:!0,failure:"function"==typeof r?r:!1};return i.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n}),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this["catch"]=function(t){return this.then(void 0,t)};try{n.call(void 0,function(t){r.call(o,t)},function(t){i.call(o,t)})}catch(c){i.call(o,c)}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:o!==!1})}}catch(d){s=function(t,n,e){return t[n]=e,t}}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var g=s({},"constructor",a,!1);return s(a,"prototype",g,!1),s(g,"__NPO__",0,!1),s(a,"resolve",function(t){var n=this;return t&&"object"==typeof t&&1===t.__NPO__?t:new n(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t)})}),s(a,"reject",function(t){return new this(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t)})}),s(a,"all",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,function(t,n){i[t]=n,++f===r&&e(i)},o)})}),s(a,"race",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,function(t,n){e(n)},o)})}),a});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(277).setImmediate))

/***/ },
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Utility functions
	 */
	
	function typeOf(obj) {
	  return Object.prototype.toString.call(obj);
	}
	
	function isString(obj) {
	  return typeOf(obj) === '[object String]';
	}
	
	var hasOwn = Object.prototype.hasOwnProperty;
	
	function has(object, key) {
	  return object
	    ? hasOwn.call(object, key)
	    : false;
	}
	
	// Extend objects
	//
	function assign(obj /*from1, from2, from3, ...*/) {
	  var sources = [].slice.call(arguments, 1);
	
	  sources.forEach(function (source) {
	    if (!source) { return; }
	
	    if (typeof source !== 'object') {
	      throw new TypeError(source + 'must be object');
	    }
	
	    Object.keys(source).forEach(function (key) {
	      obj[key] = source[key];
	    });
	  });
	
	  return obj;
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	
	function unescapeMd(str) {
	  if (str.indexOf('\\') < 0) { return str; }
	  return str.replace(UNESCAPE_MD_RE, '$1');
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	function isValidEntityCode(c) {
	  /*eslint no-bitwise:0*/
	  // broken sequence
	  if (c >= 0xD800 && c <= 0xDFFF) { return false; }
	  // never used
	  if (c >= 0xFDD0 && c <= 0xFDEF) { return false; }
	  if ((c & 0xFFFF) === 0xFFFF || (c & 0xFFFF) === 0xFFFE) { return false; }
	  // control codes
	  if (c >= 0x00 && c <= 0x08) { return false; }
	  if (c === 0x0B) { return false; }
	  if (c >= 0x0E && c <= 0x1F) { return false; }
	  if (c >= 0x7F && c <= 0x9F) { return false; }
	  // out of range
	  if (c > 0x10FFFF) { return false; }
	  return true;
	}
	
	function fromCodePoint(c) {
	  /*eslint no-bitwise:0*/
	  if (c > 0xffff) {
	    c -= 0x10000;
	    var surrogate1 = 0xd800 + (c >> 10),
	        surrogate2 = 0xdc00 + (c & 0x3ff);
	
	    return String.fromCharCode(surrogate1, surrogate2);
	  }
	  return String.fromCharCode(c);
	}
	
	var NAMED_ENTITY_RE   = /&([a-z#][a-z0-9]{1,31});/gi;
	var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
	var entities = __webpack_require__(236);
	
	function replaceEntityPattern(match, name) {
	  var code = 0;
	
	  if (has(entities, name)) {
	    return entities[name];
	  } else if (name.charCodeAt(0) === 0x23/* # */ && DIGITAL_ENTITY_TEST_RE.test(name)) {
	    code = name[1].toLowerCase() === 'x' ?
	      parseInt(name.slice(2), 16)
	    :
	      parseInt(name.slice(1), 10);
	    if (isValidEntityCode(code)) {
	      return fromCodePoint(code);
	    }
	  }
	  return match;
	}
	
	function replaceEntities(str) {
	  if (str.indexOf('&') < 0) { return str; }
	
	  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	var HTML_ESCAPE_TEST_RE = /[&<>"]/;
	var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
	var HTML_REPLACEMENTS = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	
	function replaceUnsafeChar(ch) {
	  return HTML_REPLACEMENTS[ch];
	}
	
	function escapeHtml(str) {
	  if (HTML_ESCAPE_TEST_RE.test(str)) {
	    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
	  }
	  return str;
	}
	
	////////////////////////////////////////////////////////////////////////////////
	
	exports.assign            = assign;
	exports.isString          = isString;
	exports.has               = has;
	exports.unescapeMd        = unescapeMd;
	exports.isValidEntityCode = isValidEntityCode;
	exports.fromCodePoint     = fromCodePoint;
	exports.replaceEntities   = replaceEntities;
	exports.escapeHtml        = escapeHtml;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var utils = __webpack_require__(225);
	var rules = __webpack_require__(237);
	
	/**
	 * Expose `Renderer`
	 */
	
	module.exports = Renderer;
	
	/**
	 * Renderer class. Renders HTML and exposes `rules` to allow
	 * local modifications.
	 */
	
	function Renderer() {
	  this.rules = utils.assign({}, rules);
	
	  // exported helper, for custom rules only
	  this.getBreak = rules.getBreak;
	}
	
	/**
	 * Render a string of inline HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */
	
	Renderer.prototype.renderInline = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = 0;
	  var result = '';
	
	  while (len--) {
	    result += _rules[tokens[i].type](tokens, i++, options, env, this);
	  }
	
	  return result;
	};
	
	/**
	 * Render a string of HTML with the given `tokens` and
	 * `options`.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @return {String}
	 * @api public
	 */
	
	Renderer.prototype.render = function (tokens, options, env) {
	  var _rules = this.rules;
	  var len = tokens.length, i = -1;
	  var result = '';
	
	  while (++i < len) {
	    if (tokens[i].type === 'inline') {
	      result += this.renderInline(tokens[i].children, options, env);
	    } else {
	      result += _rules[tokens[i].type](tokens, i, options, env, this);
	    }
	  }
	  return result;
	};


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var Ruler = __webpack_require__(230);
	
	/**
	 * Core parser `rules`
	 */
	
	var _rules = [
	  [ 'block',          __webpack_require__(251)          ],
	  [ 'abbr',           __webpack_require__(252)           ],
	  [ 'references',     __webpack_require__(253)     ],
	  [ 'inline',         __webpack_require__(254)         ],
	  [ 'footnote_tail',  __webpack_require__(255)  ],
	  [ 'abbr2',          __webpack_require__(256)          ],
	  [ 'replacements',   __webpack_require__(257)   ],
	  [ 'smartquotes',    __webpack_require__(258)    ],
	  [ 'linkify',        __webpack_require__(259)        ]
	];
	
	/**
	 * Class for top level (`core`) parser rules
	 *
	 * @api private
	 */
	
	function Core() {
	  this.options = {};
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	}
	
	/**
	 * Process rules with the given `state`
	 *
	 * @param  {Object} `state`
	 * @api private
	 */
	
	Core.prototype.process = function (state) {
	  var i, l, rules;
	  rules = this.ruler.getRules('');
	  for (i = 0, l = rules.length; i < l; i++) {
	    rules[i](state);
	  }
	};
	
	/**
	 * Expose `Core`
	 */
	
	module.exports = Core;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var Ruler      = __webpack_require__(230);
	var StateBlock = __webpack_require__(238);
	
	/**
	 * Parser rules
	 */
	
	var _rules = [
	  [ 'code',       __webpack_require__(239) ],
	  [ 'fences',     __webpack_require__(240),     [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'blockquote', __webpack_require__(241), [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'hr',         __webpack_require__(242),         [ 'paragraph', 'blockquote', 'list' ] ],
	  [ 'list',       __webpack_require__(243),       [ 'paragraph', 'blockquote' ] ],
	  [ 'footnote',   __webpack_require__(244),   [ 'paragraph' ] ],
	  [ 'heading',    __webpack_require__(245),    [ 'paragraph', 'blockquote' ] ],
	  [ 'lheading',   __webpack_require__(246) ],
	  [ 'htmlblock',  __webpack_require__(247),  [ 'paragraph', 'blockquote' ] ],
	  [ 'table',      __webpack_require__(248),      [ 'paragraph' ] ],
	  [ 'deflist',    __webpack_require__(249),    [ 'paragraph' ] ],
	  [ 'paragraph',  __webpack_require__(250) ]
	];
	
	/**
	 * Block Parser class
	 *
	 * @api private
	 */
	
	function ParserBlock() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1], {
	      alt: (_rules[i][2] || []).slice()
	    });
	  }
	}
	
	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state` Has properties like `src`, `parser`, `options` etc
	 * @param  {Number} `startLine`
	 * @param  {Number} `endLine`
	 * @api private
	 */
	
	ParserBlock.prototype.tokenize = function (state, startLine, endLine) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var line = startLine;
	  var hasEmptyLines = false;
	  var ok, i;
	
	  while (line < endLine) {
	    state.line = line = state.skipEmptyLines(line);
	    if (line >= endLine) {
	      break;
	    }
	
	    // Termination condition for nested calls.
	    // Nested calls currently used for blockquotes & lists
	    if (state.tShift[line] < state.blkIndent) {
	      break;
	    }
	
	    // Try all possible rules.
	    // On success, rule should:
	    //
	    // - update `state.line`
	    // - update `state.tokens`
	    // - return true
	
	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, line, endLine, false);
	      if (ok) {
	        break;
	      }
	    }
	
	    // set state.tight iff we had an empty line before current tag
	    // i.e. latest empty line should not count
	    state.tight = !hasEmptyLines;
	
	    // paragraph might "eat" one newline after it in nested lists
	    if (state.isEmpty(state.line - 1)) {
	      hasEmptyLines = true;
	    }
	
	    line = state.line;
	
	    if (line < endLine && state.isEmpty(line)) {
	      hasEmptyLines = true;
	      line++;
	
	      // two empty lines should stop the parser in list mode
	      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) { break; }
	      state.line = line;
	    }
	  }
	};
	
	var TABS_SCAN_RE = /[\n\t]/g;
	var NEWLINES_RE  = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
	var SPACES_RE    = /\u00a0/g;
	
	/**
	 * Tokenize the given `str`.
	 *
	 * @param  {String} `str` Source string
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */
	
	ParserBlock.prototype.parse = function (str, options, env, outTokens) {
	  var state, lineStart = 0, lastTabPos = 0;
	  if (!str) { return []; }
	
	  // Normalize spaces
	  str = str.replace(SPACES_RE, ' ');
	
	  // Normalize newlines
	  str = str.replace(NEWLINES_RE, '\n');
	
	  // Replace tabs with proper number of spaces (1..4)
	  if (str.indexOf('\t') >= 0) {
	    str = str.replace(TABS_SCAN_RE, function (match, offset) {
	      var result;
	      if (str.charCodeAt(offset) === 0x0A) {
	        lineStart = offset + 1;
	        lastTabPos = 0;
	        return match;
	      }
	      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
	      lastTabPos = offset - lineStart + 1;
	      return result;
	    });
	  }
	
	  state = new StateBlock(str, this, options, env, outTokens);
	  this.tokenize(state, state.line, state.lineMax);
	};
	
	/**
	 * Expose `ParserBlock`
	 */
	
	module.exports = ParserBlock;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var Ruler       = __webpack_require__(230);
	var StateInline = __webpack_require__(260);
	var utils       = __webpack_require__(225);
	
	/**
	 * Inline Parser `rules`
	 */
	
	var _rules = [
	  [ 'text',            __webpack_require__(261) ],
	  [ 'newline',         __webpack_require__(262) ],
	  [ 'escape',          __webpack_require__(263) ],
	  [ 'backticks',       __webpack_require__(264) ],
	  [ 'del',             __webpack_require__(265) ],
	  [ 'ins',             __webpack_require__(266) ],
	  [ 'mark',            __webpack_require__(267) ],
	  [ 'emphasis',        __webpack_require__(268) ],
	  [ 'sub',             __webpack_require__(269) ],
	  [ 'sup',             __webpack_require__(270) ],
	  [ 'links',           __webpack_require__(271) ],
	  [ 'footnote_inline', __webpack_require__(272) ],
	  [ 'footnote_ref',    __webpack_require__(273) ],
	  [ 'autolink',        __webpack_require__(274) ],
	  [ 'htmltag',         __webpack_require__(275) ],
	  [ 'entity',          __webpack_require__(276) ]
	];
	
	/**
	 * Inline Parser class. Note that link validation is stricter
	 * in Remarkable than what is specified by CommonMark. If you
	 * want to change this you can use a custom validator.
	 *
	 * @api private
	 */
	
	function ParserInline() {
	  this.ruler = new Ruler();
	  for (var i = 0; i < _rules.length; i++) {
	    this.ruler.push(_rules[i][0], _rules[i][1]);
	  }
	
	  // Can be overridden with a custom validator
	  this.validateLink = validateLink;
	}
	
	/**
	 * Skip a single token by running all rules in validation mode.
	 * Returns `true` if any rule reports success.
	 *
	 * @param  {Object} `state`
	 * @api privage
	 */
	
	ParserInline.prototype.skipToken = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var pos = state.pos;
	  var i, cached_pos;
	
	  if ((cached_pos = state.cacheGet(pos)) > 0) {
	    state.pos = cached_pos;
	    return;
	  }
	
	  for (i = 0; i < len; i++) {
	    if (rules[i](state, true)) {
	      state.cacheSet(pos, state.pos);
	      return;
	    }
	  }
	
	  state.pos++;
	  state.cacheSet(pos, state.pos);
	};
	
	/**
	 * Generate tokens for the given input range.
	 *
	 * @param  {Object} `state`
	 * @api private
	 */
	
	ParserInline.prototype.tokenize = function (state) {
	  var rules = this.ruler.getRules('');
	  var len = rules.length;
	  var end = state.posMax;
	  var ok, i;
	
	  while (state.pos < end) {
	
	    // Try all possible rules.
	    // On success, the rule should:
	    //
	    // - update `state.pos`
	    // - update `state.tokens`
	    // - return true
	    for (i = 0; i < len; i++) {
	      ok = rules[i](state, false);
	
	      if (ok) {
	        break;
	      }
	    }
	
	    if (ok) {
	      if (state.pos >= end) { break; }
	      continue;
	    }
	
	    state.pending += state.src[state.pos++];
	  }
	
	  if (state.pending) {
	    state.pushPending();
	  }
	};
	
	/**
	 * Parse the given input string.
	 *
	 * @param  {String} `str`
	 * @param  {Object} `options`
	 * @param  {Object} `env`
	 * @param  {Array} `outTokens`
	 * @api private
	 */
	
	ParserInline.prototype.parse = function (str, options, env, outTokens) {
	  var state = new StateInline(str, this, options, env, outTokens);
	  this.tokenize(state);
	};
	
	/**
	 * Validate the given `url` by checking for bad protocols.
	 *
	 * @param  {String} `url`
	 * @return {Boolean}
	 */
	
	function validateLink(url) {
	  var BAD_PROTOCOLS = [ 'vbscript', 'javascript', 'file' ];
	  var str = url.trim().toLowerCase();
	  // Care about digital entities "javascript&#x3A;alert(1)"
	  str = utils.replaceEntities(str);
	  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
	    return false;
	  }
	  return true;
	}
	
	/**
	 * Expose `ParserInline`
	 */
	
	module.exports = ParserInline;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Ruler is a helper class for building responsibility chains from
	 * parse rules. It allows:
	 *
	 *   - easy stack rules chains
	 *   - getting main chain and named chains content (as arrays of functions)
	 *
	 * Helper methods, should not be used directly.
	 * @api private
	 */
	
	function Ruler() {
	  // List of added rules. Each element is:
	  //
	  // { name: XXX,
	  //   enabled: Boolean,
	  //   fn: Function(),
	  //   alt: [ name2, name3 ] }
	  //
	  this.__rules__ = [];
	
	  // Cached rule chains.
	  //
	  // First level - chain name, '' for default.
	  // Second level - digital anchor for fast filtering by charcodes.
	  //
	  this.__cache__ = null;
	}
	
	/**
	 * Find the index of a rule by `name`.
	 *
	 * @param  {String} `name`
	 * @return {Number} Index of the given `name`
	 * @api private
	 */
	
	Ruler.prototype.__find__ = function (name) {
	  var len = this.__rules__.length;
	  var i = -1;
	
	  while (len--) {
	    if (this.__rules__[++i].name === name) {
	      return i;
	    }
	  }
	  return -1;
	};
	
	/**
	 * Build the rules lookup cache
	 *
	 * @api private
	 */
	
	Ruler.prototype.__compile__ = function () {
	  var self = this;
	  var chains = [ '' ];
	
	  // collect unique names
	  self.__rules__.forEach(function (rule) {
	    if (!rule.enabled) {
	      return;
	    }
	
	    rule.alt.forEach(function (altName) {
	      if (chains.indexOf(altName) < 0) {
	        chains.push(altName);
	      }
	    });
	  });
	
	  self.__cache__ = {};
	
	  chains.forEach(function (chain) {
	    self.__cache__[chain] = [];
	    self.__rules__.forEach(function (rule) {
	      if (!rule.enabled) {
	        return;
	      }
	
	      if (chain && rule.alt.indexOf(chain) < 0) {
	        return;
	      }
	      self.__cache__[chain].push(rule.fn);
	    });
	  });
	};
	
	/**
	 * Ruler public methods
	 * ------------------------------------------------
	 */
	
	/**
	 * Replace rule function
	 *
	 * @param  {String} `name` Rule name
	 * @param  {Function `fn`
	 * @param  {Object} `options`
	 * @api private
	 */
	
	Ruler.prototype.at = function (name, fn, options) {
	  var idx = this.__find__(name);
	  var opt = options || {};
	
	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + name);
	  }
	
	  this.__rules__[idx].fn = fn;
	  this.__rules__[idx].alt = opt.alt || [];
	  this.__cache__ = null;
	};
	
	/**
	 * Add a rule to the chain before given the `ruleName`.
	 *
	 * @param  {String}   `beforeName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */
	
	Ruler.prototype.before = function (beforeName, ruleName, fn, options) {
	  var idx = this.__find__(beforeName);
	  var opt = options || {};
	
	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + beforeName);
	  }
	
	  this.__rules__.splice(idx, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });
	
	  this.__cache__ = null;
	};
	
	/**
	 * Add a rule to the chain after the given `ruleName`.
	 *
	 * @param  {String}   `afterName`
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @api private
	 */
	
	Ruler.prototype.after = function (afterName, ruleName, fn, options) {
	  var idx = this.__find__(afterName);
	  var opt = options || {};
	
	  if (idx === -1) {
	    throw new Error('Parser rule not found: ' + afterName);
	  }
	
	  this.__rules__.splice(idx + 1, 0, {
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });
	
	  this.__cache__ = null;
	};
	
	/**
	 * Add a rule to the end of chain.
	 *
	 * @param  {String}   `ruleName`
	 * @param  {Function} `fn`
	 * @param  {Object}   `options`
	 * @return {String}
	 */
	
	Ruler.prototype.push = function (ruleName, fn, options) {
	  var opt = options || {};
	
	  this.__rules__.push({
	    name: ruleName,
	    enabled: true,
	    fn: fn,
	    alt: opt.alt || []
	  });
	
	  this.__cache__ = null;
	};
	
	/**
	 * Enable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to enable
	 * @param  {Boolean} `strict` If `true`, all non listed rules will be disabled.
	 * @api private
	 */
	
	Ruler.prototype.enable = function (list, strict) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;
	
	  // In strict mode disable all existing rules first
	  if (strict) {
	    this.__rules__.forEach(function (rule) {
	      rule.enabled = false;
	    });
	  }
	
	  // Search by name and enable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = true;
	  }, this);
	
	  this.__cache__ = null;
	};
	
	
	/**
	 * Disable a rule or list of rules.
	 *
	 * @param  {String|Array} `list` Name or array of rule names to disable
	 * @api private
	 */
	
	Ruler.prototype.disable = function (list) {
	  list = !Array.isArray(list)
	    ? [ list ]
	    : list;
	
	  // Search by name and disable
	  list.forEach(function (name) {
	    var idx = this.__find__(name);
	    if (idx < 0) {
	      throw new Error('Rules manager: invalid rule name ' + name);
	    }
	    this.__rules__[idx].enabled = false;
	  }, this);
	
	  this.__cache__ = null;
	};
	
	/**
	 * Get a rules list as an array of functions.
	 *
	 * @param  {String} `chainName`
	 * @return {Object}
	 * @api private
	 */
	
	Ruler.prototype.getRules = function (chainName) {
	  if (this.__cache__ === null) {
	    this.__compile__();
	  }
	  return this.__cache__[chainName];
	};
	
	/**
	 * Expose `Ruler`
	 */
	
	module.exports = Ruler;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// Remarkable default options
	
	'use strict';
	
	
	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	
	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,
	
	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',
	
	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,
	
	    maxNesting:   20            // Internal protection, recursion limit
	  },
	
	  components: {
	
	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'replacements',
	        'linkify',
	        'smartquotes',
	        'references',
	        'abbr2',
	        'footnote_tail'
	      ]
	    },
	
	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph',
	        'table'
	      ]
	    },
	
	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'del',
	        'emphasis',
	        'entity',
	        'escape',
	        'footnote_ref',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// Remarkable default options
	
	'use strict';
	
	
	module.exports = {
	  options: {
	    html:         false,        // Enable HTML tags in source
	    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	
	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,
	
	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes:       '“”‘’',
	
	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight:     null,
	
	    maxNesting:    20            // Internal protection, recursion limit
	  },
	
	  components: {
	    // Don't restrict core/block/inline rules
	    core: {},
	    block: {},
	    inline: {}
	  }
	};


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// Commonmark default options
	
	'use strict';
	
	
	module.exports = {
	  options: {
	    html:         true,         // Enable HTML tags in source
	    xhtmlOut:     true,         // Use '/' to close single tags (<br />)
	    breaks:       false,        // Convert '\n' in paragraphs into <br>
	    langPrefix:   'language-',  // CSS language prefix for fenced blocks
	    linkify:      false,        // autoconvert URL-like texts to links
	
	    // Enable some language-neutral replacements + quotes beautification
	    typographer:  false,
	
	    // Double + single quotes replacement pairs, when typographer enabled,
	    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	    quotes: '“”‘’',
	
	    // Highlighter function. Should return escaped HTML,
	    // or '' if input not changed
	    //
	    // function (/*str, lang*/) { return ''; }
	    //
	    highlight: null,
	
	    maxNesting:   20            // Internal protection, recursion limit
	  },
	
	  components: {
	
	    core: {
	      rules: [
	        'block',
	        'inline',
	        'references',
	        'abbr2'
	      ]
	    },
	
	    block: {
	      rules: [
	        'blockquote',
	        'code',
	        'fences',
	        'heading',
	        'hr',
	        'htmlblock',
	        'lheading',
	        'list',
	        'paragraph'
	      ]
	    },
	
	    inline: {
	      rules: [
	        'autolink',
	        'backticks',
	        'emphasis',
	        'entity',
	        'escape',
	        'htmltag',
	        'links',
	        'newline',
	        'text'
	      ]
	    }
	  }
	};


/***/ },
/* 234 */,
/* 235 */,
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// List of valid entities
	//
	// Generate with ./support/entities.js script
	//
	'use strict';
	
	/*eslint quotes:0*/
	module.exports = {
	  "Aacute":"\u00C1",
	  "aacute":"\u00E1",
	  "Abreve":"\u0102",
	  "abreve":"\u0103",
	  "ac":"\u223E",
	  "acd":"\u223F",
	  "acE":"\u223E\u0333",
	  "Acirc":"\u00C2",
	  "acirc":"\u00E2",
	  "acute":"\u00B4",
	  "Acy":"\u0410",
	  "acy":"\u0430",
	  "AElig":"\u00C6",
	  "aelig":"\u00E6",
	  "af":"\u2061",
	  "Afr":"\uD835\uDD04",
	  "afr":"\uD835\uDD1E",
	  "Agrave":"\u00C0",
	  "agrave":"\u00E0",
	  "alefsym":"\u2135",
	  "aleph":"\u2135",
	  "Alpha":"\u0391",
	  "alpha":"\u03B1",
	  "Amacr":"\u0100",
	  "amacr":"\u0101",
	  "amalg":"\u2A3F",
	  "AMP":"\u0026",
	  "amp":"\u0026",
	  "And":"\u2A53",
	  "and":"\u2227",
	  "andand":"\u2A55",
	  "andd":"\u2A5C",
	  "andslope":"\u2A58",
	  "andv":"\u2A5A",
	  "ang":"\u2220",
	  "ange":"\u29A4",
	  "angle":"\u2220",
	  "angmsd":"\u2221",
	  "angmsdaa":"\u29A8",
	  "angmsdab":"\u29A9",
	  "angmsdac":"\u29AA",
	  "angmsdad":"\u29AB",
	  "angmsdae":"\u29AC",
	  "angmsdaf":"\u29AD",
	  "angmsdag":"\u29AE",
	  "angmsdah":"\u29AF",
	  "angrt":"\u221F",
	  "angrtvb":"\u22BE",
	  "angrtvbd":"\u299D",
	  "angsph":"\u2222",
	  "angst":"\u00C5",
	  "angzarr":"\u237C",
	  "Aogon":"\u0104",
	  "aogon":"\u0105",
	  "Aopf":"\uD835\uDD38",
	  "aopf":"\uD835\uDD52",
	  "ap":"\u2248",
	  "apacir":"\u2A6F",
	  "apE":"\u2A70",
	  "ape":"\u224A",
	  "apid":"\u224B",
	  "apos":"\u0027",
	  "ApplyFunction":"\u2061",
	  "approx":"\u2248",
	  "approxeq":"\u224A",
	  "Aring":"\u00C5",
	  "aring":"\u00E5",
	  "Ascr":"\uD835\uDC9C",
	  "ascr":"\uD835\uDCB6",
	  "Assign":"\u2254",
	  "ast":"\u002A",
	  "asymp":"\u2248",
	  "asympeq":"\u224D",
	  "Atilde":"\u00C3",
	  "atilde":"\u00E3",
	  "Auml":"\u00C4",
	  "auml":"\u00E4",
	  "awconint":"\u2233",
	  "awint":"\u2A11",
	  "backcong":"\u224C",
	  "backepsilon":"\u03F6",
	  "backprime":"\u2035",
	  "backsim":"\u223D",
	  "backsimeq":"\u22CD",
	  "Backslash":"\u2216",
	  "Barv":"\u2AE7",
	  "barvee":"\u22BD",
	  "Barwed":"\u2306",
	  "barwed":"\u2305",
	  "barwedge":"\u2305",
	  "bbrk":"\u23B5",
	  "bbrktbrk":"\u23B6",
	  "bcong":"\u224C",
	  "Bcy":"\u0411",
	  "bcy":"\u0431",
	  "bdquo":"\u201E",
	  "becaus":"\u2235",
	  "Because":"\u2235",
	  "because":"\u2235",
	  "bemptyv":"\u29B0",
	  "bepsi":"\u03F6",
	  "bernou":"\u212C",
	  "Bernoullis":"\u212C",
	  "Beta":"\u0392",
	  "beta":"\u03B2",
	  "beth":"\u2136",
	  "between":"\u226C",
	  "Bfr":"\uD835\uDD05",
	  "bfr":"\uD835\uDD1F",
	  "bigcap":"\u22C2",
	  "bigcirc":"\u25EF",
	  "bigcup":"\u22C3",
	  "bigodot":"\u2A00",
	  "bigoplus":"\u2A01",
	  "bigotimes":"\u2A02",
	  "bigsqcup":"\u2A06",
	  "bigstar":"\u2605",
	  "bigtriangledown":"\u25BD",
	  "bigtriangleup":"\u25B3",
	  "biguplus":"\u2A04",
	  "bigvee":"\u22C1",
	  "bigwedge":"\u22C0",
	  "bkarow":"\u290D",
	  "blacklozenge":"\u29EB",
	  "blacksquare":"\u25AA",
	  "blacktriangle":"\u25B4",
	  "blacktriangledown":"\u25BE",
	  "blacktriangleleft":"\u25C2",
	  "blacktriangleright":"\u25B8",
	  "blank":"\u2423",
	  "blk12":"\u2592",
	  "blk14":"\u2591",
	  "blk34":"\u2593",
	  "block":"\u2588",
	  "bne":"\u003D\u20E5",
	  "bnequiv":"\u2261\u20E5",
	  "bNot":"\u2AED",
	  "bnot":"\u2310",
	  "Bopf":"\uD835\uDD39",
	  "bopf":"\uD835\uDD53",
	  "bot":"\u22A5",
	  "bottom":"\u22A5",
	  "bowtie":"\u22C8",
	  "boxbox":"\u29C9",
	  "boxDL":"\u2557",
	  "boxDl":"\u2556",
	  "boxdL":"\u2555",
	  "boxdl":"\u2510",
	  "boxDR":"\u2554",
	  "boxDr":"\u2553",
	  "boxdR":"\u2552",
	  "boxdr":"\u250C",
	  "boxH":"\u2550",
	  "boxh":"\u2500",
	  "boxHD":"\u2566",
	  "boxHd":"\u2564",
	  "boxhD":"\u2565",
	  "boxhd":"\u252C",
	  "boxHU":"\u2569",
	  "boxHu":"\u2567",
	  "boxhU":"\u2568",
	  "boxhu":"\u2534",
	  "boxminus":"\u229F",
	  "boxplus":"\u229E",
	  "boxtimes":"\u22A0",
	  "boxUL":"\u255D",
	  "boxUl":"\u255C",
	  "boxuL":"\u255B",
	  "boxul":"\u2518",
	  "boxUR":"\u255A",
	  "boxUr":"\u2559",
	  "boxuR":"\u2558",
	  "boxur":"\u2514",
	  "boxV":"\u2551",
	  "boxv":"\u2502",
	  "boxVH":"\u256C",
	  "boxVh":"\u256B",
	  "boxvH":"\u256A",
	  "boxvh":"\u253C",
	  "boxVL":"\u2563",
	  "boxVl":"\u2562",
	  "boxvL":"\u2561",
	  "boxvl":"\u2524",
	  "boxVR":"\u2560",
	  "boxVr":"\u255F",
	  "boxvR":"\u255E",
	  "boxvr":"\u251C",
	  "bprime":"\u2035",
	  "Breve":"\u02D8",
	  "breve":"\u02D8",
	  "brvbar":"\u00A6",
	  "Bscr":"\u212C",
	  "bscr":"\uD835\uDCB7",
	  "bsemi":"\u204F",
	  "bsim":"\u223D",
	  "bsime":"\u22CD",
	  "bsol":"\u005C",
	  "bsolb":"\u29C5",
	  "bsolhsub":"\u27C8",
	  "bull":"\u2022",
	  "bullet":"\u2022",
	  "bump":"\u224E",
	  "bumpE":"\u2AAE",
	  "bumpe":"\u224F",
	  "Bumpeq":"\u224E",
	  "bumpeq":"\u224F",
	  "Cacute":"\u0106",
	  "cacute":"\u0107",
	  "Cap":"\u22D2",
	  "cap":"\u2229",
	  "capand":"\u2A44",
	  "capbrcup":"\u2A49",
	  "capcap":"\u2A4B",
	  "capcup":"\u2A47",
	  "capdot":"\u2A40",
	  "CapitalDifferentialD":"\u2145",
	  "caps":"\u2229\uFE00",
	  "caret":"\u2041",
	  "caron":"\u02C7",
	  "Cayleys":"\u212D",
	  "ccaps":"\u2A4D",
	  "Ccaron":"\u010C",
	  "ccaron":"\u010D",
	  "Ccedil":"\u00C7",
	  "ccedil":"\u00E7",
	  "Ccirc":"\u0108",
	  "ccirc":"\u0109",
	  "Cconint":"\u2230",
	  "ccups":"\u2A4C",
	  "ccupssm":"\u2A50",
	  "Cdot":"\u010A",
	  "cdot":"\u010B",
	  "cedil":"\u00B8",
	  "Cedilla":"\u00B8",
	  "cemptyv":"\u29B2",
	  "cent":"\u00A2",
	  "CenterDot":"\u00B7",
	  "centerdot":"\u00B7",
	  "Cfr":"\u212D",
	  "cfr":"\uD835\uDD20",
	  "CHcy":"\u0427",
	  "chcy":"\u0447",
	  "check":"\u2713",
	  "checkmark":"\u2713",
	  "Chi":"\u03A7",
	  "chi":"\u03C7",
	  "cir":"\u25CB",
	  "circ":"\u02C6",
	  "circeq":"\u2257",
	  "circlearrowleft":"\u21BA",
	  "circlearrowright":"\u21BB",
	  "circledast":"\u229B",
	  "circledcirc":"\u229A",
	  "circleddash":"\u229D",
	  "CircleDot":"\u2299",
	  "circledR":"\u00AE",
	  "circledS":"\u24C8",
	  "CircleMinus":"\u2296",
	  "CirclePlus":"\u2295",
	  "CircleTimes":"\u2297",
	  "cirE":"\u29C3",
	  "cire":"\u2257",
	  "cirfnint":"\u2A10",
	  "cirmid":"\u2AEF",
	  "cirscir":"\u29C2",
	  "ClockwiseContourIntegral":"\u2232",
	  "CloseCurlyDoubleQuote":"\u201D",
	  "CloseCurlyQuote":"\u2019",
	  "clubs":"\u2663",
	  "clubsuit":"\u2663",
	  "Colon":"\u2237",
	  "colon":"\u003A",
	  "Colone":"\u2A74",
	  "colone":"\u2254",
	  "coloneq":"\u2254",
	  "comma":"\u002C",
	  "commat":"\u0040",
	  "comp":"\u2201",
	  "compfn":"\u2218",
	  "complement":"\u2201",
	  "complexes":"\u2102",
	  "cong":"\u2245",
	  "congdot":"\u2A6D",
	  "Congruent":"\u2261",
	  "Conint":"\u222F",
	  "conint":"\u222E",
	  "ContourIntegral":"\u222E",
	  "Copf":"\u2102",
	  "copf":"\uD835\uDD54",
	  "coprod":"\u2210",
	  "Coproduct":"\u2210",
	  "COPY":"\u00A9",
	  "copy":"\u00A9",
	  "copysr":"\u2117",
	  "CounterClockwiseContourIntegral":"\u2233",
	  "crarr":"\u21B5",
	  "Cross":"\u2A2F",
	  "cross":"\u2717",
	  "Cscr":"\uD835\uDC9E",
	  "cscr":"\uD835\uDCB8",
	  "csub":"\u2ACF",
	  "csube":"\u2AD1",
	  "csup":"\u2AD0",
	  "csupe":"\u2AD2",
	  "ctdot":"\u22EF",
	  "cudarrl":"\u2938",
	  "cudarrr":"\u2935",
	  "cuepr":"\u22DE",
	  "cuesc":"\u22DF",
	  "cularr":"\u21B6",
	  "cularrp":"\u293D",
	  "Cup":"\u22D3",
	  "cup":"\u222A",
	  "cupbrcap":"\u2A48",
	  "CupCap":"\u224D",
	  "cupcap":"\u2A46",
	  "cupcup":"\u2A4A",
	  "cupdot":"\u228D",
	  "cupor":"\u2A45",
	  "cups":"\u222A\uFE00",
	  "curarr":"\u21B7",
	  "curarrm":"\u293C",
	  "curlyeqprec":"\u22DE",
	  "curlyeqsucc":"\u22DF",
	  "curlyvee":"\u22CE",
	  "curlywedge":"\u22CF",
	  "curren":"\u00A4",
	  "curvearrowleft":"\u21B6",
	  "curvearrowright":"\u21B7",
	  "cuvee":"\u22CE",
	  "cuwed":"\u22CF",
	  "cwconint":"\u2232",
	  "cwint":"\u2231",
	  "cylcty":"\u232D",
	  "Dagger":"\u2021",
	  "dagger":"\u2020",
	  "daleth":"\u2138",
	  "Darr":"\u21A1",
	  "dArr":"\u21D3",
	  "darr":"\u2193",
	  "dash":"\u2010",
	  "Dashv":"\u2AE4",
	  "dashv":"\u22A3",
	  "dbkarow":"\u290F",
	  "dblac":"\u02DD",
	  "Dcaron":"\u010E",
	  "dcaron":"\u010F",
	  "Dcy":"\u0414",
	  "dcy":"\u0434",
	  "DD":"\u2145",
	  "dd":"\u2146",
	  "ddagger":"\u2021",
	  "ddarr":"\u21CA",
	  "DDotrahd":"\u2911",
	  "ddotseq":"\u2A77",
	  "deg":"\u00B0",
	  "Del":"\u2207",
	  "Delta":"\u0394",
	  "delta":"\u03B4",
	  "demptyv":"\u29B1",
	  "dfisht":"\u297F",
	  "Dfr":"\uD835\uDD07",
	  "dfr":"\uD835\uDD21",
	  "dHar":"\u2965",
	  "dharl":"\u21C3",
	  "dharr":"\u21C2",
	  "DiacriticalAcute":"\u00B4",
	  "DiacriticalDot":"\u02D9",
	  "DiacriticalDoubleAcute":"\u02DD",
	  "DiacriticalGrave":"\u0060",
	  "DiacriticalTilde":"\u02DC",
	  "diam":"\u22C4",
	  "Diamond":"\u22C4",
	  "diamond":"\u22C4",
	  "diamondsuit":"\u2666",
	  "diams":"\u2666",
	  "die":"\u00A8",
	  "DifferentialD":"\u2146",
	  "digamma":"\u03DD",
	  "disin":"\u22F2",
	  "div":"\u00F7",
	  "divide":"\u00F7",
	  "divideontimes":"\u22C7",
	  "divonx":"\u22C7",
	  "DJcy":"\u0402",
	  "djcy":"\u0452",
	  "dlcorn":"\u231E",
	  "dlcrop":"\u230D",
	  "dollar":"\u0024",
	  "Dopf":"\uD835\uDD3B",
	  "dopf":"\uD835\uDD55",
	  "Dot":"\u00A8",
	  "dot":"\u02D9",
	  "DotDot":"\u20DC",
	  "doteq":"\u2250",
	  "doteqdot":"\u2251",
	  "DotEqual":"\u2250",
	  "dotminus":"\u2238",
	  "dotplus":"\u2214",
	  "dotsquare":"\u22A1",
	  "doublebarwedge":"\u2306",
	  "DoubleContourIntegral":"\u222F",
	  "DoubleDot":"\u00A8",
	  "DoubleDownArrow":"\u21D3",
	  "DoubleLeftArrow":"\u21D0",
	  "DoubleLeftRightArrow":"\u21D4",
	  "DoubleLeftTee":"\u2AE4",
	  "DoubleLongLeftArrow":"\u27F8",
	  "DoubleLongLeftRightArrow":"\u27FA",
	  "DoubleLongRightArrow":"\u27F9",
	  "DoubleRightArrow":"\u21D2",
	  "DoubleRightTee":"\u22A8",
	  "DoubleUpArrow":"\u21D1",
	  "DoubleUpDownArrow":"\u21D5",
	  "DoubleVerticalBar":"\u2225",
	  "DownArrow":"\u2193",
	  "Downarrow":"\u21D3",
	  "downarrow":"\u2193",
	  "DownArrowBar":"\u2913",
	  "DownArrowUpArrow":"\u21F5",
	  "DownBreve":"\u0311",
	  "downdownarrows":"\u21CA",
	  "downharpoonleft":"\u21C3",
	  "downharpoonright":"\u21C2",
	  "DownLeftRightVector":"\u2950",
	  "DownLeftTeeVector":"\u295E",
	  "DownLeftVector":"\u21BD",
	  "DownLeftVectorBar":"\u2956",
	  "DownRightTeeVector":"\u295F",
	  "DownRightVector":"\u21C1",
	  "DownRightVectorBar":"\u2957",
	  "DownTee":"\u22A4",
	  "DownTeeArrow":"\u21A7",
	  "drbkarow":"\u2910",
	  "drcorn":"\u231F",
	  "drcrop":"\u230C",
	  "Dscr":"\uD835\uDC9F",
	  "dscr":"\uD835\uDCB9",
	  "DScy":"\u0405",
	  "dscy":"\u0455",
	  "dsol":"\u29F6",
	  "Dstrok":"\u0110",
	  "dstrok":"\u0111",
	  "dtdot":"\u22F1",
	  "dtri":"\u25BF",
	  "dtrif":"\u25BE",
	  "duarr":"\u21F5",
	  "duhar":"\u296F",
	  "dwangle":"\u29A6",
	  "DZcy":"\u040F",
	  "dzcy":"\u045F",
	  "dzigrarr":"\u27FF",
	  "Eacute":"\u00C9",
	  "eacute":"\u00E9",
	  "easter":"\u2A6E",
	  "Ecaron":"\u011A",
	  "ecaron":"\u011B",
	  "ecir":"\u2256",
	  "Ecirc":"\u00CA",
	  "ecirc":"\u00EA",
	  "ecolon":"\u2255",
	  "Ecy":"\u042D",
	  "ecy":"\u044D",
	  "eDDot":"\u2A77",
	  "Edot":"\u0116",
	  "eDot":"\u2251",
	  "edot":"\u0117",
	  "ee":"\u2147",
	  "efDot":"\u2252",
	  "Efr":"\uD835\uDD08",
	  "efr":"\uD835\uDD22",
	  "eg":"\u2A9A",
	  "Egrave":"\u00C8",
	  "egrave":"\u00E8",
	  "egs":"\u2A96",
	  "egsdot":"\u2A98",
	  "el":"\u2A99",
	  "Element":"\u2208",
	  "elinters":"\u23E7",
	  "ell":"\u2113",
	  "els":"\u2A95",
	  "elsdot":"\u2A97",
	  "Emacr":"\u0112",
	  "emacr":"\u0113",
	  "empty":"\u2205",
	  "emptyset":"\u2205",
	  "EmptySmallSquare":"\u25FB",
	  "emptyv":"\u2205",
	  "EmptyVerySmallSquare":"\u25AB",
	  "emsp":"\u2003",
	  "emsp13":"\u2004",
	  "emsp14":"\u2005",
	  "ENG":"\u014A",
	  "eng":"\u014B",
	  "ensp":"\u2002",
	  "Eogon":"\u0118",
	  "eogon":"\u0119",
	  "Eopf":"\uD835\uDD3C",
	  "eopf":"\uD835\uDD56",
	  "epar":"\u22D5",
	  "eparsl":"\u29E3",
	  "eplus":"\u2A71",
	  "epsi":"\u03B5",
	  "Epsilon":"\u0395",
	  "epsilon":"\u03B5",
	  "epsiv":"\u03F5",
	  "eqcirc":"\u2256",
	  "eqcolon":"\u2255",
	  "eqsim":"\u2242",
	  "eqslantgtr":"\u2A96",
	  "eqslantless":"\u2A95",
	  "Equal":"\u2A75",
	  "equals":"\u003D",
	  "EqualTilde":"\u2242",
	  "equest":"\u225F",
	  "Equilibrium":"\u21CC",
	  "equiv":"\u2261",
	  "equivDD":"\u2A78",
	  "eqvparsl":"\u29E5",
	  "erarr":"\u2971",
	  "erDot":"\u2253",
	  "Escr":"\u2130",
	  "escr":"\u212F",
	  "esdot":"\u2250",
	  "Esim":"\u2A73",
	  "esim":"\u2242",
	  "Eta":"\u0397",
	  "eta":"\u03B7",
	  "ETH":"\u00D0",
	  "eth":"\u00F0",
	  "Euml":"\u00CB",
	  "euml":"\u00EB",
	  "euro":"\u20AC",
	  "excl":"\u0021",
	  "exist":"\u2203",
	  "Exists":"\u2203",
	  "expectation":"\u2130",
	  "ExponentialE":"\u2147",
	  "exponentiale":"\u2147",
	  "fallingdotseq":"\u2252",
	  "Fcy":"\u0424",
	  "fcy":"\u0444",
	  "female":"\u2640",
	  "ffilig":"\uFB03",
	  "fflig":"\uFB00",
	  "ffllig":"\uFB04",
	  "Ffr":"\uD835\uDD09",
	  "ffr":"\uD835\uDD23",
	  "filig":"\uFB01",
	  "FilledSmallSquare":"\u25FC",
	  "FilledVerySmallSquare":"\u25AA",
	  "fjlig":"\u0066\u006A",
	  "flat":"\u266D",
	  "fllig":"\uFB02",
	  "fltns":"\u25B1",
	  "fnof":"\u0192",
	  "Fopf":"\uD835\uDD3D",
	  "fopf":"\uD835\uDD57",
	  "ForAll":"\u2200",
	  "forall":"\u2200",
	  "fork":"\u22D4",
	  "forkv":"\u2AD9",
	  "Fouriertrf":"\u2131",
	  "fpartint":"\u2A0D",
	  "frac12":"\u00BD",
	  "frac13":"\u2153",
	  "frac14":"\u00BC",
	  "frac15":"\u2155",
	  "frac16":"\u2159",
	  "frac18":"\u215B",
	  "frac23":"\u2154",
	  "frac25":"\u2156",
	  "frac34":"\u00BE",
	  "frac35":"\u2157",
	  "frac38":"\u215C",
	  "frac45":"\u2158",
	  "frac56":"\u215A",
	  "frac58":"\u215D",
	  "frac78":"\u215E",
	  "frasl":"\u2044",
	  "frown":"\u2322",
	  "Fscr":"\u2131",
	  "fscr":"\uD835\uDCBB",
	  "gacute":"\u01F5",
	  "Gamma":"\u0393",
	  "gamma":"\u03B3",
	  "Gammad":"\u03DC",
	  "gammad":"\u03DD",
	  "gap":"\u2A86",
	  "Gbreve":"\u011E",
	  "gbreve":"\u011F",
	  "Gcedil":"\u0122",
	  "Gcirc":"\u011C",
	  "gcirc":"\u011D",
	  "Gcy":"\u0413",
	  "gcy":"\u0433",
	  "Gdot":"\u0120",
	  "gdot":"\u0121",
	  "gE":"\u2267",
	  "ge":"\u2265",
	  "gEl":"\u2A8C",
	  "gel":"\u22DB",
	  "geq":"\u2265",
	  "geqq":"\u2267",
	  "geqslant":"\u2A7E",
	  "ges":"\u2A7E",
	  "gescc":"\u2AA9",
	  "gesdot":"\u2A80",
	  "gesdoto":"\u2A82",
	  "gesdotol":"\u2A84",
	  "gesl":"\u22DB\uFE00",
	  "gesles":"\u2A94",
	  "Gfr":"\uD835\uDD0A",
	  "gfr":"\uD835\uDD24",
	  "Gg":"\u22D9",
	  "gg":"\u226B",
	  "ggg":"\u22D9",
	  "gimel":"\u2137",
	  "GJcy":"\u0403",
	  "gjcy":"\u0453",
	  "gl":"\u2277",
	  "gla":"\u2AA5",
	  "glE":"\u2A92",
	  "glj":"\u2AA4",
	  "gnap":"\u2A8A",
	  "gnapprox":"\u2A8A",
	  "gnE":"\u2269",
	  "gne":"\u2A88",
	  "gneq":"\u2A88",
	  "gneqq":"\u2269",
	  "gnsim":"\u22E7",
	  "Gopf":"\uD835\uDD3E",
	  "gopf":"\uD835\uDD58",
	  "grave":"\u0060",
	  "GreaterEqual":"\u2265",
	  "GreaterEqualLess":"\u22DB",
	  "GreaterFullEqual":"\u2267",
	  "GreaterGreater":"\u2AA2",
	  "GreaterLess":"\u2277",
	  "GreaterSlantEqual":"\u2A7E",
	  "GreaterTilde":"\u2273",
	  "Gscr":"\uD835\uDCA2",
	  "gscr":"\u210A",
	  "gsim":"\u2273",
	  "gsime":"\u2A8E",
	  "gsiml":"\u2A90",
	  "GT":"\u003E",
	  "Gt":"\u226B",
	  "gt":"\u003E",
	  "gtcc":"\u2AA7",
	  "gtcir":"\u2A7A",
	  "gtdot":"\u22D7",
	  "gtlPar":"\u2995",
	  "gtquest":"\u2A7C",
	  "gtrapprox":"\u2A86",
	  "gtrarr":"\u2978",
	  "gtrdot":"\u22D7",
	  "gtreqless":"\u22DB",
	  "gtreqqless":"\u2A8C",
	  "gtrless":"\u2277",
	  "gtrsim":"\u2273",
	  "gvertneqq":"\u2269\uFE00",
	  "gvnE":"\u2269\uFE00",
	  "Hacek":"\u02C7",
	  "hairsp":"\u200A",
	  "half":"\u00BD",
	  "hamilt":"\u210B",
	  "HARDcy":"\u042A",
	  "hardcy":"\u044A",
	  "hArr":"\u21D4",
	  "harr":"\u2194",
	  "harrcir":"\u2948",
	  "harrw":"\u21AD",
	  "Hat":"\u005E",
	  "hbar":"\u210F",
	  "Hcirc":"\u0124",
	  "hcirc":"\u0125",
	  "hearts":"\u2665",
	  "heartsuit":"\u2665",
	  "hellip":"\u2026",
	  "hercon":"\u22B9",
	  "Hfr":"\u210C",
	  "hfr":"\uD835\uDD25",
	  "HilbertSpace":"\u210B",
	  "hksearow":"\u2925",
	  "hkswarow":"\u2926",
	  "hoarr":"\u21FF",
	  "homtht":"\u223B",
	  "hookleftarrow":"\u21A9",
	  "hookrightarrow":"\u21AA",
	  "Hopf":"\u210D",
	  "hopf":"\uD835\uDD59",
	  "horbar":"\u2015",
	  "HorizontalLine":"\u2500",
	  "Hscr":"\u210B",
	  "hscr":"\uD835\uDCBD",
	  "hslash":"\u210F",
	  "Hstrok":"\u0126",
	  "hstrok":"\u0127",
	  "HumpDownHump":"\u224E",
	  "HumpEqual":"\u224F",
	  "hybull":"\u2043",
	  "hyphen":"\u2010",
	  "Iacute":"\u00CD",
	  "iacute":"\u00ED",
	  "ic":"\u2063",
	  "Icirc":"\u00CE",
	  "icirc":"\u00EE",
	  "Icy":"\u0418",
	  "icy":"\u0438",
	  "Idot":"\u0130",
	  "IEcy":"\u0415",
	  "iecy":"\u0435",
	  "iexcl":"\u00A1",
	  "iff":"\u21D4",
	  "Ifr":"\u2111",
	  "ifr":"\uD835\uDD26",
	  "Igrave":"\u00CC",
	  "igrave":"\u00EC",
	  "ii":"\u2148",
	  "iiiint":"\u2A0C",
	  "iiint":"\u222D",
	  "iinfin":"\u29DC",
	  "iiota":"\u2129",
	  "IJlig":"\u0132",
	  "ijlig":"\u0133",
	  "Im":"\u2111",
	  "Imacr":"\u012A",
	  "imacr":"\u012B",
	  "image":"\u2111",
	  "ImaginaryI":"\u2148",
	  "imagline":"\u2110",
	  "imagpart":"\u2111",
	  "imath":"\u0131",
	  "imof":"\u22B7",
	  "imped":"\u01B5",
	  "Implies":"\u21D2",
	  "in":"\u2208",
	  "incare":"\u2105",
	  "infin":"\u221E",
	  "infintie":"\u29DD",
	  "inodot":"\u0131",
	  "Int":"\u222C",
	  "int":"\u222B",
	  "intcal":"\u22BA",
	  "integers":"\u2124",
	  "Integral":"\u222B",
	  "intercal":"\u22BA",
	  "Intersection":"\u22C2",
	  "intlarhk":"\u2A17",
	  "intprod":"\u2A3C",
	  "InvisibleComma":"\u2063",
	  "InvisibleTimes":"\u2062",
	  "IOcy":"\u0401",
	  "iocy":"\u0451",
	  "Iogon":"\u012E",
	  "iogon":"\u012F",
	  "Iopf":"\uD835\uDD40",
	  "iopf":"\uD835\uDD5A",
	  "Iota":"\u0399",
	  "iota":"\u03B9",
	  "iprod":"\u2A3C",
	  "iquest":"\u00BF",
	  "Iscr":"\u2110",
	  "iscr":"\uD835\uDCBE",
	  "isin":"\u2208",
	  "isindot":"\u22F5",
	  "isinE":"\u22F9",
	  "isins":"\u22F4",
	  "isinsv":"\u22F3",
	  "isinv":"\u2208",
	  "it":"\u2062",
	  "Itilde":"\u0128",
	  "itilde":"\u0129",
	  "Iukcy":"\u0406",
	  "iukcy":"\u0456",
	  "Iuml":"\u00CF",
	  "iuml":"\u00EF",
	  "Jcirc":"\u0134",
	  "jcirc":"\u0135",
	  "Jcy":"\u0419",
	  "jcy":"\u0439",
	  "Jfr":"\uD835\uDD0D",
	  "jfr":"\uD835\uDD27",
	  "jmath":"\u0237",
	  "Jopf":"\uD835\uDD41",
	  "jopf":"\uD835\uDD5B",
	  "Jscr":"\uD835\uDCA5",
	  "jscr":"\uD835\uDCBF",
	  "Jsercy":"\u0408",
	  "jsercy":"\u0458",
	  "Jukcy":"\u0404",
	  "jukcy":"\u0454",
	  "Kappa":"\u039A",
	  "kappa":"\u03BA",
	  "kappav":"\u03F0",
	  "Kcedil":"\u0136",
	  "kcedil":"\u0137",
	  "Kcy":"\u041A",
	  "kcy":"\u043A",
	  "Kfr":"\uD835\uDD0E",
	  "kfr":"\uD835\uDD28",
	  "kgreen":"\u0138",
	  "KHcy":"\u0425",
	  "khcy":"\u0445",
	  "KJcy":"\u040C",
	  "kjcy":"\u045C",
	  "Kopf":"\uD835\uDD42",
	  "kopf":"\uD835\uDD5C",
	  "Kscr":"\uD835\uDCA6",
	  "kscr":"\uD835\uDCC0",
	  "lAarr":"\u21DA",
	  "Lacute":"\u0139",
	  "lacute":"\u013A",
	  "laemptyv":"\u29B4",
	  "lagran":"\u2112",
	  "Lambda":"\u039B",
	  "lambda":"\u03BB",
	  "Lang":"\u27EA",
	  "lang":"\u27E8",
	  "langd":"\u2991",
	  "langle":"\u27E8",
	  "lap":"\u2A85",
	  "Laplacetrf":"\u2112",
	  "laquo":"\u00AB",
	  "Larr":"\u219E",
	  "lArr":"\u21D0",
	  "larr":"\u2190",
	  "larrb":"\u21E4",
	  "larrbfs":"\u291F",
	  "larrfs":"\u291D",
	  "larrhk":"\u21A9",
	  "larrlp":"\u21AB",
	  "larrpl":"\u2939",
	  "larrsim":"\u2973",
	  "larrtl":"\u21A2",
	  "lat":"\u2AAB",
	  "lAtail":"\u291B",
	  "latail":"\u2919",
	  "late":"\u2AAD",
	  "lates":"\u2AAD\uFE00",
	  "lBarr":"\u290E",
	  "lbarr":"\u290C",
	  "lbbrk":"\u2772",
	  "lbrace":"\u007B",
	  "lbrack":"\u005B",
	  "lbrke":"\u298B",
	  "lbrksld":"\u298F",
	  "lbrkslu":"\u298D",
	  "Lcaron":"\u013D",
	  "lcaron":"\u013E",
	  "Lcedil":"\u013B",
	  "lcedil":"\u013C",
	  "lceil":"\u2308",
	  "lcub":"\u007B",
	  "Lcy":"\u041B",
	  "lcy":"\u043B",
	  "ldca":"\u2936",
	  "ldquo":"\u201C",
	  "ldquor":"\u201E",
	  "ldrdhar":"\u2967",
	  "ldrushar":"\u294B",
	  "ldsh":"\u21B2",
	  "lE":"\u2266",
	  "le":"\u2264",
	  "LeftAngleBracket":"\u27E8",
	  "LeftArrow":"\u2190",
	  "Leftarrow":"\u21D0",
	  "leftarrow":"\u2190",
	  "LeftArrowBar":"\u21E4",
	  "LeftArrowRightArrow":"\u21C6",
	  "leftarrowtail":"\u21A2",
	  "LeftCeiling":"\u2308",
	  "LeftDoubleBracket":"\u27E6",
	  "LeftDownTeeVector":"\u2961",
	  "LeftDownVector":"\u21C3",
	  "LeftDownVectorBar":"\u2959",
	  "LeftFloor":"\u230A",
	  "leftharpoondown":"\u21BD",
	  "leftharpoonup":"\u21BC",
	  "leftleftarrows":"\u21C7",
	  "LeftRightArrow":"\u2194",
	  "Leftrightarrow":"\u21D4",
	  "leftrightarrow":"\u2194",
	  "leftrightarrows":"\u21C6",
	  "leftrightharpoons":"\u21CB",
	  "leftrightsquigarrow":"\u21AD",
	  "LeftRightVector":"\u294E",
	  "LeftTee":"\u22A3",
	  "LeftTeeArrow":"\u21A4",
	  "LeftTeeVector":"\u295A",
	  "leftthreetimes":"\u22CB",
	  "LeftTriangle":"\u22B2",
	  "LeftTriangleBar":"\u29CF",
	  "LeftTriangleEqual":"\u22B4",
	  "LeftUpDownVector":"\u2951",
	  "LeftUpTeeVector":"\u2960",
	  "LeftUpVector":"\u21BF",
	  "LeftUpVectorBar":"\u2958",
	  "LeftVector":"\u21BC",
	  "LeftVectorBar":"\u2952",
	  "lEg":"\u2A8B",
	  "leg":"\u22DA",
	  "leq":"\u2264",
	  "leqq":"\u2266",
	  "leqslant":"\u2A7D",
	  "les":"\u2A7D",
	  "lescc":"\u2AA8",
	  "lesdot":"\u2A7F",
	  "lesdoto":"\u2A81",
	  "lesdotor":"\u2A83",
	  "lesg":"\u22DA\uFE00",
	  "lesges":"\u2A93",
	  "lessapprox":"\u2A85",
	  "lessdot":"\u22D6",
	  "lesseqgtr":"\u22DA",
	  "lesseqqgtr":"\u2A8B",
	  "LessEqualGreater":"\u22DA",
	  "LessFullEqual":"\u2266",
	  "LessGreater":"\u2276",
	  "lessgtr":"\u2276",
	  "LessLess":"\u2AA1",
	  "lesssim":"\u2272",
	  "LessSlantEqual":"\u2A7D",
	  "LessTilde":"\u2272",
	  "lfisht":"\u297C",
	  "lfloor":"\u230A",
	  "Lfr":"\uD835\uDD0F",
	  "lfr":"\uD835\uDD29",
	  "lg":"\u2276",
	  "lgE":"\u2A91",
	  "lHar":"\u2962",
	  "lhard":"\u21BD",
	  "lharu":"\u21BC",
	  "lharul":"\u296A",
	  "lhblk":"\u2584",
	  "LJcy":"\u0409",
	  "ljcy":"\u0459",
	  "Ll":"\u22D8",
	  "ll":"\u226A",
	  "llarr":"\u21C7",
	  "llcorner":"\u231E",
	  "Lleftarrow":"\u21DA",
	  "llhard":"\u296B",
	  "lltri":"\u25FA",
	  "Lmidot":"\u013F",
	  "lmidot":"\u0140",
	  "lmoust":"\u23B0",
	  "lmoustache":"\u23B0",
	  "lnap":"\u2A89",
	  "lnapprox":"\u2A89",
	  "lnE":"\u2268",
	  "lne":"\u2A87",
	  "lneq":"\u2A87",
	  "lneqq":"\u2268",
	  "lnsim":"\u22E6",
	  "loang":"\u27EC",
	  "loarr":"\u21FD",
	  "lobrk":"\u27E6",
	  "LongLeftArrow":"\u27F5",
	  "Longleftarrow":"\u27F8",
	  "longleftarrow":"\u27F5",
	  "LongLeftRightArrow":"\u27F7",
	  "Longleftrightarrow":"\u27FA",
	  "longleftrightarrow":"\u27F7",
	  "longmapsto":"\u27FC",
	  "LongRightArrow":"\u27F6",
	  "Longrightarrow":"\u27F9",
	  "longrightarrow":"\u27F6",
	  "looparrowleft":"\u21AB",
	  "looparrowright":"\u21AC",
	  "lopar":"\u2985",
	  "Lopf":"\uD835\uDD43",
	  "lopf":"\uD835\uDD5D",
	  "loplus":"\u2A2D",
	  "lotimes":"\u2A34",
	  "lowast":"\u2217",
	  "lowbar":"\u005F",
	  "LowerLeftArrow":"\u2199",
	  "LowerRightArrow":"\u2198",
	  "loz":"\u25CA",
	  "lozenge":"\u25CA",
	  "lozf":"\u29EB",
	  "lpar":"\u0028",
	  "lparlt":"\u2993",
	  "lrarr":"\u21C6",
	  "lrcorner":"\u231F",
	  "lrhar":"\u21CB",
	  "lrhard":"\u296D",
	  "lrm":"\u200E",
	  "lrtri":"\u22BF",
	  "lsaquo":"\u2039",
	  "Lscr":"\u2112",
	  "lscr":"\uD835\uDCC1",
	  "Lsh":"\u21B0",
	  "lsh":"\u21B0",
	  "lsim":"\u2272",
	  "lsime":"\u2A8D",
	  "lsimg":"\u2A8F",
	  "lsqb":"\u005B",
	  "lsquo":"\u2018",
	  "lsquor":"\u201A",
	  "Lstrok":"\u0141",
	  "lstrok":"\u0142",
	  "LT":"\u003C",
	  "Lt":"\u226A",
	  "lt":"\u003C",
	  "ltcc":"\u2AA6",
	  "ltcir":"\u2A79",
	  "ltdot":"\u22D6",
	  "lthree":"\u22CB",
	  "ltimes":"\u22C9",
	  "ltlarr":"\u2976",
	  "ltquest":"\u2A7B",
	  "ltri":"\u25C3",
	  "ltrie":"\u22B4",
	  "ltrif":"\u25C2",
	  "ltrPar":"\u2996",
	  "lurdshar":"\u294A",
	  "luruhar":"\u2966",
	  "lvertneqq":"\u2268\uFE00",
	  "lvnE":"\u2268\uFE00",
	  "macr":"\u00AF",
	  "male":"\u2642",
	  "malt":"\u2720",
	  "maltese":"\u2720",
	  "Map":"\u2905",
	  "map":"\u21A6",
	  "mapsto":"\u21A6",
	  "mapstodown":"\u21A7",
	  "mapstoleft":"\u21A4",
	  "mapstoup":"\u21A5",
	  "marker":"\u25AE",
	  "mcomma":"\u2A29",
	  "Mcy":"\u041C",
	  "mcy":"\u043C",
	  "mdash":"\u2014",
	  "mDDot":"\u223A",
	  "measuredangle":"\u2221",
	  "MediumSpace":"\u205F",
	  "Mellintrf":"\u2133",
	  "Mfr":"\uD835\uDD10",
	  "mfr":"\uD835\uDD2A",
	  "mho":"\u2127",
	  "micro":"\u00B5",
	  "mid":"\u2223",
	  "midast":"\u002A",
	  "midcir":"\u2AF0",
	  "middot":"\u00B7",
	  "minus":"\u2212",
	  "minusb":"\u229F",
	  "minusd":"\u2238",
	  "minusdu":"\u2A2A",
	  "MinusPlus":"\u2213",
	  "mlcp":"\u2ADB",
	  "mldr":"\u2026",
	  "mnplus":"\u2213",
	  "models":"\u22A7",
	  "Mopf":"\uD835\uDD44",
	  "mopf":"\uD835\uDD5E",
	  "mp":"\u2213",
	  "Mscr":"\u2133",
	  "mscr":"\uD835\uDCC2",
	  "mstpos":"\u223E",
	  "Mu":"\u039C",
	  "mu":"\u03BC",
	  "multimap":"\u22B8",
	  "mumap":"\u22B8",
	  "nabla":"\u2207",
	  "Nacute":"\u0143",
	  "nacute":"\u0144",
	  "nang":"\u2220\u20D2",
	  "nap":"\u2249",
	  "napE":"\u2A70\u0338",
	  "napid":"\u224B\u0338",
	  "napos":"\u0149",
	  "napprox":"\u2249",
	  "natur":"\u266E",
	  "natural":"\u266E",
	  "naturals":"\u2115",
	  "nbsp":"\u00A0",
	  "nbump":"\u224E\u0338",
	  "nbumpe":"\u224F\u0338",
	  "ncap":"\u2A43",
	  "Ncaron":"\u0147",
	  "ncaron":"\u0148",
	  "Ncedil":"\u0145",
	  "ncedil":"\u0146",
	  "ncong":"\u2247",
	  "ncongdot":"\u2A6D\u0338",
	  "ncup":"\u2A42",
	  "Ncy":"\u041D",
	  "ncy":"\u043D",
	  "ndash":"\u2013",
	  "ne":"\u2260",
	  "nearhk":"\u2924",
	  "neArr":"\u21D7",
	  "nearr":"\u2197",
	  "nearrow":"\u2197",
	  "nedot":"\u2250\u0338",
	  "NegativeMediumSpace":"\u200B",
	  "NegativeThickSpace":"\u200B",
	  "NegativeThinSpace":"\u200B",
	  "NegativeVeryThinSpace":"\u200B",
	  "nequiv":"\u2262",
	  "nesear":"\u2928",
	  "nesim":"\u2242\u0338",
	  "NestedGreaterGreater":"\u226B",
	  "NestedLessLess":"\u226A",
	  "NewLine":"\u000A",
	  "nexist":"\u2204",
	  "nexists":"\u2204",
	  "Nfr":"\uD835\uDD11",
	  "nfr":"\uD835\uDD2B",
	  "ngE":"\u2267\u0338",
	  "nge":"\u2271",
	  "ngeq":"\u2271",
	  "ngeqq":"\u2267\u0338",
	  "ngeqslant":"\u2A7E\u0338",
	  "nges":"\u2A7E\u0338",
	  "nGg":"\u22D9\u0338",
	  "ngsim":"\u2275",
	  "nGt":"\u226B\u20D2",
	  "ngt":"\u226F",
	  "ngtr":"\u226F",
	  "nGtv":"\u226B\u0338",
	  "nhArr":"\u21CE",
	  "nharr":"\u21AE",
	  "nhpar":"\u2AF2",
	  "ni":"\u220B",
	  "nis":"\u22FC",
	  "nisd":"\u22FA",
	  "niv":"\u220B",
	  "NJcy":"\u040A",
	  "njcy":"\u045A",
	  "nlArr":"\u21CD",
	  "nlarr":"\u219A",
	  "nldr":"\u2025",
	  "nlE":"\u2266\u0338",
	  "nle":"\u2270",
	  "nLeftarrow":"\u21CD",
	  "nleftarrow":"\u219A",
	  "nLeftrightarrow":"\u21CE",
	  "nleftrightarrow":"\u21AE",
	  "nleq":"\u2270",
	  "nleqq":"\u2266\u0338",
	  "nleqslant":"\u2A7D\u0338",
	  "nles":"\u2A7D\u0338",
	  "nless":"\u226E",
	  "nLl":"\u22D8\u0338",
	  "nlsim":"\u2274",
	  "nLt":"\u226A\u20D2",
	  "nlt":"\u226E",
	  "nltri":"\u22EA",
	  "nltrie":"\u22EC",
	  "nLtv":"\u226A\u0338",
	  "nmid":"\u2224",
	  "NoBreak":"\u2060",
	  "NonBreakingSpace":"\u00A0",
	  "Nopf":"\u2115",
	  "nopf":"\uD835\uDD5F",
	  "Not":"\u2AEC",
	  "not":"\u00AC",
	  "NotCongruent":"\u2262",
	  "NotCupCap":"\u226D",
	  "NotDoubleVerticalBar":"\u2226",
	  "NotElement":"\u2209",
	  "NotEqual":"\u2260",
	  "NotEqualTilde":"\u2242\u0338",
	  "NotExists":"\u2204",
	  "NotGreater":"\u226F",
	  "NotGreaterEqual":"\u2271",
	  "NotGreaterFullEqual":"\u2267\u0338",
	  "NotGreaterGreater":"\u226B\u0338",
	  "NotGreaterLess":"\u2279",
	  "NotGreaterSlantEqual":"\u2A7E\u0338",
	  "NotGreaterTilde":"\u2275",
	  "NotHumpDownHump":"\u224E\u0338",
	  "NotHumpEqual":"\u224F\u0338",
	  "notin":"\u2209",
	  "notindot":"\u22F5\u0338",
	  "notinE":"\u22F9\u0338",
	  "notinva":"\u2209",
	  "notinvb":"\u22F7",
	  "notinvc":"\u22F6",
	  "NotLeftTriangle":"\u22EA",
	  "NotLeftTriangleBar":"\u29CF\u0338",
	  "NotLeftTriangleEqual":"\u22EC",
	  "NotLess":"\u226E",
	  "NotLessEqual":"\u2270",
	  "NotLessGreater":"\u2278",
	  "NotLessLess":"\u226A\u0338",
	  "NotLessSlantEqual":"\u2A7D\u0338",
	  "NotLessTilde":"\u2274",
	  "NotNestedGreaterGreater":"\u2AA2\u0338",
	  "NotNestedLessLess":"\u2AA1\u0338",
	  "notni":"\u220C",
	  "notniva":"\u220C",
	  "notnivb":"\u22FE",
	  "notnivc":"\u22FD",
	  "NotPrecedes":"\u2280",
	  "NotPrecedesEqual":"\u2AAF\u0338",
	  "NotPrecedesSlantEqual":"\u22E0",
	  "NotReverseElement":"\u220C",
	  "NotRightTriangle":"\u22EB",
	  "NotRightTriangleBar":"\u29D0\u0338",
	  "NotRightTriangleEqual":"\u22ED",
	  "NotSquareSubset":"\u228F\u0338",
	  "NotSquareSubsetEqual":"\u22E2",
	  "NotSquareSuperset":"\u2290\u0338",
	  "NotSquareSupersetEqual":"\u22E3",
	  "NotSubset":"\u2282\u20D2",
	  "NotSubsetEqual":"\u2288",
	  "NotSucceeds":"\u2281",
	  "NotSucceedsEqual":"\u2AB0\u0338",
	  "NotSucceedsSlantEqual":"\u22E1",
	  "NotSucceedsTilde":"\u227F\u0338",
	  "NotSuperset":"\u2283\u20D2",
	  "NotSupersetEqual":"\u2289",
	  "NotTilde":"\u2241",
	  "NotTildeEqual":"\u2244",
	  "NotTildeFullEqual":"\u2247",
	  "NotTildeTilde":"\u2249",
	  "NotVerticalBar":"\u2224",
	  "npar":"\u2226",
	  "nparallel":"\u2226",
	  "nparsl":"\u2AFD\u20E5",
	  "npart":"\u2202\u0338",
	  "npolint":"\u2A14",
	  "npr":"\u2280",
	  "nprcue":"\u22E0",
	  "npre":"\u2AAF\u0338",
	  "nprec":"\u2280",
	  "npreceq":"\u2AAF\u0338",
	  "nrArr":"\u21CF",
	  "nrarr":"\u219B",
	  "nrarrc":"\u2933\u0338",
	  "nrarrw":"\u219D\u0338",
	  "nRightarrow":"\u21CF",
	  "nrightarrow":"\u219B",
	  "nrtri":"\u22EB",
	  "nrtrie":"\u22ED",
	  "nsc":"\u2281",
	  "nsccue":"\u22E1",
	  "nsce":"\u2AB0\u0338",
	  "Nscr":"\uD835\uDCA9",
	  "nscr":"\uD835\uDCC3",
	  "nshortmid":"\u2224",
	  "nshortparallel":"\u2226",
	  "nsim":"\u2241",
	  "nsime":"\u2244",
	  "nsimeq":"\u2244",
	  "nsmid":"\u2224",
	  "nspar":"\u2226",
	  "nsqsube":"\u22E2",
	  "nsqsupe":"\u22E3",
	  "nsub":"\u2284",
	  "nsubE":"\u2AC5\u0338",
	  "nsube":"\u2288",
	  "nsubset":"\u2282\u20D2",
	  "nsubseteq":"\u2288",
	  "nsubseteqq":"\u2AC5\u0338",
	  "nsucc":"\u2281",
	  "nsucceq":"\u2AB0\u0338",
	  "nsup":"\u2285",
	  "nsupE":"\u2AC6\u0338",
	  "nsupe":"\u2289",
	  "nsupset":"\u2283\u20D2",
	  "nsupseteq":"\u2289",
	  "nsupseteqq":"\u2AC6\u0338",
	  "ntgl":"\u2279",
	  "Ntilde":"\u00D1",
	  "ntilde":"\u00F1",
	  "ntlg":"\u2278",
	  "ntriangleleft":"\u22EA",
	  "ntrianglelefteq":"\u22EC",
	  "ntriangleright":"\u22EB",
	  "ntrianglerighteq":"\u22ED",
	  "Nu":"\u039D",
	  "nu":"\u03BD",
	  "num":"\u0023",
	  "numero":"\u2116",
	  "numsp":"\u2007",
	  "nvap":"\u224D\u20D2",
	  "nVDash":"\u22AF",
	  "nVdash":"\u22AE",
	  "nvDash":"\u22AD",
	  "nvdash":"\u22AC",
	  "nvge":"\u2265\u20D2",
	  "nvgt":"\u003E\u20D2",
	  "nvHarr":"\u2904",
	  "nvinfin":"\u29DE",
	  "nvlArr":"\u2902",
	  "nvle":"\u2264\u20D2",
	  "nvlt":"\u003C\u20D2",
	  "nvltrie":"\u22B4\u20D2",
	  "nvrArr":"\u2903",
	  "nvrtrie":"\u22B5\u20D2",
	  "nvsim":"\u223C\u20D2",
	  "nwarhk":"\u2923",
	  "nwArr":"\u21D6",
	  "nwarr":"\u2196",
	  "nwarrow":"\u2196",
	  "nwnear":"\u2927",
	  "Oacute":"\u00D3",
	  "oacute":"\u00F3",
	  "oast":"\u229B",
	  "ocir":"\u229A",
	  "Ocirc":"\u00D4",
	  "ocirc":"\u00F4",
	  "Ocy":"\u041E",
	  "ocy":"\u043E",
	  "odash":"\u229D",
	  "Odblac":"\u0150",
	  "odblac":"\u0151",
	  "odiv":"\u2A38",
	  "odot":"\u2299",
	  "odsold":"\u29BC",
	  "OElig":"\u0152",
	  "oelig":"\u0153",
	  "ofcir":"\u29BF",
	  "Ofr":"\uD835\uDD12",
	  "ofr":"\uD835\uDD2C",
	  "ogon":"\u02DB",
	  "Ograve":"\u00D2",
	  "ograve":"\u00F2",
	  "ogt":"\u29C1",
	  "ohbar":"\u29B5",
	  "ohm":"\u03A9",
	  "oint":"\u222E",
	  "olarr":"\u21BA",
	  "olcir":"\u29BE",
	  "olcross":"\u29BB",
	  "oline":"\u203E",
	  "olt":"\u29C0",
	  "Omacr":"\u014C",
	  "omacr":"\u014D",
	  "Omega":"\u03A9",
	  "omega":"\u03C9",
	  "Omicron":"\u039F",
	  "omicron":"\u03BF",
	  "omid":"\u29B6",
	  "ominus":"\u2296",
	  "Oopf":"\uD835\uDD46",
	  "oopf":"\uD835\uDD60",
	  "opar":"\u29B7",
	  "OpenCurlyDoubleQuote":"\u201C",
	  "OpenCurlyQuote":"\u2018",
	  "operp":"\u29B9",
	  "oplus":"\u2295",
	  "Or":"\u2A54",
	  "or":"\u2228",
	  "orarr":"\u21BB",
	  "ord":"\u2A5D",
	  "order":"\u2134",
	  "orderof":"\u2134",
	  "ordf":"\u00AA",
	  "ordm":"\u00BA",
	  "origof":"\u22B6",
	  "oror":"\u2A56",
	  "orslope":"\u2A57",
	  "orv":"\u2A5B",
	  "oS":"\u24C8",
	  "Oscr":"\uD835\uDCAA",
	  "oscr":"\u2134",
	  "Oslash":"\u00D8",
	  "oslash":"\u00F8",
	  "osol":"\u2298",
	  "Otilde":"\u00D5",
	  "otilde":"\u00F5",
	  "Otimes":"\u2A37",
	  "otimes":"\u2297",
	  "otimesas":"\u2A36",
	  "Ouml":"\u00D6",
	  "ouml":"\u00F6",
	  "ovbar":"\u233D",
	  "OverBar":"\u203E",
	  "OverBrace":"\u23DE",
	  "OverBracket":"\u23B4",
	  "OverParenthesis":"\u23DC",
	  "par":"\u2225",
	  "para":"\u00B6",
	  "parallel":"\u2225",
	  "parsim":"\u2AF3",
	  "parsl":"\u2AFD",
	  "part":"\u2202",
	  "PartialD":"\u2202",
	  "Pcy":"\u041F",
	  "pcy":"\u043F",
	  "percnt":"\u0025",
	  "period":"\u002E",
	  "permil":"\u2030",
	  "perp":"\u22A5",
	  "pertenk":"\u2031",
	  "Pfr":"\uD835\uDD13",
	  "pfr":"\uD835\uDD2D",
	  "Phi":"\u03A6",
	  "phi":"\u03C6",
	  "phiv":"\u03D5",
	  "phmmat":"\u2133",
	  "phone":"\u260E",
	  "Pi":"\u03A0",
	  "pi":"\u03C0",
	  "pitchfork":"\u22D4",
	  "piv":"\u03D6",
	  "planck":"\u210F",
	  "planckh":"\u210E",
	  "plankv":"\u210F",
	  "plus":"\u002B",
	  "plusacir":"\u2A23",
	  "plusb":"\u229E",
	  "pluscir":"\u2A22",
	  "plusdo":"\u2214",
	  "plusdu":"\u2A25",
	  "pluse":"\u2A72",
	  "PlusMinus":"\u00B1",
	  "plusmn":"\u00B1",
	  "plussim":"\u2A26",
	  "plustwo":"\u2A27",
	  "pm":"\u00B1",
	  "Poincareplane":"\u210C",
	  "pointint":"\u2A15",
	  "Popf":"\u2119",
	  "popf":"\uD835\uDD61",
	  "pound":"\u00A3",
	  "Pr":"\u2ABB",
	  "pr":"\u227A",
	  "prap":"\u2AB7",
	  "prcue":"\u227C",
	  "prE":"\u2AB3",
	  "pre":"\u2AAF",
	  "prec":"\u227A",
	  "precapprox":"\u2AB7",
	  "preccurlyeq":"\u227C",
	  "Precedes":"\u227A",
	  "PrecedesEqual":"\u2AAF",
	  "PrecedesSlantEqual":"\u227C",
	  "PrecedesTilde":"\u227E",
	  "preceq":"\u2AAF",
	  "precnapprox":"\u2AB9",
	  "precneqq":"\u2AB5",
	  "precnsim":"\u22E8",
	  "precsim":"\u227E",
	  "Prime":"\u2033",
	  "prime":"\u2032",
	  "primes":"\u2119",
	  "prnap":"\u2AB9",
	  "prnE":"\u2AB5",
	  "prnsim":"\u22E8",
	  "prod":"\u220F",
	  "Product":"\u220F",
	  "profalar":"\u232E",
	  "profline":"\u2312",
	  "profsurf":"\u2313",
	  "prop":"\u221D",
	  "Proportion":"\u2237",
	  "Proportional":"\u221D",
	  "propto":"\u221D",
	  "prsim":"\u227E",
	  "prurel":"\u22B0",
	  "Pscr":"\uD835\uDCAB",
	  "pscr":"\uD835\uDCC5",
	  "Psi":"\u03A8",
	  "psi":"\u03C8",
	  "puncsp":"\u2008",
	  "Qfr":"\uD835\uDD14",
	  "qfr":"\uD835\uDD2E",
	  "qint":"\u2A0C",
	  "Qopf":"\u211A",
	  "qopf":"\uD835\uDD62",
	  "qprime":"\u2057",
	  "Qscr":"\uD835\uDCAC",
	  "qscr":"\uD835\uDCC6",
	  "quaternions":"\u210D",
	  "quatint":"\u2A16",
	  "quest":"\u003F",
	  "questeq":"\u225F",
	  "QUOT":"\u0022",
	  "quot":"\u0022",
	  "rAarr":"\u21DB",
	  "race":"\u223D\u0331",
	  "Racute":"\u0154",
	  "racute":"\u0155",
	  "radic":"\u221A",
	  "raemptyv":"\u29B3",
	  "Rang":"\u27EB",
	  "rang":"\u27E9",
	  "rangd":"\u2992",
	  "range":"\u29A5",
	  "rangle":"\u27E9",
	  "raquo":"\u00BB",
	  "Rarr":"\u21A0",
	  "rArr":"\u21D2",
	  "rarr":"\u2192",
	  "rarrap":"\u2975",
	  "rarrb":"\u21E5",
	  "rarrbfs":"\u2920",
	  "rarrc":"\u2933",
	  "rarrfs":"\u291E",
	  "rarrhk":"\u21AA",
	  "rarrlp":"\u21AC",
	  "rarrpl":"\u2945",
	  "rarrsim":"\u2974",
	  "Rarrtl":"\u2916",
	  "rarrtl":"\u21A3",
	  "rarrw":"\u219D",
	  "rAtail":"\u291C",
	  "ratail":"\u291A",
	  "ratio":"\u2236",
	  "rationals":"\u211A",
	  "RBarr":"\u2910",
	  "rBarr":"\u290F",
	  "rbarr":"\u290D",
	  "rbbrk":"\u2773",
	  "rbrace":"\u007D",
	  "rbrack":"\u005D",
	  "rbrke":"\u298C",
	  "rbrksld":"\u298E",
	  "rbrkslu":"\u2990",
	  "Rcaron":"\u0158",
	  "rcaron":"\u0159",
	  "Rcedil":"\u0156",
	  "rcedil":"\u0157",
	  "rceil":"\u2309",
	  "rcub":"\u007D",
	  "Rcy":"\u0420",
	  "rcy":"\u0440",
	  "rdca":"\u2937",
	  "rdldhar":"\u2969",
	  "rdquo":"\u201D",
	  "rdquor":"\u201D",
	  "rdsh":"\u21B3",
	  "Re":"\u211C",
	  "real":"\u211C",
	  "realine":"\u211B",
	  "realpart":"\u211C",
	  "reals":"\u211D",
	  "rect":"\u25AD",
	  "REG":"\u00AE",
	  "reg":"\u00AE",
	  "ReverseElement":"\u220B",
	  "ReverseEquilibrium":"\u21CB",
	  "ReverseUpEquilibrium":"\u296F",
	  "rfisht":"\u297D",
	  "rfloor":"\u230B",
	  "Rfr":"\u211C",
	  "rfr":"\uD835\uDD2F",
	  "rHar":"\u2964",
	  "rhard":"\u21C1",
	  "rharu":"\u21C0",
	  "rharul":"\u296C",
	  "Rho":"\u03A1",
	  "rho":"\u03C1",
	  "rhov":"\u03F1",
	  "RightAngleBracket":"\u27E9",
	  "RightArrow":"\u2192",
	  "Rightarrow":"\u21D2",
	  "rightarrow":"\u2192",
	  "RightArrowBar":"\u21E5",
	  "RightArrowLeftArrow":"\u21C4",
	  "rightarrowtail":"\u21A3",
	  "RightCeiling":"\u2309",
	  "RightDoubleBracket":"\u27E7",
	  "RightDownTeeVector":"\u295D",
	  "RightDownVector":"\u21C2",
	  "RightDownVectorBar":"\u2955",
	  "RightFloor":"\u230B",
	  "rightharpoondown":"\u21C1",
	  "rightharpoonup":"\u21C0",
	  "rightleftarrows":"\u21C4",
	  "rightleftharpoons":"\u21CC",
	  "rightrightarrows":"\u21C9",
	  "rightsquigarrow":"\u219D",
	  "RightTee":"\u22A2",
	  "RightTeeArrow":"\u21A6",
	  "RightTeeVector":"\u295B",
	  "rightthreetimes":"\u22CC",
	  "RightTriangle":"\u22B3",
	  "RightTriangleBar":"\u29D0",
	  "RightTriangleEqual":"\u22B5",
	  "RightUpDownVector":"\u294F",
	  "RightUpTeeVector":"\u295C",
	  "RightUpVector":"\u21BE",
	  "RightUpVectorBar":"\u2954",
	  "RightVector":"\u21C0",
	  "RightVectorBar":"\u2953",
	  "ring":"\u02DA",
	  "risingdotseq":"\u2253",
	  "rlarr":"\u21C4",
	  "rlhar":"\u21CC",
	  "rlm":"\u200F",
	  "rmoust":"\u23B1",
	  "rmoustache":"\u23B1",
	  "rnmid":"\u2AEE",
	  "roang":"\u27ED",
	  "roarr":"\u21FE",
	  "robrk":"\u27E7",
	  "ropar":"\u2986",
	  "Ropf":"\u211D",
	  "ropf":"\uD835\uDD63",
	  "roplus":"\u2A2E",
	  "rotimes":"\u2A35",
	  "RoundImplies":"\u2970",
	  "rpar":"\u0029",
	  "rpargt":"\u2994",
	  "rppolint":"\u2A12",
	  "rrarr":"\u21C9",
	  "Rrightarrow":"\u21DB",
	  "rsaquo":"\u203A",
	  "Rscr":"\u211B",
	  "rscr":"\uD835\uDCC7",
	  "Rsh":"\u21B1",
	  "rsh":"\u21B1",
	  "rsqb":"\u005D",
	  "rsquo":"\u2019",
	  "rsquor":"\u2019",
	  "rthree":"\u22CC",
	  "rtimes":"\u22CA",
	  "rtri":"\u25B9",
	  "rtrie":"\u22B5",
	  "rtrif":"\u25B8",
	  "rtriltri":"\u29CE",
	  "RuleDelayed":"\u29F4",
	  "ruluhar":"\u2968",
	  "rx":"\u211E",
	  "Sacute":"\u015A",
	  "sacute":"\u015B",
	  "sbquo":"\u201A",
	  "Sc":"\u2ABC",
	  "sc":"\u227B",
	  "scap":"\u2AB8",
	  "Scaron":"\u0160",
	  "scaron":"\u0161",
	  "sccue":"\u227D",
	  "scE":"\u2AB4",
	  "sce":"\u2AB0",
	  "Scedil":"\u015E",
	  "scedil":"\u015F",
	  "Scirc":"\u015C",
	  "scirc":"\u015D",
	  "scnap":"\u2ABA",
	  "scnE":"\u2AB6",
	  "scnsim":"\u22E9",
	  "scpolint":"\u2A13",
	  "scsim":"\u227F",
	  "Scy":"\u0421",
	  "scy":"\u0441",
	  "sdot":"\u22C5",
	  "sdotb":"\u22A1",
	  "sdote":"\u2A66",
	  "searhk":"\u2925",
	  "seArr":"\u21D8",
	  "searr":"\u2198",
	  "searrow":"\u2198",
	  "sect":"\u00A7",
	  "semi":"\u003B",
	  "seswar":"\u2929",
	  "setminus":"\u2216",
	  "setmn":"\u2216",
	  "sext":"\u2736",
	  "Sfr":"\uD835\uDD16",
	  "sfr":"\uD835\uDD30",
	  "sfrown":"\u2322",
	  "sharp":"\u266F",
	  "SHCHcy":"\u0429",
	  "shchcy":"\u0449",
	  "SHcy":"\u0428",
	  "shcy":"\u0448",
	  "ShortDownArrow":"\u2193",
	  "ShortLeftArrow":"\u2190",
	  "shortmid":"\u2223",
	  "shortparallel":"\u2225",
	  "ShortRightArrow":"\u2192",
	  "ShortUpArrow":"\u2191",
	  "shy":"\u00AD",
	  "Sigma":"\u03A3",
	  "sigma":"\u03C3",
	  "sigmaf":"\u03C2",
	  "sigmav":"\u03C2",
	  "sim":"\u223C",
	  "simdot":"\u2A6A",
	  "sime":"\u2243",
	  "simeq":"\u2243",
	  "simg":"\u2A9E",
	  "simgE":"\u2AA0",
	  "siml":"\u2A9D",
	  "simlE":"\u2A9F",
	  "simne":"\u2246",
	  "simplus":"\u2A24",
	  "simrarr":"\u2972",
	  "slarr":"\u2190",
	  "SmallCircle":"\u2218",
	  "smallsetminus":"\u2216",
	  "smashp":"\u2A33",
	  "smeparsl":"\u29E4",
	  "smid":"\u2223",
	  "smile":"\u2323",
	  "smt":"\u2AAA",
	  "smte":"\u2AAC",
	  "smtes":"\u2AAC\uFE00",
	  "SOFTcy":"\u042C",
	  "softcy":"\u044C",
	  "sol":"\u002F",
	  "solb":"\u29C4",
	  "solbar":"\u233F",
	  "Sopf":"\uD835\uDD4A",
	  "sopf":"\uD835\uDD64",
	  "spades":"\u2660",
	  "spadesuit":"\u2660",
	  "spar":"\u2225",
	  "sqcap":"\u2293",
	  "sqcaps":"\u2293\uFE00",
	  "sqcup":"\u2294",
	  "sqcups":"\u2294\uFE00",
	  "Sqrt":"\u221A",
	  "sqsub":"\u228F",
	  "sqsube":"\u2291",
	  "sqsubset":"\u228F",
	  "sqsubseteq":"\u2291",
	  "sqsup":"\u2290",
	  "sqsupe":"\u2292",
	  "sqsupset":"\u2290",
	  "sqsupseteq":"\u2292",
	  "squ":"\u25A1",
	  "Square":"\u25A1",
	  "square":"\u25A1",
	  "SquareIntersection":"\u2293",
	  "SquareSubset":"\u228F",
	  "SquareSubsetEqual":"\u2291",
	  "SquareSuperset":"\u2290",
	  "SquareSupersetEqual":"\u2292",
	  "SquareUnion":"\u2294",
	  "squarf":"\u25AA",
	  "squf":"\u25AA",
	  "srarr":"\u2192",
	  "Sscr":"\uD835\uDCAE",
	  "sscr":"\uD835\uDCC8",
	  "ssetmn":"\u2216",
	  "ssmile":"\u2323",
	  "sstarf":"\u22C6",
	  "Star":"\u22C6",
	  "star":"\u2606",
	  "starf":"\u2605",
	  "straightepsilon":"\u03F5",
	  "straightphi":"\u03D5",
	  "strns":"\u00AF",
	  "Sub":"\u22D0",
	  "sub":"\u2282",
	  "subdot":"\u2ABD",
	  "subE":"\u2AC5",
	  "sube":"\u2286",
	  "subedot":"\u2AC3",
	  "submult":"\u2AC1",
	  "subnE":"\u2ACB",
	  "subne":"\u228A",
	  "subplus":"\u2ABF",
	  "subrarr":"\u2979",
	  "Subset":"\u22D0",
	  "subset":"\u2282",
	  "subseteq":"\u2286",
	  "subseteqq":"\u2AC5",
	  "SubsetEqual":"\u2286",
	  "subsetneq":"\u228A",
	  "subsetneqq":"\u2ACB",
	  "subsim":"\u2AC7",
	  "subsub":"\u2AD5",
	  "subsup":"\u2AD3",
	  "succ":"\u227B",
	  "succapprox":"\u2AB8",
	  "succcurlyeq":"\u227D",
	  "Succeeds":"\u227B",
	  "SucceedsEqual":"\u2AB0",
	  "SucceedsSlantEqual":"\u227D",
	  "SucceedsTilde":"\u227F",
	  "succeq":"\u2AB0",
	  "succnapprox":"\u2ABA",
	  "succneqq":"\u2AB6",
	  "succnsim":"\u22E9",
	  "succsim":"\u227F",
	  "SuchThat":"\u220B",
	  "Sum":"\u2211",
	  "sum":"\u2211",
	  "sung":"\u266A",
	  "Sup":"\u22D1",
	  "sup":"\u2283",
	  "sup1":"\u00B9",
	  "sup2":"\u00B2",
	  "sup3":"\u00B3",
	  "supdot":"\u2ABE",
	  "supdsub":"\u2AD8",
	  "supE":"\u2AC6",
	  "supe":"\u2287",
	  "supedot":"\u2AC4",
	  "Superset":"\u2283",
	  "SupersetEqual":"\u2287",
	  "suphsol":"\u27C9",
	  "suphsub":"\u2AD7",
	  "suplarr":"\u297B",
	  "supmult":"\u2AC2",
	  "supnE":"\u2ACC",
	  "supne":"\u228B",
	  "supplus":"\u2AC0",
	  "Supset":"\u22D1",
	  "supset":"\u2283",
	  "supseteq":"\u2287",
	  "supseteqq":"\u2AC6",
	  "supsetneq":"\u228B",
	  "supsetneqq":"\u2ACC",
	  "supsim":"\u2AC8",
	  "supsub":"\u2AD4",
	  "supsup":"\u2AD6",
	  "swarhk":"\u2926",
	  "swArr":"\u21D9",
	  "swarr":"\u2199",
	  "swarrow":"\u2199",
	  "swnwar":"\u292A",
	  "szlig":"\u00DF",
	  "Tab":"\u0009",
	  "target":"\u2316",
	  "Tau":"\u03A4",
	  "tau":"\u03C4",
	  "tbrk":"\u23B4",
	  "Tcaron":"\u0164",
	  "tcaron":"\u0165",
	  "Tcedil":"\u0162",
	  "tcedil":"\u0163",
	  "Tcy":"\u0422",
	  "tcy":"\u0442",
	  "tdot":"\u20DB",
	  "telrec":"\u2315",
	  "Tfr":"\uD835\uDD17",
	  "tfr":"\uD835\uDD31",
	  "there4":"\u2234",
	  "Therefore":"\u2234",
	  "therefore":"\u2234",
	  "Theta":"\u0398",
	  "theta":"\u03B8",
	  "thetasym":"\u03D1",
	  "thetav":"\u03D1",
	  "thickapprox":"\u2248",
	  "thicksim":"\u223C",
	  "ThickSpace":"\u205F\u200A",
	  "thinsp":"\u2009",
	  "ThinSpace":"\u2009",
	  "thkap":"\u2248",
	  "thksim":"\u223C",
	  "THORN":"\u00DE",
	  "thorn":"\u00FE",
	  "Tilde":"\u223C",
	  "tilde":"\u02DC",
	  "TildeEqual":"\u2243",
	  "TildeFullEqual":"\u2245",
	  "TildeTilde":"\u2248",
	  "times":"\u00D7",
	  "timesb":"\u22A0",
	  "timesbar":"\u2A31",
	  "timesd":"\u2A30",
	  "tint":"\u222D",
	  "toea":"\u2928",
	  "top":"\u22A4",
	  "topbot":"\u2336",
	  "topcir":"\u2AF1",
	  "Topf":"\uD835\uDD4B",
	  "topf":"\uD835\uDD65",
	  "topfork":"\u2ADA",
	  "tosa":"\u2929",
	  "tprime":"\u2034",
	  "TRADE":"\u2122",
	  "trade":"\u2122",
	  "triangle":"\u25B5",
	  "triangledown":"\u25BF",
	  "triangleleft":"\u25C3",
	  "trianglelefteq":"\u22B4",
	  "triangleq":"\u225C",
	  "triangleright":"\u25B9",
	  "trianglerighteq":"\u22B5",
	  "tridot":"\u25EC",
	  "trie":"\u225C",
	  "triminus":"\u2A3A",
	  "TripleDot":"\u20DB",
	  "triplus":"\u2A39",
	  "trisb":"\u29CD",
	  "tritime":"\u2A3B",
	  "trpezium":"\u23E2",
	  "Tscr":"\uD835\uDCAF",
	  "tscr":"\uD835\uDCC9",
	  "TScy":"\u0426",
	  "tscy":"\u0446",
	  "TSHcy":"\u040B",
	  "tshcy":"\u045B",
	  "Tstrok":"\u0166",
	  "tstrok":"\u0167",
	  "twixt":"\u226C",
	  "twoheadleftarrow":"\u219E",
	  "twoheadrightarrow":"\u21A0",
	  "Uacute":"\u00DA",
	  "uacute":"\u00FA",
	  "Uarr":"\u219F",
	  "uArr":"\u21D1",
	  "uarr":"\u2191",
	  "Uarrocir":"\u2949",
	  "Ubrcy":"\u040E",
	  "ubrcy":"\u045E",
	  "Ubreve":"\u016C",
	  "ubreve":"\u016D",
	  "Ucirc":"\u00DB",
	  "ucirc":"\u00FB",
	  "Ucy":"\u0423",
	  "ucy":"\u0443",
	  "udarr":"\u21C5",
	  "Udblac":"\u0170",
	  "udblac":"\u0171",
	  "udhar":"\u296E",
	  "ufisht":"\u297E",
	  "Ufr":"\uD835\uDD18",
	  "ufr":"\uD835\uDD32",
	  "Ugrave":"\u00D9",
	  "ugrave":"\u00F9",
	  "uHar":"\u2963",
	  "uharl":"\u21BF",
	  "uharr":"\u21BE",
	  "uhblk":"\u2580",
	  "ulcorn":"\u231C",
	  "ulcorner":"\u231C",
	  "ulcrop":"\u230F",
	  "ultri":"\u25F8",
	  "Umacr":"\u016A",
	  "umacr":"\u016B",
	  "uml":"\u00A8",
	  "UnderBar":"\u005F",
	  "UnderBrace":"\u23DF",
	  "UnderBracket":"\u23B5",
	  "UnderParenthesis":"\u23DD",
	  "Union":"\u22C3",
	  "UnionPlus":"\u228E",
	  "Uogon":"\u0172",
	  "uogon":"\u0173",
	  "Uopf":"\uD835\uDD4C",
	  "uopf":"\uD835\uDD66",
	  "UpArrow":"\u2191",
	  "Uparrow":"\u21D1",
	  "uparrow":"\u2191",
	  "UpArrowBar":"\u2912",
	  "UpArrowDownArrow":"\u21C5",
	  "UpDownArrow":"\u2195",
	  "Updownarrow":"\u21D5",
	  "updownarrow":"\u2195",
	  "UpEquilibrium":"\u296E",
	  "upharpoonleft":"\u21BF",
	  "upharpoonright":"\u21BE",
	  "uplus":"\u228E",
	  "UpperLeftArrow":"\u2196",
	  "UpperRightArrow":"\u2197",
	  "Upsi":"\u03D2",
	  "upsi":"\u03C5",
	  "upsih":"\u03D2",
	  "Upsilon":"\u03A5",
	  "upsilon":"\u03C5",
	  "UpTee":"\u22A5",
	  "UpTeeArrow":"\u21A5",
	  "upuparrows":"\u21C8",
	  "urcorn":"\u231D",
	  "urcorner":"\u231D",
	  "urcrop":"\u230E",
	  "Uring":"\u016E",
	  "uring":"\u016F",
	  "urtri":"\u25F9",
	  "Uscr":"\uD835\uDCB0",
	  "uscr":"\uD835\uDCCA",
	  "utdot":"\u22F0",
	  "Utilde":"\u0168",
	  "utilde":"\u0169",
	  "utri":"\u25B5",
	  "utrif":"\u25B4",
	  "uuarr":"\u21C8",
	  "Uuml":"\u00DC",
	  "uuml":"\u00FC",
	  "uwangle":"\u29A7",
	  "vangrt":"\u299C",
	  "varepsilon":"\u03F5",
	  "varkappa":"\u03F0",
	  "varnothing":"\u2205",
	  "varphi":"\u03D5",
	  "varpi":"\u03D6",
	  "varpropto":"\u221D",
	  "vArr":"\u21D5",
	  "varr":"\u2195",
	  "varrho":"\u03F1",
	  "varsigma":"\u03C2",
	  "varsubsetneq":"\u228A\uFE00",
	  "varsubsetneqq":"\u2ACB\uFE00",
	  "varsupsetneq":"\u228B\uFE00",
	  "varsupsetneqq":"\u2ACC\uFE00",
	  "vartheta":"\u03D1",
	  "vartriangleleft":"\u22B2",
	  "vartriangleright":"\u22B3",
	  "Vbar":"\u2AEB",
	  "vBar":"\u2AE8",
	  "vBarv":"\u2AE9",
	  "Vcy":"\u0412",
	  "vcy":"\u0432",
	  "VDash":"\u22AB",
	  "Vdash":"\u22A9",
	  "vDash":"\u22A8",
	  "vdash":"\u22A2",
	  "Vdashl":"\u2AE6",
	  "Vee":"\u22C1",
	  "vee":"\u2228",
	  "veebar":"\u22BB",
	  "veeeq":"\u225A",
	  "vellip":"\u22EE",
	  "Verbar":"\u2016",
	  "verbar":"\u007C",
	  "Vert":"\u2016",
	  "vert":"\u007C",
	  "VerticalBar":"\u2223",
	  "VerticalLine":"\u007C",
	  "VerticalSeparator":"\u2758",
	  "VerticalTilde":"\u2240",
	  "VeryThinSpace":"\u200A",
	  "Vfr":"\uD835\uDD19",
	  "vfr":"\uD835\uDD33",
	  "vltri":"\u22B2",
	  "vnsub":"\u2282\u20D2",
	  "vnsup":"\u2283\u20D2",
	  "Vopf":"\uD835\uDD4D",
	  "vopf":"\uD835\uDD67",
	  "vprop":"\u221D",
	  "vrtri":"\u22B3",
	  "Vscr":"\uD835\uDCB1",
	  "vscr":"\uD835\uDCCB",
	  "vsubnE":"\u2ACB\uFE00",
	  "vsubne":"\u228A\uFE00",
	  "vsupnE":"\u2ACC\uFE00",
	  "vsupne":"\u228B\uFE00",
	  "Vvdash":"\u22AA",
	  "vzigzag":"\u299A",
	  "Wcirc":"\u0174",
	  "wcirc":"\u0175",
	  "wedbar":"\u2A5F",
	  "Wedge":"\u22C0",
	  "wedge":"\u2227",
	  "wedgeq":"\u2259",
	  "weierp":"\u2118",
	  "Wfr":"\uD835\uDD1A",
	  "wfr":"\uD835\uDD34",
	  "Wopf":"\uD835\uDD4E",
	  "wopf":"\uD835\uDD68",
	  "wp":"\u2118",
	  "wr":"\u2240",
	  "wreath":"\u2240",
	  "Wscr":"\uD835\uDCB2",
	  "wscr":"\uD835\uDCCC",
	  "xcap":"\u22C2",
	  "xcirc":"\u25EF",
	  "xcup":"\u22C3",
	  "xdtri":"\u25BD",
	  "Xfr":"\uD835\uDD1B",
	  "xfr":"\uD835\uDD35",
	  "xhArr":"\u27FA",
	  "xharr":"\u27F7",
	  "Xi":"\u039E",
	  "xi":"\u03BE",
	  "xlArr":"\u27F8",
	  "xlarr":"\u27F5",
	  "xmap":"\u27FC",
	  "xnis":"\u22FB",
	  "xodot":"\u2A00",
	  "Xopf":"\uD835\uDD4F",
	  "xopf":"\uD835\uDD69",
	  "xoplus":"\u2A01",
	  "xotime":"\u2A02",
	  "xrArr":"\u27F9",
	  "xrarr":"\u27F6",
	  "Xscr":"\uD835\uDCB3",
	  "xscr":"\uD835\uDCCD",
	  "xsqcup":"\u2A06",
	  "xuplus":"\u2A04",
	  "xutri":"\u25B3",
	  "xvee":"\u22C1",
	  "xwedge":"\u22C0",
	  "Yacute":"\u00DD",
	  "yacute":"\u00FD",
	  "YAcy":"\u042F",
	  "yacy":"\u044F",
	  "Ycirc":"\u0176",
	  "ycirc":"\u0177",
	  "Ycy":"\u042B",
	  "ycy":"\u044B",
	  "yen":"\u00A5",
	  "Yfr":"\uD835\uDD1C",
	  "yfr":"\uD835\uDD36",
	  "YIcy":"\u0407",
	  "yicy":"\u0457",
	  "Yopf":"\uD835\uDD50",
	  "yopf":"\uD835\uDD6A",
	  "Yscr":"\uD835\uDCB4",
	  "yscr":"\uD835\uDCCE",
	  "YUcy":"\u042E",
	  "yucy":"\u044E",
	  "Yuml":"\u0178",
	  "yuml":"\u00FF",
	  "Zacute":"\u0179",
	  "zacute":"\u017A",
	  "Zcaron":"\u017D",
	  "zcaron":"\u017E",
	  "Zcy":"\u0417",
	  "zcy":"\u0437",
	  "Zdot":"\u017B",
	  "zdot":"\u017C",
	  "zeetrf":"\u2128",
	  "ZeroWidthSpace":"\u200B",
	  "Zeta":"\u0396",
	  "zeta":"\u03B6",
	  "Zfr":"\u2128",
	  "zfr":"\uD835\uDD37",
	  "ZHcy":"\u0416",
	  "zhcy":"\u0436",
	  "zigrarr":"\u21DD",
	  "Zopf":"\u2124",
	  "zopf":"\uD835\uDD6B",
	  "Zscr":"\uD835\uDCB5",
	  "zscr":"\uD835\uDCCF",
	  "zwj":"\u200D",
	  "zwnj":"\u200C"
	};


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Local dependencies
	 */
	
	var has             = __webpack_require__(225).has;
	var unescapeMd      = __webpack_require__(225).unescapeMd;
	var replaceEntities = __webpack_require__(225).replaceEntities;
	var escapeHtml      = __webpack_require__(225).escapeHtml;
	
	/**
	 * Renderer rules cache
	 */
	
	var rules = {};
	
	/**
	 * Blockquotes
	 */
	
	rules.blockquote_open = function (/* tokens, idx, options, env */) {
	  return '<blockquote>\n';
	};
	
	rules.blockquote_close = function (tokens, idx /*, options, env */) {
	  return '</blockquote>' + getBreak(tokens, idx);
	};
	
	/**
	 * Code
	 */
	
	rules.code = function (tokens, idx /*, options, env */) {
	  if (tokens[idx].block) {
	    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
	  }
	  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
	};
	
	/**
	 * Fenced code blocks
	 */
	
	rules.fence = function (tokens, idx, options, env, self) {
	  var token = tokens[idx];
	  var langClass = '';
	  var langPrefix = options.langPrefix;
	  var langName = '', fenceName;
	  var highlighted;
	
	  if (token.params) {
	
	    //
	    // ```foo bar
	    //
	    // Try custom renderer "foo" first. That will simplify overwrite
	    // for diagrams, latex, and any other fenced block with custom look
	    //
	
	    fenceName = token.params.split(/\s+/g)[0];
	
	    if (has(self.rules.fence_custom, fenceName)) {
	      return self.rules.fence_custom[fenceName](tokens, idx, options, env, self);
	    }
	
	    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
	    langClass = ' class="' + langPrefix + langName + '"';
	  }
	
	  if (options.highlight) {
	    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
	  } else {
	    highlighted = escapeHtml(token.content);
	  }
	
	  return '<pre><code' + langClass + '>'
	        + highlighted
	        + '</code></pre>'
	        + getBreak(tokens, idx);
	};
	
	rules.fence_custom = {};
	
	/**
	 * Headings
	 */
	
	rules.heading_open = function (tokens, idx /*, options, env */) {
	  return '<h' + tokens[idx].hLevel + '>';
	};
	rules.heading_close = function (tokens, idx /*, options, env */) {
	  return '</h' + tokens[idx].hLevel + '>\n';
	};
	
	/**
	 * Horizontal rules
	 */
	
	rules.hr = function (tokens, idx, options /*, env */) {
	  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
	};
	
	/**
	 * Bullets
	 */
	
	rules.bullet_list_open = function (/* tokens, idx, options, env */) {
	  return '<ul>\n';
	};
	rules.bullet_list_close = function (tokens, idx /*, options, env */) {
	  return '</ul>' + getBreak(tokens, idx);
	};
	
	/**
	 * List items
	 */
	
	rules.list_item_open = function (/* tokens, idx, options, env */) {
	  return '<li>';
	};
	rules.list_item_close = function (/* tokens, idx, options, env */) {
	  return '</li>\n';
	};
	
	/**
	 * Ordered list items
	 */
	
	rules.ordered_list_open = function (tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
	  return '<ol' + order + '>\n';
	};
	rules.ordered_list_close = function (tokens, idx /*, options, env */) {
	  return '</ol>' + getBreak(tokens, idx);
	};
	
	/**
	 * Paragraphs
	 */
	
	rules.paragraph_open = function (tokens, idx /*, options, env */) {
	  return tokens[idx].tight ? '' : '<p>';
	};
	rules.paragraph_close = function (tokens, idx /*, options, env */) {
	  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
	  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
	};
	
	/**
	 * Links
	 */
	
	rules.link_open = function (tokens, idx /*, options, env */) {
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + '>';
	};
	rules.link_close = function (/* tokens, idx, options, env */) {
	  return '</a>';
	};
	
	/**
	 * Images
	 */
	
	rules.image = function (tokens, idx, options /*, env */) {
	  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
	  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
	  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(tokens[idx].alt)) : '') + '"';
	  var suffix = options.xhtmlOut ? ' /' : '';
	  return '<img' + src + alt + title + suffix + '>';
	};
	
	/**
	 * Tables
	 */
	
	rules.table_open = function (/* tokens, idx, options, env */) {
	  return '<table>\n';
	};
	rules.table_close = function (/* tokens, idx, options, env */) {
	  return '</table>\n';
	};
	rules.thead_open = function (/* tokens, idx, options, env */) {
	  return '<thead>\n';
	};
	rules.thead_close = function (/* tokens, idx, options, env */) {
	  return '</thead>\n';
	};
	rules.tbody_open = function (/* tokens, idx, options, env */) {
	  return '<tbody>\n';
	};
	rules.tbody_close = function (/* tokens, idx, options, env */) {
	  return '</tbody>\n';
	};
	rules.tr_open = function (/* tokens, idx, options, env */) {
	  return '<tr>';
	};
	rules.tr_close = function (/* tokens, idx, options, env */) {
	  return '</tr>\n';
	};
	rules.th_open = function (tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<th'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.th_close = function (/* tokens, idx, options, env */) {
	  return '</th>';
	};
	rules.td_open = function (tokens, idx /*, options, env */) {
	  var token = tokens[idx];
	  return '<td'
	    + (token.align ? ' style="text-align:' + token.align + '"' : '')
	    + '>';
	};
	rules.td_close = function (/* tokens, idx, options, env */) {
	  return '</td>';
	};
	
	/**
	 * Bold
	 */
	
	rules.strong_open = function (/* tokens, idx, options, env */) {
	  return '<strong>';
	};
	rules.strong_close = function (/* tokens, idx, options, env */) {
	  return '</strong>';
	};
	
	/**
	 * Italicize
	 */
	
	rules.em_open = function (/* tokens, idx, options, env */) {
	  return '<em>';
	};
	rules.em_close = function (/* tokens, idx, options, env */) {
	  return '</em>';
	};
	
	/**
	 * Strikethrough
	 */
	
	rules.del_open = function (/* tokens, idx, options, env */) {
	  return '<del>';
	};
	rules.del_close = function (/* tokens, idx, options, env */) {
	  return '</del>';
	};
	
	/**
	 * Insert
	 */
	
	rules.ins_open = function (/* tokens, idx, options, env */) {
	  return '<ins>';
	};
	rules.ins_close = function (/* tokens, idx, options, env */) {
	  return '</ins>';
	};
	
	/**
	 * Highlight
	 */
	
	rules.mark_open = function (/* tokens, idx, options, env */) {
	  return '<mark>';
	};
	rules.mark_close = function (/* tokens, idx, options, env */) {
	  return '</mark>';
	};
	
	/**
	 * Super- and sub-script
	 */
	
	rules.sub = function (tokens, idx /*, options, env */) {
	  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
	};
	rules.sup = function (tokens, idx /*, options, env */) {
	  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
	};
	
	/**
	 * Breaks
	 */
	
	rules.hardbreak = function (tokens, idx, options /*, env */) {
	  return options.xhtmlOut ? '<br />\n' : '<br>\n';
	};
	rules.softbreak = function (tokens, idx, options /*, env */) {
	  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
	};
	
	/**
	 * Text
	 */
	
	rules.text = function (tokens, idx /*, options, env */) {
	  return escapeHtml(tokens[idx].content);
	};
	
	/**
	 * Content
	 */
	
	rules.htmlblock = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	rules.htmltag = function (tokens, idx /*, options, env */) {
	  return tokens[idx].content;
	};
	
	/**
	 * Abbreviations, initialism
	 */
	
	rules.abbr_open = function (tokens, idx /*, options, env */) {
	  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
	};
	rules.abbr_close = function (/* tokens, idx, options, env */) {
	  return '</abbr>';
	};
	
	/**
	 * Footnotes
	 */
	
	rules.footnote_ref = function (tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
	};
	rules.footnote_block_open = function (tokens, idx, options) {
	  var hr = options.xhtmlOut
	    ? '<hr class="footnotes-sep" />\n'
	    : '<hr class="footnotes-sep">\n';
	  return  hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
	};
	rules.footnote_block_close = function () {
	  return '</ol>\n</section>\n';
	};
	rules.footnote_open = function (tokens, idx) {
	  var id = Number(tokens[idx].id + 1).toString();
	  return '<li id="fn' + id + '"  class="footnote-item">';
	};
	rules.footnote_close = function () {
	  return '</li>\n';
	};
	rules.footnote_anchor = function (tokens, idx) {
	  var n = Number(tokens[idx].id + 1).toString();
	  var id = 'fnref' + n;
	  if (tokens[idx].subId > 0) {
	    id += ':' + tokens[idx].subId;
	  }
	  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
	};
	
	/**
	 * Definition lists
	 */
	
	rules.dl_open = function() {
	  return '<dl>\n';
	};
	rules.dt_open = function() {
	  return '<dt>';
	};
	rules.dd_open = function() {
	  return '<dd>';
	};
	rules.dl_close = function() {
	  return '</dl>\n';
	};
	rules.dt_close = function() {
	  return '</dt>\n';
	};
	rules.dd_close = function() {
	  return '</dd>\n';
	};
	
	/**
	 * Helper functions
	 */
	
	function nextToken(tokens, idx) {
	  if (++idx >= tokens.length - 2) {
	    return idx;
	  }
	  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) &&
	      (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) &&
	      (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
	    return nextToken(tokens, idx + 2);
	  }
	  return idx;
	}
	
	/**
	 * Check to see if `\n` is needed before the next token.
	 *
	 * @param  {Array} `tokens`
	 * @param  {Number} `idx`
	 * @return {String} Empty string or newline
	 * @api private
	 */
	
	var getBreak = rules.getBreak = function getBreak(tokens, idx) {
	  idx = nextToken(tokens, idx);
	  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
	    return '';
	  }
	  return '\n';
	};
	
	/**
	 * Expose `rules`
	 */
	
	module.exports = rules;


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// Parser state class
	
	'use strict';
	
	
	function StateBlock(src, parser, options, env, tokens) {
	  var ch, s, start, pos, len, indent, indent_found;
	
	  this.src = src;
	
	  // Shortcuts to simplify nested calls
	  this.parser = parser;
	
	  this.options = options;
	
	  this.env = env;
	
	  //
	  // Internal state vartiables
	  //
	
	  this.tokens = tokens;
	
	  this.bMarks = [];  // line begin offsets for fast jumps
	  this.eMarks = [];  // line end offsets for fast jumps
	  this.tShift = [];  // indent for each line
	
	  // block parser variables
	  this.blkIndent  = 0; // required block content indent
	                       // (for example, if we are in list)
	  this.line       = 0; // line index in src
	  this.lineMax    = 0; // lines count
	  this.tight      = false;  // loose/tight mode for lists
	  this.parentType = 'root'; // if `list`, block parser stops on two newlines
	  this.ddIndent   = -1; // indent of the current dd block (-1 if there isn't any)
	
	  this.level = 0;
	
	  // renderer
	  this.result = '';
	
	  // Create caches
	  // Generate markers.
	  s = this.src;
	  indent = 0;
	  indent_found = false;
	
	  for (start = pos = indent = 0, len = s.length; pos < len; pos++) {
	    ch = s.charCodeAt(pos);
	
	    if (!indent_found) {
	      if (ch === 0x20/* space */) {
	        indent++;
	        continue;
	      } else {
	        indent_found = true;
	      }
	    }
	
	    if (ch === 0x0A || pos === len - 1) {
	      if (ch !== 0x0A) { pos++; }
	      this.bMarks.push(start);
	      this.eMarks.push(pos);
	      this.tShift.push(indent);
	
	      indent_found = false;
	      indent = 0;
	      start = pos + 1;
	    }
	  }
	
	  // Push fake entry to simplify cache bounds checks
	  this.bMarks.push(s.length);
	  this.eMarks.push(s.length);
	  this.tShift.push(0);
	
	  this.lineMax = this.bMarks.length - 1; // don't count last fake line
	}
	
	StateBlock.prototype.isEmpty = function isEmpty(line) {
	  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
	};
	
	StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
	  for (var max = this.lineMax; from < max; from++) {
	    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
	      break;
	    }
	  }
	  return from;
	};
	
	// Skip spaces from given position.
	StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== 0x20/* space */) { break; }
	  }
	  return pos;
	};
	
	// Skip char codes from given position
	StateBlock.prototype.skipChars = function skipChars(pos, code) {
	  for (var max = this.src.length; pos < max; pos++) {
	    if (this.src.charCodeAt(pos) !== code) { break; }
	  }
	  return pos;
	};
	
	// Skip char codes reverse from given position - 1
	StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code, min) {
	  if (pos <= min) { return pos; }
	
	  while (pos > min) {
	    if (code !== this.src.charCodeAt(--pos)) { return pos + 1; }
	  }
	  return pos;
	};
	
	// cut lines range from source.
	StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
	  var i, first, last, queue, shift,
	      line = begin;
	
	  if (begin >= end) {
	    return '';
	  }
	
	  // Opt: don't use push queue for single line;
	  if (line + 1 === end) {
	    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
	    last = keepLastLF ? this.bMarks[end] : this.eMarks[end - 1];
	    return this.src.slice(first, last);
	  }
	
	  queue = new Array(end - begin);
	
	  for (i = 0; line < end; line++, i++) {
	    shift = this.tShift[line];
	    if (shift > indent) { shift = indent; }
	    if (shift < 0) { shift = 0; }
	
	    first = this.bMarks[line] + shift;
	
	    if (line + 1 < end || keepLastLF) {
	      // No need for bounds check because we have fake entry on tail.
	      last = this.eMarks[line] + 1;
	    } else {
	      last = this.eMarks[line];
	    }
	
	    queue[i] = this.src.slice(first, last);
	  }
	
	  return queue.join('');
	};
	
	
	module.exports = StateBlock;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// Code block (4 spaces padded)
	
	'use strict';
	
	
	module.exports = function code(state, startLine, endLine/*, silent*/) {
	  var nextLine, last;
	
	  if (state.tShift[startLine] - state.blkIndent < 4) { return false; }
	
	  last = nextLine = startLine + 1;
	
	  while (nextLine < endLine) {
	    if (state.isEmpty(nextLine)) {
	      nextLine++;
	      continue;
	    }
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      nextLine++;
	      last = nextLine;
	      continue;
	    }
	    break;
	  }
	
	  state.line = nextLine;
	  state.tokens.push({
	    type: 'code',
	    content: state.getLines(startLine, last, 4 + state.blkIndent, true),
	    block: true,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  return true;
	};


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// fences (``` lang, ~~~ lang)
	
	'use strict';
	
	
	module.exports = function fences(state, startLine, endLine, silent) {
	  var marker, len, params, nextLine, mem,
	      haveEndMarker = false,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos + 3 > max) { return false; }
	
	  marker = state.src.charCodeAt(pos);
	
	  if (marker !== 0x7E/* ~ */ && marker !== 0x60 /* ` */) {
	    return false;
	  }
	
	  // scan marker length
	  mem = pos;
	  pos = state.skipChars(pos, marker);
	
	  len = pos - mem;
	
	  if (len < 3) { return false; }
	
	  params = state.src.slice(pos, max).trim();
	
	  if (params.indexOf('`') >= 0) { return false; }
	
	  // Since start is found, we can report success here in validation mode
	  if (silent) { return true; }
	
	  // search end of block
	  nextLine = startLine;
	
	  for (;;) {
	    nextLine++;
	    if (nextLine >= endLine) {
	      // unclosed block should be autoclosed by end of document.
	      // also block seems to be autoclosed by end of parent
	      break;
	    }
	
	    pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];
	
	    if (pos < max && state.tShift[nextLine] < state.blkIndent) {
	      // non-empty line with negative indent should stop the list:
	      // - ```
	      //  test
	      break;
	    }
	
	    if (state.src.charCodeAt(pos) !== marker) { continue; }
	
	    if (state.tShift[nextLine] - state.blkIndent >= 4) {
	      // closing fence should be indented less than 4 spaces
	      continue;
	    }
	
	    pos = state.skipChars(pos, marker);
	
	    // closing code fence must be at least as long as the opening one
	    if (pos - mem < len) { continue; }
	
	    // make sure tail has spaces only
	    pos = state.skipSpaces(pos);
	
	    if (pos < max) { continue; }
	
	    haveEndMarker = true;
	    // found!
	    break;
	  }
	
	  // If a fence has heading spaces, they should be removed from its inner block
	  len = state.tShift[startLine];
	
	  state.line = nextLine + (haveEndMarker ? 1 : 0);
	  state.tokens.push({
	    type: 'fence',
	    params: params,
	    content: state.getLines(startLine + 1, nextLine, len, true),
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  return true;
	};


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// Block quotes
	
	'use strict';
	
	
	module.exports = function blockquote(state, startLine, endLine, silent) {
	  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines,
	      terminatorRules,
	      i, l, terminate,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos > max) { return false; }
	
	  // check the block quote marker
	  if (state.src.charCodeAt(pos++) !== 0x3E/* > */) { return false; }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  // we know that it's going to be a valid blockquote,
	  // so no point trying to find the end of it in silent mode
	  if (silent) { return true; }
	
	  // skip one optional space after '>'
	  if (state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	  oldIndent = state.blkIndent;
	  state.blkIndent = 0;
	
	  oldBMarks = [ state.bMarks[startLine] ];
	  state.bMarks[startLine] = pos;
	
	  // check if we have an empty blockquote
	  pos = pos < max ? state.skipSpaces(pos) : pos;
	  lastLineEmpty = pos >= max;
	
	  oldTShift = [ state.tShift[startLine] ];
	  state.tShift[startLine] = pos - state.bMarks[startLine];
	
	  terminatorRules = state.parser.ruler.getRules('blockquote');
	
	  // Search the end of the block
	  //
	  // Block ends with either:
	  //  1. an empty line outside:
	  //     ```
	  //     > test
	  //
	  //     ```
	  //  2. an empty line inside:
	  //     ```
	  //     >
	  //     test
	  //     ```
	  //  3. another tag
	  //     ```
	  //     > test
	  //      - - -
	  //     ```
	  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
	    pos = state.bMarks[nextLine] + state.tShift[nextLine];
	    max = state.eMarks[nextLine];
	
	    if (pos >= max) {
	      // Case 1: line is not inside the blockquote, and this line is empty.
	      break;
	    }
	
	    if (state.src.charCodeAt(pos++) === 0x3E/* > */) {
	      // This line is inside the blockquote.
	
	      // skip one optional space after '>'
	      if (state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	      oldBMarks.push(state.bMarks[nextLine]);
	      state.bMarks[nextLine] = pos;
	
	      pos = pos < max ? state.skipSpaces(pos) : pos;
	      lastLineEmpty = pos >= max;
	
	      oldTShift.push(state.tShift[nextLine]);
	      state.tShift[nextLine] = pos - state.bMarks[nextLine];
	      continue;
	    }
	
	    // Case 2: line is not inside the blockquote, and the last line was empty.
	    if (lastLineEmpty) { break; }
	
	    // Case 3: another tag found.
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	
	    oldBMarks.push(state.bMarks[nextLine]);
	    oldTShift.push(state.tShift[nextLine]);
	
	    // A negative number means that this is a paragraph continuation;
	    //
	    // Any negative number will do the job here, but it's better for it
	    // to be large enough to make any bugs obvious.
	    state.tShift[nextLine] = -1337;
	  }
	
	  oldParentType = state.parentType;
	  state.parentType = 'blockquote';
	  state.tokens.push({
	    type: 'blockquote_open',
	    lines: lines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.parser.tokenize(state, startLine, nextLine);
	  state.tokens.push({
	    type: 'blockquote_close',
	    level: --state.level
	  });
	  state.parentType = oldParentType;
	  lines[1] = state.line;
	
	  // Restore original tShift; this might not be necessary since the parser
	  // has already been here, but just to make sure we can do that.
	  for (i = 0; i < oldTShift.length; i++) {
	    state.bMarks[i + startLine] = oldBMarks[i];
	    state.tShift[i + startLine] = oldTShift[i];
	  }
	  state.blkIndent = oldIndent;
	
	  return true;
	};


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// Horizontal rule
	
	'use strict';
	
	
	module.exports = function hr(state, startLine, endLine, silent) {
	  var marker, cnt, ch,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine];
	
	  pos += state.tShift[startLine];
	
	  if (pos > max) { return false; }
	
	  marker = state.src.charCodeAt(pos++);
	
	  // Check hr marker
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x5F/* _ */) {
	    return false;
	  }
	
	  // markers can be mixed with spaces, but there should be at least 3 one
	
	  cnt = 1;
	  while (pos < max) {
	    ch = state.src.charCodeAt(pos++);
	    if (ch !== marker && ch !== 0x20/* space */) { return false; }
	    if (ch === marker) { cnt++; }
	  }
	
	  if (cnt < 3) { return false; }
	
	  if (silent) { return true; }
	
	  state.line = startLine + 1;
	  state.tokens.push({
	    type: 'hr',
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  return true;
	};


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// Lists
	
	'use strict';
	
	
	// Search `[-+*][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipBulletListMarker(state, startLine) {
	  var marker, pos, max;
	
	  pos = state.bMarks[startLine] + state.tShift[startLine];
	  max = state.eMarks[startLine];
	
	  if (pos >= max) { return -1; }
	
	  marker = state.src.charCodeAt(pos++);
	  // Check bullet
	  if (marker !== 0x2A/* * */ &&
	      marker !== 0x2D/* - */ &&
	      marker !== 0x2B/* + */) {
	    return -1;
	  }
	
	  if (pos < max && state.src.charCodeAt(pos) !== 0x20) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	
	  return pos;
	}
	
	// Search `\d+[.)][\n ]`, returns next pos arter marker on success
	// or -1 on fail.
	function skipOrderedListMarker(state, startLine) {
	  var ch,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos + 1 >= max) { return -1; }
	
	  ch = state.src.charCodeAt(pos++);
	
	  if (ch < 0x30/* 0 */ || ch > 0x39/* 9 */) { return -1; }
	
	  for (;;) {
	    // EOL -> fail
	    if (pos >= max) { return -1; }
	
	    ch = state.src.charCodeAt(pos++);
	
	    if (ch >= 0x30/* 0 */ && ch <= 0x39/* 9 */) {
	      continue;
	    }
	
	    // found valid marker
	    if (ch === 0x29/* ) */ || ch === 0x2e/* . */) {
	      break;
	    }
	
	    return -1;
	  }
	
	
	  if (pos < max && state.src.charCodeAt(pos) !== 0x20/* space */) {
	    // " 1.test " - is not a list item
	    return -1;
	  }
	  return pos;
	}
	
	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;
	
	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}
	
	
	module.exports = function list(state, startLine, endLine, silent) {
	  var nextLine,
	      indent,
	      oldTShift,
	      oldIndent,
	      oldTight,
	      oldParentType,
	      start,
	      posAfterMarker,
	      max,
	      indentAfterMarker,
	      markerValue,
	      markerCharCode,
	      isOrdered,
	      contentStart,
	      listTokIdx,
	      prevEmptyEnd,
	      listLines,
	      itemLines,
	      tight = true,
	      terminatorRules,
	      i, l, terminate;
	
	  // Detect list type and position after marker
	  if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
	    isOrdered = true;
	  } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
	    isOrdered = false;
	  } else {
	    return false;
	  }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  // We should terminate list on style change. Remember first one to compare.
	  markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
	
	  // For validation mode we can terminate immediately
	  if (silent) { return true; }
	
	  // Start list
	  listTokIdx = state.tokens.length;
	
	  if (isOrdered) {
	    start = state.bMarks[startLine] + state.tShift[startLine];
	    markerValue = Number(state.src.substr(start, posAfterMarker - start - 1));
	
	    state.tokens.push({
	      type: 'ordered_list_open',
	      order: markerValue,
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });
	
	  } else {
	    state.tokens.push({
	      type: 'bullet_list_open',
	      lines: listLines = [ startLine, 0 ],
	      level: state.level++
	    });
	  }
	
	  //
	  // Iterate list items
	  //
	
	  nextLine = startLine;
	  prevEmptyEnd = false;
	  terminatorRules = state.parser.ruler.getRules('list');
	
	  while (nextLine < endLine) {
	    contentStart = state.skipSpaces(posAfterMarker);
	    max = state.eMarks[nextLine];
	
	    if (contentStart >= max) {
	      // trimming space in "-    \n  3" case, indent is 1 here
	      indentAfterMarker = 1;
	    } else {
	      indentAfterMarker = contentStart - posAfterMarker;
	    }
	
	    // If we have more than 4 spaces, the indent is 1
	    // (the rest is just indented code block)
	    if (indentAfterMarker > 4) { indentAfterMarker = 1; }
	
	    // If indent is less than 1, assume that it's one, example:
	    //  "-\n  test"
	    if (indentAfterMarker < 1) { indentAfterMarker = 1; }
	
	    // "  -  test"
	    //  ^^^^^ - calculating total length of this thing
	    indent = (posAfterMarker - state.bMarks[nextLine]) + indentAfterMarker;
	
	    // Run subparser & write tokens
	    state.tokens.push({
	      type: 'list_item_open',
	      lines: itemLines = [ startLine, 0 ],
	      level: state.level++
	    });
	
	    oldIndent = state.blkIndent;
	    oldTight = state.tight;
	    oldTShift = state.tShift[startLine];
	    oldParentType = state.parentType;
	    state.tShift[startLine] = contentStart - state.bMarks[startLine];
	    state.blkIndent = indent;
	    state.tight = true;
	    state.parentType = 'list';
	
	    state.parser.tokenize(state, startLine, endLine, true);
	
	    // If any of list item is tight, mark list as tight
	    if (!state.tight || prevEmptyEnd) {
	      tight = false;
	    }
	    // Item become loose if finish with empty line,
	    // but we should filter last element, because it means list finish
	    prevEmptyEnd = (state.line - startLine) > 1 && state.isEmpty(state.line - 1);
	
	    state.blkIndent = oldIndent;
	    state.tShift[startLine] = oldTShift;
	    state.tight = oldTight;
	    state.parentType = oldParentType;
	
	    state.tokens.push({
	      type: 'list_item_close',
	      level: --state.level
	    });
	
	    nextLine = startLine = state.line;
	    itemLines[1] = nextLine;
	    contentStart = state.bMarks[startLine];
	
	    if (nextLine >= endLine) { break; }
	
	    if (state.isEmpty(nextLine)) {
	      break;
	    }
	
	    //
	    // Try to check if list is terminated or continued.
	    //
	    if (state.tShift[nextLine] < state.blkIndent) { break; }
	
	    // fail if terminating block found
	    terminate = false;
	    for (i = 0, l = terminatorRules.length; i < l; i++) {
	      if (terminatorRules[i](state, nextLine, endLine, true)) {
	        terminate = true;
	        break;
	      }
	    }
	    if (terminate) { break; }
	
	    // fail if list has another type
	    if (isOrdered) {
	      posAfterMarker = skipOrderedListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    } else {
	      posAfterMarker = skipBulletListMarker(state, nextLine);
	      if (posAfterMarker < 0) { break; }
	    }
	
	    if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) { break; }
	  }
	
	  // Finilize list
	  state.tokens.push({
	    type: isOrdered ? 'ordered_list_close' : 'bullet_list_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;
	
	  state.line = nextLine;
	
	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }
	
	  return true;
	};


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// Process footnote reference list
	
	'use strict';
	
	
	module.exports = function footnote(state, startLine, endLine, silent) {
	  var oldBMark, oldTShift, oldParentType, pos, label,
	      start = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  // line should be at least 5 chars - "[^x]:"
	  if (start + 4 > max) { return false; }
	
	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }
	
	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos + 1 >= max || state.src.charCodeAt(++pos) !== 0x3A /* : */) { return false; }
	  if (silent) { return true; }
	  pos++;
	
	  if (!state.env.footnotes) { state.env.footnotes = {}; }
	  if (!state.env.footnotes.refs) { state.env.footnotes.refs = {}; }
	  label = state.src.slice(start + 2, pos - 2);
	  state.env.footnotes.refs[':' + label] = -1;
	
	  state.tokens.push({
	    type: 'footnote_reference_open',
	    label: label,
	    level: state.level++
	  });
	
	  oldBMark = state.bMarks[startLine];
	  oldTShift = state.tShift[startLine];
	  oldParentType = state.parentType;
	  state.tShift[startLine] = state.skipSpaces(pos) - pos;
	  state.bMarks[startLine] = pos;
	  state.blkIndent += 4;
	  state.parentType = 'footnote';
	
	  if (state.tShift[startLine] < state.blkIndent) {
	    state.tShift[startLine] += state.blkIndent;
	    state.bMarks[startLine] -= state.blkIndent;
	  }
	
	  state.parser.tokenize(state, startLine, endLine, true);
	
	  state.parentType = oldParentType;
	  state.blkIndent -= 4;
	  state.tShift[startLine] = oldTShift;
	  state.bMarks[startLine] = oldBMark;
	
	  state.tokens.push({
	    type: 'footnote_reference_close',
	    level: --state.level
	  });
	
	  return true;
	};


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// heading (#, ##, ...)
	
	'use strict';
	
	
	module.exports = function heading(state, startLine, endLine, silent) {
	  var ch, level, tmp,
	      pos = state.bMarks[startLine] + state.tShift[startLine],
	      max = state.eMarks[startLine];
	
	  if (pos >= max) { return false; }
	
	  ch  = state.src.charCodeAt(pos);
	
	  if (ch !== 0x23/* # */ || pos >= max) { return false; }
	
	  // count heading level
	  level = 1;
	  ch = state.src.charCodeAt(++pos);
	  while (ch === 0x23/* # */ && pos < max && level <= 6) {
	    level++;
	    ch = state.src.charCodeAt(++pos);
	  }
	
	  if (level > 6 || (pos < max && ch !== 0x20/* space */)) { return false; }
	
	  if (silent) { return true; }
	
	  // Let's cut tails like '    ###  ' from the end of string
	
	  max = state.skipCharsBack(max, 0x20, pos); // space
	  tmp = state.skipCharsBack(max, 0x23, pos); // #
	  if (tmp > pos && state.src.charCodeAt(tmp - 1) === 0x20/* space */) {
	    max = tmp;
	  }
	
	  state.line = startLine + 1;
	
	  state.tokens.push({ type: 'heading_open',
	    hLevel: level,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	
	  // only if header is not empty
	  if (pos < max) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.slice(pos, max).trim(),
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	  }
	  state.tokens.push({ type: 'heading_close', hLevel: level, level: state.level });
	
	  return true;
	};


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// lheading (---, ===)
	
	'use strict';
	
	
	module.exports = function lheading(state, startLine, endLine/*, silent*/) {
	  var marker, pos, max,
	      next = startLine + 1;
	
	  if (next >= endLine) { return false; }
	  if (state.tShift[next] < state.blkIndent) { return false; }
	
	  // Scan next line
	
	  if (state.tShift[next] - state.blkIndent > 3) { return false; }
	
	  pos = state.bMarks[next] + state.tShift[next];
	  max = state.eMarks[next];
	
	  if (pos >= max) { return false; }
	
	  marker = state.src.charCodeAt(pos);
	
	  if (marker !== 0x2D/* - */ && marker !== 0x3D/* = */) { return false; }
	
	  pos = state.skipChars(pos, marker);
	
	  pos = state.skipSpaces(pos);
	
	  if (pos < max) { return false; }
	
	  pos = state.bMarks[startLine] + state.tShift[startLine];
	
	  state.line = next + 1;
	  state.tokens.push({
	    type: 'heading_open',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    lines: [ startLine, state.line ],
	    level: state.level
	  });
	  state.tokens.push({
	    type: 'inline',
	    content: state.src.slice(pos, state.eMarks[startLine]).trim(),
	    level: state.level + 1,
	    lines: [ startLine, state.line - 1 ],
	    children: []
	  });
	  state.tokens.push({
	    type: 'heading_close',
	    hLevel: marker === 0x3D/* = */ ? 1 : 2,
	    level: state.level
	  });
	
	  return true;
	};


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// HTML block
	
	'use strict';
	
	
	var block_names = __webpack_require__(280);
	
	
	var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
	var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
	
	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}
	
	module.exports = function htmlblock(state, startLine, endLine, silent) {
	  var ch, match, nextLine,
	      pos = state.bMarks[startLine],
	      max = state.eMarks[startLine],
	      shift = state.tShift[startLine];
	
	  pos += shift;
	
	  if (!state.options.html) { return false; }
	
	  if (shift > 3 || pos + 2 >= max) { return false; }
	
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }
	
	  ch = state.src.charCodeAt(pos + 1);
	
	  if (ch === 0x21/* ! */ || ch === 0x3F/* ? */) {
	    // Directive start / comment start / processing instruction start
	    if (silent) { return true; }
	
	  } else if (ch === 0x2F/* / */ || isLetter(ch)) {
	
	    // Probably start or end of tag
	    if (ch === 0x2F/* \ */) {
	      // closing tag
	      match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
	      if (!match) { return false; }
	    } else {
	      // opening tag
	      match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
	      if (!match) { return false; }
	    }
	    // Make sure tag name is valid
	    if (block_names[match[1].toLowerCase()] !== true) { return false; }
	    if (silent) { return true; }
	
	  } else {
	    return false;
	  }
	
	  // If we are here - we detected HTML block.
	  // Let's roll down till empty line (block end).
	  nextLine = startLine + 1;
	  while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
	    nextLine++;
	  }
	
	  state.line = nextLine;
	  state.tokens.push({
	    type: 'htmlblock',
	    level: state.level,
	    lines: [ startLine, state.line ],
	    content: state.getLines(startLine, nextLine, 0, true)
	  });
	
	  return true;
	};


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// GFM table, non-standard
	
	'use strict';
	
	
	function getLine(state, line) {
	  var pos = state.bMarks[line] + state.blkIndent,
	      max = state.eMarks[line];
	
	  return state.src.substr(pos, max - pos);
	}
	
	
	module.exports = function table(state, startLine, endLine, silent) {
	  var ch, lineText, pos, i, nextLine, rows,
	      aligns, t, tableLines, tbodyLines;
	
	  // should have at least three lines
	  if (startLine + 2 > endLine) { return false; }
	
	  nextLine = startLine + 1;
	
	  if (state.tShift[nextLine] < state.blkIndent) { return false; }
	
	  // first character of the second line should be '|' or '-'
	
	  pos = state.bMarks[nextLine] + state.tShift[nextLine];
	  if (pos >= state.eMarks[nextLine]) { return false; }
	
	  ch = state.src.charCodeAt(pos);
	  if (ch !== 0x7C/* | */ && ch !== 0x2D/* - */ && ch !== 0x3A/* : */) { return false; }
	
	  lineText = getLine(state, startLine + 1);
	  if (!/^[-:| ]+$/.test(lineText)) { return false; }
	
	  rows = lineText.split('|');
	  if (rows <= 2) { return false; }
	  aligns = [];
	  for (i = 0; i < rows.length; i++) {
	    t = rows[i].trim();
	    if (!t) {
	      // allow empty columns before and after table, but not in between columns;
	      // e.g. allow ` |---| `, disallow ` ---||--- `
	      if (i === 0 || i === rows.length - 1) {
	        continue;
	      } else {
	        return false;
	      }
	    }
	
	    if (!/^:?-+:?$/.test(t)) { return false; }
	    if (t.charCodeAt(t.length - 1) === 0x3A/* : */) {
	      aligns.push(t.charCodeAt(0) === 0x3A/* : */ ? 'center' : 'right');
	    } else if (t.charCodeAt(0) === 0x3A/* : */) {
	      aligns.push('left');
	    } else {
	      aligns.push('');
	    }
	  }
	
	  lineText = getLine(state, startLine).trim();
	  if (lineText.indexOf('|') === -1) { return false; }
	  rows = lineText.replace(/^\||\|$/g, '').split('|');
	  if (aligns.length !== rows.length) { return false; }
	  if (silent) { return true; }
	
	  state.tokens.push({
	    type: 'table_open',
	    lines: tableLines = [ startLine, 0 ],
	    level: state.level++
	  });
	  state.tokens.push({
	    type: 'thead_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });
	
	  state.tokens.push({
	    type: 'tr_open',
	    lines: [ startLine, startLine + 1 ],
	    level: state.level++
	  });
	  for (i = 0; i < rows.length; i++) {
	    state.tokens.push({
	      type: 'th_open',
	      align: aligns[i],
	      lines: [ startLine, startLine + 1 ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: rows[i].trim(),
	      lines: [ startLine, startLine + 1 ],
	      level: state.level,
	      children: []
	    });
	    state.tokens.push({ type: 'th_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tr_close', level: --state.level });
	  state.tokens.push({ type: 'thead_close', level: --state.level });
	
	  state.tokens.push({
	    type: 'tbody_open',
	    lines: tbodyLines = [ startLine + 2, 0 ],
	    level: state.level++
	  });
	
	  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
	    if (state.tShift[nextLine] < state.blkIndent) { break; }
	
	    lineText = getLine(state, nextLine).trim();
	    if (lineText.indexOf('|') === -1) { break; }
	    rows = lineText.replace(/^\||\|$/g, '').split('|');
	
	    state.tokens.push({ type: 'tr_open', level: state.level++ });
	    for (i = 0; i < rows.length; i++) {
	      state.tokens.push({ type: 'td_open', align: aligns[i], level: state.level++ });
	      state.tokens.push({
	        type: 'inline',
	        content: rows[i].replace(/^\|? *| *\|?$/g, ''),
	        level: state.level,
	        children: []
	      });
	      state.tokens.push({ type: 'td_close', level: --state.level });
	    }
	    state.tokens.push({ type: 'tr_close', level: --state.level });
	  }
	  state.tokens.push({ type: 'tbody_close', level: --state.level });
	  state.tokens.push({ type: 'table_close', level: --state.level });
	
	  tableLines[1] = tbodyLines[1] = nextLine;
	  state.line = nextLine;
	  return true;
	};


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// Definition lists
	
	'use strict';
	
	
	// Search `[:~][\n ]`, returns next pos after marker on success
	// or -1 on fail.
	function skipMarker(state, line) {
	  var pos, marker,
	      start = state.bMarks[line] + state.tShift[line],
	      max = state.eMarks[line];
	
	  if (start >= max) { return -1; }
	
	  // Check bullet
	  marker = state.src.charCodeAt(start++);
	  if (marker !== 0x7E/* ~ */ && marker !== 0x3A/* : */) { return -1; }
	
	  pos = state.skipSpaces(start);
	
	  // require space after ":"
	  if (start === pos) { return -1; }
	
	  // no empty definitions, e.g. "  : "
	  if (pos >= max) { return -1; }
	
	  return pos;
	}
	
	function markTightParagraphs(state, idx) {
	  var i, l,
	      level = state.level + 2;
	
	  for (i = idx + 2, l = state.tokens.length - 2; i < l; i++) {
	    if (state.tokens[i].level === level && state.tokens[i].type === 'paragraph_open') {
	      state.tokens[i + 2].tight = true;
	      state.tokens[i].tight = true;
	      i += 2;
	    }
	  }
	}
	
	module.exports = function deflist(state, startLine, endLine, silent) {
	  var contentStart,
	      ddLine,
	      dtLine,
	      itemLines,
	      listLines,
	      listTokIdx,
	      nextLine,
	      oldIndent,
	      oldDDIndent,
	      oldParentType,
	      oldTShift,
	      oldTight,
	      prevEmptyEnd,
	      tight;
	
	  if (silent) {
	    // quirk: validation mode validates a dd block only, not a whole deflist
	    if (state.ddIndent < 0) { return false; }
	    return skipMarker(state, startLine) >= 0;
	  }
	
	  nextLine = startLine + 1;
	  if (state.isEmpty(nextLine)) {
	    if (++nextLine > endLine) { return false; }
	  }
	
	  if (state.tShift[nextLine] < state.blkIndent) { return false; }
	  contentStart = skipMarker(state, nextLine);
	  if (contentStart < 0) { return false; }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  // Start list
	  listTokIdx = state.tokens.length;
	
	  state.tokens.push({
	    type: 'dl_open',
	    lines: listLines = [ startLine, 0 ],
	    level: state.level++
	  });
	
	  //
	  // Iterate list items
	  //
	
	  dtLine = startLine;
	  ddLine = nextLine;
	
	  // One definition list can contain multiple DTs,
	  // and one DT can be followed by multiple DDs.
	  //
	  // Thus, there is two loops here, and label is
	  // needed to break out of the second one
	  //
	  /*eslint no-labels:0,block-scoped-var:0*/
	  OUTER:
	  for (;;) {
	    tight = true;
	    prevEmptyEnd = false;
	
	    state.tokens.push({
	      type: 'dt_open',
	      lines: [ dtLine, dtLine ],
	      level: state.level++
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: state.getLines(dtLine, dtLine + 1, state.blkIndent, false).trim(),
	      level: state.level + 1,
	      lines: [ dtLine, dtLine ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'dt_close',
	      level: --state.level
	    });
	
	    for (;;) {
	      state.tokens.push({
	        type: 'dd_open',
	        lines: itemLines = [ nextLine, 0 ],
	        level: state.level++
	      });
	
	      oldTight = state.tight;
	      oldDDIndent = state.ddIndent;
	      oldIndent = state.blkIndent;
	      oldTShift = state.tShift[ddLine];
	      oldParentType = state.parentType;
	      state.blkIndent = state.ddIndent = state.tShift[ddLine] + 2;
	      state.tShift[ddLine] = contentStart - state.bMarks[ddLine];
	      state.tight = true;
	      state.parentType = 'deflist';
	
	      state.parser.tokenize(state, ddLine, endLine, true);
	
	      // If any of list item is tight, mark list as tight
	      if (!state.tight || prevEmptyEnd) {
	        tight = false;
	      }
	      // Item become loose if finish with empty line,
	      // but we should filter last element, because it means list finish
	      prevEmptyEnd = (state.line - ddLine) > 1 && state.isEmpty(state.line - 1);
	
	      state.tShift[ddLine] = oldTShift;
	      state.tight = oldTight;
	      state.parentType = oldParentType;
	      state.blkIndent = oldIndent;
	      state.ddIndent = oldDDIndent;
	
	      state.tokens.push({
	        type: 'dd_close',
	        level: --state.level
	      });
	
	      itemLines[1] = nextLine = state.line;
	
	      if (nextLine >= endLine) { break OUTER; }
	
	      if (state.tShift[nextLine] < state.blkIndent) { break OUTER; }
	      contentStart = skipMarker(state, nextLine);
	      if (contentStart < 0) { break; }
	
	      ddLine = nextLine;
	
	      // go to the next loop iteration:
	      // insert DD tag and repeat checking
	    }
	
	    if (nextLine >= endLine) { break; }
	    dtLine = nextLine;
	
	    if (state.isEmpty(dtLine)) { break; }
	    if (state.tShift[dtLine] < state.blkIndent) { break; }
	
	    ddLine = dtLine + 1;
	    if (ddLine >= endLine) { break; }
	    if (state.isEmpty(ddLine)) { ddLine++; }
	    if (ddLine >= endLine) { break; }
	
	    if (state.tShift[ddLine] < state.blkIndent) { break; }
	    contentStart = skipMarker(state, ddLine);
	    if (contentStart < 0) { break; }
	
	    // go to the next loop iteration:
	    // insert DT and DD tags and repeat checking
	  }
	
	  // Finilize list
	  state.tokens.push({
	    type: 'dl_close',
	    level: --state.level
	  });
	  listLines[1] = nextLine;
	
	  state.line = nextLine;
	
	  // mark paragraphs tight if needed
	  if (tight) {
	    markTightParagraphs(state, listTokIdx);
	  }
	
	  return true;
	};


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// Paragraph
	
	'use strict';
	
	
	module.exports = function paragraph(state, startLine/*, endLine*/) {
	  var endLine, content, terminate, i, l,
	      nextLine = startLine + 1,
	      terminatorRules;
	
	  endLine = state.lineMax;
	
	  // jump line-by-line until empty one or EOF
	  if (nextLine < endLine && !state.isEmpty(nextLine)) {
	    terminatorRules = state.parser.ruler.getRules('paragraph');
	
	    for (; nextLine < endLine && !state.isEmpty(nextLine); nextLine++) {
	      // this would be a code block normally, but after paragraph
	      // it's considered a lazy continuation regardless of what's there
	      if (state.tShift[nextLine] - state.blkIndent > 3) { continue; }
	
	      // Some tags can terminate paragraph without empty line.
	      terminate = false;
	      for (i = 0, l = terminatorRules.length; i < l; i++) {
	        if (terminatorRules[i](state, nextLine, endLine, true)) {
	          terminate = true;
	          break;
	        }
	      }
	      if (terminate) { break; }
	    }
	  }
	
	  content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
	
	  state.line = nextLine;
	  if (content.length) {
	    state.tokens.push({
	      type: 'paragraph_open',
	      tight: false,
	      lines: [ startLine, state.line ],
	      level: state.level
	    });
	    state.tokens.push({
	      type: 'inline',
	      content: content,
	      level: state.level + 1,
	      lines: [ startLine, state.line ],
	      children: []
	    });
	    state.tokens.push({
	      type: 'paragraph_close',
	      tight: false,
	      level: state.level
	    });
	  }
	
	  return true;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function block(state) {
	
	  if (state.inlineMode) {
	    state.tokens.push({
	      type: 'inline',
	      content: state.src.replace(/\n/g, ' ').trim(),
	      level: 0,
	      lines: [ 0, 1 ],
	      children: []
	    });
	
	  } else {
	    state.block.parse(state.src, state.options, state.env, state.tokens);
	  }
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// Parse abbreviation definitions, i.e. `*[abbr]: description`
	//
	
	'use strict';
	
	
	var StateInline    = __webpack_require__(260);
	var parseLinkLabel = __webpack_require__(281);
	
	
	function parseAbbr(str, parserInline, options, env) {
	  var state, labelEnd, pos, max, label, title;
	
	  if (str.charCodeAt(0) !== 0x2A/* * */) { return -1; }
	  if (str.charCodeAt(1) !== 0x5B/* [ */) { return -1; }
	
	  if (str.indexOf(']:') === -1) { return -1; }
	
	  state = new StateInline(str, parserInline, options, env, []);
	  labelEnd = parseLinkLabel(state, 1);
	
	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }
	
	  max = state.posMax;
	
	  // abbr title is always one line, so looking for ending "\n" here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x0A) { break; }
	  }
	
	  label = str.slice(2, labelEnd);
	  title = str.slice(labelEnd + 2, pos).trim();
	  if (title.length === 0) { return -1; }
	  if (!env.abbreviations) { env.abbreviations = {}; }
	  // prepend ':' to avoid conflict with Object.prototype members
	  if (typeof env.abbreviations[':' + label] === 'undefined') {
	    env.abbreviations[':' + label] = title;
	  }
	
	  return pos;
	}
	
	module.exports = function abbr(state) {
	  var tokens = state.tokens, i, l, content, pos;
	
	  if (state.inlineMode) {
	    return;
	  }
	
	  // Parse inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i].type === 'inline' &&
	        tokens[i + 1].type === 'paragraph_close') {
	
	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseAbbr(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }
	
	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var StateInline          = __webpack_require__(260);
	var parseLinkLabel       = __webpack_require__(281);
	var parseLinkDestination = __webpack_require__(282);
	var parseLinkTitle       = __webpack_require__(283);
	var normalizeReference   = __webpack_require__(284);
	
	
	function parseReference(str, parser, options, env) {
	  var state, labelEnd, pos, max, code, start, href, title, label;
	
	  if (str.charCodeAt(0) !== 0x5B/* [ */) { return -1; }
	
	  if (str.indexOf(']:') === -1) { return -1; }
	
	  state = new StateInline(str, parser, options, env, []);
	  labelEnd = parseLinkLabel(state, 0);
	
	  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 0x3A/* : */) { return -1; }
	
	  max = state.posMax;
	
	  // [label]:   destination   'title'
	  //         ^^^ skip optional whitespace here
	  for (pos = labelEnd + 2; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }
	
	  // [label]:   destination   'title'
	  //            ^^^^^^^^^^^ parse this
	  if (!parseLinkDestination(state, pos)) { return -1; }
	  href = state.linkContent;
	  pos = state.pos;
	
	  // [label]:   destination   'title'
	  //                       ^^^ skipping those spaces
	  start = pos;
	  for (pos = pos + 1; pos < max; pos++) {
	    code = state.src.charCodeAt(pos);
	    if (code !== 0x20 && code !== 0x0A) { break; }
	  }
	
	  // [label]:   destination   'title'
	  //                          ^^^^^^^ parse this
	  if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	    title = state.linkContent;
	    pos = state.pos;
	  } else {
	    title = '';
	    pos = start;
	  }
	
	  // ensure that the end of the line is empty
	  while (pos < max && state.src.charCodeAt(pos) === 0x20/* space */) { pos++; }
	  if (pos < max && state.src.charCodeAt(pos) !== 0x0A) { return -1; }
	
	  label = normalizeReference(str.slice(1, labelEnd));
	  if (typeof env.references[label] === 'undefined') {
	    env.references[label] = { title: title, href: href };
	  }
	
	  return pos;
	}
	
	
	module.exports = function references(state) {
	  var tokens = state.tokens, i, l, content, pos;
	
	  state.env.references = state.env.references || {};
	
	  if (state.inlineMode) {
	    return;
	  }
	
	  // Scan definitions in paragraph inlines
	  for (i = 1, l = tokens.length - 1; i < l; i++) {
	    if (tokens[i].type === 'inline' &&
	        tokens[i - 1].type === 'paragraph_open' &&
	        tokens[i + 1].type === 'paragraph_close') {
	
	      content = tokens[i].content;
	      while (content.length) {
	        pos = parseReference(content, state.inline, state.options, state.env);
	        if (pos < 0) { break; }
	        content = content.slice(pos).trim();
	      }
	
	      tokens[i].content = content;
	      if (!content.length) {
	        tokens[i - 1].tight = true;
	        tokens[i + 1].tight = true;
	      }
	    }
	  }
	};


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function inline(state) {
	  var tokens = state.tokens, tok, i, l;
	
	  // Parse inlines
	  for (i = 0, l = tokens.length; i < l; i++) {
	    tok = tokens[i];
	    if (tok.type === 'inline') {
	      state.inline.parse(tok.content, state.options, state.env, tok.children);
	    }
	  }
	};


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	module.exports = function footnote_block(state) {
	  var i, l, j, t, lastParagraph, list, tokens, current, currentLabel,
	      level = 0,
	      insideRef = false,
	      refTokens = {};
	
	  if (!state.env.footnotes) { return; }
	
	  state.tokens = state.tokens.filter(function(tok) {
	    if (tok.type === 'footnote_reference_open') {
	      insideRef = true;
	      current = [];
	      currentLabel = tok.label;
	      return false;
	    }
	    if (tok.type === 'footnote_reference_close') {
	      insideRef = false;
	      // prepend ':' to avoid conflict with Object.prototype members
	      refTokens[':' + currentLabel] = current;
	      return false;
	    }
	    if (insideRef) { current.push(tok); }
	    return !insideRef;
	  });
	
	  if (!state.env.footnotes.list) { return; }
	  list = state.env.footnotes.list;
	
	  state.tokens.push({
	    type: 'footnote_block_open',
	    level: level++
	  });
	  for (i = 0, l = list.length; i < l; i++) {
	    state.tokens.push({
	      type: 'footnote_open',
	      id: i,
	      level: level++
	    });
	
	    if (list[i].tokens) {
	      tokens = [];
	      tokens.push({
	        type: 'paragraph_open',
	        tight: false,
	        level: level++
	      });
	      tokens.push({
	        type: 'inline',
	        content: '',
	        level: level,
	        children: list[i].tokens
	      });
	      tokens.push({
	        type: 'paragraph_close',
	        tight: false,
	        level: --level
	      });
	    } else if (list[i].label) {
	      tokens = refTokens[':' + list[i].label];
	    }
	
	    state.tokens = state.tokens.concat(tokens);
	    if (state.tokens[state.tokens.length - 1].type === 'paragraph_close') {
	      lastParagraph = state.tokens.pop();
	    } else {
	      lastParagraph = null;
	    }
	
	    t = list[i].count > 0 ? list[i].count : 1;
	    for (j = 0; j < t; j++) {
	      state.tokens.push({
	        type: 'footnote_anchor',
	        id: i,
	        subId: j,
	        level: level
	      });
	    }
	
	    if (lastParagraph) {
	      state.tokens.push(lastParagraph);
	    }
	
	    state.tokens.push({
	      type: 'footnote_close',
	      level: --level
	    });
	  }
	  state.tokens.push({
	    type: 'footnote_block_close',
	    level: --level
	  });
	};


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// Enclose abbreviations in <abbr> tags
	//
	'use strict';
	
	
	var PUNCT_CHARS = ' \n()[]\'".,!?-';
	
	
	// from Google closure library
	// http://closure-library.googlecode.com/git-history/docs/local_closure_goog_string_string.js.source.html#line1021
	function regEscape(s) {
	  return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1');
	}
	
	
	module.exports = function abbr2(state) {
	  var i, j, l, tokens, token, text, nodes, pos, level, reg, m, regText,
	      blockTokens = state.tokens;
	
	  if (!state.env.abbreviations) { return; }
	  if (!state.env.abbrRegExp) {
	    regText = '(^|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])'
	            + '(' + Object.keys(state.env.abbreviations).map(function (x) {
	                      return x.substr(1);
	                    }).sort(function (a, b) {
	                      return b.length - a.length;
	                    }).map(regEscape).join('|') + ')'
	            + '($|[' + PUNCT_CHARS.split('').map(regEscape).join('') + '])';
	    state.env.abbrRegExp = new RegExp(regText, 'g');
	  }
	  reg = state.env.abbrRegExp;
	
	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;
	
	    // We scan from the end, to keep position when new tags added.
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	      if (token.type !== 'text') { continue; }
	
	      pos = 0;
	      text = token.content;
	      reg.lastIndex = 0;
	      level = token.level;
	      nodes = [];
	
	      while ((m = reg.exec(text))) {
	        if (reg.lastIndex > pos) {
	          nodes.push({
	            type: 'text',
	            content: text.slice(pos, m.index + m[1].length),
	            level: level
	          });
	        }
	
	        nodes.push({
	          type: 'abbr_open',
	          title: state.env.abbreviations[':' + m[2]],
	          level: level++
	        });
	        nodes.push({
	          type: 'text',
	          content: m[2],
	          level: level
	        });
	        nodes.push({
	          type: 'abbr_close',
	          level: --level
	        });
	        pos = reg.lastIndex - m[3].length;
	      }
	
	      if (!nodes.length) { continue; }
	
	      if (pos < text.length) {
	        nodes.push({
	          type: 'text',
	          content: text.slice(pos),
	          level: level
	        });
	      }
	
	      // replace current node
	      blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	    }
	  }
	};


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// Simple typographical replacements
	//
	'use strict';
	
	// TODO:
	// - fractionals 1/2, 1/4, 3/4 -> ½, ¼, ¾
	// - miltiplication 2 x 4 -> 2 × 4
	
	var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
	
	var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
	var SCOPED_ABBR = {
	  'c': '©',
	  'r': '®',
	  'p': '§',
	  'tm': '™'
	};
	
	function replaceScopedAbbr(str) {
	  if (str.indexOf('(') < 0) { return str; }
	
	  return str.replace(SCOPED_ABBR_RE, function(match, name) {
	    return SCOPED_ABBR[name.toLowerCase()];
	  });
	}
	
	
	module.exports = function replace(state) {
	  var i, token, text, inlineTokens, blkIdx;
	
	  if (!state.options.typographer) { return; }
	
	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
	
	    if (state.tokens[blkIdx].type !== 'inline') { continue; }
	
	    inlineTokens = state.tokens[blkIdx].children;
	
	    for (i = inlineTokens.length - 1; i >= 0; i--) {
	      token = inlineTokens[i];
	      if (token.type === 'text') {
	        text = token.content;
	
	        text = replaceScopedAbbr(text);
	
	        if (RARE_RE.test(text)) {
	          text = text
	            .replace(/\+-/g, '±')
	            // .., ..., ....... -> …
	            // but ?..... & !..... -> ?.. & !..
	            .replace(/\.{2,}/g, '…').replace(/([?!])…/g, '$1..')
	            .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
	            // em-dash
	            .replace(/(^|[^-])---([^-]|$)/mg, '$1\u2014$2')
	            // en-dash
	            .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2')
	            .replace(/(^|[^-\s])--([^-\s]|$)/mg, '$1\u2013$2');
	        }
	
	        token.content = text;
	      }
	    }
	  }
	};


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// Convert straight quotation marks to typographic ones
	//
	'use strict';
	
	
	var QUOTE_TEST_RE = /['"]/;
	var QUOTE_RE = /['"]/g;
	var PUNCT_RE = /[-\s()\[\]]/;
	var APOSTROPHE = '’';
	
	// This function returns true if the character at `pos`
	// could be inside a word.
	function isLetter(str, pos) {
	  if (pos < 0 || pos >= str.length) { return false; }
	  return !PUNCT_RE.test(str[pos]);
	}
	
	
	function replaceAt(str, index, ch) {
	  return str.substr(0, index) + ch + str.substr(index + 1);
	}
	
	
	module.exports = function smartquotes(state) {
	  /*eslint max-depth:0*/
	  var i, token, text, t, pos, max, thisLevel, lastSpace, nextSpace, item,
	      canOpen, canClose, j, isSingle, blkIdx, tokens,
	      stack;
	
	  if (!state.options.typographer) { return; }
	
	  stack = [];
	
	  for (blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--) {
	
	    if (state.tokens[blkIdx].type !== 'inline') { continue; }
	
	    tokens = state.tokens[blkIdx].children;
	    stack.length = 0;
	
	    for (i = 0; i < tokens.length; i++) {
	      token = tokens[i];
	
	      if (token.type !== 'text' || QUOTE_TEST_RE.test(token.text)) { continue; }
	
	      thisLevel = tokens[i].level;
	
	      for (j = stack.length - 1; j >= 0; j--) {
	        if (stack[j].level <= thisLevel) { break; }
	      }
	      stack.length = j + 1;
	
	      text = token.content;
	      pos = 0;
	      max = text.length;
	
	      /*eslint no-labels:0,block-scoped-var:0*/
	      OUTER:
	      while (pos < max) {
	        QUOTE_RE.lastIndex = pos;
	        t = QUOTE_RE.exec(text);
	        if (!t) { break; }
	
	        lastSpace = !isLetter(text, t.index - 1);
	        pos = t.index + 1;
	        isSingle = (t[0] === "'");
	        nextSpace = !isLetter(text, pos);
	
	        if (!nextSpace && !lastSpace) {
	          // middle of word
	          if (isSingle) {
	            token.content = replaceAt(token.content, t.index, APOSTROPHE);
	          }
	          continue;
	        }
	
	        canOpen = !nextSpace;
	        canClose = !lastSpace;
	
	        if (canClose) {
	          // this could be a closing quote, rewind the stack to get a match
	          for (j = stack.length - 1; j >= 0; j--) {
	            item = stack[j];
	            if (stack[j].level < thisLevel) { break; }
	            if (item.single === isSingle && stack[j].level === thisLevel) {
	              item = stack[j];
	              if (isSingle) {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[2]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[3]);
	              } else {
	                tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state.options.quotes[0]);
	                token.content = replaceAt(token.content, t.index, state.options.quotes[1]);
	              }
	              stack.length = j;
	              continue OUTER;
	            }
	          }
	        }
	
	        if (canOpen) {
	          stack.push({
	            token: i,
	            pos: t.index,
	            single: isSingle,
	            level: thisLevel
	          });
	        } else if (canClose && isSingle) {
	          token.content = replaceAt(token.content, t.index, APOSTROPHE);
	        }
	      }
	    }
	  }
	};


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// Replace link-like texts with link nodes.
	//
	// Currently restricted by `inline.validateLink()` to http/https/ftp
	//
	'use strict';
	
	
	var Autolinker = __webpack_require__(288);
	
	
	var LINK_SCAN_RE = /www|@|\:\/\//;
	
	
	function isLinkOpen(str) {
	  return /^<a[>\s]/i.test(str);
	}
	function isLinkClose(str) {
	  return /^<\/a\s*>/i.test(str);
	}
	
	// Stupid fabric to avoid singletons, for thread safety.
	// Required for engines like Nashorn.
	//
	function createLinkifier() {
	  var links = [];
	  var autolinker = new Autolinker({
	    stripPrefix: false,
	    url: true,
	    email: true,
	    twitter: false,
	    replaceFn: function (autolinker, match) {
	      // Only collect matched strings but don't change anything.
	      switch (match.getType()) {
	        /*eslint default-case:0*/
	        case 'url':
	          links.push({
	            text: match.matchedText,
	            url: match.getUrl()
	          });
	          break;
	        case 'email':
	          links.push({
	            text: match.matchedText,
	            // normalize email protocol
	            url: 'mailto:' + match.getEmail().replace(/^mailto:/i, '')
	          });
	          break;
	      }
	      return false;
	    }
	  });
	
	  return {
	    links: links,
	    autolinker: autolinker
	  };
	}
	
	
	module.exports = function linkify(state) {
	  var i, j, l, tokens, token, text, nodes, ln, pos, level, htmlLinkLevel,
	      blockTokens = state.tokens,
	      linkifier = null, links, autolinker;
	
	  if (!state.options.linkify) { return; }
	
	  for (j = 0, l = blockTokens.length; j < l; j++) {
	    if (blockTokens[j].type !== 'inline') { continue; }
	    tokens = blockTokens[j].children;
	
	    htmlLinkLevel = 0;
	
	    // We scan from the end, to keep position when new tags added.
	    // Use reversed logic in links start/end match
	    for (i = tokens.length - 1; i >= 0; i--) {
	      token = tokens[i];
	
	      // Skip content of markdown links
	      if (token.type === 'link_close') {
	        i--;
	        while (tokens[i].level !== token.level && tokens[i].type !== 'link_open') {
	          i--;
	        }
	        continue;
	      }
	
	      // Skip content of html tag links
	      if (token.type === 'htmltag') {
	        if (isLinkOpen(token.content) && htmlLinkLevel > 0) {
	          htmlLinkLevel--;
	        }
	        if (isLinkClose(token.content)) {
	          htmlLinkLevel++;
	        }
	      }
	      if (htmlLinkLevel > 0) { continue; }
	
	      if (token.type === 'text' && LINK_SCAN_RE.test(token.content)) {
	
	        // Init linkifier in lazy manner, only if required.
	        if (!linkifier) {
	          linkifier = createLinkifier();
	          links = linkifier.links;
	          autolinker = linkifier.autolinker;
	        }
	
	        text = token.content;
	        links.length = 0;
	        autolinker.link(text);
	
	        if (!links.length) { continue; }
	
	        // Now split string to nodes
	        nodes = [];
	        level = token.level;
	
	        for (ln = 0; ln < links.length; ln++) {
	
	          if (!state.inline.validateLink(links[ln].url)) { continue; }
	
	          pos = text.indexOf(links[ln].text);
	
	          if (pos) {
	            level = level;
	            nodes.push({
	              type: 'text',
	              content: text.slice(0, pos),
	              level: level
	            });
	          }
	          nodes.push({
	            type: 'link_open',
	            href: links[ln].url,
	            title: '',
	            level: level++
	          });
	          nodes.push({
	            type: 'text',
	            content: links[ln].text,
	            level: level
	          });
	          nodes.push({
	            type: 'link_close',
	            level: --level
	          });
	          text = text.slice(pos + links[ln].text.length);
	        }
	        if (text.length) {
	          nodes.push({
	            type: 'text',
	            content: text,
	            level: level
	          });
	        }
	
	        // replace current node
	        blockTokens[j].children = tokens = [].concat(tokens.slice(0, i), nodes, tokens.slice(i + 1));
	      }
	    }
	  }
	};


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// Inline parser state
	
	'use strict';
	
	
	function StateInline(src, parserInline, options, env, outTokens) {
	  this.src = src;
	  this.env = env;
	  this.options = options;
	  this.parser = parserInline;
	  this.tokens = outTokens;
	  this.pos = 0;
	  this.posMax = this.src.length;
	  this.level = 0;
	  this.pending = '';
	  this.pendingLevel = 0;
	
	  this.cache = [];        // Stores { start: end } pairs. Useful for backtrack
	                          // optimization of pairs parse (emphasis, strikes).
	
	  // Link parser state vars
	
	  this.isInLabel = false; // Set true when seek link label - we should disable
	                          // "paired" rules (emphasis, strikes) to not skip
	                          // tailing `]`
	
	  this.linkLevel = 0;     // Increment for each nesting link. Used to prevent
	                          // nesting in definitions
	
	  this.linkContent = '';  // Temporary storage for link url
	
	  this.labelUnmatchedScopes = 0; // Track unpaired `[` for link labels
	                                 // (backtrack optimization)
	}
	
	
	// Flush pending text
	//
	StateInline.prototype.pushPending = function () {
	  this.tokens.push({
	    type: 'text',
	    content: this.pending,
	    level: this.pendingLevel
	  });
	  this.pending = '';
	};
	
	
	// Push new token to "stream".
	// If pending text exists - flush it as text token
	//
	StateInline.prototype.push = function (token) {
	  if (this.pending) {
	    this.pushPending();
	  }
	
	  this.tokens.push(token);
	  this.pendingLevel = this.level;
	};
	
	
	// Store value to cache.
	// !!! Implementation has parser-specific optimizations
	// !!! keys MUST be integer, >= 0; values MUST be integer, > 0
	//
	StateInline.prototype.cacheSet = function (key, val) {
	  for (var i = this.cache.length; i <= key; i++) {
	    this.cache.push(0);
	  }
	
	  this.cache[key] = val;
	};
	
	
	// Get cache value
	//
	StateInline.prototype.cacheGet = function (key) {
	  return key < this.cache.length ? this.cache[key] : 0;
	};
	
	
	module.exports = StateInline;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// Skip text characters for text token, place those to pending buffer
	// and increment current pos
	
	'use strict';
	
	
	// Rule to skip pure text
	// '{}$%@~+=:' reserved for extentions
	
	function isTerminatorChar(ch) {
	  switch (ch) {
	    case 0x0A/* \n */:
	    case 0x5C/* \ */:
	    case 0x60/* ` */:
	    case 0x2A/* * */:
	    case 0x5F/* _ */:
	    case 0x5E/* ^ */:
	    case 0x5B/* [ */:
	    case 0x5D/* ] */:
	    case 0x21/* ! */:
	    case 0x26/* & */:
	    case 0x3C/* < */:
	    case 0x3E/* > */:
	    case 0x7B/* { */:
	    case 0x7D/* } */:
	    case 0x24/* $ */:
	    case 0x25/* % */:
	    case 0x40/* @ */:
	    case 0x7E/* ~ */:
	    case 0x2B/* + */:
	    case 0x3D/* = */:
	    case 0x3A/* : */:
	      return true;
	    default:
	      return false;
	  }
	}
	
	module.exports = function text(state, silent) {
	  var pos = state.pos;
	
	  while (pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))) {
	    pos++;
	  }
	
	  if (pos === state.pos) { return false; }
	
	  if (!silent) { state.pending += state.src.slice(state.pos, pos); }
	
	  state.pos = pos;
	
	  return true;
	};


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Proceess '\n'
	
	'use strict';
	
	module.exports = function newline(state, silent) {
	  var pmax, max, pos = state.pos;
	
	  if (state.src.charCodeAt(pos) !== 0x0A/* \n */) { return false; }
	
	  pmax = state.pending.length - 1;
	  max = state.posMax;
	
	  // '  \n' -> hardbreak
	  // Lookup in pending chars is bad practice! Don't copy to other rules!
	  // Pending string is stored in concat mode, indexed lookups will cause
	  // convertion to flat mode.
	  if (!silent) {
	    if (pmax >= 0 && state.pending.charCodeAt(pmax) === 0x20) {
	      if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 0x20) {
	        state.pending = state.pending.replace(/ +$/, '');
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      } else {
	        state.pending = state.pending.slice(0, -1);
	        state.push({
	          type: 'softbreak',
	          level: state.level
	        });
	      }
	
	    } else {
	      state.push({
	        type: 'softbreak',
	        level: state.level
	      });
	    }
	  }
	
	  pos++;
	
	  // skip heading spaces for next line
	  while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	  state.pos = pos;
	  return true;
	};


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// Proceess escaped chars and hardbreaks
	
	'use strict';
	
	var ESCAPED = [];
	
	for (var i = 0; i < 256; i++) { ESCAPED.push(0); }
	
	'\\!"#$%&\'()*+,./:;<=>?@[]^_`{|}~-'
	  .split('').forEach(function(ch) { ESCAPED[ch.charCodeAt(0)] = 1; });
	
	
	module.exports = function escape(state, silent) {
	  var ch, pos = state.pos, max = state.posMax;
	
	  if (state.src.charCodeAt(pos) !== 0x5C/* \ */) { return false; }
	
	  pos++;
	
	  if (pos < max) {
	    ch = state.src.charCodeAt(pos);
	
	    if (ch < 256 && ESCAPED[ch] !== 0) {
	      if (!silent) { state.pending += state.src[pos]; }
	      state.pos += 2;
	      return true;
	    }
	
	    if (ch === 0x0A) {
	      if (!silent) {
	        state.push({
	          type: 'hardbreak',
	          level: state.level
	        });
	      }
	
	      pos++;
	      // skip leading whitespaces from next line
	      while (pos < max && state.src.charCodeAt(pos) === 0x20) { pos++; }
	
	      state.pos = pos;
	      return true;
	    }
	  }
	
	  if (!silent) { state.pending += '\\'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// Parse backticks
	
	'use strict';
	
	module.exports = function backticks(state, silent) {
	  var start, max, marker, matchStart, matchEnd,
	      pos = state.pos,
	      ch = state.src.charCodeAt(pos);
	
	  if (ch !== 0x60/* ` */) { return false; }
	
	  start = pos;
	  pos++;
	  max = state.posMax;
	
	  while (pos < max && state.src.charCodeAt(pos) === 0x60/* ` */) { pos++; }
	
	  marker = state.src.slice(start, pos);
	
	  matchStart = matchEnd = pos;
	
	  while ((matchStart = state.src.indexOf('`', matchEnd)) !== -1) {
	    matchEnd = matchStart + 1;
	
	    while (matchEnd < max && state.src.charCodeAt(matchEnd) === 0x60/* ` */) { matchEnd++; }
	
	    if (matchEnd - matchStart === marker.length) {
	      if (!silent) {
	        state.push({
	          type: 'code',
	          content: state.src.slice(pos, matchStart)
	                              .replace(/[ \n]+/g, ' ')
	                              .trim(),
	          block: false,
	          level: state.level
	        });
	      }
	      state.pos = matchEnd;
	      return true;
	    }
	  }
	
	  if (!silent) { state.pending += marker; }
	  state.pos += marker.length;
	  return true;
	};


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// Process ~~deleted text~~
	
	'use strict';
	
	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;
	
	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x7E/* ~ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);
	
	  if (lastChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x7E/* ~ */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }
	
	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x7E/* ~ */) { pos++; }
	  if (pos > start + 3) {
	    // sequence of 4+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }
	
	  state.pos = start + 2;
	  stack = 1;
	
	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x7E/* ~ */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x7E/* ~ */ && lastChar !== 0x7E/* ~ */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '~~'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '~~'
	            stack++;
	          } // else {
	            //  // standalone ' ~~ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;
	
	  if (!silent) {
	    state.push({ type: 'del_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'del_close', level: --state.level });
	  }
	
	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// Process ++inserted text++
	
	'use strict';
	
	module.exports = function ins(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;
	
	  if (state.src.charCodeAt(start) !== 0x2B/* + */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x2B/* + */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);
	
	  if (lastChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x2B/* + */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }
	
	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x2B/* + */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }
	
	  state.pos = start + 2;
	  stack = 1;
	
	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x2B/* + */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x2B/* + */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x2B/* + */ && lastChar !== 0x2B/* + */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '++'
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '++'
	            stack++;
	          } // else {
	            //  // standalone ' ++ ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;
	
	  if (!silent) {
	    state.push({ type: 'ins_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'ins_close', level: --state.level });
	  }
	
	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// Process ==highlighted text==
	
	'use strict';
	
	module.exports = function del(state, silent) {
	  var found,
	      pos,
	      stack,
	      max = state.posMax,
	      start = state.pos,
	      lastChar,
	      nextChar;
	
	  if (state.src.charCodeAt(start) !== 0x3D/* = */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 4 >= max) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x3D/* = */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	  nextChar = state.src.charCodeAt(start + 2);
	
	  if (lastChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x3D/* = */) { return false; }
	  if (nextChar === 0x20 || nextChar === 0x0A) { return false; }
	
	  pos = start + 2;
	  while (pos < max && state.src.charCodeAt(pos) === 0x3D/* = */) { pos++; }
	  if (pos !== start + 2) {
	    // sequence of 3+ markers taking as literal, same as in a emphasis
	    state.pos += pos - start;
	    if (!silent) { state.pending += state.src.slice(start, pos); }
	    return true;
	  }
	
	  state.pos = start + 2;
	  stack = 1;
	
	  while (state.pos + 1 < max) {
	    if (state.src.charCodeAt(state.pos) === 0x3D/* = */) {
	      if (state.src.charCodeAt(state.pos + 1) === 0x3D/* = */) {
	        lastChar = state.src.charCodeAt(state.pos - 1);
	        nextChar = state.pos + 2 < max ? state.src.charCodeAt(state.pos + 2) : -1;
	        if (nextChar !== 0x3D/* = */ && lastChar !== 0x3D/* = */) {
	          if (lastChar !== 0x20 && lastChar !== 0x0A) {
	            // closing '=='
	            stack--;
	          } else if (nextChar !== 0x20 && nextChar !== 0x0A) {
	            // opening '=='
	            stack++;
	          } // else {
	            //  // standalone ' == ' indented with spaces
	            // }
	          if (stack <= 0) {
	            found = true;
	            break;
	          }
	        }
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 2;
	
	  if (!silent) {
	    state.push({ type: 'mark_open', level: state.level++ });
	    state.parser.tokenize(state);
	    state.push({ type: 'mark_close', level: --state.level });
	  }
	
	  state.pos = state.posMax + 2;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// Process *this* and _that_
	
	'use strict';
	
	
	function isAlphaNum(code) {
	  return (code >= 0x30 /* 0 */ && code <= 0x39 /* 9 */) ||
	         (code >= 0x41 /* A */ && code <= 0x5A /* Z */) ||
	         (code >= 0x61 /* a */ && code <= 0x7A /* z */);
	}
	
	// parse sequence of emphasis markers,
	// "start" should point at a valid marker
	function scanDelims(state, start) {
	  var pos = start, lastChar, nextChar, count,
	      can_open = true,
	      can_close = true,
	      max = state.posMax,
	      marker = state.src.charCodeAt(start);
	
	  lastChar = start > 0 ? state.src.charCodeAt(start - 1) : -1;
	
	  while (pos < max && state.src.charCodeAt(pos) === marker) { pos++; }
	  if (pos >= max) { can_open = false; }
	  count = pos - start;
	
	  if (count >= 4) {
	    // sequence of four or more unescaped markers can't start/end an emphasis
	    can_open = can_close = false;
	  } else {
	    nextChar = pos < max ? state.src.charCodeAt(pos) : -1;
	
	    // check whitespace conditions
	    if (nextChar === 0x20 || nextChar === 0x0A) { can_open = false; }
	    if (lastChar === 0x20 || lastChar === 0x0A) { can_close = false; }
	
	    if (marker === 0x5F /* _ */) {
	      // check if we aren't inside the word
	      if (isAlphaNum(lastChar)) { can_open = false; }
	      if (isAlphaNum(nextChar)) { can_close = false; }
	    }
	  }
	
	  return {
	    can_open: can_open,
	    can_close: can_close,
	    delims: count
	  };
	}
	
	module.exports = function emphasis(state, silent) {
	  var startCount,
	      count,
	      found,
	      oldCount,
	      newCount,
	      stack,
	      res,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);
	
	  if (marker !== 0x5F/* _ */ && marker !== 0x2A /* * */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	
	  res = scanDelims(state, start);
	  startCount = res.delims;
	  if (!res.can_open) {
	    state.pos += startCount;
	    if (!silent) { state.pending += state.src.slice(start, state.pos); }
	    return true;
	  }
	
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  state.pos = start + startCount;
	  stack = [ startCount ];
	
	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === marker) {
	      res = scanDelims(state, state.pos);
	      count = res.delims;
	      if (res.can_close) {
	        oldCount = stack.pop();
	        newCount = count;
	
	        while (oldCount !== newCount) {
	          if (newCount < oldCount) {
	            stack.push(oldCount - newCount);
	            break;
	          }
	
	          // assert(newCount > oldCount)
	          newCount -= oldCount;
	
	          if (stack.length === 0) { break; }
	          state.pos += oldCount;
	          oldCount = stack.pop();
	        }
	
	        if (stack.length === 0) {
	          startCount = oldCount;
	          found = true;
	          break;
	        }
	        state.pos += count;
	        continue;
	      }
	
	      if (res.can_open) { stack.push(count); }
	      state.pos += count;
	      continue;
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found) {
	    // parser failed to find ending tag, so it's not valid emphasis
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + startCount;
	
	  if (!silent) {
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_open', level: state.level++ });
	    }
	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_open', level: state.level++ });
	    }
	
	    state.parser.tokenize(state);
	
	    if (startCount === 1 || startCount === 3) {
	      state.push({ type: 'em_close', level: --state.level });
	    }
	    if (startCount === 2 || startCount === 3) {
	      state.push({ type: 'strong_close', level: --state.level });
	    }
	  }
	
	  state.pos = state.posMax + startCount;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// Process ~subscript~
	
	'use strict';
	
	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	
	module.exports = function sub(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;
	
	  if (state.src.charCodeAt(start) !== 0x7E/* ~ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  state.pos = start + 1;
	
	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x7E/* ~ */) {
	      found = true;
	      break;
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }
	
	  content = state.src.slice(start + 1, state.pos);
	
	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;
	
	  if (!silent) {
	    state.push({
	      type: 'sub',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }
	
	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// Process ^superscript^
	
	'use strict';
	
	// same as UNESCAPE_MD_RE plus a space
	var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
	
	module.exports = function sup(state, silent) {
	  var found,
	      content,
	      max = state.posMax,
	      start = state.pos;
	
	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (silent) { return false; } // don't run any pairs in validation mode
	  if (start + 2 >= max) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  state.pos = start + 1;
	
	  while (state.pos < max) {
	    if (state.src.charCodeAt(state.pos) === 0x5E/* ^ */) {
	      found = true;
	      break;
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (!found || start + 1 === state.pos) {
	    state.pos = start;
	    return false;
	  }
	
	  content = state.src.slice(start + 1, state.pos);
	
	  // don't allow unescaped spaces/newlines inside
	  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
	    state.pos = start;
	    return false;
	  }
	
	  // found!
	  state.posMax = state.pos;
	  state.pos = start + 1;
	
	  if (!silent) {
	    state.push({
	      type: 'sup',
	      level: state.level,
	      content: content.replace(UNESCAPE_RE, '$1')
	    });
	  }
	
	  state.pos = state.posMax + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// Process [links](<to> "stuff")
	
	'use strict';
	
	var parseLinkLabel       = __webpack_require__(281);
	var parseLinkDestination = __webpack_require__(282);
	var parseLinkTitle       = __webpack_require__(283);
	var normalizeReference   = __webpack_require__(284);
	
	
	module.exports = function links(state, silent) {
	  var labelStart,
	      labelEnd,
	      label,
	      href,
	      title,
	      pos,
	      ref,
	      code,
	      isImage = false,
	      oldPos = state.pos,
	      max = state.posMax,
	      start = state.pos,
	      marker = state.src.charCodeAt(start);
	
	  if (marker === 0x21/* ! */) {
	    isImage = true;
	    marker = state.src.charCodeAt(++start);
	  }
	
	  if (marker !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  labelStart = start + 1;
	  labelEnd = parseLinkLabel(state, start);
	
	  // parser failed to find ']', so it's not a valid link
	  if (labelEnd < 0) { return false; }
	
	  pos = labelEnd + 1;
	  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
	    //
	    // Inline link
	    //
	
	    // [link](  <href>  "title"  )
	    //        ^^ skipping these spaces
	    pos++;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	    if (pos >= max) { return false; }
	
	    // [link](  <href>  "title"  )
	    //          ^^^^^^ parsing link destination
	    start = pos;
	    if (parseLinkDestination(state, pos)) {
	      href = state.linkContent;
	      pos = state.pos;
	    } else {
	      href = '';
	    }
	
	    // [link](  <href>  "title"  )
	    //                ^^ skipping these spaces
	    start = pos;
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	
	    // [link](  <href>  "title"  )
	    //                  ^^^^^^^ parsing link title
	    if (pos < max && start !== pos && parseLinkTitle(state, pos)) {
	      title = state.linkContent;
	      pos = state.pos;
	
	      // [link](  <href>  "title"  )
	      //                         ^^ skipping these spaces
	      for (; pos < max; pos++) {
	        code = state.src.charCodeAt(pos);
	        if (code !== 0x20 && code !== 0x0A) { break; }
	      }
	    } else {
	      title = '';
	    }
	
	    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
	      state.pos = oldPos;
	      return false;
	    }
	    pos++;
	  } else {
	    //
	    // Link reference
	    //
	
	    // do not allow nested reference links
	    if (state.linkLevel > 0) { return false; }
	
	    // [foo]  [bar]
	    //      ^^ optional whitespace (can include newlines)
	    for (; pos < max; pos++) {
	      code = state.src.charCodeAt(pos);
	      if (code !== 0x20 && code !== 0x0A) { break; }
	    }
	
	    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
	      start = pos + 1;
	      pos = parseLinkLabel(state, pos);
	      if (pos >= 0) {
	        label = state.src.slice(start, pos++);
	      } else {
	        pos = start - 1;
	      }
	    }
	
	    // covers label === '' and label === undefined
	    // (collapsed reference link and shortcut reference link respectively)
	    if (!label) { label = state.src.slice(labelStart, labelEnd); }
	
	    ref = state.env.references[normalizeReference(label)];
	    if (!ref) {
	      state.pos = oldPos;
	      return false;
	    }
	    href = ref.href;
	    title = ref.title;
	  }
	
	  //
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    state.pos = labelStart;
	    state.posMax = labelEnd;
	
	    if (isImage) {
	      state.push({
	        type: 'image',
	        src: href,
	        title: title,
	        alt: state.src.substr(labelStart, labelEnd - labelStart),
	        level: state.level
	      });
	    } else {
	      state.push({
	        type: 'link_open',
	        href: href,
	        title: title,
	        level: state.level++
	      });
	      state.linkLevel++;
	      state.parser.tokenize(state);
	      state.linkLevel--;
	      state.push({ type: 'link_close', level: --state.level });
	    }
	  }
	
	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// Process inline footnotes (^[...])
	
	'use strict';
	
	var parseLinkLabel = __webpack_require__(281);
	
	
	module.exports = function footnote_inline(state, silent) {
	  var labelStart,
	      labelEnd,
	      footnoteId,
	      oldLength,
	      max = state.posMax,
	      start = state.pos;
	
	  if (start + 2 >= max) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5E/* ^ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5B/* [ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  labelStart = start + 2;
	  labelEnd = parseLinkLabel(state, start + 1);
	
	  // parser failed to find ']', so it's not a valid note
	  if (labelEnd < 0) { return false; }
	
	  // We found the end of the link, and know for a fact it's a valid link;
	  // so all that's left to do is to call tokenizer.
	  //
	  if (!silent) {
	    if (!state.env.footnotes) { state.env.footnotes = {}; }
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	    footnoteId = state.env.footnotes.list.length;
	
	    state.pos = labelStart;
	    state.posMax = labelEnd;
	
	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      level: state.level
	    });
	    state.linkLevel++;
	    oldLength = state.tokens.length;
	    state.parser.tokenize(state);
	    state.env.footnotes.list[footnoteId] = { tokens: state.tokens.splice(oldLength) };
	    state.linkLevel--;
	  }
	
	  state.pos = labelEnd + 1;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// Process footnote references ([^...])
	
	'use strict';
	
	
	module.exports = function footnote_ref(state, silent) {
	  var label,
	      pos,
	      footnoteId,
	      footnoteSubId,
	      max = state.posMax,
	      start = state.pos;
	
	  // should be at least 4 chars - "[^x]"
	  if (start + 3 > max) { return false; }
	
	  if (!state.env.footnotes || !state.env.footnotes.refs) { return false; }
	  if (state.src.charCodeAt(start) !== 0x5B/* [ */) { return false; }
	  if (state.src.charCodeAt(start + 1) !== 0x5E/* ^ */) { return false; }
	  if (state.level >= state.options.maxNesting) { return false; }
	
	  for (pos = start + 2; pos < max; pos++) {
	    if (state.src.charCodeAt(pos) === 0x20) { return false; }
	    if (state.src.charCodeAt(pos) === 0x0A) { return false; }
	    if (state.src.charCodeAt(pos) === 0x5D /* ] */) {
	      break;
	    }
	  }
	
	  if (pos === start + 2) { return false; } // no empty footnote labels
	  if (pos >= max) { return false; }
	  pos++;
	
	  label = state.src.slice(start + 2, pos - 1);
	  if (typeof state.env.footnotes.refs[':' + label] === 'undefined') { return false; }
	
	  if (!silent) {
	    if (!state.env.footnotes.list) { state.env.footnotes.list = []; }
	
	    if (state.env.footnotes.refs[':' + label] < 0) {
	      footnoteId = state.env.footnotes.list.length;
	      state.env.footnotes.list[footnoteId] = { label: label, count: 0 };
	      state.env.footnotes.refs[':' + label] = footnoteId;
	    } else {
	      footnoteId = state.env.footnotes.refs[':' + label];
	    }
	
	    footnoteSubId = state.env.footnotes.list[footnoteId].count;
	    state.env.footnotes.list[footnoteId].count++;
	
	    state.push({
	      type: 'footnote_ref',
	      id: footnoteId,
	      subId: footnoteSubId,
	      level: state.level
	    });
	  }
	
	  state.pos = pos;
	  state.posMax = max;
	  return true;
	};


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// Process autolinks '<protocol:...>'
	
	'use strict';
	
	var url_schemas   = __webpack_require__(285);
	var normalizeLink = __webpack_require__(286);
	
	
	/*eslint max-len:0*/
	var EMAIL_RE    = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
	var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
	
	
	module.exports = function autolink(state, silent) {
	  var tail, linkMatch, emailMatch, url, fullUrl, pos = state.pos;
	
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */) { return false; }
	
	  tail = state.src.slice(pos);
	
	  if (tail.indexOf('>') < 0) { return false; }
	
	  linkMatch = tail.match(AUTOLINK_RE);
	
	  if (linkMatch) {
	    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) { return false; }
	
	    url = linkMatch[0].slice(1, -1);
	    fullUrl = normalizeLink(url);
	    if (!state.parser.validateLink(url)) { return false; }
	
	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }
	
	    state.pos += linkMatch[0].length;
	    return true;
	  }
	
	  emailMatch = tail.match(EMAIL_RE);
	
	  if (emailMatch) {
	
	    url = emailMatch[0].slice(1, -1);
	
	    fullUrl = normalizeLink('mailto:' + url);
	    if (!state.parser.validateLink(fullUrl)) { return false; }
	
	    if (!silent) {
	      state.push({
	        type: 'link_open',
	        href: fullUrl,
	        level: state.level
	      });
	      state.push({
	        type: 'text',
	        content: url,
	        level: state.level + 1
	      });
	      state.push({ type: 'link_close', level: state.level });
	    }
	
	    state.pos += emailMatch[0].length;
	    return true;
	  }
	
	  return false;
	};


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// Process html tags
	
	'use strict';
	
	
	var HTML_TAG_RE = __webpack_require__(287).HTML_TAG_RE;
	
	
	function isLetter(ch) {
	  /*eslint no-bitwise:0*/
	  var lc = ch | 0x20; // to lower case
	  return (lc >= 0x61/* a */) && (lc <= 0x7a/* z */);
	}
	
	
	module.exports = function htmltag(state, silent) {
	  var ch, match, max, pos = state.pos;
	
	  if (!state.options.html) { return false; }
	
	  // Check start
	  max = state.posMax;
	  if (state.src.charCodeAt(pos) !== 0x3C/* < */ ||
	      pos + 2 >= max) {
	    return false;
	  }
	
	  // Quick fail on second char
	  ch = state.src.charCodeAt(pos + 1);
	  if (ch !== 0x21/* ! */ &&
	      ch !== 0x3F/* ? */ &&
	      ch !== 0x2F/* / */ &&
	      !isLetter(ch)) {
	    return false;
	  }
	
	  match = state.src.slice(pos).match(HTML_TAG_RE);
	  if (!match) { return false; }
	
	  if (!silent) {
	    state.push({
	      type: 'htmltag',
	      content: state.src.slice(pos, pos + match[0].length),
	      level: state.level
	    });
	  }
	  state.pos += match[0].length;
	  return true;
	};


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// Process html entity - &#123;, &#xAF;, &quot;, ...
	
	'use strict';
	
	var entities          = __webpack_require__(236);
	var has               = __webpack_require__(225).has;
	var isValidEntityCode = __webpack_require__(225).isValidEntityCode;
	var fromCodePoint     = __webpack_require__(225).fromCodePoint;
	
	
	var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
	var NAMED_RE   = /^&([a-z][a-z0-9]{1,31});/i;
	
	
	module.exports = function entity(state, silent) {
	  var ch, code, match, pos = state.pos, max = state.posMax;
	
	  if (state.src.charCodeAt(pos) !== 0x26/* & */) { return false; }
	
	  if (pos + 1 < max) {
	    ch = state.src.charCodeAt(pos + 1);
	
	    if (ch === 0x23 /* # */) {
	      match = state.src.slice(pos).match(DIGITAL_RE);
	      if (match) {
	        if (!silent) {
	          code = match[1][0].toLowerCase() === 'x' ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
	          state.pending += isValidEntityCode(code) ? fromCodePoint(code) : fromCodePoint(0xFFFD);
	        }
	        state.pos += match[0].length;
	        return true;
	      }
	    } else {
	      match = state.src.slice(pos).match(NAMED_RE);
	      if (match) {
	        if (has(entities, match[1])) {
	          if (!silent) { state.pending += entities[match[1]]; }
	          state.pos += match[0].length;
	          return true;
	        }
	      }
	    }
	  }
	
	  if (!silent) { state.pending += '&'; }
	  state.pos++;
	  return true;
	};


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(66).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(277).setImmediate, __webpack_require__(277).clearImmediate))

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 279 */,
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// List of valid html blocks names, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#html-blocks
	
	'use strict';
	
	var html_blocks = {};
	
	[
	  'article',
	  'aside',
	  'button',
	  'blockquote',
	  'body',
	  'canvas',
	  'caption',
	  'col',
	  'colgroup',
	  'dd',
	  'div',
	  'dl',
	  'dt',
	  'embed',
	  'fieldset',
	  'figcaption',
	  'figure',
	  'footer',
	  'form',
	  'h1',
	  'h2',
	  'h3',
	  'h4',
	  'h5',
	  'h6',
	  'header',
	  'hgroup',
	  'hr',
	  'iframe',
	  'li',
	  'map',
	  'object',
	  'ol',
	  'output',
	  'p',
	  'pre',
	  'progress',
	  'script',
	  'section',
	  'style',
	  'table',
	  'tbody',
	  'td',
	  'textarea',
	  'tfoot',
	  'th',
	  'tr',
	  'thead',
	  'ul',
	  'video'
	].forEach(function (name) { html_blocks[name] = true; });
	
	
	module.exports = html_blocks;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Parse link labels
	 *
	 * This function assumes that first character (`[`) already matches;
	 * returns the end of the label.
	 *
	 * @param  {Object} state
	 * @param  {Number} start
	 * @api private
	 */
	
	module.exports = function parseLinkLabel(state, start) {
	  var level, found, marker,
	      labelEnd = -1,
	      max = state.posMax,
	      oldPos = state.pos,
	      oldFlag = state.isInLabel;
	
	  if (state.isInLabel) { return -1; }
	
	  if (state.labelUnmatchedScopes) {
	    state.labelUnmatchedScopes--;
	    return -1;
	  }
	
	  state.pos = start + 1;
	  state.isInLabel = true;
	  level = 1;
	
	  while (state.pos < max) {
	    marker = state.src.charCodeAt(state.pos);
	    if (marker === 0x5B /* [ */) {
	      level++;
	    } else if (marker === 0x5D /* ] */) {
	      level--;
	      if (level === 0) {
	        found = true;
	        break;
	      }
	    }
	
	    state.parser.skipToken(state);
	  }
	
	  if (found) {
	    labelEnd = state.pos;
	    state.labelUnmatchedScopes = 0;
	  } else {
	    state.labelUnmatchedScopes = level - 1;
	  }
	
	  // restore old state
	  state.pos = oldPos;
	  state.isInLabel = oldFlag;
	
	  return labelEnd;
	};


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var normalizeLink = __webpack_require__(286);
	var unescapeMd    = __webpack_require__(225).unescapeMd;
	
	/**
	 * Parse link destination
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */
	
	module.exports = function parseLinkDestination(state, pos) {
	  var code, level, link,
	      start = pos,
	      max = state.posMax;
	
	  if (state.src.charCodeAt(pos) === 0x3C /* < */) {
	    pos++;
	    while (pos < max) {
	      code = state.src.charCodeAt(pos);
	      if (code === 0x0A /* \n */) { return false; }
	      if (code === 0x3E /* > */) {
	        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
	        if (!state.parser.validateLink(link)) { return false; }
	        state.pos = pos + 1;
	        state.linkContent = link;
	        return true;
	      }
	      if (code === 0x5C /* \ */ && pos + 1 < max) {
	        pos += 2;
	        continue;
	      }
	
	      pos++;
	    }
	
	    // no closing '>'
	    return false;
	  }
	
	  // this should be ... } else { ... branch
	
	  level = 0;
	  while (pos < max) {
	    code = state.src.charCodeAt(pos);
	
	    if (code === 0x20) { break; }
	
	    // ascii control characters
	    if (code < 0x20 || code === 0x7F) { break; }
	
	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }
	
	    if (code === 0x28 /* ( */) {
	      level++;
	      if (level > 1) { break; }
	    }
	
	    if (code === 0x29 /* ) */) {
	      level--;
	      if (level < 0) { break; }
	    }
	
	    pos++;
	  }
	
	  if (start === pos) { return false; }
	
	  link = normalizeLink(unescapeMd(state.src.slice(start, pos)));
	  if (!state.parser.validateLink(link)) { return false; }
	
	  state.linkContent = link;
	  state.pos = pos;
	  return true;
	};


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	
	var unescapeMd = __webpack_require__(225).unescapeMd;
	
	/**
	 * Parse link title
	 *
	 *   - on success it returns a string and updates state.pos;
	 *   - on failure it returns null
	 *
	 * @param  {Object} state
	 * @param  {Number} pos
	 * @api private
	 */
	
	module.exports = function parseLinkTitle(state, pos) {
	  var code,
	      start = pos,
	      max = state.posMax,
	      marker = state.src.charCodeAt(pos);
	
	  if (marker !== 0x22 /* " */ && marker !== 0x27 /* ' */ && marker !== 0x28 /* ( */) { return false; }
	
	  pos++;
	
	  // if opening marker is "(", switch it to closing marker ")"
	  if (marker === 0x28) { marker = 0x29; }
	
	  while (pos < max) {
	    code = state.src.charCodeAt(pos);
	    if (code === marker) {
	      state.pos = pos + 1;
	      state.linkContent = unescapeMd(state.src.slice(start + 1, pos));
	      return true;
	    }
	    if (code === 0x5C /* \ */ && pos + 1 < max) {
	      pos += 2;
	      continue;
	    }
	
	    pos++;
	  }
	
	  return false;
	};


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function normalizeReference(str) {
	  // use .toUpperCase() instead of .toLowerCase()
	  // here to avoid a conflict with Object.prototype
	  // members (most notably, `__proto__`)
	  return str.trim().replace(/\s+/g, ' ').toUpperCase();
	};


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// List of valid url schemas, accorting to commonmark spec
	// http://jgm.github.io/CommonMark/spec.html#autolinks
	
	'use strict';
	
	
	module.exports = [
	  'coap',
	  'doi',
	  'javascript',
	  'aaa',
	  'aaas',
	  'about',
	  'acap',
	  'cap',
	  'cid',
	  'crid',
	  'data',
	  'dav',
	  'dict',
	  'dns',
	  'file',
	  'ftp',
	  'geo',
	  'go',
	  'gopher',
	  'h323',
	  'http',
	  'https',
	  'iax',
	  'icap',
	  'im',
	  'imap',
	  'info',
	  'ipp',
	  'iris',
	  'iris.beep',
	  'iris.xpc',
	  'iris.xpcs',
	  'iris.lwz',
	  'ldap',
	  'mailto',
	  'mid',
	  'msrp',
	  'msrps',
	  'mtqp',
	  'mupdate',
	  'news',
	  'nfs',
	  'ni',
	  'nih',
	  'nntp',
	  'opaquelocktoken',
	  'pop',
	  'pres',
	  'rtsp',
	  'service',
	  'session',
	  'shttp',
	  'sieve',
	  'sip',
	  'sips',
	  'sms',
	  'snmp',
	  'soap.beep',
	  'soap.beeps',
	  'tag',
	  'tel',
	  'telnet',
	  'tftp',
	  'thismessage',
	  'tn3270',
	  'tip',
	  'tv',
	  'urn',
	  'vemmi',
	  'ws',
	  'wss',
	  'xcon',
	  'xcon-userid',
	  'xmlrpc.beep',
	  'xmlrpc.beeps',
	  'xmpp',
	  'z39.50r',
	  'z39.50s',
	  'adiumxtra',
	  'afp',
	  'afs',
	  'aim',
	  'apt',
	  'attachment',
	  'aw',
	  'beshare',
	  'bitcoin',
	  'bolo',
	  'callto',
	  'chrome',
	  'chrome-extension',
	  'com-eventbrite-attendee',
	  'content',
	  'cvs',
	  'dlna-playsingle',
	  'dlna-playcontainer',
	  'dtn',
	  'dvb',
	  'ed2k',
	  'facetime',
	  'feed',
	  'finger',
	  'fish',
	  'gg',
	  'git',
	  'gizmoproject',
	  'gtalk',
	  'hcp',
	  'icon',
	  'ipn',
	  'irc',
	  'irc6',
	  'ircs',
	  'itms',
	  'jar',
	  'jms',
	  'keyparc',
	  'lastfm',
	  'ldaps',
	  'magnet',
	  'maps',
	  'market',
	  'message',
	  'mms',
	  'ms-help',
	  'msnim',
	  'mumble',
	  'mvn',
	  'notes',
	  'oid',
	  'palm',
	  'paparazzi',
	  'platform',
	  'proxy',
	  'psyc',
	  'query',
	  'res',
	  'resource',
	  'rmi',
	  'rsync',
	  'rtmp',
	  'secondlife',
	  'sftp',
	  'sgn',
	  'skype',
	  'smb',
	  'soldat',
	  'spotify',
	  'ssh',
	  'steam',
	  'svn',
	  'teamspeak',
	  'things',
	  'udp',
	  'unreal',
	  'ut2004',
	  'ventrilo',
	  'view-source',
	  'webcal',
	  'wtai',
	  'wyciwyg',
	  'xfire',
	  'xri',
	  'ymsgr'
	];


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var replaceEntities = __webpack_require__(225).replaceEntities;
	
	module.exports = function normalizeLink(url) {
	  var normalized = replaceEntities(url);
	  // We shouldn't care about the result of malformed URIs,
	  // and should not throw an exception.
	  try {
	    normalized = decodeURI(normalized);
	  } catch (err) {}
	  return encodeURI(normalized);
	};


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// Regexps to match html elements
	
	'use strict';
	
	
	function replace(regex, options) {
	  regex = regex.source;
	  options = options || '';
	
	  return function self(name, val) {
	    if (!name) {
	      return new RegExp(regex, options);
	    }
	    val = val.source || val;
	    regex = regex.replace(name, val);
	    return self;
	  };
	}
	
	
	var attr_name     = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
	
	var unquoted      = /[^"'=<>`\x00-\x20]+/;
	var single_quoted = /'[^']*'/;
	var double_quoted = /"[^"]*"/;
	
	/*eslint no-spaced-func:0*/
	var attr_value  = replace(/(?:unquoted|single_quoted|double_quoted)/)
	                    ('unquoted', unquoted)
	                    ('single_quoted', single_quoted)
	                    ('double_quoted', double_quoted)
	                    ();
	
	var attribute   = replace(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)
	                    ('attr_name', attr_name)
	                    ('attr_value', attr_value)
	                    ();
	
	var open_tag    = replace(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)
	                    ('attribute', attribute)
	                    ();
	
	var close_tag   = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
	var comment     = /<!--([^-]+|[-][^-]+)*-->/;
	var processing  = /<[?].*?[?]>/;
	var declaration = /<![A-Z]+\s+[^>]*>/;
	var cdata       = /<!\[CDATA\[([^\]]+|\][^\]]|\]\][^>])*\]\]>/;
	
	var HTML_TAG_RE = replace(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)
	  ('open_tag', open_tag)
	  ('close_tag', close_tag)
	  ('comment', comment)
	  ('processing', processing)
	  ('declaration', declaration)
	  ('cdata', cdata)
	  ();
	
	
	module.exports.HTML_TAG_RE = HTML_TAG_RE;


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['Autolinker'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    root['Autolinker'] = factory();
	  }
	}(this, function () {
	
	/*!
	 * Autolinker.js
	 * 0.15.3
	 *
	 * Copyright(c) 2015 Gregory Jacobs <greg@greg-jacobs.com>
	 * MIT Licensed. http://www.opensource.org/licenses/mit-license.php
	 *
	 * https://github.com/gregjacobs/Autolinker.js
	 */
	/**
	 * @class Autolinker
	 * @extends Object
	 * 
	 * Utility class used to process a given string of text, and wrap the URLs, email addresses, and Twitter handles in 
	 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.
	 * 
	 * Any of the configuration options may be provided in an Object (map) provided to the Autolinker constructor, which
	 * will configure how the {@link #link link()} method will process the links.
	 * 
	 * For example:
	 * 
	 *     var autolinker = new Autolinker( {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     
	 *     var html = autolinker.link( "Joe went to www.yahoo.com" );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * The {@link #static-link static link()} method may also be used to inline options into a single call, which may
	 * be more convenient for one-off uses. For example:
	 * 
	 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {
	 *         newWindow : false,
	 *         truncate  : 30
	 *     } );
	 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'
	 * 
	 * 
	 * ## Custom Replacements of Links
	 * 
	 * If the configuration options do not provide enough flexibility, a {@link #replaceFn} may be provided to fully customize
	 * the output of Autolinker. This function is called once for each URL/Email/Twitter handle match that is encountered.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {
	 *                         var tag = autolinker.getTagBuilder().build( match );  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
	 *                         tag.setAttr( 'rel', 'nofollow' );
	 *                         tag.addClass( 'external-link' );
	 *                         
	 *                         return tag;
	 *                         
	 *                     } else {
	 *                         return true;  // let Autolinker perform its normal anchor tag replacement
	 *                     }
	 *                     
	 *                 case 'email' :
	 *                     var email = match.getEmail();
	 *                     console.log( "email: ", email );
	 *                     
	 *                     if( email === "my@own.address" ) {
	 *                         return false;  // don't auto-link this particular email address; leave as-is
	 *                     } else {
	 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
	 *                     }
	 *                 
	 *                 case 'twitter' :
	 *                     var twitterHandle = match.getTwitterHandle();
	 *                     console.log( twitterHandle );
	 *                     
	 *                     return '<a href="http://newplace.to.link.twitter.handles.to/">' + twitterHandle + '</a>';
	 *             }
	 *         }
	 *     } );
	 * 
	 * 
	 * The function may return the following values:
	 * 
	 * - `true` (Boolean): Allow Autolinker to replace the match as it normally would.
	 * - `false` (Boolean): Do not replace the current match at all - leave as-is.
	 * - Any String: If a string is returned from the function, the string will be used directly as the replacement HTML for
	 *   the match.
	 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify an HTML tag before writing out its HTML text.
	 * 
	 * @constructor
	 * @param {Object} [config] The configuration options for the Autolinker instance, specified in an Object (map).
	 */
	var Autolinker = function( cfg ) {
		Autolinker.Util.assign( this, cfg );  // assign the properties of `cfg` onto the Autolinker instance. Prototype properties will be used for missing configs.
	};
	
	
	Autolinker.prototype = {
		constructor : Autolinker,  // fix constructor property
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} newWindow
		 * 
		 * `true` if the links should open in a new window, `false` otherwise.
		 */
		newWindow : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text, 
		 * `false` otherwise.
		 */
		stripPrefix : true,
		
		/**
		 * @cfg {Number} truncate
		 * 
		 * A number for how many characters long URLs/emails/twitter handles should be truncated to inside the text of 
		 * a link. If the URL/email/twitter is over this number of characters, it will be truncated to this length by 
		 * adding a two period ellipsis ('..') to the end of the string.
		 * 
		 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file' truncated to 25 characters might look
		 * something like this: 'yahoo.com/some/long/pat..'
		 */
		truncate : undefined,
		
		/**
		 * @cfg {String} className
		 * 
		 * A CSS class name to add to the generated links. This class will be added to all links, as well as this class
		 * plus url/email/twitter suffixes for styling url/email/twitter links differently.
		 * 
		 * For example, if this config is provided as "myLink", then:
		 * 
		 * - URL links will have the CSS classes: "myLink myLink-url"
		 * - Email links will have the CSS classes: "myLink myLink-email", and
		 * - Twitter links will have the CSS classes: "myLink myLink-twitter"
		 */
		className : "",
		
		/**
		 * @cfg {Function} replaceFn
		 * 
		 * A function to individually process each URL/Email/Twitter match found in the input string.
		 * 
		 * See the class's description for usage.
		 * 
		 * This function is called with the following parameters:
		 * 
		 * @cfg {Autolinker} replaceFn.autolinker The Autolinker instance, which may be used to retrieve child objects from (such
		 *   as the instance's {@link #getTagBuilder tag builder}).
		 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which can be used to retrieve information about the
		 *   {@link Autolinker.match.Url URL}/{@link Autolinker.match.Email email}/{@link Autolinker.match.Twitter Twitter}
		 *   match that the `replaceFn` is currently processing.
		 */
		
		
		/**
		 * @private
		 * @property {Autolinker.htmlParser.HtmlParser} htmlParser
		 * 
		 * The HtmlParser instance used to skip over HTML tags, while finding text nodes to process. This is lazily instantiated
		 * in the {@link #getHtmlParser} method.
		 */
		htmlParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.matchParser.MatchParser} matchParser
		 * 
		 * The MatchParser instance used to find URL/email/Twitter matches in the text nodes of an input string passed to
		 * {@link #link}. This is lazily instantiated in the {@link #getMatchParser} method.
		 */
		matchParser : undefined,
		
		/**
		 * @private
		 * @property {Autolinker.AnchorTagBuilder} tagBuilder
		 * 
		 * The AnchorTagBuilder instance used to build the URL/email/Twitter replacement anchor tags. This is lazily instantiated
		 * in the {@link #getTagBuilder} method.
		 */
		tagBuilder : undefined,
		
		
		/**
		 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
		 * Does not link URLs found within HTML tags.
		 * 
		 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
		 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
		 * 
		 * This method finds the text around any HTML elements in the input `textOrHtml`, which will be the text that is processed.
		 * Any original HTML elements will be left as-is, as well as the text that is already wrapped in anchor (&lt;a&gt;) tags.
		 * 
		 * @param {String} textOrHtml The HTML or text to link URLs, email addresses, and Twitter handles within (depending on if
		 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
		 * @return {String} The HTML, with URLs/emails/Twitter handles automatically linked.
		 */
		link : function( textOrHtml ) {
			var htmlParser = this.getHtmlParser(),
			    htmlNodes = htmlParser.parse( textOrHtml ),
			    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have
			    resultHtml = [];
			
			for( var i = 0, len = htmlNodes.length; i < len; i++ ) {
				var node = htmlNodes[ i ],
				    nodeType = node.getType(),
				    nodeText = node.getText();
				
				if( nodeType === 'element' ) {
					// Process HTML nodes in the input `textOrHtml`
					if( node.getTagName() === 'a' ) {
						if( !node.isClosing() ) {  // it's the start <a> tag
							anchorTagStackCount++;
						} else {   // it's the end </a> tag
							anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
						}
					}
					resultHtml.push( nodeText );  // now add the text of the tag itself verbatim
					
				} else if( nodeType === 'entity' ) {
					resultHtml.push( nodeText );  // append HTML entity nodes (such as '&nbsp;') verbatim
					
				} else {
					// Process text nodes in the input `textOrHtml`
					if( anchorTagStackCount === 0 ) {
						// If we're not within an <a> tag, process the text node to linkify
						var linkifiedStr = this.linkifyStr( nodeText );
						resultHtml.push( linkifiedStr );
						
					} else {
						// `text` is within an <a> tag, simply append the text - we do not want to autolink anything 
						// already within an <a>...</a> tag
						resultHtml.push( nodeText );
					}
				}
			}
			
			return resultHtml.join( "" );
		},
		
		
		/**
		 * Process the text that lies in between HTML tags, performing the anchor tag replacements for matched 
		 * URLs/emails/Twitter handles, and returns the string with the replacements made. 
		 * 
		 * This method does the actual wrapping of URLs/emails/Twitter handles with anchor tags.
		 * 
		 * @private
		 * @param {String} str The string of text to auto-link.
		 * @return {String} The text with anchor tags auto-filled.
		 */
		linkifyStr : function( str ) {
			return this.getMatchParser().replace( str, this.createMatchReturnVal, this );
		},
		
		
		/**
		 * Creates the return string value for a given match in the input string, for the {@link #processTextNode} method.
		 * 
		 * This method handles the {@link #replaceFn}, if one was provided.
		 * 
		 * @private
		 * @param {Autolinker.match.Match} match The Match object that represents the match.
		 * @return {String} The string that the `match` should be replaced with. This is usually the anchor tag string, but
		 *   may be the `matchStr` itself if the match is not to be replaced.
		 */
		createMatchReturnVal : function( match ) {
			// Handle a custom `replaceFn` being provided
			var replaceFnResult;
			if( this.replaceFn ) {
				replaceFnResult = this.replaceFn.call( this, this, match );  // Autolinker instance is the context, and the first arg
			}
			
			if( typeof replaceFnResult === 'string' ) {
				return replaceFnResult;  // `replaceFn` returned a string, use that
				
			} else if( replaceFnResult === false ) {
				return match.getMatchedText();  // no replacement for the match
				
			} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {
				return replaceFnResult.toString();
			
			} else {  // replaceFnResult === true, or no/unknown return value from function
				// Perform Autolinker's default anchor tag generation
				var tagBuilder = this.getTagBuilder(),
				    anchorTag = tagBuilder.build( match );  // returns an Autolinker.HtmlTag instance
				
				return anchorTag.toString();
			}
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #htmlParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.htmlParser.HtmlParser}
		 */
		getHtmlParser : function() {
			var htmlParser = this.htmlParser;
			
			if( !htmlParser ) {
				htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();
			}
			
			return htmlParser;
		},
		
		
		/**
		 * Lazily instantiates and returns the {@link #matchParser} instance for this Autolinker instance.
		 * 
		 * @protected
		 * @return {Autolinker.matchParser.MatchParser}
		 */
		getMatchParser : function() {
			var matchParser = this.matchParser;
			
			if( !matchParser ) {
				matchParser = this.matchParser = new Autolinker.matchParser.MatchParser( {
					urls : this.urls,
					email : this.email,
					twitter : this.twitter,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return matchParser;
		},
		
		
		/**
		 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it
		 * if it does not yet exist.
		 * 
		 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that 
		 * Autolinker would normally generate, and then allow for modifications before returning it. For example:
		 * 
		 *     var html = Autolinker.link( "Test google.com", {
		 *         replaceFn : function( autolinker, match ) {
		 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
		 *             tag.setAttr( 'rel', 'nofollow' );
		 *             
		 *             return tag;
		 *         }
		 *     } );
		 *     
		 *     // generated html:
		 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
		 * 
		 * @return {Autolinker.AnchorTagBuilder}
		 */
		getTagBuilder : function() {
			var tagBuilder = this.tagBuilder;
			
			if( !tagBuilder ) {
				tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {
					newWindow   : this.newWindow,
					truncate    : this.truncate,
					className   : this.className
				} );
			}
			
			return tagBuilder;
		}
	
	};
	
	
	/**
	 * Automatically links URLs, email addresses, and Twitter handles found in the given chunk of HTML. 
	 * Does not link URLs found within HTML tags.
	 * 
	 * For instance, if given the text: `You should go to http://www.yahoo.com`, then the result
	 * will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`
	 * 
	 * Example:
	 * 
	 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );
	 *     // Produces: "Go to <a href="http://google.com">google.com</a>"
	 * 
	 * @static
	 * @param {String} textOrHtml The HTML or text to find URLs, email addresses, and Twitter handles within (depending on if
	 *   the {@link #urls}, {@link #email}, and {@link #twitter} options are enabled).
	 * @param {Object} [options] Any of the configuration options for the Autolinker class, specified in an Object (map).
	 *   See the class description for an example call.
	 * @return {String} The HTML text, with URLs automatically linked
	 */
	Autolinker.link = function( textOrHtml, options ) {
		var autolinker = new Autolinker( options );
		return autolinker.link( textOrHtml );
	};
	
	
	// Autolinker Namespaces
	Autolinker.match = {};
	Autolinker.htmlParser = {};
	Autolinker.matchParser = {};
	/*global Autolinker */
	/*jshint eqnull:true, boss:true */
	/**
	 * @class Autolinker.Util
	 * @singleton
	 * 
	 * A few utility methods for Autolinker.
	 */
	Autolinker.Util = {
		
		/**
		 * @property {Function} abstractMethod
		 * 
		 * A function object which represents an abstract method.
		 */
		abstractMethod : function() { throw "abstract"; },
		
		
		/**
		 * Assigns (shallow copies) the properties of `src` onto `dest`.
		 * 
		 * @param {Object} dest The destination object.
		 * @param {Object} src The source object.
		 * @return {Object} The destination object (`dest`)
		 */
		assign : function( dest, src ) {
			for( var prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					dest[ prop ] = src[ prop ];
				}
			}
			
			return dest;
		},
		
		
		/**
		 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.
		 * 
		 * @param {Function} superclass The constructor function for the superclass.
		 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the
		 *   special property `constructor`, which will be used as the new subclass's constructor function.
		 * @return {Function} The new subclass function.
		 */
		extend : function( superclass, protoProps ) {
			var superclassProto = superclass.prototype;
			
			var F = function() {};
			F.prototype = superclassProto;
			
			var subclass;
			if( protoProps.hasOwnProperty( 'constructor' ) ) {
				subclass = protoProps.constructor;
			} else {
				subclass = function() { superclassProto.constructor.apply( this, arguments ); };
			}
			
			var subclassProto = subclass.prototype = new F();  // set up prototype chain
			subclassProto.constructor = subclass;  // fix constructor property
			subclassProto.superclass = superclassProto;
			
			delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
			Autolinker.Util.assign( subclassProto, protoProps );
			
			return subclass;
		},
		
		
		/**
		 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the
		 * end of the string (by default, two periods: '..'). If the `str` length does not exceed 
		 * `len`, the string will be returned unchanged.
		 * 
		 * @param {String} str The string to truncate and add an ellipsis to.
		 * @param {Number} truncateLen The length to truncate the string at.
		 * @param {String} [ellipsisChars=..] The ellipsis character(s) to add to the end of `str`
		 *   when truncated. Defaults to '..'
		 */
		ellipsis : function( str, truncateLen, ellipsisChars ) {
			if( str.length > truncateLen ) {
				ellipsisChars = ( ellipsisChars == null ) ? '..' : ellipsisChars;
				str = str.substring( 0, truncateLen - ellipsisChars.length ) + ellipsisChars;
			}
			return str;
		},
		
		
		/**
		 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).
		 * 
		 * @param {Array} arr The array to find an element of.
		 * @param {*} element The element to find in the array, and return the index of.
		 * @return {Number} The index of the `element`, or -1 if it was not found.
		 */
		indexOf : function( arr, element ) {
			if( Array.prototype.indexOf ) {
				return arr.indexOf( element );
				
			} else {
				for( var i = 0, len = arr.length; i < len; i++ ) {
					if( arr[ i ] === element ) return i;
				}
				return -1;
			}
		},
		
		
		
		/**
		 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called
		 * with a regular expression that contains capturing parenthesis.
		 * 
		 * For example:
		 * 
		 *     // Modern browsers: 
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]
		 *     
		 *     // Old IE (including IE8):
		 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]
		 *     
		 * This method emulates the functionality of modern browsers for the old IE case.
		 * 
		 * @param {String} str The string to split.
		 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting
		 *   character(s) will be spliced into the array, as in the "modern browsers" example in the 
		 *   description of this method. 
		 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.
		 *   Note #2: for simplicity's sake, the regular expression does not need 
		 *   to contain capturing parenthesis - it will be assumed that any match has them.
		 * @return {String[]} The split array of strings, with the splitting character(s) included.
		 */
		splitAndCapture : function( str, splitRegex ) {
			if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );
			
			var result = [],
			    lastIdx = 0,
			    match;
			
			while( match = splitRegex.exec( str ) ) {
				result.push( str.substring( lastIdx, match.index ) );
				result.push( match[ 0 ] );  // push the splitting char(s)
				
				lastIdx = match.index + match[ 0 ].length;
			}
			result.push( str.substring( lastIdx ) );
			
			return result;
		}
		
	};
	/*global Autolinker */
	/*jshint boss:true */
	/**
	 * @class Autolinker.HtmlTag
	 * @extends Object
	 * 
	 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.
	 * 
	 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use
	 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.
	 * 
	 * ## Examples
	 * 
	 * Example instantiation:
	 * 
	 *     var tag = new Autolinker.HtmlTag( {
	 *         tagName : 'a',
	 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },
	 *         innerHtml : 'Google'
	 *     } );
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 *     // Individual accessor methods
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 * 
	 * 
	 * Using mutator methods (which may be used in combination with instantiation config properties):
	 * 
	 *     var tag = new Autolinker.HtmlTag();
	 *     tag.setTagName( 'a' );
	 *     tag.setAttr( 'href', 'http://google.com' );
	 *     tag.addClass( 'external-link' );
	 *     tag.setInnerHtml( 'Google' );
	 *     
	 *     tag.getTagName();                 // 'a'
	 *     tag.getAttr( 'href' );            // 'http://google.com'
	 *     tag.hasClass( 'external-link' );  // true
	 *     
	 *     tag.toString();  // <a href="http://google.com" class="external-link">Google</a>
	 *     
	 * 
	 * ## Example use within a {@link Autolinker#replaceFn replaceFn}
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 *     
	 *     
	 * ## Example use with a new tag for the replacement
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = new Autolinker.HtmlTag( {
	 *                 tagName : 'button',
	 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },
	 *                 innerHtml : 'Load URL: ' + match.getAnchorText()
	 *             } );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>
	 */
	Autolinker.HtmlTag = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} tagName
		 * 
		 * The tag name. Ex: 'a', 'button', etc.
		 * 
		 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toString}
		 * is executed.
		 */
		
		/**
		 * @cfg {Object.<String, String>} attrs
		 * 
		 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the
		 * values are the attribute values.
		 */
		
		/**
		 * @cfg {String} innerHtml
		 * 
		 * The inner HTML for the tag. 
		 * 
		 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym 
		 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
		 * if you prefer, but this one is recommended.
		 */
		
		/**
		 * @cfg {String} innerHTML
		 * 
		 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version
		 * for acronym names.
		 */
		
		
		/**
		 * @protected
		 * @property {RegExp} whitespaceRegex
		 * 
		 * Regular expression used to match whitespace in a string of CSS classes.
		 */
		whitespaceRegex : /\s+/,
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
			
			this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
		},
		
		
		/**
		 * Sets the tag name that will be used to generate the tag with.
		 * 
		 * @param {String} tagName
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setTagName : function( tagName ) {
			this.tagName = tagName;
			return this;
		},
		
		
		/**
		 * Retrieves the tag name.
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName || "";
		},
		
		
		/**
		 * Sets an attribute on the HtmlTag.
		 * 
		 * @param {String} attrName The attribute name to set.
		 * @param {String} attrValue The attribute value to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttr : function( attrName, attrValue ) {
			var tagAttrs = this.getAttrs();
			tagAttrs[ attrName ] = attrValue;
			
			return this;
		},
		
		
		/**
		 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.
		 * 
		 * @param {String} name The attribute name to retrieve.
		 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.
		 */
		getAttr : function( attrName ) {
			return this.getAttrs()[ attrName ];
		},
		
		
		/**
		 * Sets one or more attributes on the HtmlTag.
		 * 
		 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setAttrs : function( attrs ) {
			var tagAttrs = this.getAttrs();
			Autolinker.Util.assign( tagAttrs, attrs );
			
			return this;
		},
		
		
		/**
		 * Retrieves the attributes Object (map) for the HtmlTag.
		 * 
		 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.
		 */
		getAttrs : function() {
			return this.attrs || ( this.attrs = {} );
		},
		
		
		/**
		 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setClass : function( cssClass ) {
			return this.setAttr( 'class', cssClass );
		},
		
		
		/**
		 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to add.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		addClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    newClasses = cssClass.split( whitespaceRegex ),
			    newClass;
			
			while( newClass = newClasses.shift() ) {
				if( indexOf( classes, newClass ) === -1 ) {
					classes.push( newClass );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to remove one or more CSS classes from the HtmlTag.
		 * 
		 * @param {String} cssClass One or more space-separated CSS classes to remove.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		removeClass : function( cssClass ) {
			var classAttr = this.getClass(),
			    whitespaceRegex = this.whitespaceRegex,
			    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below
			    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),
			    removeClasses = cssClass.split( whitespaceRegex ),
			    removeClass;
			
			while( classes.length && ( removeClass = removeClasses.shift() ) ) {
				var idx = indexOf( classes, removeClass );
				if( idx !== -1 ) {
					classes.splice( idx, 1 );
				}
			}
			
			this.getAttrs()[ 'class' ] = classes.join( " " );
			return this;
		},
		
		
		/**
		 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when
		 * there are multiple.
		 * 
		 * @return {String}
		 */
		getClass : function() {
			return this.getAttrs()[ 'class' ] || "";
		},
		
		
		/**
		 * Convenience method to check if the tag has a CSS class or not.
		 * 
		 * @param {String} cssClass The CSS class to check for.
		 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.
		 */
		hasClass : function( cssClass ) {
			return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;
		},
		
		
		/**
		 * Sets the inner HTML for the tag.
		 * 
		 * @param {String} html The inner HTML to set.
		 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.
		 */
		setInnerHtml : function( html ) {
			this.innerHtml = html;
			
			return this;
		},
		
		
		/**
		 * Retrieves the inner HTML for the tag.
		 * 
		 * @return {String}
		 */
		getInnerHtml : function() {
			return this.innerHtml || "";
		},
		
		
		/**
		 * Override of superclass method used to generate the HTML string for the tag.
		 * 
		 * @return {String}
		 */
		toString : function() {
			var tagName = this.getTagName(),
			    attrsStr = this.buildAttrsStr();
			
			attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes
			
			return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );
		},
		
		
		/**
		 * Support method for {@link #toString}, returns the string space-separated key="value" pairs, used to populate 
		 * the stringified HtmlTag.
		 * 
		 * @protected
		 * @return {String} Example return: `attr1="value1" attr2="value2"`
		 */
		buildAttrsStr : function() {
			if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string
			
			var attrs = this.getAttrs(),
			    attrsArr = [];
			
			for( var prop in attrs ) {
				if( attrs.hasOwnProperty( prop ) ) {
					attrsArr.push( prop + '="' + attrs[ prop ] + '"' );
				}
			}
			return attrsArr.join( " " );
		}
		
	} );
	/*global Autolinker */
	/*jshint sub:true */
	/**
	 * @protected
	 * @class Autolinker.AnchorTagBuilder
	 * @extends Object
	 * 
	 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is found.
	 * 
	 * Normally this class is instantiated, configured, and used internally by an {@link Autolinker} instance, but may 
	 * actually be retrieved in a {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag} instances
	 * which may be modified before returning from the {@link Autolinker#replaceFn replaceFn}. For example:
	 * 
	 *     var html = Autolinker.link( "Test google.com", {
	 *         replaceFn : function( autolinker, match ) {
	 *             var tag = autolinker.getTagBuilder().build( match );  // returns an {@link Autolinker.HtmlTag} instance
	 *             tag.setAttr( 'rel', 'nofollow' );
	 *             
	 *             return tag;
	 *         }
	 *     } );
	 *     
	 *     // generated html:
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>
	 */
	Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} newWindow
		 * @inheritdoc Autolinker#newWindow
		 */
		
		/**
		 * @cfg {Number} truncate
		 * @inheritdoc Autolinker#truncate
		 */
		
		/**
		 * @cfg {String} className
		 * @inheritdoc Autolinker#className
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
		
		
		/**
		 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the matched URL/email/Twitter text,
		 * via its `match` object.
		 * 
		 * @param {Autolinker.match.Match} match The Match instance to generate an anchor tag from.
		 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.
		 */
		build : function( match ) {
			var tag = new Autolinker.HtmlTag( {
				tagName   : 'a',
				attrs     : this.createAttrs( match.getType(), match.getAnchorHref() ),
				innerHtml : this.processAnchorText( match.getAnchorText() )
			} );
			
			return tag;
		},
		
		
		/**
		 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;) tag being generated.
		 * 
		 * @protected
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @param {String} href The href for the anchor tag.
		 * @return {Object} A key/value Object (map) of the anchor tag's attributes. 
		 */
		createAttrs : function( matchType, anchorHref ) {
			var attrs = {
				'href' : anchorHref  // we'll always have the `href` attribute
			};
			
			var cssClass = this.createCssClass( matchType );
			if( cssClass ) {
				attrs[ 'class' ] = cssClass;
			}
			if( this.newWindow ) {
				attrs[ 'target' ] = "_blank";
			}
			
			return attrs;
		},
		
		
		/**
		 * Creates the CSS class that will be used for a given anchor tag, based on the `matchType` and the {@link #className}
		 * config.
		 * 
		 * @private
		 * @param {"url"/"email"/"twitter"} matchType The type of match that an anchor tag is being generated for.
		 * @return {String} The CSS class string for the link. Example return: "myLink myLink-url". If no {@link #className}
		 *   was configured, returns an empty string.
		 */
		createCssClass : function( matchType ) {
			var className = this.className;
			
			if( !className ) 
				return "";
			else
				return className + " " + className + "-" + matchType;  // ex: "myLink myLink-url", "myLink myLink-email", or "myLink myLink-twitter"
		},
		
		
		/**
		 * Processes the `anchorText` by truncating the text according to the {@link #truncate} config.
		 * 
		 * @private
		 * @param {String} anchorText The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The processed `anchorText`.
		 */
		processAnchorText : function( anchorText ) {
			anchorText = this.doTruncate( anchorText );
			
			return anchorText;
		},
		
		
		/**
		 * Performs the truncation of the `anchorText`, if the `anchorText` is longer than the {@link #truncate} option.
		 * Truncates the text to 2 characters fewer than the {@link #truncate} option, and adds ".." to the end.
		 * 
		 * @private
		 * @param {String} text The anchor tag's text (i.e. what will be displayed).
		 * @return {String} The truncated anchor text.
		 */
		doTruncate : function( anchorText ) {
			return Autolinker.Util.ellipsis( anchorText, this.truncate || Number.POSITIVE_INFINITY );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.htmlParser.HtmlParser
	 * @extends Object
	 * 
	 * An HTML parser implementation which simply walks an HTML string and returns an array of 
	 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.
	 * 
	 * Autolinker uses this to only link URLs/emails/Twitter handles within text nodes, effectively ignoring / "walking
	 * around" HTML tags.
	 */
	Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} htmlRegex
		 * 
		 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and
		 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.
		 * 
		 * Capturing groups:
		 * 
		 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.
		 * 2. If it is an end tag, this group will have the '/'.
		 * 3. The tag name for all tags (other than the &lt;!DOCTYPE&gt; tag)
		 */
		htmlRegex : (function() {
			var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
			    attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
			    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
			    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
			
			return new RegExp( [
				// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
				'(?:',
					'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',  // one or more whitespace chars before an attribute
							
							// Either:
							// A. attr="value", or 
							// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">) 
							'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',
						')*',
					'>',
				')',
				
				'|',
				
				// All other HTML tags (i.e. tags that are not <!DOCTYPE>)
				'(?:',
					'<(/)?',  // Beginning of a tag. Either '<' for a start tag, or '</' for an end tag. 
					          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
				
						// *** Capturing Group 3 - The tag name
						'(' + tagNameRegex.source + ')',
						
						// Zero or more attributes following the tag name
						'(?:',
							'\\s+',                // one or more whitespace chars before an attribute
							nameEqualsValueRegex,  // attr="value" (with optional ="value" part)
						')*',
						
						'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'
					'>',
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} htmlCharacterEntitiesRegex
		 *
		 * The regular expression that matches common HTML character entities.
		 * 
		 * Ignoring &amp; as it could be part of a query string -- handling it separately.
		 */
		htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,
		
		
		/**
		 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes} to represent
		 * the HTML structure of the input string. 
		 * 
		 * @param {String} html The HTML to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]}
		 */
		parse : function( html ) {
			var htmlRegex = this.htmlRegex,
			    currentResult,
			    lastIndex = 0,
			    textAndEntityNodes,
			    nodes = [];  // will be the result of the method
			
			while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {
				var tagText = currentResult[ 0 ],
				    tagName = currentResult[ 1 ] || currentResult[ 3 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img") 
				    isClosingTag = !!currentResult[ 2 ],
				    inBetweenTagsText = html.substring( lastIndex, currentResult.index );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( inBetweenTagsText ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( inBetweenTagsText );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
				
				// Push the ElementNode
				nodes.push( this.createElementNode( tagText, tagName, isClosingTag ) );
				
				lastIndex = currentResult.index + tagText.length;
			}
			
			// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
			if( lastIndex < html.length ) {
				var text = html.substring( lastIndex );
				
				// Push TextNodes and EntityNodes for any text found between tags
				if( text ) {
					textAndEntityNodes = this.parseTextAndEntityNodes( text );
					nodes.push.apply( nodes, textAndEntityNodes );
				}
			}
			
			return nodes;
		},
		
		
		/**
		 * Parses text and HTML entity nodes from a given string. The input string should not have any HTML tags (elements)
		 * within it.
		 * 
		 * @private
		 * @param {String} text The text to parse.
		 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to represent the 
		 *   {@link Autolinker.htmlParser.TextNode TextNodes} and {@link Autolinker.htmlParser.EntityNode EntityNodes} found.
		 */
		parseTextAndEntityNodes : function( text ) {
			var nodes = [],
			    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
			
			// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode
			// For example: an input `text` of "Test &quot;this&quot; today" would turn into the 
			//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]
			for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {
				var textToken = textAndEntityTokens[ i ],
				    entityToken = textAndEntityTokens[ i + 1 ];
				
				if( textToken ) nodes.push( this.createTextNode( textToken ) );
				if( entityToken ) nodes.push( this.createEntityNode( entityToken ) );
			}
			return nodes;
		},
		
		
		/**
		 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.
		 * 
		 * @private
		 * @param {String} tagText The full text of the tag (element) that was matched, including its attributes.
		 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would be passed to this method as "img".
		 * @param {Boolean} isClosingTag `true` if it's a closing tag, false otherwise.
		 * @return {Autolinker.htmlParser.ElementNode}
		 */
		createElementNode : function( tagText, tagName, isClosingTag ) {
			return new Autolinker.htmlParser.ElementNode( {
				text    : tagText,
				tagName : tagName.toLowerCase(),
				closing : isClosingTag
			} );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched for the HTML entity (such as '&amp;nbsp;').
		 * @return {Autolinker.htmlParser.EntityNode}
		 */
		createEntityNode : function( text ) {
			return new Autolinker.htmlParser.EntityNode( { text: text } );
		},
		
		
		/**
		 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.
		 * 
		 * @private
		 * @param {String} text The text that was matched.
		 * @return {Autolinker.htmlParser.TextNode}
		 */
		createTextNode : function( text ) {
			return new Autolinker.htmlParser.TextNode( { text: text } );
		}
		
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML node found in an input string. An HTML node is one of the following:
	 * 
	 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents HTML tags.
	 * 2. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text outside or within HTML tags.
	 * 3. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents one of the known HTML
	 *    entities that Autolinker looks for. This includes common ones such as &amp;quot; and &amp;nbsp;
	 */
	Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} text (required)
		 * 
		 * The original text that was matched for the HtmlNode. 
		 * 
		 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode}, this will be the tag's
		 *   text.
		 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this will be the text itself.
		 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode}, this will be the text of
		 *   the HTML entity.
		 */
		text : "",
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
	
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Retrieves the {@link #text} for the HtmlNode.
		 * 
		 * @return {String}
		 */
		getText : function() {
			return this.text;
		}
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.ElementNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * @cfg {String} tagName (required)
		 * 
		 * The name of the tag that was matched.
		 */
		tagName : '',
		
		/**
		 * @cfg {Boolean} closing (required)
		 * 
		 * `true` if the element (tag) is a closing tag, `false` if its an opening tag.
		 */
		closing : false,
	
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'element';
		},
		
	
		/**
		 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag, returns "img".
		 * 
		 * @return {String}
		 */
		getTagName : function() {
			return this.tagName;
		},
		
		
		/**
		 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt; returns
		 * `false`, while &lt;/div&gt; returns `true`.
		 * 
		 * @return {Boolean}
		 */
		isClosing : function() {
			return this.closing;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.EntityNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText} method.
	 * 
	 * Note that this class will only be returned from the HtmlParser for the set of checked HTML entity nodes 
	 * defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'entity';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.htmlParser.TextNode
	 * @extends Autolinker.htmlParser.HtmlNode
	 * 
	 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.
	 * 
	 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more details.
	 */
	Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {
		
		/**
		 * Returns a string name for the type of node that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'text';
		}
		
	} );
	/*global Autolinker */
	/**
	 * @private
	 * @class Autolinker.matchParser.MatchParser
	 * @extends Object
	 * 
	 * Used by Autolinker to parse {@link #urls URLs}, {@link #emails email addresses}, and {@link #twitter Twitter handles}, 
	 * given an input string of text.
	 * 
	 * The MatchParser is fed a non-HTML string in order to search out URLs, email addresses and Twitter handles. Autolinker
	 * first uses the {@link HtmlParser} to "walk around" HTML tags, and then the text around the HTML tags is passed into
	 * the MatchParser in order to find the actual matches.
	 */
	Autolinker.matchParser.MatchParser = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {Boolean} urls
		 * 
		 * `true` if miscellaneous URLs should be automatically linked, `false` if they should not be.
		 */
		urls : true,
		
		/**
		 * @cfg {Boolean} email
		 * 
		 * `true` if email addresses should be automatically linked, `false` if they should not be.
		 */
		email : true,
		
		/**
		 * @cfg {Boolean} twitter
		 * 
		 * `true` if Twitter handles ("@example") should be automatically linked, `false` if they should not be.
		 */
		twitter : true,
		
		/**
		 * @cfg {Boolean} stripPrefix
		 * 
		 * `true` if 'http://' or 'https://' and/or the 'www.' should be stripped from the beginning of URL links' text
		 * in {@link Autolinker.match.Url URL matches}, `false` otherwise.
		 * 
		 * TODO: Handle this before a URL Match object is instantiated.
		 */
		stripPrefix : true,
		
		
		/**
		 * @private
		 * @property {RegExp} matcherRegex
		 * 
		 * The regular expression that matches URLs, email addresses, and Twitter handles.
		 * 
		 * This regular expression has the following capturing groups:
		 * 
		 * 1. Group that is used to determine if there is a Twitter handle match (i.e. \@someTwitterUser). Simply check for its 
		 *    existence to determine if there is a Twitter handle match. The next couple of capturing groups give information 
		 *    about the Twitter handle match.
		 * 2. The whitespace character before the \@sign in a Twitter handle. This is needed because there are no lookbehinds in
		 *    JS regular expressions, and can be used to reconstruct the original string in a replace().
		 * 3. The Twitter handle itself in a Twitter match. If the match is '@someTwitterUser', the handle is 'someTwitterUser'.
		 * 4. Group that matches an email address. Used to determine if the match is an email address, as well as holding the full 
		 *    address. Ex: 'me@my.com'
		 * 5. Group that matches a URL in the input text. Ex: 'http://google.com', 'www.google.com', or just 'google.com'.
		 *    This also includes a path, url parameters, or hash anchors. Ex: google.com/path/to/file?q1=1&q2=2#myAnchor
		 * 6. Group that matches a protocol URL (i.e. 'http://google.com'). This is used to match protocol URLs with just a single
		 *    word, like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * 7. A protocol-relative ('//') match for the case of a 'www.' prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. We need to know the character before the '//' in order to determine if it is a valid match
		 *    or the // was in a string we don't want to auto-link.
		 * 8. A protocol-relative ('//') match for the case of a known TLD prefixed URL. Will be an empty string if it is not a 
		 *    protocol-relative match. See #6 for more info. 
		 */
		matcherRegex : (function() {
			var twitterRegex = /(^|[^\w])@(\w{1,15})/,              // For matching a twitter handle. Ex: @gregory_jacobs
			    
			    emailRegex = /(?:[\-;:&=\+\$,\w\.]+@)/,             // something@ for email addresses (a.k.a. local-part)
			    
			    protocolRegex = /(?:[A-Za-z][-.+A-Za-z0-9]+:(?![A-Za-z][-.+A-Za-z0-9]+:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
			    wwwRegex = /(?:www\.)/,                             // starting with 'www.'
			    domainNameRegex = /[A-Za-z0-9\.\-]*[A-Za-z0-9\-]/,  // anything looking at all like a domain, non-unicode domains, not ending in a period
			    tldRegex = /\.(?:international|construction|contractors|enterprises|photography|productions|foundation|immobilien|industries|management|properties|technology|christmas|community|directory|education|equipment|institute|marketing|solutions|vacations|bargains|boutique|builders|catering|cleaning|clothing|computer|democrat|diamonds|graphics|holdings|lighting|partners|plumbing|supplies|training|ventures|academy|careers|company|cruises|domains|exposed|flights|florist|gallery|guitars|holiday|kitchen|neustar|okinawa|recipes|rentals|reviews|shiksha|singles|support|systems|agency|berlin|camera|center|coffee|condos|dating|estate|events|expert|futbol|kaufen|luxury|maison|monash|museum|nagoya|photos|repair|report|social|supply|tattoo|tienda|travel|viajes|villas|vision|voting|voyage|actor|build|cards|cheap|codes|dance|email|glass|house|mango|ninja|parts|photo|shoes|solar|today|tokyo|tools|watch|works|aero|arpa|asia|best|bike|blue|buzz|camp|club|cool|coop|farm|fish|gift|guru|info|jobs|kiwi|kred|land|limo|link|menu|mobi|moda|name|pics|pink|post|qpon|rich|ruhr|sexy|tips|vote|voto|wang|wien|wiki|zone|bar|bid|biz|cab|cat|ceo|com|edu|gov|int|kim|mil|net|onl|org|pro|pub|red|tel|uno|wed|xxx|xyz|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)\b/,   // match our known top level domains (TLDs)
			    
			    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"
			    // http://blog.codinghorror.com/the-problem-with-urls/
			    urlSuffixRegex = /[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]?!:,.;]*[\-A-Za-z0-9+&@#\/%=~_()|'$*\[\]]/;
			
			return new RegExp( [
				'(',  // *** Capturing group $1, which can be used to check for a twitter handle match. Use group $3 for the actual twitter handle though. $2 may be used to reconstruct the original string in a replace() 
					// *** Capturing group $2, which matches the whitespace character before the '@' sign (needed because of no lookbehinds), and 
					// *** Capturing group $3, which matches the actual twitter handle
					twitterRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $4, which is used to determine an email match
					emailRegex.source,
					domainNameRegex.source,
					tldRegex.source,
				')',
				
				'|',
				
				'(',  // *** Capturing group $5, which is used to match a URL
					'(?:', // parens to cover match for protocol (optional), and domain
						'(',  // *** Capturing group $6, for a protocol-prefixed url (ex: http://google.com)
							protocolRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for a 'www.' prefixed url (ex: www.google.com)
							'(.?//)?',  // *** Capturing group $7 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							wwwRegex.source,
							domainNameRegex.source,
						')',
						
						'|',
						
						'(?:',  // non-capturing paren for known a TLD url (ex: google.com)
							'(.?//)?',  // *** Capturing group $8 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character
							domainNameRegex.source,
							tldRegex.source,
						')',
					')',
					
					'(?:' + urlSuffixRegex.source + ')?',  // match for path, query string, and/or hash anchor - optional
				')'
			].join( "" ), 'gi' );
		} )(),
		
		/**
		 * @private
		 * @property {RegExp} charBeforeProtocolRelMatchRegex
		 * 
		 * The regular expression used to retrieve the character before a protocol-relative URL match.
		 * 
		 * This is used in conjunction with the {@link #matcherRegex}, which needs to grab the character before a protocol-relative
		 * '//' due to the lack of a negative look-behind in JavaScript regular expressions. The character before the match is stripped
		 * from the URL.
		 */
		charBeforeProtocolRelMatchRegex : /^(.)?\/\//,
		
		/**
		 * @private
		 * @property {Autolinker.MatchValidator} matchValidator
		 * 
		 * The MatchValidator object, used to filter out any false positives from the {@link #matcherRegex}. See
		 * {@link Autolinker.MatchValidator} for details.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		
			this.matchValidator = new Autolinker.MatchValidator();
		},
		
		
		/**
		 * Parses the input `text` to search for URLs/emails/Twitter handles, and calls the `replaceFn`
		 * to allow replacements of the matches. Returns the `text` with matches replaced.
		 * 
		 * @param {String} text The text to search and repace matches in.
		 * @param {Function} replaceFn The iterator function to handle the replacements. The function takes a
		 *   single argument, a {@link Autolinker.match.Match} object, and should return the text that should
		 *   make the replacement.
		 * @param {Object} [contextObj=window] The context object ("scope") to run the `replaceFn` in.
		 * @return {String}
		 */
		replace : function( text, replaceFn, contextObj ) {
			var me = this;  // for closure
			
			return text.replace( this.matcherRegex, function( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 ) {
				var matchDescObj = me.processCandidateMatch( matchStr, $1, $2, $3, $4, $5, $6, $7, $8 );  // "match description" object
				
				// Return out with no changes for match types that are disabled (url, email, twitter), or for matches that are 
				// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
				if( !matchDescObj ) {
					return matchStr;
					
				} else {
					// Generate replacement text for the match from the `replaceFn`
					var replaceStr = replaceFn.call( contextObj, matchDescObj.match );
					return matchDescObj.prefixStr + replaceStr + matchDescObj.suffixStr;
				}
			} );
		},
		
		
		/**
		 * Processes a candidate match from the {@link #matcherRegex}. 
		 * 
		 * Not all matches found by the regex are actual URL/email/Twitter matches, as determined by the {@link #matchValidator}. In
		 * this case, the method returns `null`. Otherwise, a valid Object with `prefixStr`, `match`, and `suffixStr` is returned.
		 * 
		 * @private
		 * @param {String} matchStr The full match that was found by the {@link #matcherRegex}.
		 * @param {String} twitterMatch The matched text of a Twitter handle, if the match is a Twitter match.
		 * @param {String} twitterHandlePrefixWhitespaceChar The whitespace char before the @ sign in a Twitter handle match. This 
		 *   is needed because of no lookbehinds in JS regexes, and is need to re-include the character for the anchor tag replacement.
		 * @param {String} twitterHandle The actual Twitter user (i.e the word after the @ sign in a Twitter match).
		 * @param {String} emailAddressMatch The matched email address for an email address match.
		 * @param {String} urlMatch The matched URL string for a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} wwwProtocolRelativeMatch The '//' for a protocol-relative match from a 'www' url, with the character that 
		 *   comes before the '//'.
		 * @param {String} tldProtocolRelativeMatch The '//' for a protocol-relative match from a TLD (top level domain) match, with 
		 *   the character that comes before the '//'.
		 *   
		 * @return {Object} A "match description object". This will be `null` if the match was invalid, or if a match type is disabled.
		 *   Otherwise, this will be an Object (map) with the following properties:
		 * @return {String} return.prefixStr The char(s) that should be prepended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {String} return.suffixStr The char(s) that should be appended to the replacement string. These are char(s) that
		 *   were needed to be included from the regex match that were ignored by processing code, and should be re-inserted into 
		 *   the replacement stream.
		 * @return {Autolinker.match.Match} return.match The Match object that represents the match that was found.
		 */
		processCandidateMatch : function( 
			matchStr, twitterMatch, twitterHandlePrefixWhitespaceChar, twitterHandle, 
			emailAddressMatch, urlMatch, protocolUrlMatch, wwwProtocolRelativeMatch, tldProtocolRelativeMatch
		) {
			// Note: The `matchStr` variable wil be fixed up to remove characters that are no longer needed (which will 
			// be added to `prefixStr` and `suffixStr`).
			
			var protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,
			    match,  // Will be an Autolinker.match.Match object
			    
			    prefixStr = "",       // A string to use to prefix the anchor tag that is created. This is needed for the Twitter handle match
			    suffixStr = "";       // A string to suffix the anchor tag that is created. This is used if there is a trailing parenthesis that should not be auto-linked.
			    
			
			// Return out with `null` for match types that are disabled (url, email, twitter), or for matches that are 
			// invalid (false positives from the matcherRegex, which can't use look-behinds since they are unavailable in JS).
			if(
				( twitterMatch && !this.twitter ) || ( emailAddressMatch && !this.email ) || ( urlMatch && !this.urls ) ||
				!this.matchValidator.isValidMatch( urlMatch, protocolUrlMatch, protocolRelativeMatch ) 
			) {
				return null;
			}
			
			// Handle a closing parenthesis at the end of the match, and exclude it if there is not a matching open parenthesis
			// in the match itself. 
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"
				suffixStr = ")";  // this will be added after the generated <a> tag
			}
			
			
			if( emailAddressMatch ) {
				match = new Autolinker.match.Email( { matchedText: matchStr, email: emailAddressMatch } );
				
			} else if( twitterMatch ) {
				// fix up the `matchStr` if there was a preceding whitespace char, which was needed to determine the match 
				// itself (since there are no look-behinds in JS regexes)
				if( twitterHandlePrefixWhitespaceChar ) {
					prefixStr = twitterHandlePrefixWhitespaceChar;
					matchStr = matchStr.slice( 1 );  // remove the prefixed whitespace char from the match
				}
				match = new Autolinker.match.Twitter( { matchedText: matchStr, twitterHandle: twitterHandle } );
				
			} else {  // url match
				// If it's a protocol-relative '//' match, remove the character before the '//' (which the matcherRegex needed
				// to match due to the lack of a negative look-behind in JavaScript regular expressions)
				if( protocolRelativeMatch ) {
					var charBeforeMatch = protocolRelativeMatch.match( this.charBeforeProtocolRelMatchRegex )[ 1 ] || "";
					
					if( charBeforeMatch ) {  // fix up the `matchStr` if there was a preceding char before a protocol-relative match, which was needed to determine the match itself (since there are no look-behinds in JS regexes)
						prefixStr = charBeforeMatch;
						matchStr = matchStr.slice( 1 );  // remove the prefixed char from the match
					}
				}
				
				match = new Autolinker.match.Url( {
					matchedText : matchStr,
					url : matchStr,
					protocolUrlMatch : !!protocolUrlMatch,
					protocolRelativeMatch : !!protocolRelativeMatch,
					stripPrefix : this.stripPrefix
				} );
			}
			
			return {
				prefixStr : prefixStr,
				suffixStr : suffixStr,
				match     : match
			};
		},
		
		
		/**
		 * Determines if a match found has an unmatched closing parenthesis. If so, this parenthesis will be removed
		 * from the match itself, and appended after the generated anchor tag in {@link #processTextNode}.
		 * 
		 * A match may have an extra closing parenthesis at the end of the match because the regular expression must include parenthesis
		 * for URLs such as "wikipedia.com/something_(disambiguation)", which should be auto-linked. 
		 * 
		 * However, an extra parenthesis *will* be included when the URL itself is wrapped in parenthesis, such as in the case of
		 * "(wikipedia.com/something_(disambiguation))". In this case, the last closing parenthesis should *not* be part of the URL 
		 * itself, and this method will return `true`.
		 * 
		 * @private
		 * @param {String} matchStr The full match string from the {@link #matcherRegex}.
		 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at the end of the `matchStr`, `false` otherwise.
		 */
		matchHasUnbalancedClosingParen : function( matchStr ) {
			var lastChar = matchStr.charAt( matchStr.length - 1 );
			
			if( lastChar === ')' ) {
				var openParensMatch = matchStr.match( /\(/g ),
				    closeParensMatch = matchStr.match( /\)/g ),
				    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,
				    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;
				
				if( numOpenParens < numCloseParens ) {
					return true;
				}
			}
			
			return false;
		}
		
	} );
	/*global Autolinker */
	/*jshint scripturl:true */
	/**
	 * @private
	 * @class Autolinker.MatchValidator
	 * @extends Object
	 * 
	 * Used by Autolinker to filter out false positives from the {@link Autolinker#matcherRegex}.
	 * 
	 * Due to the limitations of regular expressions (including the missing feature of look-behinds in JS regular expressions),
	 * we cannot always determine the validity of a given match. This class applies a bit of additional logic to filter out any
	 * false positives that have been matched by the {@link Autolinker#matcherRegex}.
	 */
	Autolinker.MatchValidator = Autolinker.Util.extend( Object, {
		
		/**
		 * @private
		 * @property {RegExp} invalidProtocolRelMatchRegex
		 * 
		 * The regular expression used to check a potential protocol-relative URL match, coming from the 
		 * {@link Autolinker#matcherRegex}. A protocol-relative URL is, for example, "//yahoo.com"
		 * 
		 * This regular expression checks to see if there is a word character before the '//' match in order to determine if 
		 * we should actually autolink a protocol-relative URL. This is needed because there is no negative look-behind in 
		 * JavaScript regular expressions. 
		 * 
		 * For instance, we want to autolink something like "Go to: //google.com", but we don't want to autolink something 
		 * like "abc//google.com"
		 */
		invalidProtocolRelMatchRegex : /^[\w]\/\//,
		
		/**
		 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'
		 * 
		 * @private
		 * @property {RegExp} hasFullProtocolRegex
		 */
		hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]+:\/\//,
		
		/**
		 * Regex to find the URI scheme, such as 'mailto:'.
		 * 
		 * This is used to filter out 'javascript:' and 'vbscript:' schemes.
		 * 
		 * @private
		 * @property {RegExp} uriSchemeRegex
		 */
		uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]+:/,
		
		/**
		 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')
		 * 
		 * @private
		 * @property {RegExp} hasWordCharAfterProtocolRegex
		 */
		hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z]/,
		
		
		/**
		 * Determines if a given match found by {@link Autolinker#processTextNode} is valid. Will return `false` for:
		 * 
		 * 1) URL matches which do not have at least have one period ('.') in the domain name (effectively skipping over 
		 *    matches like "abc:def"). However, URL matches with a protocol will be allowed (ex: 'http://localhost')
		 * 2) URL matches which do not have at least one word character in the domain name (effectively skipping over
		 *    matches like "git:1.0").
		 * 3) A protocol-relative url match (a URL beginning with '//') whose previous character is a word character 
		 *    (effectively skipping over strings like "abc//google.com")
		 * 
		 * Otherwise, returns `true`.
		 * 
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if the match given is valid and should be processed, or `false` if the match is invalid and/or 
		 *   should just not be processed.
		 */
		isValidMatch : function( urlMatch, protocolUrlMatch, protocolRelativeMatch ) {
			if(
				( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||
				this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||       // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
				this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) ||  // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
				this.isInvalidProtocolRelativeMatch( protocolRelativeMatch )                 // A protocol-relative match which has a word character in front of it (so we can skip something like "abc//google.com")
			) {
				return false;
			}
			
			return true;
		},
		
		
		/**
		 * Determines if the URI scheme is a valid scheme to be autolinked. Returns `false` if the scheme is 
		 * 'javascript:' or 'vbscript:'
		 * 
		 * @private
		 * @param {String} uriSchemeMatch The match URL string for a full URI scheme match. Ex: 'http://yahoo.com' 
		 *   or 'mailto:a@a.com'.
		 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.
		 */
		isValidUriScheme : function( uriSchemeMatch ) {
			var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();
			
			return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );
		},
		
		
		/**
		 * Determines if a URL match does not have either:
		 * 
		 * a) a full protocol (i.e. 'http://'), or
		 * b) at least one dot ('.') in the domain name (for a non-full-protocol match).
		 * 
		 * Either situation is considered an invalid URL (ex: 'git:d' does not have either the '://' part, or at least one dot
		 * in the domain name. If the match was 'git:abc.com', we would consider this valid.)
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to match
		 *   something like 'http://localhost', where we won't double check that the domain name has at least one '.' in it.
		 * @return {Boolean} `true` if the URL match does not have a full protocol, or at least one dot ('.') in a non-full-protocol
		 *   match.
		 */
		urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {
			return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
		},
		
		
		/**
		 * Determines if a URL match does not have at least one word character after the protocol (i.e. in the domain name).
		 * 
		 * At least one letter character must exist in the domain name after a protocol match. Ex: skip over something 
		 * like "git:1.0"
		 * 
		 * @private
		 * @param {String} urlMatch The matched URL, if there was one. Will be an empty string if the match is not a URL match.
		 * @param {String} protocolUrlMatch The match URL string for a protocol match. Ex: 'http://yahoo.com'. This is used to
		 *   know whether or not we have a protocol in the URL string, in order to check for a word character after the protocol
		 *   separator (':').
		 * @return {Boolean} `true` if the URL match does not have at least one word character in it after the protocol, `false`
		 *   otherwise.
		 */
		urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {
			if( urlMatch && protocolUrlMatch ) {
				return !this.hasWordCharAfterProtocolRegex.test( urlMatch );
			} else {
				return false;
			}
		},
		
		
		/**
		 * Determines if a protocol-relative match is an invalid one. This method returns `true` if there is a `protocolRelativeMatch`,
		 * and that match contains a word character before the '//' (i.e. it must contain whitespace or nothing before the '//' in
		 * order to be considered valid).
		 * 
		 * @private
		 * @param {String} protocolRelativeMatch The protocol-relative string for a URL match (i.e. '//'), possibly with a preceding
		 *   character (ex, a space, such as: ' //', or a letter, such as: 'a//'). The match is invalid if there is a word character
		 *   preceding the '//'.
		 * @return {Boolean} `true` if it is an invalid protocol-relative match, `false` otherwise.
		 */
		isInvalidProtocolRelativeMatch : function( protocolRelativeMatch ) {
			return ( !!protocolRelativeMatch && this.invalidProtocolRelMatchRegex.test( protocolRelativeMatch ) );
		}
	
	} );
	/*global Autolinker */
	/**
	 * @abstract
	 * @class Autolinker.match.Match
	 * 
	 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a 
	 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.
	 * 
	 * For example:
	 * 
	 *     var input = "...";  // string with URLs, Email Addresses, and Twitter Handles
	 *     
	 *     var linkedText = Autolinker.link( input, {
	 *         replaceFn : function( autolinker, match ) {
	 *             console.log( "href = ", match.getAnchorHref() );
	 *             console.log( "text = ", match.getAnchorText() );
	 *         
	 *             switch( match.getType() ) {
	 *                 case 'url' : 
	 *                     console.log( "url: ", match.getUrl() );
	 *                     
	 *                 case 'email' :
	 *                     console.log( "email: ", match.getEmail() );
	 *                     
	 *                 case 'twitter' :
	 *                     console.log( "twitter: ", match.getTwitterHandle() );
	 *             }
	 *         }
	 *     } );
	 *     
	 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.
	 */
	Autolinker.match.Match = Autolinker.Util.extend( Object, {
		
		/**
		 * @cfg {String} matchedText (required)
		 * 
		 * The original text that was matched.
		 */
		
		
		/**
		 * @constructor
		 * @param {Object} cfg The configuration properties for the Match instance, specified in an Object (map).
		 */
		constructor : function( cfg ) {
			Autolinker.Util.assign( this, cfg );
		},
	
		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getType : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the original text that was matched.
		 * 
		 * @return {String}
		 */
		getMatchedText : function() {
			return this.matchedText;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorHref : Autolinker.Util.abstractMethod,
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @abstract
		 * @return {String}
		 */
		getAnchorText : Autolinker.Util.abstractMethod
	
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Email
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Email match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} email (required)
		 * 
		 * The email address that was matched.
		 */
		
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'email';
		},
		
		
		/**
		 * Returns the email address that was matched.
		 * 
		 * @return {String}
		 */
		getEmail : function() {
			return this.email;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'mailto:' + this.email;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return this.email;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Twitter
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Twitter match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Twitter = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} twitterHandle (required)
		 * 
		 * The Twitter handle that was matched.
		 */
		
	
		/**
		 * Returns the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'twitter';
		},
		
		
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getTwitterHandle : function() {
			return this.twitterHandle;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			return 'https://twitter.com/' + this.twitterHandle;
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			return '@' + this.twitterHandle;
		}
		
	} );
	/*global Autolinker */
	/**
	 * @class Autolinker.match.Url
	 * @extends Autolinker.match.Match
	 * 
	 * Represents a Url match found in an input string which should be Autolinked.
	 * 
	 * See this class's superclass ({@link Autolinker.match.Match}) for more details.
	 */
	Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {
		
		/**
		 * @cfg {String} url (required)
		 * 
		 * The url that was matched.
		 */
		
		/**
		 * @cfg {Boolean} protocolUrlMatch (required)
		 * 
		 * `true` if the URL is a match which already has a protocol (i.e. 'http://'), `false` if the match was from a 'www' or
		 * known TLD match.
		 */
		
		/**
		 * @cfg {Boolean} protocolRelativeMatch (required)
		 * 
		 * `true` if the URL is a protocol-relative match. A protocol-relative match is a URL that starts with '//',
		 * and will be either http:// or https:// based on the protocol that the site is loaded under.
		 */
		
		/**
		 * @cfg {Boolean} stripPrefix (required)
		 * @inheritdoc Autolinker#stripPrefix
		 */
		
	
		/**
		 * @private
		 * @property {RegExp} urlPrefixRegex
		 * 
		 * A regular expression used to remove the 'http://' or 'https://' and/or the 'www.' from URLs.
		 */
		urlPrefixRegex: /^(https?:\/\/)?(www\.)?/i,
		
		/**
		 * @private
		 * @property {RegExp} protocolRelativeRegex
		 * 
		 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes
		 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"
		 */
		protocolRelativeRegex : /^\/\//,
		
		/**
		 * @private
		 * @property {Boolean} protocolPrepended
		 * 
		 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the
		 * {@link #url} did not have a protocol)
		 */
		protocolPrepended : false,
		
	
		/**
		 * Returns a string name for the type of match that this class represents.
		 * 
		 * @return {String}
		 */
		getType : function() {
			return 'url';
		},
		
		
		/**
		 * Returns the url that was matched, assuming the protocol to be 'http://' if the original
		 * match was missing a protocol.
		 * 
		 * @return {String}
		 */
		getUrl : function() {
			var url = this.url;
			
			// if the url string doesn't begin with a protocol, assume 'http://'
			if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {
				url = this.url = 'http://' + url;
				
				this.protocolPrepended = true;
			}
			
			return url;
		},
		
	
		/**
		 * Returns the anchor href that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorHref : function() {
			var url = this.getUrl();
			
			return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html 
		},
		
		
		/**
		 * Returns the anchor text that should be generated for the match.
		 * 
		 * @return {String}
		 */
		getAnchorText : function() {
			var anchorText = this.getUrl();
			
			if( this.protocolRelativeMatch ) {
				// Strip off any protocol-relative '//' from the anchor text
				anchorText = this.stripProtocolRelativePrefix( anchorText );
			}
			if( this.stripPrefix ) {
				anchorText = this.stripUrlPrefix( anchorText );
			}
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one
			
			return anchorText;
		},
		
		
		// ---------------------------------------
		
		// Utility Functionality
		
		/**
		 * Strips the URL prefix (such as "http://" or "https://") from the given text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   url prefix (such as stripping off "http://")
		 * @return {String} The `anchorText`, with the prefix stripped.
		 */
		stripUrlPrefix : function( text ) {
			return text.replace( this.urlPrefixRegex, '' );
		},
		
		
		/**
		 * Strips any protocol-relative '//' from the anchor text.
		 * 
		 * @private
		 * @param {String} text The text of the anchor that is being generated, for which to strip off the
		 *   protocol-relative prefix (such as stripping off "//")
		 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.
		 */
		stripProtocolRelativePrefix : function( text ) {
			return text.replace( this.protocolRelativeRegex, '' );
		},
		
		
		/**
		 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.
		 * 
		 * @private
		 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing
		 *   slash ('/') that may exist.
		 * @return {String} The `anchorText`, with the trailing slash removed.
		 */
		removeTrailingSlash : function( anchorText ) {
			if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {
				anchorText = anchorText.slice( 0, -1 );
			}
			return anchorText;
		}
		
	} );
	return Autolinker;
	
	}));


/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0RvY3VtZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL34vcmVmbHV4L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FZGl0b3IuanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1ByZXZpZXcuanN4Iiwid2VicGFjazovLy8uL34vcmVmbHV4L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWN0aW9ucy9BcHBBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2FwcC9zdG9yZXMvRG9jdW1lbnRTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmx1eC9zcmMvQWN0aW9uTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmx1eC9zcmMvTGlzdGVuZXJNZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vcmVmbHV4L3NyYy9QdWJsaXNoZXJNZXRob2RzLmpzIiwid2VicGFjazovLy8uL34vcmVmbHV4L3NyYy9TdG9yZU1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL2NyZWF0ZUFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmx1eC9zcmMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL2Nvbm5lY3RGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL0xpc3RlbmVyTWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL2xpc3RlblRvLmpzIiwid2VicGFjazovLy8uL34vcmVmbHV4L3NyYy9saXN0ZW5Ub01hbnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL2pvaW5zLmpzIiwid2VicGFjazovLy8uL34vcmVmbHV4L3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmx1eC9zcmMvS2VlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWZsdXgvc3JjL21peGVyLmpzIiwid2VicGFjazovLy8uL34vcmVmbHV4L3NyYy9iaW5kTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVmbHV4L34vZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZmx1eC9+L25hdGl2ZS1wcm9taXNlLW9ubHkvbnBvLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9wYXJzZXJfY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3BhcnNlcl9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3BhcnNlcl9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2NvbmZpZ3MvZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2NvbmZpZ3MvZnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2NvbmZpZ3MvY29tbW9ubWFyay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2NvbW1vbi9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svc3RhdGVfYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9jb2RlLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svZmVuY2VzLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svYmxvY2txdW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2hyLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2Zvb3Rub3RlLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2xoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaHRtbGJsb2NrLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9kZWZsaXN0LmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svcGFyYWdyYXBoLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvYWJici5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvaW5saW5lLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9mb290bm90ZV90YWlsLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9hYmJyMi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvcmVwbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9zbWFydHF1b3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvbGlua2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9zdGF0ZV9pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9uZXdsaW5lLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2VzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9iYWNrdGlja3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZGVsLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2lucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9tYXJrLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL3N1Yi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9zdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZm9vdG5vdGVfaW5saW5lLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2Zvb3Rub3RlX3JlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9hdXRvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9odG1sdGFnLmpzIiwid2VicGFjazovLy8uL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2NvbW1vbi9odG1sX2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2hlbHBlcnMvcGFyc2VfbGlua19kZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2hlbHBlcnMvcGFyc2VfbGlua190aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2hlbHBlcnMvbm9ybWFsaXplX3JlZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2NvbW1vbi91cmxfc2NoZW1hcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvbGliL2hlbHBlcnMvbm9ybWFsaXplX2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZW1hcmthYmxlL2xpYi9jb21tb24vaHRtbF9yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlbWFya2FibGUvfi9hdXRvbGlua2VyL2Rpc3QvQXV0b2xpbmtlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxLQUFJLEtBQUssR0FBRyxtQkFBTyxDQUFDLENBQU8sQ0FBQztLQUN4QixNQUFNLEdBQUcsbUJBQU8sQ0FBQyxDQUFjLENBQUM7S0FDaEMsTUFBTSxHQUFHLG1CQUFPLENBQUMsRUFBUSxDQUFDOztBQUU5QixLQUFJLFFBQVEsR0FBRyxtQkFBTyxDQUFDLEVBQTJCLENBQUM7S0FDL0MsTUFBTSxHQUFLLG1CQUFPLENBQUMsRUFBeUIsQ0FBQzs7QUFFakQsb0JBQU8sQ0FBQyxFQUFxQixDQUFDOztBQUU5QixLQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFDMUIsU0FBTSxvQkFBRztBQUNQLFlBQ0U7O1NBQU0sU0FBUyxFQUFDLE1BQU07T0FDcEIsb0JBQUMsTUFBTSxDQUFDLFlBQVksRUFBSyxJQUFJLENBQUMsS0FBSyxDQUFJO09BQ3ZDLG9CQUFDLE1BQU0sT0FBRztNQUNMLENBQ1I7SUFDRjtFQUNGLENBQUMsQ0FBQzs7QUFFSCxLQUFJLE1BQU0sR0FDUjtBQUFDLFNBQU0sQ0FBQyxLQUFLO0tBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsR0FBRyxFQUFDLE9BQU8sRUFBRSxHQUFJO0dBQzdDLG9CQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUMsT0FBTyxFQUFFLFFBQVMsR0FBRztFQUU3QyxDQUFDOztBQUVGLE9BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFLO0FBQzdELFFBQUssQ0FBQyxNQUFNLENBQUMsb0JBQUMsT0FBTyxPQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3pDLENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLFdBQVc7QUFDNUM7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JsRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0tBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElB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RUFBQztBQUNEOztBQUVBLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuICAsIFJvdXRlciA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpXG4gICwgUmVmbHV4ID0gcmVxdWlyZSgncmVmbHV4JylcblxudmFyIERvY3VtZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0RvY3VtZW50LmpzeCcpXG4gICwgRm9vdGVyICAgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRm9vdGVyLmpzeCcpXG5cbnJlcXVpcmUoJy4vc3R5bGVzL2luZGV4LnNjc3MnKVxuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPFJvdXRlci5Sb3V0ZUhhbmRsZXIgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn0pO1xuXG52YXIgcm91dGVzID0gKFxuICA8Um91dGVyLlJvdXRlIG5hbWU9XCJhcHBcIiBwYXRoPVwiL1wiIGhhbmRsZXI9e0FwcH0+XG4gICAgPFJvdXRlci5EZWZhdWx0Um91dGUgaGFuZGxlcj17RG9jdW1lbnR9IC8+XG4gIDwvUm91dGVyLlJvdXRlPlxuKTtcblxuUm91dGVyLnJ1bihyb3V0ZXMsIFJvdXRlci5IaXN0b3J5TG9jYXRpb24sIChIYW5kbGVyLCBzdGF0ZSkgPT4ge1xuICBSZWFjdC5yZW5kZXIoPEhhbmRsZXIvPiwgZG9jdW1lbnQuYm9keSk7XG59KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvaW5kZXguanN4XG4gKiovIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEVkaXRvciAgPSByZXF1aXJlKCcuL0VkaXRvci5qc3gnKVxuICAsIFByZXZpZXcgPSByZXF1aXJlKCcuL1ByZXZpZXcuanN4JylcblxudmFyIERvY3VtZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8RWRpdG9yIC8+XG4gICAgICAgIDxQcmV2aWV3IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0RvY3VtZW50LmpzeFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBGb290ZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJfX2NyZWRpdHNcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIENyZWF0ZWQgYnkgQ2hyaXMgS2VhdGhsZXlcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGb290ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvY29tcG9uZW50cy9Gb290ZXIuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYycpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2FwcC9zdHlsZXMvaW5kZXguc2Nzc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQXBwQWN0aW9ucyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQXBwQWN0aW9ucycpXG5cbnZhciBFZGl0b3IgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6ICcnIH1cbiAgfSxcbiAgaGFuZGxlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG5ld1RleHQgPSBlLnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VGV4dCB9KVxuICAgIEFwcEFjdGlvbnMudGV4dFVwZGF0ZShuZXdUZXh0KVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JcIj5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWRpdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvRWRpdG9yLmpzeFxuICoqLyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVmbHV4ID0gcmVxdWlyZSgncmVmbHV4Jyk7XG52YXIgUmVtYXJrYWJsZSA9IHJlcXVpcmUoJ3JlbWFya2FibGUnKVxudmFyIG1kID0gbmV3IFJlbWFya2FibGUoJ2NvbW1vbm1hcmsnKVxuXG52YXIgRG9jdW1lbnRTdG9yZSA9IHJlcXVpcmUoJy4uL3N0b3Jlcy9Eb2N1bWVudFN0b3JlLmpzJylcblxudmFyIFByZXZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1JlZmx1eC5jb25uZWN0KERvY3VtZW50U3RvcmUsIFwidGV4dFwiKV0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRleHQgPSB0aGlzLnN0YXRlLnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdcIj5cbiAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG1kLnJlbmRlcih0ZXh0KX19IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcmV2aWV3O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvUHJldmlldy5qc3hcbiAqKi8iLCJleHBvcnRzLkFjdGlvbk1ldGhvZHMgPSByZXF1aXJlKCcuL0FjdGlvbk1ldGhvZHMnKTtcblxuZXhwb3J0cy5MaXN0ZW5lck1ldGhvZHMgPSByZXF1aXJlKCcuL0xpc3RlbmVyTWV0aG9kcycpO1xuXG5leHBvcnRzLlB1Ymxpc2hlck1ldGhvZHMgPSByZXF1aXJlKCcuL1B1Ymxpc2hlck1ldGhvZHMnKTtcblxuZXhwb3J0cy5TdG9yZU1ldGhvZHMgPSByZXF1aXJlKCcuL1N0b3JlTWV0aG9kcycpO1xuXG5leHBvcnRzLmNyZWF0ZUFjdGlvbiA9IHJlcXVpcmUoJy4vY3JlYXRlQWN0aW9uJyk7XG5cbmV4cG9ydHMuY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7XG5cbmV4cG9ydHMuY29ubmVjdCA9IHJlcXVpcmUoJy4vY29ubmVjdCcpO1xuXG5leHBvcnRzLmNvbm5lY3RGaWx0ZXIgPSByZXF1aXJlKCcuL2Nvbm5lY3RGaWx0ZXInKTtcblxuZXhwb3J0cy5MaXN0ZW5lck1peGluID0gcmVxdWlyZSgnLi9MaXN0ZW5lck1peGluJyk7XG5cbmV4cG9ydHMubGlzdGVuVG8gPSByZXF1aXJlKCcuL2xpc3RlblRvJyk7XG5cbmV4cG9ydHMubGlzdGVuVG9NYW55ID0gcmVxdWlyZSgnLi9saXN0ZW5Ub01hbnknKTtcblxuXG52YXIgbWFrZXIgPSByZXF1aXJlKCcuL2pvaW5zJykuc3RhdGljSm9pbkNyZWF0b3I7XG5cbmV4cG9ydHMuam9pblRyYWlsaW5nID0gZXhwb3J0cy5hbGwgPSBtYWtlcihcImxhc3RcIik7IC8vIFJlZmx1eC5hbGwgYWxpYXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuZXhwb3J0cy5qb2luTGVhZGluZyA9IG1ha2VyKFwiZmlyc3RcIik7XG5cbmV4cG9ydHMuam9pblN0cmljdCA9IG1ha2VyKFwic3RyaWN0XCIpO1xuXG5leHBvcnRzLmpvaW5Db25jYXQgPSBtYWtlcihcImFsbFwiKTtcblxudmFyIF8gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmV4cG9ydHMuRXZlbnRFbWl0dGVyID0gXy5FdmVudEVtaXR0ZXI7XG5cbmV4cG9ydHMuUHJvbWlzZSA9IF8uUHJvbWlzZTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBzZXQgb2YgYWN0aW9uc1xuICpcbiAqIEBwYXJhbSBkZWZpbml0aW9ucyB0aGUgZGVmaW5pdGlvbnMgZm9yIHRoZSBhY3Rpb25zIHRvIGJlIGNyZWF0ZWRcbiAqIEByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGFjdGlvbnMgb2YgY29ycmVzcG9uZGluZyBhY3Rpb24gbmFtZXNcbiAqL1xuZXhwb3J0cy5jcmVhdGVBY3Rpb25zID0gZnVuY3Rpb24oZGVmaW5pdGlvbnMpIHtcbiAgICB2YXIgYWN0aW9ucyA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gZGVmaW5pdGlvbnMpe1xuICAgICAgICBpZiAoZGVmaW5pdGlvbnMuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgIHZhciB2YWwgPSBkZWZpbml0aW9uc1trXSxcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lID0gXy5pc09iamVjdCh2YWwpID8gayA6IHZhbDtcblxuICAgICAgICAgICAgYWN0aW9uc1thY3Rpb25OYW1lXSA9IGV4cG9ydHMuY3JlYXRlQWN0aW9uKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbnM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGV2ZW50bWl0dGVyIHRoYXQgUmVmbHV4IHVzZXNcbiAqL1xuZXhwb3J0cy5zZXRFdmVudEVtaXR0ZXIgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgICBleHBvcnRzLkV2ZW50RW1pdHRlciA9IF8uRXZlbnRFbWl0dGVyID0gY3R4O1xufTtcblxuXG4vKipcbiAqIFNldHMgdGhlIFByb21pc2UgbGlicmFyeSB0aGF0IFJlZmx1eCB1c2VzXG4gKi9cbmV4cG9ydHMuc2V0UHJvbWlzZSA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBfID0gcmVxdWlyZSgnLi91dGlscycpO1xuICAgIGV4cG9ydHMuUHJvbWlzZSA9IF8uUHJvbWlzZSA9IGN0eDtcbn07XG5cblxuLyoqXG4gKiBTZXRzIHRoZSBQcm9taXNlIGZhY3RvcnkgdGhhdCBjcmVhdGVzIG5ldyBwcm9taXNlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZmFjdG9yeSBoYXMgdGhlIHNpZ25hdHVyZSBgZnVuY3Rpb24ocmVzb2x2ZXIpIHsgcmV0dXJuIFtuZXcgUHJvbWlzZV07IH1gXG4gKi9cbmV4cG9ydHMuc2V0UHJvbWlzZUZhY3RvcnkgPSBmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgdmFyIF8gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG4gICAgXy5jcmVhdGVQcm9taXNlID0gZmFjdG9yeTtcbn07XG5cblxuLyoqXG4gKiBTZXRzIHRoZSBtZXRob2QgdXNlZCBmb3IgZGVmZXJyaW5nIGFjdGlvbnMgYW5kIHN0b3Jlc1xuICovXG5leHBvcnRzLm5leHRUaWNrID0gZnVuY3Rpb24obmV4dFRpY2spIHtcbiAgICB2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbiAgICBfLm5leHRUaWNrID0gbmV4dFRpY2s7XG59O1xuXG4vKipcbiAqIFByb3ZpZGVzIHRoZSBzZXQgb2YgY3JlYXRlZCBhY3Rpb25zIGFuZCBzdG9yZXMgZm9yIGludHJvc3BlY3Rpb25cbiAqL1xuZXhwb3J0cy5fX2tlZXAgPSByZXF1aXJlKCcuL0tlZXAnKTtcblxuLyoqXG4gKiBXYXJuIGlmIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIG5vdCBhdmFpbGFibGVcbiAqL1xuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBub3QgYXZhaWxhYmxlLiAnICtcbiAgICAnRVM1IHNoaW0gcmVxdWlyZWQuICcgK1xuICAgICdodHRwczovL2dpdGh1Yi5jb20vc3BvaWtlL3JlZmx1eGpzI2VzNSdcbiAgKTtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmx1eC9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIFJlZmx1eCA9IHJlcXVpcmUoJ3JlZmx1eCcpO1xuXG52YXIgYXBwQWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ3RleHRVcGRhdGUnXG5dKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBBY3Rpb25zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2FjdGlvbnMvQXBwQWN0aW9ucy5qc1xuICoqLyIsInZhciBBcHBBY3Rpb25zID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BcHBBY3Rpb25zJyk7XG52YXIgUmVmbHV4ID0gcmVxdWlyZSgncmVmbHV4Jyk7XG5cbnZhciBEb2N1bWVudFN0b3JlID0gUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbGlzdGVuYWJsZXM6IEFwcEFjdGlvbnMsXG5cbiAgb25UZXh0VXBkYXRlOiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgdGhpcy50cmlnZ2VyKHRleHQpO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEb2N1bWVudFN0b3JlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9hcHAvc3RvcmVzL0RvY3VtZW50U3RvcmUuanNcbiAqKi8iLCIvKipcbiAqIEEgbW9kdWxlIG9mIG1ldGhvZHMgdGhhdCB5b3Ugd2FudCB0byBpbmNsdWRlIGluIGFsbCBhY3Rpb25zLlxuICogVGhpcyBtb2R1bGUgaXMgY29uc3VtZWQgYnkgYGNyZWF0ZUFjdGlvbmAuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmx1eC9zcmMvQWN0aW9uTWV0aG9kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuL3V0aWxzJyksXG4gICAgbWFrZXIgPSByZXF1aXJlKCcuL2pvaW5zJykuaW5zdGFuY2VKb2luQ3JlYXRvcjtcblxuLyoqXG4gKiBFeHRyYWN0IGNoaWxkIGxpc3RlbmFibGVzIGZyb20gYSBwYXJlbnQgZnJvbSB0aGVpclxuICogY2hpbGRyZW4gcHJvcGVydHkgYW5kIHJldHVybiB0aGVtIGluIGEga2V5ZWQgT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmFibGUgVGhlIHBhcmVudCBsaXN0ZW5hYmxlXG4gKi9cbnZhciBtYXBDaGlsZExpc3RlbmFibGVzID0gZnVuY3Rpb24obGlzdGVuYWJsZSkge1xuICAgIHZhciBpID0gMCwgY2hpbGRyZW4gPSB7fSwgY2hpbGROYW1lO1xuICAgIGZvciAoO2kgPCAobGlzdGVuYWJsZS5jaGlsZHJlbnx8W10pLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNoaWxkTmFtZSA9IGxpc3RlbmFibGUuY2hpbGRyZW5baV07XG4gICAgICAgIGlmKGxpc3RlbmFibGVbY2hpbGROYW1lXSl7XG4gICAgICAgICAgICBjaGlsZHJlbltjaGlsZE5hbWVdID0gbGlzdGVuYWJsZVtjaGlsZE5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn07XG5cbi8qKlxuICogTWFrZSBhIGZsYXQgZGljdGlvbmFyeSBvZiBhbGwgbGlzdGVuYWJsZXMgaW5jbHVkaW5nIHRoZWlyXG4gKiBwb3NzaWJsZSBjaGlsZHJlbiAocmVjdXJzaXZlbHkpLCBjb25jYXRlbmF0aW5nIG5hbWVzIGluIGNhbWVsQ2FzZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuYWJsZXMgVGhlIHRvcC1sZXZlbCBsaXN0ZW5hYmxlc1xuICovXG52YXIgZmxhdHRlbkxpc3RlbmFibGVzID0gZnVuY3Rpb24obGlzdGVuYWJsZXMpIHtcbiAgICB2YXIgZmxhdHRlbmVkID0ge307XG4gICAgZm9yKHZhciBrZXkgaW4gbGlzdGVuYWJsZXMpe1xuICAgICAgICB2YXIgbGlzdGVuYWJsZSA9IGxpc3RlbmFibGVzW2tleV07XG4gICAgICAgIHZhciBjaGlsZE1hcCA9IG1hcENoaWxkTGlzdGVuYWJsZXMobGlzdGVuYWJsZSk7XG5cbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgZmxhdHRlbiBjaGlsZHJlblxuICAgICAgICB2YXIgY2hpbGRyZW4gPSBmbGF0dGVuTGlzdGVuYWJsZXMoY2hpbGRNYXApO1xuXG4gICAgICAgIC8vIGFkZCB0aGUgcHJpbWFyeSBsaXN0ZW5hYmxlIGFuZCBjaGlscmVuXG4gICAgICAgIGZsYXR0ZW5lZFtrZXldID0gbGlzdGVuYWJsZTtcbiAgICAgICAgZm9yKHZhciBjaGlsZEtleSBpbiBjaGlsZHJlbil7XG4gICAgICAgICAgICB2YXIgY2hpbGRMaXN0ZW5hYmxlID0gY2hpbGRyZW5bY2hpbGRLZXldO1xuICAgICAgICAgICAgZmxhdHRlbmVkW2tleSArIF8uY2FwaXRhbGl6ZShjaGlsZEtleSldID0gY2hpbGRMaXN0ZW5hYmxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZsYXR0ZW5lZDtcbn07XG5cbi8qKlxuICogQSBtb2R1bGUgb2YgbWV0aG9kcyByZWxhdGVkIHRvIGxpc3RlbmluZy5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCB1dGlsaXR5IGZ1bmN0aW9uIHVzZWQgYnkgYHZhbGlkYXRlTGlzdGVuaW5nYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBY3Rpb258U3RvcmV9IGxpc3RlbmFibGUgVGhlIGxpc3RlbmFibGUgd2Ugd2FudCB0byBzZWFyY2ggZm9yXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IFRoZSByZXN1bHQgb2YgYSByZWN1cnNpdmUgc2VhcmNoIGFtb25nIGB0aGlzLnN1YnNjcmlwdGlvbnNgXG4gICAgICovXG4gICAgaGFzTGlzdGVuZXI6IGZ1bmN0aW9uKGxpc3RlbmFibGUpIHtcbiAgICAgICAgdmFyIGkgPSAwLCBqLCBsaXN0ZW5lciwgbGlzdGVuYWJsZXM7XG4gICAgICAgIGZvciAoO2kgPCAodGhpcy5zdWJzY3JpcHRpb25zfHxbXSkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxpc3RlbmFibGVzID0gW10uY29uY2F0KHRoaXMuc3Vic2NyaXB0aW9uc1tpXS5saXN0ZW5hYmxlKTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsaXN0ZW5hYmxlcy5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5hYmxlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgPT09IGxpc3RlbmFibGUgfHwgbGlzdGVuZXIuaGFzTGlzdGVuZXIgJiYgbGlzdGVuZXIuaGFzTGlzdGVuZXIobGlzdGVuYWJsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQSBjb252ZW5pZW5jZSBtZXRob2QgdGhhdCBsaXN0ZW5zIHRvIGFsbCBsaXN0ZW5hYmxlcyBpbiB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGxpc3RlbmFibGVzIEFuIG9iamVjdCBvZiBsaXN0ZW5hYmxlcy4gS2V5cyB3aWxsIGJlIHVzZWQgYXMgY2FsbGJhY2sgbWV0aG9kIG5hbWVzLlxuICAgICAqL1xuICAgIGxpc3RlblRvTWFueTogZnVuY3Rpb24obGlzdGVuYWJsZXMpe1xuICAgICAgICB2YXIgYWxsTGlzdGVuYWJsZXMgPSBmbGF0dGVuTGlzdGVuYWJsZXMobGlzdGVuYWJsZXMpO1xuICAgICAgICBmb3IodmFyIGtleSBpbiBhbGxMaXN0ZW5hYmxlcyl7XG4gICAgICAgICAgICB2YXIgY2JuYW1lID0gXy5jYWxsYmFja05hbWUoa2V5KSxcbiAgICAgICAgICAgICAgICBsb2NhbG5hbWUgPSB0aGlzW2NibmFtZV0gPyBjYm5hbWUgOiB0aGlzW2tleV0gPyBrZXkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAobG9jYWxuYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlblRvKGFsbExpc3RlbmFibGVzW2tleV0sbG9jYWxuYW1lLHRoaXNbY2JuYW1lK1wiRGVmYXVsdFwiXXx8dGhpc1tsb2NhbG5hbWUrXCJEZWZhdWx0XCJdfHxsb2NhbG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBjb250ZXh0IGNhbiBsaXN0ZW4gdG8gdGhlIHN1cHBsaWVkIGxpc3RlbmFibGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QWN0aW9ufFN0b3JlfSBsaXN0ZW5hYmxlIEFuIEFjdGlvbiBvciBTdG9yZSB0aGF0IHNob3VsZCBiZVxuICAgICAqICBsaXN0ZW5lZCB0by5cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfFVuZGVmaW5lZH0gQW4gZXJyb3IgbWVzc2FnZSwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIHdhcyBubyBwcm9ibGVtLlxuICAgICAqL1xuICAgIHZhbGlkYXRlTGlzdGVuaW5nOiBmdW5jdGlvbihsaXN0ZW5hYmxlKXtcbiAgICAgICAgaWYgKGxpc3RlbmFibGUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkxpc3RlbmVyIGlzIG5vdCBhYmxlIHRvIGxpc3RlbiB0byBpdHNlbGZcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV8uaXNGdW5jdGlvbihsaXN0ZW5hYmxlLmxpc3RlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5hYmxlICsgXCIgaXMgbWlzc2luZyBhIGxpc3RlbiBtZXRob2RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdGVuYWJsZS5oYXNMaXN0ZW5lciAmJiBsaXN0ZW5hYmxlLmhhc0xpc3RlbmVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJMaXN0ZW5lciBjYW5ub3QgbGlzdGVuIHRvIHRoaXMgbGlzdGVuYWJsZSBiZWNhdXNlIG9mIGNpcmN1bGFyIGxvb3BcIjtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgc3Vic2NyaXB0aW9uIHRvIHRoZSBnaXZlbiBsaXN0ZW5hYmxlIGZvciB0aGUgY29udGV4dCBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QWN0aW9ufFN0b3JlfSBsaXN0ZW5hYmxlIEFuIEFjdGlvbiBvciBTdG9yZSB0aGF0IHNob3VsZCBiZVxuICAgICAqICBsaXN0ZW5lZCB0by5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIHJlZ2lzdGVyIGFzIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZGVmYXVsdENhbGxiYWNrIFRoZSBjYWxsYmFjayB0byByZWdpc3RlciBhcyBkZWZhdWx0IGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBIHN1YnNjcmlwdGlvbiBvYmogd2hlcmUgYHN0b3BgIGlzIGFuIHVuc3ViIGZ1bmN0aW9uIGFuZCBgbGlzdGVuYWJsZWAgaXMgdGhlIG9iamVjdCBiZWluZyBsaXN0ZW5lZCB0b1xuICAgICAqL1xuICAgIGxpc3RlblRvOiBmdW5jdGlvbihsaXN0ZW5hYmxlLCBjYWxsYmFjaywgZGVmYXVsdENhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkZXN1YiwgdW5zdWJzY3JpYmVyLCBzdWJzY3JpcHRpb25vYmosIHN1YnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMgfHwgW107XG4gICAgICAgIF8udGhyb3dJZih0aGlzLnZhbGlkYXRlTGlzdGVuaW5nKGxpc3RlbmFibGUpKTtcbiAgICAgICAgdGhpcy5mZXRjaEluaXRpYWxTdGF0ZShsaXN0ZW5hYmxlLCBkZWZhdWx0Q2FsbGJhY2spO1xuICAgICAgICBkZXN1YiA9IGxpc3RlbmFibGUubGlzdGVuKHRoaXNbY2FsbGJhY2tdfHxjYWxsYmFjaywgdGhpcyk7XG4gICAgICAgIHVuc3Vic2NyaWJlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gc3Vicy5pbmRleE9mKHN1YnNjcmlwdGlvbm9iaik7XG4gICAgICAgICAgICBfLnRocm93SWYoaW5kZXggPT09IC0xLCdUcmllZCB0byByZW1vdmUgbGlzdGVuIGFscmVhZHkgZ29uZSBmcm9tIHN1YnNjcmlwdGlvbnMgbGlzdCEnKTtcbiAgICAgICAgICAgIHN1YnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGRlc3ViKCk7XG4gICAgICAgIH07XG4gICAgICAgIHN1YnNjcmlwdGlvbm9iaiA9IHtcbiAgICAgICAgICAgIHN0b3A6IHVuc3Vic2NyaWJlcixcbiAgICAgICAgICAgIGxpc3RlbmFibGU6IGxpc3RlbmFibGVcbiAgICAgICAgfTtcbiAgICAgICAgc3Vicy5wdXNoKHN1YnNjcmlwdGlvbm9iaik7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25vYmo7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFN0b3BzIGxpc3RlbmluZyB0byBhIHNpbmdsZSBsaXN0ZW5hYmxlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FjdGlvbnxTdG9yZX0gbGlzdGVuYWJsZSBUaGUgYWN0aW9uIG9yIHN0b3JlIHdlIG5vIGxvbmdlciB3YW50IHRvIGxpc3RlbiB0b1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIGEgc3Vic2NyaXB0aW9uIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqL1xuICAgIHN0b3BMaXN0ZW5pbmdUbzogZnVuY3Rpb24obGlzdGVuYWJsZSl7XG4gICAgICAgIHZhciBzdWIsIGkgPSAwLCBzdWJzID0gdGhpcy5zdWJzY3JpcHRpb25zIHx8IFtdO1xuICAgICAgICBmb3IoO2kgPCBzdWJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHN1YiA9IHN1YnNbaV07XG4gICAgICAgICAgICBpZiAoc3ViLmxpc3RlbmFibGUgPT09IGxpc3RlbmFibGUpe1xuICAgICAgICAgICAgICAgIHN1Yi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgXy50aHJvd0lmKHN1YnMuaW5kZXhPZihzdWIpIT09LTEsJ0ZhaWxlZCB0byByZW1vdmUgbGlzdGVuIGZyb20gc3Vic2NyaXB0aW9ucyBsaXN0IScpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3RvcHMgYWxsIHN1YnNjcmlwdGlvbnMgYW5kIGVtcHRpZXMgc3Vic2NyaXB0aW9ucyBhcnJheVxuICAgICAqL1xuICAgIHN0b3BMaXN0ZW5pbmdUb0FsbDogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHJlbWFpbmluZywgc3VicyA9IHRoaXMuc3Vic2NyaXB0aW9ucyB8fCBbXTtcbiAgICAgICAgd2hpbGUoKHJlbWFpbmluZz1zdWJzLmxlbmd0aCkpe1xuICAgICAgICAgICAgc3Vic1swXS5zdG9wKCk7XG4gICAgICAgICAgICBfLnRocm93SWYoc3Vicy5sZW5ndGghPT1yZW1haW5pbmctMSwnRmFpbGVkIHRvIHJlbW92ZSBsaXN0ZW4gZnJvbSBzdWJzY3JpcHRpb25zIGxpc3QhJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlZCBpbiBgbGlzdGVuVG9gLiBGZXRjaGVzIGluaXRpYWwgZGF0YSBmcm9tIGEgcHVibGlzaGVyIGlmIGl0IGhhcyBhIGBnZXRJbml0aWFsU3RhdGVgIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge0FjdGlvbnxTdG9yZX0gbGlzdGVuYWJsZSBUaGUgcHVibGlzaGVyIHdlIHdhbnQgdG8gZ2V0IGluaXRpYWwgc3RhdGUgZnJvbVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBkZWZhdWx0Q2FsbGJhY2sgVGhlIG1ldGhvZCB0byByZWNlaXZlIHRoZSBkYXRhXG4gICAgICovXG4gICAgZmV0Y2hJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIChsaXN0ZW5hYmxlLCBkZWZhdWx0Q2FsbGJhY2spIHtcbiAgICAgICAgZGVmYXVsdENhbGxiYWNrID0gKGRlZmF1bHRDYWxsYmFjayAmJiB0aGlzW2RlZmF1bHRDYWxsYmFja10pIHx8IGRlZmF1bHRDYWxsYmFjaztcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihkZWZhdWx0Q2FsbGJhY2spICYmIF8uaXNGdW5jdGlvbihsaXN0ZW5hYmxlLmdldEluaXRpYWxTdGF0ZSkpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gbGlzdGVuYWJsZS5nZXRJbml0aWFsU3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChkYXRhICYmIF8uaXNGdW5jdGlvbihkYXRhLnRoZW4pKSB7XG4gICAgICAgICAgICAgICAgZGF0YS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2suYXBwbHkobWUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRDYWxsYmFjay5jYWxsKHRoaXMsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbmNlIGFsbCBsaXN0ZW5hYmxlcyBoYXZlIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgICAqIEl0IHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGVtaXNzaW9uIGZyb20gZWFjaCBsaXN0ZW5hYmxlLlxuICAgICAqIEBwYXJhbSB7Li4uUHVibGlzaGVyc30gcHVibGlzaGVycyBQdWJsaXNoZXJzIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGNhbGxiYWNrIFRoZSBtZXRob2QgdG8gY2FsbCB3aGVuIGFsbCBwdWJsaXNoZXJzIGhhdmUgZW1pdHRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEEgc3Vic2NyaXB0aW9uIG9iaiB3aGVyZSBgc3RvcGAgaXMgYW4gdW5zdWIgZnVuY3Rpb24gYW5kIGBsaXN0ZW5hYmxlYCBpcyBhbiBhcnJheSBvZiBsaXN0ZW5hYmxlc1xuICAgICAqL1xuICAgIGpvaW5UcmFpbGluZzogbWFrZXIoXCJsYXN0XCIpLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uY2UgYWxsIGxpc3RlbmFibGVzIGhhdmUgdHJpZ2dlcmVkIGF0IGxlYXN0IG9uY2UuXG4gICAgICogSXQgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIGZpcnN0IGVtaXNzaW9uIGZyb20gZWFjaCBsaXN0ZW5hYmxlLlxuICAgICAqIEBwYXJhbSB7Li4uUHVibGlzaGVyc30gcHVibGlzaGVycyBQdWJsaXNoZXJzIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGNhbGxiYWNrIFRoZSBtZXRob2QgdG8gY2FsbCB3aGVuIGFsbCBwdWJsaXNoZXJzIGhhdmUgZW1pdHRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEEgc3Vic2NyaXB0aW9uIG9iaiB3aGVyZSBgc3RvcGAgaXMgYW4gdW5zdWIgZnVuY3Rpb24gYW5kIGBsaXN0ZW5hYmxlYCBpcyBhbiBhcnJheSBvZiBsaXN0ZW5hYmxlc1xuICAgICAqL1xuICAgIGpvaW5MZWFkaW5nOiBtYWtlcihcImZpcnN0XCIpLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uY2UgYWxsIGxpc3RlbmFibGVzIGhhdmUgdHJpZ2dlcmVkIGF0IGxlYXN0IG9uY2UuXG4gICAgICogSXQgd2lsbCBiZSBpbnZva2VkIHdpdGggYWxsIGVtaXNzaW9uIGZyb20gZWFjaCBsaXN0ZW5hYmxlLlxuICAgICAqIEBwYXJhbSB7Li4uUHVibGlzaGVyc30gcHVibGlzaGVycyBQdWJsaXNoZXJzIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGNhbGxiYWNrIFRoZSBtZXRob2QgdG8gY2FsbCB3aGVuIGFsbCBwdWJsaXNoZXJzIGhhdmUgZW1pdHRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEEgc3Vic2NyaXB0aW9uIG9iaiB3aGVyZSBgc3RvcGAgaXMgYW4gdW5zdWIgZnVuY3Rpb24gYW5kIGBsaXN0ZW5hYmxlYCBpcyBhbiBhcnJheSBvZiBsaXN0ZW5hYmxlc1xuICAgICAqL1xuICAgIGpvaW5Db25jYXQ6IG1ha2VyKFwiYWxsXCIpLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9uY2UgYWxsIGxpc3RlbmFibGVzIGhhdmUgdHJpZ2dlcmVkLlxuICAgICAqIElmIGEgY2FsbGJhY2sgdHJpZ2dlcnMgdHdpY2UgYmVmb3JlIHRoYXQgaGFwcGVucywgYW4gZXJyb3IgaXMgdGhyb3duLlxuICAgICAqIEBwYXJhbSB7Li4uUHVibGlzaGVyc30gcHVibGlzaGVycyBQdWJsaXNoZXJzIHRoYXQgc2hvdWxkIGJlIHRyYWNrZWQuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGNhbGxiYWNrIFRoZSBtZXRob2QgdG8gY2FsbCB3aGVuIGFsbCBwdWJsaXNoZXJzIGhhdmUgZW1pdHRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEEgc3Vic2NyaXB0aW9uIG9iaiB3aGVyZSBgc3RvcGAgaXMgYW4gdW5zdWIgZnVuY3Rpb24gYW5kIGBsaXN0ZW5hYmxlYCBpcyBhbiBhcnJheSBvZiBsaXN0ZW5hYmxlc1xuICAgICAqL1xuICAgIGpvaW5TdHJpY3Q6IG1ha2VyKFwic3RyaWN0XCIpXG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9MaXN0ZW5lck1ldGhvZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIEEgbW9kdWxlIG9mIG1ldGhvZHMgZm9yIG9iamVjdCB0aGF0IHlvdSB3YW50IHRvIGJlIGFibGUgdG8gbGlzdGVuIHRvLlxuICogVGhpcyBtb2R1bGUgaXMgY29uc3VtZWQgYnkgYGNyZWF0ZVN0b3JlYCBhbmQgYGNyZWF0ZUFjdGlvbmBcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBIb29rIHVzZWQgYnkgdGhlIHB1Ymxpc2hlciB0aGF0IGlzIGludm9rZWQgYmVmb3JlIGVtaXR0aW5nXG4gICAgICogYW5kIGJlZm9yZSBgc2hvdWxkRW1pdGAuIFRoZSBhcmd1bWVudHMgYXJlIHRoZSBvbmVzIHRoYXQgdGhlIGFjdGlvblxuICAgICAqIGlzIGludm9rZWQgd2l0aC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHNvbWV0aGluZyBvdGhlciB0aGFuXG4gICAgICogdW5kZWZpbmVkLCB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIGFzIGFyZ3VtZW50cyBmb3Igc2hvdWxkRW1pdCBhbmRcbiAgICAgKiBlbWlzc2lvbi5cbiAgICAgKi9cbiAgICBwcmVFbWl0OiBmdW5jdGlvbigpIHt9LFxuXG4gICAgLyoqXG4gICAgICogSG9vayB1c2VkIGJ5IHRoZSBwdWJsaXNoZXIgYWZ0ZXIgYHByZUVtaXRgIHRvIGRldGVybWluZSBpZiB0aGVcbiAgICAgKiBldmVudCBzaG91bGQgYmUgZW1pdHRlZCB3aXRoIGdpdmVuIGFyZ3VtZW50cy4gVGhpcyBtYXkgYmUgb3ZlcnJpZGRlblxuICAgICAqIGluIHlvdXIgYXBwbGljYXRpb24sIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gYWx3YXlzIHJldHVybnMgdHJ1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIGV2ZW50IHNob3VsZCBiZSBlbWl0dGVkXG4gICAgICovXG4gICAgc2hvdWxkRW1pdDogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGFjdGlvbiB0cmlnZ2VyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byByZWdpc3RlciBhcyBldmVudCBoYW5kbGVyXG4gICAgICogQHBhcmFtIHtNaXhlZH0gW29wdGlvbmFsXSBiaW5kQ29udGV4dCBUaGUgY29udGV4dCB0byBiaW5kIHRoZSBjYWxsYmFjayB3aXRoXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufSBDYWxsYmFjayB0aGF0IHVuc3Vic2NyaWJlcyB0aGUgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVyXG4gICAgICovXG4gICAgbGlzdGVuOiBmdW5jdGlvbihjYWxsYmFjaywgYmluZENvbnRleHQpIHtcbiAgICAgICAgYmluZENvbnRleHQgPSBiaW5kQ29udGV4dCB8fCB0aGlzO1xuICAgICAgICB2YXIgZXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgaWYgKGFib3J0ZWQpe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGJpbmRDb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfSwgbWUgPSB0aGlzLCBhYm9ydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW1pdHRlci5hZGRMaXN0ZW5lcih0aGlzLmV2ZW50TGFiZWwsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgbWUuZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihtZS5ldmVudExhYmVsLCBldmVudEhhbmRsZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggaGFuZGxlcnMgdG8gcHJvbWlzZSB0aGF0IHRyaWdnZXIgdGhlIGNvbXBsZXRlZCBhbmQgZmFpbGVkXG4gICAgICogY2hpbGQgcHVibGlzaGVycywgaWYgYXZhaWxhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFRoZSBwcm9taXNlIHRvIGF0dGFjaCB0b1xuICAgICAqL1xuICAgIHByb21pc2U6IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgICB2YXIgY2FuSGFuZGxlUHJvbWlzZSA9XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmluZGV4T2YoJ2NvbXBsZXRlZCcpID49IDAgJiZcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uaW5kZXhPZignZmFpbGVkJykgPj0gMDtcblxuICAgICAgICBpZiAoIWNhbkhhbmRsZVByb21pc2Upe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQdWJsaXNoZXIgbXVzdCBoYXZlIFwiY29tcGxldGVkXCIgYW5kIFwiZmFpbGVkXCIgY2hpbGQgcHVibGlzaGVycycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuY29tcGxldGVkKHJlc3BvbnNlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS5mYWlsZWQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGFjdGlvbiB0cmlnZ2VyZWQsIHdoaWNoIHNob3VsZFxuICAgICAqIHJldHVybiBhIHByb21pc2UgdGhhdCBpbiB0dXJuIGlzIHBhc3NlZCB0byBgdGhpcy5wcm9taXNlYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIHJlZ2lzdGVyIGFzIGV2ZW50IGhhbmRsZXJcbiAgICAgKi9cbiAgICBsaXN0ZW5BbmRQcm9taXNlOiBmdW5jdGlvbihjYWxsYmFjaywgYmluZENvbnRleHQpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgYmluZENvbnRleHQgPSBiaW5kQ29udGV4dCB8fCB0aGlzO1xuICAgICAgICB0aGlzLndpbGxDYWxsUHJvbWlzZSA9ICh0aGlzLndpbGxDYWxsUHJvbWlzZSB8fCAwKSArIDE7XG5cbiAgICAgICAgdmFyIHJlbW92ZUxpc3RlbiA9IHRoaXMubGlzdGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb21pc2UgYnV0IGdvdCAnICsgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gY2FsbGJhY2suYXBwbHkoYmluZENvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIG1lLnByb21pc2UuY2FsbChtZSwgcHJvbWlzZSk7XG4gICAgICAgIH0sIGJpbmRDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG1lLndpbGxDYWxsUHJvbWlzZS0tO1xuICAgICAgICAgIHJlbW92ZUxpc3Rlbi5jYWxsKG1lKTtcbiAgICAgICAgfTtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgYW4gZXZlbnQgdXNpbmcgYHRoaXMuZW1pdHRlcmAgKGlmIGBzaG91bGRFbWl0YCBhZ3JlZXMpXG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgcHJlID0gdGhpcy5wcmVFbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICBhcmdzID0gcHJlID09PSB1bmRlZmluZWQgPyBhcmdzIDogXy5pc0FyZ3VtZW50cyhwcmUpID8gcHJlIDogW10uY29uY2F0KHByZSk7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZEVtaXQuYXBwbHkodGhpcywgYXJncykpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuZXZlbnRMYWJlbCwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJpZXMgdG8gcHVibGlzaCB0aGUgZXZlbnQgb24gdGhlIG5leHQgdGlja1xuICAgICAqL1xuICAgIHRyaWdnZXJBc3luYzogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsbWUgPSB0aGlzO1xuICAgICAgICBfLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbWUudHJpZ2dlci5hcHBseShtZSwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBmb3IgdGhlIHRyaWdnZXJlZCBhY3Rpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICogICBSZXNvbHZlZCBieSBjb21wbGV0ZWQgY2hpbGQgYWN0aW9uLlxuICAgICAqICAgUmVqZWN0ZWQgYnkgZmFpbGVkIGNoaWxkIGFjdGlvbi5cbiAgICAgKiAgIElmIGxpc3RlbkFuZFByb21pc2UnZCwgdGhlbiBwcm9taXNlIGFzc29jaWF0ZWQgdG8gdGhpcyB0cmlnZ2VyLlxuICAgICAqICAgT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyBmb3IgbmV4dCBjaGlsZCBhY3Rpb24gY29tcGxldGlvbi5cbiAgICAgKi9cbiAgICB0cmlnZ2VyUHJvbWlzZTogZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgdmFyIGNhbkhhbmRsZVByb21pc2UgPVxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5pbmRleE9mKCdjb21wbGV0ZWQnKSA+PSAwICYmXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmluZGV4T2YoJ2ZhaWxlZCcpID49IDA7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBfLmNyZWF0ZVByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBJZiBgbGlzdGVuQW5kUHJvbWlzZWAgaXMgbGlzdGVuaW5nXG4gICAgICAgICAgICAvLyBwYXRjaCBgcHJvbWlzZWAgdy8gY29udGV4dC1sb2FkZWQgcmVzb2x2ZS9yZWplY3RcbiAgICAgICAgICAgIGlmIChtZS53aWxsQ2FsbFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBfLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkX3Byb21pc2VfbWV0aG9kID0gbWUucHJvbWlzZTtcbiAgICAgICAgICAgICAgICAgICAgbWUucHJvbWlzZSA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJhY2sgdG8geW91ciByZWd1bGFybHkgc2NoZWR1bGUgcHJvZ3JhbW1pbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5wcm9taXNlID0gb2xkX3Byb21pc2VfbWV0aG9kO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lLnByb21pc2UuYXBwbHkobWUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIG1lLnRyaWdnZXIuYXBwbHkobWUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbkhhbmRsZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlU3VjY2VzcyA9IG1lLmNvbXBsZXRlZC5saXN0ZW4oZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUZhaWxlZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUZhaWxlZCA9IG1lLmZhaWxlZC5saXN0ZW4oZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUZhaWxlZCgpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnRyaWdnZXJBc3luYy5hcHBseShtZSwgYXJncyk7XG5cbiAgICAgICAgICAgIGlmICghY2FuSGFuZGxlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmx1eC9zcmMvUHVibGlzaGVyTWV0aG9kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLyoqXG4gKiBBIG1vZHVsZSBvZiBtZXRob2RzIHRoYXQgeW91IHdhbnQgdG8gaW5jbHVkZSBpbiBhbGwgc3RvcmVzLlxuICogVGhpcyBtb2R1bGUgaXMgY29uc3VtZWQgYnkgYGNyZWF0ZVN0b3JlYC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9TdG9yZU1ldGhvZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi91dGlscycpLFxuICAgIFJlZmx1eCA9IHJlcXVpcmUoJy4vaW5kZXgnKSxcbiAgICBLZWVwID0gcmVxdWlyZSgnLi9LZWVwJyksXG4gICAgYWxsb3dlZCA9IHtwcmVFbWl0OjEsc2hvdWxkRW1pdDoxfTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFjdGlvbiBmdW5jdG9yIG9iamVjdC4gSXQgaXMgbWl4ZWQgaW4gd2l0aCBmdW5jdGlvbnNcbiAqIGZyb20gdGhlIGBQdWJsaXNoZXJNZXRob2RzYCBtaXhpbi4gYHByZUVtaXRgIGFuZCBgc2hvdWxkRW1pdGAgbWF5XG4gKiBiZSBvdmVycmlkZGVuIGluIHRoZSBkZWZpbml0aW9uIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmaW5pdGlvbiBUaGUgYWN0aW9uIG9iamVjdCBkZWZpbml0aW9uXG4gKi9cbnZhciBjcmVhdGVBY3Rpb24gPSBmdW5jdGlvbihkZWZpbml0aW9uKSB7XG5cbiAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbiB8fCB7fTtcbiAgICBpZiAoIV8uaXNPYmplY3QoZGVmaW5pdGlvbikpe1xuICAgICAgICBkZWZpbml0aW9uID0ge2FjdGlvbk5hbWU6IGRlZmluaXRpb259O1xuICAgIH1cblxuICAgIGZvcih2YXIgYSBpbiBSZWZsdXguQWN0aW9uTWV0aG9kcyl7XG4gICAgICAgIGlmICghYWxsb3dlZFthXSAmJiBSZWZsdXguUHVibGlzaGVyTWV0aG9kc1thXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG92ZXJyaWRlIEFQSSBtZXRob2QgXCIgKyBhICtcbiAgICAgICAgICAgICAgICBcIiBpbiBSZWZsdXguQWN0aW9uTWV0aG9kcy4gVXNlIGFub3RoZXIgbWV0aG9kIG5hbWUgb3Igb3ZlcnJpZGUgaXQgb24gUmVmbHV4LlB1Ymxpc2hlck1ldGhvZHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgZCBpbiBkZWZpbml0aW9uKXtcbiAgICAgICAgaWYgKCFhbGxvd2VkW2RdICYmIFJlZmx1eC5QdWJsaXNoZXJNZXRob2RzW2RdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgb3ZlcnJpZGUgQVBJIG1ldGhvZCBcIiArIGQgK1xuICAgICAgICAgICAgICAgIFwiIGluIGFjdGlvbiBjcmVhdGlvbi4gVXNlIGFub3RoZXIgbWV0aG9kIG5hbWUgb3Igb3ZlcnJpZGUgaXQgb24gUmVmbHV4LlB1Ymxpc2hlck1ldGhvZHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmluaXRpb24uY2hpbGRyZW4gPSBkZWZpbml0aW9uLmNoaWxkcmVuIHx8IFtdO1xuICAgIGlmIChkZWZpbml0aW9uLmFzeW5jUmVzdWx0KXtcbiAgICAgICAgZGVmaW5pdGlvbi5jaGlsZHJlbiA9IGRlZmluaXRpb24uY2hpbGRyZW4uY29uY2F0KFtcImNvbXBsZXRlZFwiLFwiZmFpbGVkXCJdKTtcbiAgICB9XG5cbiAgICB2YXIgaSA9IDAsIGNoaWxkQWN0aW9ucyA9IHt9O1xuICAgIGZvciAoOyBpIDwgZGVmaW5pdGlvbi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbmFtZSA9IGRlZmluaXRpb24uY2hpbGRyZW5baV07XG4gICAgICAgIGNoaWxkQWN0aW9uc1tuYW1lXSA9IGNyZWF0ZUFjdGlvbihuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGV4dCA9IF8uZXh0ZW5kKHtcbiAgICAgICAgZXZlbnRMYWJlbDogXCJhY3Rpb25cIixcbiAgICAgICAgZW1pdHRlcjogbmV3IF8uRXZlbnRFbWl0dGVyKCksXG4gICAgICAgIF9pc0FjdGlvbjogdHJ1ZVxuICAgIH0sIFJlZmx1eC5QdWJsaXNoZXJNZXRob2RzLCBSZWZsdXguQWN0aW9uTWV0aG9kcywgZGVmaW5pdGlvbik7XG5cbiAgICB2YXIgZnVuY3RvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZnVuY3RvcltmdW5jdG9yLnN5bmM/XCJ0cmlnZ2VyXCI6XCJ0cmlnZ2VyUHJvbWlzZVwiXS5hcHBseShmdW5jdG9yLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfLmV4dGVuZChmdW5jdG9yLGNoaWxkQWN0aW9ucyxjb250ZXh0KTtcblxuICAgIEtlZXAuY3JlYXRlZEFjdGlvbnMucHVzaChmdW5jdG9yKTtcblxuICAgIHJldHVybiBmdW5jdG9yO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFjdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmx1eC9zcmMvY3JlYXRlQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbHMnKSxcbiAgICBSZWZsdXggPSByZXF1aXJlKCcuL2luZGV4JyksXG4gICAgS2VlcCA9IHJlcXVpcmUoJy4vS2VlcCcpLFxuICAgIG1peGVyID0gcmVxdWlyZSgnLi9taXhlcicpLFxuICAgIGFsbG93ZWQgPSB7cHJlRW1pdDoxLHNob3VsZEVtaXQ6MX0sXG4gICAgYmluZE1ldGhvZHMgPSByZXF1aXJlKCcuL2JpbmRNZXRob2RzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBldmVudCBlbWl0dGluZyBEYXRhIFN0b3JlLiBJdCBpcyBtaXhlZCBpbiB3aXRoIGZ1bmN0aW9uc1xuICogZnJvbSB0aGUgYExpc3RlbmVyTWV0aG9kc2AgYW5kIGBQdWJsaXNoZXJNZXRob2RzYCBtaXhpbnMuIGBwcmVFbWl0YFxuICogYW5kIGBzaG91bGRFbWl0YCBtYXkgYmUgb3ZlcnJpZGRlbiBpbiB0aGUgZGVmaW5pdGlvbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb24gVGhlIGRhdGEgc3RvcmUgb2JqZWN0IGRlZmluaXRpb25cbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBkYXRhIHN0b3JlIGluc3RhbmNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZGVmaW5pdGlvbikge1xuXG4gICAgZGVmaW5pdGlvbiA9IGRlZmluaXRpb24gfHwge307XG5cbiAgICBmb3IodmFyIGEgaW4gUmVmbHV4LlN0b3JlTWV0aG9kcyl7XG4gICAgICAgIGlmICghYWxsb3dlZFthXSAmJiAoUmVmbHV4LlB1Ymxpc2hlck1ldGhvZHNbYV0gfHwgUmVmbHV4Lkxpc3RlbmVyTWV0aG9kc1thXSkpe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IG92ZXJyaWRlIEFQSSBtZXRob2QgXCIgKyBhICtcbiAgICAgICAgICAgICAgICBcIiBpbiBSZWZsdXguU3RvcmVNZXRob2RzLiBVc2UgYW5vdGhlciBtZXRob2QgbmFtZSBvciBvdmVycmlkZSBpdCBvbiBSZWZsdXguUHVibGlzaGVyTWV0aG9kcyAvIFJlZmx1eC5MaXN0ZW5lck1ldGhvZHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgZCBpbiBkZWZpbml0aW9uKXtcbiAgICAgICAgaWYgKCFhbGxvd2VkW2RdICYmIChSZWZsdXguUHVibGlzaGVyTWV0aG9kc1tkXSB8fCBSZWZsdXguTGlzdGVuZXJNZXRob2RzW2RdKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgb3ZlcnJpZGUgQVBJIG1ldGhvZCBcIiArIGQgK1xuICAgICAgICAgICAgICAgIFwiIGluIHN0b3JlIGNyZWF0aW9uLiBVc2UgYW5vdGhlciBtZXRob2QgbmFtZSBvciBvdmVycmlkZSBpdCBvbiBSZWZsdXguUHVibGlzaGVyTWV0aG9kcyAvIFJlZmx1eC5MaXN0ZW5lck1ldGhvZHMgaW5zdGVhZC5cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlZmluaXRpb24gPSBtaXhlcihkZWZpbml0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgICAgICB2YXIgaT0wLCBhcnI7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgXy5FdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5ldmVudExhYmVsID0gXCJjaGFuZ2VcIjtcbiAgICAgICAgYmluZE1ldGhvZHModGhpcywgZGVmaW5pdGlvbik7XG4gICAgICAgIGlmICh0aGlzLmluaXQgJiYgXy5pc0Z1bmN0aW9uKHRoaXMuaW5pdCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmFibGVzKXtcbiAgICAgICAgICAgIGFyciA9IFtdLmNvbmNhdCh0aGlzLmxpc3RlbmFibGVzKTtcbiAgICAgICAgICAgIGZvcig7aSA8IGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlblRvTWFueShhcnJbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXy5leHRlbmQoU3RvcmUucHJvdG90eXBlLCBSZWZsdXguTGlzdGVuZXJNZXRob2RzLCBSZWZsdXguUHVibGlzaGVyTWV0aG9kcywgUmVmbHV4LlN0b3JlTWV0aG9kcywgZGVmaW5pdGlvbik7XG5cbiAgICB2YXIgc3RvcmUgPSBuZXcgU3RvcmUoKTtcbiAgICBLZWVwLmNyZWF0ZWRTdG9yZXMucHVzaChzdG9yZSk7XG5cbiAgICByZXR1cm4gc3RvcmU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9jcmVhdGVTdG9yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIFJlZmx1eCA9IHJlcXVpcmUoJy4vaW5kZXgnKSxcbiAgICBfID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3RlbmFibGUsa2V5KXtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoIV8uaXNGdW5jdGlvbihsaXN0ZW5hYmxlLmdldEluaXRpYWxTdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmFibGUuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLm9iamVjdChba2V5XSxbbGlzdGVuYWJsZS5nZXRJbml0aWFsU3RhdGUoKV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHRoaXMsUmVmbHV4Lkxpc3RlbmVyTWV0aG9kcyk7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzLCBjYiA9IChrZXkgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2V0U3RhdGUgOiBmdW5jdGlvbih2KXttZS5zZXRTdGF0ZShfLm9iamVjdChba2V5XSxbdl0pKTt9KTtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVG8obGlzdGVuYWJsZSxjYik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBSZWZsdXguTGlzdGVuZXJNaXhpbi5jb21wb25lbnRXaWxsVW5tb3VudFxuICAgIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9jb25uZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJ2YXIgUmVmbHV4ID0gcmVxdWlyZSgnLi9pbmRleCcpLFxuICBfID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3RlbmFibGUsIGtleSwgZmlsdGVyRnVuYykge1xuICAgIGZpbHRlckZ1bmMgPSBfLmlzRnVuY3Rpb24oa2V5KSA/IGtleSA6IGZpbHRlckZ1bmM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghXy5pc0Z1bmN0aW9uKGxpc3RlbmFibGUuZ2V0SW5pdGlhbFN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5pc0Z1bmN0aW9uKGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyRnVuYy5jYWxsKHRoaXMsIGxpc3RlbmFibGUuZ2V0SW5pdGlhbFN0YXRlKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBGaWx0ZXIgaW5pdGlhbCBwYXlsb2FkIGZyb20gc3RvcmUuXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGZpbHRlckZ1bmMuY2FsbCh0aGlzLCBsaXN0ZW5hYmxlLmdldEluaXRpYWxTdGF0ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXy5vYmplY3QoW2tleV0sIFtyZXN1bHRdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgXy5leHRlbmQodGhpcywgUmVmbHV4Lkxpc3RlbmVyTWV0aG9kcyk7XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGNiID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0U3RhdGUoZmlsdGVyRnVuYy5jYWxsKG1lLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBmaWx0ZXJGdW5jLmNhbGwobWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuc2V0U3RhdGUoXy5vYmplY3QoW2tleV0sIFtyZXN1bHRdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5UbyhsaXN0ZW5hYmxlLCBjYik7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBSZWZsdXguTGlzdGVuZXJNaXhpbi5jb21wb25lbnRXaWxsVW5tb3VudFxuICAgIH07XG59O1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWZsdXgvc3JjL2Nvbm5lY3RGaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi91dGlscycpLFxuICAgIExpc3RlbmVyTWV0aG9kcyA9IHJlcXVpcmUoJy4vTGlzdGVuZXJNZXRob2RzJyk7XG5cbi8qKlxuICogQSBtb2R1bGUgbWVhbnQgdG8gYmUgY29uc3VtZWQgYXMgYSBtaXhpbiBieSBhIFJlYWN0IGNvbXBvbmVudC4gU3VwcGxpZXMgdGhlIG1ldGhvZHMgZnJvbVxuICogYExpc3RlbmVyTWV0aG9kc2AgbWl4aW4gYW5kIHRha2VzIGNhcmUgb2YgdGVhcmRvd24gb2Ygc3Vic2NyaXB0aW9ucy5cbiAqIE5vdGUgdGhhdCBpZiB5b3UncmUgdXNpbmcgdGhlIGBjb25uZWN0YCBtaXhpbiB5b3UgZG9uJ3QgbmVlZCB0aGlzIG1peGluLCBhcyBjb25uZWN0IHdpbGxcbiAqIGltcG9ydCBldmVyeXRoaW5nIHRoaXMgbWl4aW4gY29udGFpbnMhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gXy5leHRlbmQoe1xuXG4gICAgLyoqXG4gICAgICogQ2xlYW5zIHVwIGFsbCBsaXN0ZW5lciBwcmV2aW91c2x5IHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQ6IExpc3RlbmVyTWV0aG9kcy5zdG9wTGlzdGVuaW5nVG9BbGxcblxufSwgTGlzdGVuZXJNZXRob2RzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmx1eC9zcmMvTGlzdGVuZXJNaXhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIFJlZmx1eCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuXG4vKipcbiAqIEEgbWl4aW4gZmFjdG9yeSBmb3IgYSBSZWFjdCBjb21wb25lbnQuIE1lYW50IGFzIGEgbW9yZSBjb252ZW5pZW50IHdheSBvZiB1c2luZyB0aGUgYExpc3RlbmVyTWl4aW5gLFxuICogd2l0aG91dCBoYXZpbmcgdG8gbWFudWFsbHkgc2V0IGxpc3RlbmVycyBpbiB0aGUgYGNvbXBvbmVudERpZE1vdW50YCBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtBY3Rpb258U3RvcmV9IGxpc3RlbmFibGUgQW4gQWN0aW9uIG9yIFN0b3JlIHRoYXQgc2hvdWxkIGJlXG4gKiAgbGlzdGVuZWQgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIHJlZ2lzdGVyIGFzIGV2ZW50IGhhbmRsZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSBkZWZhdWx0Q2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIHJlZ2lzdGVyIGFzIGRlZmF1bHQgaGFuZGxlclxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IHRvIGJlIHVzZWQgYXMgYSBtaXhpbiwgd2hpY2ggc2V0cyB1cCB0aGUgbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBsaXN0ZW5hYmxlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3RlbmFibGUsY2FsbGJhY2ssaW5pdGlhbCl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB1cCB0aGUgbWl4aW4gYmVmb3JlIHRoZSBpbml0aWFsIHJlbmRlcmluZyBvY2N1cnMuIEltcG9ydCBtZXRob2RzIGZyb20gYExpc3RlbmVyTWV0aG9kc2BcbiAgICAgICAgICogYW5kIHRoZW4gbWFrZSB0aGUgY2FsbCB0byBgbGlzdGVuVG9gIHdpdGggdGhlIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZmFjdG9yeSBmdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yKHZhciBtIGluIFJlZmx1eC5MaXN0ZW5lck1ldGhvZHMpe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW21dICE9PSBSZWZsdXguTGlzdGVuZXJNZXRob2RzW21dKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbbV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJDYW4ndCBoYXZlIG90aGVyIHByb3BlcnR5ICdcIittK1wiJyB3aGVuIHVzaW5nIFJlZmx1eC5saXN0ZW5UbyFcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzW21dID0gUmVmbHV4Lkxpc3RlbmVyTWV0aG9kc1ttXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvKGxpc3RlbmFibGUsY2FsbGJhY2ssaW5pdGlhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhbnMgdXAgYWxsIGxpc3RlbmVyIHByZXZpb3VzbHkgcmVnaXN0ZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBSZWZsdXguTGlzdGVuZXJNZXRob2RzLnN0b3BMaXN0ZW5pbmdUb0FsbFxuICAgIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9saXN0ZW5Uby5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIFJlZmx1eCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcblxuLyoqXG4gKiBBIG1peGluIGZhY3RvcnkgZm9yIGEgUmVhY3QgY29tcG9uZW50LiBNZWFudCBhcyBhIG1vcmUgY29udmVuaWVudCB3YXkgb2YgdXNpbmcgdGhlIGBsaXN0ZW5lck1peGluYCxcbiAqIHdpdGhvdXQgaGF2aW5nIHRvIG1hbnVhbGx5IHNldCBsaXN0ZW5lcnMgaW4gdGhlIGBjb21wb25lbnREaWRNb3VudGAgbWV0aG9kLiBUaGlzIHZlcnNpb24gaXMgdXNlZFxuICogdG8gYXV0b21hdGljYWxseSBzZXQgdXAgYSBgbGlzdGVuVG9NYW55YCBjYWxsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBsaXN0ZW5hYmxlcyBBbiBvYmplY3Qgb2YgbGlzdGVuYWJsZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCB0byBiZSB1c2VkIGFzIGEgbWl4aW4sIHdoaWNoIHNldHMgdXAgdGhlIGxpc3RlbmVycyBmb3IgdGhlIGdpdmVuIGxpc3RlbmFibGVzLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3RlbmFibGVzKXtcbiAgICByZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHVwIHRoZSBtaXhpbiBiZWZvcmUgdGhlIGluaXRpYWwgcmVuZGVyaW5nIG9jY3Vycy4gSW1wb3J0IG1ldGhvZHMgZnJvbSBgTGlzdGVuZXJNZXRob2RzYFxuICAgICAgICAgKiBhbmQgdGhlbiBtYWtlIHRoZSBjYWxsIHRvIGBsaXN0ZW5Ub2Agd2l0aCB0aGUgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IodmFyIG0gaW4gUmVmbHV4Lkxpc3RlbmVyTWV0aG9kcyl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbbV0gIT09IFJlZmx1eC5MaXN0ZW5lck1ldGhvZHNbbV0pe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1ttXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIkNhbid0IGhhdmUgb3RoZXIgcHJvcGVydHkgJ1wiK20rXCInIHdoZW4gdXNpbmcgUmVmbHV4Lmxpc3RlblRvTWFueSFcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzW21dID0gUmVmbHV4Lkxpc3RlbmVyTWV0aG9kc1ttXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvTWFueShsaXN0ZW5hYmxlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbGVhbnMgdXAgYWxsIGxpc3RlbmVyIHByZXZpb3VzbHkgcmVnaXN0ZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBSZWZsdXguTGlzdGVuZXJNZXRob2RzLnN0b3BMaXN0ZW5pbmdUb0FsbFxuICAgIH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9saXN0ZW5Ub01hbnkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8qKlxuICogSW50ZXJuYWwgbW9kdWxlIHVzZWQgdG8gY3JlYXRlIHN0YXRpYyBhbmQgaW5zdGFuY2Ugam9pbiBtZXRob2RzXG4gKi9cblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxuICAgIF8gPSByZXF1aXJlKFwiLi91dGlsc1wiKSxcbiAgICBjcmVhdGVTdG9yZSA9IHJlcXVpcmUoXCIuL2NyZWF0ZVN0b3JlXCIpLFxuICAgIHN0cmF0ZWd5TWV0aG9kTmFtZXMgPSB7XG4gICAgICAgIHN0cmljdDogXCJqb2luU3RyaWN0XCIsXG4gICAgICAgIGZpcnN0OiBcImpvaW5MZWFkaW5nXCIsXG4gICAgICAgIGxhc3Q6IFwiam9pblRyYWlsaW5nXCIsXG4gICAgICAgIGFsbDogXCJqb2luQ29uY2F0XCJcbiAgICB9O1xuXG4vKipcbiAqIFVzZWQgaW4gYGluZGV4LmpzYCB0byBjcmVhdGUgdGhlIHN0YXRpYyBqb2luIG1ldGhvZHNcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJhdGVneSBXaGljaCBzdHJhdGVneSB0byB1c2Ugd2hlbiB0cmFja2luZyBsaXN0ZW5hYmxlIHRyaWdnZXIgYXJndW1lbnRzXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RhdGljIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBzdG9yZSB3aXRoIGEgam9pbiBsaXN0ZW4gb24gdGhlIGdpdmVuIGxpc3RlbmFibGVzIHVzaW5nIHRoZSBnaXZlbiBzdHJhdGVneVxuICovXG5leHBvcnRzLnN0YXRpY0pvaW5DcmVhdG9yID0gZnVuY3Rpb24oc3RyYXRlZ3kpe1xuICAgIHJldHVybiBmdW5jdGlvbigvKiBsaXN0ZW5hYmxlcy4uLiAqLykge1xuICAgICAgICB2YXIgbGlzdGVuYWJsZXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVTdG9yZSh7XG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRoaXNbc3RyYXRlZ3lNZXRob2ROYW1lc1tzdHJhdGVneV1dLmFwcGx5KHRoaXMsbGlzdGVuYWJsZXMuY29uY2F0KFwidHJpZ2dlckFzeW5jXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cbi8qKlxuICogVXNlZCBpbiBgTGlzdGVuZXJNZXRob2RzLmpzYCB0byBjcmVhdGUgdGhlIGluc3RhbmNlIGpvaW4gbWV0aG9kc1xuICogQHBhcmFtIHtTdHJpbmd9IHN0cmF0ZWd5IFdoaWNoIHN0cmF0ZWd5IHRvIHVzZSB3aGVuIHRyYWNraW5nIGxpc3RlbmFibGUgdHJpZ2dlciBhcmd1bWVudHNcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQW4gaW5zdGFuY2UgbWV0aG9kIHdoaWNoIHNldHMgdXAgYSBqb2luIGxpc3RlbiBvbiB0aGUgZ2l2ZW4gbGlzdGVuYWJsZXMgdXNpbmcgdGhlIGdpdmVuIHN0cmF0ZWd5XG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VKb2luQ3JlYXRvciA9IGZ1bmN0aW9uKHN0cmF0ZWd5KXtcbiAgICByZXR1cm4gZnVuY3Rpb24oLyogbGlzdGVuYWJsZXMuLi4sIGNhbGxiYWNrKi8pe1xuICAgICAgICBfLnRocm93SWYoYXJndW1lbnRzLmxlbmd0aCA8IDMsJ0Nhbm5vdCBjcmVhdGUgYSBqb2luIHdpdGggbGVzcyB0aGFuIDIgbGlzdGVuYWJsZXMhJyk7XG4gICAgICAgIHZhciBsaXN0ZW5hYmxlcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gbGlzdGVuYWJsZXMucG9wKCksXG4gICAgICAgICAgICBudW1iZXJPZkxpc3RlbmFibGVzID0gbGlzdGVuYWJsZXMubGVuZ3RoLFxuICAgICAgICAgICAgam9pbiA9IHtcbiAgICAgICAgICAgICAgICBudW1iZXJPZkxpc3RlbmFibGVzOiBudW1iZXJPZkxpc3RlbmFibGVzLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzW2NhbGxiYWNrXXx8Y2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgbGlzdGVuZXI6IHRoaXMsXG4gICAgICAgICAgICAgICAgc3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgICAgICAgICB9LCBpLCBjYW5jZWxzID0gW10sIHN1Ym9iajtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bWJlck9mTGlzdGVuYWJsZXM7IGkrKykge1xuICAgICAgICAgICAgXy50aHJvd0lmKHRoaXMudmFsaWRhdGVMaXN0ZW5pbmcobGlzdGVuYWJsZXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtYmVyT2ZMaXN0ZW5hYmxlczsgaSsrKSB7XG4gICAgICAgICAgICBjYW5jZWxzLnB1c2gobGlzdGVuYWJsZXNbaV0ubGlzdGVuKG5ld0xpc3RlbmVyKGksam9pbiksdGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIHJlc2V0KGpvaW4pO1xuICAgICAgICBzdWJvYmogPSB7bGlzdGVuYWJsZTogbGlzdGVuYWJsZXN9O1xuICAgICAgICBzdWJvYmouc3RvcCA9IG1ha2VTdG9wcGVyKHN1Ym9iaixjYW5jZWxzLHRoaXMpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSAodGhpcy5zdWJzY3JpcHRpb25zIHx8IFtdKS5jb25jYXQoc3Vib2JqKTtcbiAgICAgICAgcmV0dXJuIHN1Ym9iajtcbiAgICB9O1xufTtcblxuLy8gLS0tLSBpbnRlcm5hbCBqb2luIGZ1bmN0aW9ucyAtLS0tXG5cbmZ1bmN0aW9uIG1ha2VTdG9wcGVyKHN1Ym9iaixjYW5jZWxzLGNvbnRleHQpe1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHN1YnMgPSBjb250ZXh0LnN1YnNjcmlwdGlvbnMsXG4gICAgICAgICAgICBpbmRleCA9IChzdWJzID8gc3Vicy5pbmRleE9mKHN1Ym9iaikgOiAtMSk7XG4gICAgICAgIF8udGhyb3dJZihpbmRleCA9PT0gLTEsJ1RyaWVkIHRvIHJlbW92ZSBqb2luIGFscmVhZHkgZ29uZSBmcm9tIHN1YnNjcmlwdGlvbnMgbGlzdCEnKTtcbiAgICAgICAgZm9yKGk9MDtpIDwgY2FuY2Vscy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjYW5jZWxzW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3Vicy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlc2V0KGpvaW4pIHtcbiAgICBqb2luLmxpc3RlbmFibGVzRW1pdHRlZCA9IG5ldyBBcnJheShqb2luLm51bWJlck9mTGlzdGVuYWJsZXMpO1xuICAgIGpvaW4uYXJncyA9IG5ldyBBcnJheShqb2luLm51bWJlck9mTGlzdGVuYWJsZXMpO1xufVxuXG5mdW5jdGlvbiBuZXdMaXN0ZW5lcihpLGpvaW4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjYWxsYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKGpvaW4ubGlzdGVuYWJsZXNFbWl0dGVkW2ldKXtcbiAgICAgICAgICAgIHN3aXRjaChqb2luLnN0cmF0ZWd5KXtcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaWN0XCI6IHRocm93IG5ldyBFcnJvcihcIlN0cmljdCBqb2luIGZhaWxlZCBiZWNhdXNlIGxpc3RlbmVyIHRyaWdnZXJlZCB0d2ljZS5cIik7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxhc3RcIjogam9pbi5hcmdzW2ldID0gY2FsbGFyZ3M7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhbGxcIjogam9pbi5hcmdzW2ldLnB1c2goY2FsbGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgam9pbi5saXN0ZW5hYmxlc0VtaXR0ZWRbaV0gPSB0cnVlO1xuICAgICAgICAgICAgam9pbi5hcmdzW2ldID0gKGpvaW4uc3RyYXRlZ3k9PT1cImFsbFwiP1tjYWxsYXJnc106Y2FsbGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVtaXRJZkFsbExpc3RlbmFibGVzRW1pdHRlZChqb2luKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBlbWl0SWZBbGxMaXN0ZW5hYmxlc0VtaXR0ZWQoam9pbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgam9pbi5udW1iZXJPZkxpc3RlbmFibGVzOyBpKyspIHtcbiAgICAgICAgaWYgKCFqb2luLmxpc3RlbmFibGVzRW1pdHRlZFtpXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGpvaW4uY2FsbGJhY2suYXBwbHkoam9pbi5saXN0ZW5lcixqb2luLmFyZ3MpO1xuICAgIHJlc2V0KGpvaW4pO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy9qb2lucy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLypcbiAqIGlzT2JqZWN0LCBleHRlbmQsIGlzRnVuY3Rpb24sIGlzQXJndW1lbnRzIGFyZSB0YWtlbiBmcm9tIHVuZGVzY29yZS9sb2Rhc2ggaW5cbiAqIG9yZGVyIHRvIHJlbW92ZSB0aGUgZGVwZW5kZW5jeVxuICovXG52YXIgaXNPYmplY3QgPSBleHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqO1xufTtcblxuZXhwb3J0cy5leHRlbmQgPSBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgdmFyIHNvdXJjZSwgcHJvcDtcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgZm9yIChwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBwcm9wKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBwcm9wZXJ0eURlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbmV4cG9ydHMuRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRlbWl0dGVyMycpO1xuXG5leHBvcnRzLm5leHRUaWNrID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn07XG5cbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XG59O1xuXG5leHBvcnRzLmNhbGxiYWNrTmFtZSA9IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgcmV0dXJuIFwib25cIitleHBvcnRzLmNhcGl0YWxpemUoc3RyaW5nKTtcbn07XG5cbmV4cG9ydHMub2JqZWN0ID0gZnVuY3Rpb24oa2V5cyx2YWxzKXtcbiAgICB2YXIgbz17fSwgaT0wO1xuICAgIGZvcig7aTxrZXlzLmxlbmd0aDtpKyspe1xuICAgICAgICBvW2tleXNbaV1dID0gdmFsc1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG59O1xuXG5leHBvcnRzLlByb21pc2UgPSByZXF1aXJlKFwibmF0aXZlLXByb21pc2Utb25seVwiKTtcblxuZXhwb3J0cy5jcmVhdGVQcm9taXNlID0gZnVuY3Rpb24ocmVzb2x2ZXIpIHtcbiAgICByZXR1cm4gbmV3IGV4cG9ydHMuUHJvbWlzZShyZXNvbHZlcik7XG59O1xuXG5leHBvcnRzLmlzQXJndW1lbnRzID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAoJ2NhbGxlZScgaW4gdmFsdWUpICYmIHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInO1xufTtcblxuZXhwb3J0cy50aHJvd0lmID0gZnVuY3Rpb24odmFsLG1zZyl7XG4gICAgaWYgKHZhbCl7XG4gICAgICAgIHRocm93IEVycm9yKG1zZ3x8dmFsKTtcbiAgICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L3NyYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cy5jcmVhdGVkU3RvcmVzID0gW107XG5cbmV4cG9ydHMuY3JlYXRlZEFjdGlvbnMgPSBbXTtcblxuZXhwb3J0cy5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHdoaWxlKGV4cG9ydHMuY3JlYXRlZFN0b3Jlcy5sZW5ndGgpIHtcbiAgICAgICAgZXhwb3J0cy5jcmVhdGVkU3RvcmVzLnBvcCgpO1xuICAgIH1cbiAgICB3aGlsZShleHBvcnRzLmNyZWF0ZWRBY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICBleHBvcnRzLmNyZWF0ZWRBY3Rpb25zLnBvcCgpO1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWZsdXgvc3JjL0tlZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliLycpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWl4KGRlZikge1xuICAgIHZhciBjb21wb3NlZCA9IHtcbiAgICAgICAgaW5pdDogW10sXG4gICAgICAgIHByZUVtaXQ6IFtdLFxuICAgICAgICBzaG91bGRFbWl0OiBbXVxuICAgIH07XG5cbiAgICB2YXIgdXBkYXRlZCA9IChmdW5jdGlvbiBtaXhEZWYobWl4aW4pIHtcbiAgICAgICAgdmFyIG1peGVkID0ge307XG4gICAgICAgIGlmIChtaXhpbi5taXhpbnMpIHtcbiAgICAgICAgICAgIG1peGluLm1peGlucy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJNaXhpbikge1xuICAgICAgICAgICAgICAgIF8uZXh0ZW5kKG1peGVkLCBtaXhEZWYoc3ViTWl4aW4pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIF8uZXh0ZW5kKG1peGVkLCBtaXhpbik7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbXBvc2VkKS5mb3JFYWNoKGZ1bmN0aW9uIChjb21wb3NhYmxlKSB7XG4gICAgICAgICAgICBpZiAobWl4aW4uaGFzT3duUHJvcGVydHkoY29tcG9zYWJsZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wb3NlZFtjb21wb3NhYmxlXS5wdXNoKG1peGluW2NvbXBvc2FibGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtaXhlZDtcbiAgICB9KGRlZikpO1xuXG4gICAgaWYgKGNvbXBvc2VkLmluaXQubGVuZ3RoID4gMSkge1xuICAgICAgICB1cGRhdGVkLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIGNvbXBvc2VkLmluaXQuZm9yRWFjaChmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgICAgICAgICAgIGluaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGNvbXBvc2VkLnByZUVtaXQubGVuZ3RoID4gMSkge1xuICAgICAgICB1cGRhdGVkLnByZUVtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zZWQucHJlRW1pdC5yZWR1Y2UoZnVuY3Rpb24gKGFyZ3MsIHByZUVtaXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBwcmVFbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gYXJncyA6IFtuZXdWYWx1ZV07XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChjb21wb3NlZC5zaG91bGRFbWl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdXBkYXRlZC5zaG91bGRFbWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICByZXR1cm4gIWNvbXBvc2VkLnNob3VsZEVtaXQuc29tZShmdW5jdGlvbiAoc2hvdWxkRW1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhc2hvdWxkRW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhjb21wb3NlZCkuZm9yRWFjaChmdW5jdGlvbiAoY29tcG9zYWJsZSkge1xuICAgICAgICBpZiAoY29tcG9zZWRbY29tcG9zYWJsZV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB1cGRhdGVkW2NvbXBvc2FibGVdID0gY29tcG9zZWRbY29tcG9zYWJsZV1bMF07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlZmx1eC9zcmMvbWl4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RvcmUsIGRlZmluaXRpb24pIHtcbiAgZm9yICh2YXIgbmFtZSBpbiBkZWZpbml0aW9uKSB7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmluaXRpb24sIG5hbWUpO1xuXG4gICAgICAgIGlmICghcHJvcGVydHlEZXNjcmlwdG9yLnZhbHVlIHx8IHR5cGVvZiBwcm9wZXJ0eURlc2NyaXB0b3IudmFsdWUgIT09ICdmdW5jdGlvbicgfHwgIWRlZmluaXRpb24uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RvcmVbbmFtZV0gPSBkZWZpbml0aW9uW25hbWVdLmJpbmQoc3RvcmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGRlZmluaXRpb25bbmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSAhPT0gJ2Z1bmN0aW9uJyB8fCAhZGVmaW5pdGlvbi5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yZVtuYW1lXSA9IHByb3BlcnR5LmJpbmQoc3RvcmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdG9yZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWZsdXgvc3JjL2JpbmRNZXRob2RzLmpzXG4gKiogbW9kdWxlIGlkID0gMTk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIGFzc2lnbiAgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykuYXNzaWduO1xudmFyIFJlbmRlcmVyICAgICA9IHJlcXVpcmUoJy4vcmVuZGVyZXInKTtcbnZhciBQYXJzZXJDb3JlICAgPSByZXF1aXJlKCcuL3BhcnNlcl9jb3JlJyk7XG52YXIgUGFyc2VyQmxvY2sgID0gcmVxdWlyZSgnLi9wYXJzZXJfYmxvY2snKTtcbnZhciBQYXJzZXJJbmxpbmUgPSByZXF1aXJlKCcuL3BhcnNlcl9pbmxpbmUnKTtcbnZhciBSdWxlciAgICAgICAgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cbi8qKlxuICogUHJlc2V0IGNvbmZpZ3NcbiAqL1xuXG52YXIgY29uZmlnID0ge1xuICAnZGVmYXVsdCc6ICAgIHJlcXVpcmUoJy4vY29uZmlncy9kZWZhdWx0JyksXG4gICdmdWxsJzogICAgICAgcmVxdWlyZSgnLi9jb25maWdzL2Z1bGwnKSxcbiAgJ2NvbW1vbm1hcmsnOiByZXF1aXJlKCcuL2NvbmZpZ3MvY29tbW9ubWFyaycpXG59O1xuXG4vKipcbiAqIFRoZSBgU3RhdGVDb3JlYCBjbGFzcyBtYW5hZ2VzIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBgc2VsZmAgUmVtYXJrYWJsZSBpbnN0YW5jZVxuICogQHBhcmFtIHtTdHJpbmd9IGBzdHJgIE1hcmtkb3duIHN0cmluZ1xuICogQHBhcmFtIHtPYmplY3R9IGBlbnZgXG4gKi9cblxuZnVuY3Rpb24gU3RhdGVDb3JlKHNlbGYsIHN0ciwgZW52KSB7XG4gIHRoaXMuc3JjID0gc3RyO1xuICB0aGlzLmVudiA9IGVudjtcbiAgdGhpcy5vcHRpb25zID0gc2VsZi5vcHRpb25zO1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLmlubGluZU1vZGUgPSBmYWxzZTtcblxuICB0aGlzLmlubGluZSA9IHNlbGYuaW5saW5lO1xuICB0aGlzLmJsb2NrID0gc2VsZi5ibG9jaztcbiAgdGhpcy5yZW5kZXJlciA9IHNlbGYucmVuZGVyZXI7XG4gIHRoaXMudHlwb2dyYXBoZXIgPSBzZWxmLnR5cG9ncmFwaGVyO1xufVxuXG4vKipcbiAqIFRoZSBtYWluIGBSZW1hcmthYmxlYCBjbGFzcy4gQ3JlYXRlIGFuIGluc3RhbmNlIG9mXG4gKiBgUmVtYXJrYWJsZWAgd2l0aCBhIGBwcmVzZXRgIGFuZC9vciBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGBwcmVzZXRgIElmIG5vIHByZXNldCBpcyBnaXZlbiwgYGRlZmF1bHRgIGlzIHVzZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKi9cblxuZnVuY3Rpb24gUmVtYXJrYWJsZShwcmVzZXQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBwcmVzZXQgIT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHByZXNldDtcbiAgICBwcmVzZXQgPSAnZGVmYXVsdCc7XG4gIH1cblxuICB0aGlzLmlubGluZSAgID0gbmV3IFBhcnNlcklubGluZSgpO1xuICB0aGlzLmJsb2NrICAgID0gbmV3IFBhcnNlckJsb2NrKCk7XG4gIHRoaXMuY29yZSAgICAgPSBuZXcgUGFyc2VyQ29yZSgpO1xuICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG4gIHRoaXMucnVsZXIgICAgPSBuZXcgUnVsZXIoKTtcblxuICB0aGlzLm9wdGlvbnMgID0ge307XG4gIHRoaXMuY29uZmlndXJlKGNvbmZpZ1twcmVzZXRdKTtcbiAgdGhpcy5zZXQob3B0aW9ucyB8fCB7fSk7XG59XG5cbi8qKlxuICogU2V0IG9wdGlvbnMgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gcGFzc2luZyB0aGVtXG4gKiB0byB0aGUgY29uc3RydWN0b3IuXG4gKlxuICogYGBganNcbiAqIG1kLnNldCh7dHlwb2dyYXBoZXI6IHRydWV9KTtcbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBhc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbn07XG5cbi8qKlxuICogQmF0Y2ggbG9hZGVyIGZvciBjb21wb25lbnRzIHJ1bGVzIHN0YXRlcywgYW5kIG9wdGlvbnNcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBwcmVzZXRzYFxuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChwcmVzZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXByZXNldHMpIHsgdGhyb3cgbmV3IEVycm9yKCdXcm9uZyBgcmVtYXJrYWJsZWAgcHJlc2V0LCBjaGVjayBuYW1lL2NvbnRlbnQnKTsgfVxuICBpZiAocHJlc2V0cy5vcHRpb25zKSB7IHNlbGYuc2V0KHByZXNldHMub3B0aW9ucyk7IH1cbiAgaWYgKHByZXNldHMuY29tcG9uZW50cykge1xuICAgIE9iamVjdC5rZXlzKHByZXNldHMuY29tcG9uZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKHByZXNldHMuY29tcG9uZW50c1tuYW1lXS5ydWxlcykge1xuICAgICAgICBzZWxmW25hbWVdLnJ1bGVyLmVuYWJsZShwcmVzZXRzLmNvbXBvbmVudHNbbmFtZV0ucnVsZXMsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIFVzZSBhIHBsdWdpbi5cbiAqXG4gKiBgYGBqc1xuICogdmFyIG1kID0gbmV3IFJlbWFya2FibGUoKTtcbiAqXG4gKiBtZC51c2UocGx1Z2luMSlcbiAqICAgLnVzZShwbHVnaW4yLCBvcHRzKVxuICogICAudXNlKHBsdWdpbjMpO1xuICogYGBgXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGBwbHVnaW5gXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBgUmVtYXJrYWJsZWAgZm9yIGNoYWluaW5nXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKHBsdWdpbiwgb3B0aW9ucykge1xuICBwbHVnaW4odGhpcywgb3B0aW9ucyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIFBhcnNlIHRoZSBpbnB1dCBgc3RyaW5nYCBhbmQgcmV0dXJuIGEgdG9rZW5zIGFycmF5LlxuICogTW9kaWZpZXMgYGVudmAgd2l0aCBkZWZpbml0aW9ucyBkYXRhLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHN0cmluZ2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge0FycmF5fSBBcnJheSBvZiB0b2tlbnNcbiAqL1xuXG5SZW1hcmthYmxlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGVDb3JlKHRoaXMsIHN0ciwgZW52KTtcbiAgdGhpcy5jb3JlLnByb2Nlc3Moc3RhdGUpO1xuICByZXR1cm4gc3RhdGUudG9rZW5zO1xufTtcblxuLyoqXG4gKiBUaGUgbWFpbiBgLnJlbmRlcigpYCBtZXRob2QgdGhhdCBkb2VzIGFsbCB0aGUgbWFnaWMgOilcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlbmRlcmVkIEhUTUwuXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKHN0ciwgZW52KSB7XG4gIGVudiA9IGVudiB8fCB7fTtcbiAgcmV0dXJuIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMucGFyc2Uoc3RyLCBlbnYpLCB0aGlzLm9wdGlvbnMsIGVudik7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb250ZW50IGBzdHJpbmdgIGFzIGEgc2luZ2xlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBlbnZgXG4gKiBAcmV0dXJuIHtBcnJheX0gQXJyYXkgb2YgdG9rZW5zXG4gKi9cblxuUmVtYXJrYWJsZS5wcm90b3R5cGUucGFyc2VJbmxpbmUgPSBmdW5jdGlvbiAoc3RyLCBlbnYpIHtcbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlQ29yZSh0aGlzLCBzdHIsIGVudik7XG4gIHN0YXRlLmlubGluZU1vZGUgPSB0cnVlO1xuICB0aGlzLmNvcmUucHJvY2VzcyhzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZS50b2tlbnM7XG59O1xuXG4vKipcbiAqIFJlbmRlciBhIHNpbmdsZSBjb250ZW50IGBzdHJpbmdgLCB3aXRob3V0IHdyYXBwaW5nIGl0XG4gKiB0byBwYXJhZ3JhcGhzXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblJlbWFya2FibGUucHJvdG90eXBlLnJlbmRlcklubGluZSA9IGZ1bmN0aW9uIChzdHIsIGVudikge1xuICBlbnYgPSBlbnYgfHwge307XG4gIHJldHVybiB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnBhcnNlSW5saW5lKHN0ciwgZW52KSwgdGhpcy5vcHRpb25zLCBlbnYpO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlbWFya2FibGVgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZW1hcmthYmxlO1xuXG4vKipcbiAqIEV4cG9zZSBgdXRpbHNgLCBVc2VmdWwgaGVscGVyIGZ1bmN0aW9ucyBmb3IgY3VzdG9tXG4gKiByZW5kZXJpbmcuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMudXRpbHMgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBFdmVudEVtaXR0ZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRXZlbnQgaGFuZGxlciB0byBiZSBjYWxsZWQuXG4gKiBAcGFyYW0ge01peGVkfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmN0aW9uIGV4ZWN1dGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IGVtaXQgb25jZVxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIEV2ZW50RW1pdHRlciBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogRXZlbnRFbWl0dGVyIGludGVyZmFjZS5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHsgLyogTm90aGluZyB0byBzZXQgKi8gfVxuXG4vKipcbiAqIEhvbGRzIHRoZSBhc3NpZ25lZCBFdmVudEVtaXR0ZXJzIGJ5IG5hbWUuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXR1cm4gYSBsaXN0IG9mIGFzc2lnbmVkIGV2ZW50IGxpc3RlbmVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50cyB0aGF0IHNob3VsZCBiZSBsaXN0ZWQuXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW2V2ZW50XSkgcmV0dXJuIFtdO1xuICBpZiAodGhpcy5fZXZlbnRzW2V2ZW50XS5mbikgcmV0dXJuIFt0aGlzLl9ldmVudHNbZXZlbnRdLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuX2V2ZW50c1tldmVudF0ubGVuZ3RoLCBlZSA9IG5ldyBBcnJheShsKTsgaSA8IGw7IGkrKykge1xuICAgIGVlW2ldID0gdGhpcy5fZXZlbnRzW2V2ZW50XVtpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogRW1pdCBhbiBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBldmVudCBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBuYW1lIG9mIHRoZSBldmVudC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBJbmRpY2F0aW9uIGlmIHdlJ3ZlIGVtaXR0ZWQgYW4gZXZlbnQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1tldmVudF0pIHJldHVybiBmYWxzZTtcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGxpc3RlbmVycy5mbikge1xuICAgIGlmIChsaXN0ZW5lcnMub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzLmZuLCB0cnVlKTtcblxuICAgIHN3aXRjaCAobGVuKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCksIHRydWU7XG4gICAgICBjYXNlIDI6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEpLCB0cnVlO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICBjYXNlIDQ6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMyksIHRydWU7XG4gICAgICBjYXNlIDU6IHJldHVybiBsaXN0ZW5lcnMuZm4uY2FsbChsaXN0ZW5lcnMuY29udGV4dCwgYTEsIGEyLCBhMywgYTQpLCB0cnVlO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICwgajtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbaV0uZm4sIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICghYXJncykgZm9yIChqID0gMSwgYXJncyA9IG5ldyBBcnJheShsZW4gLTEpOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaiAtIDFdID0gYXJndW1lbnRzW2pdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgbmV3IEV2ZW50TGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgTmFtZSBvZiB0aGUgZXZlbnQuXG4gKiBAcGFyYW0ge0Z1bmN0b259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cykgdGhpcy5fZXZlbnRzID0ge307XG4gIGlmICghdGhpcy5fZXZlbnRzW2V2ZW50XSkgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IGxpc3RlbmVyO1xuICBlbHNlIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50c1tldmVudF0uZm4pIHRoaXMuX2V2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgZWxzZSB0aGlzLl9ldmVudHNbZXZlbnRdID0gW1xuICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50XSwgbGlzdGVuZXJcbiAgICBdO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZCBhbiBFdmVudExpc3RlbmVyIHRoYXQncyBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIENhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBUaGUgY29udGV4dCBvZiB0aGUgZnVuY3Rpb24uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICB2YXIgbGlzdGVuZXIgPSBuZXcgRUUoZm4sIGNvbnRleHQgfHwgdGhpcywgdHJ1ZSk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpIHRoaXMuX2V2ZW50cyA9IHt9O1xuICBpZiAoIXRoaXMuX2V2ZW50c1tldmVudF0pIHRoaXMuX2V2ZW50c1tldmVudF0gPSBsaXN0ZW5lcjtcbiAgZWxzZSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZlbnRdLmZuKSB0aGlzLl9ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICAgIGVsc2UgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IFtcbiAgICAgIHRoaXMuX2V2ZW50c1tldmVudF0sIGxpc3RlbmVyXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgd2Ugd2FudCB0byByZW1vdmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgdGhhdCB3ZSBuZWVkIHRvIGZpbmQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25jZSBsaXN0ZW5lcnMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGZuLCBvbmNlKSB7XG4gIGlmICghdGhpcy5fZXZlbnRzIHx8ICF0aGlzLl9ldmVudHNbZXZlbnRdKSByZXR1cm4gdGhpcztcblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2ZW50XVxuICAgICwgZXZlbnRzID0gW107XG5cbiAgaWYgKGZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5mbiAmJiAobGlzdGVuZXJzLmZuICE9PSBmbiB8fCAob25jZSAmJiAhbGlzdGVuZXJzLm9uY2UpKSkge1xuICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzKTtcbiAgICB9XG4gICAgaWYgKCFsaXN0ZW5lcnMuZm4pIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8IChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkpIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gIC8vXG4gIGlmIChldmVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1tldmVudF07XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb3Igb25seSB0aGUgbGlzdGVuZXJzIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgd2FudCB0byByZW1vdmUgYWxsIGxpc3RlbmVycyBmb3IuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICBpZiAoIXRoaXMuX2V2ZW50cykgcmV0dXJuIHRoaXM7XG5cbiAgaWYgKGV2ZW50KSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgZWxzZSB0aGlzLl9ldmVudHMgPSB7fTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFwcGx5IGFueW1vcmUuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyMiA9IEV2ZW50RW1pdHRlcjtcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIzID0gRXZlbnRFbWl0dGVyO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBtb2R1bGUuXG4vL1xubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWZsdXgvfi9ldmVudGVtaXR0ZXIzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvKiEgTmF0aXZlIFByb21pc2UgT25seVxuICAgIHYwLjcuNi1hIChjKSBLeWxlIFNpbXBzb25cbiAgICBNSVQgTGljZW5zZTogaHR0cDovL2dldGlmeS5taXQtbGljZW5zZS5vcmdcbiovXG4hZnVuY3Rpb24odCxuLGUpe25bdF09blt0XXx8ZSgpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPW5bdF06XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gblt0XX0pfShcIlByb21pc2VcIixcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDp0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LG4pe2wuYWRkKHQsbiksaHx8KGg9eShsLmRyYWluKSl9ZnVuY3Rpb24gbih0KXt2YXIgbixlPXR5cGVvZiB0O3JldHVybiBudWxsPT10fHxcIm9iamVjdFwiIT1lJiZcImZ1bmN0aW9uXCIhPWV8fChuPXQudGhlbiksXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uOiExfWZ1bmN0aW9uIGUoKXtmb3IodmFyIHQ9MDt0PHRoaXMuY2hhaW4ubGVuZ3RoO3QrKylvKHRoaXMsMT09PXRoaXMuc3RhdGU/dGhpcy5jaGFpblt0XS5zdWNjZXNzOnRoaXMuY2hhaW5bdF0uZmFpbHVyZSx0aGlzLmNoYWluW3RdKTt0aGlzLmNoYWluLmxlbmd0aD0wfWZ1bmN0aW9uIG8odCxlLG8pe3ZhciByLGk7dHJ5e2U9PT0hMT9vLnJlamVjdCh0Lm1zZyk6KHI9ZT09PSEwP3QubXNnOmUuY2FsbCh2b2lkIDAsdC5tc2cpLHI9PT1vLnByb21pc2U/by5yZWplY3QoVHlwZUVycm9yKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk6KGk9bihyKSk/aS5jYWxsKHIsby5yZXNvbHZlLG8ucmVqZWN0KTpvLnJlc29sdmUocikpfWNhdGNoKGMpe28ucmVqZWN0KGMpfX1mdW5jdGlvbiByKG8pe3ZhciBjLHUsYT10aGlzO2lmKCFhLnRyaWdnZXJlZCl7YS50cmlnZ2VyZWQ9ITAsYS5kZWYmJihhPWEuZGVmKTt0cnl7KGM9bihvKSk/KHU9bmV3IGYoYSksYy5jYWxsKG8sZnVuY3Rpb24oKXtyLmFwcGx5KHUsYXJndW1lbnRzKX0sZnVuY3Rpb24oKXtpLmFwcGx5KHUsYXJndW1lbnRzKX0pKTooYS5tc2c9byxhLnN0YXRlPTEsYS5jaGFpbi5sZW5ndGg+MCYmdChlLGEpKX1jYXRjaChzKXtpLmNhbGwodXx8bmV3IGYoYSkscyl9fX1mdW5jdGlvbiBpKG4pe3ZhciBvPXRoaXM7by50cmlnZ2VyZWR8fChvLnRyaWdnZXJlZD0hMCxvLmRlZiYmKG89by5kZWYpLG8ubXNnPW4sby5zdGF0ZT0yLG8uY2hhaW4ubGVuZ3RoPjAmJnQoZSxvKSl9ZnVuY3Rpb24gYyh0LG4sZSxvKXtmb3IodmFyIHI9MDtyPG4ubGVuZ3RoO3IrKykhZnVuY3Rpb24ocil7dC5yZXNvbHZlKG5bcl0pLnRoZW4oZnVuY3Rpb24odCl7ZShyLHQpfSxvKX0ocil9ZnVuY3Rpb24gZih0KXt0aGlzLmRlZj10LHRoaXMudHJpZ2dlcmVkPSExfWZ1bmN0aW9uIHUodCl7dGhpcy5wcm9taXNlPXQsdGhpcy5zdGF0ZT0wLHRoaXMudHJpZ2dlcmVkPSExLHRoaXMuY2hhaW49W10sdGhpcy5tc2c9dm9pZCAwfWZ1bmN0aW9uIGEobil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtpZigwIT09dGhpcy5fX05QT19fKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIHByb21pc2VcIik7dGhpcy5fX05QT19fPTE7dmFyIG89bmV3IHUodGhpcyk7dGhpcy50aGVuPWZ1bmN0aW9uKG4scil7dmFyIGk9e3N1Y2Nlc3M6XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uOiEwLGZhaWx1cmU6XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yOiExfTtyZXR1cm4gaS5wcm9taXNlPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGZ1bmN0aW9uKHQsbil7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTtpLnJlc29sdmU9dCxpLnJlamVjdD1ufSksby5jaGFpbi5wdXNoKGkpLDAhPT1vLnN0YXRlJiZ0KGUsbyksaS5wcm9taXNlfSx0aGlzW1wiY2F0Y2hcIl09ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsdCl9O3RyeXtuLmNhbGwodm9pZCAwLGZ1bmN0aW9uKHQpe3IuY2FsbChvLHQpfSxmdW5jdGlvbih0KXtpLmNhbGwobyx0KX0pfWNhdGNoKGMpe2kuY2FsbChvLGMpfX12YXIgcyxoLGwscD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLHk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNldEltbWVkaWF0ZT9mdW5jdGlvbih0KXtyZXR1cm4gc2V0SW1tZWRpYXRlKHQpfTpzZXRUaW1lb3V0O3RyeXtPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJ4XCIse30pLHM9ZnVuY3Rpb24odCxuLGUsbyl7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se3ZhbHVlOmUsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOm8hPT0hMX0pfX1jYXRjaChkKXtzPWZ1bmN0aW9uKHQsbixlKXtyZXR1cm4gdFtuXT1lLHR9fWw9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsbil7dGhpcy5mbj10LHRoaXMuc2VsZj1uLHRoaXMubmV4dD12b2lkIDB9dmFyIG4sZSxvO3JldHVybnthZGQ6ZnVuY3Rpb24ocixpKXtvPW5ldyB0KHIsaSksZT9lLm5leHQ9bzpuPW8sZT1vLG89dm9pZCAwfSxkcmFpbjpmdW5jdGlvbigpe3ZhciB0PW47Zm9yKG49ZT1oPXZvaWQgMDt0Oyl0LmZuLmNhbGwodC5zZWxmKSx0PXQubmV4dH19fSgpO3ZhciBnPXMoe30sXCJjb25zdHJ1Y3RvclwiLGEsITEpO3JldHVybiBzKGEsXCJwcm90b3R5cGVcIixnLCExKSxzKGcsXCJfX05QT19fXCIsMCwhMSkscyhhLFwicmVzb2x2ZVwiLGZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7cmV0dXJuIHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYxPT09dC5fX05QT19fP3Q6bmV3IG4oZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBufHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IFR5cGVFcnJvcihcIk5vdCBhIGZ1bmN0aW9uXCIpO24odCl9KX0pLHMoYSxcInJlamVjdFwiLGZ1bmN0aW9uKHQpe3JldHVybiBuZXcgdGhpcyhmdW5jdGlvbihuLGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG58fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7ZSh0KX0pfSkscyhhLFwiYWxsXCIsZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm5cIltvYmplY3QgQXJyYXldXCIhPXAuY2FsbCh0KT9uLnJlamVjdChUeXBlRXJyb3IoXCJOb3QgYW4gYXJyYXlcIikpOjA9PT10Lmxlbmd0aD9uLnJlc29sdmUoW10pOm5ldyBuKGZ1bmN0aW9uKGUsbyl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbyl0aHJvdyBUeXBlRXJyb3IoXCJOb3QgYSBmdW5jdGlvblwiKTt2YXIgcj10Lmxlbmd0aCxpPUFycmF5KHIpLGY9MDtjKG4sdCxmdW5jdGlvbih0LG4pe2lbdF09biwrK2Y9PT1yJiZlKGkpfSxvKX0pfSkscyhhLFwicmFjZVwiLGZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiIT1wLmNhbGwodCk/bi5yZWplY3QoVHlwZUVycm9yKFwiTm90IGFuIGFycmF5XCIpKTpuZXcgbihmdW5jdGlvbihlLG8pe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGV8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIG8pdGhyb3cgVHlwZUVycm9yKFwiTm90IGEgZnVuY3Rpb25cIik7YyhuLHQsZnVuY3Rpb24odCxuKXtlKG4pfSxvKX0pfSksYX0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVmbHV4L34vbmF0aXZlLXByb21pc2Utb25seS9ucG8uanNcbiAqKiBtb2R1bGUgaWQgPSAyMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHR5cGVPZihvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIHR5cGVPZihvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGhhcyhvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0XG4gICAgPyBoYXNPd24uY2FsbChvYmplY3QsIGtleSlcbiAgICA6IGZhbHNlO1xufVxuXG4vLyBFeHRlbmQgb2JqZWN0c1xuLy9cbmZ1bmN0aW9uIGFzc2lnbihvYmogLypmcm9tMSwgZnJvbTIsIGZyb20zLCAuLi4qLykge1xuICB2YXIgc291cmNlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGlmICghc291cmNlKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNvdXJjZSArICdtdXN0IGJlIG9iamVjdCcpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBvYmpba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gb2JqO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgVU5FU0NBUEVfTURfUkUgPSAvXFxcXChbXFxcXCFcIiMkJSYnKCkqKywuXFwvOjs8PT4/QFtcXF1eX2B7fH1+LV0pL2c7XG5cbmZ1bmN0aW9uIHVuZXNjYXBlTWQoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignXFxcXCcpIDwgMCkgeyByZXR1cm4gc3RyOyB9XG4gIHJldHVybiBzdHIucmVwbGFjZShVTkVTQ0FQRV9NRF9SRSwgJyQxJyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbnRpdHlDb2RlKGMpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgLy8gYnJva2VuIHNlcXVlbmNlXG4gIGlmIChjID49IDB4RDgwMCAmJiBjIDw9IDB4REZGRikgeyByZXR1cm4gZmFsc2U7IH1cbiAgLy8gbmV2ZXIgdXNlZFxuICBpZiAoYyA+PSAweEZERDAgJiYgYyA8PSAweEZERUYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmICgoYyAmIDB4RkZGRikgPT09IDB4RkZGRiB8fCAoYyAmIDB4RkZGRikgPT09IDB4RkZGRSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgLy8gY29udHJvbCBjb2Rlc1xuICBpZiAoYyA+PSAweDAwICYmIGMgPD0gMHgwOCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGMgPT09IDB4MEIpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChjID49IDB4MEUgJiYgYyA8PSAweDFGKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYyA+PSAweDdGICYmIGMgPD0gMHg5RikgeyByZXR1cm4gZmFsc2U7IH1cbiAgLy8gb3V0IG9mIHJhbmdlXG4gIGlmIChjID4gMHgxMEZGRkYpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmcm9tQ29kZVBvaW50KGMpIHtcbiAgLyplc2xpbnQgbm8tYml0d2lzZTowKi9cbiAgaWYgKGMgPiAweGZmZmYpIHtcbiAgICBjIC09IDB4MTAwMDA7XG4gICAgdmFyIHN1cnJvZ2F0ZTEgPSAweGQ4MDAgKyAoYyA+PiAxMCksXG4gICAgICAgIHN1cnJvZ2F0ZTIgPSAweGRjMDAgKyAoYyAmIDB4M2ZmKTtcblxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHN1cnJvZ2F0ZTEsIHN1cnJvZ2F0ZTIpO1xuICB9XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xufVxuXG52YXIgTkFNRURfRU5USVRZX1JFICAgPSAvJihbYS16I11bYS16MC05XXsxLDMxfSk7L2dpO1xudmFyIERJR0lUQUxfRU5USVRZX1RFU1RfUkUgPSAvXiMoKD86eFthLWYwLTldezEsOH18WzAtOV17MSw4fSkpL2k7XG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCcuL2VudGl0aWVzJyk7XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbnRpdHlQYXR0ZXJuKG1hdGNoLCBuYW1lKSB7XG4gIHZhciBjb2RlID0gMDtcblxuICBpZiAoaGFzKGVudGl0aWVzLCBuYW1lKSkge1xuICAgIHJldHVybiBlbnRpdGllc1tuYW1lXTtcbiAgfSBlbHNlIGlmIChuYW1lLmNoYXJDb2RlQXQoMCkgPT09IDB4MjMvKiAjICovICYmIERJR0lUQUxfRU5USVRZX1RFU1RfUkUudGVzdChuYW1lKSkge1xuICAgIGNvZGUgPSBuYW1lWzFdLnRvTG93ZXJDYXNlKCkgPT09ICd4JyA/XG4gICAgICBwYXJzZUludChuYW1lLnNsaWNlKDIpLCAxNilcbiAgICA6XG4gICAgICBwYXJzZUludChuYW1lLnNsaWNlKDEpLCAxMCk7XG4gICAgaWYgKGlzVmFsaWRFbnRpdHlDb2RlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gZnJvbUNvZGVQb2ludChjb2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRW50aXRpZXMoc3RyKSB7XG4gIGlmIChzdHIuaW5kZXhPZignJicpIDwgMCkgeyByZXR1cm4gc3RyOyB9XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKE5BTUVEX0VOVElUWV9SRSwgcmVwbGFjZUVudGl0eVBhdHRlcm4pO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG52YXIgSFRNTF9FU0NBUEVfVEVTVF9SRSA9IC9bJjw+XCJdLztcbnZhciBIVE1MX0VTQ0FQRV9SRVBMQUNFX1JFID0gL1smPD5cIl0vZztcbnZhciBIVE1MX1JFUExBQ0VNRU5UUyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnXG59O1xuXG5mdW5jdGlvbiByZXBsYWNlVW5zYWZlQ2hhcihjaCkge1xuICByZXR1cm4gSFRNTF9SRVBMQUNFTUVOVFNbY2hdO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cikge1xuICBpZiAoSFRNTF9FU0NBUEVfVEVTVF9SRS50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoSFRNTF9FU0NBUEVfUkVQTEFDRV9SRSwgcmVwbGFjZVVuc2FmZUNoYXIpO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydHMuYXNzaWduICAgICAgICAgICAgPSBhc3NpZ247XG5leHBvcnRzLmlzU3RyaW5nICAgICAgICAgID0gaXNTdHJpbmc7XG5leHBvcnRzLmhhcyAgICAgICAgICAgICAgID0gaGFzO1xuZXhwb3J0cy51bmVzY2FwZU1kICAgICAgICA9IHVuZXNjYXBlTWQ7XG5leHBvcnRzLmlzVmFsaWRFbnRpdHlDb2RlID0gaXNWYWxpZEVudGl0eUNvZGU7XG5leHBvcnRzLmZyb21Db2RlUG9pbnQgICAgID0gZnJvbUNvZGVQb2ludDtcbmV4cG9ydHMucmVwbGFjZUVudGl0aWVzICAgPSByZXBsYWNlRW50aXRpZXM7XG5leHBvcnRzLmVzY2FwZUh0bWwgICAgICAgID0gZXNjYXBlSHRtbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL2NvbW1vbi91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJyk7XG52YXIgcnVsZXMgPSByZXF1aXJlKCcuL3J1bGVzJyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZW5kZXJlcmBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlbmRlcmVyO1xuXG4vKipcbiAqIFJlbmRlcmVyIGNsYXNzLiBSZW5kZXJzIEhUTUwgYW5kIGV4cG9zZXMgYHJ1bGVzYCB0byBhbGxvd1xuICogbG9jYWwgbW9kaWZpY2F0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiBSZW5kZXJlcigpIHtcbiAgdGhpcy5ydWxlcyA9IHV0aWxzLmFzc2lnbih7fSwgcnVsZXMpO1xuXG4gIC8vIGV4cG9ydGVkIGhlbHBlciwgZm9yIGN1c3RvbSBydWxlcyBvbmx5XG4gIHRoaXMuZ2V0QnJlYWsgPSBydWxlcy5nZXRCcmVhaztcbn1cblxuLyoqXG4gKiBSZW5kZXIgYSBzdHJpbmcgb2YgaW5saW5lIEhUTUwgd2l0aCB0aGUgZ2l2ZW4gYHRva2Vuc2AgYW5kXG4gKiBgb3B0aW9uc2AuXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IGB0b2tlbnNgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZW5kZXJlci5wcm90b3R5cGUucmVuZGVySW5saW5lID0gZnVuY3Rpb24gKHRva2Vucywgb3B0aW9ucywgZW52KSB7XG4gIHZhciBfcnVsZXMgPSB0aGlzLnJ1bGVzO1xuICB2YXIgbGVuID0gdG9rZW5zLmxlbmd0aCwgaSA9IDA7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICB3aGlsZSAobGVuLS0pIHtcbiAgICByZXN1bHQgKz0gX3J1bGVzW3Rva2Vuc1tpXS50eXBlXSh0b2tlbnMsIGkrKywgb3B0aW9ucywgZW52LCB0aGlzKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlbmRlciBhIHN0cmluZyBvZiBIVE1MIHdpdGggdGhlIGdpdmVuIGB0b2tlbnNgIGFuZFxuICogYG9wdGlvbnNgLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBgdG9rZW5zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSAge09iamVjdH0gYGVudmBcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh0b2tlbnMsIG9wdGlvbnMsIGVudikge1xuICB2YXIgX3J1bGVzID0gdGhpcy5ydWxlcztcbiAgdmFyIGxlbiA9IHRva2Vucy5sZW5ndGgsIGkgPSAtMTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICByZXN1bHQgKz0gdGhpcy5yZW5kZXJJbmxpbmUodG9rZW5zW2ldLmNoaWxkcmVuLCBvcHRpb25zLCBlbnYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gX3J1bGVzW3Rva2Vuc1tpXS50eXBlXSh0b2tlbnMsIGksIG9wdGlvbnMsIGVudiwgdGhpcyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcmVuZGVyZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMb2NhbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgUnVsZXIgPSByZXF1aXJlKCcuL3J1bGVyJyk7XG5cbi8qKlxuICogQ29yZSBwYXJzZXIgYHJ1bGVzYFxuICovXG5cbnZhciBfcnVsZXMgPSBbXG4gIFsgJ2Jsb2NrJywgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2Jsb2NrJykgICAgICAgICAgXSxcbiAgWyAnYWJicicsICAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvYWJicicpICAgICAgICAgICBdLFxuICBbICdyZWZlcmVuY2VzJywgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9yZWZlcmVuY2VzJykgICAgIF0sXG4gIFsgJ2lubGluZScsICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL2lubGluZScpICAgICAgICAgXSxcbiAgWyAnZm9vdG5vdGVfdGFpbCcsICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvZm9vdG5vdGVfdGFpbCcpICBdLFxuICBbICdhYmJyMicsICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9hYmJyMicpICAgICAgICAgIF0sXG4gIFsgJ3JlcGxhY2VtZW50cycsICAgcmVxdWlyZSgnLi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cycpICAgXSxcbiAgWyAnc21hcnRxdW90ZXMnLCAgICByZXF1aXJlKCcuL3J1bGVzX2NvcmUvc21hcnRxdW90ZXMnKSAgICBdLFxuICBbICdsaW5raWZ5JywgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfY29yZS9saW5raWZ5JykgICAgICAgIF1cbl07XG5cbi8qKlxuICogQ2xhc3MgZm9yIHRvcCBsZXZlbCAoYGNvcmVgKSBwYXJzZXIgcnVsZXNcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBDb3JlKCkge1xuICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9jZXNzIHJ1bGVzIHdpdGggdGhlIGdpdmVuIGBzdGF0ZWBcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBzdGF0ZWBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkNvcmUucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIGksIGwsIHJ1bGVzO1xuICBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpO1xuICBmb3IgKGkgPSAwLCBsID0gcnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgcnVsZXNbaV0oc3RhdGUpO1xuICB9XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgQ29yZWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvcmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9wYXJzZXJfY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIExvY2FsIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciBSdWxlciAgICAgID0gcmVxdWlyZSgnLi9ydWxlcicpO1xudmFyIFN0YXRlQmxvY2sgPSByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL3N0YXRlX2Jsb2NrJyk7XG5cbi8qKlxuICogUGFyc2VyIHJ1bGVzXG4gKi9cblxudmFyIF9ydWxlcyA9IFtcbiAgWyAnY29kZScsICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svY29kZScpIF0sXG4gIFsgJ2ZlbmNlcycsICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2ZlbmNlcycpLCAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnLCAnbGlzdCcgXSBdLFxuICBbICdibG9ja3F1b3RlJywgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9ibG9ja3F1b3RlJyksIFsgJ3BhcmFncmFwaCcsICdibG9ja3F1b3RlJywgJ2xpc3QnIF0gXSxcbiAgWyAnaHInLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaHInKSwgICAgICAgICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScsICdsaXN0JyBdIF0sXG4gIFsgJ2xpc3QnLCAgICAgICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2xpc3QnKSwgICAgICAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnIF0gXSxcbiAgWyAnZm9vdG5vdGUnLCAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svZm9vdG5vdGUnKSwgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAnaGVhZGluZycsICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svaGVhZGluZycpLCAgICBbICdwYXJhZ3JhcGgnLCAnYmxvY2txdW90ZScgXSBdLFxuICBbICdsaGVhZGluZycsICAgcmVxdWlyZSgnLi9ydWxlc19ibG9jay9saGVhZGluZycpIF0sXG4gIFsgJ2h0bWxibG9jaycsICByZXF1aXJlKCcuL3J1bGVzX2Jsb2NrL2h0bWxibG9jaycpLCAgWyAncGFyYWdyYXBoJywgJ2Jsb2NrcXVvdGUnIF0gXSxcbiAgWyAndGFibGUnLCAgICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svdGFibGUnKSwgICAgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAnZGVmbGlzdCcsICAgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svZGVmbGlzdCcpLCAgICBbICdwYXJhZ3JhcGgnIF0gXSxcbiAgWyAncGFyYWdyYXBoJywgIHJlcXVpcmUoJy4vcnVsZXNfYmxvY2svcGFyYWdyYXBoJykgXVxuXTtcblxuLyoqXG4gKiBCbG9jayBQYXJzZXIgY2xhc3NcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBQYXJzZXJCbG9jaygpIHtcbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSwge1xuICAgICAgYWx0OiAoX3J1bGVzW2ldWzJdIHx8IFtdKS5zbGljZSgpXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSB0b2tlbnMgZm9yIHRoZSBnaXZlbiBpbnB1dCByYW5nZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBzdGF0ZWAgSGFzIHByb3BlcnRpZXMgbGlrZSBgc3JjYCwgYHBhcnNlcmAsIGBvcHRpb25zYCBldGNcbiAqIEBwYXJhbSAge051bWJlcn0gYHN0YXJ0TGluZWBcbiAqIEBwYXJhbSAge051bWJlcn0gYGVuZExpbmVgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5QYXJzZXJCbG9jay5wcm90b3R5cGUudG9rZW5pemUgPSBmdW5jdGlvbiAoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICB2YXIgcnVsZXMgPSB0aGlzLnJ1bGVyLmdldFJ1bGVzKCcnKTtcbiAgdmFyIGxlbiA9IHJ1bGVzLmxlbmd0aDtcbiAgdmFyIGxpbmUgPSBzdGFydExpbmU7XG4gIHZhciBoYXNFbXB0eUxpbmVzID0gZmFsc2U7XG4gIHZhciBvaywgaTtcblxuICB3aGlsZSAobGluZSA8IGVuZExpbmUpIHtcbiAgICBzdGF0ZS5saW5lID0gbGluZSA9IHN0YXRlLnNraXBFbXB0eUxpbmVzKGxpbmUpO1xuICAgIGlmIChsaW5lID49IGVuZExpbmUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRlcm1pbmF0aW9uIGNvbmRpdGlvbiBmb3IgbmVzdGVkIGNhbGxzLlxuICAgIC8vIE5lc3RlZCBjYWxscyBjdXJyZW50bHkgdXNlZCBmb3IgYmxvY2txdW90ZXMgJiBsaXN0c1xuICAgIGlmIChzdGF0ZS50U2hpZnRbbGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFRyeSBhbGwgcG9zc2libGUgcnVsZXMuXG4gICAgLy8gT24gc3VjY2VzcywgcnVsZSBzaG91bGQ6XG4gICAgLy9cbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUubGluZWBcbiAgICAvLyAtIHVwZGF0ZSBgc3RhdGUudG9rZW5zYFxuICAgIC8vIC0gcmV0dXJuIHRydWVcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgb2sgPSBydWxlc1tpXShzdGF0ZSwgbGluZSwgZW5kTGluZSwgZmFsc2UpO1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNldCBzdGF0ZS50aWdodCBpZmYgd2UgaGFkIGFuIGVtcHR5IGxpbmUgYmVmb3JlIGN1cnJlbnQgdGFnXG4gICAgLy8gaS5lLiBsYXRlc3QgZW1wdHkgbGluZSBzaG91bGQgbm90IGNvdW50XG4gICAgc3RhdGUudGlnaHQgPSAhaGFzRW1wdHlMaW5lcztcblxuICAgIC8vIHBhcmFncmFwaCBtaWdodCBcImVhdFwiIG9uZSBuZXdsaW5lIGFmdGVyIGl0IGluIG5lc3RlZCBsaXN0c1xuICAgIGlmIChzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgbGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICBpZiAobGluZSA8IGVuZExpbmUgJiYgc3RhdGUuaXNFbXB0eShsaW5lKSkge1xuICAgICAgaGFzRW1wdHlMaW5lcyA9IHRydWU7XG4gICAgICBsaW5lKys7XG5cbiAgICAgIC8vIHR3byBlbXB0eSBsaW5lcyBzaG91bGQgc3RvcCB0aGUgcGFyc2VyIGluIGxpc3QgbW9kZVxuICAgICAgaWYgKGxpbmUgPCBlbmRMaW5lICYmIHN0YXRlLnBhcmVudFR5cGUgPT09ICdsaXN0JyAmJiBzdGF0ZS5pc0VtcHR5KGxpbmUpKSB7IGJyZWFrOyB9XG4gICAgICBzdGF0ZS5saW5lID0gbGluZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBUQUJTX1NDQU5fUkUgPSAvW1xcblxcdF0vZztcbnZhciBORVdMSU5FU19SRSAgPSAvXFxyW1xcblxcdTAwODVdfFtcXHUyNDI0XFx1MjAyOFxcdTAwODVdL2c7XG52YXIgU1BBQ0VTX1JFICAgID0gL1xcdTAwYTAvZztcblxuLyoqXG4gKiBUb2tlbml6ZSB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyYCBTb3VyY2Ugc3RyaW5nXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHBhcmFtICB7QXJyYXl9IGBvdXRUb2tlbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5QYXJzZXJCbG9jay5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zLCBlbnYsIG91dFRva2Vucykge1xuICB2YXIgc3RhdGUsIGxpbmVTdGFydCA9IDAsIGxhc3RUYWJQb3MgPSAwO1xuICBpZiAoIXN0cikgeyByZXR1cm4gW107IH1cblxuICAvLyBOb3JtYWxpemUgc3BhY2VzXG4gIHN0ciA9IHN0ci5yZXBsYWNlKFNQQUNFU19SRSwgJyAnKTtcblxuICAvLyBOb3JtYWxpemUgbmV3bGluZXNcbiAgc3RyID0gc3RyLnJlcGxhY2UoTkVXTElORVNfUkUsICdcXG4nKTtcblxuICAvLyBSZXBsYWNlIHRhYnMgd2l0aCBwcm9wZXIgbnVtYmVyIG9mIHNwYWNlcyAoMS4uNClcbiAgaWYgKHN0ci5pbmRleE9mKCdcXHQnKSA+PSAwKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoVEFCU19TQ0FOX1JFLCBmdW5jdGlvbiAobWF0Y2gsIG9mZnNldCkge1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIGlmIChzdHIuY2hhckNvZGVBdChvZmZzZXQpID09PSAweDBBKSB7XG4gICAgICAgIGxpbmVTdGFydCA9IG9mZnNldCArIDE7XG4gICAgICAgIGxhc3RUYWJQb3MgPSAwO1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSAnICAgICcuc2xpY2UoKG9mZnNldCAtIGxpbmVTdGFydCAtIGxhc3RUYWJQb3MpICUgNCk7XG4gICAgICBsYXN0VGFiUG9zID0gb2Zmc2V0IC0gbGluZVN0YXJ0ICsgMTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZSA9IG5ldyBTdGF0ZUJsb2NrKHN0ciwgdGhpcywgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpO1xuICB0aGlzLnRva2VuaXplKHN0YXRlLCBzdGF0ZS5saW5lLCBzdGF0ZS5saW5lTWF4KTtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBQYXJzZXJCbG9ja2BcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlckJsb2NrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcGFyc2VyX2Jsb2NrLmpzXG4gKiogbW9kdWxlIGlkID0gMjI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWwgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFJ1bGVyICAgICAgID0gcmVxdWlyZSgnLi9ydWxlcicpO1xudmFyIFN0YXRlSW5saW5lID0gcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvc3RhdGVfaW5saW5lJyk7XG52YXIgdXRpbHMgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbi91dGlscycpO1xuXG4vKipcbiAqIElubGluZSBQYXJzZXIgYHJ1bGVzYFxuICovXG5cbnZhciBfcnVsZXMgPSBbXG4gIFsgJ3RleHQnLCAgICAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL3RleHQnKSBdLFxuICBbICduZXdsaW5lJywgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9uZXdsaW5lJykgXSxcbiAgWyAnZXNjYXBlJywgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZXNjYXBlJykgXSxcbiAgWyAnYmFja3RpY2tzJywgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvYmFja3RpY2tzJykgXSxcbiAgWyAnZGVsJywgICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvZGVsJykgXSxcbiAgWyAnaW5zJywgICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvaW5zJykgXSxcbiAgWyAnbWFyaycsICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvbWFyaycpIF0sXG4gIFsgJ2VtcGhhc2lzJywgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2VtcGhhc2lzJykgXSxcbiAgWyAnc3ViJywgICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvc3ViJykgXSxcbiAgWyAnc3VwJywgICAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvc3VwJykgXSxcbiAgWyAnbGlua3MnLCAgICAgICAgICAgcmVxdWlyZSgnLi9ydWxlc19pbmxpbmUvbGlua3MnKSBdLFxuICBbICdmb290bm90ZV9pbmxpbmUnLCByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9mb290bm90ZV9pbmxpbmUnKSBdLFxuICBbICdmb290bm90ZV9yZWYnLCAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9mb290bm90ZV9yZWYnKSBdLFxuICBbICdhdXRvbGluaycsICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9hdXRvbGluaycpIF0sXG4gIFsgJ2h0bWx0YWcnLCAgICAgICAgIHJlcXVpcmUoJy4vcnVsZXNfaW5saW5lL2h0bWx0YWcnKSBdLFxuICBbICdlbnRpdHknLCAgICAgICAgICByZXF1aXJlKCcuL3J1bGVzX2lubGluZS9lbnRpdHknKSBdXG5dO1xuXG4vKipcbiAqIElubGluZSBQYXJzZXIgY2xhc3MuIE5vdGUgdGhhdCBsaW5rIHZhbGlkYXRpb24gaXMgc3RyaWN0ZXJcbiAqIGluIFJlbWFya2FibGUgdGhhbiB3aGF0IGlzIHNwZWNpZmllZCBieSBDb21tb25NYXJrLiBJZiB5b3VcbiAqIHdhbnQgdG8gY2hhbmdlIHRoaXMgeW91IGNhbiB1c2UgYSBjdXN0b20gdmFsaWRhdG9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFBhcnNlcklubGluZSgpIHtcbiAgdGhpcy5ydWxlciA9IG5ldyBSdWxlcigpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IF9ydWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMucnVsZXIucHVzaChfcnVsZXNbaV1bMF0sIF9ydWxlc1tpXVsxXSk7XG4gIH1cblxuICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiB3aXRoIGEgY3VzdG9tIHZhbGlkYXRvclxuICB0aGlzLnZhbGlkYXRlTGluayA9IHZhbGlkYXRlTGluaztcbn1cblxuLyoqXG4gKiBTa2lwIGEgc2luZ2xlIHRva2VuIGJ5IHJ1bm5pbmcgYWxsIHJ1bGVzIGluIHZhbGlkYXRpb24gbW9kZS5cbiAqIFJldHVybnMgYHRydWVgIGlmIGFueSBydWxlIHJlcG9ydHMgc3VjY2Vzcy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBzdGF0ZWBcbiAqIEBhcGkgcHJpdmFnZVxuICovXG5cblBhcnNlcklubGluZS5wcm90b3R5cGUuc2tpcFRva2VuID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHZhciBydWxlcyA9IHRoaXMucnVsZXIuZ2V0UnVsZXMoJycpO1xuICB2YXIgbGVuID0gcnVsZXMubGVuZ3RoO1xuICB2YXIgcG9zID0gc3RhdGUucG9zO1xuICB2YXIgaSwgY2FjaGVkX3BvcztcblxuICBpZiAoKGNhY2hlZF9wb3MgPSBzdGF0ZS5jYWNoZUdldChwb3MpKSA+IDApIHtcbiAgICBzdGF0ZS5wb3MgPSBjYWNoZWRfcG9zO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChydWxlc1tpXShzdGF0ZSwgdHJ1ZSkpIHtcbiAgICAgIHN0YXRlLmNhY2hlU2V0KHBvcywgc3RhdGUucG9zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MrKztcbiAgc3RhdGUuY2FjaGVTZXQocG9zLCBzdGF0ZS5wb3MpO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSB0b2tlbnMgZm9yIHRoZSBnaXZlbiBpbnB1dCByYW5nZS5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBzdGF0ZWBcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBhcnNlcklubGluZS5wcm90b3R5cGUudG9rZW5pemUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlci5nZXRSdWxlcygnJyk7XG4gIHZhciBsZW4gPSBydWxlcy5sZW5ndGg7XG4gIHZhciBlbmQgPSBzdGF0ZS5wb3NNYXg7XG4gIHZhciBvaywgaTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgZW5kKSB7XG5cbiAgICAvLyBUcnkgYWxsIHBvc3NpYmxlIHJ1bGVzLlxuICAgIC8vIE9uIHN1Y2Nlc3MsIHRoZSBydWxlIHNob3VsZDpcbiAgICAvL1xuICAgIC8vIC0gdXBkYXRlIGBzdGF0ZS5wb3NgXG4gICAgLy8gLSB1cGRhdGUgYHN0YXRlLnRva2Vuc2BcbiAgICAvLyAtIHJldHVybiB0cnVlXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBvayA9IHJ1bGVzW2ldKHN0YXRlLCBmYWxzZSk7XG5cbiAgICAgIGlmIChvaykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob2spIHtcbiAgICAgIGlmIChzdGF0ZS5wb3MgPj0gZW5kKSB7IGJyZWFrOyB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyY1tzdGF0ZS5wb3MrK107XG4gIH1cblxuICBpZiAoc3RhdGUucGVuZGluZykge1xuICAgIHN0YXRlLnB1c2hQZW5kaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGlucHV0IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtICB7T2JqZWN0fSBgZW52YFxuICogQHBhcmFtICB7QXJyYXl9IGBvdXRUb2tlbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5QYXJzZXJJbmxpbmUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpIHtcbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlSW5saW5lKHN0ciwgdGhpcywgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpO1xuICB0aGlzLnRva2VuaXplKHN0YXRlKTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIGdpdmVuIGB1cmxgIGJ5IGNoZWNraW5nIGZvciBiYWQgcHJvdG9jb2xzLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYHVybGBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gdmFsaWRhdGVMaW5rKHVybCkge1xuICB2YXIgQkFEX1BST1RPQ09MUyA9IFsgJ3Zic2NyaXB0JywgJ2phdmFzY3JpcHQnLCAnZmlsZScgXTtcbiAgdmFyIHN0ciA9IHVybC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgLy8gQ2FyZSBhYm91dCBkaWdpdGFsIGVudGl0aWVzIFwiamF2YXNjcmlwdCYjeDNBO2FsZXJ0KDEpXCJcbiAgc3RyID0gdXRpbHMucmVwbGFjZUVudGl0aWVzKHN0cik7XG4gIGlmIChzdHIuaW5kZXhPZignOicpICE9PSAtMSAmJiBCQURfUFJPVE9DT0xTLmluZGV4T2Yoc3RyLnNwbGl0KCc6JylbMF0pICE9PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYFBhcnNlcklubGluZWBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlcklubGluZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3BhcnNlcl9pbmxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBSdWxlciBpcyBhIGhlbHBlciBjbGFzcyBmb3IgYnVpbGRpbmcgcmVzcG9uc2liaWxpdHkgY2hhaW5zIGZyb21cbiAqIHBhcnNlIHJ1bGVzLiBJdCBhbGxvd3M6XG4gKlxuICogICAtIGVhc3kgc3RhY2sgcnVsZXMgY2hhaW5zXG4gKiAgIC0gZ2V0dGluZyBtYWluIGNoYWluIGFuZCBuYW1lZCBjaGFpbnMgY29udGVudCAoYXMgYXJyYXlzIG9mIGZ1bmN0aW9ucylcbiAqXG4gKiBIZWxwZXIgbWV0aG9kcywgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUnVsZXIoKSB7XG4gIC8vIExpc3Qgb2YgYWRkZWQgcnVsZXMuIEVhY2ggZWxlbWVudCBpczpcbiAgLy9cbiAgLy8geyBuYW1lOiBYWFgsXG4gIC8vICAgZW5hYmxlZDogQm9vbGVhbixcbiAgLy8gICBmbjogRnVuY3Rpb24oKSxcbiAgLy8gICBhbHQ6IFsgbmFtZTIsIG5hbWUzIF0gfVxuICAvL1xuICB0aGlzLl9fcnVsZXNfXyA9IFtdO1xuXG4gIC8vIENhY2hlZCBydWxlIGNoYWlucy5cbiAgLy9cbiAgLy8gRmlyc3QgbGV2ZWwgLSBjaGFpbiBuYW1lLCAnJyBmb3IgZGVmYXVsdC5cbiAgLy8gU2Vjb25kIGxldmVsIC0gZGlnaXRhbCBhbmNob3IgZm9yIGZhc3QgZmlsdGVyaW5nIGJ5IGNoYXJjb2Rlcy5cbiAgLy9cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufVxuXG4vKipcbiAqIEZpbmQgdGhlIGluZGV4IG9mIGEgcnVsZSBieSBgbmFtZWAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBgbmFtZWBcbiAqIEByZXR1cm4ge051bWJlcn0gSW5kZXggb2YgdGhlIGdpdmVuIGBuYW1lYFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLl9fZmluZF9fID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIGxlbiA9IHRoaXMuX19ydWxlc19fLmxlbmd0aDtcbiAgdmFyIGkgPSAtMTtcblxuICB3aGlsZSAobGVuLS0pIHtcbiAgICBpZiAodGhpcy5fX3J1bGVzX19bKytpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufTtcblxuLyoqXG4gKiBCdWlsZCB0aGUgcnVsZXMgbG9va3VwIGNhY2hlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLl9fY29tcGlsZV9fID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFpbnMgPSBbICcnIF07XG5cbiAgLy8gY29sbGVjdCB1bmlxdWUgbmFtZXNcbiAgc2VsZi5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgIGlmICghcnVsZS5lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcnVsZS5hbHQuZm9yRWFjaChmdW5jdGlvbiAoYWx0TmFtZSkge1xuICAgICAgaWYgKGNoYWlucy5pbmRleE9mKGFsdE5hbWUpIDwgMCkge1xuICAgICAgICBjaGFpbnMucHVzaChhbHROYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgc2VsZi5fX2NhY2hlX18gPSB7fTtcblxuICBjaGFpbnMuZm9yRWFjaChmdW5jdGlvbiAoY2hhaW4pIHtcbiAgICBzZWxmLl9fY2FjaGVfX1tjaGFpbl0gPSBbXTtcbiAgICBzZWxmLl9fcnVsZXNfXy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBpZiAoIXJ1bGUuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFpbiAmJiBydWxlLmFsdC5pbmRleE9mKGNoYWluKSA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VsZi5fX2NhY2hlX19bY2hhaW5dLnB1c2gocnVsZS5mbik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSdWxlciBwdWJsaWMgbWV0aG9kc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLyoqXG4gKiBSZXBsYWNlIHJ1bGUgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBuYW1lYCBSdWxlIG5hbWVcbiAqIEBwYXJhbSAge0Z1bmN0aW9uIGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SdWxlci5wcm90b3R5cGUuYXQgPSBmdW5jdGlvbiAobmFtZSwgZm4sIG9wdGlvbnMpIHtcbiAgdmFyIGlkeCA9IHRoaXMuX19maW5kX18obmFtZSk7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmIChpZHggPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJzZXIgcnVsZSBub3QgZm91bmQ6ICcgKyBuYW1lKTtcbiAgfVxuXG4gIHRoaXMuX19ydWxlc19fW2lkeF0uZm4gPSBmbjtcbiAgdGhpcy5fX3J1bGVzX19baWR4XS5hbHQgPSBvcHQuYWx0IHx8IFtdO1xuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEFkZCBhIHJ1bGUgdG8gdGhlIGNoYWluIGJlZm9yZSBnaXZlbiB0aGUgYHJ1bGVOYW1lYC5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYGJlZm9yZU5hbWVgXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYHJ1bGVOYW1lYFxuICogQHBhcmFtICB7RnVuY3Rpb259IGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gICBgb3B0aW9uc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5iZWZvcmUgPSBmdW5jdGlvbiAoYmVmb3JlTmFtZSwgcnVsZU5hbWUsIGZuLCBvcHRpb25zKSB7XG4gIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKGJlZm9yZU5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaWR4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgYmVmb3JlTmFtZSk7XG4gIH1cblxuICB0aGlzLl9fcnVsZXNfXy5zcGxpY2UoaWR4LCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVsZSB0byB0aGUgY2hhaW4gYWZ0ZXIgdGhlIGdpdmVuIGBydWxlTmFtZWAuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGBhZnRlck5hbWVgXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgYHJ1bGVOYW1lYFxuICogQHBhcmFtICB7RnVuY3Rpb259IGBmbmBcbiAqIEBwYXJhbSAge09iamVjdH0gICBgb3B0aW9uc2BcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChhZnRlck5hbWUsIHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhhZnRlck5hbWUpO1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaWR4ID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUGFyc2VyIHJ1bGUgbm90IGZvdW5kOiAnICsgYWZ0ZXJOYW1lKTtcbiAgfVxuXG4gIHRoaXMuX19ydWxlc19fLnNwbGljZShpZHggKyAxLCAwLCB7XG4gICAgbmFtZTogcnVsZU5hbWUsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBmbjogZm4sXG4gICAgYWx0OiBvcHQuYWx0IHx8IFtdXG4gIH0pO1xuXG4gIHRoaXMuX19jYWNoZV9fID0gbnVsbDtcbn07XG5cbi8qKlxuICogQWRkIGEgcnVsZSB0byB0aGUgZW5kIG9mIGNoYWluLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBgcnVsZU5hbWVgXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gYGZuYFxuICogQHBhcmFtICB7T2JqZWN0fSAgIGBvcHRpb25zYFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHJ1bGVOYW1lLCBmbiwgb3B0aW9ucykge1xuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcblxuICB0aGlzLl9fcnVsZXNfXy5wdXNoKHtcbiAgICBuYW1lOiBydWxlTmFtZSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIGZuOiBmbixcbiAgICBhbHQ6IG9wdC5hbHQgfHwgW11cbiAgfSk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuLyoqXG4gKiBFbmFibGUgYSBydWxlIG9yIGxpc3Qgb2YgcnVsZXMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBgbGlzdGAgTmFtZSBvciBhcnJheSBvZiBydWxlIG5hbWVzIHRvIGVuYWJsZVxuICogQHBhcmFtICB7Qm9vbGVhbn0gYHN0cmljdGAgSWYgYHRydWVgLCBhbGwgbm9uIGxpc3RlZCBydWxlcyB3aWxsIGJlIGRpc2FibGVkLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUnVsZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIChsaXN0LCBzdHJpY3QpIHtcbiAgbGlzdCA9ICFBcnJheS5pc0FycmF5KGxpc3QpXG4gICAgPyBbIGxpc3QgXVxuICAgIDogbGlzdDtcblxuICAvLyBJbiBzdHJpY3QgbW9kZSBkaXNhYmxlIGFsbCBleGlzdGluZyBydWxlcyBmaXJzdFxuICBpZiAoc3RyaWN0KSB7XG4gICAgdGhpcy5fX3J1bGVzX18uZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcnVsZS5lbmFibGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZWFyY2ggYnkgbmFtZSBhbmQgZW5hYmxlXG4gIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBpZHggPSB0aGlzLl9fZmluZF9fKG5hbWUpO1xuICAgIGlmIChpZHggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1J1bGVzIG1hbmFnZXI6IGludmFsaWQgcnVsZSBuYW1lICcgKyBuYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fX3J1bGVzX19baWR4XS5lbmFibGVkID0gdHJ1ZTtcbiAgfSwgdGhpcyk7XG5cbiAgdGhpcy5fX2NhY2hlX18gPSBudWxsO1xufTtcblxuXG4vKipcbiAqIERpc2FibGUgYSBydWxlIG9yIGxpc3Qgb2YgcnVsZXMuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfEFycmF5fSBgbGlzdGAgTmFtZSBvciBhcnJheSBvZiBydWxlIG5hbWVzIHRvIGRpc2FibGVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgbGlzdCA9ICFBcnJheS5pc0FycmF5KGxpc3QpXG4gICAgPyBbIGxpc3QgXVxuICAgIDogbGlzdDtcblxuICAvLyBTZWFyY2ggYnkgbmFtZSBhbmQgZGlzYWJsZVxuICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fX2ZpbmRfXyhuYW1lKTtcbiAgICBpZiAoaWR4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSdWxlcyBtYW5hZ2VyOiBpbnZhbGlkIHJ1bGUgbmFtZSAnICsgbmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX19ydWxlc19fW2lkeF0uZW5hYmxlZCA9IGZhbHNlO1xuICB9LCB0aGlzKTtcblxuICB0aGlzLl9fY2FjaGVfXyA9IG51bGw7XG59O1xuXG4vKipcbiAqIEdldCBhIHJ1bGVzIGxpc3QgYXMgYW4gYXJyYXkgb2YgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gYGNoYWluTmFtZWBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJ1bGVyLnByb3RvdHlwZS5nZXRSdWxlcyA9IGZ1bmN0aW9uIChjaGFpbk5hbWUpIHtcbiAgaWYgKHRoaXMuX19jYWNoZV9fID09PSBudWxsKSB7XG4gICAgdGhpcy5fX2NvbXBpbGVfXygpO1xuICB9XG4gIHJldHVybiB0aGlzLl9fY2FjaGVfX1tjaGFpbk5hbWVdO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgYFJ1bGVyYFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlci5qc1xuICoqIG1vZHVsZSBpZCA9IDIzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUmVtYXJrYWJsZSBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBTZXQgZG91YmxlcyB0byAnwqvCuycgZm9yIFJ1c3NpYW4sICfigJ7igJwnIGZvciBHZXJtYW4uXG4gICAgcXVvdGVzOiAn4oCc4oCd4oCY4oCZJyxcblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiBpbnB1dCBub3QgY2hhbmdlZFxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6IG51bGwsXG5cbiAgICBtYXhOZXN0aW5nOiAgIDIwICAgICAgICAgICAgLy8gSW50ZXJuYWwgcHJvdGVjdGlvbiwgcmVjdXJzaW9uIGxpbWl0XG4gIH0sXG5cbiAgY29tcG9uZW50czoge1xuXG4gICAgY29yZToge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAgJ2Jsb2NrJyxcbiAgICAgICAgJ2lubGluZScsXG4gICAgICAgICdyZWZlcmVuY2VzJyxcbiAgICAgICAgJ3JlcGxhY2VtZW50cycsXG4gICAgICAgICdsaW5raWZ5JyxcbiAgICAgICAgJ3NtYXJ0cXVvdGVzJyxcbiAgICAgICAgJ3JlZmVyZW5jZXMnLFxuICAgICAgICAnYWJicjInLFxuICAgICAgICAnZm9vdG5vdGVfdGFpbCdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgYmxvY2s6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdibG9ja3F1b3RlJyxcbiAgICAgICAgJ2NvZGUnLFxuICAgICAgICAnZmVuY2VzJyxcbiAgICAgICAgJ2hlYWRpbmcnLFxuICAgICAgICAnaHInLFxuICAgICAgICAnaHRtbGJsb2NrJyxcbiAgICAgICAgJ2xoZWFkaW5nJyxcbiAgICAgICAgJ2xpc3QnLFxuICAgICAgICAncGFyYWdyYXBoJyxcbiAgICAgICAgJ3RhYmxlJ1xuICAgICAgXVxuICAgIH0sXG5cbiAgICBpbmxpbmU6IHtcbiAgICAgIHJ1bGVzOiBbXG4gICAgICAgICdhdXRvbGluaycsXG4gICAgICAgICdiYWNrdGlja3MnLFxuICAgICAgICAnZGVsJyxcbiAgICAgICAgJ2VtcGhhc2lzJyxcbiAgICAgICAgJ2VudGl0eScsXG4gICAgICAgICdlc2NhcGUnLFxuICAgICAgICAnZm9vdG5vdGVfcmVmJyxcbiAgICAgICAgJ2h0bWx0YWcnLFxuICAgICAgICAnbGlua3MnLFxuICAgICAgICAnbmV3bGluZScsXG4gICAgICAgICd0ZXh0J1xuICAgICAgXVxuICAgIH1cbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL2NvbmZpZ3MvZGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUmVtYXJrYWJsZSBkZWZhdWx0IG9wdGlvbnNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvcHRpb25zOiB7XG4gICAgaHRtbDogICAgICAgICBmYWxzZSwgICAgICAgIC8vIEVuYWJsZSBIVE1MIHRhZ3MgaW4gc291cmNlXG4gICAgeGh0bWxPdXQ6ICAgICBmYWxzZSwgICAgICAgIC8vIFVzZSAnLycgdG8gY2xvc2Ugc2luZ2xlIHRhZ3MgKDxiciAvPilcbiAgICBicmVha3M6ICAgICAgIGZhbHNlLCAgICAgICAgLy8gQ29udmVydCAnXFxuJyBpbiBwYXJhZ3JhcGhzIGludG8gPGJyPlxuICAgIGxhbmdQcmVmaXg6ICAgJ2xhbmd1YWdlLScsICAvLyBDU1MgbGFuZ3VhZ2UgcHJlZml4IGZvciBmZW5jZWQgYmxvY2tzXG4gICAgbGlua2lmeTogICAgICBmYWxzZSwgICAgICAgIC8vIGF1dG9jb252ZXJ0IFVSTC1saWtlIHRleHRzIHRvIGxpbmtzXG5cbiAgICAvLyBFbmFibGUgc29tZSBsYW5ndWFnZS1uZXV0cmFsIHJlcGxhY2VtZW50cyArIHF1b3RlcyBiZWF1dGlmaWNhdGlvblxuICAgIHR5cG9ncmFwaGVyOiAgZmFsc2UsXG5cbiAgICAvLyBEb3VibGUgKyBzaW5nbGUgcXVvdGVzIHJlcGxhY2VtZW50IHBhaXJzLCB3aGVuIHR5cG9ncmFwaGVyIGVuYWJsZWQsXG4gICAgLy8gYW5kIHNtYXJ0cXVvdGVzIG9uLiBTZXQgZG91YmxlcyB0byAnwqvCuycgZm9yIFJ1c3NpYW4sICfigJ7igJwnIGZvciBHZXJtYW4uXG4gICAgcXVvdGVzOiAgICAgICAn4oCc4oCd4oCY4oCZJyxcblxuICAgIC8vIEhpZ2hsaWdodGVyIGZ1bmN0aW9uLiBTaG91bGQgcmV0dXJuIGVzY2FwZWQgSFRNTCxcbiAgICAvLyBvciAnJyBpZiBpbnB1dCBub3QgY2hhbmdlZFxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gKC8qc3RyLCBsYW5nKi8pIHsgcmV0dXJuICcnOyB9XG4gICAgLy9cbiAgICBoaWdobGlnaHQ6ICAgICBudWxsLFxuXG4gICAgbWF4TmVzdGluZzogICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgLy8gRG9uJ3QgcmVzdHJpY3QgY29yZS9ibG9jay9pbmxpbmUgcnVsZXNcbiAgICBjb3JlOiB7fSxcbiAgICBibG9jazoge30sXG4gICAgaW5saW5lOiB7fVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvY29uZmlncy9mdWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMjMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBDb21tb25tYXJrIGRlZmF1bHQgb3B0aW9uc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBodG1sOiAgICAgICAgIHRydWUsICAgICAgICAgLy8gRW5hYmxlIEhUTUwgdGFncyBpbiBzb3VyY2VcbiAgICB4aHRtbE91dDogICAgIHRydWUsICAgICAgICAgLy8gVXNlICcvJyB0byBjbG9zZSBzaW5nbGUgdGFncyAoPGJyIC8+KVxuICAgIGJyZWFrczogICAgICAgZmFsc2UsICAgICAgICAvLyBDb252ZXJ0ICdcXG4nIGluIHBhcmFncmFwaHMgaW50byA8YnI+XG4gICAgbGFuZ1ByZWZpeDogICAnbGFuZ3VhZ2UtJywgIC8vIENTUyBsYW5ndWFnZSBwcmVmaXggZm9yIGZlbmNlZCBibG9ja3NcbiAgICBsaW5raWZ5OiAgICAgIGZhbHNlLCAgICAgICAgLy8gYXV0b2NvbnZlcnQgVVJMLWxpa2UgdGV4dHMgdG8gbGlua3NcblxuICAgIC8vIEVuYWJsZSBzb21lIGxhbmd1YWdlLW5ldXRyYWwgcmVwbGFjZW1lbnRzICsgcXVvdGVzIGJlYXV0aWZpY2F0aW9uXG4gICAgdHlwb2dyYXBoZXI6ICBmYWxzZSxcblxuICAgIC8vIERvdWJsZSArIHNpbmdsZSBxdW90ZXMgcmVwbGFjZW1lbnQgcGFpcnMsIHdoZW4gdHlwb2dyYXBoZXIgZW5hYmxlZCxcbiAgICAvLyBhbmQgc21hcnRxdW90ZXMgb24uIFNldCBkb3VibGVzIHRvICfCq8K7JyBmb3IgUnVzc2lhbiwgJ+KAnuKAnCcgZm9yIEdlcm1hbi5cbiAgICBxdW90ZXM6ICfigJzigJ3igJjigJknLFxuXG4gICAgLy8gSGlnaGxpZ2h0ZXIgZnVuY3Rpb24uIFNob3VsZCByZXR1cm4gZXNjYXBlZCBIVE1MLFxuICAgIC8vIG9yICcnIGlmIGlucHV0IG5vdCBjaGFuZ2VkXG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiAoLypzdHIsIGxhbmcqLykgeyByZXR1cm4gJyc7IH1cbiAgICAvL1xuICAgIGhpZ2hsaWdodDogbnVsbCxcblxuICAgIG1heE5lc3Rpbmc6ICAgMjAgICAgICAgICAgICAvLyBJbnRlcm5hbCBwcm90ZWN0aW9uLCByZWN1cnNpb24gbGltaXRcbiAgfSxcblxuICBjb21wb25lbnRzOiB7XG5cbiAgICBjb3JlOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2snLFxuICAgICAgICAnaW5saW5lJyxcbiAgICAgICAgJ3JlZmVyZW5jZXMnLFxuICAgICAgICAnYWJicjInXG4gICAgICBdXG4gICAgfSxcblxuICAgIGJsb2NrOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYmxvY2txdW90ZScsXG4gICAgICAgICdjb2RlJyxcbiAgICAgICAgJ2ZlbmNlcycsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ2hyJyxcbiAgICAgICAgJ2h0bWxibG9jaycsXG4gICAgICAgICdsaGVhZGluZycsXG4gICAgICAgICdsaXN0JyxcbiAgICAgICAgJ3BhcmFncmFwaCdcbiAgICAgIF1cbiAgICB9LFxuXG4gICAgaW5saW5lOiB7XG4gICAgICBydWxlczogW1xuICAgICAgICAnYXV0b2xpbmsnLFxuICAgICAgICAnYmFja3RpY2tzJyxcbiAgICAgICAgJ2VtcGhhc2lzJyxcbiAgICAgICAgJ2VudGl0eScsXG4gICAgICAgICdlc2NhcGUnLFxuICAgICAgICAnaHRtbHRhZycsXG4gICAgICAgICdsaW5rcycsXG4gICAgICAgICduZXdsaW5lJyxcbiAgICAgICAgJ3RleHQnXG4gICAgICBdXG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvY29uZmlncy9jb21tb25tYXJrLmpzXG4gKiogbW9kdWxlIGlkID0gMjMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBMaXN0IG9mIHZhbGlkIGVudGl0aWVzXG4vL1xuLy8gR2VuZXJhdGUgd2l0aCAuL3N1cHBvcnQvZW50aXRpZXMuanMgc2NyaXB0XG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludCBxdW90ZXM6MCovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJBYWN1dGVcIjpcIlxcdTAwQzFcIixcbiAgXCJhYWN1dGVcIjpcIlxcdTAwRTFcIixcbiAgXCJBYnJldmVcIjpcIlxcdTAxMDJcIixcbiAgXCJhYnJldmVcIjpcIlxcdTAxMDNcIixcbiAgXCJhY1wiOlwiXFx1MjIzRVwiLFxuICBcImFjZFwiOlwiXFx1MjIzRlwiLFxuICBcImFjRVwiOlwiXFx1MjIzRVxcdTAzMzNcIixcbiAgXCJBY2lyY1wiOlwiXFx1MDBDMlwiLFxuICBcImFjaXJjXCI6XCJcXHUwMEUyXCIsXG4gIFwiYWN1dGVcIjpcIlxcdTAwQjRcIixcbiAgXCJBY3lcIjpcIlxcdTA0MTBcIixcbiAgXCJhY3lcIjpcIlxcdTA0MzBcIixcbiAgXCJBRWxpZ1wiOlwiXFx1MDBDNlwiLFxuICBcImFlbGlnXCI6XCJcXHUwMEU2XCIsXG4gIFwiYWZcIjpcIlxcdTIwNjFcIixcbiAgXCJBZnJcIjpcIlxcdUQ4MzVcXHVERDA0XCIsXG4gIFwiYWZyXCI6XCJcXHVEODM1XFx1REQxRVwiLFxuICBcIkFncmF2ZVwiOlwiXFx1MDBDMFwiLFxuICBcImFncmF2ZVwiOlwiXFx1MDBFMFwiLFxuICBcImFsZWZzeW1cIjpcIlxcdTIxMzVcIixcbiAgXCJhbGVwaFwiOlwiXFx1MjEzNVwiLFxuICBcIkFscGhhXCI6XCJcXHUwMzkxXCIsXG4gIFwiYWxwaGFcIjpcIlxcdTAzQjFcIixcbiAgXCJBbWFjclwiOlwiXFx1MDEwMFwiLFxuICBcImFtYWNyXCI6XCJcXHUwMTAxXCIsXG4gIFwiYW1hbGdcIjpcIlxcdTJBM0ZcIixcbiAgXCJBTVBcIjpcIlxcdTAwMjZcIixcbiAgXCJhbXBcIjpcIlxcdTAwMjZcIixcbiAgXCJBbmRcIjpcIlxcdTJBNTNcIixcbiAgXCJhbmRcIjpcIlxcdTIyMjdcIixcbiAgXCJhbmRhbmRcIjpcIlxcdTJBNTVcIixcbiAgXCJhbmRkXCI6XCJcXHUyQTVDXCIsXG4gIFwiYW5kc2xvcGVcIjpcIlxcdTJBNThcIixcbiAgXCJhbmR2XCI6XCJcXHUyQTVBXCIsXG4gIFwiYW5nXCI6XCJcXHUyMjIwXCIsXG4gIFwiYW5nZVwiOlwiXFx1MjlBNFwiLFxuICBcImFuZ2xlXCI6XCJcXHUyMjIwXCIsXG4gIFwiYW5nbXNkXCI6XCJcXHUyMjIxXCIsXG4gIFwiYW5nbXNkYWFcIjpcIlxcdTI5QThcIixcbiAgXCJhbmdtc2RhYlwiOlwiXFx1MjlBOVwiLFxuICBcImFuZ21zZGFjXCI6XCJcXHUyOUFBXCIsXG4gIFwiYW5nbXNkYWRcIjpcIlxcdTI5QUJcIixcbiAgXCJhbmdtc2RhZVwiOlwiXFx1MjlBQ1wiLFxuICBcImFuZ21zZGFmXCI6XCJcXHUyOUFEXCIsXG4gIFwiYW5nbXNkYWdcIjpcIlxcdTI5QUVcIixcbiAgXCJhbmdtc2RhaFwiOlwiXFx1MjlBRlwiLFxuICBcImFuZ3J0XCI6XCJcXHUyMjFGXCIsXG4gIFwiYW5ncnR2YlwiOlwiXFx1MjJCRVwiLFxuICBcImFuZ3J0dmJkXCI6XCJcXHUyOTlEXCIsXG4gIFwiYW5nc3BoXCI6XCJcXHUyMjIyXCIsXG4gIFwiYW5nc3RcIjpcIlxcdTAwQzVcIixcbiAgXCJhbmd6YXJyXCI6XCJcXHUyMzdDXCIsXG4gIFwiQW9nb25cIjpcIlxcdTAxMDRcIixcbiAgXCJhb2dvblwiOlwiXFx1MDEwNVwiLFxuICBcIkFvcGZcIjpcIlxcdUQ4MzVcXHVERDM4XCIsXG4gIFwiYW9wZlwiOlwiXFx1RDgzNVxcdURENTJcIixcbiAgXCJhcFwiOlwiXFx1MjI0OFwiLFxuICBcImFwYWNpclwiOlwiXFx1MkE2RlwiLFxuICBcImFwRVwiOlwiXFx1MkE3MFwiLFxuICBcImFwZVwiOlwiXFx1MjI0QVwiLFxuICBcImFwaWRcIjpcIlxcdTIyNEJcIixcbiAgXCJhcG9zXCI6XCJcXHUwMDI3XCIsXG4gIFwiQXBwbHlGdW5jdGlvblwiOlwiXFx1MjA2MVwiLFxuICBcImFwcHJveFwiOlwiXFx1MjI0OFwiLFxuICBcImFwcHJveGVxXCI6XCJcXHUyMjRBXCIsXG4gIFwiQXJpbmdcIjpcIlxcdTAwQzVcIixcbiAgXCJhcmluZ1wiOlwiXFx1MDBFNVwiLFxuICBcIkFzY3JcIjpcIlxcdUQ4MzVcXHVEQzlDXCIsXG4gIFwiYXNjclwiOlwiXFx1RDgzNVxcdURDQjZcIixcbiAgXCJBc3NpZ25cIjpcIlxcdTIyNTRcIixcbiAgXCJhc3RcIjpcIlxcdTAwMkFcIixcbiAgXCJhc3ltcFwiOlwiXFx1MjI0OFwiLFxuICBcImFzeW1wZXFcIjpcIlxcdTIyNERcIixcbiAgXCJBdGlsZGVcIjpcIlxcdTAwQzNcIixcbiAgXCJhdGlsZGVcIjpcIlxcdTAwRTNcIixcbiAgXCJBdW1sXCI6XCJcXHUwMEM0XCIsXG4gIFwiYXVtbFwiOlwiXFx1MDBFNFwiLFxuICBcImF3Y29uaW50XCI6XCJcXHUyMjMzXCIsXG4gIFwiYXdpbnRcIjpcIlxcdTJBMTFcIixcbiAgXCJiYWNrY29uZ1wiOlwiXFx1MjI0Q1wiLFxuICBcImJhY2tlcHNpbG9uXCI6XCJcXHUwM0Y2XCIsXG4gIFwiYmFja3ByaW1lXCI6XCJcXHUyMDM1XCIsXG4gIFwiYmFja3NpbVwiOlwiXFx1MjIzRFwiLFxuICBcImJhY2tzaW1lcVwiOlwiXFx1MjJDRFwiLFxuICBcIkJhY2tzbGFzaFwiOlwiXFx1MjIxNlwiLFxuICBcIkJhcnZcIjpcIlxcdTJBRTdcIixcbiAgXCJiYXJ2ZWVcIjpcIlxcdTIyQkRcIixcbiAgXCJCYXJ3ZWRcIjpcIlxcdTIzMDZcIixcbiAgXCJiYXJ3ZWRcIjpcIlxcdTIzMDVcIixcbiAgXCJiYXJ3ZWRnZVwiOlwiXFx1MjMwNVwiLFxuICBcImJicmtcIjpcIlxcdTIzQjVcIixcbiAgXCJiYnJrdGJya1wiOlwiXFx1MjNCNlwiLFxuICBcImJjb25nXCI6XCJcXHUyMjRDXCIsXG4gIFwiQmN5XCI6XCJcXHUwNDExXCIsXG4gIFwiYmN5XCI6XCJcXHUwNDMxXCIsXG4gIFwiYmRxdW9cIjpcIlxcdTIwMUVcIixcbiAgXCJiZWNhdXNcIjpcIlxcdTIyMzVcIixcbiAgXCJCZWNhdXNlXCI6XCJcXHUyMjM1XCIsXG4gIFwiYmVjYXVzZVwiOlwiXFx1MjIzNVwiLFxuICBcImJlbXB0eXZcIjpcIlxcdTI5QjBcIixcbiAgXCJiZXBzaVwiOlwiXFx1MDNGNlwiLFxuICBcImJlcm5vdVwiOlwiXFx1MjEyQ1wiLFxuICBcIkJlcm5vdWxsaXNcIjpcIlxcdTIxMkNcIixcbiAgXCJCZXRhXCI6XCJcXHUwMzkyXCIsXG4gIFwiYmV0YVwiOlwiXFx1MDNCMlwiLFxuICBcImJldGhcIjpcIlxcdTIxMzZcIixcbiAgXCJiZXR3ZWVuXCI6XCJcXHUyMjZDXCIsXG4gIFwiQmZyXCI6XCJcXHVEODM1XFx1REQwNVwiLFxuICBcImJmclwiOlwiXFx1RDgzNVxcdUREMUZcIixcbiAgXCJiaWdjYXBcIjpcIlxcdTIyQzJcIixcbiAgXCJiaWdjaXJjXCI6XCJcXHUyNUVGXCIsXG4gIFwiYmlnY3VwXCI6XCJcXHUyMkMzXCIsXG4gIFwiYmlnb2RvdFwiOlwiXFx1MkEwMFwiLFxuICBcImJpZ29wbHVzXCI6XCJcXHUyQTAxXCIsXG4gIFwiYmlnb3RpbWVzXCI6XCJcXHUyQTAyXCIsXG4gIFwiYmlnc3FjdXBcIjpcIlxcdTJBMDZcIixcbiAgXCJiaWdzdGFyXCI6XCJcXHUyNjA1XCIsXG4gIFwiYmlndHJpYW5nbGVkb3duXCI6XCJcXHUyNUJEXCIsXG4gIFwiYmlndHJpYW5nbGV1cFwiOlwiXFx1MjVCM1wiLFxuICBcImJpZ3VwbHVzXCI6XCJcXHUyQTA0XCIsXG4gIFwiYmlndmVlXCI6XCJcXHUyMkMxXCIsXG4gIFwiYmlnd2VkZ2VcIjpcIlxcdTIyQzBcIixcbiAgXCJia2Fyb3dcIjpcIlxcdTI5MERcIixcbiAgXCJibGFja2xvemVuZ2VcIjpcIlxcdTI5RUJcIixcbiAgXCJibGFja3NxdWFyZVwiOlwiXFx1MjVBQVwiLFxuICBcImJsYWNrdHJpYW5nbGVcIjpcIlxcdTI1QjRcIixcbiAgXCJibGFja3RyaWFuZ2xlZG93blwiOlwiXFx1MjVCRVwiLFxuICBcImJsYWNrdHJpYW5nbGVsZWZ0XCI6XCJcXHUyNUMyXCIsXG4gIFwiYmxhY2t0cmlhbmdsZXJpZ2h0XCI6XCJcXHUyNUI4XCIsXG4gIFwiYmxhbmtcIjpcIlxcdTI0MjNcIixcbiAgXCJibGsxMlwiOlwiXFx1MjU5MlwiLFxuICBcImJsazE0XCI6XCJcXHUyNTkxXCIsXG4gIFwiYmxrMzRcIjpcIlxcdTI1OTNcIixcbiAgXCJibG9ja1wiOlwiXFx1MjU4OFwiLFxuICBcImJuZVwiOlwiXFx1MDAzRFxcdTIwRTVcIixcbiAgXCJibmVxdWl2XCI6XCJcXHUyMjYxXFx1MjBFNVwiLFxuICBcImJOb3RcIjpcIlxcdTJBRURcIixcbiAgXCJibm90XCI6XCJcXHUyMzEwXCIsXG4gIFwiQm9wZlwiOlwiXFx1RDgzNVxcdUREMzlcIixcbiAgXCJib3BmXCI6XCJcXHVEODM1XFx1REQ1M1wiLFxuICBcImJvdFwiOlwiXFx1MjJBNVwiLFxuICBcImJvdHRvbVwiOlwiXFx1MjJBNVwiLFxuICBcImJvd3RpZVwiOlwiXFx1MjJDOFwiLFxuICBcImJveGJveFwiOlwiXFx1MjlDOVwiLFxuICBcImJveERMXCI6XCJcXHUyNTU3XCIsXG4gIFwiYm94RGxcIjpcIlxcdTI1NTZcIixcbiAgXCJib3hkTFwiOlwiXFx1MjU1NVwiLFxuICBcImJveGRsXCI6XCJcXHUyNTEwXCIsXG4gIFwiYm94RFJcIjpcIlxcdTI1NTRcIixcbiAgXCJib3hEclwiOlwiXFx1MjU1M1wiLFxuICBcImJveGRSXCI6XCJcXHUyNTUyXCIsXG4gIFwiYm94ZHJcIjpcIlxcdTI1MENcIixcbiAgXCJib3hIXCI6XCJcXHUyNTUwXCIsXG4gIFwiYm94aFwiOlwiXFx1MjUwMFwiLFxuICBcImJveEhEXCI6XCJcXHUyNTY2XCIsXG4gIFwiYm94SGRcIjpcIlxcdTI1NjRcIixcbiAgXCJib3hoRFwiOlwiXFx1MjU2NVwiLFxuICBcImJveGhkXCI6XCJcXHUyNTJDXCIsXG4gIFwiYm94SFVcIjpcIlxcdTI1NjlcIixcbiAgXCJib3hIdVwiOlwiXFx1MjU2N1wiLFxuICBcImJveGhVXCI6XCJcXHUyNTY4XCIsXG4gIFwiYm94aHVcIjpcIlxcdTI1MzRcIixcbiAgXCJib3htaW51c1wiOlwiXFx1MjI5RlwiLFxuICBcImJveHBsdXNcIjpcIlxcdTIyOUVcIixcbiAgXCJib3h0aW1lc1wiOlwiXFx1MjJBMFwiLFxuICBcImJveFVMXCI6XCJcXHUyNTVEXCIsXG4gIFwiYm94VWxcIjpcIlxcdTI1NUNcIixcbiAgXCJib3h1TFwiOlwiXFx1MjU1QlwiLFxuICBcImJveHVsXCI6XCJcXHUyNTE4XCIsXG4gIFwiYm94VVJcIjpcIlxcdTI1NUFcIixcbiAgXCJib3hVclwiOlwiXFx1MjU1OVwiLFxuICBcImJveHVSXCI6XCJcXHUyNTU4XCIsXG4gIFwiYm94dXJcIjpcIlxcdTI1MTRcIixcbiAgXCJib3hWXCI6XCJcXHUyNTUxXCIsXG4gIFwiYm94dlwiOlwiXFx1MjUwMlwiLFxuICBcImJveFZIXCI6XCJcXHUyNTZDXCIsXG4gIFwiYm94VmhcIjpcIlxcdTI1NkJcIixcbiAgXCJib3h2SFwiOlwiXFx1MjU2QVwiLFxuICBcImJveHZoXCI6XCJcXHUyNTNDXCIsXG4gIFwiYm94VkxcIjpcIlxcdTI1NjNcIixcbiAgXCJib3hWbFwiOlwiXFx1MjU2MlwiLFxuICBcImJveHZMXCI6XCJcXHUyNTYxXCIsXG4gIFwiYm94dmxcIjpcIlxcdTI1MjRcIixcbiAgXCJib3hWUlwiOlwiXFx1MjU2MFwiLFxuICBcImJveFZyXCI6XCJcXHUyNTVGXCIsXG4gIFwiYm94dlJcIjpcIlxcdTI1NUVcIixcbiAgXCJib3h2clwiOlwiXFx1MjUxQ1wiLFxuICBcImJwcmltZVwiOlwiXFx1MjAzNVwiLFxuICBcIkJyZXZlXCI6XCJcXHUwMkQ4XCIsXG4gIFwiYnJldmVcIjpcIlxcdTAyRDhcIixcbiAgXCJicnZiYXJcIjpcIlxcdTAwQTZcIixcbiAgXCJCc2NyXCI6XCJcXHUyMTJDXCIsXG4gIFwiYnNjclwiOlwiXFx1RDgzNVxcdURDQjdcIixcbiAgXCJic2VtaVwiOlwiXFx1MjA0RlwiLFxuICBcImJzaW1cIjpcIlxcdTIyM0RcIixcbiAgXCJic2ltZVwiOlwiXFx1MjJDRFwiLFxuICBcImJzb2xcIjpcIlxcdTAwNUNcIixcbiAgXCJic29sYlwiOlwiXFx1MjlDNVwiLFxuICBcImJzb2xoc3ViXCI6XCJcXHUyN0M4XCIsXG4gIFwiYnVsbFwiOlwiXFx1MjAyMlwiLFxuICBcImJ1bGxldFwiOlwiXFx1MjAyMlwiLFxuICBcImJ1bXBcIjpcIlxcdTIyNEVcIixcbiAgXCJidW1wRVwiOlwiXFx1MkFBRVwiLFxuICBcImJ1bXBlXCI6XCJcXHUyMjRGXCIsXG4gIFwiQnVtcGVxXCI6XCJcXHUyMjRFXCIsXG4gIFwiYnVtcGVxXCI6XCJcXHUyMjRGXCIsXG4gIFwiQ2FjdXRlXCI6XCJcXHUwMTA2XCIsXG4gIFwiY2FjdXRlXCI6XCJcXHUwMTA3XCIsXG4gIFwiQ2FwXCI6XCJcXHUyMkQyXCIsXG4gIFwiY2FwXCI6XCJcXHUyMjI5XCIsXG4gIFwiY2FwYW5kXCI6XCJcXHUyQTQ0XCIsXG4gIFwiY2FwYnJjdXBcIjpcIlxcdTJBNDlcIixcbiAgXCJjYXBjYXBcIjpcIlxcdTJBNEJcIixcbiAgXCJjYXBjdXBcIjpcIlxcdTJBNDdcIixcbiAgXCJjYXBkb3RcIjpcIlxcdTJBNDBcIixcbiAgXCJDYXBpdGFsRGlmZmVyZW50aWFsRFwiOlwiXFx1MjE0NVwiLFxuICBcImNhcHNcIjpcIlxcdTIyMjlcXHVGRTAwXCIsXG4gIFwiY2FyZXRcIjpcIlxcdTIwNDFcIixcbiAgXCJjYXJvblwiOlwiXFx1MDJDN1wiLFxuICBcIkNheWxleXNcIjpcIlxcdTIxMkRcIixcbiAgXCJjY2Fwc1wiOlwiXFx1MkE0RFwiLFxuICBcIkNjYXJvblwiOlwiXFx1MDEwQ1wiLFxuICBcImNjYXJvblwiOlwiXFx1MDEwRFwiLFxuICBcIkNjZWRpbFwiOlwiXFx1MDBDN1wiLFxuICBcImNjZWRpbFwiOlwiXFx1MDBFN1wiLFxuICBcIkNjaXJjXCI6XCJcXHUwMTA4XCIsXG4gIFwiY2NpcmNcIjpcIlxcdTAxMDlcIixcbiAgXCJDY29uaW50XCI6XCJcXHUyMjMwXCIsXG4gIFwiY2N1cHNcIjpcIlxcdTJBNENcIixcbiAgXCJjY3Vwc3NtXCI6XCJcXHUyQTUwXCIsXG4gIFwiQ2RvdFwiOlwiXFx1MDEwQVwiLFxuICBcImNkb3RcIjpcIlxcdTAxMEJcIixcbiAgXCJjZWRpbFwiOlwiXFx1MDBCOFwiLFxuICBcIkNlZGlsbGFcIjpcIlxcdTAwQjhcIixcbiAgXCJjZW1wdHl2XCI6XCJcXHUyOUIyXCIsXG4gIFwiY2VudFwiOlwiXFx1MDBBMlwiLFxuICBcIkNlbnRlckRvdFwiOlwiXFx1MDBCN1wiLFxuICBcImNlbnRlcmRvdFwiOlwiXFx1MDBCN1wiLFxuICBcIkNmclwiOlwiXFx1MjEyRFwiLFxuICBcImNmclwiOlwiXFx1RDgzNVxcdUREMjBcIixcbiAgXCJDSGN5XCI6XCJcXHUwNDI3XCIsXG4gIFwiY2hjeVwiOlwiXFx1MDQ0N1wiLFxuICBcImNoZWNrXCI6XCJcXHUyNzEzXCIsXG4gIFwiY2hlY2ttYXJrXCI6XCJcXHUyNzEzXCIsXG4gIFwiQ2hpXCI6XCJcXHUwM0E3XCIsXG4gIFwiY2hpXCI6XCJcXHUwM0M3XCIsXG4gIFwiY2lyXCI6XCJcXHUyNUNCXCIsXG4gIFwiY2lyY1wiOlwiXFx1MDJDNlwiLFxuICBcImNpcmNlcVwiOlwiXFx1MjI1N1wiLFxuICBcImNpcmNsZWFycm93bGVmdFwiOlwiXFx1MjFCQVwiLFxuICBcImNpcmNsZWFycm93cmlnaHRcIjpcIlxcdTIxQkJcIixcbiAgXCJjaXJjbGVkYXN0XCI6XCJcXHUyMjlCXCIsXG4gIFwiY2lyY2xlZGNpcmNcIjpcIlxcdTIyOUFcIixcbiAgXCJjaXJjbGVkZGFzaFwiOlwiXFx1MjI5RFwiLFxuICBcIkNpcmNsZURvdFwiOlwiXFx1MjI5OVwiLFxuICBcImNpcmNsZWRSXCI6XCJcXHUwMEFFXCIsXG4gIFwiY2lyY2xlZFNcIjpcIlxcdTI0QzhcIixcbiAgXCJDaXJjbGVNaW51c1wiOlwiXFx1MjI5NlwiLFxuICBcIkNpcmNsZVBsdXNcIjpcIlxcdTIyOTVcIixcbiAgXCJDaXJjbGVUaW1lc1wiOlwiXFx1MjI5N1wiLFxuICBcImNpckVcIjpcIlxcdTI5QzNcIixcbiAgXCJjaXJlXCI6XCJcXHUyMjU3XCIsXG4gIFwiY2lyZm5pbnRcIjpcIlxcdTJBMTBcIixcbiAgXCJjaXJtaWRcIjpcIlxcdTJBRUZcIixcbiAgXCJjaXJzY2lyXCI6XCJcXHUyOUMyXCIsXG4gIFwiQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6XCJcXHUyMjMyXCIsXG4gIFwiQ2xvc2VDdXJseURvdWJsZVF1b3RlXCI6XCJcXHUyMDFEXCIsXG4gIFwiQ2xvc2VDdXJseVF1b3RlXCI6XCJcXHUyMDE5XCIsXG4gIFwiY2x1YnNcIjpcIlxcdTI2NjNcIixcbiAgXCJjbHVic3VpdFwiOlwiXFx1MjY2M1wiLFxuICBcIkNvbG9uXCI6XCJcXHUyMjM3XCIsXG4gIFwiY29sb25cIjpcIlxcdTAwM0FcIixcbiAgXCJDb2xvbmVcIjpcIlxcdTJBNzRcIixcbiAgXCJjb2xvbmVcIjpcIlxcdTIyNTRcIixcbiAgXCJjb2xvbmVxXCI6XCJcXHUyMjU0XCIsXG4gIFwiY29tbWFcIjpcIlxcdTAwMkNcIixcbiAgXCJjb21tYXRcIjpcIlxcdTAwNDBcIixcbiAgXCJjb21wXCI6XCJcXHUyMjAxXCIsXG4gIFwiY29tcGZuXCI6XCJcXHUyMjE4XCIsXG4gIFwiY29tcGxlbWVudFwiOlwiXFx1MjIwMVwiLFxuICBcImNvbXBsZXhlc1wiOlwiXFx1MjEwMlwiLFxuICBcImNvbmdcIjpcIlxcdTIyNDVcIixcbiAgXCJjb25nZG90XCI6XCJcXHUyQTZEXCIsXG4gIFwiQ29uZ3J1ZW50XCI6XCJcXHUyMjYxXCIsXG4gIFwiQ29uaW50XCI6XCJcXHUyMjJGXCIsXG4gIFwiY29uaW50XCI6XCJcXHUyMjJFXCIsXG4gIFwiQ29udG91ckludGVncmFsXCI6XCJcXHUyMjJFXCIsXG4gIFwiQ29wZlwiOlwiXFx1MjEwMlwiLFxuICBcImNvcGZcIjpcIlxcdUQ4MzVcXHVERDU0XCIsXG4gIFwiY29wcm9kXCI6XCJcXHUyMjEwXCIsXG4gIFwiQ29wcm9kdWN0XCI6XCJcXHUyMjEwXCIsXG4gIFwiQ09QWVwiOlwiXFx1MDBBOVwiLFxuICBcImNvcHlcIjpcIlxcdTAwQTlcIixcbiAgXCJjb3B5c3JcIjpcIlxcdTIxMTdcIixcbiAgXCJDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsXCI6XCJcXHUyMjMzXCIsXG4gIFwiY3JhcnJcIjpcIlxcdTIxQjVcIixcbiAgXCJDcm9zc1wiOlwiXFx1MkEyRlwiLFxuICBcImNyb3NzXCI6XCJcXHUyNzE3XCIsXG4gIFwiQ3NjclwiOlwiXFx1RDgzNVxcdURDOUVcIixcbiAgXCJjc2NyXCI6XCJcXHVEODM1XFx1RENCOFwiLFxuICBcImNzdWJcIjpcIlxcdTJBQ0ZcIixcbiAgXCJjc3ViZVwiOlwiXFx1MkFEMVwiLFxuICBcImNzdXBcIjpcIlxcdTJBRDBcIixcbiAgXCJjc3VwZVwiOlwiXFx1MkFEMlwiLFxuICBcImN0ZG90XCI6XCJcXHUyMkVGXCIsXG4gIFwiY3VkYXJybFwiOlwiXFx1MjkzOFwiLFxuICBcImN1ZGFycnJcIjpcIlxcdTI5MzVcIixcbiAgXCJjdWVwclwiOlwiXFx1MjJERVwiLFxuICBcImN1ZXNjXCI6XCJcXHUyMkRGXCIsXG4gIFwiY3VsYXJyXCI6XCJcXHUyMUI2XCIsXG4gIFwiY3VsYXJycFwiOlwiXFx1MjkzRFwiLFxuICBcIkN1cFwiOlwiXFx1MjJEM1wiLFxuICBcImN1cFwiOlwiXFx1MjIyQVwiLFxuICBcImN1cGJyY2FwXCI6XCJcXHUyQTQ4XCIsXG4gIFwiQ3VwQ2FwXCI6XCJcXHUyMjREXCIsXG4gIFwiY3VwY2FwXCI6XCJcXHUyQTQ2XCIsXG4gIFwiY3VwY3VwXCI6XCJcXHUyQTRBXCIsXG4gIFwiY3VwZG90XCI6XCJcXHUyMjhEXCIsXG4gIFwiY3Vwb3JcIjpcIlxcdTJBNDVcIixcbiAgXCJjdXBzXCI6XCJcXHUyMjJBXFx1RkUwMFwiLFxuICBcImN1cmFyclwiOlwiXFx1MjFCN1wiLFxuICBcImN1cmFycm1cIjpcIlxcdTI5M0NcIixcbiAgXCJjdXJseWVxcHJlY1wiOlwiXFx1MjJERVwiLFxuICBcImN1cmx5ZXFzdWNjXCI6XCJcXHUyMkRGXCIsXG4gIFwiY3VybHl2ZWVcIjpcIlxcdTIyQ0VcIixcbiAgXCJjdXJseXdlZGdlXCI6XCJcXHUyMkNGXCIsXG4gIFwiY3VycmVuXCI6XCJcXHUwMEE0XCIsXG4gIFwiY3VydmVhcnJvd2xlZnRcIjpcIlxcdTIxQjZcIixcbiAgXCJjdXJ2ZWFycm93cmlnaHRcIjpcIlxcdTIxQjdcIixcbiAgXCJjdXZlZVwiOlwiXFx1MjJDRVwiLFxuICBcImN1d2VkXCI6XCJcXHUyMkNGXCIsXG4gIFwiY3djb25pbnRcIjpcIlxcdTIyMzJcIixcbiAgXCJjd2ludFwiOlwiXFx1MjIzMVwiLFxuICBcImN5bGN0eVwiOlwiXFx1MjMyRFwiLFxuICBcIkRhZ2dlclwiOlwiXFx1MjAyMVwiLFxuICBcImRhZ2dlclwiOlwiXFx1MjAyMFwiLFxuICBcImRhbGV0aFwiOlwiXFx1MjEzOFwiLFxuICBcIkRhcnJcIjpcIlxcdTIxQTFcIixcbiAgXCJkQXJyXCI6XCJcXHUyMUQzXCIsXG4gIFwiZGFyclwiOlwiXFx1MjE5M1wiLFxuICBcImRhc2hcIjpcIlxcdTIwMTBcIixcbiAgXCJEYXNodlwiOlwiXFx1MkFFNFwiLFxuICBcImRhc2h2XCI6XCJcXHUyMkEzXCIsXG4gIFwiZGJrYXJvd1wiOlwiXFx1MjkwRlwiLFxuICBcImRibGFjXCI6XCJcXHUwMkREXCIsXG4gIFwiRGNhcm9uXCI6XCJcXHUwMTBFXCIsXG4gIFwiZGNhcm9uXCI6XCJcXHUwMTBGXCIsXG4gIFwiRGN5XCI6XCJcXHUwNDE0XCIsXG4gIFwiZGN5XCI6XCJcXHUwNDM0XCIsXG4gIFwiRERcIjpcIlxcdTIxNDVcIixcbiAgXCJkZFwiOlwiXFx1MjE0NlwiLFxuICBcImRkYWdnZXJcIjpcIlxcdTIwMjFcIixcbiAgXCJkZGFyclwiOlwiXFx1MjFDQVwiLFxuICBcIkREb3RyYWhkXCI6XCJcXHUyOTExXCIsXG4gIFwiZGRvdHNlcVwiOlwiXFx1MkE3N1wiLFxuICBcImRlZ1wiOlwiXFx1MDBCMFwiLFxuICBcIkRlbFwiOlwiXFx1MjIwN1wiLFxuICBcIkRlbHRhXCI6XCJcXHUwMzk0XCIsXG4gIFwiZGVsdGFcIjpcIlxcdTAzQjRcIixcbiAgXCJkZW1wdHl2XCI6XCJcXHUyOUIxXCIsXG4gIFwiZGZpc2h0XCI6XCJcXHUyOTdGXCIsXG4gIFwiRGZyXCI6XCJcXHVEODM1XFx1REQwN1wiLFxuICBcImRmclwiOlwiXFx1RDgzNVxcdUREMjFcIixcbiAgXCJkSGFyXCI6XCJcXHUyOTY1XCIsXG4gIFwiZGhhcmxcIjpcIlxcdTIxQzNcIixcbiAgXCJkaGFyclwiOlwiXFx1MjFDMlwiLFxuICBcIkRpYWNyaXRpY2FsQWN1dGVcIjpcIlxcdTAwQjRcIixcbiAgXCJEaWFjcml0aWNhbERvdFwiOlwiXFx1MDJEOVwiLFxuICBcIkRpYWNyaXRpY2FsRG91YmxlQWN1dGVcIjpcIlxcdTAyRERcIixcbiAgXCJEaWFjcml0aWNhbEdyYXZlXCI6XCJcXHUwMDYwXCIsXG4gIFwiRGlhY3JpdGljYWxUaWxkZVwiOlwiXFx1MDJEQ1wiLFxuICBcImRpYW1cIjpcIlxcdTIyQzRcIixcbiAgXCJEaWFtb25kXCI6XCJcXHUyMkM0XCIsXG4gIFwiZGlhbW9uZFwiOlwiXFx1MjJDNFwiLFxuICBcImRpYW1vbmRzdWl0XCI6XCJcXHUyNjY2XCIsXG4gIFwiZGlhbXNcIjpcIlxcdTI2NjZcIixcbiAgXCJkaWVcIjpcIlxcdTAwQThcIixcbiAgXCJEaWZmZXJlbnRpYWxEXCI6XCJcXHUyMTQ2XCIsXG4gIFwiZGlnYW1tYVwiOlwiXFx1MDNERFwiLFxuICBcImRpc2luXCI6XCJcXHUyMkYyXCIsXG4gIFwiZGl2XCI6XCJcXHUwMEY3XCIsXG4gIFwiZGl2aWRlXCI6XCJcXHUwMEY3XCIsXG4gIFwiZGl2aWRlb250aW1lc1wiOlwiXFx1MjJDN1wiLFxuICBcImRpdm9ueFwiOlwiXFx1MjJDN1wiLFxuICBcIkRKY3lcIjpcIlxcdTA0MDJcIixcbiAgXCJkamN5XCI6XCJcXHUwNDUyXCIsXG4gIFwiZGxjb3JuXCI6XCJcXHUyMzFFXCIsXG4gIFwiZGxjcm9wXCI6XCJcXHUyMzBEXCIsXG4gIFwiZG9sbGFyXCI6XCJcXHUwMDI0XCIsXG4gIFwiRG9wZlwiOlwiXFx1RDgzNVxcdUREM0JcIixcbiAgXCJkb3BmXCI6XCJcXHVEODM1XFx1REQ1NVwiLFxuICBcIkRvdFwiOlwiXFx1MDBBOFwiLFxuICBcImRvdFwiOlwiXFx1MDJEOVwiLFxuICBcIkRvdERvdFwiOlwiXFx1MjBEQ1wiLFxuICBcImRvdGVxXCI6XCJcXHUyMjUwXCIsXG4gIFwiZG90ZXFkb3RcIjpcIlxcdTIyNTFcIixcbiAgXCJEb3RFcXVhbFwiOlwiXFx1MjI1MFwiLFxuICBcImRvdG1pbnVzXCI6XCJcXHUyMjM4XCIsXG4gIFwiZG90cGx1c1wiOlwiXFx1MjIxNFwiLFxuICBcImRvdHNxdWFyZVwiOlwiXFx1MjJBMVwiLFxuICBcImRvdWJsZWJhcndlZGdlXCI6XCJcXHUyMzA2XCIsXG4gIFwiRG91YmxlQ29udG91ckludGVncmFsXCI6XCJcXHUyMjJGXCIsXG4gIFwiRG91YmxlRG90XCI6XCJcXHUwMEE4XCIsXG4gIFwiRG91YmxlRG93bkFycm93XCI6XCJcXHUyMUQzXCIsXG4gIFwiRG91YmxlTGVmdEFycm93XCI6XCJcXHUyMUQwXCIsXG4gIFwiRG91YmxlTGVmdFJpZ2h0QXJyb3dcIjpcIlxcdTIxRDRcIixcbiAgXCJEb3VibGVMZWZ0VGVlXCI6XCJcXHUyQUU0XCIsXG4gIFwiRG91YmxlTG9uZ0xlZnRBcnJvd1wiOlwiXFx1MjdGOFwiLFxuICBcIkRvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvd1wiOlwiXFx1MjdGQVwiLFxuICBcIkRvdWJsZUxvbmdSaWdodEFycm93XCI6XCJcXHUyN0Y5XCIsXG4gIFwiRG91YmxlUmlnaHRBcnJvd1wiOlwiXFx1MjFEMlwiLFxuICBcIkRvdWJsZVJpZ2h0VGVlXCI6XCJcXHUyMkE4XCIsXG4gIFwiRG91YmxlVXBBcnJvd1wiOlwiXFx1MjFEMVwiLFxuICBcIkRvdWJsZVVwRG93bkFycm93XCI6XCJcXHUyMUQ1XCIsXG4gIFwiRG91YmxlVmVydGljYWxCYXJcIjpcIlxcdTIyMjVcIixcbiAgXCJEb3duQXJyb3dcIjpcIlxcdTIxOTNcIixcbiAgXCJEb3duYXJyb3dcIjpcIlxcdTIxRDNcIixcbiAgXCJkb3duYXJyb3dcIjpcIlxcdTIxOTNcIixcbiAgXCJEb3duQXJyb3dCYXJcIjpcIlxcdTI5MTNcIixcbiAgXCJEb3duQXJyb3dVcEFycm93XCI6XCJcXHUyMUY1XCIsXG4gIFwiRG93bkJyZXZlXCI6XCJcXHUwMzExXCIsXG4gIFwiZG93bmRvd25hcnJvd3NcIjpcIlxcdTIxQ0FcIixcbiAgXCJkb3duaGFycG9vbmxlZnRcIjpcIlxcdTIxQzNcIixcbiAgXCJkb3duaGFycG9vbnJpZ2h0XCI6XCJcXHUyMUMyXCIsXG4gIFwiRG93bkxlZnRSaWdodFZlY3RvclwiOlwiXFx1Mjk1MFwiLFxuICBcIkRvd25MZWZ0VGVlVmVjdG9yXCI6XCJcXHUyOTVFXCIsXG4gIFwiRG93bkxlZnRWZWN0b3JcIjpcIlxcdTIxQkRcIixcbiAgXCJEb3duTGVmdFZlY3RvckJhclwiOlwiXFx1Mjk1NlwiLFxuICBcIkRvd25SaWdodFRlZVZlY3RvclwiOlwiXFx1Mjk1RlwiLFxuICBcIkRvd25SaWdodFZlY3RvclwiOlwiXFx1MjFDMVwiLFxuICBcIkRvd25SaWdodFZlY3RvckJhclwiOlwiXFx1Mjk1N1wiLFxuICBcIkRvd25UZWVcIjpcIlxcdTIyQTRcIixcbiAgXCJEb3duVGVlQXJyb3dcIjpcIlxcdTIxQTdcIixcbiAgXCJkcmJrYXJvd1wiOlwiXFx1MjkxMFwiLFxuICBcImRyY29yblwiOlwiXFx1MjMxRlwiLFxuICBcImRyY3JvcFwiOlwiXFx1MjMwQ1wiLFxuICBcIkRzY3JcIjpcIlxcdUQ4MzVcXHVEQzlGXCIsXG4gIFwiZHNjclwiOlwiXFx1RDgzNVxcdURDQjlcIixcbiAgXCJEU2N5XCI6XCJcXHUwNDA1XCIsXG4gIFwiZHNjeVwiOlwiXFx1MDQ1NVwiLFxuICBcImRzb2xcIjpcIlxcdTI5RjZcIixcbiAgXCJEc3Ryb2tcIjpcIlxcdTAxMTBcIixcbiAgXCJkc3Ryb2tcIjpcIlxcdTAxMTFcIixcbiAgXCJkdGRvdFwiOlwiXFx1MjJGMVwiLFxuICBcImR0cmlcIjpcIlxcdTI1QkZcIixcbiAgXCJkdHJpZlwiOlwiXFx1MjVCRVwiLFxuICBcImR1YXJyXCI6XCJcXHUyMUY1XCIsXG4gIFwiZHVoYXJcIjpcIlxcdTI5NkZcIixcbiAgXCJkd2FuZ2xlXCI6XCJcXHUyOUE2XCIsXG4gIFwiRFpjeVwiOlwiXFx1MDQwRlwiLFxuICBcImR6Y3lcIjpcIlxcdTA0NUZcIixcbiAgXCJkemlncmFyclwiOlwiXFx1MjdGRlwiLFxuICBcIkVhY3V0ZVwiOlwiXFx1MDBDOVwiLFxuICBcImVhY3V0ZVwiOlwiXFx1MDBFOVwiLFxuICBcImVhc3RlclwiOlwiXFx1MkE2RVwiLFxuICBcIkVjYXJvblwiOlwiXFx1MDExQVwiLFxuICBcImVjYXJvblwiOlwiXFx1MDExQlwiLFxuICBcImVjaXJcIjpcIlxcdTIyNTZcIixcbiAgXCJFY2lyY1wiOlwiXFx1MDBDQVwiLFxuICBcImVjaXJjXCI6XCJcXHUwMEVBXCIsXG4gIFwiZWNvbG9uXCI6XCJcXHUyMjU1XCIsXG4gIFwiRWN5XCI6XCJcXHUwNDJEXCIsXG4gIFwiZWN5XCI6XCJcXHUwNDREXCIsXG4gIFwiZUREb3RcIjpcIlxcdTJBNzdcIixcbiAgXCJFZG90XCI6XCJcXHUwMTE2XCIsXG4gIFwiZURvdFwiOlwiXFx1MjI1MVwiLFxuICBcImVkb3RcIjpcIlxcdTAxMTdcIixcbiAgXCJlZVwiOlwiXFx1MjE0N1wiLFxuICBcImVmRG90XCI6XCJcXHUyMjUyXCIsXG4gIFwiRWZyXCI6XCJcXHVEODM1XFx1REQwOFwiLFxuICBcImVmclwiOlwiXFx1RDgzNVxcdUREMjJcIixcbiAgXCJlZ1wiOlwiXFx1MkE5QVwiLFxuICBcIkVncmF2ZVwiOlwiXFx1MDBDOFwiLFxuICBcImVncmF2ZVwiOlwiXFx1MDBFOFwiLFxuICBcImVnc1wiOlwiXFx1MkE5NlwiLFxuICBcImVnc2RvdFwiOlwiXFx1MkE5OFwiLFxuICBcImVsXCI6XCJcXHUyQTk5XCIsXG4gIFwiRWxlbWVudFwiOlwiXFx1MjIwOFwiLFxuICBcImVsaW50ZXJzXCI6XCJcXHUyM0U3XCIsXG4gIFwiZWxsXCI6XCJcXHUyMTEzXCIsXG4gIFwiZWxzXCI6XCJcXHUyQTk1XCIsXG4gIFwiZWxzZG90XCI6XCJcXHUyQTk3XCIsXG4gIFwiRW1hY3JcIjpcIlxcdTAxMTJcIixcbiAgXCJlbWFjclwiOlwiXFx1MDExM1wiLFxuICBcImVtcHR5XCI6XCJcXHUyMjA1XCIsXG4gIFwiZW1wdHlzZXRcIjpcIlxcdTIyMDVcIixcbiAgXCJFbXB0eVNtYWxsU3F1YXJlXCI6XCJcXHUyNUZCXCIsXG4gIFwiZW1wdHl2XCI6XCJcXHUyMjA1XCIsXG4gIFwiRW1wdHlWZXJ5U21hbGxTcXVhcmVcIjpcIlxcdTI1QUJcIixcbiAgXCJlbXNwXCI6XCJcXHUyMDAzXCIsXG4gIFwiZW1zcDEzXCI6XCJcXHUyMDA0XCIsXG4gIFwiZW1zcDE0XCI6XCJcXHUyMDA1XCIsXG4gIFwiRU5HXCI6XCJcXHUwMTRBXCIsXG4gIFwiZW5nXCI6XCJcXHUwMTRCXCIsXG4gIFwiZW5zcFwiOlwiXFx1MjAwMlwiLFxuICBcIkVvZ29uXCI6XCJcXHUwMTE4XCIsXG4gIFwiZW9nb25cIjpcIlxcdTAxMTlcIixcbiAgXCJFb3BmXCI6XCJcXHVEODM1XFx1REQzQ1wiLFxuICBcImVvcGZcIjpcIlxcdUQ4MzVcXHVERDU2XCIsXG4gIFwiZXBhclwiOlwiXFx1MjJENVwiLFxuICBcImVwYXJzbFwiOlwiXFx1MjlFM1wiLFxuICBcImVwbHVzXCI6XCJcXHUyQTcxXCIsXG4gIFwiZXBzaVwiOlwiXFx1MDNCNVwiLFxuICBcIkVwc2lsb25cIjpcIlxcdTAzOTVcIixcbiAgXCJlcHNpbG9uXCI6XCJcXHUwM0I1XCIsXG4gIFwiZXBzaXZcIjpcIlxcdTAzRjVcIixcbiAgXCJlcWNpcmNcIjpcIlxcdTIyNTZcIixcbiAgXCJlcWNvbG9uXCI6XCJcXHUyMjU1XCIsXG4gIFwiZXFzaW1cIjpcIlxcdTIyNDJcIixcbiAgXCJlcXNsYW50Z3RyXCI6XCJcXHUyQTk2XCIsXG4gIFwiZXFzbGFudGxlc3NcIjpcIlxcdTJBOTVcIixcbiAgXCJFcXVhbFwiOlwiXFx1MkE3NVwiLFxuICBcImVxdWFsc1wiOlwiXFx1MDAzRFwiLFxuICBcIkVxdWFsVGlsZGVcIjpcIlxcdTIyNDJcIixcbiAgXCJlcXVlc3RcIjpcIlxcdTIyNUZcIixcbiAgXCJFcXVpbGlicml1bVwiOlwiXFx1MjFDQ1wiLFxuICBcImVxdWl2XCI6XCJcXHUyMjYxXCIsXG4gIFwiZXF1aXZERFwiOlwiXFx1MkE3OFwiLFxuICBcImVxdnBhcnNsXCI6XCJcXHUyOUU1XCIsXG4gIFwiZXJhcnJcIjpcIlxcdTI5NzFcIixcbiAgXCJlckRvdFwiOlwiXFx1MjI1M1wiLFxuICBcIkVzY3JcIjpcIlxcdTIxMzBcIixcbiAgXCJlc2NyXCI6XCJcXHUyMTJGXCIsXG4gIFwiZXNkb3RcIjpcIlxcdTIyNTBcIixcbiAgXCJFc2ltXCI6XCJcXHUyQTczXCIsXG4gIFwiZXNpbVwiOlwiXFx1MjI0MlwiLFxuICBcIkV0YVwiOlwiXFx1MDM5N1wiLFxuICBcImV0YVwiOlwiXFx1MDNCN1wiLFxuICBcIkVUSFwiOlwiXFx1MDBEMFwiLFxuICBcImV0aFwiOlwiXFx1MDBGMFwiLFxuICBcIkV1bWxcIjpcIlxcdTAwQ0JcIixcbiAgXCJldW1sXCI6XCJcXHUwMEVCXCIsXG4gIFwiZXVyb1wiOlwiXFx1MjBBQ1wiLFxuICBcImV4Y2xcIjpcIlxcdTAwMjFcIixcbiAgXCJleGlzdFwiOlwiXFx1MjIwM1wiLFxuICBcIkV4aXN0c1wiOlwiXFx1MjIwM1wiLFxuICBcImV4cGVjdGF0aW9uXCI6XCJcXHUyMTMwXCIsXG4gIFwiRXhwb25lbnRpYWxFXCI6XCJcXHUyMTQ3XCIsXG4gIFwiZXhwb25lbnRpYWxlXCI6XCJcXHUyMTQ3XCIsXG4gIFwiZmFsbGluZ2RvdHNlcVwiOlwiXFx1MjI1MlwiLFxuICBcIkZjeVwiOlwiXFx1MDQyNFwiLFxuICBcImZjeVwiOlwiXFx1MDQ0NFwiLFxuICBcImZlbWFsZVwiOlwiXFx1MjY0MFwiLFxuICBcImZmaWxpZ1wiOlwiXFx1RkIwM1wiLFxuICBcImZmbGlnXCI6XCJcXHVGQjAwXCIsXG4gIFwiZmZsbGlnXCI6XCJcXHVGQjA0XCIsXG4gIFwiRmZyXCI6XCJcXHVEODM1XFx1REQwOVwiLFxuICBcImZmclwiOlwiXFx1RDgzNVxcdUREMjNcIixcbiAgXCJmaWxpZ1wiOlwiXFx1RkIwMVwiLFxuICBcIkZpbGxlZFNtYWxsU3F1YXJlXCI6XCJcXHUyNUZDXCIsXG4gIFwiRmlsbGVkVmVyeVNtYWxsU3F1YXJlXCI6XCJcXHUyNUFBXCIsXG4gIFwiZmpsaWdcIjpcIlxcdTAwNjZcXHUwMDZBXCIsXG4gIFwiZmxhdFwiOlwiXFx1MjY2RFwiLFxuICBcImZsbGlnXCI6XCJcXHVGQjAyXCIsXG4gIFwiZmx0bnNcIjpcIlxcdTI1QjFcIixcbiAgXCJmbm9mXCI6XCJcXHUwMTkyXCIsXG4gIFwiRm9wZlwiOlwiXFx1RDgzNVxcdUREM0RcIixcbiAgXCJmb3BmXCI6XCJcXHVEODM1XFx1REQ1N1wiLFxuICBcIkZvckFsbFwiOlwiXFx1MjIwMFwiLFxuICBcImZvcmFsbFwiOlwiXFx1MjIwMFwiLFxuICBcImZvcmtcIjpcIlxcdTIyRDRcIixcbiAgXCJmb3JrdlwiOlwiXFx1MkFEOVwiLFxuICBcIkZvdXJpZXJ0cmZcIjpcIlxcdTIxMzFcIixcbiAgXCJmcGFydGludFwiOlwiXFx1MkEwRFwiLFxuICBcImZyYWMxMlwiOlwiXFx1MDBCRFwiLFxuICBcImZyYWMxM1wiOlwiXFx1MjE1M1wiLFxuICBcImZyYWMxNFwiOlwiXFx1MDBCQ1wiLFxuICBcImZyYWMxNVwiOlwiXFx1MjE1NVwiLFxuICBcImZyYWMxNlwiOlwiXFx1MjE1OVwiLFxuICBcImZyYWMxOFwiOlwiXFx1MjE1QlwiLFxuICBcImZyYWMyM1wiOlwiXFx1MjE1NFwiLFxuICBcImZyYWMyNVwiOlwiXFx1MjE1NlwiLFxuICBcImZyYWMzNFwiOlwiXFx1MDBCRVwiLFxuICBcImZyYWMzNVwiOlwiXFx1MjE1N1wiLFxuICBcImZyYWMzOFwiOlwiXFx1MjE1Q1wiLFxuICBcImZyYWM0NVwiOlwiXFx1MjE1OFwiLFxuICBcImZyYWM1NlwiOlwiXFx1MjE1QVwiLFxuICBcImZyYWM1OFwiOlwiXFx1MjE1RFwiLFxuICBcImZyYWM3OFwiOlwiXFx1MjE1RVwiLFxuICBcImZyYXNsXCI6XCJcXHUyMDQ0XCIsXG4gIFwiZnJvd25cIjpcIlxcdTIzMjJcIixcbiAgXCJGc2NyXCI6XCJcXHUyMTMxXCIsXG4gIFwiZnNjclwiOlwiXFx1RDgzNVxcdURDQkJcIixcbiAgXCJnYWN1dGVcIjpcIlxcdTAxRjVcIixcbiAgXCJHYW1tYVwiOlwiXFx1MDM5M1wiLFxuICBcImdhbW1hXCI6XCJcXHUwM0IzXCIsXG4gIFwiR2FtbWFkXCI6XCJcXHUwM0RDXCIsXG4gIFwiZ2FtbWFkXCI6XCJcXHUwM0REXCIsXG4gIFwiZ2FwXCI6XCJcXHUyQTg2XCIsXG4gIFwiR2JyZXZlXCI6XCJcXHUwMTFFXCIsXG4gIFwiZ2JyZXZlXCI6XCJcXHUwMTFGXCIsXG4gIFwiR2NlZGlsXCI6XCJcXHUwMTIyXCIsXG4gIFwiR2NpcmNcIjpcIlxcdTAxMUNcIixcbiAgXCJnY2lyY1wiOlwiXFx1MDExRFwiLFxuICBcIkdjeVwiOlwiXFx1MDQxM1wiLFxuICBcImdjeVwiOlwiXFx1MDQzM1wiLFxuICBcIkdkb3RcIjpcIlxcdTAxMjBcIixcbiAgXCJnZG90XCI6XCJcXHUwMTIxXCIsXG4gIFwiZ0VcIjpcIlxcdTIyNjdcIixcbiAgXCJnZVwiOlwiXFx1MjI2NVwiLFxuICBcImdFbFwiOlwiXFx1MkE4Q1wiLFxuICBcImdlbFwiOlwiXFx1MjJEQlwiLFxuICBcImdlcVwiOlwiXFx1MjI2NVwiLFxuICBcImdlcXFcIjpcIlxcdTIyNjdcIixcbiAgXCJnZXFzbGFudFwiOlwiXFx1MkE3RVwiLFxuICBcImdlc1wiOlwiXFx1MkE3RVwiLFxuICBcImdlc2NjXCI6XCJcXHUyQUE5XCIsXG4gIFwiZ2VzZG90XCI6XCJcXHUyQTgwXCIsXG4gIFwiZ2VzZG90b1wiOlwiXFx1MkE4MlwiLFxuICBcImdlc2RvdG9sXCI6XCJcXHUyQTg0XCIsXG4gIFwiZ2VzbFwiOlwiXFx1MjJEQlxcdUZFMDBcIixcbiAgXCJnZXNsZXNcIjpcIlxcdTJBOTRcIixcbiAgXCJHZnJcIjpcIlxcdUQ4MzVcXHVERDBBXCIsXG4gIFwiZ2ZyXCI6XCJcXHVEODM1XFx1REQyNFwiLFxuICBcIkdnXCI6XCJcXHUyMkQ5XCIsXG4gIFwiZ2dcIjpcIlxcdTIyNkJcIixcbiAgXCJnZ2dcIjpcIlxcdTIyRDlcIixcbiAgXCJnaW1lbFwiOlwiXFx1MjEzN1wiLFxuICBcIkdKY3lcIjpcIlxcdTA0MDNcIixcbiAgXCJnamN5XCI6XCJcXHUwNDUzXCIsXG4gIFwiZ2xcIjpcIlxcdTIyNzdcIixcbiAgXCJnbGFcIjpcIlxcdTJBQTVcIixcbiAgXCJnbEVcIjpcIlxcdTJBOTJcIixcbiAgXCJnbGpcIjpcIlxcdTJBQTRcIixcbiAgXCJnbmFwXCI6XCJcXHUyQThBXCIsXG4gIFwiZ25hcHByb3hcIjpcIlxcdTJBOEFcIixcbiAgXCJnbkVcIjpcIlxcdTIyNjlcIixcbiAgXCJnbmVcIjpcIlxcdTJBODhcIixcbiAgXCJnbmVxXCI6XCJcXHUyQTg4XCIsXG4gIFwiZ25lcXFcIjpcIlxcdTIyNjlcIixcbiAgXCJnbnNpbVwiOlwiXFx1MjJFN1wiLFxuICBcIkdvcGZcIjpcIlxcdUQ4MzVcXHVERDNFXCIsXG4gIFwiZ29wZlwiOlwiXFx1RDgzNVxcdURENThcIixcbiAgXCJncmF2ZVwiOlwiXFx1MDA2MFwiLFxuICBcIkdyZWF0ZXJFcXVhbFwiOlwiXFx1MjI2NVwiLFxuICBcIkdyZWF0ZXJFcXVhbExlc3NcIjpcIlxcdTIyREJcIixcbiAgXCJHcmVhdGVyRnVsbEVxdWFsXCI6XCJcXHUyMjY3XCIsXG4gIFwiR3JlYXRlckdyZWF0ZXJcIjpcIlxcdTJBQTJcIixcbiAgXCJHcmVhdGVyTGVzc1wiOlwiXFx1MjI3N1wiLFxuICBcIkdyZWF0ZXJTbGFudEVxdWFsXCI6XCJcXHUyQTdFXCIsXG4gIFwiR3JlYXRlclRpbGRlXCI6XCJcXHUyMjczXCIsXG4gIFwiR3NjclwiOlwiXFx1RDgzNVxcdURDQTJcIixcbiAgXCJnc2NyXCI6XCJcXHUyMTBBXCIsXG4gIFwiZ3NpbVwiOlwiXFx1MjI3M1wiLFxuICBcImdzaW1lXCI6XCJcXHUyQThFXCIsXG4gIFwiZ3NpbWxcIjpcIlxcdTJBOTBcIixcbiAgXCJHVFwiOlwiXFx1MDAzRVwiLFxuICBcIkd0XCI6XCJcXHUyMjZCXCIsXG4gIFwiZ3RcIjpcIlxcdTAwM0VcIixcbiAgXCJndGNjXCI6XCJcXHUyQUE3XCIsXG4gIFwiZ3RjaXJcIjpcIlxcdTJBN0FcIixcbiAgXCJndGRvdFwiOlwiXFx1MjJEN1wiLFxuICBcImd0bFBhclwiOlwiXFx1Mjk5NVwiLFxuICBcImd0cXVlc3RcIjpcIlxcdTJBN0NcIixcbiAgXCJndHJhcHByb3hcIjpcIlxcdTJBODZcIixcbiAgXCJndHJhcnJcIjpcIlxcdTI5NzhcIixcbiAgXCJndHJkb3RcIjpcIlxcdTIyRDdcIixcbiAgXCJndHJlcWxlc3NcIjpcIlxcdTIyREJcIixcbiAgXCJndHJlcXFsZXNzXCI6XCJcXHUyQThDXCIsXG4gIFwiZ3RybGVzc1wiOlwiXFx1MjI3N1wiLFxuICBcImd0cnNpbVwiOlwiXFx1MjI3M1wiLFxuICBcImd2ZXJ0bmVxcVwiOlwiXFx1MjI2OVxcdUZFMDBcIixcbiAgXCJndm5FXCI6XCJcXHUyMjY5XFx1RkUwMFwiLFxuICBcIkhhY2VrXCI6XCJcXHUwMkM3XCIsXG4gIFwiaGFpcnNwXCI6XCJcXHUyMDBBXCIsXG4gIFwiaGFsZlwiOlwiXFx1MDBCRFwiLFxuICBcImhhbWlsdFwiOlwiXFx1MjEwQlwiLFxuICBcIkhBUkRjeVwiOlwiXFx1MDQyQVwiLFxuICBcImhhcmRjeVwiOlwiXFx1MDQ0QVwiLFxuICBcImhBcnJcIjpcIlxcdTIxRDRcIixcbiAgXCJoYXJyXCI6XCJcXHUyMTk0XCIsXG4gIFwiaGFycmNpclwiOlwiXFx1Mjk0OFwiLFxuICBcImhhcnJ3XCI6XCJcXHUyMUFEXCIsXG4gIFwiSGF0XCI6XCJcXHUwMDVFXCIsXG4gIFwiaGJhclwiOlwiXFx1MjEwRlwiLFxuICBcIkhjaXJjXCI6XCJcXHUwMTI0XCIsXG4gIFwiaGNpcmNcIjpcIlxcdTAxMjVcIixcbiAgXCJoZWFydHNcIjpcIlxcdTI2NjVcIixcbiAgXCJoZWFydHN1aXRcIjpcIlxcdTI2NjVcIixcbiAgXCJoZWxsaXBcIjpcIlxcdTIwMjZcIixcbiAgXCJoZXJjb25cIjpcIlxcdTIyQjlcIixcbiAgXCJIZnJcIjpcIlxcdTIxMENcIixcbiAgXCJoZnJcIjpcIlxcdUQ4MzVcXHVERDI1XCIsXG4gIFwiSGlsYmVydFNwYWNlXCI6XCJcXHUyMTBCXCIsXG4gIFwiaGtzZWFyb3dcIjpcIlxcdTI5MjVcIixcbiAgXCJoa3N3YXJvd1wiOlwiXFx1MjkyNlwiLFxuICBcImhvYXJyXCI6XCJcXHUyMUZGXCIsXG4gIFwiaG9tdGh0XCI6XCJcXHUyMjNCXCIsXG4gIFwiaG9va2xlZnRhcnJvd1wiOlwiXFx1MjFBOVwiLFxuICBcImhvb2tyaWdodGFycm93XCI6XCJcXHUyMUFBXCIsXG4gIFwiSG9wZlwiOlwiXFx1MjEwRFwiLFxuICBcImhvcGZcIjpcIlxcdUQ4MzVcXHVERDU5XCIsXG4gIFwiaG9yYmFyXCI6XCJcXHUyMDE1XCIsXG4gIFwiSG9yaXpvbnRhbExpbmVcIjpcIlxcdTI1MDBcIixcbiAgXCJIc2NyXCI6XCJcXHUyMTBCXCIsXG4gIFwiaHNjclwiOlwiXFx1RDgzNVxcdURDQkRcIixcbiAgXCJoc2xhc2hcIjpcIlxcdTIxMEZcIixcbiAgXCJIc3Ryb2tcIjpcIlxcdTAxMjZcIixcbiAgXCJoc3Ryb2tcIjpcIlxcdTAxMjdcIixcbiAgXCJIdW1wRG93bkh1bXBcIjpcIlxcdTIyNEVcIixcbiAgXCJIdW1wRXF1YWxcIjpcIlxcdTIyNEZcIixcbiAgXCJoeWJ1bGxcIjpcIlxcdTIwNDNcIixcbiAgXCJoeXBoZW5cIjpcIlxcdTIwMTBcIixcbiAgXCJJYWN1dGVcIjpcIlxcdTAwQ0RcIixcbiAgXCJpYWN1dGVcIjpcIlxcdTAwRURcIixcbiAgXCJpY1wiOlwiXFx1MjA2M1wiLFxuICBcIkljaXJjXCI6XCJcXHUwMENFXCIsXG4gIFwiaWNpcmNcIjpcIlxcdTAwRUVcIixcbiAgXCJJY3lcIjpcIlxcdTA0MThcIixcbiAgXCJpY3lcIjpcIlxcdTA0MzhcIixcbiAgXCJJZG90XCI6XCJcXHUwMTMwXCIsXG4gIFwiSUVjeVwiOlwiXFx1MDQxNVwiLFxuICBcImllY3lcIjpcIlxcdTA0MzVcIixcbiAgXCJpZXhjbFwiOlwiXFx1MDBBMVwiLFxuICBcImlmZlwiOlwiXFx1MjFENFwiLFxuICBcIklmclwiOlwiXFx1MjExMVwiLFxuICBcImlmclwiOlwiXFx1RDgzNVxcdUREMjZcIixcbiAgXCJJZ3JhdmVcIjpcIlxcdTAwQ0NcIixcbiAgXCJpZ3JhdmVcIjpcIlxcdTAwRUNcIixcbiAgXCJpaVwiOlwiXFx1MjE0OFwiLFxuICBcImlpaWludFwiOlwiXFx1MkEwQ1wiLFxuICBcImlpaW50XCI6XCJcXHUyMjJEXCIsXG4gIFwiaWluZmluXCI6XCJcXHUyOURDXCIsXG4gIFwiaWlvdGFcIjpcIlxcdTIxMjlcIixcbiAgXCJJSmxpZ1wiOlwiXFx1MDEzMlwiLFxuICBcImlqbGlnXCI6XCJcXHUwMTMzXCIsXG4gIFwiSW1cIjpcIlxcdTIxMTFcIixcbiAgXCJJbWFjclwiOlwiXFx1MDEyQVwiLFxuICBcImltYWNyXCI6XCJcXHUwMTJCXCIsXG4gIFwiaW1hZ2VcIjpcIlxcdTIxMTFcIixcbiAgXCJJbWFnaW5hcnlJXCI6XCJcXHUyMTQ4XCIsXG4gIFwiaW1hZ2xpbmVcIjpcIlxcdTIxMTBcIixcbiAgXCJpbWFncGFydFwiOlwiXFx1MjExMVwiLFxuICBcImltYXRoXCI6XCJcXHUwMTMxXCIsXG4gIFwiaW1vZlwiOlwiXFx1MjJCN1wiLFxuICBcImltcGVkXCI6XCJcXHUwMUI1XCIsXG4gIFwiSW1wbGllc1wiOlwiXFx1MjFEMlwiLFxuICBcImluXCI6XCJcXHUyMjA4XCIsXG4gIFwiaW5jYXJlXCI6XCJcXHUyMTA1XCIsXG4gIFwiaW5maW5cIjpcIlxcdTIyMUVcIixcbiAgXCJpbmZpbnRpZVwiOlwiXFx1MjlERFwiLFxuICBcImlub2RvdFwiOlwiXFx1MDEzMVwiLFxuICBcIkludFwiOlwiXFx1MjIyQ1wiLFxuICBcImludFwiOlwiXFx1MjIyQlwiLFxuICBcImludGNhbFwiOlwiXFx1MjJCQVwiLFxuICBcImludGVnZXJzXCI6XCJcXHUyMTI0XCIsXG4gIFwiSW50ZWdyYWxcIjpcIlxcdTIyMkJcIixcbiAgXCJpbnRlcmNhbFwiOlwiXFx1MjJCQVwiLFxuICBcIkludGVyc2VjdGlvblwiOlwiXFx1MjJDMlwiLFxuICBcImludGxhcmhrXCI6XCJcXHUyQTE3XCIsXG4gIFwiaW50cHJvZFwiOlwiXFx1MkEzQ1wiLFxuICBcIkludmlzaWJsZUNvbW1hXCI6XCJcXHUyMDYzXCIsXG4gIFwiSW52aXNpYmxlVGltZXNcIjpcIlxcdTIwNjJcIixcbiAgXCJJT2N5XCI6XCJcXHUwNDAxXCIsXG4gIFwiaW9jeVwiOlwiXFx1MDQ1MVwiLFxuICBcIklvZ29uXCI6XCJcXHUwMTJFXCIsXG4gIFwiaW9nb25cIjpcIlxcdTAxMkZcIixcbiAgXCJJb3BmXCI6XCJcXHVEODM1XFx1REQ0MFwiLFxuICBcImlvcGZcIjpcIlxcdUQ4MzVcXHVERDVBXCIsXG4gIFwiSW90YVwiOlwiXFx1MDM5OVwiLFxuICBcImlvdGFcIjpcIlxcdTAzQjlcIixcbiAgXCJpcHJvZFwiOlwiXFx1MkEzQ1wiLFxuICBcImlxdWVzdFwiOlwiXFx1MDBCRlwiLFxuICBcIklzY3JcIjpcIlxcdTIxMTBcIixcbiAgXCJpc2NyXCI6XCJcXHVEODM1XFx1RENCRVwiLFxuICBcImlzaW5cIjpcIlxcdTIyMDhcIixcbiAgXCJpc2luZG90XCI6XCJcXHUyMkY1XCIsXG4gIFwiaXNpbkVcIjpcIlxcdTIyRjlcIixcbiAgXCJpc2luc1wiOlwiXFx1MjJGNFwiLFxuICBcImlzaW5zdlwiOlwiXFx1MjJGM1wiLFxuICBcImlzaW52XCI6XCJcXHUyMjA4XCIsXG4gIFwiaXRcIjpcIlxcdTIwNjJcIixcbiAgXCJJdGlsZGVcIjpcIlxcdTAxMjhcIixcbiAgXCJpdGlsZGVcIjpcIlxcdTAxMjlcIixcbiAgXCJJdWtjeVwiOlwiXFx1MDQwNlwiLFxuICBcIml1a2N5XCI6XCJcXHUwNDU2XCIsXG4gIFwiSXVtbFwiOlwiXFx1MDBDRlwiLFxuICBcIml1bWxcIjpcIlxcdTAwRUZcIixcbiAgXCJKY2lyY1wiOlwiXFx1MDEzNFwiLFxuICBcImpjaXJjXCI6XCJcXHUwMTM1XCIsXG4gIFwiSmN5XCI6XCJcXHUwNDE5XCIsXG4gIFwiamN5XCI6XCJcXHUwNDM5XCIsXG4gIFwiSmZyXCI6XCJcXHVEODM1XFx1REQwRFwiLFxuICBcImpmclwiOlwiXFx1RDgzNVxcdUREMjdcIixcbiAgXCJqbWF0aFwiOlwiXFx1MDIzN1wiLFxuICBcIkpvcGZcIjpcIlxcdUQ4MzVcXHVERDQxXCIsXG4gIFwiam9wZlwiOlwiXFx1RDgzNVxcdURENUJcIixcbiAgXCJKc2NyXCI6XCJcXHVEODM1XFx1RENBNVwiLFxuICBcImpzY3JcIjpcIlxcdUQ4MzVcXHVEQ0JGXCIsXG4gIFwiSnNlcmN5XCI6XCJcXHUwNDA4XCIsXG4gIFwianNlcmN5XCI6XCJcXHUwNDU4XCIsXG4gIFwiSnVrY3lcIjpcIlxcdTA0MDRcIixcbiAgXCJqdWtjeVwiOlwiXFx1MDQ1NFwiLFxuICBcIkthcHBhXCI6XCJcXHUwMzlBXCIsXG4gIFwia2FwcGFcIjpcIlxcdTAzQkFcIixcbiAgXCJrYXBwYXZcIjpcIlxcdTAzRjBcIixcbiAgXCJLY2VkaWxcIjpcIlxcdTAxMzZcIixcbiAgXCJrY2VkaWxcIjpcIlxcdTAxMzdcIixcbiAgXCJLY3lcIjpcIlxcdTA0MUFcIixcbiAgXCJrY3lcIjpcIlxcdTA0M0FcIixcbiAgXCJLZnJcIjpcIlxcdUQ4MzVcXHVERDBFXCIsXG4gIFwia2ZyXCI6XCJcXHVEODM1XFx1REQyOFwiLFxuICBcImtncmVlblwiOlwiXFx1MDEzOFwiLFxuICBcIktIY3lcIjpcIlxcdTA0MjVcIixcbiAgXCJraGN5XCI6XCJcXHUwNDQ1XCIsXG4gIFwiS0pjeVwiOlwiXFx1MDQwQ1wiLFxuICBcImtqY3lcIjpcIlxcdTA0NUNcIixcbiAgXCJLb3BmXCI6XCJcXHVEODM1XFx1REQ0MlwiLFxuICBcImtvcGZcIjpcIlxcdUQ4MzVcXHVERDVDXCIsXG4gIFwiS3NjclwiOlwiXFx1RDgzNVxcdURDQTZcIixcbiAgXCJrc2NyXCI6XCJcXHVEODM1XFx1RENDMFwiLFxuICBcImxBYXJyXCI6XCJcXHUyMURBXCIsXG4gIFwiTGFjdXRlXCI6XCJcXHUwMTM5XCIsXG4gIFwibGFjdXRlXCI6XCJcXHUwMTNBXCIsXG4gIFwibGFlbXB0eXZcIjpcIlxcdTI5QjRcIixcbiAgXCJsYWdyYW5cIjpcIlxcdTIxMTJcIixcbiAgXCJMYW1iZGFcIjpcIlxcdTAzOUJcIixcbiAgXCJsYW1iZGFcIjpcIlxcdTAzQkJcIixcbiAgXCJMYW5nXCI6XCJcXHUyN0VBXCIsXG4gIFwibGFuZ1wiOlwiXFx1MjdFOFwiLFxuICBcImxhbmdkXCI6XCJcXHUyOTkxXCIsXG4gIFwibGFuZ2xlXCI6XCJcXHUyN0U4XCIsXG4gIFwibGFwXCI6XCJcXHUyQTg1XCIsXG4gIFwiTGFwbGFjZXRyZlwiOlwiXFx1MjExMlwiLFxuICBcImxhcXVvXCI6XCJcXHUwMEFCXCIsXG4gIFwiTGFyclwiOlwiXFx1MjE5RVwiLFxuICBcImxBcnJcIjpcIlxcdTIxRDBcIixcbiAgXCJsYXJyXCI6XCJcXHUyMTkwXCIsXG4gIFwibGFycmJcIjpcIlxcdTIxRTRcIixcbiAgXCJsYXJyYmZzXCI6XCJcXHUyOTFGXCIsXG4gIFwibGFycmZzXCI6XCJcXHUyOTFEXCIsXG4gIFwibGFycmhrXCI6XCJcXHUyMUE5XCIsXG4gIFwibGFycmxwXCI6XCJcXHUyMUFCXCIsXG4gIFwibGFycnBsXCI6XCJcXHUyOTM5XCIsXG4gIFwibGFycnNpbVwiOlwiXFx1Mjk3M1wiLFxuICBcImxhcnJ0bFwiOlwiXFx1MjFBMlwiLFxuICBcImxhdFwiOlwiXFx1MkFBQlwiLFxuICBcImxBdGFpbFwiOlwiXFx1MjkxQlwiLFxuICBcImxhdGFpbFwiOlwiXFx1MjkxOVwiLFxuICBcImxhdGVcIjpcIlxcdTJBQURcIixcbiAgXCJsYXRlc1wiOlwiXFx1MkFBRFxcdUZFMDBcIixcbiAgXCJsQmFyclwiOlwiXFx1MjkwRVwiLFxuICBcImxiYXJyXCI6XCJcXHUyOTBDXCIsXG4gIFwibGJicmtcIjpcIlxcdTI3NzJcIixcbiAgXCJsYnJhY2VcIjpcIlxcdTAwN0JcIixcbiAgXCJsYnJhY2tcIjpcIlxcdTAwNUJcIixcbiAgXCJsYnJrZVwiOlwiXFx1Mjk4QlwiLFxuICBcImxicmtzbGRcIjpcIlxcdTI5OEZcIixcbiAgXCJsYnJrc2x1XCI6XCJcXHUyOThEXCIsXG4gIFwiTGNhcm9uXCI6XCJcXHUwMTNEXCIsXG4gIFwibGNhcm9uXCI6XCJcXHUwMTNFXCIsXG4gIFwiTGNlZGlsXCI6XCJcXHUwMTNCXCIsXG4gIFwibGNlZGlsXCI6XCJcXHUwMTNDXCIsXG4gIFwibGNlaWxcIjpcIlxcdTIzMDhcIixcbiAgXCJsY3ViXCI6XCJcXHUwMDdCXCIsXG4gIFwiTGN5XCI6XCJcXHUwNDFCXCIsXG4gIFwibGN5XCI6XCJcXHUwNDNCXCIsXG4gIFwibGRjYVwiOlwiXFx1MjkzNlwiLFxuICBcImxkcXVvXCI6XCJcXHUyMDFDXCIsXG4gIFwibGRxdW9yXCI6XCJcXHUyMDFFXCIsXG4gIFwibGRyZGhhclwiOlwiXFx1Mjk2N1wiLFxuICBcImxkcnVzaGFyXCI6XCJcXHUyOTRCXCIsXG4gIFwibGRzaFwiOlwiXFx1MjFCMlwiLFxuICBcImxFXCI6XCJcXHUyMjY2XCIsXG4gIFwibGVcIjpcIlxcdTIyNjRcIixcbiAgXCJMZWZ0QW5nbGVCcmFja2V0XCI6XCJcXHUyN0U4XCIsXG4gIFwiTGVmdEFycm93XCI6XCJcXHUyMTkwXCIsXG4gIFwiTGVmdGFycm93XCI6XCJcXHUyMUQwXCIsXG4gIFwibGVmdGFycm93XCI6XCJcXHUyMTkwXCIsXG4gIFwiTGVmdEFycm93QmFyXCI6XCJcXHUyMUU0XCIsXG4gIFwiTGVmdEFycm93UmlnaHRBcnJvd1wiOlwiXFx1MjFDNlwiLFxuICBcImxlZnRhcnJvd3RhaWxcIjpcIlxcdTIxQTJcIixcbiAgXCJMZWZ0Q2VpbGluZ1wiOlwiXFx1MjMwOFwiLFxuICBcIkxlZnREb3VibGVCcmFja2V0XCI6XCJcXHUyN0U2XCIsXG4gIFwiTGVmdERvd25UZWVWZWN0b3JcIjpcIlxcdTI5NjFcIixcbiAgXCJMZWZ0RG93blZlY3RvclwiOlwiXFx1MjFDM1wiLFxuICBcIkxlZnREb3duVmVjdG9yQmFyXCI6XCJcXHUyOTU5XCIsXG4gIFwiTGVmdEZsb29yXCI6XCJcXHUyMzBBXCIsXG4gIFwibGVmdGhhcnBvb25kb3duXCI6XCJcXHUyMUJEXCIsXG4gIFwibGVmdGhhcnBvb251cFwiOlwiXFx1MjFCQ1wiLFxuICBcImxlZnRsZWZ0YXJyb3dzXCI6XCJcXHUyMUM3XCIsXG4gIFwiTGVmdFJpZ2h0QXJyb3dcIjpcIlxcdTIxOTRcIixcbiAgXCJMZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjFENFwiLFxuICBcImxlZnRyaWdodGFycm93XCI6XCJcXHUyMTk0XCIsXG4gIFwibGVmdHJpZ2h0YXJyb3dzXCI6XCJcXHUyMUM2XCIsXG4gIFwibGVmdHJpZ2h0aGFycG9vbnNcIjpcIlxcdTIxQ0JcIixcbiAgXCJsZWZ0cmlnaHRzcXVpZ2Fycm93XCI6XCJcXHUyMUFEXCIsXG4gIFwiTGVmdFJpZ2h0VmVjdG9yXCI6XCJcXHUyOTRFXCIsXG4gIFwiTGVmdFRlZVwiOlwiXFx1MjJBM1wiLFxuICBcIkxlZnRUZWVBcnJvd1wiOlwiXFx1MjFBNFwiLFxuICBcIkxlZnRUZWVWZWN0b3JcIjpcIlxcdTI5NUFcIixcbiAgXCJsZWZ0dGhyZWV0aW1lc1wiOlwiXFx1MjJDQlwiLFxuICBcIkxlZnRUcmlhbmdsZVwiOlwiXFx1MjJCMlwiLFxuICBcIkxlZnRUcmlhbmdsZUJhclwiOlwiXFx1MjlDRlwiLFxuICBcIkxlZnRUcmlhbmdsZUVxdWFsXCI6XCJcXHUyMkI0XCIsXG4gIFwiTGVmdFVwRG93blZlY3RvclwiOlwiXFx1Mjk1MVwiLFxuICBcIkxlZnRVcFRlZVZlY3RvclwiOlwiXFx1Mjk2MFwiLFxuICBcIkxlZnRVcFZlY3RvclwiOlwiXFx1MjFCRlwiLFxuICBcIkxlZnRVcFZlY3RvckJhclwiOlwiXFx1Mjk1OFwiLFxuICBcIkxlZnRWZWN0b3JcIjpcIlxcdTIxQkNcIixcbiAgXCJMZWZ0VmVjdG9yQmFyXCI6XCJcXHUyOTUyXCIsXG4gIFwibEVnXCI6XCJcXHUyQThCXCIsXG4gIFwibGVnXCI6XCJcXHUyMkRBXCIsXG4gIFwibGVxXCI6XCJcXHUyMjY0XCIsXG4gIFwibGVxcVwiOlwiXFx1MjI2NlwiLFxuICBcImxlcXNsYW50XCI6XCJcXHUyQTdEXCIsXG4gIFwibGVzXCI6XCJcXHUyQTdEXCIsXG4gIFwibGVzY2NcIjpcIlxcdTJBQThcIixcbiAgXCJsZXNkb3RcIjpcIlxcdTJBN0ZcIixcbiAgXCJsZXNkb3RvXCI6XCJcXHUyQTgxXCIsXG4gIFwibGVzZG90b3JcIjpcIlxcdTJBODNcIixcbiAgXCJsZXNnXCI6XCJcXHUyMkRBXFx1RkUwMFwiLFxuICBcImxlc2dlc1wiOlwiXFx1MkE5M1wiLFxuICBcImxlc3NhcHByb3hcIjpcIlxcdTJBODVcIixcbiAgXCJsZXNzZG90XCI6XCJcXHUyMkQ2XCIsXG4gIFwibGVzc2VxZ3RyXCI6XCJcXHUyMkRBXCIsXG4gIFwibGVzc2VxcWd0clwiOlwiXFx1MkE4QlwiLFxuICBcIkxlc3NFcXVhbEdyZWF0ZXJcIjpcIlxcdTIyREFcIixcbiAgXCJMZXNzRnVsbEVxdWFsXCI6XCJcXHUyMjY2XCIsXG4gIFwiTGVzc0dyZWF0ZXJcIjpcIlxcdTIyNzZcIixcbiAgXCJsZXNzZ3RyXCI6XCJcXHUyMjc2XCIsXG4gIFwiTGVzc0xlc3NcIjpcIlxcdTJBQTFcIixcbiAgXCJsZXNzc2ltXCI6XCJcXHUyMjcyXCIsXG4gIFwiTGVzc1NsYW50RXF1YWxcIjpcIlxcdTJBN0RcIixcbiAgXCJMZXNzVGlsZGVcIjpcIlxcdTIyNzJcIixcbiAgXCJsZmlzaHRcIjpcIlxcdTI5N0NcIixcbiAgXCJsZmxvb3JcIjpcIlxcdTIzMEFcIixcbiAgXCJMZnJcIjpcIlxcdUQ4MzVcXHVERDBGXCIsXG4gIFwibGZyXCI6XCJcXHVEODM1XFx1REQyOVwiLFxuICBcImxnXCI6XCJcXHUyMjc2XCIsXG4gIFwibGdFXCI6XCJcXHUyQTkxXCIsXG4gIFwibEhhclwiOlwiXFx1Mjk2MlwiLFxuICBcImxoYXJkXCI6XCJcXHUyMUJEXCIsXG4gIFwibGhhcnVcIjpcIlxcdTIxQkNcIixcbiAgXCJsaGFydWxcIjpcIlxcdTI5NkFcIixcbiAgXCJsaGJsa1wiOlwiXFx1MjU4NFwiLFxuICBcIkxKY3lcIjpcIlxcdTA0MDlcIixcbiAgXCJsamN5XCI6XCJcXHUwNDU5XCIsXG4gIFwiTGxcIjpcIlxcdTIyRDhcIixcbiAgXCJsbFwiOlwiXFx1MjI2QVwiLFxuICBcImxsYXJyXCI6XCJcXHUyMUM3XCIsXG4gIFwibGxjb3JuZXJcIjpcIlxcdTIzMUVcIixcbiAgXCJMbGVmdGFycm93XCI6XCJcXHUyMURBXCIsXG4gIFwibGxoYXJkXCI6XCJcXHUyOTZCXCIsXG4gIFwibGx0cmlcIjpcIlxcdTI1RkFcIixcbiAgXCJMbWlkb3RcIjpcIlxcdTAxM0ZcIixcbiAgXCJsbWlkb3RcIjpcIlxcdTAxNDBcIixcbiAgXCJsbW91c3RcIjpcIlxcdTIzQjBcIixcbiAgXCJsbW91c3RhY2hlXCI6XCJcXHUyM0IwXCIsXG4gIFwibG5hcFwiOlwiXFx1MkE4OVwiLFxuICBcImxuYXBwcm94XCI6XCJcXHUyQTg5XCIsXG4gIFwibG5FXCI6XCJcXHUyMjY4XCIsXG4gIFwibG5lXCI6XCJcXHUyQTg3XCIsXG4gIFwibG5lcVwiOlwiXFx1MkE4N1wiLFxuICBcImxuZXFxXCI6XCJcXHUyMjY4XCIsXG4gIFwibG5zaW1cIjpcIlxcdTIyRTZcIixcbiAgXCJsb2FuZ1wiOlwiXFx1MjdFQ1wiLFxuICBcImxvYXJyXCI6XCJcXHUyMUZEXCIsXG4gIFwibG9icmtcIjpcIlxcdTI3RTZcIixcbiAgXCJMb25nTGVmdEFycm93XCI6XCJcXHUyN0Y1XCIsXG4gIFwiTG9uZ2xlZnRhcnJvd1wiOlwiXFx1MjdGOFwiLFxuICBcImxvbmdsZWZ0YXJyb3dcIjpcIlxcdTI3RjVcIixcbiAgXCJMb25nTGVmdFJpZ2h0QXJyb3dcIjpcIlxcdTI3RjdcIixcbiAgXCJMb25nbGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTI3RkFcIixcbiAgXCJsb25nbGVmdHJpZ2h0YXJyb3dcIjpcIlxcdTI3RjdcIixcbiAgXCJsb25nbWFwc3RvXCI6XCJcXHUyN0ZDXCIsXG4gIFwiTG9uZ1JpZ2h0QXJyb3dcIjpcIlxcdTI3RjZcIixcbiAgXCJMb25ncmlnaHRhcnJvd1wiOlwiXFx1MjdGOVwiLFxuICBcImxvbmdyaWdodGFycm93XCI6XCJcXHUyN0Y2XCIsXG4gIFwibG9vcGFycm93bGVmdFwiOlwiXFx1MjFBQlwiLFxuICBcImxvb3BhcnJvd3JpZ2h0XCI6XCJcXHUyMUFDXCIsXG4gIFwibG9wYXJcIjpcIlxcdTI5ODVcIixcbiAgXCJMb3BmXCI6XCJcXHVEODM1XFx1REQ0M1wiLFxuICBcImxvcGZcIjpcIlxcdUQ4MzVcXHVERDVEXCIsXG4gIFwibG9wbHVzXCI6XCJcXHUyQTJEXCIsXG4gIFwibG90aW1lc1wiOlwiXFx1MkEzNFwiLFxuICBcImxvd2FzdFwiOlwiXFx1MjIxN1wiLFxuICBcImxvd2JhclwiOlwiXFx1MDA1RlwiLFxuICBcIkxvd2VyTGVmdEFycm93XCI6XCJcXHUyMTk5XCIsXG4gIFwiTG93ZXJSaWdodEFycm93XCI6XCJcXHUyMTk4XCIsXG4gIFwibG96XCI6XCJcXHUyNUNBXCIsXG4gIFwibG96ZW5nZVwiOlwiXFx1MjVDQVwiLFxuICBcImxvemZcIjpcIlxcdTI5RUJcIixcbiAgXCJscGFyXCI6XCJcXHUwMDI4XCIsXG4gIFwibHBhcmx0XCI6XCJcXHUyOTkzXCIsXG4gIFwibHJhcnJcIjpcIlxcdTIxQzZcIixcbiAgXCJscmNvcm5lclwiOlwiXFx1MjMxRlwiLFxuICBcImxyaGFyXCI6XCJcXHUyMUNCXCIsXG4gIFwibHJoYXJkXCI6XCJcXHUyOTZEXCIsXG4gIFwibHJtXCI6XCJcXHUyMDBFXCIsXG4gIFwibHJ0cmlcIjpcIlxcdTIyQkZcIixcbiAgXCJsc2FxdW9cIjpcIlxcdTIwMzlcIixcbiAgXCJMc2NyXCI6XCJcXHUyMTEyXCIsXG4gIFwibHNjclwiOlwiXFx1RDgzNVxcdURDQzFcIixcbiAgXCJMc2hcIjpcIlxcdTIxQjBcIixcbiAgXCJsc2hcIjpcIlxcdTIxQjBcIixcbiAgXCJsc2ltXCI6XCJcXHUyMjcyXCIsXG4gIFwibHNpbWVcIjpcIlxcdTJBOERcIixcbiAgXCJsc2ltZ1wiOlwiXFx1MkE4RlwiLFxuICBcImxzcWJcIjpcIlxcdTAwNUJcIixcbiAgXCJsc3F1b1wiOlwiXFx1MjAxOFwiLFxuICBcImxzcXVvclwiOlwiXFx1MjAxQVwiLFxuICBcIkxzdHJva1wiOlwiXFx1MDE0MVwiLFxuICBcImxzdHJva1wiOlwiXFx1MDE0MlwiLFxuICBcIkxUXCI6XCJcXHUwMDNDXCIsXG4gIFwiTHRcIjpcIlxcdTIyNkFcIixcbiAgXCJsdFwiOlwiXFx1MDAzQ1wiLFxuICBcImx0Y2NcIjpcIlxcdTJBQTZcIixcbiAgXCJsdGNpclwiOlwiXFx1MkE3OVwiLFxuICBcImx0ZG90XCI6XCJcXHUyMkQ2XCIsXG4gIFwibHRocmVlXCI6XCJcXHUyMkNCXCIsXG4gIFwibHRpbWVzXCI6XCJcXHUyMkM5XCIsXG4gIFwibHRsYXJyXCI6XCJcXHUyOTc2XCIsXG4gIFwibHRxdWVzdFwiOlwiXFx1MkE3QlwiLFxuICBcImx0cmlcIjpcIlxcdTI1QzNcIixcbiAgXCJsdHJpZVwiOlwiXFx1MjJCNFwiLFxuICBcImx0cmlmXCI6XCJcXHUyNUMyXCIsXG4gIFwibHRyUGFyXCI6XCJcXHUyOTk2XCIsXG4gIFwibHVyZHNoYXJcIjpcIlxcdTI5NEFcIixcbiAgXCJsdXJ1aGFyXCI6XCJcXHUyOTY2XCIsXG4gIFwibHZlcnRuZXFxXCI6XCJcXHUyMjY4XFx1RkUwMFwiLFxuICBcImx2bkVcIjpcIlxcdTIyNjhcXHVGRTAwXCIsXG4gIFwibWFjclwiOlwiXFx1MDBBRlwiLFxuICBcIm1hbGVcIjpcIlxcdTI2NDJcIixcbiAgXCJtYWx0XCI6XCJcXHUyNzIwXCIsXG4gIFwibWFsdGVzZVwiOlwiXFx1MjcyMFwiLFxuICBcIk1hcFwiOlwiXFx1MjkwNVwiLFxuICBcIm1hcFwiOlwiXFx1MjFBNlwiLFxuICBcIm1hcHN0b1wiOlwiXFx1MjFBNlwiLFxuICBcIm1hcHN0b2Rvd25cIjpcIlxcdTIxQTdcIixcbiAgXCJtYXBzdG9sZWZ0XCI6XCJcXHUyMUE0XCIsXG4gIFwibWFwc3RvdXBcIjpcIlxcdTIxQTVcIixcbiAgXCJtYXJrZXJcIjpcIlxcdTI1QUVcIixcbiAgXCJtY29tbWFcIjpcIlxcdTJBMjlcIixcbiAgXCJNY3lcIjpcIlxcdTA0MUNcIixcbiAgXCJtY3lcIjpcIlxcdTA0M0NcIixcbiAgXCJtZGFzaFwiOlwiXFx1MjAxNFwiLFxuICBcIm1ERG90XCI6XCJcXHUyMjNBXCIsXG4gIFwibWVhc3VyZWRhbmdsZVwiOlwiXFx1MjIyMVwiLFxuICBcIk1lZGl1bVNwYWNlXCI6XCJcXHUyMDVGXCIsXG4gIFwiTWVsbGludHJmXCI6XCJcXHUyMTMzXCIsXG4gIFwiTWZyXCI6XCJcXHVEODM1XFx1REQxMFwiLFxuICBcIm1mclwiOlwiXFx1RDgzNVxcdUREMkFcIixcbiAgXCJtaG9cIjpcIlxcdTIxMjdcIixcbiAgXCJtaWNyb1wiOlwiXFx1MDBCNVwiLFxuICBcIm1pZFwiOlwiXFx1MjIyM1wiLFxuICBcIm1pZGFzdFwiOlwiXFx1MDAyQVwiLFxuICBcIm1pZGNpclwiOlwiXFx1MkFGMFwiLFxuICBcIm1pZGRvdFwiOlwiXFx1MDBCN1wiLFxuICBcIm1pbnVzXCI6XCJcXHUyMjEyXCIsXG4gIFwibWludXNiXCI6XCJcXHUyMjlGXCIsXG4gIFwibWludXNkXCI6XCJcXHUyMjM4XCIsXG4gIFwibWludXNkdVwiOlwiXFx1MkEyQVwiLFxuICBcIk1pbnVzUGx1c1wiOlwiXFx1MjIxM1wiLFxuICBcIm1sY3BcIjpcIlxcdTJBREJcIixcbiAgXCJtbGRyXCI6XCJcXHUyMDI2XCIsXG4gIFwibW5wbHVzXCI6XCJcXHUyMjEzXCIsXG4gIFwibW9kZWxzXCI6XCJcXHUyMkE3XCIsXG4gIFwiTW9wZlwiOlwiXFx1RDgzNVxcdURENDRcIixcbiAgXCJtb3BmXCI6XCJcXHVEODM1XFx1REQ1RVwiLFxuICBcIm1wXCI6XCJcXHUyMjEzXCIsXG4gIFwiTXNjclwiOlwiXFx1MjEzM1wiLFxuICBcIm1zY3JcIjpcIlxcdUQ4MzVcXHVEQ0MyXCIsXG4gIFwibXN0cG9zXCI6XCJcXHUyMjNFXCIsXG4gIFwiTXVcIjpcIlxcdTAzOUNcIixcbiAgXCJtdVwiOlwiXFx1MDNCQ1wiLFxuICBcIm11bHRpbWFwXCI6XCJcXHUyMkI4XCIsXG4gIFwibXVtYXBcIjpcIlxcdTIyQjhcIixcbiAgXCJuYWJsYVwiOlwiXFx1MjIwN1wiLFxuICBcIk5hY3V0ZVwiOlwiXFx1MDE0M1wiLFxuICBcIm5hY3V0ZVwiOlwiXFx1MDE0NFwiLFxuICBcIm5hbmdcIjpcIlxcdTIyMjBcXHUyMEQyXCIsXG4gIFwibmFwXCI6XCJcXHUyMjQ5XCIsXG4gIFwibmFwRVwiOlwiXFx1MkE3MFxcdTAzMzhcIixcbiAgXCJuYXBpZFwiOlwiXFx1MjI0QlxcdTAzMzhcIixcbiAgXCJuYXBvc1wiOlwiXFx1MDE0OVwiLFxuICBcIm5hcHByb3hcIjpcIlxcdTIyNDlcIixcbiAgXCJuYXR1clwiOlwiXFx1MjY2RVwiLFxuICBcIm5hdHVyYWxcIjpcIlxcdTI2NkVcIixcbiAgXCJuYXR1cmFsc1wiOlwiXFx1MjExNVwiLFxuICBcIm5ic3BcIjpcIlxcdTAwQTBcIixcbiAgXCJuYnVtcFwiOlwiXFx1MjI0RVxcdTAzMzhcIixcbiAgXCJuYnVtcGVcIjpcIlxcdTIyNEZcXHUwMzM4XCIsXG4gIFwibmNhcFwiOlwiXFx1MkE0M1wiLFxuICBcIk5jYXJvblwiOlwiXFx1MDE0N1wiLFxuICBcIm5jYXJvblwiOlwiXFx1MDE0OFwiLFxuICBcIk5jZWRpbFwiOlwiXFx1MDE0NVwiLFxuICBcIm5jZWRpbFwiOlwiXFx1MDE0NlwiLFxuICBcIm5jb25nXCI6XCJcXHUyMjQ3XCIsXG4gIFwibmNvbmdkb3RcIjpcIlxcdTJBNkRcXHUwMzM4XCIsXG4gIFwibmN1cFwiOlwiXFx1MkE0MlwiLFxuICBcIk5jeVwiOlwiXFx1MDQxRFwiLFxuICBcIm5jeVwiOlwiXFx1MDQzRFwiLFxuICBcIm5kYXNoXCI6XCJcXHUyMDEzXCIsXG4gIFwibmVcIjpcIlxcdTIyNjBcIixcbiAgXCJuZWFyaGtcIjpcIlxcdTI5MjRcIixcbiAgXCJuZUFyclwiOlwiXFx1MjFEN1wiLFxuICBcIm5lYXJyXCI6XCJcXHUyMTk3XCIsXG4gIFwibmVhcnJvd1wiOlwiXFx1MjE5N1wiLFxuICBcIm5lZG90XCI6XCJcXHUyMjUwXFx1MDMzOFwiLFxuICBcIk5lZ2F0aXZlTWVkaXVtU3BhY2VcIjpcIlxcdTIwMEJcIixcbiAgXCJOZWdhdGl2ZVRoaWNrU3BhY2VcIjpcIlxcdTIwMEJcIixcbiAgXCJOZWdhdGl2ZVRoaW5TcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIk5lZ2F0aXZlVmVyeVRoaW5TcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIm5lcXVpdlwiOlwiXFx1MjI2MlwiLFxuICBcIm5lc2VhclwiOlwiXFx1MjkyOFwiLFxuICBcIm5lc2ltXCI6XCJcXHUyMjQyXFx1MDMzOFwiLFxuICBcIk5lc3RlZEdyZWF0ZXJHcmVhdGVyXCI6XCJcXHUyMjZCXCIsXG4gIFwiTmVzdGVkTGVzc0xlc3NcIjpcIlxcdTIyNkFcIixcbiAgXCJOZXdMaW5lXCI6XCJcXHUwMDBBXCIsXG4gIFwibmV4aXN0XCI6XCJcXHUyMjA0XCIsXG4gIFwibmV4aXN0c1wiOlwiXFx1MjIwNFwiLFxuICBcIk5mclwiOlwiXFx1RDgzNVxcdUREMTFcIixcbiAgXCJuZnJcIjpcIlxcdUQ4MzVcXHVERDJCXCIsXG4gIFwibmdFXCI6XCJcXHUyMjY3XFx1MDMzOFwiLFxuICBcIm5nZVwiOlwiXFx1MjI3MVwiLFxuICBcIm5nZXFcIjpcIlxcdTIyNzFcIixcbiAgXCJuZ2VxcVwiOlwiXFx1MjI2N1xcdTAzMzhcIixcbiAgXCJuZ2Vxc2xhbnRcIjpcIlxcdTJBN0VcXHUwMzM4XCIsXG4gIFwibmdlc1wiOlwiXFx1MkE3RVxcdTAzMzhcIixcbiAgXCJuR2dcIjpcIlxcdTIyRDlcXHUwMzM4XCIsXG4gIFwibmdzaW1cIjpcIlxcdTIyNzVcIixcbiAgXCJuR3RcIjpcIlxcdTIyNkJcXHUyMEQyXCIsXG4gIFwibmd0XCI6XCJcXHUyMjZGXCIsXG4gIFwibmd0clwiOlwiXFx1MjI2RlwiLFxuICBcIm5HdHZcIjpcIlxcdTIyNkJcXHUwMzM4XCIsXG4gIFwibmhBcnJcIjpcIlxcdTIxQ0VcIixcbiAgXCJuaGFyclwiOlwiXFx1MjFBRVwiLFxuICBcIm5ocGFyXCI6XCJcXHUyQUYyXCIsXG4gIFwibmlcIjpcIlxcdTIyMEJcIixcbiAgXCJuaXNcIjpcIlxcdTIyRkNcIixcbiAgXCJuaXNkXCI6XCJcXHUyMkZBXCIsXG4gIFwibml2XCI6XCJcXHUyMjBCXCIsXG4gIFwiTkpjeVwiOlwiXFx1MDQwQVwiLFxuICBcIm5qY3lcIjpcIlxcdTA0NUFcIixcbiAgXCJubEFyclwiOlwiXFx1MjFDRFwiLFxuICBcIm5sYXJyXCI6XCJcXHUyMTlBXCIsXG4gIFwibmxkclwiOlwiXFx1MjAyNVwiLFxuICBcIm5sRVwiOlwiXFx1MjI2NlxcdTAzMzhcIixcbiAgXCJubGVcIjpcIlxcdTIyNzBcIixcbiAgXCJuTGVmdGFycm93XCI6XCJcXHUyMUNEXCIsXG4gIFwibmxlZnRhcnJvd1wiOlwiXFx1MjE5QVwiLFxuICBcIm5MZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjFDRVwiLFxuICBcIm5sZWZ0cmlnaHRhcnJvd1wiOlwiXFx1MjFBRVwiLFxuICBcIm5sZXFcIjpcIlxcdTIyNzBcIixcbiAgXCJubGVxcVwiOlwiXFx1MjI2NlxcdTAzMzhcIixcbiAgXCJubGVxc2xhbnRcIjpcIlxcdTJBN0RcXHUwMzM4XCIsXG4gIFwibmxlc1wiOlwiXFx1MkE3RFxcdTAzMzhcIixcbiAgXCJubGVzc1wiOlwiXFx1MjI2RVwiLFxuICBcIm5MbFwiOlwiXFx1MjJEOFxcdTAzMzhcIixcbiAgXCJubHNpbVwiOlwiXFx1MjI3NFwiLFxuICBcIm5MdFwiOlwiXFx1MjI2QVxcdTIwRDJcIixcbiAgXCJubHRcIjpcIlxcdTIyNkVcIixcbiAgXCJubHRyaVwiOlwiXFx1MjJFQVwiLFxuICBcIm5sdHJpZVwiOlwiXFx1MjJFQ1wiLFxuICBcIm5MdHZcIjpcIlxcdTIyNkFcXHUwMzM4XCIsXG4gIFwibm1pZFwiOlwiXFx1MjIyNFwiLFxuICBcIk5vQnJlYWtcIjpcIlxcdTIwNjBcIixcbiAgXCJOb25CcmVha2luZ1NwYWNlXCI6XCJcXHUwMEEwXCIsXG4gIFwiTm9wZlwiOlwiXFx1MjExNVwiLFxuICBcIm5vcGZcIjpcIlxcdUQ4MzVcXHVERDVGXCIsXG4gIFwiTm90XCI6XCJcXHUyQUVDXCIsXG4gIFwibm90XCI6XCJcXHUwMEFDXCIsXG4gIFwiTm90Q29uZ3J1ZW50XCI6XCJcXHUyMjYyXCIsXG4gIFwiTm90Q3VwQ2FwXCI6XCJcXHUyMjZEXCIsXG4gIFwiTm90RG91YmxlVmVydGljYWxCYXJcIjpcIlxcdTIyMjZcIixcbiAgXCJOb3RFbGVtZW50XCI6XCJcXHUyMjA5XCIsXG4gIFwiTm90RXF1YWxcIjpcIlxcdTIyNjBcIixcbiAgXCJOb3RFcXVhbFRpbGRlXCI6XCJcXHUyMjQyXFx1MDMzOFwiLFxuICBcIk5vdEV4aXN0c1wiOlwiXFx1MjIwNFwiLFxuICBcIk5vdEdyZWF0ZXJcIjpcIlxcdTIyNkZcIixcbiAgXCJOb3RHcmVhdGVyRXF1YWxcIjpcIlxcdTIyNzFcIixcbiAgXCJOb3RHcmVhdGVyRnVsbEVxdWFsXCI6XCJcXHUyMjY3XFx1MDMzOFwiLFxuICBcIk5vdEdyZWF0ZXJHcmVhdGVyXCI6XCJcXHUyMjZCXFx1MDMzOFwiLFxuICBcIk5vdEdyZWF0ZXJMZXNzXCI6XCJcXHUyMjc5XCIsXG4gIFwiTm90R3JlYXRlclNsYW50RXF1YWxcIjpcIlxcdTJBN0VcXHUwMzM4XCIsXG4gIFwiTm90R3JlYXRlclRpbGRlXCI6XCJcXHUyMjc1XCIsXG4gIFwiTm90SHVtcERvd25IdW1wXCI6XCJcXHUyMjRFXFx1MDMzOFwiLFxuICBcIk5vdEh1bXBFcXVhbFwiOlwiXFx1MjI0RlxcdTAzMzhcIixcbiAgXCJub3RpblwiOlwiXFx1MjIwOVwiLFxuICBcIm5vdGluZG90XCI6XCJcXHUyMkY1XFx1MDMzOFwiLFxuICBcIm5vdGluRVwiOlwiXFx1MjJGOVxcdTAzMzhcIixcbiAgXCJub3RpbnZhXCI6XCJcXHUyMjA5XCIsXG4gIFwibm90aW52YlwiOlwiXFx1MjJGN1wiLFxuICBcIm5vdGludmNcIjpcIlxcdTIyRjZcIixcbiAgXCJOb3RMZWZ0VHJpYW5nbGVcIjpcIlxcdTIyRUFcIixcbiAgXCJOb3RMZWZ0VHJpYW5nbGVCYXJcIjpcIlxcdTI5Q0ZcXHUwMzM4XCIsXG4gIFwiTm90TGVmdFRyaWFuZ2xlRXF1YWxcIjpcIlxcdTIyRUNcIixcbiAgXCJOb3RMZXNzXCI6XCJcXHUyMjZFXCIsXG4gIFwiTm90TGVzc0VxdWFsXCI6XCJcXHUyMjcwXCIsXG4gIFwiTm90TGVzc0dyZWF0ZXJcIjpcIlxcdTIyNzhcIixcbiAgXCJOb3RMZXNzTGVzc1wiOlwiXFx1MjI2QVxcdTAzMzhcIixcbiAgXCJOb3RMZXNzU2xhbnRFcXVhbFwiOlwiXFx1MkE3RFxcdTAzMzhcIixcbiAgXCJOb3RMZXNzVGlsZGVcIjpcIlxcdTIyNzRcIixcbiAgXCJOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlclwiOlwiXFx1MkFBMlxcdTAzMzhcIixcbiAgXCJOb3ROZXN0ZWRMZXNzTGVzc1wiOlwiXFx1MkFBMVxcdTAzMzhcIixcbiAgXCJub3RuaVwiOlwiXFx1MjIwQ1wiLFxuICBcIm5vdG5pdmFcIjpcIlxcdTIyMENcIixcbiAgXCJub3RuaXZiXCI6XCJcXHUyMkZFXCIsXG4gIFwibm90bml2Y1wiOlwiXFx1MjJGRFwiLFxuICBcIk5vdFByZWNlZGVzXCI6XCJcXHUyMjgwXCIsXG4gIFwiTm90UHJlY2VkZXNFcXVhbFwiOlwiXFx1MkFBRlxcdTAzMzhcIixcbiAgXCJOb3RQcmVjZWRlc1NsYW50RXF1YWxcIjpcIlxcdTIyRTBcIixcbiAgXCJOb3RSZXZlcnNlRWxlbWVudFwiOlwiXFx1MjIwQ1wiLFxuICBcIk5vdFJpZ2h0VHJpYW5nbGVcIjpcIlxcdTIyRUJcIixcbiAgXCJOb3RSaWdodFRyaWFuZ2xlQmFyXCI6XCJcXHUyOUQwXFx1MDMzOFwiLFxuICBcIk5vdFJpZ2h0VHJpYW5nbGVFcXVhbFwiOlwiXFx1MjJFRFwiLFxuICBcIk5vdFNxdWFyZVN1YnNldFwiOlwiXFx1MjI4RlxcdTAzMzhcIixcbiAgXCJOb3RTcXVhcmVTdWJzZXRFcXVhbFwiOlwiXFx1MjJFMlwiLFxuICBcIk5vdFNxdWFyZVN1cGVyc2V0XCI6XCJcXHUyMjkwXFx1MDMzOFwiLFxuICBcIk5vdFNxdWFyZVN1cGVyc2V0RXF1YWxcIjpcIlxcdTIyRTNcIixcbiAgXCJOb3RTdWJzZXRcIjpcIlxcdTIyODJcXHUyMEQyXCIsXG4gIFwiTm90U3Vic2V0RXF1YWxcIjpcIlxcdTIyODhcIixcbiAgXCJOb3RTdWNjZWVkc1wiOlwiXFx1MjI4MVwiLFxuICBcIk5vdFN1Y2NlZWRzRXF1YWxcIjpcIlxcdTJBQjBcXHUwMzM4XCIsXG4gIFwiTm90U3VjY2VlZHNTbGFudEVxdWFsXCI6XCJcXHUyMkUxXCIsXG4gIFwiTm90U3VjY2VlZHNUaWxkZVwiOlwiXFx1MjI3RlxcdTAzMzhcIixcbiAgXCJOb3RTdXBlcnNldFwiOlwiXFx1MjI4M1xcdTIwRDJcIixcbiAgXCJOb3RTdXBlcnNldEVxdWFsXCI6XCJcXHUyMjg5XCIsXG4gIFwiTm90VGlsZGVcIjpcIlxcdTIyNDFcIixcbiAgXCJOb3RUaWxkZUVxdWFsXCI6XCJcXHUyMjQ0XCIsXG4gIFwiTm90VGlsZGVGdWxsRXF1YWxcIjpcIlxcdTIyNDdcIixcbiAgXCJOb3RUaWxkZVRpbGRlXCI6XCJcXHUyMjQ5XCIsXG4gIFwiTm90VmVydGljYWxCYXJcIjpcIlxcdTIyMjRcIixcbiAgXCJucGFyXCI6XCJcXHUyMjI2XCIsXG4gIFwibnBhcmFsbGVsXCI6XCJcXHUyMjI2XCIsXG4gIFwibnBhcnNsXCI6XCJcXHUyQUZEXFx1MjBFNVwiLFxuICBcIm5wYXJ0XCI6XCJcXHUyMjAyXFx1MDMzOFwiLFxuICBcIm5wb2xpbnRcIjpcIlxcdTJBMTRcIixcbiAgXCJucHJcIjpcIlxcdTIyODBcIixcbiAgXCJucHJjdWVcIjpcIlxcdTIyRTBcIixcbiAgXCJucHJlXCI6XCJcXHUyQUFGXFx1MDMzOFwiLFxuICBcIm5wcmVjXCI6XCJcXHUyMjgwXCIsXG4gIFwibnByZWNlcVwiOlwiXFx1MkFBRlxcdTAzMzhcIixcbiAgXCJuckFyclwiOlwiXFx1MjFDRlwiLFxuICBcIm5yYXJyXCI6XCJcXHUyMTlCXCIsXG4gIFwibnJhcnJjXCI6XCJcXHUyOTMzXFx1MDMzOFwiLFxuICBcIm5yYXJyd1wiOlwiXFx1MjE5RFxcdTAzMzhcIixcbiAgXCJuUmlnaHRhcnJvd1wiOlwiXFx1MjFDRlwiLFxuICBcIm5yaWdodGFycm93XCI6XCJcXHUyMTlCXCIsXG4gIFwibnJ0cmlcIjpcIlxcdTIyRUJcIixcbiAgXCJucnRyaWVcIjpcIlxcdTIyRURcIixcbiAgXCJuc2NcIjpcIlxcdTIyODFcIixcbiAgXCJuc2NjdWVcIjpcIlxcdTIyRTFcIixcbiAgXCJuc2NlXCI6XCJcXHUyQUIwXFx1MDMzOFwiLFxuICBcIk5zY3JcIjpcIlxcdUQ4MzVcXHVEQ0E5XCIsXG4gIFwibnNjclwiOlwiXFx1RDgzNVxcdURDQzNcIixcbiAgXCJuc2hvcnRtaWRcIjpcIlxcdTIyMjRcIixcbiAgXCJuc2hvcnRwYXJhbGxlbFwiOlwiXFx1MjIyNlwiLFxuICBcIm5zaW1cIjpcIlxcdTIyNDFcIixcbiAgXCJuc2ltZVwiOlwiXFx1MjI0NFwiLFxuICBcIm5zaW1lcVwiOlwiXFx1MjI0NFwiLFxuICBcIm5zbWlkXCI6XCJcXHUyMjI0XCIsXG4gIFwibnNwYXJcIjpcIlxcdTIyMjZcIixcbiAgXCJuc3FzdWJlXCI6XCJcXHUyMkUyXCIsXG4gIFwibnNxc3VwZVwiOlwiXFx1MjJFM1wiLFxuICBcIm5zdWJcIjpcIlxcdTIyODRcIixcbiAgXCJuc3ViRVwiOlwiXFx1MkFDNVxcdTAzMzhcIixcbiAgXCJuc3ViZVwiOlwiXFx1MjI4OFwiLFxuICBcIm5zdWJzZXRcIjpcIlxcdTIyODJcXHUyMEQyXCIsXG4gIFwibnN1YnNldGVxXCI6XCJcXHUyMjg4XCIsXG4gIFwibnN1YnNldGVxcVwiOlwiXFx1MkFDNVxcdTAzMzhcIixcbiAgXCJuc3VjY1wiOlwiXFx1MjI4MVwiLFxuICBcIm5zdWNjZXFcIjpcIlxcdTJBQjBcXHUwMzM4XCIsXG4gIFwibnN1cFwiOlwiXFx1MjI4NVwiLFxuICBcIm5zdXBFXCI6XCJcXHUyQUM2XFx1MDMzOFwiLFxuICBcIm5zdXBlXCI6XCJcXHUyMjg5XCIsXG4gIFwibnN1cHNldFwiOlwiXFx1MjI4M1xcdTIwRDJcIixcbiAgXCJuc3Vwc2V0ZXFcIjpcIlxcdTIyODlcIixcbiAgXCJuc3Vwc2V0ZXFxXCI6XCJcXHUyQUM2XFx1MDMzOFwiLFxuICBcIm50Z2xcIjpcIlxcdTIyNzlcIixcbiAgXCJOdGlsZGVcIjpcIlxcdTAwRDFcIixcbiAgXCJudGlsZGVcIjpcIlxcdTAwRjFcIixcbiAgXCJudGxnXCI6XCJcXHUyMjc4XCIsXG4gIFwibnRyaWFuZ2xlbGVmdFwiOlwiXFx1MjJFQVwiLFxuICBcIm50cmlhbmdsZWxlZnRlcVwiOlwiXFx1MjJFQ1wiLFxuICBcIm50cmlhbmdsZXJpZ2h0XCI6XCJcXHUyMkVCXCIsXG4gIFwibnRyaWFuZ2xlcmlnaHRlcVwiOlwiXFx1MjJFRFwiLFxuICBcIk51XCI6XCJcXHUwMzlEXCIsXG4gIFwibnVcIjpcIlxcdTAzQkRcIixcbiAgXCJudW1cIjpcIlxcdTAwMjNcIixcbiAgXCJudW1lcm9cIjpcIlxcdTIxMTZcIixcbiAgXCJudW1zcFwiOlwiXFx1MjAwN1wiLFxuICBcIm52YXBcIjpcIlxcdTIyNERcXHUyMEQyXCIsXG4gIFwiblZEYXNoXCI6XCJcXHUyMkFGXCIsXG4gIFwiblZkYXNoXCI6XCJcXHUyMkFFXCIsXG4gIFwibnZEYXNoXCI6XCJcXHUyMkFEXCIsXG4gIFwibnZkYXNoXCI6XCJcXHUyMkFDXCIsXG4gIFwibnZnZVwiOlwiXFx1MjI2NVxcdTIwRDJcIixcbiAgXCJudmd0XCI6XCJcXHUwMDNFXFx1MjBEMlwiLFxuICBcIm52SGFyclwiOlwiXFx1MjkwNFwiLFxuICBcIm52aW5maW5cIjpcIlxcdTI5REVcIixcbiAgXCJudmxBcnJcIjpcIlxcdTI5MDJcIixcbiAgXCJudmxlXCI6XCJcXHUyMjY0XFx1MjBEMlwiLFxuICBcIm52bHRcIjpcIlxcdTAwM0NcXHUyMEQyXCIsXG4gIFwibnZsdHJpZVwiOlwiXFx1MjJCNFxcdTIwRDJcIixcbiAgXCJudnJBcnJcIjpcIlxcdTI5MDNcIixcbiAgXCJudnJ0cmllXCI6XCJcXHUyMkI1XFx1MjBEMlwiLFxuICBcIm52c2ltXCI6XCJcXHUyMjNDXFx1MjBEMlwiLFxuICBcIm53YXJoa1wiOlwiXFx1MjkyM1wiLFxuICBcIm53QXJyXCI6XCJcXHUyMUQ2XCIsXG4gIFwibndhcnJcIjpcIlxcdTIxOTZcIixcbiAgXCJud2Fycm93XCI6XCJcXHUyMTk2XCIsXG4gIFwibnduZWFyXCI6XCJcXHUyOTI3XCIsXG4gIFwiT2FjdXRlXCI6XCJcXHUwMEQzXCIsXG4gIFwib2FjdXRlXCI6XCJcXHUwMEYzXCIsXG4gIFwib2FzdFwiOlwiXFx1MjI5QlwiLFxuICBcIm9jaXJcIjpcIlxcdTIyOUFcIixcbiAgXCJPY2lyY1wiOlwiXFx1MDBENFwiLFxuICBcIm9jaXJjXCI6XCJcXHUwMEY0XCIsXG4gIFwiT2N5XCI6XCJcXHUwNDFFXCIsXG4gIFwib2N5XCI6XCJcXHUwNDNFXCIsXG4gIFwib2Rhc2hcIjpcIlxcdTIyOURcIixcbiAgXCJPZGJsYWNcIjpcIlxcdTAxNTBcIixcbiAgXCJvZGJsYWNcIjpcIlxcdTAxNTFcIixcbiAgXCJvZGl2XCI6XCJcXHUyQTM4XCIsXG4gIFwib2RvdFwiOlwiXFx1MjI5OVwiLFxuICBcIm9kc29sZFwiOlwiXFx1MjlCQ1wiLFxuICBcIk9FbGlnXCI6XCJcXHUwMTUyXCIsXG4gIFwib2VsaWdcIjpcIlxcdTAxNTNcIixcbiAgXCJvZmNpclwiOlwiXFx1MjlCRlwiLFxuICBcIk9mclwiOlwiXFx1RDgzNVxcdUREMTJcIixcbiAgXCJvZnJcIjpcIlxcdUQ4MzVcXHVERDJDXCIsXG4gIFwib2dvblwiOlwiXFx1MDJEQlwiLFxuICBcIk9ncmF2ZVwiOlwiXFx1MDBEMlwiLFxuICBcIm9ncmF2ZVwiOlwiXFx1MDBGMlwiLFxuICBcIm9ndFwiOlwiXFx1MjlDMVwiLFxuICBcIm9oYmFyXCI6XCJcXHUyOUI1XCIsXG4gIFwib2htXCI6XCJcXHUwM0E5XCIsXG4gIFwib2ludFwiOlwiXFx1MjIyRVwiLFxuICBcIm9sYXJyXCI6XCJcXHUyMUJBXCIsXG4gIFwib2xjaXJcIjpcIlxcdTI5QkVcIixcbiAgXCJvbGNyb3NzXCI6XCJcXHUyOUJCXCIsXG4gIFwib2xpbmVcIjpcIlxcdTIwM0VcIixcbiAgXCJvbHRcIjpcIlxcdTI5QzBcIixcbiAgXCJPbWFjclwiOlwiXFx1MDE0Q1wiLFxuICBcIm9tYWNyXCI6XCJcXHUwMTREXCIsXG4gIFwiT21lZ2FcIjpcIlxcdTAzQTlcIixcbiAgXCJvbWVnYVwiOlwiXFx1MDNDOVwiLFxuICBcIk9taWNyb25cIjpcIlxcdTAzOUZcIixcbiAgXCJvbWljcm9uXCI6XCJcXHUwM0JGXCIsXG4gIFwib21pZFwiOlwiXFx1MjlCNlwiLFxuICBcIm9taW51c1wiOlwiXFx1MjI5NlwiLFxuICBcIk9vcGZcIjpcIlxcdUQ4MzVcXHVERDQ2XCIsXG4gIFwib29wZlwiOlwiXFx1RDgzNVxcdURENjBcIixcbiAgXCJvcGFyXCI6XCJcXHUyOUI3XCIsXG4gIFwiT3BlbkN1cmx5RG91YmxlUXVvdGVcIjpcIlxcdTIwMUNcIixcbiAgXCJPcGVuQ3VybHlRdW90ZVwiOlwiXFx1MjAxOFwiLFxuICBcIm9wZXJwXCI6XCJcXHUyOUI5XCIsXG4gIFwib3BsdXNcIjpcIlxcdTIyOTVcIixcbiAgXCJPclwiOlwiXFx1MkE1NFwiLFxuICBcIm9yXCI6XCJcXHUyMjI4XCIsXG4gIFwib3JhcnJcIjpcIlxcdTIxQkJcIixcbiAgXCJvcmRcIjpcIlxcdTJBNURcIixcbiAgXCJvcmRlclwiOlwiXFx1MjEzNFwiLFxuICBcIm9yZGVyb2ZcIjpcIlxcdTIxMzRcIixcbiAgXCJvcmRmXCI6XCJcXHUwMEFBXCIsXG4gIFwib3JkbVwiOlwiXFx1MDBCQVwiLFxuICBcIm9yaWdvZlwiOlwiXFx1MjJCNlwiLFxuICBcIm9yb3JcIjpcIlxcdTJBNTZcIixcbiAgXCJvcnNsb3BlXCI6XCJcXHUyQTU3XCIsXG4gIFwib3J2XCI6XCJcXHUyQTVCXCIsXG4gIFwib1NcIjpcIlxcdTI0QzhcIixcbiAgXCJPc2NyXCI6XCJcXHVEODM1XFx1RENBQVwiLFxuICBcIm9zY3JcIjpcIlxcdTIxMzRcIixcbiAgXCJPc2xhc2hcIjpcIlxcdTAwRDhcIixcbiAgXCJvc2xhc2hcIjpcIlxcdTAwRjhcIixcbiAgXCJvc29sXCI6XCJcXHUyMjk4XCIsXG4gIFwiT3RpbGRlXCI6XCJcXHUwMEQ1XCIsXG4gIFwib3RpbGRlXCI6XCJcXHUwMEY1XCIsXG4gIFwiT3RpbWVzXCI6XCJcXHUyQTM3XCIsXG4gIFwib3RpbWVzXCI6XCJcXHUyMjk3XCIsXG4gIFwib3RpbWVzYXNcIjpcIlxcdTJBMzZcIixcbiAgXCJPdW1sXCI6XCJcXHUwMEQ2XCIsXG4gIFwib3VtbFwiOlwiXFx1MDBGNlwiLFxuICBcIm92YmFyXCI6XCJcXHUyMzNEXCIsXG4gIFwiT3ZlckJhclwiOlwiXFx1MjAzRVwiLFxuICBcIk92ZXJCcmFjZVwiOlwiXFx1MjNERVwiLFxuICBcIk92ZXJCcmFja2V0XCI6XCJcXHUyM0I0XCIsXG4gIFwiT3ZlclBhcmVudGhlc2lzXCI6XCJcXHUyM0RDXCIsXG4gIFwicGFyXCI6XCJcXHUyMjI1XCIsXG4gIFwicGFyYVwiOlwiXFx1MDBCNlwiLFxuICBcInBhcmFsbGVsXCI6XCJcXHUyMjI1XCIsXG4gIFwicGFyc2ltXCI6XCJcXHUyQUYzXCIsXG4gIFwicGFyc2xcIjpcIlxcdTJBRkRcIixcbiAgXCJwYXJ0XCI6XCJcXHUyMjAyXCIsXG4gIFwiUGFydGlhbERcIjpcIlxcdTIyMDJcIixcbiAgXCJQY3lcIjpcIlxcdTA0MUZcIixcbiAgXCJwY3lcIjpcIlxcdTA0M0ZcIixcbiAgXCJwZXJjbnRcIjpcIlxcdTAwMjVcIixcbiAgXCJwZXJpb2RcIjpcIlxcdTAwMkVcIixcbiAgXCJwZXJtaWxcIjpcIlxcdTIwMzBcIixcbiAgXCJwZXJwXCI6XCJcXHUyMkE1XCIsXG4gIFwicGVydGVua1wiOlwiXFx1MjAzMVwiLFxuICBcIlBmclwiOlwiXFx1RDgzNVxcdUREMTNcIixcbiAgXCJwZnJcIjpcIlxcdUQ4MzVcXHVERDJEXCIsXG4gIFwiUGhpXCI6XCJcXHUwM0E2XCIsXG4gIFwicGhpXCI6XCJcXHUwM0M2XCIsXG4gIFwicGhpdlwiOlwiXFx1MDNENVwiLFxuICBcInBobW1hdFwiOlwiXFx1MjEzM1wiLFxuICBcInBob25lXCI6XCJcXHUyNjBFXCIsXG4gIFwiUGlcIjpcIlxcdTAzQTBcIixcbiAgXCJwaVwiOlwiXFx1MDNDMFwiLFxuICBcInBpdGNoZm9ya1wiOlwiXFx1MjJENFwiLFxuICBcInBpdlwiOlwiXFx1MDNENlwiLFxuICBcInBsYW5ja1wiOlwiXFx1MjEwRlwiLFxuICBcInBsYW5ja2hcIjpcIlxcdTIxMEVcIixcbiAgXCJwbGFua3ZcIjpcIlxcdTIxMEZcIixcbiAgXCJwbHVzXCI6XCJcXHUwMDJCXCIsXG4gIFwicGx1c2FjaXJcIjpcIlxcdTJBMjNcIixcbiAgXCJwbHVzYlwiOlwiXFx1MjI5RVwiLFxuICBcInBsdXNjaXJcIjpcIlxcdTJBMjJcIixcbiAgXCJwbHVzZG9cIjpcIlxcdTIyMTRcIixcbiAgXCJwbHVzZHVcIjpcIlxcdTJBMjVcIixcbiAgXCJwbHVzZVwiOlwiXFx1MkE3MlwiLFxuICBcIlBsdXNNaW51c1wiOlwiXFx1MDBCMVwiLFxuICBcInBsdXNtblwiOlwiXFx1MDBCMVwiLFxuICBcInBsdXNzaW1cIjpcIlxcdTJBMjZcIixcbiAgXCJwbHVzdHdvXCI6XCJcXHUyQTI3XCIsXG4gIFwicG1cIjpcIlxcdTAwQjFcIixcbiAgXCJQb2luY2FyZXBsYW5lXCI6XCJcXHUyMTBDXCIsXG4gIFwicG9pbnRpbnRcIjpcIlxcdTJBMTVcIixcbiAgXCJQb3BmXCI6XCJcXHUyMTE5XCIsXG4gIFwicG9wZlwiOlwiXFx1RDgzNVxcdURENjFcIixcbiAgXCJwb3VuZFwiOlwiXFx1MDBBM1wiLFxuICBcIlByXCI6XCJcXHUyQUJCXCIsXG4gIFwicHJcIjpcIlxcdTIyN0FcIixcbiAgXCJwcmFwXCI6XCJcXHUyQUI3XCIsXG4gIFwicHJjdWVcIjpcIlxcdTIyN0NcIixcbiAgXCJwckVcIjpcIlxcdTJBQjNcIixcbiAgXCJwcmVcIjpcIlxcdTJBQUZcIixcbiAgXCJwcmVjXCI6XCJcXHUyMjdBXCIsXG4gIFwicHJlY2FwcHJveFwiOlwiXFx1MkFCN1wiLFxuICBcInByZWNjdXJseWVxXCI6XCJcXHUyMjdDXCIsXG4gIFwiUHJlY2VkZXNcIjpcIlxcdTIyN0FcIixcbiAgXCJQcmVjZWRlc0VxdWFsXCI6XCJcXHUyQUFGXCIsXG4gIFwiUHJlY2VkZXNTbGFudEVxdWFsXCI6XCJcXHUyMjdDXCIsXG4gIFwiUHJlY2VkZXNUaWxkZVwiOlwiXFx1MjI3RVwiLFxuICBcInByZWNlcVwiOlwiXFx1MkFBRlwiLFxuICBcInByZWNuYXBwcm94XCI6XCJcXHUyQUI5XCIsXG4gIFwicHJlY25lcXFcIjpcIlxcdTJBQjVcIixcbiAgXCJwcmVjbnNpbVwiOlwiXFx1MjJFOFwiLFxuICBcInByZWNzaW1cIjpcIlxcdTIyN0VcIixcbiAgXCJQcmltZVwiOlwiXFx1MjAzM1wiLFxuICBcInByaW1lXCI6XCJcXHUyMDMyXCIsXG4gIFwicHJpbWVzXCI6XCJcXHUyMTE5XCIsXG4gIFwicHJuYXBcIjpcIlxcdTJBQjlcIixcbiAgXCJwcm5FXCI6XCJcXHUyQUI1XCIsXG4gIFwicHJuc2ltXCI6XCJcXHUyMkU4XCIsXG4gIFwicHJvZFwiOlwiXFx1MjIwRlwiLFxuICBcIlByb2R1Y3RcIjpcIlxcdTIyMEZcIixcbiAgXCJwcm9mYWxhclwiOlwiXFx1MjMyRVwiLFxuICBcInByb2ZsaW5lXCI6XCJcXHUyMzEyXCIsXG4gIFwicHJvZnN1cmZcIjpcIlxcdTIzMTNcIixcbiAgXCJwcm9wXCI6XCJcXHUyMjFEXCIsXG4gIFwiUHJvcG9ydGlvblwiOlwiXFx1MjIzN1wiLFxuICBcIlByb3BvcnRpb25hbFwiOlwiXFx1MjIxRFwiLFxuICBcInByb3B0b1wiOlwiXFx1MjIxRFwiLFxuICBcInByc2ltXCI6XCJcXHUyMjdFXCIsXG4gIFwicHJ1cmVsXCI6XCJcXHUyMkIwXCIsXG4gIFwiUHNjclwiOlwiXFx1RDgzNVxcdURDQUJcIixcbiAgXCJwc2NyXCI6XCJcXHVEODM1XFx1RENDNVwiLFxuICBcIlBzaVwiOlwiXFx1MDNBOFwiLFxuICBcInBzaVwiOlwiXFx1MDNDOFwiLFxuICBcInB1bmNzcFwiOlwiXFx1MjAwOFwiLFxuICBcIlFmclwiOlwiXFx1RDgzNVxcdUREMTRcIixcbiAgXCJxZnJcIjpcIlxcdUQ4MzVcXHVERDJFXCIsXG4gIFwicWludFwiOlwiXFx1MkEwQ1wiLFxuICBcIlFvcGZcIjpcIlxcdTIxMUFcIixcbiAgXCJxb3BmXCI6XCJcXHVEODM1XFx1REQ2MlwiLFxuICBcInFwcmltZVwiOlwiXFx1MjA1N1wiLFxuICBcIlFzY3JcIjpcIlxcdUQ4MzVcXHVEQ0FDXCIsXG4gIFwicXNjclwiOlwiXFx1RDgzNVxcdURDQzZcIixcbiAgXCJxdWF0ZXJuaW9uc1wiOlwiXFx1MjEwRFwiLFxuICBcInF1YXRpbnRcIjpcIlxcdTJBMTZcIixcbiAgXCJxdWVzdFwiOlwiXFx1MDAzRlwiLFxuICBcInF1ZXN0ZXFcIjpcIlxcdTIyNUZcIixcbiAgXCJRVU9UXCI6XCJcXHUwMDIyXCIsXG4gIFwicXVvdFwiOlwiXFx1MDAyMlwiLFxuICBcInJBYXJyXCI6XCJcXHUyMURCXCIsXG4gIFwicmFjZVwiOlwiXFx1MjIzRFxcdTAzMzFcIixcbiAgXCJSYWN1dGVcIjpcIlxcdTAxNTRcIixcbiAgXCJyYWN1dGVcIjpcIlxcdTAxNTVcIixcbiAgXCJyYWRpY1wiOlwiXFx1MjIxQVwiLFxuICBcInJhZW1wdHl2XCI6XCJcXHUyOUIzXCIsXG4gIFwiUmFuZ1wiOlwiXFx1MjdFQlwiLFxuICBcInJhbmdcIjpcIlxcdTI3RTlcIixcbiAgXCJyYW5nZFwiOlwiXFx1Mjk5MlwiLFxuICBcInJhbmdlXCI6XCJcXHUyOUE1XCIsXG4gIFwicmFuZ2xlXCI6XCJcXHUyN0U5XCIsXG4gIFwicmFxdW9cIjpcIlxcdTAwQkJcIixcbiAgXCJSYXJyXCI6XCJcXHUyMUEwXCIsXG4gIFwickFyclwiOlwiXFx1MjFEMlwiLFxuICBcInJhcnJcIjpcIlxcdTIxOTJcIixcbiAgXCJyYXJyYXBcIjpcIlxcdTI5NzVcIixcbiAgXCJyYXJyYlwiOlwiXFx1MjFFNVwiLFxuICBcInJhcnJiZnNcIjpcIlxcdTI5MjBcIixcbiAgXCJyYXJyY1wiOlwiXFx1MjkzM1wiLFxuICBcInJhcnJmc1wiOlwiXFx1MjkxRVwiLFxuICBcInJhcnJoa1wiOlwiXFx1MjFBQVwiLFxuICBcInJhcnJscFwiOlwiXFx1MjFBQ1wiLFxuICBcInJhcnJwbFwiOlwiXFx1Mjk0NVwiLFxuICBcInJhcnJzaW1cIjpcIlxcdTI5NzRcIixcbiAgXCJSYXJydGxcIjpcIlxcdTI5MTZcIixcbiAgXCJyYXJydGxcIjpcIlxcdTIxQTNcIixcbiAgXCJyYXJyd1wiOlwiXFx1MjE5RFwiLFxuICBcInJBdGFpbFwiOlwiXFx1MjkxQ1wiLFxuICBcInJhdGFpbFwiOlwiXFx1MjkxQVwiLFxuICBcInJhdGlvXCI6XCJcXHUyMjM2XCIsXG4gIFwicmF0aW9uYWxzXCI6XCJcXHUyMTFBXCIsXG4gIFwiUkJhcnJcIjpcIlxcdTI5MTBcIixcbiAgXCJyQmFyclwiOlwiXFx1MjkwRlwiLFxuICBcInJiYXJyXCI6XCJcXHUyOTBEXCIsXG4gIFwicmJicmtcIjpcIlxcdTI3NzNcIixcbiAgXCJyYnJhY2VcIjpcIlxcdTAwN0RcIixcbiAgXCJyYnJhY2tcIjpcIlxcdTAwNURcIixcbiAgXCJyYnJrZVwiOlwiXFx1Mjk4Q1wiLFxuICBcInJicmtzbGRcIjpcIlxcdTI5OEVcIixcbiAgXCJyYnJrc2x1XCI6XCJcXHUyOTkwXCIsXG4gIFwiUmNhcm9uXCI6XCJcXHUwMTU4XCIsXG4gIFwicmNhcm9uXCI6XCJcXHUwMTU5XCIsXG4gIFwiUmNlZGlsXCI6XCJcXHUwMTU2XCIsXG4gIFwicmNlZGlsXCI6XCJcXHUwMTU3XCIsXG4gIFwicmNlaWxcIjpcIlxcdTIzMDlcIixcbiAgXCJyY3ViXCI6XCJcXHUwMDdEXCIsXG4gIFwiUmN5XCI6XCJcXHUwNDIwXCIsXG4gIFwicmN5XCI6XCJcXHUwNDQwXCIsXG4gIFwicmRjYVwiOlwiXFx1MjkzN1wiLFxuICBcInJkbGRoYXJcIjpcIlxcdTI5NjlcIixcbiAgXCJyZHF1b1wiOlwiXFx1MjAxRFwiLFxuICBcInJkcXVvclwiOlwiXFx1MjAxRFwiLFxuICBcInJkc2hcIjpcIlxcdTIxQjNcIixcbiAgXCJSZVwiOlwiXFx1MjExQ1wiLFxuICBcInJlYWxcIjpcIlxcdTIxMUNcIixcbiAgXCJyZWFsaW5lXCI6XCJcXHUyMTFCXCIsXG4gIFwicmVhbHBhcnRcIjpcIlxcdTIxMUNcIixcbiAgXCJyZWFsc1wiOlwiXFx1MjExRFwiLFxuICBcInJlY3RcIjpcIlxcdTI1QURcIixcbiAgXCJSRUdcIjpcIlxcdTAwQUVcIixcbiAgXCJyZWdcIjpcIlxcdTAwQUVcIixcbiAgXCJSZXZlcnNlRWxlbWVudFwiOlwiXFx1MjIwQlwiLFxuICBcIlJldmVyc2VFcXVpbGlicml1bVwiOlwiXFx1MjFDQlwiLFxuICBcIlJldmVyc2VVcEVxdWlsaWJyaXVtXCI6XCJcXHUyOTZGXCIsXG4gIFwicmZpc2h0XCI6XCJcXHUyOTdEXCIsXG4gIFwicmZsb29yXCI6XCJcXHUyMzBCXCIsXG4gIFwiUmZyXCI6XCJcXHUyMTFDXCIsXG4gIFwicmZyXCI6XCJcXHVEODM1XFx1REQyRlwiLFxuICBcInJIYXJcIjpcIlxcdTI5NjRcIixcbiAgXCJyaGFyZFwiOlwiXFx1MjFDMVwiLFxuICBcInJoYXJ1XCI6XCJcXHUyMUMwXCIsXG4gIFwicmhhcnVsXCI6XCJcXHUyOTZDXCIsXG4gIFwiUmhvXCI6XCJcXHUwM0ExXCIsXG4gIFwicmhvXCI6XCJcXHUwM0MxXCIsXG4gIFwicmhvdlwiOlwiXFx1MDNGMVwiLFxuICBcIlJpZ2h0QW5nbGVCcmFja2V0XCI6XCJcXHUyN0U5XCIsXG4gIFwiUmlnaHRBcnJvd1wiOlwiXFx1MjE5MlwiLFxuICBcIlJpZ2h0YXJyb3dcIjpcIlxcdTIxRDJcIixcbiAgXCJyaWdodGFycm93XCI6XCJcXHUyMTkyXCIsXG4gIFwiUmlnaHRBcnJvd0JhclwiOlwiXFx1MjFFNVwiLFxuICBcIlJpZ2h0QXJyb3dMZWZ0QXJyb3dcIjpcIlxcdTIxQzRcIixcbiAgXCJyaWdodGFycm93dGFpbFwiOlwiXFx1MjFBM1wiLFxuICBcIlJpZ2h0Q2VpbGluZ1wiOlwiXFx1MjMwOVwiLFxuICBcIlJpZ2h0RG91YmxlQnJhY2tldFwiOlwiXFx1MjdFN1wiLFxuICBcIlJpZ2h0RG93blRlZVZlY3RvclwiOlwiXFx1Mjk1RFwiLFxuICBcIlJpZ2h0RG93blZlY3RvclwiOlwiXFx1MjFDMlwiLFxuICBcIlJpZ2h0RG93blZlY3RvckJhclwiOlwiXFx1Mjk1NVwiLFxuICBcIlJpZ2h0Rmxvb3JcIjpcIlxcdTIzMEJcIixcbiAgXCJyaWdodGhhcnBvb25kb3duXCI6XCJcXHUyMUMxXCIsXG4gIFwicmlnaHRoYXJwb29udXBcIjpcIlxcdTIxQzBcIixcbiAgXCJyaWdodGxlZnRhcnJvd3NcIjpcIlxcdTIxQzRcIixcbiAgXCJyaWdodGxlZnRoYXJwb29uc1wiOlwiXFx1MjFDQ1wiLFxuICBcInJpZ2h0cmlnaHRhcnJvd3NcIjpcIlxcdTIxQzlcIixcbiAgXCJyaWdodHNxdWlnYXJyb3dcIjpcIlxcdTIxOURcIixcbiAgXCJSaWdodFRlZVwiOlwiXFx1MjJBMlwiLFxuICBcIlJpZ2h0VGVlQXJyb3dcIjpcIlxcdTIxQTZcIixcbiAgXCJSaWdodFRlZVZlY3RvclwiOlwiXFx1Mjk1QlwiLFxuICBcInJpZ2h0dGhyZWV0aW1lc1wiOlwiXFx1MjJDQ1wiLFxuICBcIlJpZ2h0VHJpYW5nbGVcIjpcIlxcdTIyQjNcIixcbiAgXCJSaWdodFRyaWFuZ2xlQmFyXCI6XCJcXHUyOUQwXCIsXG4gIFwiUmlnaHRUcmlhbmdsZUVxdWFsXCI6XCJcXHUyMkI1XCIsXG4gIFwiUmlnaHRVcERvd25WZWN0b3JcIjpcIlxcdTI5NEZcIixcbiAgXCJSaWdodFVwVGVlVmVjdG9yXCI6XCJcXHUyOTVDXCIsXG4gIFwiUmlnaHRVcFZlY3RvclwiOlwiXFx1MjFCRVwiLFxuICBcIlJpZ2h0VXBWZWN0b3JCYXJcIjpcIlxcdTI5NTRcIixcbiAgXCJSaWdodFZlY3RvclwiOlwiXFx1MjFDMFwiLFxuICBcIlJpZ2h0VmVjdG9yQmFyXCI6XCJcXHUyOTUzXCIsXG4gIFwicmluZ1wiOlwiXFx1MDJEQVwiLFxuICBcInJpc2luZ2RvdHNlcVwiOlwiXFx1MjI1M1wiLFxuICBcInJsYXJyXCI6XCJcXHUyMUM0XCIsXG4gIFwicmxoYXJcIjpcIlxcdTIxQ0NcIixcbiAgXCJybG1cIjpcIlxcdTIwMEZcIixcbiAgXCJybW91c3RcIjpcIlxcdTIzQjFcIixcbiAgXCJybW91c3RhY2hlXCI6XCJcXHUyM0IxXCIsXG4gIFwicm5taWRcIjpcIlxcdTJBRUVcIixcbiAgXCJyb2FuZ1wiOlwiXFx1MjdFRFwiLFxuICBcInJvYXJyXCI6XCJcXHUyMUZFXCIsXG4gIFwicm9icmtcIjpcIlxcdTI3RTdcIixcbiAgXCJyb3BhclwiOlwiXFx1Mjk4NlwiLFxuICBcIlJvcGZcIjpcIlxcdTIxMURcIixcbiAgXCJyb3BmXCI6XCJcXHVEODM1XFx1REQ2M1wiLFxuICBcInJvcGx1c1wiOlwiXFx1MkEyRVwiLFxuICBcInJvdGltZXNcIjpcIlxcdTJBMzVcIixcbiAgXCJSb3VuZEltcGxpZXNcIjpcIlxcdTI5NzBcIixcbiAgXCJycGFyXCI6XCJcXHUwMDI5XCIsXG4gIFwicnBhcmd0XCI6XCJcXHUyOTk0XCIsXG4gIFwicnBwb2xpbnRcIjpcIlxcdTJBMTJcIixcbiAgXCJycmFyclwiOlwiXFx1MjFDOVwiLFxuICBcIlJyaWdodGFycm93XCI6XCJcXHUyMURCXCIsXG4gIFwicnNhcXVvXCI6XCJcXHUyMDNBXCIsXG4gIFwiUnNjclwiOlwiXFx1MjExQlwiLFxuICBcInJzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M3XCIsXG4gIFwiUnNoXCI6XCJcXHUyMUIxXCIsXG4gIFwicnNoXCI6XCJcXHUyMUIxXCIsXG4gIFwicnNxYlwiOlwiXFx1MDA1RFwiLFxuICBcInJzcXVvXCI6XCJcXHUyMDE5XCIsXG4gIFwicnNxdW9yXCI6XCJcXHUyMDE5XCIsXG4gIFwicnRocmVlXCI6XCJcXHUyMkNDXCIsXG4gIFwicnRpbWVzXCI6XCJcXHUyMkNBXCIsXG4gIFwicnRyaVwiOlwiXFx1MjVCOVwiLFxuICBcInJ0cmllXCI6XCJcXHUyMkI1XCIsXG4gIFwicnRyaWZcIjpcIlxcdTI1QjhcIixcbiAgXCJydHJpbHRyaVwiOlwiXFx1MjlDRVwiLFxuICBcIlJ1bGVEZWxheWVkXCI6XCJcXHUyOUY0XCIsXG4gIFwicnVsdWhhclwiOlwiXFx1Mjk2OFwiLFxuICBcInJ4XCI6XCJcXHUyMTFFXCIsXG4gIFwiU2FjdXRlXCI6XCJcXHUwMTVBXCIsXG4gIFwic2FjdXRlXCI6XCJcXHUwMTVCXCIsXG4gIFwic2JxdW9cIjpcIlxcdTIwMUFcIixcbiAgXCJTY1wiOlwiXFx1MkFCQ1wiLFxuICBcInNjXCI6XCJcXHUyMjdCXCIsXG4gIFwic2NhcFwiOlwiXFx1MkFCOFwiLFxuICBcIlNjYXJvblwiOlwiXFx1MDE2MFwiLFxuICBcInNjYXJvblwiOlwiXFx1MDE2MVwiLFxuICBcInNjY3VlXCI6XCJcXHUyMjdEXCIsXG4gIFwic2NFXCI6XCJcXHUyQUI0XCIsXG4gIFwic2NlXCI6XCJcXHUyQUIwXCIsXG4gIFwiU2NlZGlsXCI6XCJcXHUwMTVFXCIsXG4gIFwic2NlZGlsXCI6XCJcXHUwMTVGXCIsXG4gIFwiU2NpcmNcIjpcIlxcdTAxNUNcIixcbiAgXCJzY2lyY1wiOlwiXFx1MDE1RFwiLFxuICBcInNjbmFwXCI6XCJcXHUyQUJBXCIsXG4gIFwic2NuRVwiOlwiXFx1MkFCNlwiLFxuICBcInNjbnNpbVwiOlwiXFx1MjJFOVwiLFxuICBcInNjcG9saW50XCI6XCJcXHUyQTEzXCIsXG4gIFwic2NzaW1cIjpcIlxcdTIyN0ZcIixcbiAgXCJTY3lcIjpcIlxcdTA0MjFcIixcbiAgXCJzY3lcIjpcIlxcdTA0NDFcIixcbiAgXCJzZG90XCI6XCJcXHUyMkM1XCIsXG4gIFwic2RvdGJcIjpcIlxcdTIyQTFcIixcbiAgXCJzZG90ZVwiOlwiXFx1MkE2NlwiLFxuICBcInNlYXJoa1wiOlwiXFx1MjkyNVwiLFxuICBcInNlQXJyXCI6XCJcXHUyMUQ4XCIsXG4gIFwic2VhcnJcIjpcIlxcdTIxOThcIixcbiAgXCJzZWFycm93XCI6XCJcXHUyMTk4XCIsXG4gIFwic2VjdFwiOlwiXFx1MDBBN1wiLFxuICBcInNlbWlcIjpcIlxcdTAwM0JcIixcbiAgXCJzZXN3YXJcIjpcIlxcdTI5MjlcIixcbiAgXCJzZXRtaW51c1wiOlwiXFx1MjIxNlwiLFxuICBcInNldG1uXCI6XCJcXHUyMjE2XCIsXG4gIFwic2V4dFwiOlwiXFx1MjczNlwiLFxuICBcIlNmclwiOlwiXFx1RDgzNVxcdUREMTZcIixcbiAgXCJzZnJcIjpcIlxcdUQ4MzVcXHVERDMwXCIsXG4gIFwic2Zyb3duXCI6XCJcXHUyMzIyXCIsXG4gIFwic2hhcnBcIjpcIlxcdTI2NkZcIixcbiAgXCJTSENIY3lcIjpcIlxcdTA0MjlcIixcbiAgXCJzaGNoY3lcIjpcIlxcdTA0NDlcIixcbiAgXCJTSGN5XCI6XCJcXHUwNDI4XCIsXG4gIFwic2hjeVwiOlwiXFx1MDQ0OFwiLFxuICBcIlNob3J0RG93bkFycm93XCI6XCJcXHUyMTkzXCIsXG4gIFwiU2hvcnRMZWZ0QXJyb3dcIjpcIlxcdTIxOTBcIixcbiAgXCJzaG9ydG1pZFwiOlwiXFx1MjIyM1wiLFxuICBcInNob3J0cGFyYWxsZWxcIjpcIlxcdTIyMjVcIixcbiAgXCJTaG9ydFJpZ2h0QXJyb3dcIjpcIlxcdTIxOTJcIixcbiAgXCJTaG9ydFVwQXJyb3dcIjpcIlxcdTIxOTFcIixcbiAgXCJzaHlcIjpcIlxcdTAwQURcIixcbiAgXCJTaWdtYVwiOlwiXFx1MDNBM1wiLFxuICBcInNpZ21hXCI6XCJcXHUwM0MzXCIsXG4gIFwic2lnbWFmXCI6XCJcXHUwM0MyXCIsXG4gIFwic2lnbWF2XCI6XCJcXHUwM0MyXCIsXG4gIFwic2ltXCI6XCJcXHUyMjNDXCIsXG4gIFwic2ltZG90XCI6XCJcXHUyQTZBXCIsXG4gIFwic2ltZVwiOlwiXFx1MjI0M1wiLFxuICBcInNpbWVxXCI6XCJcXHUyMjQzXCIsXG4gIFwic2ltZ1wiOlwiXFx1MkE5RVwiLFxuICBcInNpbWdFXCI6XCJcXHUyQUEwXCIsXG4gIFwic2ltbFwiOlwiXFx1MkE5RFwiLFxuICBcInNpbWxFXCI6XCJcXHUyQTlGXCIsXG4gIFwic2ltbmVcIjpcIlxcdTIyNDZcIixcbiAgXCJzaW1wbHVzXCI6XCJcXHUyQTI0XCIsXG4gIFwic2ltcmFyclwiOlwiXFx1Mjk3MlwiLFxuICBcInNsYXJyXCI6XCJcXHUyMTkwXCIsXG4gIFwiU21hbGxDaXJjbGVcIjpcIlxcdTIyMThcIixcbiAgXCJzbWFsbHNldG1pbnVzXCI6XCJcXHUyMjE2XCIsXG4gIFwic21hc2hwXCI6XCJcXHUyQTMzXCIsXG4gIFwic21lcGFyc2xcIjpcIlxcdTI5RTRcIixcbiAgXCJzbWlkXCI6XCJcXHUyMjIzXCIsXG4gIFwic21pbGVcIjpcIlxcdTIzMjNcIixcbiAgXCJzbXRcIjpcIlxcdTJBQUFcIixcbiAgXCJzbXRlXCI6XCJcXHUyQUFDXCIsXG4gIFwic210ZXNcIjpcIlxcdTJBQUNcXHVGRTAwXCIsXG4gIFwiU09GVGN5XCI6XCJcXHUwNDJDXCIsXG4gIFwic29mdGN5XCI6XCJcXHUwNDRDXCIsXG4gIFwic29sXCI6XCJcXHUwMDJGXCIsXG4gIFwic29sYlwiOlwiXFx1MjlDNFwiLFxuICBcInNvbGJhclwiOlwiXFx1MjMzRlwiLFxuICBcIlNvcGZcIjpcIlxcdUQ4MzVcXHVERDRBXCIsXG4gIFwic29wZlwiOlwiXFx1RDgzNVxcdURENjRcIixcbiAgXCJzcGFkZXNcIjpcIlxcdTI2NjBcIixcbiAgXCJzcGFkZXN1aXRcIjpcIlxcdTI2NjBcIixcbiAgXCJzcGFyXCI6XCJcXHUyMjI1XCIsXG4gIFwic3FjYXBcIjpcIlxcdTIyOTNcIixcbiAgXCJzcWNhcHNcIjpcIlxcdTIyOTNcXHVGRTAwXCIsXG4gIFwic3FjdXBcIjpcIlxcdTIyOTRcIixcbiAgXCJzcWN1cHNcIjpcIlxcdTIyOTRcXHVGRTAwXCIsXG4gIFwiU3FydFwiOlwiXFx1MjIxQVwiLFxuICBcInNxc3ViXCI6XCJcXHUyMjhGXCIsXG4gIFwic3FzdWJlXCI6XCJcXHUyMjkxXCIsXG4gIFwic3FzdWJzZXRcIjpcIlxcdTIyOEZcIixcbiAgXCJzcXN1YnNldGVxXCI6XCJcXHUyMjkxXCIsXG4gIFwic3FzdXBcIjpcIlxcdTIyOTBcIixcbiAgXCJzcXN1cGVcIjpcIlxcdTIyOTJcIixcbiAgXCJzcXN1cHNldFwiOlwiXFx1MjI5MFwiLFxuICBcInNxc3Vwc2V0ZXFcIjpcIlxcdTIyOTJcIixcbiAgXCJzcXVcIjpcIlxcdTI1QTFcIixcbiAgXCJTcXVhcmVcIjpcIlxcdTI1QTFcIixcbiAgXCJzcXVhcmVcIjpcIlxcdTI1QTFcIixcbiAgXCJTcXVhcmVJbnRlcnNlY3Rpb25cIjpcIlxcdTIyOTNcIixcbiAgXCJTcXVhcmVTdWJzZXRcIjpcIlxcdTIyOEZcIixcbiAgXCJTcXVhcmVTdWJzZXRFcXVhbFwiOlwiXFx1MjI5MVwiLFxuICBcIlNxdWFyZVN1cGVyc2V0XCI6XCJcXHUyMjkwXCIsXG4gIFwiU3F1YXJlU3VwZXJzZXRFcXVhbFwiOlwiXFx1MjI5MlwiLFxuICBcIlNxdWFyZVVuaW9uXCI6XCJcXHUyMjk0XCIsXG4gIFwic3F1YXJmXCI6XCJcXHUyNUFBXCIsXG4gIFwic3F1ZlwiOlwiXFx1MjVBQVwiLFxuICBcInNyYXJyXCI6XCJcXHUyMTkyXCIsXG4gIFwiU3NjclwiOlwiXFx1RDgzNVxcdURDQUVcIixcbiAgXCJzc2NyXCI6XCJcXHVEODM1XFx1RENDOFwiLFxuICBcInNzZXRtblwiOlwiXFx1MjIxNlwiLFxuICBcInNzbWlsZVwiOlwiXFx1MjMyM1wiLFxuICBcInNzdGFyZlwiOlwiXFx1MjJDNlwiLFxuICBcIlN0YXJcIjpcIlxcdTIyQzZcIixcbiAgXCJzdGFyXCI6XCJcXHUyNjA2XCIsXG4gIFwic3RhcmZcIjpcIlxcdTI2MDVcIixcbiAgXCJzdHJhaWdodGVwc2lsb25cIjpcIlxcdTAzRjVcIixcbiAgXCJzdHJhaWdodHBoaVwiOlwiXFx1MDNENVwiLFxuICBcInN0cm5zXCI6XCJcXHUwMEFGXCIsXG4gIFwiU3ViXCI6XCJcXHUyMkQwXCIsXG4gIFwic3ViXCI6XCJcXHUyMjgyXCIsXG4gIFwic3ViZG90XCI6XCJcXHUyQUJEXCIsXG4gIFwic3ViRVwiOlwiXFx1MkFDNVwiLFxuICBcInN1YmVcIjpcIlxcdTIyODZcIixcbiAgXCJzdWJlZG90XCI6XCJcXHUyQUMzXCIsXG4gIFwic3VibXVsdFwiOlwiXFx1MkFDMVwiLFxuICBcInN1Ym5FXCI6XCJcXHUyQUNCXCIsXG4gIFwic3VibmVcIjpcIlxcdTIyOEFcIixcbiAgXCJzdWJwbHVzXCI6XCJcXHUyQUJGXCIsXG4gIFwic3VicmFyclwiOlwiXFx1Mjk3OVwiLFxuICBcIlN1YnNldFwiOlwiXFx1MjJEMFwiLFxuICBcInN1YnNldFwiOlwiXFx1MjI4MlwiLFxuICBcInN1YnNldGVxXCI6XCJcXHUyMjg2XCIsXG4gIFwic3Vic2V0ZXFxXCI6XCJcXHUyQUM1XCIsXG4gIFwiU3Vic2V0RXF1YWxcIjpcIlxcdTIyODZcIixcbiAgXCJzdWJzZXRuZXFcIjpcIlxcdTIyOEFcIixcbiAgXCJzdWJzZXRuZXFxXCI6XCJcXHUyQUNCXCIsXG4gIFwic3Vic2ltXCI6XCJcXHUyQUM3XCIsXG4gIFwic3Vic3ViXCI6XCJcXHUyQUQ1XCIsXG4gIFwic3Vic3VwXCI6XCJcXHUyQUQzXCIsXG4gIFwic3VjY1wiOlwiXFx1MjI3QlwiLFxuICBcInN1Y2NhcHByb3hcIjpcIlxcdTJBQjhcIixcbiAgXCJzdWNjY3VybHllcVwiOlwiXFx1MjI3RFwiLFxuICBcIlN1Y2NlZWRzXCI6XCJcXHUyMjdCXCIsXG4gIFwiU3VjY2VlZHNFcXVhbFwiOlwiXFx1MkFCMFwiLFxuICBcIlN1Y2NlZWRzU2xhbnRFcXVhbFwiOlwiXFx1MjI3RFwiLFxuICBcIlN1Y2NlZWRzVGlsZGVcIjpcIlxcdTIyN0ZcIixcbiAgXCJzdWNjZXFcIjpcIlxcdTJBQjBcIixcbiAgXCJzdWNjbmFwcHJveFwiOlwiXFx1MkFCQVwiLFxuICBcInN1Y2NuZXFxXCI6XCJcXHUyQUI2XCIsXG4gIFwic3VjY25zaW1cIjpcIlxcdTIyRTlcIixcbiAgXCJzdWNjc2ltXCI6XCJcXHUyMjdGXCIsXG4gIFwiU3VjaFRoYXRcIjpcIlxcdTIyMEJcIixcbiAgXCJTdW1cIjpcIlxcdTIyMTFcIixcbiAgXCJzdW1cIjpcIlxcdTIyMTFcIixcbiAgXCJzdW5nXCI6XCJcXHUyNjZBXCIsXG4gIFwiU3VwXCI6XCJcXHUyMkQxXCIsXG4gIFwic3VwXCI6XCJcXHUyMjgzXCIsXG4gIFwic3VwMVwiOlwiXFx1MDBCOVwiLFxuICBcInN1cDJcIjpcIlxcdTAwQjJcIixcbiAgXCJzdXAzXCI6XCJcXHUwMEIzXCIsXG4gIFwic3VwZG90XCI6XCJcXHUyQUJFXCIsXG4gIFwic3VwZHN1YlwiOlwiXFx1MkFEOFwiLFxuICBcInN1cEVcIjpcIlxcdTJBQzZcIixcbiAgXCJzdXBlXCI6XCJcXHUyMjg3XCIsXG4gIFwic3VwZWRvdFwiOlwiXFx1MkFDNFwiLFxuICBcIlN1cGVyc2V0XCI6XCJcXHUyMjgzXCIsXG4gIFwiU3VwZXJzZXRFcXVhbFwiOlwiXFx1MjI4N1wiLFxuICBcInN1cGhzb2xcIjpcIlxcdTI3QzlcIixcbiAgXCJzdXBoc3ViXCI6XCJcXHUyQUQ3XCIsXG4gIFwic3VwbGFyclwiOlwiXFx1Mjk3QlwiLFxuICBcInN1cG11bHRcIjpcIlxcdTJBQzJcIixcbiAgXCJzdXBuRVwiOlwiXFx1MkFDQ1wiLFxuICBcInN1cG5lXCI6XCJcXHUyMjhCXCIsXG4gIFwic3VwcGx1c1wiOlwiXFx1MkFDMFwiLFxuICBcIlN1cHNldFwiOlwiXFx1MjJEMVwiLFxuICBcInN1cHNldFwiOlwiXFx1MjI4M1wiLFxuICBcInN1cHNldGVxXCI6XCJcXHUyMjg3XCIsXG4gIFwic3Vwc2V0ZXFxXCI6XCJcXHUyQUM2XCIsXG4gIFwic3Vwc2V0bmVxXCI6XCJcXHUyMjhCXCIsXG4gIFwic3Vwc2V0bmVxcVwiOlwiXFx1MkFDQ1wiLFxuICBcInN1cHNpbVwiOlwiXFx1MkFDOFwiLFxuICBcInN1cHN1YlwiOlwiXFx1MkFENFwiLFxuICBcInN1cHN1cFwiOlwiXFx1MkFENlwiLFxuICBcInN3YXJoa1wiOlwiXFx1MjkyNlwiLFxuICBcInN3QXJyXCI6XCJcXHUyMUQ5XCIsXG4gIFwic3dhcnJcIjpcIlxcdTIxOTlcIixcbiAgXCJzd2Fycm93XCI6XCJcXHUyMTk5XCIsXG4gIFwic3dud2FyXCI6XCJcXHUyOTJBXCIsXG4gIFwic3psaWdcIjpcIlxcdTAwREZcIixcbiAgXCJUYWJcIjpcIlxcdTAwMDlcIixcbiAgXCJ0YXJnZXRcIjpcIlxcdTIzMTZcIixcbiAgXCJUYXVcIjpcIlxcdTAzQTRcIixcbiAgXCJ0YXVcIjpcIlxcdTAzQzRcIixcbiAgXCJ0YnJrXCI6XCJcXHUyM0I0XCIsXG4gIFwiVGNhcm9uXCI6XCJcXHUwMTY0XCIsXG4gIFwidGNhcm9uXCI6XCJcXHUwMTY1XCIsXG4gIFwiVGNlZGlsXCI6XCJcXHUwMTYyXCIsXG4gIFwidGNlZGlsXCI6XCJcXHUwMTYzXCIsXG4gIFwiVGN5XCI6XCJcXHUwNDIyXCIsXG4gIFwidGN5XCI6XCJcXHUwNDQyXCIsXG4gIFwidGRvdFwiOlwiXFx1MjBEQlwiLFxuICBcInRlbHJlY1wiOlwiXFx1MjMxNVwiLFxuICBcIlRmclwiOlwiXFx1RDgzNVxcdUREMTdcIixcbiAgXCJ0ZnJcIjpcIlxcdUQ4MzVcXHVERDMxXCIsXG4gIFwidGhlcmU0XCI6XCJcXHUyMjM0XCIsXG4gIFwiVGhlcmVmb3JlXCI6XCJcXHUyMjM0XCIsXG4gIFwidGhlcmVmb3JlXCI6XCJcXHUyMjM0XCIsXG4gIFwiVGhldGFcIjpcIlxcdTAzOThcIixcbiAgXCJ0aGV0YVwiOlwiXFx1MDNCOFwiLFxuICBcInRoZXRhc3ltXCI6XCJcXHUwM0QxXCIsXG4gIFwidGhldGF2XCI6XCJcXHUwM0QxXCIsXG4gIFwidGhpY2thcHByb3hcIjpcIlxcdTIyNDhcIixcbiAgXCJ0aGlja3NpbVwiOlwiXFx1MjIzQ1wiLFxuICBcIlRoaWNrU3BhY2VcIjpcIlxcdTIwNUZcXHUyMDBBXCIsXG4gIFwidGhpbnNwXCI6XCJcXHUyMDA5XCIsXG4gIFwiVGhpblNwYWNlXCI6XCJcXHUyMDA5XCIsXG4gIFwidGhrYXBcIjpcIlxcdTIyNDhcIixcbiAgXCJ0aGtzaW1cIjpcIlxcdTIyM0NcIixcbiAgXCJUSE9STlwiOlwiXFx1MDBERVwiLFxuICBcInRob3JuXCI6XCJcXHUwMEZFXCIsXG4gIFwiVGlsZGVcIjpcIlxcdTIyM0NcIixcbiAgXCJ0aWxkZVwiOlwiXFx1MDJEQ1wiLFxuICBcIlRpbGRlRXF1YWxcIjpcIlxcdTIyNDNcIixcbiAgXCJUaWxkZUZ1bGxFcXVhbFwiOlwiXFx1MjI0NVwiLFxuICBcIlRpbGRlVGlsZGVcIjpcIlxcdTIyNDhcIixcbiAgXCJ0aW1lc1wiOlwiXFx1MDBEN1wiLFxuICBcInRpbWVzYlwiOlwiXFx1MjJBMFwiLFxuICBcInRpbWVzYmFyXCI6XCJcXHUyQTMxXCIsXG4gIFwidGltZXNkXCI6XCJcXHUyQTMwXCIsXG4gIFwidGludFwiOlwiXFx1MjIyRFwiLFxuICBcInRvZWFcIjpcIlxcdTI5MjhcIixcbiAgXCJ0b3BcIjpcIlxcdTIyQTRcIixcbiAgXCJ0b3Bib3RcIjpcIlxcdTIzMzZcIixcbiAgXCJ0b3BjaXJcIjpcIlxcdTJBRjFcIixcbiAgXCJUb3BmXCI6XCJcXHVEODM1XFx1REQ0QlwiLFxuICBcInRvcGZcIjpcIlxcdUQ4MzVcXHVERDY1XCIsXG4gIFwidG9wZm9ya1wiOlwiXFx1MkFEQVwiLFxuICBcInRvc2FcIjpcIlxcdTI5MjlcIixcbiAgXCJ0cHJpbWVcIjpcIlxcdTIwMzRcIixcbiAgXCJUUkFERVwiOlwiXFx1MjEyMlwiLFxuICBcInRyYWRlXCI6XCJcXHUyMTIyXCIsXG4gIFwidHJpYW5nbGVcIjpcIlxcdTI1QjVcIixcbiAgXCJ0cmlhbmdsZWRvd25cIjpcIlxcdTI1QkZcIixcbiAgXCJ0cmlhbmdsZWxlZnRcIjpcIlxcdTI1QzNcIixcbiAgXCJ0cmlhbmdsZWxlZnRlcVwiOlwiXFx1MjJCNFwiLFxuICBcInRyaWFuZ2xlcVwiOlwiXFx1MjI1Q1wiLFxuICBcInRyaWFuZ2xlcmlnaHRcIjpcIlxcdTI1QjlcIixcbiAgXCJ0cmlhbmdsZXJpZ2h0ZXFcIjpcIlxcdTIyQjVcIixcbiAgXCJ0cmlkb3RcIjpcIlxcdTI1RUNcIixcbiAgXCJ0cmllXCI6XCJcXHUyMjVDXCIsXG4gIFwidHJpbWludXNcIjpcIlxcdTJBM0FcIixcbiAgXCJUcmlwbGVEb3RcIjpcIlxcdTIwREJcIixcbiAgXCJ0cmlwbHVzXCI6XCJcXHUyQTM5XCIsXG4gIFwidHJpc2JcIjpcIlxcdTI5Q0RcIixcbiAgXCJ0cml0aW1lXCI6XCJcXHUyQTNCXCIsXG4gIFwidHJwZXppdW1cIjpcIlxcdTIzRTJcIixcbiAgXCJUc2NyXCI6XCJcXHVEODM1XFx1RENBRlwiLFxuICBcInRzY3JcIjpcIlxcdUQ4MzVcXHVEQ0M5XCIsXG4gIFwiVFNjeVwiOlwiXFx1MDQyNlwiLFxuICBcInRzY3lcIjpcIlxcdTA0NDZcIixcbiAgXCJUU0hjeVwiOlwiXFx1MDQwQlwiLFxuICBcInRzaGN5XCI6XCJcXHUwNDVCXCIsXG4gIFwiVHN0cm9rXCI6XCJcXHUwMTY2XCIsXG4gIFwidHN0cm9rXCI6XCJcXHUwMTY3XCIsXG4gIFwidHdpeHRcIjpcIlxcdTIyNkNcIixcbiAgXCJ0d29oZWFkbGVmdGFycm93XCI6XCJcXHUyMTlFXCIsXG4gIFwidHdvaGVhZHJpZ2h0YXJyb3dcIjpcIlxcdTIxQTBcIixcbiAgXCJVYWN1dGVcIjpcIlxcdTAwREFcIixcbiAgXCJ1YWN1dGVcIjpcIlxcdTAwRkFcIixcbiAgXCJVYXJyXCI6XCJcXHUyMTlGXCIsXG4gIFwidUFyclwiOlwiXFx1MjFEMVwiLFxuICBcInVhcnJcIjpcIlxcdTIxOTFcIixcbiAgXCJVYXJyb2NpclwiOlwiXFx1Mjk0OVwiLFxuICBcIlVicmN5XCI6XCJcXHUwNDBFXCIsXG4gIFwidWJyY3lcIjpcIlxcdTA0NUVcIixcbiAgXCJVYnJldmVcIjpcIlxcdTAxNkNcIixcbiAgXCJ1YnJldmVcIjpcIlxcdTAxNkRcIixcbiAgXCJVY2lyY1wiOlwiXFx1MDBEQlwiLFxuICBcInVjaXJjXCI6XCJcXHUwMEZCXCIsXG4gIFwiVWN5XCI6XCJcXHUwNDIzXCIsXG4gIFwidWN5XCI6XCJcXHUwNDQzXCIsXG4gIFwidWRhcnJcIjpcIlxcdTIxQzVcIixcbiAgXCJVZGJsYWNcIjpcIlxcdTAxNzBcIixcbiAgXCJ1ZGJsYWNcIjpcIlxcdTAxNzFcIixcbiAgXCJ1ZGhhclwiOlwiXFx1Mjk2RVwiLFxuICBcInVmaXNodFwiOlwiXFx1Mjk3RVwiLFxuICBcIlVmclwiOlwiXFx1RDgzNVxcdUREMThcIixcbiAgXCJ1ZnJcIjpcIlxcdUQ4MzVcXHVERDMyXCIsXG4gIFwiVWdyYXZlXCI6XCJcXHUwMEQ5XCIsXG4gIFwidWdyYXZlXCI6XCJcXHUwMEY5XCIsXG4gIFwidUhhclwiOlwiXFx1Mjk2M1wiLFxuICBcInVoYXJsXCI6XCJcXHUyMUJGXCIsXG4gIFwidWhhcnJcIjpcIlxcdTIxQkVcIixcbiAgXCJ1aGJsa1wiOlwiXFx1MjU4MFwiLFxuICBcInVsY29yblwiOlwiXFx1MjMxQ1wiLFxuICBcInVsY29ybmVyXCI6XCJcXHUyMzFDXCIsXG4gIFwidWxjcm9wXCI6XCJcXHUyMzBGXCIsXG4gIFwidWx0cmlcIjpcIlxcdTI1RjhcIixcbiAgXCJVbWFjclwiOlwiXFx1MDE2QVwiLFxuICBcInVtYWNyXCI6XCJcXHUwMTZCXCIsXG4gIFwidW1sXCI6XCJcXHUwMEE4XCIsXG4gIFwiVW5kZXJCYXJcIjpcIlxcdTAwNUZcIixcbiAgXCJVbmRlckJyYWNlXCI6XCJcXHUyM0RGXCIsXG4gIFwiVW5kZXJCcmFja2V0XCI6XCJcXHUyM0I1XCIsXG4gIFwiVW5kZXJQYXJlbnRoZXNpc1wiOlwiXFx1MjNERFwiLFxuICBcIlVuaW9uXCI6XCJcXHUyMkMzXCIsXG4gIFwiVW5pb25QbHVzXCI6XCJcXHUyMjhFXCIsXG4gIFwiVW9nb25cIjpcIlxcdTAxNzJcIixcbiAgXCJ1b2dvblwiOlwiXFx1MDE3M1wiLFxuICBcIlVvcGZcIjpcIlxcdUQ4MzVcXHVERDRDXCIsXG4gIFwidW9wZlwiOlwiXFx1RDgzNVxcdURENjZcIixcbiAgXCJVcEFycm93XCI6XCJcXHUyMTkxXCIsXG4gIFwiVXBhcnJvd1wiOlwiXFx1MjFEMVwiLFxuICBcInVwYXJyb3dcIjpcIlxcdTIxOTFcIixcbiAgXCJVcEFycm93QmFyXCI6XCJcXHUyOTEyXCIsXG4gIFwiVXBBcnJvd0Rvd25BcnJvd1wiOlwiXFx1MjFDNVwiLFxuICBcIlVwRG93bkFycm93XCI6XCJcXHUyMTk1XCIsXG4gIFwiVXBkb3duYXJyb3dcIjpcIlxcdTIxRDVcIixcbiAgXCJ1cGRvd25hcnJvd1wiOlwiXFx1MjE5NVwiLFxuICBcIlVwRXF1aWxpYnJpdW1cIjpcIlxcdTI5NkVcIixcbiAgXCJ1cGhhcnBvb25sZWZ0XCI6XCJcXHUyMUJGXCIsXG4gIFwidXBoYXJwb29ucmlnaHRcIjpcIlxcdTIxQkVcIixcbiAgXCJ1cGx1c1wiOlwiXFx1MjI4RVwiLFxuICBcIlVwcGVyTGVmdEFycm93XCI6XCJcXHUyMTk2XCIsXG4gIFwiVXBwZXJSaWdodEFycm93XCI6XCJcXHUyMTk3XCIsXG4gIFwiVXBzaVwiOlwiXFx1MDNEMlwiLFxuICBcInVwc2lcIjpcIlxcdTAzQzVcIixcbiAgXCJ1cHNpaFwiOlwiXFx1MDNEMlwiLFxuICBcIlVwc2lsb25cIjpcIlxcdTAzQTVcIixcbiAgXCJ1cHNpbG9uXCI6XCJcXHUwM0M1XCIsXG4gIFwiVXBUZWVcIjpcIlxcdTIyQTVcIixcbiAgXCJVcFRlZUFycm93XCI6XCJcXHUyMUE1XCIsXG4gIFwidXB1cGFycm93c1wiOlwiXFx1MjFDOFwiLFxuICBcInVyY29yblwiOlwiXFx1MjMxRFwiLFxuICBcInVyY29ybmVyXCI6XCJcXHUyMzFEXCIsXG4gIFwidXJjcm9wXCI6XCJcXHUyMzBFXCIsXG4gIFwiVXJpbmdcIjpcIlxcdTAxNkVcIixcbiAgXCJ1cmluZ1wiOlwiXFx1MDE2RlwiLFxuICBcInVydHJpXCI6XCJcXHUyNUY5XCIsXG4gIFwiVXNjclwiOlwiXFx1RDgzNVxcdURDQjBcIixcbiAgXCJ1c2NyXCI6XCJcXHVEODM1XFx1RENDQVwiLFxuICBcInV0ZG90XCI6XCJcXHUyMkYwXCIsXG4gIFwiVXRpbGRlXCI6XCJcXHUwMTY4XCIsXG4gIFwidXRpbGRlXCI6XCJcXHUwMTY5XCIsXG4gIFwidXRyaVwiOlwiXFx1MjVCNVwiLFxuICBcInV0cmlmXCI6XCJcXHUyNUI0XCIsXG4gIFwidXVhcnJcIjpcIlxcdTIxQzhcIixcbiAgXCJVdW1sXCI6XCJcXHUwMERDXCIsXG4gIFwidXVtbFwiOlwiXFx1MDBGQ1wiLFxuICBcInV3YW5nbGVcIjpcIlxcdTI5QTdcIixcbiAgXCJ2YW5ncnRcIjpcIlxcdTI5OUNcIixcbiAgXCJ2YXJlcHNpbG9uXCI6XCJcXHUwM0Y1XCIsXG4gIFwidmFya2FwcGFcIjpcIlxcdTAzRjBcIixcbiAgXCJ2YXJub3RoaW5nXCI6XCJcXHUyMjA1XCIsXG4gIFwidmFycGhpXCI6XCJcXHUwM0Q1XCIsXG4gIFwidmFycGlcIjpcIlxcdTAzRDZcIixcbiAgXCJ2YXJwcm9wdG9cIjpcIlxcdTIyMURcIixcbiAgXCJ2QXJyXCI6XCJcXHUyMUQ1XCIsXG4gIFwidmFyclwiOlwiXFx1MjE5NVwiLFxuICBcInZhcnJob1wiOlwiXFx1MDNGMVwiLFxuICBcInZhcnNpZ21hXCI6XCJcXHUwM0MyXCIsXG4gIFwidmFyc3Vic2V0bmVxXCI6XCJcXHUyMjhBXFx1RkUwMFwiLFxuICBcInZhcnN1YnNldG5lcXFcIjpcIlxcdTJBQ0JcXHVGRTAwXCIsXG4gIFwidmFyc3Vwc2V0bmVxXCI6XCJcXHUyMjhCXFx1RkUwMFwiLFxuICBcInZhcnN1cHNldG5lcXFcIjpcIlxcdTJBQ0NcXHVGRTAwXCIsXG4gIFwidmFydGhldGFcIjpcIlxcdTAzRDFcIixcbiAgXCJ2YXJ0cmlhbmdsZWxlZnRcIjpcIlxcdTIyQjJcIixcbiAgXCJ2YXJ0cmlhbmdsZXJpZ2h0XCI6XCJcXHUyMkIzXCIsXG4gIFwiVmJhclwiOlwiXFx1MkFFQlwiLFxuICBcInZCYXJcIjpcIlxcdTJBRThcIixcbiAgXCJ2QmFydlwiOlwiXFx1MkFFOVwiLFxuICBcIlZjeVwiOlwiXFx1MDQxMlwiLFxuICBcInZjeVwiOlwiXFx1MDQzMlwiLFxuICBcIlZEYXNoXCI6XCJcXHUyMkFCXCIsXG4gIFwiVmRhc2hcIjpcIlxcdTIyQTlcIixcbiAgXCJ2RGFzaFwiOlwiXFx1MjJBOFwiLFxuICBcInZkYXNoXCI6XCJcXHUyMkEyXCIsXG4gIFwiVmRhc2hsXCI6XCJcXHUyQUU2XCIsXG4gIFwiVmVlXCI6XCJcXHUyMkMxXCIsXG4gIFwidmVlXCI6XCJcXHUyMjI4XCIsXG4gIFwidmVlYmFyXCI6XCJcXHUyMkJCXCIsXG4gIFwidmVlZXFcIjpcIlxcdTIyNUFcIixcbiAgXCJ2ZWxsaXBcIjpcIlxcdTIyRUVcIixcbiAgXCJWZXJiYXJcIjpcIlxcdTIwMTZcIixcbiAgXCJ2ZXJiYXJcIjpcIlxcdTAwN0NcIixcbiAgXCJWZXJ0XCI6XCJcXHUyMDE2XCIsXG4gIFwidmVydFwiOlwiXFx1MDA3Q1wiLFxuICBcIlZlcnRpY2FsQmFyXCI6XCJcXHUyMjIzXCIsXG4gIFwiVmVydGljYWxMaW5lXCI6XCJcXHUwMDdDXCIsXG4gIFwiVmVydGljYWxTZXBhcmF0b3JcIjpcIlxcdTI3NThcIixcbiAgXCJWZXJ0aWNhbFRpbGRlXCI6XCJcXHUyMjQwXCIsXG4gIFwiVmVyeVRoaW5TcGFjZVwiOlwiXFx1MjAwQVwiLFxuICBcIlZmclwiOlwiXFx1RDgzNVxcdUREMTlcIixcbiAgXCJ2ZnJcIjpcIlxcdUQ4MzVcXHVERDMzXCIsXG4gIFwidmx0cmlcIjpcIlxcdTIyQjJcIixcbiAgXCJ2bnN1YlwiOlwiXFx1MjI4MlxcdTIwRDJcIixcbiAgXCJ2bnN1cFwiOlwiXFx1MjI4M1xcdTIwRDJcIixcbiAgXCJWb3BmXCI6XCJcXHVEODM1XFx1REQ0RFwiLFxuICBcInZvcGZcIjpcIlxcdUQ4MzVcXHVERDY3XCIsXG4gIFwidnByb3BcIjpcIlxcdTIyMURcIixcbiAgXCJ2cnRyaVwiOlwiXFx1MjJCM1wiLFxuICBcIlZzY3JcIjpcIlxcdUQ4MzVcXHVEQ0IxXCIsXG4gIFwidnNjclwiOlwiXFx1RDgzNVxcdURDQ0JcIixcbiAgXCJ2c3VibkVcIjpcIlxcdTJBQ0JcXHVGRTAwXCIsXG4gIFwidnN1Ym5lXCI6XCJcXHUyMjhBXFx1RkUwMFwiLFxuICBcInZzdXBuRVwiOlwiXFx1MkFDQ1xcdUZFMDBcIixcbiAgXCJ2c3VwbmVcIjpcIlxcdTIyOEJcXHVGRTAwXCIsXG4gIFwiVnZkYXNoXCI6XCJcXHUyMkFBXCIsXG4gIFwidnppZ3phZ1wiOlwiXFx1Mjk5QVwiLFxuICBcIldjaXJjXCI6XCJcXHUwMTc0XCIsXG4gIFwid2NpcmNcIjpcIlxcdTAxNzVcIixcbiAgXCJ3ZWRiYXJcIjpcIlxcdTJBNUZcIixcbiAgXCJXZWRnZVwiOlwiXFx1MjJDMFwiLFxuICBcIndlZGdlXCI6XCJcXHUyMjI3XCIsXG4gIFwid2VkZ2VxXCI6XCJcXHUyMjU5XCIsXG4gIFwid2VpZXJwXCI6XCJcXHUyMTE4XCIsXG4gIFwiV2ZyXCI6XCJcXHVEODM1XFx1REQxQVwiLFxuICBcIndmclwiOlwiXFx1RDgzNVxcdUREMzRcIixcbiAgXCJXb3BmXCI6XCJcXHVEODM1XFx1REQ0RVwiLFxuICBcIndvcGZcIjpcIlxcdUQ4MzVcXHVERDY4XCIsXG4gIFwid3BcIjpcIlxcdTIxMThcIixcbiAgXCJ3clwiOlwiXFx1MjI0MFwiLFxuICBcIndyZWF0aFwiOlwiXFx1MjI0MFwiLFxuICBcIldzY3JcIjpcIlxcdUQ4MzVcXHVEQ0IyXCIsXG4gIFwid3NjclwiOlwiXFx1RDgzNVxcdURDQ0NcIixcbiAgXCJ4Y2FwXCI6XCJcXHUyMkMyXCIsXG4gIFwieGNpcmNcIjpcIlxcdTI1RUZcIixcbiAgXCJ4Y3VwXCI6XCJcXHUyMkMzXCIsXG4gIFwieGR0cmlcIjpcIlxcdTI1QkRcIixcbiAgXCJYZnJcIjpcIlxcdUQ4MzVcXHVERDFCXCIsXG4gIFwieGZyXCI6XCJcXHVEODM1XFx1REQzNVwiLFxuICBcInhoQXJyXCI6XCJcXHUyN0ZBXCIsXG4gIFwieGhhcnJcIjpcIlxcdTI3RjdcIixcbiAgXCJYaVwiOlwiXFx1MDM5RVwiLFxuICBcInhpXCI6XCJcXHUwM0JFXCIsXG4gIFwieGxBcnJcIjpcIlxcdTI3RjhcIixcbiAgXCJ4bGFyclwiOlwiXFx1MjdGNVwiLFxuICBcInhtYXBcIjpcIlxcdTI3RkNcIixcbiAgXCJ4bmlzXCI6XCJcXHUyMkZCXCIsXG4gIFwieG9kb3RcIjpcIlxcdTJBMDBcIixcbiAgXCJYb3BmXCI6XCJcXHVEODM1XFx1REQ0RlwiLFxuICBcInhvcGZcIjpcIlxcdUQ4MzVcXHVERDY5XCIsXG4gIFwieG9wbHVzXCI6XCJcXHUyQTAxXCIsXG4gIFwieG90aW1lXCI6XCJcXHUyQTAyXCIsXG4gIFwieHJBcnJcIjpcIlxcdTI3RjlcIixcbiAgXCJ4cmFyclwiOlwiXFx1MjdGNlwiLFxuICBcIlhzY3JcIjpcIlxcdUQ4MzVcXHVEQ0IzXCIsXG4gIFwieHNjclwiOlwiXFx1RDgzNVxcdURDQ0RcIixcbiAgXCJ4c3FjdXBcIjpcIlxcdTJBMDZcIixcbiAgXCJ4dXBsdXNcIjpcIlxcdTJBMDRcIixcbiAgXCJ4dXRyaVwiOlwiXFx1MjVCM1wiLFxuICBcInh2ZWVcIjpcIlxcdTIyQzFcIixcbiAgXCJ4d2VkZ2VcIjpcIlxcdTIyQzBcIixcbiAgXCJZYWN1dGVcIjpcIlxcdTAwRERcIixcbiAgXCJ5YWN1dGVcIjpcIlxcdTAwRkRcIixcbiAgXCJZQWN5XCI6XCJcXHUwNDJGXCIsXG4gIFwieWFjeVwiOlwiXFx1MDQ0RlwiLFxuICBcIlljaXJjXCI6XCJcXHUwMTc2XCIsXG4gIFwieWNpcmNcIjpcIlxcdTAxNzdcIixcbiAgXCJZY3lcIjpcIlxcdTA0MkJcIixcbiAgXCJ5Y3lcIjpcIlxcdTA0NEJcIixcbiAgXCJ5ZW5cIjpcIlxcdTAwQTVcIixcbiAgXCJZZnJcIjpcIlxcdUQ4MzVcXHVERDFDXCIsXG4gIFwieWZyXCI6XCJcXHVEODM1XFx1REQzNlwiLFxuICBcIllJY3lcIjpcIlxcdTA0MDdcIixcbiAgXCJ5aWN5XCI6XCJcXHUwNDU3XCIsXG4gIFwiWW9wZlwiOlwiXFx1RDgzNVxcdURENTBcIixcbiAgXCJ5b3BmXCI6XCJcXHVEODM1XFx1REQ2QVwiLFxuICBcIllzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I0XCIsXG4gIFwieXNjclwiOlwiXFx1RDgzNVxcdURDQ0VcIixcbiAgXCJZVWN5XCI6XCJcXHUwNDJFXCIsXG4gIFwieXVjeVwiOlwiXFx1MDQ0RVwiLFxuICBcIll1bWxcIjpcIlxcdTAxNzhcIixcbiAgXCJ5dW1sXCI6XCJcXHUwMEZGXCIsXG4gIFwiWmFjdXRlXCI6XCJcXHUwMTc5XCIsXG4gIFwiemFjdXRlXCI6XCJcXHUwMTdBXCIsXG4gIFwiWmNhcm9uXCI6XCJcXHUwMTdEXCIsXG4gIFwiemNhcm9uXCI6XCJcXHUwMTdFXCIsXG4gIFwiWmN5XCI6XCJcXHUwNDE3XCIsXG4gIFwiemN5XCI6XCJcXHUwNDM3XCIsXG4gIFwiWmRvdFwiOlwiXFx1MDE3QlwiLFxuICBcInpkb3RcIjpcIlxcdTAxN0NcIixcbiAgXCJ6ZWV0cmZcIjpcIlxcdTIxMjhcIixcbiAgXCJaZXJvV2lkdGhTcGFjZVwiOlwiXFx1MjAwQlwiLFxuICBcIlpldGFcIjpcIlxcdTAzOTZcIixcbiAgXCJ6ZXRhXCI6XCJcXHUwM0I2XCIsXG4gIFwiWmZyXCI6XCJcXHUyMTI4XCIsXG4gIFwiemZyXCI6XCJcXHVEODM1XFx1REQzN1wiLFxuICBcIlpIY3lcIjpcIlxcdTA0MTZcIixcbiAgXCJ6aGN5XCI6XCJcXHUwNDM2XCIsXG4gIFwiemlncmFyclwiOlwiXFx1MjFERFwiLFxuICBcIlpvcGZcIjpcIlxcdTIxMjRcIixcbiAgXCJ6b3BmXCI6XCJcXHVEODM1XFx1REQ2QlwiLFxuICBcIlpzY3JcIjpcIlxcdUQ4MzVcXHVEQ0I1XCIsXG4gIFwienNjclwiOlwiXFx1RDgzNVxcdURDQ0ZcIixcbiAgXCJ6d2pcIjpcIlxcdTIwMERcIixcbiAgXCJ6d25qXCI6XCJcXHUyMDBDXCJcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9jb21tb24vZW50aXRpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBMb2NhbCBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgaGFzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS5oYXM7XG52YXIgdW5lc2NhcGVNZCAgICAgID0gcmVxdWlyZSgnLi9jb21tb24vdXRpbHMnKS51bmVzY2FwZU1kO1xudmFyIHJlcGxhY2VFbnRpdGllcyA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykucmVwbGFjZUVudGl0aWVzO1xudmFyIGVzY2FwZUh0bWwgICAgICA9IHJlcXVpcmUoJy4vY29tbW9uL3V0aWxzJykuZXNjYXBlSHRtbDtcblxuLyoqXG4gKiBSZW5kZXJlciBydWxlcyBjYWNoZVxuICovXG5cbnZhciBydWxlcyA9IHt9O1xuXG4vKipcbiAqIEJsb2NrcXVvdGVzXG4gKi9cblxucnVsZXMuYmxvY2txdW90ZV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8YmxvY2txdW90ZT5cXG4nO1xufTtcblxucnVsZXMuYmxvY2txdW90ZV9jbG9zZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9ibG9ja3F1b3RlPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIENvZGVcbiAqL1xuXG5ydWxlcy5jb2RlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgaWYgKHRva2Vuc1tpZHhdLmJsb2NrKSB7XG4gICAgcmV0dXJuICc8cHJlPjxjb2RlPicgKyBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpICsgJzwvY29kZT48L3ByZT4nICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xuICB9XG4gIHJldHVybiAnPGNvZGU+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9jb2RlPic7XG59O1xuXG4vKipcbiAqIEZlbmNlZCBjb2RlIGJsb2Nrc1xuICovXG5cbnJ1bGVzLmZlbmNlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYsIHNlbGYpIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG4gIHZhciBsYW5nQ2xhc3MgPSAnJztcbiAgdmFyIGxhbmdQcmVmaXggPSBvcHRpb25zLmxhbmdQcmVmaXg7XG4gIHZhciBsYW5nTmFtZSA9ICcnLCBmZW5jZU5hbWU7XG4gIHZhciBoaWdobGlnaHRlZDtcblxuICBpZiAodG9rZW4ucGFyYW1zKSB7XG5cbiAgICAvL1xuICAgIC8vIGBgYGZvbyBiYXJcbiAgICAvL1xuICAgIC8vIFRyeSBjdXN0b20gcmVuZGVyZXIgXCJmb29cIiBmaXJzdC4gVGhhdCB3aWxsIHNpbXBsaWZ5IG92ZXJ3cml0ZVxuICAgIC8vIGZvciBkaWFncmFtcywgbGF0ZXgsIGFuZCBhbnkgb3RoZXIgZmVuY2VkIGJsb2NrIHdpdGggY3VzdG9tIGxvb2tcbiAgICAvL1xuXG4gICAgZmVuY2VOYW1lID0gdG9rZW4ucGFyYW1zLnNwbGl0KC9cXHMrL2cpWzBdO1xuXG4gICAgaWYgKGhhcyhzZWxmLnJ1bGVzLmZlbmNlX2N1c3RvbSwgZmVuY2VOYW1lKSkge1xuICAgICAgcmV0dXJuIHNlbGYucnVsZXMuZmVuY2VfY3VzdG9tW2ZlbmNlTmFtZV0odG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiwgc2VsZik7XG4gICAgfVxuXG4gICAgbGFuZ05hbWUgPSBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh1bmVzY2FwZU1kKGZlbmNlTmFtZSkpKTtcbiAgICBsYW5nQ2xhc3MgPSAnIGNsYXNzPVwiJyArIGxhbmdQcmVmaXggKyBsYW5nTmFtZSArICdcIic7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICBoaWdobGlnaHRlZCA9IG9wdGlvbnMuaGlnaGxpZ2h0KHRva2VuLmNvbnRlbnQsIGxhbmdOYW1lKSB8fCBlc2NhcGVIdG1sKHRva2VuLmNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIGhpZ2hsaWdodGVkID0gZXNjYXBlSHRtbCh0b2tlbi5jb250ZW50KTtcbiAgfVxuXG4gIHJldHVybiAnPHByZT48Y29kZScgKyBsYW5nQ2xhc3MgKyAnPidcbiAgICAgICAgKyBoaWdobGlnaHRlZFxuICAgICAgICArICc8L2NvZGU+PC9wcmU+J1xuICAgICAgICArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbnJ1bGVzLmZlbmNlX2N1c3RvbSA9IHt9O1xuXG4vKipcbiAqIEhlYWRpbmdzXG4gKi9cblxucnVsZXMuaGVhZGluZ19vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8aCcgKyB0b2tlbnNbaWR4XS5oTGV2ZWwgKyAnPic7XG59O1xucnVsZXMuaGVhZGluZ19jbG9zZSA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9oJyArIHRva2Vuc1tpZHhdLmhMZXZlbCArICc+XFxuJztcbn07XG5cbi8qKlxuICogSG9yaXpvbnRhbCBydWxlc1xuICovXG5cbnJ1bGVzLmhyID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIChvcHRpb25zLnhodG1sT3V0ID8gJzxociAvPicgOiAnPGhyPicpICsgZ2V0QnJlYWsodG9rZW5zLCBpZHgpO1xufTtcblxuLyoqXG4gKiBCdWxsZXRzXG4gKi9cblxucnVsZXMuYnVsbGV0X2xpc3Rfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHVsPlxcbic7XG59O1xucnVsZXMuYnVsbGV0X2xpc3RfY2xvc2UgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdWw+JyArIGdldEJyZWFrKHRva2VucywgaWR4KTtcbn07XG5cbi8qKlxuICogTGlzdCBpdGVtc1xuICovXG5cbnJ1bGVzLmxpc3RfaXRlbV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8bGk+Jztcbn07XG5ydWxlcy5saXN0X2l0ZW1fY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvbGk+XFxuJztcbn07XG5cbi8qKlxuICogT3JkZXJlZCBsaXN0IGl0ZW1zXG4gKi9cblxucnVsZXMub3JkZXJlZF9saXN0X29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgdmFyIG9yZGVyID0gdG9rZW4ub3JkZXIgPiAxID8gJyBzdGFydD1cIicgKyB0b2tlbi5vcmRlciArICdcIicgOiAnJztcbiAgcmV0dXJuICc8b2wnICsgb3JkZXIgKyAnPlxcbic7XG59O1xucnVsZXMub3JkZXJlZF9saXN0X2Nsb3NlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L29sPicgKyBnZXRCcmVhayh0b2tlbnMsIGlkeCk7XG59O1xuXG4vKipcbiAqIFBhcmFncmFwaHNcbiAqL1xuXG5ydWxlcy5wYXJhZ3JhcGhfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS50aWdodCA/ICcnIDogJzxwPic7XG59O1xucnVsZXMucGFyYWdyYXBoX2Nsb3NlID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgdmFyIGFkZEJyZWFrID0gISh0b2tlbnNbaWR4XS50aWdodCAmJiBpZHggJiYgdG9rZW5zW2lkeCAtIDFdLnR5cGUgPT09ICdpbmxpbmUnICYmICF0b2tlbnNbaWR4IC0gMV0uY29udGVudCk7XG4gIHJldHVybiAodG9rZW5zW2lkeF0udGlnaHQgPyAnJyA6ICc8L3A+JykgKyAoYWRkQnJlYWsgPyBnZXRCcmVhayh0b2tlbnMsIGlkeCkgOiAnJyk7XG59O1xuXG4vKipcbiAqIExpbmtzXG4gKi9cblxucnVsZXMubGlua19vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgdmFyIHRpdGxlID0gdG9rZW5zW2lkeF0udGl0bGUgPyAoJyB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiJykgOiAnJztcbiAgcmV0dXJuICc8YSBocmVmPVwiJyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uaHJlZikgKyAnXCInICsgdGl0bGUgKyAnPic7XG59O1xucnVsZXMubGlua19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9hPic7XG59O1xuXG4vKipcbiAqIEltYWdlc1xuICovXG5cbnJ1bGVzLmltYWdlID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgdmFyIHNyYyA9ICcgc3JjPVwiJyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uc3JjKSArICdcIic7XG4gIHZhciB0aXRsZSA9IHRva2Vuc1tpZHhdLnRpdGxlID8gKCcgdGl0bGU9XCInICsgZXNjYXBlSHRtbChyZXBsYWNlRW50aXRpZXModG9rZW5zW2lkeF0udGl0bGUpKSArICdcIicpIDogJyc7XG4gIHZhciBhbHQgPSAnIGFsdD1cIicgKyAodG9rZW5zW2lkeF0uYWx0ID8gZXNjYXBlSHRtbChyZXBsYWNlRW50aXRpZXModG9rZW5zW2lkeF0uYWx0KSkgOiAnJykgKyAnXCInO1xuICB2YXIgc3VmZml4ID0gb3B0aW9ucy54aHRtbE91dCA/ICcgLycgOiAnJztcbiAgcmV0dXJuICc8aW1nJyArIHNyYyArIGFsdCArIHRpdGxlICsgc3VmZml4ICsgJz4nO1xufTtcblxuLyoqXG4gKiBUYWJsZXNcbiAqL1xuXG5ydWxlcy50YWJsZV9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8dGFibGU+XFxuJztcbn07XG5ydWxlcy50YWJsZV9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90YWJsZT5cXG4nO1xufTtcbnJ1bGVzLnRoZWFkX29wZW4gPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzx0aGVhZD5cXG4nO1xufTtcbnJ1bGVzLnRoZWFkX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RoZWFkPlxcbic7XG59O1xucnVsZXMudGJvZHlfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHRib2R5Plxcbic7XG59O1xucnVsZXMudGJvZHlfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGJvZHk+XFxuJztcbn07XG5ydWxlcy50cl9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8dHI+Jztcbn07XG5ydWxlcy50cl9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC90cj5cXG4nO1xufTtcbnJ1bGVzLnRoX29wZW4gPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICB2YXIgdG9rZW4gPSB0b2tlbnNbaWR4XTtcbiAgcmV0dXJuICc8dGgnXG4gICAgKyAodG9rZW4uYWxpZ24gPyAnIHN0eWxlPVwidGV4dC1hbGlnbjonICsgdG9rZW4uYWxpZ24gKyAnXCInIDogJycpXG4gICAgKyAnPic7XG59O1xucnVsZXMudGhfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvdGg+Jztcbn07XG5ydWxlcy50ZF9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgdmFyIHRva2VuID0gdG9rZW5zW2lkeF07XG4gIHJldHVybiAnPHRkJ1xuICAgICsgKHRva2VuLmFsaWduID8gJyBzdHlsZT1cInRleHQtYWxpZ246JyArIHRva2VuLmFsaWduICsgJ1wiJyA6ICcnKVxuICAgICsgJz4nO1xufTtcbnJ1bGVzLnRkX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L3RkPic7XG59O1xuXG4vKipcbiAqIEJvbGRcbiAqL1xuXG5ydWxlcy5zdHJvbmdfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPHN0cm9uZz4nO1xufTtcbnJ1bGVzLnN0cm9uZ19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9zdHJvbmc+Jztcbn07XG5cbi8qKlxuICogSXRhbGljaXplXG4gKi9cblxucnVsZXMuZW1fb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGVtPic7XG59O1xucnVsZXMuZW1fY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvZW0+Jztcbn07XG5cbi8qKlxuICogU3RyaWtldGhyb3VnaFxuICovXG5cbnJ1bGVzLmRlbF9vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8ZGVsPic7XG59O1xucnVsZXMuZGVsX2Nsb3NlID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8L2RlbD4nO1xufTtcblxuLyoqXG4gKiBJbnNlcnRcbiAqL1xuXG5ydWxlcy5pbnNfb3BlbiA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPGlucz4nO1xufTtcbnJ1bGVzLmluc19jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9pbnM+Jztcbn07XG5cbi8qKlxuICogSGlnaGxpZ2h0XG4gKi9cblxucnVsZXMubWFya19vcGVuID0gZnVuY3Rpb24gKC8qIHRva2VucywgaWR4LCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8bWFyaz4nO1xufTtcbnJ1bGVzLm1hcmtfY2xvc2UgPSBmdW5jdGlvbiAoLyogdG9rZW5zLCBpZHgsIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzwvbWFyaz4nO1xufTtcblxuLyoqXG4gKiBTdXBlci0gYW5kIHN1Yi1zY3JpcHRcbiAqL1xuXG5ydWxlcy5zdWIgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxzdWI+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9zdWI+Jztcbn07XG5ydWxlcy5zdXAgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHggLyosIG9wdGlvbnMsIGVudiAqLykge1xuICByZXR1cm4gJzxzdXA+JyArIGVzY2FwZUh0bWwodG9rZW5zW2lkeF0uY29udGVudCkgKyAnPC9zdXA+Jztcbn07XG5cbi8qKlxuICogQnJlYWtzXG4gKi9cblxucnVsZXMuaGFyZGJyZWFrID0gZnVuY3Rpb24gKHRva2VucywgaWR4LCBvcHRpb25zIC8qLCBlbnYgKi8pIHtcbiAgcmV0dXJuIG9wdGlvbnMueGh0bWxPdXQgPyAnPGJyIC8+XFxuJyA6ICc8YnI+XFxuJztcbn07XG5ydWxlcy5zb2Z0YnJlYWsgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgsIG9wdGlvbnMgLyosIGVudiAqLykge1xuICByZXR1cm4gb3B0aW9ucy5icmVha3MgPyAob3B0aW9ucy54aHRtbE91dCA/ICc8YnIgLz5cXG4nIDogJzxicj5cXG4nKSA6ICdcXG4nO1xufTtcblxuLyoqXG4gKiBUZXh0XG4gKi9cblxucnVsZXMudGV4dCA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiBlc2NhcGVIdG1sKHRva2Vuc1tpZHhdLmNvbnRlbnQpO1xufTtcblxuLyoqXG4gKiBDb250ZW50XG4gKi9cblxucnVsZXMuaHRtbGJsb2NrID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuIHRva2Vuc1tpZHhdLmNvbnRlbnQ7XG59O1xucnVsZXMuaHRtbHRhZyA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCAvKiwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiB0b2tlbnNbaWR4XS5jb250ZW50O1xufTtcblxuLyoqXG4gKiBBYmJyZXZpYXRpb25zLCBpbml0aWFsaXNtXG4gKi9cblxucnVsZXMuYWJicl9vcGVuID0gZnVuY3Rpb24gKHRva2VucywgaWR4IC8qLCBvcHRpb25zLCBlbnYgKi8pIHtcbiAgcmV0dXJuICc8YWJiciB0aXRsZT1cIicgKyBlc2NhcGVIdG1sKHJlcGxhY2VFbnRpdGllcyh0b2tlbnNbaWR4XS50aXRsZSkpICsgJ1wiPic7XG59O1xucnVsZXMuYWJicl9jbG9zZSA9IGZ1bmN0aW9uICgvKiB0b2tlbnMsIGlkeCwgb3B0aW9ucywgZW52ICovKSB7XG4gIHJldHVybiAnPC9hYmJyPic7XG59O1xuXG4vKipcbiAqIEZvb3Rub3Rlc1xuICovXG5cbnJ1bGVzLmZvb3Rub3RlX3JlZiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCkge1xuICB2YXIgbiA9IE51bWJlcih0b2tlbnNbaWR4XS5pZCArIDEpLnRvU3RyaW5nKCk7XG4gIHZhciBpZCA9ICdmbnJlZicgKyBuO1xuICBpZiAodG9rZW5zW2lkeF0uc3ViSWQgPiAwKSB7XG4gICAgaWQgKz0gJzonICsgdG9rZW5zW2lkeF0uc3ViSWQ7XG4gIH1cbiAgcmV0dXJuICc8c3VwIGNsYXNzPVwiZm9vdG5vdGUtcmVmXCI+PGEgaHJlZj1cIiNmbicgKyBuICsgJ1wiIGlkPVwiJyArIGlkICsgJ1wiPlsnICsgbiArICddPC9hPjwvc3VwPic7XG59O1xucnVsZXMuZm9vdG5vdGVfYmxvY2tfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCwgb3B0aW9ucykge1xuICB2YXIgaHIgPSBvcHRpb25zLnhodG1sT3V0XG4gICAgPyAnPGhyIGNsYXNzPVwiZm9vdG5vdGVzLXNlcFwiIC8+XFxuJ1xuICAgIDogJzxociBjbGFzcz1cImZvb3Rub3Rlcy1zZXBcIj5cXG4nO1xuICByZXR1cm4gIGhyICsgJzxzZWN0aW9uIGNsYXNzPVwiZm9vdG5vdGVzXCI+XFxuPG9sIGNsYXNzPVwiZm9vdG5vdGVzLWxpc3RcIj5cXG4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Jsb2NrX2Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwvb2w+XFxuPC9zZWN0aW9uPlxcbic7XG59O1xucnVsZXMuZm9vdG5vdGVfb3BlbiA9IGZ1bmN0aW9uICh0b2tlbnMsIGlkeCkge1xuICB2YXIgaWQgPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICByZXR1cm4gJzxsaSBpZD1cImZuJyArIGlkICsgJ1wiICBjbGFzcz1cImZvb3Rub3RlLWl0ZW1cIj4nO1xufTtcbnJ1bGVzLmZvb3Rub3RlX2Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJzwvbGk+XFxuJztcbn07XG5ydWxlcy5mb290bm90ZV9hbmNob3IgPSBmdW5jdGlvbiAodG9rZW5zLCBpZHgpIHtcbiAgdmFyIG4gPSBOdW1iZXIodG9rZW5zW2lkeF0uaWQgKyAxKS50b1N0cmluZygpO1xuICB2YXIgaWQgPSAnZm5yZWYnICsgbjtcbiAgaWYgKHRva2Vuc1tpZHhdLnN1YklkID4gMCkge1xuICAgIGlkICs9ICc6JyArIHRva2Vuc1tpZHhdLnN1YklkO1xuICB9XG4gIHJldHVybiAnIDxhIGhyZWY9XCIjJyArIGlkICsgJ1wiIGNsYXNzPVwiZm9vdG5vdGUtYmFja3JlZlwiPuKGqTwvYT4nO1xufTtcblxuLyoqXG4gKiBEZWZpbml0aW9uIGxpc3RzXG4gKi9cblxucnVsZXMuZGxfb3BlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJzxkbD5cXG4nO1xufTtcbnJ1bGVzLmR0X29wZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8ZHQ+Jztcbn07XG5ydWxlcy5kZF9vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnPGRkPic7XG59O1xucnVsZXMuZGxfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L2RsPlxcbic7XG59O1xucnVsZXMuZHRfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L2R0Plxcbic7XG59O1xucnVsZXMuZGRfY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICc8L2RkPlxcbic7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBuZXh0VG9rZW4odG9rZW5zLCBpZHgpIHtcbiAgaWYgKCsraWR4ID49IHRva2Vucy5sZW5ndGggLSAyKSB7XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuICBpZiAoKHRva2Vuc1tpZHhdLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicgJiYgdG9rZW5zW2lkeF0udGlnaHQpICYmXG4gICAgICAodG9rZW5zW2lkeCArIDFdLnR5cGUgPT09ICdpbmxpbmUnICYmIHRva2Vuc1tpZHggKyAxXS5jb250ZW50Lmxlbmd0aCA9PT0gMCkgJiZcbiAgICAgICh0b2tlbnNbaWR4ICsgMl0udHlwZSA9PT0gJ3BhcmFncmFwaF9jbG9zZScgJiYgdG9rZW5zW2lkeCArIDJdLnRpZ2h0KSkge1xuICAgIHJldHVybiBuZXh0VG9rZW4odG9rZW5zLCBpZHggKyAyKTtcbiAgfVxuICByZXR1cm4gaWR4O1xufVxuXG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiBgXFxuYCBpcyBuZWVkZWQgYmVmb3JlIHRoZSBuZXh0IHRva2VuLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBgdG9rZW5zYFxuICogQHBhcmFtICB7TnVtYmVyfSBgaWR4YFxuICogQHJldHVybiB7U3RyaW5nfSBFbXB0eSBzdHJpbmcgb3IgbmV3bGluZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIGdldEJyZWFrID0gcnVsZXMuZ2V0QnJlYWsgPSBmdW5jdGlvbiBnZXRCcmVhayh0b2tlbnMsIGlkeCkge1xuICBpZHggPSBuZXh0VG9rZW4odG9rZW5zLCBpZHgpO1xuICBpZiAoaWR4IDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaWR4XS50eXBlID09PSAnbGlzdF9pdGVtX2Nsb3NlJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gJ1xcbic7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgcnVsZXNgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBydWxlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQYXJzZXIgc3RhdGUgY2xhc3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIFN0YXRlQmxvY2soc3JjLCBwYXJzZXIsIG9wdGlvbnMsIGVudiwgdG9rZW5zKSB7XG4gIHZhciBjaCwgcywgc3RhcnQsIHBvcywgbGVuLCBpbmRlbnQsIGluZGVudF9mb3VuZDtcblxuICB0aGlzLnNyYyA9IHNyYztcblxuICAvLyBTaG9ydGN1dHMgdG8gc2ltcGxpZnkgbmVzdGVkIGNhbGxzXG4gIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgdGhpcy5lbnYgPSBlbnY7XG5cbiAgLy9cbiAgLy8gSW50ZXJuYWwgc3RhdGUgdmFydGlhYmxlc1xuICAvL1xuXG4gIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuXG4gIHRoaXMuYk1hcmtzID0gW107ICAvLyBsaW5lIGJlZ2luIG9mZnNldHMgZm9yIGZhc3QganVtcHNcbiAgdGhpcy5lTWFya3MgPSBbXTsgIC8vIGxpbmUgZW5kIG9mZnNldHMgZm9yIGZhc3QganVtcHNcbiAgdGhpcy50U2hpZnQgPSBbXTsgIC8vIGluZGVudCBmb3IgZWFjaCBsaW5lXG5cbiAgLy8gYmxvY2sgcGFyc2VyIHZhcmlhYmxlc1xuICB0aGlzLmJsa0luZGVudCAgPSAwOyAvLyByZXF1aXJlZCBibG9jayBjb250ZW50IGluZGVudFxuICAgICAgICAgICAgICAgICAgICAgICAvLyAoZm9yIGV4YW1wbGUsIGlmIHdlIGFyZSBpbiBsaXN0KVxuICB0aGlzLmxpbmUgICAgICAgPSAwOyAvLyBsaW5lIGluZGV4IGluIHNyY1xuICB0aGlzLmxpbmVNYXggICAgPSAwOyAvLyBsaW5lcyBjb3VudFxuICB0aGlzLnRpZ2h0ICAgICAgPSBmYWxzZTsgIC8vIGxvb3NlL3RpZ2h0IG1vZGUgZm9yIGxpc3RzXG4gIHRoaXMucGFyZW50VHlwZSA9ICdyb290JzsgLy8gaWYgYGxpc3RgLCBibG9jayBwYXJzZXIgc3RvcHMgb24gdHdvIG5ld2xpbmVzXG4gIHRoaXMuZGRJbmRlbnQgICA9IC0xOyAvLyBpbmRlbnQgb2YgdGhlIGN1cnJlbnQgZGQgYmxvY2sgKC0xIGlmIHRoZXJlIGlzbid0IGFueSlcblxuICB0aGlzLmxldmVsID0gMDtcblxuICAvLyByZW5kZXJlclxuICB0aGlzLnJlc3VsdCA9ICcnO1xuXG4gIC8vIENyZWF0ZSBjYWNoZXNcbiAgLy8gR2VuZXJhdGUgbWFya2Vycy5cbiAgcyA9IHRoaXMuc3JjO1xuICBpbmRlbnQgPSAwO1xuICBpbmRlbnRfZm91bmQgPSBmYWxzZTtcblxuICBmb3IgKHN0YXJ0ID0gcG9zID0gaW5kZW50ID0gMCwgbGVuID0gcy5sZW5ndGg7IHBvcyA8IGxlbjsgcG9zKyspIHtcbiAgICBjaCA9IHMuY2hhckNvZGVBdChwb3MpO1xuXG4gICAgaWYgKCFpbmRlbnRfZm91bmQpIHtcbiAgICAgIGlmIChjaCA9PT0gMHgyMC8qIHNwYWNlICovKSB7XG4gICAgICAgIGluZGVudCsrO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGVudF9mb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoID09PSAweDBBIHx8IHBvcyA9PT0gbGVuIC0gMSkge1xuICAgICAgaWYgKGNoICE9PSAweDBBKSB7IHBvcysrOyB9XG4gICAgICB0aGlzLmJNYXJrcy5wdXNoKHN0YXJ0KTtcbiAgICAgIHRoaXMuZU1hcmtzLnB1c2gocG9zKTtcbiAgICAgIHRoaXMudFNoaWZ0LnB1c2goaW5kZW50KTtcblxuICAgICAgaW5kZW50X2ZvdW5kID0gZmFsc2U7XG4gICAgICBpbmRlbnQgPSAwO1xuICAgICAgc3RhcnQgPSBwb3MgKyAxO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1c2ggZmFrZSBlbnRyeSB0byBzaW1wbGlmeSBjYWNoZSBib3VuZHMgY2hlY2tzXG4gIHRoaXMuYk1hcmtzLnB1c2gocy5sZW5ndGgpO1xuICB0aGlzLmVNYXJrcy5wdXNoKHMubGVuZ3RoKTtcbiAgdGhpcy50U2hpZnQucHVzaCgwKTtcblxuICB0aGlzLmxpbmVNYXggPSB0aGlzLmJNYXJrcy5sZW5ndGggLSAxOyAvLyBkb24ndCBjb3VudCBsYXN0IGZha2UgbGluZVxufVxuXG5TdGF0ZUJsb2NrLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eShsaW5lKSB7XG4gIHJldHVybiB0aGlzLmJNYXJrc1tsaW5lXSArIHRoaXMudFNoaWZ0W2xpbmVdID49IHRoaXMuZU1hcmtzW2xpbmVdO1xufTtcblxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcEVtcHR5TGluZXMgPSBmdW5jdGlvbiBza2lwRW1wdHlMaW5lcyhmcm9tKSB7XG4gIGZvciAodmFyIG1heCA9IHRoaXMubGluZU1heDsgZnJvbSA8IG1heDsgZnJvbSsrKSB7XG4gICAgaWYgKHRoaXMuYk1hcmtzW2Zyb21dICsgdGhpcy50U2hpZnRbZnJvbV0gPCB0aGlzLmVNYXJrc1tmcm9tXSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBmcm9tO1xufTtcblxuLy8gU2tpcCBzcGFjZXMgZnJvbSBnaXZlbiBwb3NpdGlvbi5cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBTcGFjZXMgPSBmdW5jdGlvbiBza2lwU3BhY2VzKHBvcykge1xuICBmb3IgKHZhciBtYXggPSB0aGlzLnNyYy5sZW5ndGg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBpZiAodGhpcy5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDIwLyogc3BhY2UgKi8pIHsgYnJlYWs7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gU2tpcCBjaGFyIGNvZGVzIGZyb20gZ2l2ZW4gcG9zaXRpb25cblN0YXRlQmxvY2sucHJvdG90eXBlLnNraXBDaGFycyA9IGZ1bmN0aW9uIHNraXBDaGFycyhwb3MsIGNvZGUpIHtcbiAgZm9yICh2YXIgbWF4ID0gdGhpcy5zcmMubGVuZ3RoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgaWYgKHRoaXMuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gY29kZSkgeyBicmVhazsgfVxuICB9XG4gIHJldHVybiBwb3M7XG59O1xuXG4vLyBTa2lwIGNoYXIgY29kZXMgcmV2ZXJzZSBmcm9tIGdpdmVuIHBvc2l0aW9uIC0gMVxuU3RhdGVCbG9jay5wcm90b3R5cGUuc2tpcENoYXJzQmFjayA9IGZ1bmN0aW9uIHNraXBDaGFyc0JhY2socG9zLCBjb2RlLCBtaW4pIHtcbiAgaWYgKHBvcyA8PSBtaW4pIHsgcmV0dXJuIHBvczsgfVxuXG4gIHdoaWxlIChwb3MgPiBtaW4pIHtcbiAgICBpZiAoY29kZSAhPT0gdGhpcy5zcmMuY2hhckNvZGVBdCgtLXBvcykpIHsgcmV0dXJuIHBvcyArIDE7IH1cbiAgfVxuICByZXR1cm4gcG9zO1xufTtcblxuLy8gY3V0IGxpbmVzIHJhbmdlIGZyb20gc291cmNlLlxuU3RhdGVCbG9jay5wcm90b3R5cGUuZ2V0TGluZXMgPSBmdW5jdGlvbiBnZXRMaW5lcyhiZWdpbiwgZW5kLCBpbmRlbnQsIGtlZXBMYXN0TEYpIHtcbiAgdmFyIGksIGZpcnN0LCBsYXN0LCBxdWV1ZSwgc2hpZnQsXG4gICAgICBsaW5lID0gYmVnaW47XG5cbiAgaWYgKGJlZ2luID49IGVuZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIE9wdDogZG9uJ3QgdXNlIHB1c2ggcXVldWUgZm9yIHNpbmdsZSBsaW5lO1xuICBpZiAobGluZSArIDEgPT09IGVuZCkge1xuICAgIGZpcnN0ID0gdGhpcy5iTWFya3NbbGluZV0gKyBNYXRoLm1pbih0aGlzLnRTaGlmdFtsaW5lXSwgaW5kZW50KTtcbiAgICBsYXN0ID0ga2VlcExhc3RMRiA/IHRoaXMuYk1hcmtzW2VuZF0gOiB0aGlzLmVNYXJrc1tlbmQgLSAxXTtcbiAgICByZXR1cm4gdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICB9XG5cbiAgcXVldWUgPSBuZXcgQXJyYXkoZW5kIC0gYmVnaW4pO1xuXG4gIGZvciAoaSA9IDA7IGxpbmUgPCBlbmQ7IGxpbmUrKywgaSsrKSB7XG4gICAgc2hpZnQgPSB0aGlzLnRTaGlmdFtsaW5lXTtcbiAgICBpZiAoc2hpZnQgPiBpbmRlbnQpIHsgc2hpZnQgPSBpbmRlbnQ7IH1cbiAgICBpZiAoc2hpZnQgPCAwKSB7IHNoaWZ0ID0gMDsgfVxuXG4gICAgZmlyc3QgPSB0aGlzLmJNYXJrc1tsaW5lXSArIHNoaWZ0O1xuXG4gICAgaWYgKGxpbmUgKyAxIDwgZW5kIHx8IGtlZXBMYXN0TEYpIHtcbiAgICAgIC8vIE5vIG5lZWQgZm9yIGJvdW5kcyBjaGVjayBiZWNhdXNlIHdlIGhhdmUgZmFrZSBlbnRyeSBvbiB0YWlsLlxuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHRoaXMuZU1hcmtzW2xpbmVdO1xuICAgIH1cblxuICAgIHF1ZXVlW2ldID0gdGhpcy5zcmMuc2xpY2UoZmlyc3QsIGxhc3QpO1xuICB9XG5cbiAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlQmxvY2s7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9zdGF0ZV9ibG9jay5qc1xuICoqIG1vZHVsZSBpZCA9IDIzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gQ29kZSBibG9jayAoNCBzcGFjZXMgcGFkZGVkKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb2RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUvKiwgc2lsZW50Ki8pIHtcbiAgdmFyIG5leHRMaW5lLCBsYXN0O1xuXG4gIGlmIChzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA8IDQpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdCA9IG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICB3aGlsZSAobmV4dExpbmUgPCBlbmRMaW5lKSB7XG4gICAgaWYgKHN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgICBuZXh0TGluZSsrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIC0gc3RhdGUuYmxrSW5kZW50ID49IDQpIHtcbiAgICAgIG5leHRMaW5lKys7XG4gICAgICBsYXN0ID0gbmV4dExpbmU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gbmV4dExpbmU7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnY29kZScsXG4gICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoc3RhcnRMaW5lLCBsYXN0LCA0ICsgc3RhdGUuYmxrSW5kZW50LCB0cnVlKSxcbiAgICBibG9jazogdHJ1ZSxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svY29kZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gZmVuY2VzIChgYGAgbGFuZywgfn5+IGxhbmcpXG5cbid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZlbmNlcyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG1hcmtlciwgbGVuLCBwYXJhbXMsIG5leHRMaW5lLCBtZW0sXG4gICAgICBoYXZlRW5kTWFya2VyID0gZmFsc2UsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyArIDMgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLyAmJiBtYXJrZXIgIT09IDB4NjAgLyogYCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHNjYW4gbWFya2VyIGxlbmd0aFxuICBtZW0gPSBwb3M7XG4gIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG5cbiAgbGVuID0gcG9zIC0gbWVtO1xuXG4gIGlmIChsZW4gPCAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBhcmFtcyA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCkudHJpbSgpO1xuXG4gIGlmIChwYXJhbXMuaW5kZXhPZignYCcpID49IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gU2luY2Ugc3RhcnQgaXMgZm91bmQsIHdlIGNhbiByZXBvcnQgc3VjY2VzcyBoZXJlIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2VhcmNoIGVuZCBvZiBibG9ja1xuICBuZXh0TGluZSA9IHN0YXJ0TGluZTtcblxuICBmb3IgKDs7KSB7XG4gICAgbmV4dExpbmUrKztcbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkge1xuICAgICAgLy8gdW5jbG9zZWQgYmxvY2sgc2hvdWxkIGJlIGF1dG9jbG9zZWQgYnkgZW5kIG9mIGRvY3VtZW50LlxuICAgICAgLy8gYWxzbyBibG9jayBzZWVtcyB0byBiZSBhdXRvY2xvc2VkIGJ5IGVuZCBvZiBwYXJlbnRcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBvcyA9IG1lbSA9IHN0YXRlLmJNYXJrc1tuZXh0TGluZV0gKyBzdGF0ZS50U2hpZnRbbmV4dExpbmVdO1xuICAgIG1heCA9IHN0YXRlLmVNYXJrc1tuZXh0TGluZV07XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICAgIC8vIG5vbi1lbXB0eSBsaW5lIHdpdGggbmVnYXRpdmUgaW5kZW50IHNob3VsZCBzdG9wIHRoZSBsaXN0OlxuICAgICAgLy8gLSBgYGBcbiAgICAgIC8vICB0ZXN0XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gbWFya2VyKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+PSA0KSB7XG4gICAgICAvLyBjbG9zaW5nIGZlbmNlIHNob3VsZCBiZSBpbmRlbnRlZCBsZXNzIHRoYW4gNCBzcGFjZXNcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHBvcyA9IHN0YXRlLnNraXBDaGFycyhwb3MsIG1hcmtlcik7XG5cbiAgICAvLyBjbG9zaW5nIGNvZGUgZmVuY2UgbXVzdCBiZSBhdCBsZWFzdCBhcyBsb25nIGFzIHRoZSBvcGVuaW5nIG9uZVxuICAgIGlmIChwb3MgLSBtZW0gPCBsZW4pIHsgY29udGludWU7IH1cblxuICAgIC8vIG1ha2Ugc3VyZSB0YWlsIGhhcyBzcGFjZXMgb25seVxuICAgIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICAgIGlmIChwb3MgPCBtYXgpIHsgY29udGludWU7IH1cblxuICAgIGhhdmVFbmRNYXJrZXIgPSB0cnVlO1xuICAgIC8vIGZvdW5kIVxuICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gSWYgYSBmZW5jZSBoYXMgaGVhZGluZyBzcGFjZXMsIHRoZXkgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSBpdHMgaW5uZXIgYmxvY2tcbiAgbGVuID0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lICsgKGhhdmVFbmRNYXJrZXIgPyAxIDogMCk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZmVuY2UnLFxuICAgIHBhcmFtczogcGFyYW1zLFxuICAgIGNvbnRlbnQ6IHN0YXRlLmdldExpbmVzKHN0YXJ0TGluZSArIDEsIG5leHRMaW5lLCBsZW4sIHRydWUpLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9mZW5jZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIEJsb2NrIHF1b3Rlc1xuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBibG9ja3F1b3RlKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbmV4dExpbmUsIGxhc3RMaW5lRW1wdHksIG9sZFRTaGlmdCwgb2xkQk1hcmtzLCBvbGRJbmRlbnQsIG9sZFBhcmVudFR5cGUsIGxpbmVzLFxuICAgICAgdGVybWluYXRvclJ1bGVzLFxuICAgICAgaSwgbCwgdGVybWluYXRlLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY2hlY2sgdGhlIGJsb2NrIHF1b3RlIG1hcmtlclxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKyspICE9PSAweDNFLyogPiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIHdlIGtub3cgdGhhdCBpdCdzIGdvaW5nIHRvIGJlIGEgdmFsaWQgYmxvY2txdW90ZSxcbiAgLy8gc28gbm8gcG9pbnQgdHJ5aW5nIHRvIGZpbmQgdGhlIGVuZCBvZiBpdCBpbiBzaWxlbnQgbW9kZVxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gc2tpcCBvbmUgb3B0aW9uYWwgc3BhY2UgYWZ0ZXIgJz4nXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgb2xkSW5kZW50ID0gc3RhdGUuYmxrSW5kZW50O1xuICBzdGF0ZS5ibGtJbmRlbnQgPSAwO1xuXG4gIG9sZEJNYXJrcyA9IFsgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gXTtcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBwb3M7XG5cbiAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBhbiBlbXB0eSBibG9ja3F1b3RlXG4gIHBvcyA9IHBvcyA8IG1heCA/IHN0YXRlLnNraXBTcGFjZXMocG9zKSA6IHBvcztcbiAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgb2xkVFNoaWZ0ID0gWyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSBdO1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuXG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygnYmxvY2txdW90ZScpO1xuXG4gIC8vIFNlYXJjaCB0aGUgZW5kIG9mIHRoZSBibG9ja1xuICAvL1xuICAvLyBCbG9jayBlbmRzIHdpdGggZWl0aGVyOlxuICAvLyAgMS4gYW4gZW1wdHkgbGluZSBvdXRzaWRlOlxuICAvLyAgICAgYGBgXG4gIC8vICAgICA+IHRlc3RcbiAgLy9cbiAgLy8gICAgIGBgYFxuICAvLyAgMi4gYW4gZW1wdHkgbGluZSBpbnNpZGU6XG4gIC8vICAgICBgYGBcbiAgLy8gICAgID5cbiAgLy8gICAgIHRlc3RcbiAgLy8gICAgIGBgYFxuICAvLyAgMy4gYW5vdGhlciB0YWdcbiAgLy8gICAgIGBgYFxuICAvLyAgICAgPiB0ZXN0XG4gIC8vICAgICAgLSAtIC1cbiAgLy8gICAgIGBgYFxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gICAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRMaW5lXTtcblxuICAgIGlmIChwb3MgPj0gbWF4KSB7XG4gICAgICAvLyBDYXNlIDE6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoaXMgbGluZSBpcyBlbXB0eS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKykgPT09IDB4M0UvKiA+ICovKSB7XG4gICAgICAvLyBUaGlzIGxpbmUgaXMgaW5zaWRlIHRoZSBibG9ja3F1b3RlLlxuXG4gICAgICAvLyBza2lwIG9uZSBvcHRpb25hbCBzcGFjZSBhZnRlciAnPidcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHBvcysrOyB9XG5cbiAgICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgICAgc3RhdGUuYk1hcmtzW25leHRMaW5lXSA9IHBvcztcblxuICAgICAgcG9zID0gcG9zIDwgbWF4ID8gc3RhdGUuc2tpcFNwYWNlcyhwb3MpIDogcG9zO1xuICAgICAgbGFzdExpbmVFbXB0eSA9IHBvcyA+PSBtYXg7XG5cbiAgICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuICAgICAgc3RhdGUudFNoaWZ0W25leHRMaW5lXSA9IHBvcyAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBDYXNlIDI6IGxpbmUgaXMgbm90IGluc2lkZSB0aGUgYmxvY2txdW90ZSwgYW5kIHRoZSBsYXN0IGxpbmUgd2FzIGVtcHR5LlxuICAgIGlmIChsYXN0TGluZUVtcHR5KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBDYXNlIDM6IGFub3RoZXIgdGFnIGZvdW5kLlxuICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgIGZvciAoaSA9IDAsIGwgPSB0ZXJtaW5hdG9yUnVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGVybWluYXRvclJ1bGVzW2ldKHN0YXRlLCBuZXh0TGluZSwgZW5kTGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXJtaW5hdGUpIHsgYnJlYWs7IH1cblxuICAgIG9sZEJNYXJrcy5wdXNoKHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pO1xuICAgIG9sZFRTaGlmdC5wdXNoKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0pO1xuXG4gICAgLy8gQSBuZWdhdGl2ZSBudW1iZXIgbWVhbnMgdGhhdCB0aGlzIGlzIGEgcGFyYWdyYXBoIGNvbnRpbnVhdGlvbjtcbiAgICAvL1xuICAgIC8vIEFueSBuZWdhdGl2ZSBudW1iZXIgd2lsbCBkbyB0aGUgam9iIGhlcmUsIGJ1dCBpdCdzIGJldHRlciBmb3IgaXRcbiAgICAvLyB0byBiZSBsYXJnZSBlbm91Z2ggdG8gbWFrZSBhbnkgYnVncyBvYnZpb3VzLlxuICAgIHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPSAtMTMzNztcbiAgfVxuXG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2Jsb2NrcXVvdGUnO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Jsb2NrcXVvdGVfb3BlbicsXG4gICAgbGluZXM6IGxpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcbiAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIG5leHRMaW5lKTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdibG9ja3F1b3RlX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgc3RhdGUucGFyZW50VHlwZSA9IG9sZFBhcmVudFR5cGU7XG4gIGxpbmVzWzFdID0gc3RhdGUubGluZTtcblxuICAvLyBSZXN0b3JlIG9yaWdpbmFsIHRTaGlmdDsgdGhpcyBtaWdodCBub3QgYmUgbmVjZXNzYXJ5IHNpbmNlIHRoZSBwYXJzZXJcbiAgLy8gaGFzIGFscmVhZHkgYmVlbiBoZXJlLCBidXQganVzdCB0byBtYWtlIHN1cmUgd2UgY2FuIGRvIHRoYXQuXG4gIGZvciAoaSA9IDA7IGkgPCBvbGRUU2hpZnQubGVuZ3RoOyBpKyspIHtcbiAgICBzdGF0ZS5iTWFya3NbaSArIHN0YXJ0TGluZV0gPSBvbGRCTWFya3NbaV07XG4gICAgc3RhdGUudFNoaWZ0W2kgKyBzdGFydExpbmVdID0gb2xkVFNoaWZ0W2ldO1xuICB9XG4gIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9ibG9ja3F1b3RlLmpzXG4gKiogbW9kdWxlIGlkID0gMjQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBIb3Jpem9udGFsIHJ1bGVcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHIoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBtYXJrZXIsIGNudCwgY2gsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIHBvcyArPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcblxuICBpZiAocG9zID4gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICAvLyBDaGVjayBociBtYXJrZXJcbiAgaWYgKG1hcmtlciAhPT0gMHgyQS8qICogKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIG1hcmtlciAhPT0gMHg1Ri8qIF8gKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBtYXJrZXJzIGNhbiBiZSBtaXhlZCB3aXRoIHNwYWNlcywgYnV0IHRoZXJlIHNob3VsZCBiZSBhdCBsZWFzdCAzIG9uZVxuXG4gIGNudCA9IDE7XG4gIHdoaWxlIChwb3MgPCBtYXgpIHtcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcbiAgICBpZiAoY2ggIT09IG1hcmtlciAmJiBjaCAhPT0gMHgyMC8qIHNwYWNlICovKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChjaCA9PT0gbWFya2VyKSB7IGNudCsrOyB9XG4gIH1cblxuICBpZiAoY250IDwgMykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSArIDE7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnaHInLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9oci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gTGlzdHNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIFNlYXJjaCBgWy0rKl1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFydGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkge1xuICB2YXIgbWFya2VyLCBwb3MsIG1heDtcblxuICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICBpZiAocG9zID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG4gIC8vIENoZWNrIGJ1bGxldFxuICBpZiAobWFya2VyICE9PSAweDJBLyogKiAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJELyogLSAqLyAmJlxuICAgICAgbWFya2VyICE9PSAweDJCLyogKyAqLykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyMCkge1xuICAgIC8vIFwiIDEudGVzdCBcIiAtIGlzIG5vdCBhIGxpc3QgaXRlbVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbi8vIFNlYXJjaCBgXFxkK1suKV1bXFxuIF1gLCByZXR1cm5zIG5leHQgcG9zIGFydGVyIG1hcmtlciBvbiBzdWNjZXNzXG4vLyBvciAtMSBvbiBmYWlsLlxuZnVuY3Rpb24gc2tpcE9yZGVyZWRMaXN0TWFya2VyKHN0YXRlLCBzdGFydExpbmUpIHtcbiAgdmFyIGNoLFxuICAgICAgcG9zID0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gKyBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdO1xuXG4gIGlmIChwb3MgKyAxID49IG1heCkgeyByZXR1cm4gLTE7IH1cblxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcysrKTtcblxuICBpZiAoY2ggPCAweDMwLyogMCAqLyB8fCBjaCA+IDB4MzkvKiA5ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGZvciAoOzspIHtcbiAgICAvLyBFT0wgLT4gZmFpbFxuICAgIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiAtMTsgfVxuXG4gICAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MrKyk7XG5cbiAgICBpZiAoY2ggPj0gMHgzMC8qIDAgKi8gJiYgY2ggPD0gMHgzOS8qIDkgKi8pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGZvdW5kIHZhbGlkIG1hcmtlclxuICAgIGlmIChjaCA9PT0gMHgyOS8qICkgKi8gfHwgY2ggPT09IDB4MmUvKiAuICovKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgyMC8qIHNwYWNlICovKSB7XG4gICAgLy8gXCIgMS50ZXN0IFwiIC0gaXMgbm90IGEgbGlzdCBpdGVtXG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHJldHVybiBwb3M7XG59XG5cbmZ1bmN0aW9uIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGlkeCkge1xuICB2YXIgaSwgbCxcbiAgICAgIGxldmVsID0gc3RhdGUubGV2ZWwgKyAyO1xuXG4gIGZvciAoaSA9IGlkeCArIDIsIGwgPSBzdGF0ZS50b2tlbnMubGVuZ3RoIC0gMjsgaSA8IGw7IGkrKykge1xuICAgIGlmIChzdGF0ZS50b2tlbnNbaV0ubGV2ZWwgPT09IGxldmVsICYmIHN0YXRlLnRva2Vuc1tpXS50eXBlID09PSAncGFyYWdyYXBoX29wZW4nKSB7XG4gICAgICBzdGF0ZS50b2tlbnNbaSArIDJdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIHN0YXRlLnRva2Vuc1tpXS50aWdodCA9IHRydWU7XG4gICAgICBpICs9IDI7XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0KHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgbmV4dExpbmUsXG4gICAgICBpbmRlbnQsXG4gICAgICBvbGRUU2hpZnQsXG4gICAgICBvbGRJbmRlbnQsXG4gICAgICBvbGRUaWdodCxcbiAgICAgIG9sZFBhcmVudFR5cGUsXG4gICAgICBzdGFydCxcbiAgICAgIHBvc0FmdGVyTWFya2VyLFxuICAgICAgbWF4LFxuICAgICAgaW5kZW50QWZ0ZXJNYXJrZXIsXG4gICAgICBtYXJrZXJWYWx1ZSxcbiAgICAgIG1hcmtlckNoYXJDb2RlLFxuICAgICAgaXNPcmRlcmVkLFxuICAgICAgY29udGVudFN0YXJ0LFxuICAgICAgbGlzdFRva0lkeCxcbiAgICAgIHByZXZFbXB0eUVuZCxcbiAgICAgIGxpc3RMaW5lcyxcbiAgICAgIGl0ZW1MaW5lcyxcbiAgICAgIHRpZ2h0ID0gdHJ1ZSxcbiAgICAgIHRlcm1pbmF0b3JSdWxlcyxcbiAgICAgIGksIGwsIHRlcm1pbmF0ZTtcblxuICAvLyBEZXRlY3QgbGlzdCB0eXBlIGFuZCBwb3NpdGlvbiBhZnRlciBtYXJrZXJcbiAgaWYgKChwb3NBZnRlck1hcmtlciA9IHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSkgPj0gMCkge1xuICAgIGlzT3JkZXJlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoKHBvc0FmdGVyTWFya2VyID0gc2tpcEJ1bGxldExpc3RNYXJrZXIoc3RhdGUsIHN0YXJ0TGluZSkpID49IDApIHtcbiAgICBpc09yZGVyZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFdlIHNob3VsZCB0ZXJtaW5hdGUgbGlzdCBvbiBzdHlsZSBjaGFuZ2UuIFJlbWVtYmVyIGZpcnN0IG9uZSB0byBjb21wYXJlLlxuICBtYXJrZXJDaGFyQ29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvc0FmdGVyTWFya2VyIC0gMSk7XG5cbiAgLy8gRm9yIHZhbGlkYXRpb24gbW9kZSB3ZSBjYW4gdGVybWluYXRlIGltbWVkaWF0ZWx5XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAvLyBTdGFydCBsaXN0XG4gIGxpc3RUb2tJZHggPSBzdGF0ZS50b2tlbnMubGVuZ3RoO1xuXG4gIGlmIChpc09yZGVyZWQpIHtcbiAgICBzdGFydCA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gICAgbWFya2VyVmFsdWUgPSBOdW1iZXIoc3RhdGUuc3JjLnN1YnN0cihzdGFydCwgcG9zQWZ0ZXJNYXJrZXIgLSBzdGFydCAtIDEpKTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdvcmRlcmVkX2xpc3Rfb3BlbicsXG4gICAgICBvcmRlcjogbWFya2VyVmFsdWUsXG4gICAgICBsaW5lczogbGlzdExpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgfSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnYnVsbGV0X2xpc3Rfb3BlbicsXG4gICAgICBsaW5lczogbGlzdExpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgfSk7XG4gIH1cblxuICAvL1xuICAvLyBJdGVyYXRlIGxpc3QgaXRlbXNcbiAgLy9cblxuICBuZXh0TGluZSA9IHN0YXJ0TGluZTtcbiAgcHJldkVtcHR5RW5kID0gZmFsc2U7XG4gIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygnbGlzdCcpO1xuXG4gIHdoaWxlIChuZXh0TGluZSA8IGVuZExpbmUpIHtcbiAgICBjb250ZW50U3RhcnQgPSBzdGF0ZS5za2lwU3BhY2VzKHBvc0FmdGVyTWFya2VyKTtcbiAgICBtYXggPSBzdGF0ZS5lTWFya3NbbmV4dExpbmVdO1xuXG4gICAgaWYgKGNvbnRlbnRTdGFydCA+PSBtYXgpIHtcbiAgICAgIC8vIHRyaW1taW5nIHNwYWNlIGluIFwiLSAgICBcXG4gIDNcIiBjYXNlLCBpbmRlbnQgaXMgMSBoZXJlXG4gICAgICBpbmRlbnRBZnRlck1hcmtlciA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGVudEFmdGVyTWFya2VyID0gY29udGVudFN0YXJ0IC0gcG9zQWZ0ZXJNYXJrZXI7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gNCBzcGFjZXMsIHRoZSBpbmRlbnQgaXMgMVxuICAgIC8vICh0aGUgcmVzdCBpcyBqdXN0IGluZGVudGVkIGNvZGUgYmxvY2spXG4gICAgaWYgKGluZGVudEFmdGVyTWFya2VyID4gNCkgeyBpbmRlbnRBZnRlck1hcmtlciA9IDE7IH1cblxuICAgIC8vIElmIGluZGVudCBpcyBsZXNzIHRoYW4gMSwgYXNzdW1lIHRoYXQgaXQncyBvbmUsIGV4YW1wbGU6XG4gICAgLy8gIFwiLVxcbiAgdGVzdFwiXG4gICAgaWYgKGluZGVudEFmdGVyTWFya2VyIDwgMSkgeyBpbmRlbnRBZnRlck1hcmtlciA9IDE7IH1cblxuICAgIC8vIFwiICAtICB0ZXN0XCJcbiAgICAvLyAgXl5eXl4gLSBjYWxjdWxhdGluZyB0b3RhbCBsZW5ndGggb2YgdGhpcyB0aGluZ1xuICAgIGluZGVudCA9IChwb3NBZnRlck1hcmtlciAtIHN0YXRlLmJNYXJrc1tuZXh0TGluZV0pICsgaW5kZW50QWZ0ZXJNYXJrZXI7XG5cbiAgICAvLyBSdW4gc3VicGFyc2VyICYgd3JpdGUgdG9rZW5zXG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2xpc3RfaXRlbV9vcGVuJyxcbiAgICAgIGxpbmVzOiBpdGVtTGluZXMgPSBbIHN0YXJ0TGluZSwgMCBdLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgICB9KTtcblxuICAgIG9sZEluZGVudCA9IHN0YXRlLmJsa0luZGVudDtcbiAgICBvbGRUaWdodCA9IHN0YXRlLnRpZ2h0O1xuICAgIG9sZFRTaGlmdCA9IHN0YXRlLnRTaGlmdFtzdGFydExpbmVdO1xuICAgIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICAgIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdID0gY29udGVudFN0YXJ0IC0gc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV07XG4gICAgc3RhdGUuYmxrSW5kZW50ID0gaW5kZW50O1xuICAgIHN0YXRlLnRpZ2h0ID0gdHJ1ZTtcbiAgICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2xpc3QnO1xuXG4gICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHRydWUpO1xuXG4gICAgLy8gSWYgYW55IG9mIGxpc3QgaXRlbSBpcyB0aWdodCwgbWFyayBsaXN0IGFzIHRpZ2h0XG4gICAgaWYgKCFzdGF0ZS50aWdodCB8fCBwcmV2RW1wdHlFbmQpIHtcbiAgICAgIHRpZ2h0ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIEl0ZW0gYmVjb21lIGxvb3NlIGlmIGZpbmlzaCB3aXRoIGVtcHR5IGxpbmUsXG4gICAgLy8gYnV0IHdlIHNob3VsZCBmaWx0ZXIgbGFzdCBlbGVtZW50LCBiZWNhdXNlIGl0IG1lYW5zIGxpc3QgZmluaXNoXG4gICAgcHJldkVtcHR5RW5kID0gKHN0YXRlLmxpbmUgLSBzdGFydExpbmUpID4gMSAmJiBzdGF0ZS5pc0VtcHR5KHN0YXRlLmxpbmUgLSAxKTtcblxuICAgIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcbiAgICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgICBzdGF0ZS50aWdodCA9IG9sZFRpZ2h0O1xuICAgIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuXG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2xpc3RfaXRlbV9jbG9zZScsXG4gICAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICAgIH0pO1xuXG4gICAgbmV4dExpbmUgPSBzdGFydExpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGl0ZW1MaW5lc1sxXSA9IG5leHRMaW5lO1xuICAgIGNvbnRlbnRTdGFydCA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdO1xuXG4gICAgaWYgKG5leHRMaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cblxuICAgIGlmIChzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBUcnkgdG8gY2hlY2sgaWYgbGlzdCBpcyB0ZXJtaW5hdGVkIG9yIGNvbnRpbnVlZC5cbiAgICAvL1xuICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrOyB9XG5cbiAgICAvLyBmYWlsIGlmIHRlcm1pbmF0aW5nIGJsb2NrIGZvdW5kXG4gICAgdGVybWluYXRlID0gZmFsc2U7XG4gICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXJtaW5hdG9yUnVsZXNbaV0oc3RhdGUsIG5leHRMaW5lLCBlbmRMaW5lLCB0cnVlKSkge1xuICAgICAgICB0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuXG4gICAgLy8gZmFpbCBpZiBsaXN0IGhhcyBhbm90aGVyIHR5cGVcbiAgICBpZiAoaXNPcmRlcmVkKSB7XG4gICAgICBwb3NBZnRlck1hcmtlciA9IHNraXBPcmRlcmVkTGlzdE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICAgICAgaWYgKHBvc0FmdGVyTWFya2VyIDwgMCkgeyBicmVhazsgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3NBZnRlck1hcmtlciA9IHNraXBCdWxsZXRMaXN0TWFya2VyKHN0YXRlLCBuZXh0TGluZSk7XG4gICAgICBpZiAocG9zQWZ0ZXJNYXJrZXIgPCAwKSB7IGJyZWFrOyB9XG4gICAgfVxuXG4gICAgaWYgKG1hcmtlckNoYXJDb2RlICE9PSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3NBZnRlck1hcmtlciAtIDEpKSB7IGJyZWFrOyB9XG4gIH1cblxuICAvLyBGaW5pbGl6ZSBsaXN0XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiBpc09yZGVyZWQgPyAnb3JkZXJlZF9saXN0X2Nsb3NlJyA6ICdidWxsZXRfbGlzdF9jbG9zZScsXG4gICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgfSk7XG4gIGxpc3RMaW5lc1sxXSA9IG5leHRMaW5lO1xuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcblxuICAvLyBtYXJrIHBhcmFncmFwaHMgdGlnaHQgaWYgbmVlZGVkXG4gIGlmICh0aWdodCkge1xuICAgIG1hcmtUaWdodFBhcmFncmFwaHMoc3RhdGUsIGxpc3RUb2tJZHgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svbGlzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUHJvY2VzcyBmb290bm90ZSByZWZlcmVuY2UgbGlzdFxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb290bm90ZShzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIG9sZEJNYXJrLCBvbGRUU2hpZnQsIG9sZFBhcmVudFR5cGUsIHBvcywgbGFiZWwsXG4gICAgICBzdGFydCA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0sXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3Nbc3RhcnRMaW5lXTtcblxuICAvLyBsaW5lIHNob3VsZCBiZSBhdCBsZWFzdCA1IGNoYXJzIC0gXCJbXnhdOlwiXG4gIGlmIChzdGFydCArIDQgPiBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDVFLyogXiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBmb3IgKHBvcyA9IHN0YXJ0ICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXJ0ICsgMikgeyByZXR1cm4gZmFsc2U7IH0gLy8gbm8gZW1wdHkgZm9vdG5vdGUgbGFiZWxzXG4gIGlmIChwb3MgKyAxID49IG1heCB8fCBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3BvcykgIT09IDB4M0EgLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBwb3MrKztcblxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMpIHsgc3RhdGUuZW52LmZvb3Rub3RlcyA9IHt9OyB9XG4gIGlmICghc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzKSB7IHN0YXRlLmVudi5mb290bm90ZXMucmVmcyA9IHt9OyB9XG4gIGxhYmVsID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMiwgcG9zIC0gMik7XG4gIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPSAtMTtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2Zvb3Rub3RlX3JlZmVyZW5jZV9vcGVuJyxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsKytcbiAgfSk7XG5cbiAgb2xkQk1hcmsgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXTtcbiAgb2xkVFNoaWZ0ID0gc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG4gIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSA9IHN0YXRlLnNraXBTcGFjZXMocG9zKSAtIHBvcztcbiAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gPSBwb3M7XG4gIHN0YXRlLmJsa0luZGVudCArPSA0O1xuICBzdGF0ZS5wYXJlbnRUeXBlID0gJ2Zvb3Rub3RlJztcblxuICBpZiAoc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHtcbiAgICBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXSArPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgc3RhdGUuYk1hcmtzW3N0YXJ0TGluZV0gLT0gc3RhdGUuYmxrSW5kZW50O1xuICB9XG5cbiAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHRydWUpO1xuXG4gIHN0YXRlLnBhcmVudFR5cGUgPSBvbGRQYXJlbnRUeXBlO1xuICBzdGF0ZS5ibGtJbmRlbnQgLT0gNDtcbiAgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV0gPSBvbGRUU2hpZnQ7XG4gIHN0YXRlLmJNYXJrc1tzdGFydExpbmVdID0gb2xkQk1hcms7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdmb290bm90ZV9yZWZlcmVuY2VfY2xvc2UnLFxuICAgIGxldmVsOiAtLXN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2Zvb3Rub3RlLmpzXG4gKiogbW9kdWxlIGlkID0gMjQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBoZWFkaW5nICgjLCAjIywgLi4uKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoZWFkaW5nKHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY2gsIGxldmVsLCB0bXAsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSArIHN0YXRlLnRTaGlmdFtzdGFydExpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV07XG5cbiAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgY2ggID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2ggIT09IDB4MjMvKiAjICovIHx8IHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgLy8gY291bnQgaGVhZGluZyBsZXZlbFxuICBsZXZlbCA9IDE7XG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoKytwb3MpO1xuICB3aGlsZSAoY2ggPT09IDB4MjMvKiAjICovICYmIHBvcyA8IG1heCAmJiBsZXZlbCA8PSA2KSB7XG4gICAgbGV2ZWwrKztcbiAgICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KCsrcG9zKTtcbiAgfVxuXG4gIGlmIChsZXZlbCA+IDYgfHwgKHBvcyA8IG1heCAmJiBjaCAhPT0gMHgyMC8qIHNwYWNlICovKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc2lsZW50KSB7IHJldHVybiB0cnVlOyB9XG5cbiAgLy8gTGV0J3MgY3V0IHRhaWxzIGxpa2UgJyAgICAjIyMgICcgZnJvbSB0aGUgZW5kIG9mIHN0cmluZ1xuXG4gIG1heCA9IHN0YXRlLnNraXBDaGFyc0JhY2sobWF4LCAweDIwLCBwb3MpOyAvLyBzcGFjZVxuICB0bXAgPSBzdGF0ZS5za2lwQ2hhcnNCYWNrKG1heCwgMHgyMywgcG9zKTsgLy8gI1xuICBpZiAodG1wID4gcG9zICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHRtcCAtIDEpID09PSAweDIwLyogc3BhY2UgKi8pIHtcbiAgICBtYXggPSB0bXA7XG4gIH1cblxuICBzdGF0ZS5saW5lID0gc3RhcnRMaW5lICsgMTtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICdoZWFkaW5nX29wZW4nLFxuICAgIGhMZXZlbDogbGV2ZWwsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIC8vIG9ubHkgaWYgaGVhZGVyIGlzIG5vdCBlbXB0eVxuICBpZiAocG9zIDwgbWF4KSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBjb250ZW50OiBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLnRyaW0oKSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCArIDEsXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICB9XG4gIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ2hlYWRpbmdfY2xvc2UnLCBoTGV2ZWw6IGxldmVsLCBsZXZlbDogc3RhdGUubGV2ZWwgfSk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svaGVhZGluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gbGhlYWRpbmcgKC0tLSwgPT09KVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaGVhZGluZyhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLyosIHNpbGVudCovKSB7XG4gIHZhciBtYXJrZXIsIHBvcywgbWF4LFxuICAgICAgbmV4dCA9IHN0YXJ0TGluZSArIDE7XG5cbiAgaWYgKG5leHQgPj0gZW5kTGluZSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0XSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBTY2FuIG5leHQgbGluZVxuXG4gIGlmIChzdGF0ZS50U2hpZnRbbmV4dF0gLSBzdGF0ZS5ibGtJbmRlbnQgPiAzKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tuZXh0XSArIHN0YXRlLnRTaGlmdFtuZXh0XTtcbiAgbWF4ID0gc3RhdGUuZU1hcmtzW25leHRdO1xuXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgaWYgKG1hcmtlciAhPT0gMHgyRC8qIC0gKi8gJiYgbWFya2VyICE9PSAweDNELyogPSAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBzdGF0ZS5za2lwQ2hhcnMocG9zLCBtYXJrZXIpO1xuXG4gIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMocG9zKTtcblxuICBpZiAocG9zIDwgbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXRlLmJNYXJrc1tzdGFydExpbmVdICsgc3RhdGUudFNoaWZ0W3N0YXJ0TGluZV07XG5cbiAgc3RhdGUubGluZSA9IG5leHQgKyAxO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2hlYWRpbmdfb3BlbicsXG4gICAgaExldmVsOiBtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIsXG4gICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2lubGluZScsXG4gICAgY29udGVudDogc3RhdGUuc3JjLnNsaWNlKHBvcywgc3RhdGUuZU1hcmtzW3N0YXJ0TGluZV0pLnRyaW0oKSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhdGUubGluZSAtIDEgXSxcbiAgICBjaGlsZHJlbjogW11cbiAgfSk7XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnaGVhZGluZ19jbG9zZScsXG4gICAgaExldmVsOiBtYXJrZXIgPT09IDB4M0QvKiA9ICovID8gMSA6IDIsXG4gICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2Jsb2NrL2xoZWFkaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMjQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBIVE1MIGJsb2NrXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgYmxvY2tfbmFtZXMgPSByZXF1aXJlKCcuLi9jb21tb24vaHRtbF9ibG9ja3MnKTtcblxuXG52YXIgSFRNTF9UQUdfT1BFTl9SRSA9IC9ePChbYS16QS1aXXsxLDE1fSlbXFxzXFwvPl0vO1xudmFyIEhUTUxfVEFHX0NMT1NFX1JFID0gL148XFwvKFthLXpBLVpdezEsMTV9KVtcXHM+XS87XG5cbmZ1bmN0aW9uIGlzTGV0dGVyKGNoKSB7XG4gIC8qZXNsaW50IG5vLWJpdHdpc2U6MCovXG4gIHZhciBsYyA9IGNoIHwgMHgyMDsgLy8gdG8gbG93ZXIgY2FzZVxuICByZXR1cm4gKGxjID49IDB4NjEvKiBhICovKSAmJiAobGMgPD0gMHg3YS8qIHogKi8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0bWxibG9jayhzdGF0ZSwgc3RhcnRMaW5lLCBlbmRMaW5lLCBzaWxlbnQpIHtcbiAgdmFyIGNoLCBtYXRjaCwgbmV4dExpbmUsXG4gICAgICBwb3MgPSBzdGF0ZS5iTWFya3Nbc3RhcnRMaW5lXSxcbiAgICAgIG1heCA9IHN0YXRlLmVNYXJrc1tzdGFydExpbmVdLFxuICAgICAgc2hpZnQgPSBzdGF0ZS50U2hpZnRbc3RhcnRMaW5lXTtcblxuICBwb3MgKz0gc2hpZnQ7XG5cbiAgaWYgKCFzdGF0ZS5vcHRpb25zLmh0bWwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKHNoaWZ0ID4gMyB8fCBwb3MgKyAyID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgzQy8qIDwgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgY2ggPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MgKyAxKTtcblxuICBpZiAoY2ggPT09IDB4MjEvKiAhICovIHx8IGNoID09PSAweDNGLyogPyAqLykge1xuICAgIC8vIERpcmVjdGl2ZSBzdGFydCAvIGNvbW1lbnQgc3RhcnQgLyBwcm9jZXNzaW5nIGluc3RydWN0aW9uIHN0YXJ0XG4gICAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4MkYvKiAvICovIHx8IGlzTGV0dGVyKGNoKSkge1xuXG4gICAgLy8gUHJvYmFibHkgc3RhcnQgb3IgZW5kIG9mIHRhZ1xuICAgIGlmIChjaCA9PT0gMHgyRi8qIFxcICovKSB7XG4gICAgICAvLyBjbG9zaW5nIHRhZ1xuICAgICAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zLCBtYXgpLm1hdGNoKEhUTUxfVEFHX0NMT1NFX1JFKTtcbiAgICAgIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG9wZW5pbmcgdGFnXG4gICAgICBtYXRjaCA9IHN0YXRlLnNyYy5zbGljZShwb3MsIG1heCkubWF0Y2goSFRNTF9UQUdfT1BFTl9SRSk7XG4gICAgICBpZiAoIW1hdGNoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGFnIG5hbWUgaXMgdmFsaWRcbiAgICBpZiAoYmxvY2tfbmFtZXNbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKV0gIT09IHRydWUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgaWYgKHNpbGVudCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gSWYgd2UgYXJlIGhlcmUgLSB3ZSBkZXRlY3RlZCBIVE1MIGJsb2NrLlxuICAvLyBMZXQncyByb2xsIGRvd24gdGlsbCBlbXB0eSBsaW5lIChibG9jayBlbmQpLlxuICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDE7XG4gIHdoaWxlIChuZXh0TGluZSA8IHN0YXRlLmxpbmVNYXggJiYgIXN0YXRlLmlzRW1wdHkobmV4dExpbmUpKSB7XG4gICAgbmV4dExpbmUrKztcbiAgfVxuXG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdodG1sYmxvY2snLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXRlLmxpbmUgXSxcbiAgICBjb250ZW50OiBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCAwLCB0cnVlKVxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9odG1sYmxvY2suanNcbiAqKiBtb2R1bGUgaWQgPSAyNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIEdGTSB0YWJsZSwgbm9uLXN0YW5kYXJkXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBnZXRMaW5lKHN0YXRlLCBsaW5lKSB7XG4gIHZhciBwb3MgPSBzdGF0ZS5iTWFya3NbbGluZV0gKyBzdGF0ZS5ibGtJbmRlbnQsXG4gICAgICBtYXggPSBzdGF0ZS5lTWFya3NbbGluZV07XG5cbiAgcmV0dXJuIHN0YXRlLnNyYy5zdWJzdHIocG9zLCBtYXggLSBwb3MpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGFibGUoc3RhdGUsIHN0YXJ0TGluZSwgZW5kTGluZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgbGluZVRleHQsIHBvcywgaSwgbmV4dExpbmUsIHJvd3MsXG4gICAgICBhbGlnbnMsIHQsIHRhYmxlTGluZXMsIHRib2R5TGluZXM7XG5cbiAgLy8gc2hvdWxkIGhhdmUgYXQgbGVhc3QgdGhyZWUgbGluZXNcbiAgaWYgKHN0YXJ0TGluZSArIDIgPiBlbmRMaW5lKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIG5leHRMaW5lID0gc3RhcnRMaW5lICsgMTtcblxuICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBmaXJzdCBjaGFyYWN0ZXIgb2YgdGhlIHNlY29uZCBsaW5lIHNob3VsZCBiZSAnfCcgb3IgJy0nXG5cbiAgcG9zID0gc3RhdGUuYk1hcmtzW25leHRMaW5lXSArIHN0YXRlLnRTaGlmdFtuZXh0TGluZV07XG4gIGlmIChwb3MgPj0gc3RhdGUuZU1hcmtzW25leHRMaW5lXSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBjaCA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gIGlmIChjaCAhPT0gMHg3Qy8qIHwgKi8gJiYgY2ggIT09IDB4MkQvKiAtICovICYmIGNoICE9PSAweDNBLyogOiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsaW5lVGV4dCA9IGdldExpbmUoc3RhdGUsIHN0YXJ0TGluZSArIDEpO1xuICBpZiAoIS9eWy06fCBdKyQvLnRlc3QobGluZVRleHQpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHJvd3MgPSBsaW5lVGV4dC5zcGxpdCgnfCcpO1xuICBpZiAocm93cyA8PSAyKSB7IHJldHVybiBmYWxzZTsgfVxuICBhbGlnbnMgPSBbXTtcbiAgZm9yIChpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICB0ID0gcm93c1tpXS50cmltKCk7XG4gICAgaWYgKCF0KSB7XG4gICAgICAvLyBhbGxvdyBlbXB0eSBjb2x1bW5zIGJlZm9yZSBhbmQgYWZ0ZXIgdGFibGUsIGJ1dCBub3QgaW4gYmV0d2VlbiBjb2x1bW5zO1xuICAgICAgLy8gZS5nLiBhbGxvdyBgIHwtLS18IGAsIGRpc2FsbG93IGAgLS0tfHwtLS0gYFxuICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gcm93cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghL146Py0rOj8kLy50ZXN0KHQpKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmICh0LmNoYXJDb2RlQXQodC5sZW5ndGggLSAxKSA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGFsaWducy5wdXNoKHQuY2hhckNvZGVBdCgwKSA9PT0gMHgzQS8qIDogKi8gPyAnY2VudGVyJyA6ICdyaWdodCcpO1xuICAgIH0gZWxzZSBpZiAodC5jaGFyQ29kZUF0KDApID09PSAweDNBLyogOiAqLykge1xuICAgICAgYWxpZ25zLnB1c2goJ2xlZnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxpZ25zLnB1c2goJycpO1xuICAgIH1cbiAgfVxuXG4gIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgc3RhcnRMaW5lKS50cmltKCk7XG4gIGlmIChsaW5lVGV4dC5pbmRleE9mKCd8JykgPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxuICByb3dzID0gbGluZVRleHQucmVwbGFjZSgvXlxcfHxcXHwkL2csICcnKS5zcGxpdCgnfCcpO1xuICBpZiAoYWxpZ25zLmxlbmd0aCAhPT0gcm93cy5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIHRydWU7IH1cblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ3RhYmxlX29wZW4nLFxuICAgIGxpbmVzOiB0YWJsZUxpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICd0aGVhZF9vcGVuJyxcbiAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ3RyX29wZW4nLFxuICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhcnRMaW5lICsgMSBdLFxuICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gIH0pO1xuICBmb3IgKGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICd0aF9vcGVuJyxcbiAgICAgIGFsaWduOiBhbGlnbnNbaV0sXG4gICAgICBsaW5lczogWyBzdGFydExpbmUsIHN0YXJ0TGluZSArIDEgXSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgfSk7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICBjb250ZW50OiByb3dzW2ldLnRyaW0oKSxcbiAgICAgIGxpbmVzOiBbIHN0YXJ0TGluZSwgc3RhcnRMaW5lICsgMSBdLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfSk7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGhfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgfVxuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0cl9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0aGVhZF9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuXG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGJvZHlfb3BlbicsXG4gICAgbGluZXM6IHRib2R5TGluZXMgPSBbIHN0YXJ0TGluZSArIDIsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICBmb3IgKG5leHRMaW5lID0gc3RhcnRMaW5lICsgMjsgbmV4dExpbmUgPCBlbmRMaW5lOyBuZXh0TGluZSsrKSB7XG4gICAgaWYgKHN0YXRlLnRTaGlmdFtuZXh0TGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cblxuICAgIGxpbmVUZXh0ID0gZ2V0TGluZShzdGF0ZSwgbmV4dExpbmUpLnRyaW0oKTtcbiAgICBpZiAobGluZVRleHQuaW5kZXhPZignfCcpID09PSAtMSkgeyBicmVhazsgfVxuICAgIHJvd3MgPSBsaW5lVGV4dC5yZXBsYWNlKC9eXFx8fFxcfCQvZywgJycpLnNwbGl0KCd8Jyk7XG5cbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0cl9vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgZm9yIChpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHsgdHlwZTogJ3RkX29wZW4nLCBhbGlnbjogYWxpZ25zW2ldLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgIGNvbnRlbnQ6IHJvd3NbaV0ucmVwbGFjZSgvXlxcfD8gKnwgKlxcfD8kL2csICcnKSxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsLFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH0pO1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndGRfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG4gICAgc3RhdGUudG9rZW5zLnB1c2goeyB0eXBlOiAndHJfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgfVxuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0Ym9keV9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICBzdGF0ZS50b2tlbnMucHVzaCh7IHR5cGU6ICd0YWJsZV9jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuXG4gIHRhYmxlTGluZXNbMV0gPSB0Ym9keUxpbmVzWzFdID0gbmV4dExpbmU7XG4gIHN0YXRlLmxpbmUgPSBuZXh0TGluZTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svdGFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIERlZmluaXRpb24gbGlzdHNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIFNlYXJjaCBgWzp+XVtcXG4gXWAsIHJldHVybnMgbmV4dCBwb3MgYWZ0ZXIgbWFya2VyIG9uIHN1Y2Nlc3Ncbi8vIG9yIC0xIG9uIGZhaWwuXG5mdW5jdGlvbiBza2lwTWFya2VyKHN0YXRlLCBsaW5lKSB7XG4gIHZhciBwb3MsIG1hcmtlcixcbiAgICAgIHN0YXJ0ID0gc3RhdGUuYk1hcmtzW2xpbmVdICsgc3RhdGUudFNoaWZ0W2xpbmVdLFxuICAgICAgbWF4ID0gc3RhdGUuZU1hcmtzW2xpbmVdO1xuXG4gIGlmIChzdGFydCA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgLy8gQ2hlY2sgYnVsbGV0XG4gIG1hcmtlciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KyspO1xuICBpZiAobWFya2VyICE9PSAweDdFLyogfiAqLyAmJiBtYXJrZXIgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIHBvcyA9IHN0YXRlLnNraXBTcGFjZXMoc3RhcnQpO1xuXG4gIC8vIHJlcXVpcmUgc3BhY2UgYWZ0ZXIgXCI6XCJcbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIC0xOyB9XG5cbiAgLy8gbm8gZW1wdHkgZGVmaW5pdGlvbnMsIGUuZy4gXCIgIDogXCJcbiAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIC0xOyB9XG5cbiAgcmV0dXJuIHBvcztcbn1cblxuZnVuY3Rpb24gbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgaWR4KSB7XG4gIHZhciBpLCBsLFxuICAgICAgbGV2ZWwgPSBzdGF0ZS5sZXZlbCArIDI7XG5cbiAgZm9yIChpID0gaWR4ICsgMiwgbCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAyOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHN0YXRlLnRva2Vuc1tpXS5sZXZlbCA9PT0gbGV2ZWwgJiYgc3RhdGUudG9rZW5zW2ldLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicpIHtcbiAgICAgIHN0YXRlLnRva2Vuc1tpICsgMl0udGlnaHQgPSB0cnVlO1xuICAgICAgc3RhdGUudG9rZW5zW2ldLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIGkgKz0gMjtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZsaXN0KHN0YXRlLCBzdGFydExpbmUsIGVuZExpbmUsIHNpbGVudCkge1xuICB2YXIgY29udGVudFN0YXJ0LFxuICAgICAgZGRMaW5lLFxuICAgICAgZHRMaW5lLFxuICAgICAgaXRlbUxpbmVzLFxuICAgICAgbGlzdExpbmVzLFxuICAgICAgbGlzdFRva0lkeCxcbiAgICAgIG5leHRMaW5lLFxuICAgICAgb2xkSW5kZW50LFxuICAgICAgb2xkRERJbmRlbnQsXG4gICAgICBvbGRQYXJlbnRUeXBlLFxuICAgICAgb2xkVFNoaWZ0LFxuICAgICAgb2xkVGlnaHQsXG4gICAgICBwcmV2RW1wdHlFbmQsXG4gICAgICB0aWdodDtcblxuICBpZiAoc2lsZW50KSB7XG4gICAgLy8gcXVpcms6IHZhbGlkYXRpb24gbW9kZSB2YWxpZGF0ZXMgYSBkZCBibG9jayBvbmx5LCBub3QgYSB3aG9sZSBkZWZsaXN0XG4gICAgaWYgKHN0YXRlLmRkSW5kZW50IDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gc2tpcE1hcmtlcihzdGF0ZSwgc3RhcnRMaW5lKSA+PSAwO1xuICB9XG5cbiAgbmV4dExpbmUgPSBzdGFydExpbmUgKyAxO1xuICBpZiAoc3RhdGUuaXNFbXB0eShuZXh0TGluZSkpIHtcbiAgICBpZiAoKytuZXh0TGluZSA+IGVuZExpbmUpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIH1cblxuICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29udGVudFN0YXJ0ID0gc2tpcE1hcmtlcihzdGF0ZSwgbmV4dExpbmUpO1xuICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFN0YXJ0IGxpc3RcbiAgbGlzdFRva0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGg7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdkbF9vcGVuJyxcbiAgICBsaW5lczogbGlzdExpbmVzID0gWyBzdGFydExpbmUsIDAgXSxcbiAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICB9KTtcblxuICAvL1xuICAvLyBJdGVyYXRlIGxpc3QgaXRlbXNcbiAgLy9cblxuICBkdExpbmUgPSBzdGFydExpbmU7XG4gIGRkTGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIE9uZSBkZWZpbml0aW9uIGxpc3QgY2FuIGNvbnRhaW4gbXVsdGlwbGUgRFRzLFxuICAvLyBhbmQgb25lIERUIGNhbiBiZSBmb2xsb3dlZCBieSBtdWx0aXBsZSBERHMuXG4gIC8vXG4gIC8vIFRodXMsIHRoZXJlIGlzIHR3byBsb29wcyBoZXJlLCBhbmQgbGFiZWwgaXNcbiAgLy8gbmVlZGVkIHRvIGJyZWFrIG91dCBvZiB0aGUgc2Vjb25kIG9uZVxuICAvL1xuICAvKmVzbGludCBuby1sYWJlbHM6MCxibG9jay1zY29wZWQtdmFyOjAqL1xuICBPVVRFUjpcbiAgZm9yICg7Oykge1xuICAgIHRpZ2h0ID0gdHJ1ZTtcbiAgICBwcmV2RW1wdHlFbmQgPSBmYWxzZTtcblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdkdF9vcGVuJyxcbiAgICAgIGxpbmVzOiBbIGR0TGluZSwgZHRMaW5lIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuZ2V0TGluZXMoZHRMaW5lLCBkdExpbmUgKyAxLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCksXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgZHRMaW5lLCBkdExpbmUgXSxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH0pO1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdkdF9jbG9zZScsXG4gICAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICAgIH0pO1xuXG4gICAgZm9yICg7Oykge1xuICAgICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnZGRfb3BlbicsXG4gICAgICAgIGxpbmVzOiBpdGVtTGluZXMgPSBbIG5leHRMaW5lLCAwIF0sXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCsrXG4gICAgICB9KTtcblxuICAgICAgb2xkVGlnaHQgPSBzdGF0ZS50aWdodDtcbiAgICAgIG9sZERESW5kZW50ID0gc3RhdGUuZGRJbmRlbnQ7XG4gICAgICBvbGRJbmRlbnQgPSBzdGF0ZS5ibGtJbmRlbnQ7XG4gICAgICBvbGRUU2hpZnQgPSBzdGF0ZS50U2hpZnRbZGRMaW5lXTtcbiAgICAgIG9sZFBhcmVudFR5cGUgPSBzdGF0ZS5wYXJlbnRUeXBlO1xuICAgICAgc3RhdGUuYmxrSW5kZW50ID0gc3RhdGUuZGRJbmRlbnQgPSBzdGF0ZS50U2hpZnRbZGRMaW5lXSArIDI7XG4gICAgICBzdGF0ZS50U2hpZnRbZGRMaW5lXSA9IGNvbnRlbnRTdGFydCAtIHN0YXRlLmJNYXJrc1tkZExpbmVdO1xuICAgICAgc3RhdGUudGlnaHQgPSB0cnVlO1xuICAgICAgc3RhdGUucGFyZW50VHlwZSA9ICdkZWZsaXN0JztcblxuICAgICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlLCBkZExpbmUsIGVuZExpbmUsIHRydWUpO1xuXG4gICAgICAvLyBJZiBhbnkgb2YgbGlzdCBpdGVtIGlzIHRpZ2h0LCBtYXJrIGxpc3QgYXMgdGlnaHRcbiAgICAgIGlmICghc3RhdGUudGlnaHQgfHwgcHJldkVtcHR5RW5kKSB7XG4gICAgICAgIHRpZ2h0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBJdGVtIGJlY29tZSBsb29zZSBpZiBmaW5pc2ggd2l0aCBlbXB0eSBsaW5lLFxuICAgICAgLy8gYnV0IHdlIHNob3VsZCBmaWx0ZXIgbGFzdCBlbGVtZW50LCBiZWNhdXNlIGl0IG1lYW5zIGxpc3QgZmluaXNoXG4gICAgICBwcmV2RW1wdHlFbmQgPSAoc3RhdGUubGluZSAtIGRkTGluZSkgPiAxICYmIHN0YXRlLmlzRW1wdHkoc3RhdGUubGluZSAtIDEpO1xuXG4gICAgICBzdGF0ZS50U2hpZnRbZGRMaW5lXSA9IG9sZFRTaGlmdDtcbiAgICAgIHN0YXRlLnRpZ2h0ID0gb2xkVGlnaHQ7XG4gICAgICBzdGF0ZS5wYXJlbnRUeXBlID0gb2xkUGFyZW50VHlwZTtcbiAgICAgIHN0YXRlLmJsa0luZGVudCA9IG9sZEluZGVudDtcbiAgICAgIHN0YXRlLmRkSW5kZW50ID0gb2xkRERJbmRlbnQ7XG5cbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2RkX2Nsb3NlJyxcbiAgICAgICAgbGV2ZWw6IC0tc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuXG4gICAgICBpdGVtTGluZXNbMV0gPSBuZXh0TGluZSA9IHN0YXRlLmxpbmU7XG5cbiAgICAgIGlmIChuZXh0TGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrIE9VVEVSOyB9XG5cbiAgICAgIGlmIChzdGF0ZS50U2hpZnRbbmV4dExpbmVdIDwgc3RhdGUuYmxrSW5kZW50KSB7IGJyZWFrIE9VVEVSOyB9XG4gICAgICBjb250ZW50U3RhcnQgPSBza2lwTWFya2VyKHN0YXRlLCBuZXh0TGluZSk7XG4gICAgICBpZiAoY29udGVudFN0YXJ0IDwgMCkgeyBicmVhazsgfVxuXG4gICAgICBkZExpbmUgPSBuZXh0TGluZTtcblxuICAgICAgLy8gZ28gdG8gdGhlIG5leHQgbG9vcCBpdGVyYXRpb246XG4gICAgICAvLyBpbnNlcnQgREQgdGFnIGFuZCByZXBlYXQgY2hlY2tpbmdcbiAgICB9XG5cbiAgICBpZiAobmV4dExpbmUgPj0gZW5kTGluZSkgeyBicmVhazsgfVxuICAgIGR0TGluZSA9IG5leHRMaW5lO1xuXG4gICAgaWYgKHN0YXRlLmlzRW1wdHkoZHRMaW5lKSkgeyBicmVhazsgfVxuICAgIGlmIChzdGF0ZS50U2hpZnRbZHRMaW5lXSA8IHN0YXRlLmJsa0luZGVudCkgeyBicmVhazsgfVxuXG4gICAgZGRMaW5lID0gZHRMaW5lICsgMTtcbiAgICBpZiAoZGRMaW5lID49IGVuZExpbmUpIHsgYnJlYWs7IH1cbiAgICBpZiAoc3RhdGUuaXNFbXB0eShkZExpbmUpKSB7IGRkTGluZSsrOyB9XG4gICAgaWYgKGRkTGluZSA+PSBlbmRMaW5lKSB7IGJyZWFrOyB9XG5cbiAgICBpZiAoc3RhdGUudFNoaWZ0W2RkTGluZV0gPCBzdGF0ZS5ibGtJbmRlbnQpIHsgYnJlYWs7IH1cbiAgICBjb250ZW50U3RhcnQgPSBza2lwTWFya2VyKHN0YXRlLCBkZExpbmUpO1xuICAgIGlmIChjb250ZW50U3RhcnQgPCAwKSB7IGJyZWFrOyB9XG5cbiAgICAvLyBnbyB0byB0aGUgbmV4dCBsb29wIGl0ZXJhdGlvbjpcbiAgICAvLyBpbnNlcnQgRFQgYW5kIEREIHRhZ3MgYW5kIHJlcGVhdCBjaGVja2luZ1xuICB9XG5cbiAgLy8gRmluaWxpemUgbGlzdFxuICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgdHlwZTogJ2RsX2Nsb3NlJyxcbiAgICBsZXZlbDogLS1zdGF0ZS5sZXZlbFxuICB9KTtcbiAgbGlzdExpbmVzWzFdID0gbmV4dExpbmU7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuXG4gIC8vIG1hcmsgcGFyYWdyYXBocyB0aWdodCBpZiBuZWVkZWRcbiAgaWYgKHRpZ2h0KSB7XG4gICAgbWFya1RpZ2h0UGFyYWdyYXBocyhzdGF0ZSwgbGlzdFRva0lkeCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19ibG9jay9kZWZsaXN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQYXJhZ3JhcGhcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyYWdyYXBoKHN0YXRlLCBzdGFydExpbmUvKiwgZW5kTGluZSovKSB7XG4gIHZhciBlbmRMaW5lLCBjb250ZW50LCB0ZXJtaW5hdGUsIGksIGwsXG4gICAgICBuZXh0TGluZSA9IHN0YXJ0TGluZSArIDEsXG4gICAgICB0ZXJtaW5hdG9yUnVsZXM7XG5cbiAgZW5kTGluZSA9IHN0YXRlLmxpbmVNYXg7XG5cbiAgLy8ganVtcCBsaW5lLWJ5LWxpbmUgdW50aWwgZW1wdHkgb25lIG9yIEVPRlxuICBpZiAobmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKSkge1xuICAgIHRlcm1pbmF0b3JSdWxlcyA9IHN0YXRlLnBhcnNlci5ydWxlci5nZXRSdWxlcygncGFyYWdyYXBoJyk7XG5cbiAgICBmb3IgKDsgbmV4dExpbmUgPCBlbmRMaW5lICYmICFzdGF0ZS5pc0VtcHR5KG5leHRMaW5lKTsgbmV4dExpbmUrKykge1xuICAgICAgLy8gdGhpcyB3b3VsZCBiZSBhIGNvZGUgYmxvY2sgbm9ybWFsbHksIGJ1dCBhZnRlciBwYXJhZ3JhcGhcbiAgICAgIC8vIGl0J3MgY29uc2lkZXJlZCBhIGxhenkgY29udGludWF0aW9uIHJlZ2FyZGxlc3Mgb2Ygd2hhdCdzIHRoZXJlXG4gICAgICBpZiAoc3RhdGUudFNoaWZ0W25leHRMaW5lXSAtIHN0YXRlLmJsa0luZGVudCA+IDMpIHsgY29udGludWU7IH1cblxuICAgICAgLy8gU29tZSB0YWdzIGNhbiB0ZXJtaW5hdGUgcGFyYWdyYXBoIHdpdGhvdXQgZW1wdHkgbGluZS5cbiAgICAgIHRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHRlcm1pbmF0b3JSdWxlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHRlcm1pbmF0b3JSdWxlc1tpXShzdGF0ZSwgbmV4dExpbmUsIGVuZExpbmUsIHRydWUpKSB7XG4gICAgICAgICAgdGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRlcm1pbmF0ZSkgeyBicmVhazsgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5nZXRMaW5lcyhzdGFydExpbmUsIG5leHRMaW5lLCBzdGF0ZS5ibGtJbmRlbnQsIGZhbHNlKS50cmltKCk7XG5cbiAgc3RhdGUubGluZSA9IG5leHRMaW5lO1xuICBpZiAoY29udGVudC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAncGFyYWdyYXBoX29wZW4nLFxuICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAnaW5saW5lJyxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxLFxuICAgICAgbGluZXM6IFsgc3RhcnRMaW5lLCBzdGF0ZS5saW5lIF0sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9KTtcbiAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICB0eXBlOiAncGFyYWdyYXBoX2Nsb3NlJyxcbiAgICAgIHRpZ2h0OiBmYWxzZSxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfYmxvY2svcGFyYWdyYXBoLmpzXG4gKiogbW9kdWxlIGlkID0gMjUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmxvY2soc3RhdGUpIHtcblxuICBpZiAoc3RhdGUuaW5saW5lTW9kZSkge1xuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgY29udGVudDogc3RhdGUuc3JjLnJlcGxhY2UoL1xcbi9nLCAnICcpLnRyaW0oKSxcbiAgICAgIGxldmVsOiAwLFxuICAgICAgbGluZXM6IFsgMCwgMSBdLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfSk7XG5cbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5ibG9jay5wYXJzZShzdGF0ZS5zcmMsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudiwgc3RhdGUudG9rZW5zKTtcbiAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvYmxvY2suanNcbiAqKiBtb2R1bGUgaWQgPSAyNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFBhcnNlIGFiYnJldmlhdGlvbiBkZWZpbml0aW9ucywgaS5lLiBgKlthYmJyXTogZGVzY3JpcHRpb25gXG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFN0YXRlSW5saW5lICAgID0gcmVxdWlyZSgnLi4vcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZScpO1xudmFyIHBhcnNlTGlua0xhYmVsID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX2xhYmVsJyk7XG5cblxuZnVuY3Rpb24gcGFyc2VBYmJyKHN0ciwgcGFyc2VySW5saW5lLCBvcHRpb25zLCBlbnYpIHtcbiAgdmFyIHN0YXRlLCBsYWJlbEVuZCwgcG9zLCBtYXgsIGxhYmVsLCB0aXRsZTtcblxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMCkgIT09IDB4MkEvKiAqICovKSB7IHJldHVybiAtMTsgfVxuICBpZiAoc3RyLmNoYXJDb2RlQXQoMSkgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiAtMTsgfVxuXG4gIGlmIChzdHIuaW5kZXhPZignXTonKSA9PT0gLTEpIHsgcmV0dXJuIC0xOyB9XG5cbiAgc3RhdGUgPSBuZXcgU3RhdGVJbmxpbmUoc3RyLCBwYXJzZXJJbmxpbmUsIG9wdGlvbnMsIGVudiwgW10pO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCAxKTtcblxuICBpZiAobGFiZWxFbmQgPCAwIHx8IHN0ci5jaGFyQ29kZUF0KGxhYmVsRW5kICsgMSkgIT09IDB4M0EvKiA6ICovKSB7IHJldHVybiAtMTsgfVxuXG4gIG1heCA9IHN0YXRlLnBvc01heDtcblxuICAvLyBhYmJyIHRpdGxlIGlzIGFsd2F5cyBvbmUgbGluZSwgc28gbG9va2luZyBmb3IgZW5kaW5nIFwiXFxuXCIgaGVyZVxuICBmb3IgKHBvcyA9IGxhYmVsRW5kICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7IGJyZWFrOyB9XG4gIH1cblxuICBsYWJlbCA9IHN0ci5zbGljZSgyLCBsYWJlbEVuZCk7XG4gIHRpdGxlID0gc3RyLnNsaWNlKGxhYmVsRW5kICsgMiwgcG9zKS50cmltKCk7XG4gIGlmICh0aXRsZS5sZW5ndGggPT09IDApIHsgcmV0dXJuIC0xOyB9XG4gIGlmICghZW52LmFiYnJldmlhdGlvbnMpIHsgZW52LmFiYnJldmlhdGlvbnMgPSB7fTsgfVxuICAvLyBwcmVwZW5kICc6JyB0byBhdm9pZCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgbWVtYmVyc1xuICBpZiAodHlwZW9mIGVudi5hYmJyZXZpYXRpb25zWyc6JyArIGxhYmVsXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbnYuYWJicmV2aWF0aW9uc1snOicgKyBsYWJlbF0gPSB0aXRsZTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWJicihzdGF0ZSkge1xuICB2YXIgdG9rZW5zID0gc3RhdGUudG9rZW5zLCBpLCBsLCBjb250ZW50LCBwb3M7XG5cbiAgaWYgKHN0YXRlLmlubGluZU1vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQYXJzZSBpbmxpbmVzXG4gIGZvciAoaSA9IDEsIGwgPSB0b2tlbnMubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKykge1xuICAgIGlmICh0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfb3BlbicgJiZcbiAgICAgICAgdG9rZW5zW2ldLnR5cGUgPT09ICdpbmxpbmUnICYmXG4gICAgICAgIHRva2Vuc1tpICsgMV0udHlwZSA9PT0gJ3BhcmFncmFwaF9jbG9zZScpIHtcblxuICAgICAgY29udGVudCA9IHRva2Vuc1tpXS5jb250ZW50O1xuICAgICAgd2hpbGUgKGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHBvcyA9IHBhcnNlQWJicihjb250ZW50LCBzdGF0ZS5pbmxpbmUsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudik7XG4gICAgICAgIGlmIChwb3MgPCAwKSB7IGJyZWFrOyB9XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKHBvcykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnNbaV0uY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBpZiAoIWNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRva2Vuc1tpIC0gMV0udGlnaHQgPSB0cnVlO1xuICAgICAgICB0b2tlbnNbaSArIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL2FiYnIuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgU3RhdGVJbmxpbmUgICAgICAgICAgPSByZXF1aXJlKCcuLi9ydWxlc19pbmxpbmUvc3RhdGVfaW5saW5lJyk7XG52YXIgcGFyc2VMaW5rTGFiZWwgICAgICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfbGFiZWwnKTtcbnZhciBwYXJzZUxpbmtEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19kZXN0aW5hdGlvbicpO1xudmFyIHBhcnNlTGlua1RpdGxlICAgICAgID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX3RpdGxlJyk7XG52YXIgbm9ybWFsaXplUmVmZXJlbmNlICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL25vcm1hbGl6ZV9yZWZlcmVuY2UnKTtcblxuXG5mdW5jdGlvbiBwYXJzZVJlZmVyZW5jZShzdHIsIHBhcnNlciwgb3B0aW9ucywgZW52KSB7XG4gIHZhciBzdGF0ZSwgbGFiZWxFbmQsIHBvcywgbWF4LCBjb2RlLCBzdGFydCwgaHJlZiwgdGl0bGUsIGxhYmVsO1xuXG4gIGlmIChzdHIuY2hhckNvZGVBdCgwKSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgaWYgKHN0ci5pbmRleE9mKCddOicpID09PSAtMSkgeyByZXR1cm4gLTE7IH1cblxuICBzdGF0ZSA9IG5ldyBTdGF0ZUlubGluZShzdHIsIHBhcnNlciwgb3B0aW9ucywgZW52LCBbXSk7XG4gIGxhYmVsRW5kID0gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIDApO1xuXG4gIGlmIChsYWJlbEVuZCA8IDAgfHwgc3RyLmNoYXJDb2RlQXQobGFiZWxFbmQgKyAxKSAhPT0gMHgzQS8qIDogKi8pIHsgcmV0dXJuIC0xOyB9XG5cbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgXl5eIHNraXAgb3B0aW9uYWwgd2hpdGVzcGFjZSBoZXJlXG4gIGZvciAocG9zID0gbGFiZWxFbmQgKyAyOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICB9XG5cbiAgLy8gW2xhYmVsXTogICBkZXN0aW5hdGlvbiAgICd0aXRsZSdcbiAgLy8gICAgICAgICAgICBeXl5eXl5eXl5eXiBwYXJzZSB0aGlzXG4gIGlmICghcGFyc2VMaW5rRGVzdGluYXRpb24oc3RhdGUsIHBvcykpIHsgcmV0dXJuIC0xOyB9XG4gIGhyZWYgPSBzdGF0ZS5saW5rQ29udGVudDtcbiAgcG9zID0gc3RhdGUucG9zO1xuXG4gIC8vIFtsYWJlbF06ICAgZGVzdGluYXRpb24gICAndGl0bGUnXG4gIC8vICAgICAgICAgICAgICAgICAgICAgICBeXl4gc2tpcHBpbmcgdGhvc2Ugc3BhY2VzXG4gIHN0YXJ0ID0gcG9zO1xuICBmb3IgKHBvcyA9IHBvcyArIDE7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICBpZiAoY29kZSAhPT0gMHgyMCAmJiBjb2RlICE9PSAweDBBKSB7IGJyZWFrOyB9XG4gIH1cblxuICAvLyBbbGFiZWxdOiAgIGRlc3RpbmF0aW9uICAgJ3RpdGxlJ1xuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXiBwYXJzZSB0aGlzXG4gIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiBwYXJzZUxpbmtUaXRsZShzdGF0ZSwgcG9zKSkge1xuICAgIHRpdGxlID0gc3RhdGUubGlua0NvbnRlbnQ7XG4gICAgcG9zID0gc3RhdGUucG9zO1xuICB9IGVsc2Uge1xuICAgIHRpdGxlID0gJyc7XG4gICAgcG9zID0gc3RhcnQ7XG4gIH1cblxuICAvLyBlbnN1cmUgdGhhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIGlzIGVtcHR5XG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMC8qIHNwYWNlICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQSkgeyByZXR1cm4gLTE7IH1cblxuICBsYWJlbCA9IG5vcm1hbGl6ZVJlZmVyZW5jZShzdHIuc2xpY2UoMSwgbGFiZWxFbmQpKTtcbiAgaWYgKHR5cGVvZiBlbnYucmVmZXJlbmNlc1tsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW52LnJlZmVyZW5jZXNbbGFiZWxdID0geyB0aXRsZTogdGl0bGUsIGhyZWY6IGhyZWYgfTtcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZWZlcmVuY2VzKHN0YXRlKSB7XG4gIHZhciB0b2tlbnMgPSBzdGF0ZS50b2tlbnMsIGksIGwsIGNvbnRlbnQsIHBvcztcblxuICBzdGF0ZS5lbnYucmVmZXJlbmNlcyA9IHN0YXRlLmVudi5yZWZlcmVuY2VzIHx8IHt9O1xuXG4gIGlmIChzdGF0ZS5pbmxpbmVNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2NhbiBkZWZpbml0aW9ucyBpbiBwYXJhZ3JhcGggaW5saW5lc1xuICBmb3IgKGkgPSAxLCBsID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAodG9rZW5zW2ldLnR5cGUgPT09ICdpbmxpbmUnICYmXG4gICAgICAgIHRva2Vuc1tpIC0gMV0udHlwZSA9PT0gJ3BhcmFncmFwaF9vcGVuJyAmJlxuICAgICAgICB0b2tlbnNbaSArIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnKSB7XG5cbiAgICAgIGNvbnRlbnQgPSB0b2tlbnNbaV0uY29udGVudDtcbiAgICAgIHdoaWxlIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICBwb3MgPSBwYXJzZVJlZmVyZW5jZShjb250ZW50LCBzdGF0ZS5pbmxpbmUsIHN0YXRlLm9wdGlvbnMsIHN0YXRlLmVudik7XG4gICAgICAgIGlmIChwb3MgPCAwKSB7IGJyZWFrOyB9XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKHBvcykudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnNbaV0uY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBpZiAoIWNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHRva2Vuc1tpIC0gMV0udGlnaHQgPSB0cnVlO1xuICAgICAgICB0b2tlbnNbaSArIDFdLnRpZ2h0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL3JlZmVyZW5jZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmxpbmUoc3RhdGUpIHtcbiAgdmFyIHRva2VucyA9IHN0YXRlLnRva2VucywgdG9rLCBpLCBsO1xuXG4gIC8vIFBhcnNlIGlubGluZXNcbiAgZm9yIChpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB0b2sgPSB0b2tlbnNbaV07XG4gICAgaWYgKHRvay50eXBlID09PSAnaW5saW5lJykge1xuICAgICAgc3RhdGUuaW5saW5lLnBhcnNlKHRvay5jb250ZW50LCBzdGF0ZS5vcHRpb25zLCBzdGF0ZS5lbnYsIHRvay5jaGlsZHJlbik7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9pbmxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvb3Rub3RlX2Jsb2NrKHN0YXRlKSB7XG4gIHZhciBpLCBsLCBqLCB0LCBsYXN0UGFyYWdyYXBoLCBsaXN0LCB0b2tlbnMsIGN1cnJlbnQsIGN1cnJlbnRMYWJlbCxcbiAgICAgIGxldmVsID0gMCxcbiAgICAgIGluc2lkZVJlZiA9IGZhbHNlLFxuICAgICAgcmVmVG9rZW5zID0ge307XG5cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzKSB7IHJldHVybjsgfVxuXG4gIHN0YXRlLnRva2VucyA9IHN0YXRlLnRva2Vucy5maWx0ZXIoZnVuY3Rpb24odG9rKSB7XG4gICAgaWYgKHRvay50eXBlID09PSAnZm9vdG5vdGVfcmVmZXJlbmNlX29wZW4nKSB7XG4gICAgICBpbnNpZGVSZWYgPSB0cnVlO1xuICAgICAgY3VycmVudCA9IFtdO1xuICAgICAgY3VycmVudExhYmVsID0gdG9rLmxhYmVsO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodG9rLnR5cGUgPT09ICdmb290bm90ZV9yZWZlcmVuY2VfY2xvc2UnKSB7XG4gICAgICBpbnNpZGVSZWYgPSBmYWxzZTtcbiAgICAgIC8vIHByZXBlbmQgJzonIHRvIGF2b2lkIGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBtZW1iZXJzXG4gICAgICByZWZUb2tlbnNbJzonICsgY3VycmVudExhYmVsXSA9IGN1cnJlbnQ7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpbnNpZGVSZWYpIHsgY3VycmVudC5wdXNoKHRvayk7IH1cbiAgICByZXR1cm4gIWluc2lkZVJlZjtcbiAgfSk7XG5cbiAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgcmV0dXJuOyB9XG4gIGxpc3QgPSBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3Q7XG5cbiAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgIHR5cGU6ICdmb290bm90ZV9ibG9ja19vcGVuJyxcbiAgICBsZXZlbDogbGV2ZWwrK1xuICB9KTtcbiAgZm9yIChpID0gMCwgbCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3RhdGUudG9rZW5zLnB1c2goe1xuICAgICAgdHlwZTogJ2Zvb3Rub3RlX29wZW4nLFxuICAgICAgaWQ6IGksXG4gICAgICBsZXZlbDogbGV2ZWwrK1xuICAgIH0pO1xuXG4gICAgaWYgKGxpc3RbaV0udG9rZW5zKSB7XG4gICAgICB0b2tlbnMgPSBbXTtcbiAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaF9vcGVuJyxcbiAgICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgICBsZXZlbDogbGV2ZWwrK1xuICAgICAgfSk7XG4gICAgICB0b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICBjaGlsZHJlbjogbGlzdFtpXS50b2tlbnNcbiAgICAgIH0pO1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoX2Nsb3NlJyxcbiAgICAgICAgdGlnaHQ6IGZhbHNlLFxuICAgICAgICBsZXZlbDogLS1sZXZlbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsaXN0W2ldLmxhYmVsKSB7XG4gICAgICB0b2tlbnMgPSByZWZUb2tlbnNbJzonICsgbGlzdFtpXS5sYWJlbF07XG4gICAgfVxuXG4gICAgc3RhdGUudG9rZW5zID0gc3RhdGUudG9rZW5zLmNvbmNhdCh0b2tlbnMpO1xuICAgIGlmIChzdGF0ZS50b2tlbnNbc3RhdGUudG9rZW5zLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdwYXJhZ3JhcGhfY2xvc2UnKSB7XG4gICAgICBsYXN0UGFyYWdyYXBoID0gc3RhdGUudG9rZW5zLnBvcCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0UGFyYWdyYXBoID0gbnVsbDtcbiAgICB9XG5cbiAgICB0ID0gbGlzdFtpXS5jb3VudCA+IDAgPyBsaXN0W2ldLmNvdW50IDogMTtcbiAgICBmb3IgKGogPSAwOyBqIDwgdDsgaisrKSB7XG4gICAgICBzdGF0ZS50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdmb290bm90ZV9hbmNob3InLFxuICAgICAgICBpZDogaSxcbiAgICAgICAgc3ViSWQ6IGosXG4gICAgICAgIGxldmVsOiBsZXZlbFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RQYXJhZ3JhcGgpIHtcbiAgICAgIHN0YXRlLnRva2Vucy5wdXNoKGxhc3RQYXJhZ3JhcGgpO1xuICAgIH1cblxuICAgIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICAgIHR5cGU6ICdmb290bm90ZV9jbG9zZScsXG4gICAgICBsZXZlbDogLS1sZXZlbFxuICAgIH0pO1xuICB9XG4gIHN0YXRlLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVfYmxvY2tfY2xvc2UnLFxuICAgIGxldmVsOiAtLWxldmVsXG4gIH0pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2NvcmUvZm9vdG5vdGVfdGFpbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gRW5jbG9zZSBhYmJyZXZpYXRpb25zIGluIDxhYmJyPiB0YWdzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBQVU5DVF9DSEFSUyA9ICcgXFxuKClbXVxcJ1wiLiwhPy0nO1xuXG5cbi8vIGZyb20gR29vZ2xlIGNsb3N1cmUgbGlicmFyeVxuLy8gaHR0cDovL2Nsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQtaGlzdG9yeS9kb2NzL2xvY2FsX2Nsb3N1cmVfZ29vZ19zdHJpbmdfc3RyaW5nLmpzLnNvdXJjZS5odG1sI2xpbmUxMDIxXG5mdW5jdGlvbiByZWdFc2NhcGUocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oWy0oKVxcW1xcXXt9Kz8qLiRcXF58LDojPCFcXFxcXSkvZywgJ1xcXFwkMScpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYWJicjIoc3RhdGUpIHtcbiAgdmFyIGksIGosIGwsIHRva2VucywgdG9rZW4sIHRleHQsIG5vZGVzLCBwb3MsIGxldmVsLCByZWcsIG0sIHJlZ1RleHQsXG4gICAgICBibG9ja1Rva2VucyA9IHN0YXRlLnRva2VucztcblxuICBpZiAoIXN0YXRlLmVudi5hYmJyZXZpYXRpb25zKSB7IHJldHVybjsgfVxuICBpZiAoIXN0YXRlLmVudi5hYmJyUmVnRXhwKSB7XG4gICAgcmVnVGV4dCA9ICcoXnxbJyArIFBVTkNUX0NIQVJTLnNwbGl0KCcnKS5tYXAocmVnRXNjYXBlKS5qb2luKCcnKSArICddKSdcbiAgICAgICAgICAgICsgJygnICsgT2JqZWN0LmtleXMoc3RhdGUuZW52LmFiYnJldmlhdGlvbnMpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KS5tYXAocmVnRXNjYXBlKS5qb2luKCd8JykgKyAnKSdcbiAgICAgICAgICAgICsgJygkfFsnICsgUFVOQ1RfQ0hBUlMuc3BsaXQoJycpLm1hcChyZWdFc2NhcGUpLmpvaW4oJycpICsgJ10pJztcbiAgICBzdGF0ZS5lbnYuYWJiclJlZ0V4cCA9IG5ldyBSZWdFeHAocmVnVGV4dCwgJ2cnKTtcbiAgfVxuICByZWcgPSBzdGF0ZS5lbnYuYWJiclJlZ0V4cDtcblxuICBmb3IgKGogPSAwLCBsID0gYmxvY2tUb2tlbnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgaWYgKGJsb2NrVG9rZW5zW2pdLnR5cGUgIT09ICdpbmxpbmUnKSB7IGNvbnRpbnVlOyB9XG4gICAgdG9rZW5zID0gYmxvY2tUb2tlbnNbal0uY2hpbGRyZW47XG5cbiAgICAvLyBXZSBzY2FuIGZyb20gdGhlIGVuZCwgdG8ga2VlcCBwb3NpdGlvbiB3aGVuIG5ldyB0YWdzIGFkZGVkLlxuICAgIGZvciAoaSA9IHRva2Vucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ3RleHQnKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIHBvcyA9IDA7XG4gICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcbiAgICAgIHJlZy5sYXN0SW5kZXggPSAwO1xuICAgICAgbGV2ZWwgPSB0b2tlbi5sZXZlbDtcbiAgICAgIG5vZGVzID0gW107XG5cbiAgICAgIHdoaWxlICgobSA9IHJlZy5leGVjKHRleHQpKSkge1xuICAgICAgICBpZiAocmVnLmxhc3RJbmRleCA+IHBvcykge1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudDogdGV4dC5zbGljZShwb3MsIG0uaW5kZXggKyBtWzFdLmxlbmd0aCksXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdhYmJyX29wZW4nLFxuICAgICAgICAgIHRpdGxlOiBzdGF0ZS5lbnYuYWJicmV2aWF0aW9uc1snOicgKyBtWzJdXSxcbiAgICAgICAgICBsZXZlbDogbGV2ZWwrK1xuICAgICAgICB9KTtcbiAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGNvbnRlbnQ6IG1bMl0sXG4gICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgIH0pO1xuICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnYWJicl9jbG9zZScsXG4gICAgICAgICAgbGV2ZWw6IC0tbGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICAgIHBvcyA9IHJlZy5sYXN0SW5kZXggLSBtWzNdLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFub2Rlcy5sZW5ndGgpIHsgY29udGludWU7IH1cblxuICAgICAgaWYgKHBvcyA8IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBjb250ZW50OiB0ZXh0LnNsaWNlKHBvcyksXG4gICAgICAgICAgbGV2ZWw6IGxldmVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbm9kZVxuICAgICAgYmxvY2tUb2tlbnNbal0uY2hpbGRyZW4gPSB0b2tlbnMgPSBbXS5jb25jYXQodG9rZW5zLnNsaWNlKDAsIGkpLCBub2RlcywgdG9rZW5zLnNsaWNlKGkgKyAxKSk7XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9hYmJyMi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gU2ltcGxlIHR5cG9ncmFwaGljYWwgcmVwbGFjZW1lbnRzXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUT0RPOlxuLy8gLSBmcmFjdGlvbmFscyAxLzIsIDEvNCwgMy80IC0+IMK9LCDCvCwgwr5cbi8vIC0gbWlsdGlwbGljYXRpb24gMiB4IDQgLT4gMiDDlyA0XG5cbnZhciBSQVJFX1JFID0gL1xcKy18XFwuXFwufFxcP1xcP1xcP1xcP3whISEhfCwsfC0tLztcblxudmFyIFNDT1BFRF9BQkJSX1JFID0gL1xcKChjfHRtfHJ8cClcXCkvaWc7XG52YXIgU0NPUEVEX0FCQlIgPSB7XG4gICdjJzogJ8KpJyxcbiAgJ3InOiAnwq4nLFxuICAncCc6ICfCpycsXG4gICd0bSc6ICfihKInXG59O1xuXG5mdW5jdGlvbiByZXBsYWNlU2NvcGVkQWJicihzdHIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKCcoJykgPCAwKSB7IHJldHVybiBzdHI7IH1cblxuICByZXR1cm4gc3RyLnJlcGxhY2UoU0NPUEVEX0FCQlJfUkUsIGZ1bmN0aW9uKG1hdGNoLCBuYW1lKSB7XG4gICAgcmV0dXJuIFNDT1BFRF9BQkJSW25hbWUudG9Mb3dlckNhc2UoKV07XG4gIH0pO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwbGFjZShzdGF0ZSkge1xuICB2YXIgaSwgdG9rZW4sIHRleHQsIGlubGluZVRva2VucywgYmxrSWR4O1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy50eXBvZ3JhcGhlcikgeyByZXR1cm47IH1cblxuICBmb3IgKGJsa0lkeCA9IHN0YXRlLnRva2Vucy5sZW5ndGggLSAxOyBibGtJZHggPj0gMDsgYmxrSWR4LS0pIHtcblxuICAgIGlmIChzdGF0ZS50b2tlbnNbYmxrSWR4XS50eXBlICE9PSAnaW5saW5lJykgeyBjb250aW51ZTsgfVxuXG4gICAgaW5saW5lVG9rZW5zID0gc3RhdGUudG9rZW5zW2Jsa0lkeF0uY2hpbGRyZW47XG5cbiAgICBmb3IgKGkgPSBpbmxpbmVUb2tlbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRva2VuID0gaW5saW5lVG9rZW5zW2ldO1xuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICB0ZXh0ID0gdG9rZW4uY29udGVudDtcblxuICAgICAgICB0ZXh0ID0gcmVwbGFjZVNjb3BlZEFiYnIodGV4dCk7XG5cbiAgICAgICAgaWYgKFJBUkVfUkUudGVzdCh0ZXh0KSkge1xuICAgICAgICAgIHRleHQgPSB0ZXh0XG4gICAgICAgICAgICAucmVwbGFjZSgvXFwrLS9nLCAnwrEnKVxuICAgICAgICAgICAgLy8gLi4sIC4uLiwgLi4uLi4uLiAtPiDigKZcbiAgICAgICAgICAgIC8vIGJ1dCA/Li4uLi4gJiAhLi4uLi4gLT4gPy4uICYgIS4uXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuezIsfS9nLCAn4oCmJykucmVwbGFjZSgvKFs/IV0p4oCmL2csICckMS4uJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWz8hXSl7NCx9L2csICckMSQxJDEnKS5yZXBsYWNlKC8sezIsfS9nLCAnLCcpXG4gICAgICAgICAgICAvLyBlbS1kYXNoXG4gICAgICAgICAgICAucmVwbGFjZSgvKF58W14tXSktLS0oW14tXXwkKS9tZywgJyQxXFx1MjAxNCQyJylcbiAgICAgICAgICAgIC8vIGVuLWRhc2hcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXnxcXHMpLS0oXFxzfCQpL21nLCAnJDFcXHUyMDEzJDInKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhefFteLVxcc10pLS0oW14tXFxzXXwkKS9tZywgJyQxXFx1MjAxMyQyJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbi5jb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL3JlcGxhY2VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gQ29udmVydCBzdHJhaWdodCBxdW90YXRpb24gbWFya3MgdG8gdHlwb2dyYXBoaWMgb25lc1xuLy9cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgUVVPVEVfVEVTVF9SRSA9IC9bJ1wiXS87XG52YXIgUVVPVEVfUkUgPSAvWydcIl0vZztcbnZhciBQVU5DVF9SRSA9IC9bLVxccygpXFxbXFxdXS87XG52YXIgQVBPU1RST1BIRSA9ICfigJknO1xuXG4vLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGF0IGBwb3NgXG4vLyBjb3VsZCBiZSBpbnNpZGUgYSB3b3JkLlxuZnVuY3Rpb24gaXNMZXR0ZXIoc3RyLCBwb3MpIHtcbiAgaWYgKHBvcyA8IDAgfHwgcG9zID49IHN0ci5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiAhUFVOQ1RfUkUudGVzdChzdHJbcG9zXSk7XG59XG5cblxuZnVuY3Rpb24gcmVwbGFjZUF0KHN0ciwgaW5kZXgsIGNoKSB7XG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIGluZGV4KSArIGNoICsgc3RyLnN1YnN0cihpbmRleCArIDEpO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc21hcnRxdW90ZXMoc3RhdGUpIHtcbiAgLyplc2xpbnQgbWF4LWRlcHRoOjAqL1xuICB2YXIgaSwgdG9rZW4sIHRleHQsIHQsIHBvcywgbWF4LCB0aGlzTGV2ZWwsIGxhc3RTcGFjZSwgbmV4dFNwYWNlLCBpdGVtLFxuICAgICAgY2FuT3BlbiwgY2FuQ2xvc2UsIGosIGlzU2luZ2xlLCBibGtJZHgsIHRva2VucyxcbiAgICAgIHN0YWNrO1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy50eXBvZ3JhcGhlcikgeyByZXR1cm47IH1cblxuICBzdGFjayA9IFtdO1xuXG4gIGZvciAoYmxrSWR4ID0gc3RhdGUudG9rZW5zLmxlbmd0aCAtIDE7IGJsa0lkeCA+PSAwOyBibGtJZHgtLSkge1xuXG4gICAgaWYgKHN0YXRlLnRva2Vuc1tibGtJZHhdLnR5cGUgIT09ICdpbmxpbmUnKSB7IGNvbnRpbnVlOyB9XG5cbiAgICB0b2tlbnMgPSBzdGF0ZS50b2tlbnNbYmxrSWR4XS5jaGlsZHJlbjtcbiAgICBzdGFjay5sZW5ndGggPSAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0b2tlbi50eXBlICE9PSAndGV4dCcgfHwgUVVPVEVfVEVTVF9SRS50ZXN0KHRva2VuLnRleHQpKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgIHRoaXNMZXZlbCA9IHRva2Vuc1tpXS5sZXZlbDtcblxuICAgICAgZm9yIChqID0gc3RhY2subGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgaWYgKHN0YWNrW2pdLmxldmVsIDw9IHRoaXNMZXZlbCkgeyBicmVhazsgfVxuICAgICAgfVxuICAgICAgc3RhY2subGVuZ3RoID0gaiArIDE7XG5cbiAgICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuICAgICAgcG9zID0gMDtcbiAgICAgIG1heCA9IHRleHQubGVuZ3RoO1xuXG4gICAgICAvKmVzbGludCBuby1sYWJlbHM6MCxibG9jay1zY29wZWQtdmFyOjAqL1xuICAgICAgT1VURVI6XG4gICAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICAgIFFVT1RFX1JFLmxhc3RJbmRleCA9IHBvcztcbiAgICAgICAgdCA9IFFVT1RFX1JFLmV4ZWModGV4dCk7XG4gICAgICAgIGlmICghdCkgeyBicmVhazsgfVxuXG4gICAgICAgIGxhc3RTcGFjZSA9ICFpc0xldHRlcih0ZXh0LCB0LmluZGV4IC0gMSk7XG4gICAgICAgIHBvcyA9IHQuaW5kZXggKyAxO1xuICAgICAgICBpc1NpbmdsZSA9ICh0WzBdID09PSBcIidcIik7XG4gICAgICAgIG5leHRTcGFjZSA9ICFpc0xldHRlcih0ZXh0LCBwb3MpO1xuXG4gICAgICAgIGlmICghbmV4dFNwYWNlICYmICFsYXN0U3BhY2UpIHtcbiAgICAgICAgICAvLyBtaWRkbGUgb2Ygd29yZFxuICAgICAgICAgIGlmIChpc1NpbmdsZSkge1xuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBBUE9TVFJPUEhFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjYW5PcGVuID0gIW5leHRTcGFjZTtcbiAgICAgICAgY2FuQ2xvc2UgPSAhbGFzdFNwYWNlO1xuXG4gICAgICAgIGlmIChjYW5DbG9zZSkge1xuICAgICAgICAgIC8vIHRoaXMgY291bGQgYmUgYSBjbG9zaW5nIHF1b3RlLCByZXdpbmQgdGhlIHN0YWNrIHRvIGdldCBhIG1hdGNoXG4gICAgICAgICAgZm9yIChqID0gc3RhY2subGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSBzdGFja1tqXTtcbiAgICAgICAgICAgIGlmIChzdGFja1tqXS5sZXZlbCA8IHRoaXNMZXZlbCkgeyBicmVhazsgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uc2luZ2xlID09PSBpc1NpbmdsZSAmJiBzdGFja1tqXS5sZXZlbCA9PT0gdGhpc0xldmVsKSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBzdGFja1tqXTtcbiAgICAgICAgICAgICAgaWYgKGlzU2luZ2xlKSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQsIGl0ZW0ucG9zLCBzdGF0ZS5vcHRpb25zLnF1b3Rlc1syXSk7XG4gICAgICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBzdGF0ZS5vcHRpb25zLnF1b3Rlc1szXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW5zW2l0ZW0udG9rZW5dLmNvbnRlbnQsIGl0ZW0ucG9zLCBzdGF0ZS5vcHRpb25zLnF1b3Rlc1swXSk7XG4gICAgICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VBdCh0b2tlbi5jb250ZW50LCB0LmluZGV4LCBzdGF0ZS5vcHRpb25zLnF1b3Rlc1sxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3RhY2subGVuZ3RoID0gajtcbiAgICAgICAgICAgICAgY29udGludWUgT1VURVI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbk9wZW4pIHtcbiAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgIHRva2VuOiBpLFxuICAgICAgICAgICAgcG9zOiB0LmluZGV4LFxuICAgICAgICAgICAgc2luZ2xlOiBpc1NpbmdsZSxcbiAgICAgICAgICAgIGxldmVsOiB0aGlzTGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChjYW5DbG9zZSAmJiBpc1NpbmdsZSkge1xuICAgICAgICAgIHRva2VuLmNvbnRlbnQgPSByZXBsYWNlQXQodG9rZW4uY29udGVudCwgdC5pbmRleCwgQVBPU1RST1BIRSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19jb3JlL3NtYXJ0cXVvdGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBSZXBsYWNlIGxpbmstbGlrZSB0ZXh0cyB3aXRoIGxpbmsgbm9kZXMuXG4vL1xuLy8gQ3VycmVudGx5IHJlc3RyaWN0ZWQgYnkgYGlubGluZS52YWxpZGF0ZUxpbmsoKWAgdG8gaHR0cC9odHRwcy9mdHBcbi8vXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIEF1dG9saW5rZXIgPSByZXF1aXJlKCdhdXRvbGlua2VyJyk7XG5cblxudmFyIExJTktfU0NBTl9SRSA9IC93d3d8QHxcXDpcXC9cXC8vO1xuXG5cbmZ1bmN0aW9uIGlzTGlua09wZW4oc3RyKSB7XG4gIHJldHVybiAvXjxhWz5cXHNdL2kudGVzdChzdHIpO1xufVxuZnVuY3Rpb24gaXNMaW5rQ2xvc2Uoc3RyKSB7XG4gIHJldHVybiAvXjxcXC9hXFxzKj4vaS50ZXN0KHN0cik7XG59XG5cbi8vIFN0dXBpZCBmYWJyaWMgdG8gYXZvaWQgc2luZ2xldG9ucywgZm9yIHRocmVhZCBzYWZldHkuXG4vLyBSZXF1aXJlZCBmb3IgZW5naW5lcyBsaWtlIE5hc2hvcm4uXG4vL1xuZnVuY3Rpb24gY3JlYXRlTGlua2lmaWVyKCkge1xuICB2YXIgbGlua3MgPSBbXTtcbiAgdmFyIGF1dG9saW5rZXIgPSBuZXcgQXV0b2xpbmtlcih7XG4gICAgc3RyaXBQcmVmaXg6IGZhbHNlLFxuICAgIHVybDogdHJ1ZSxcbiAgICBlbWFpbDogdHJ1ZSxcbiAgICB0d2l0dGVyOiBmYWxzZSxcbiAgICByZXBsYWNlRm46IGZ1bmN0aW9uIChhdXRvbGlua2VyLCBtYXRjaCkge1xuICAgICAgLy8gT25seSBjb2xsZWN0IG1hdGNoZWQgc3RyaW5ncyBidXQgZG9uJ3QgY2hhbmdlIGFueXRoaW5nLlxuICAgICAgc3dpdGNoIChtYXRjaC5nZXRUeXBlKCkpIHtcbiAgICAgICAgLyplc2xpbnQgZGVmYXVsdC1jYXNlOjAqL1xuICAgICAgICBjYXNlICd1cmwnOlxuICAgICAgICAgIGxpbmtzLnB1c2goe1xuICAgICAgICAgICAgdGV4dDogbWF0Y2gubWF0Y2hlZFRleHQsXG4gICAgICAgICAgICB1cmw6IG1hdGNoLmdldFVybCgpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICBsaW5rcy5wdXNoKHtcbiAgICAgICAgICAgIHRleHQ6IG1hdGNoLm1hdGNoZWRUZXh0LFxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGVtYWlsIHByb3RvY29sXG4gICAgICAgICAgICB1cmw6ICdtYWlsdG86JyArIG1hdGNoLmdldEVtYWlsKCkucmVwbGFjZSgvXm1haWx0bzovaSwgJycpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGxpbmtzOiBsaW5rcyxcbiAgICBhdXRvbGlua2VyOiBhdXRvbGlua2VyXG4gIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaW5raWZ5KHN0YXRlKSB7XG4gIHZhciBpLCBqLCBsLCB0b2tlbnMsIHRva2VuLCB0ZXh0LCBub2RlcywgbG4sIHBvcywgbGV2ZWwsIGh0bWxMaW5rTGV2ZWwsXG4gICAgICBibG9ja1Rva2VucyA9IHN0YXRlLnRva2VucyxcbiAgICAgIGxpbmtpZmllciA9IG51bGwsIGxpbmtzLCBhdXRvbGlua2VyO1xuXG4gIGlmICghc3RhdGUub3B0aW9ucy5saW5raWZ5KSB7IHJldHVybjsgfVxuXG4gIGZvciAoaiA9IDAsIGwgPSBibG9ja1Rva2Vucy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICBpZiAoYmxvY2tUb2tlbnNbal0udHlwZSAhPT0gJ2lubGluZScpIHsgY29udGludWU7IH1cbiAgICB0b2tlbnMgPSBibG9ja1Rva2Vuc1tqXS5jaGlsZHJlbjtcblxuICAgIGh0bWxMaW5rTGV2ZWwgPSAwO1xuXG4gICAgLy8gV2Ugc2NhbiBmcm9tIHRoZSBlbmQsIHRvIGtlZXAgcG9zaXRpb24gd2hlbiBuZXcgdGFncyBhZGRlZC5cbiAgICAvLyBVc2UgcmV2ZXJzZWQgbG9naWMgaW4gbGlua3Mgc3RhcnQvZW5kIG1hdGNoXG4gICAgZm9yIChpID0gdG9rZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgLy8gU2tpcCBjb250ZW50IG9mIG1hcmtkb3duIGxpbmtzXG4gICAgICBpZiAodG9rZW4udHlwZSA9PT0gJ2xpbmtfY2xvc2UnKSB7XG4gICAgICAgIGktLTtcbiAgICAgICAgd2hpbGUgKHRva2Vuc1tpXS5sZXZlbCAhPT0gdG9rZW4ubGV2ZWwgJiYgdG9rZW5zW2ldLnR5cGUgIT09ICdsaW5rX29wZW4nKSB7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBTa2lwIGNvbnRlbnQgb2YgaHRtbCB0YWcgbGlua3NcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAnaHRtbHRhZycpIHtcbiAgICAgICAgaWYgKGlzTGlua09wZW4odG9rZW4uY29udGVudCkgJiYgaHRtbExpbmtMZXZlbCA+IDApIHtcbiAgICAgICAgICBodG1sTGlua0xldmVsLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGlua0Nsb3NlKHRva2VuLmNvbnRlbnQpKSB7XG4gICAgICAgICAgaHRtbExpbmtMZXZlbCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaHRtbExpbmtMZXZlbCA+IDApIHsgY29udGludWU7IH1cblxuICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiBMSU5LX1NDQU5fUkUudGVzdCh0b2tlbi5jb250ZW50KSkge1xuXG4gICAgICAgIC8vIEluaXQgbGlua2lmaWVyIGluIGxhenkgbWFubmVyLCBvbmx5IGlmIHJlcXVpcmVkLlxuICAgICAgICBpZiAoIWxpbmtpZmllcikge1xuICAgICAgICAgIGxpbmtpZmllciA9IGNyZWF0ZUxpbmtpZmllcigpO1xuICAgICAgICAgIGxpbmtzID0gbGlua2lmaWVyLmxpbmtzO1xuICAgICAgICAgIGF1dG9saW5rZXIgPSBsaW5raWZpZXIuYXV0b2xpbmtlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHQgPSB0b2tlbi5jb250ZW50O1xuICAgICAgICBsaW5rcy5sZW5ndGggPSAwO1xuICAgICAgICBhdXRvbGlua2VyLmxpbmsodGV4dCk7XG5cbiAgICAgICAgaWYgKCFsaW5rcy5sZW5ndGgpIHsgY29udGludWU7IH1cblxuICAgICAgICAvLyBOb3cgc3BsaXQgc3RyaW5nIHRvIG5vZGVzXG4gICAgICAgIG5vZGVzID0gW107XG4gICAgICAgIGxldmVsID0gdG9rZW4ubGV2ZWw7XG5cbiAgICAgICAgZm9yIChsbiA9IDA7IGxuIDwgbGlua3MubGVuZ3RoOyBsbisrKSB7XG5cbiAgICAgICAgICBpZiAoIXN0YXRlLmlubGluZS52YWxpZGF0ZUxpbmsobGlua3NbbG5dLnVybCkpIHsgY29udGludWU7IH1cblxuICAgICAgICAgIHBvcyA9IHRleHQuaW5kZXhPZihsaW5rc1tsbl0udGV4dCk7XG5cbiAgICAgICAgICBpZiAocG9zKSB7XG4gICAgICAgICAgICBsZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgY29udGVudDogdGV4dC5zbGljZSgwLCBwb3MpLFxuICAgICAgICAgICAgICBsZXZlbDogbGV2ZWxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdsaW5rX29wZW4nLFxuICAgICAgICAgICAgaHJlZjogbGlua3NbbG5dLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGxldmVsOiBsZXZlbCsrXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbm9kZXMucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBjb250ZW50OiBsaW5rc1tsbl0udGV4dCxcbiAgICAgICAgICAgIGxldmVsOiBsZXZlbFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ2xpbmtfY2xvc2UnLFxuICAgICAgICAgICAgbGV2ZWw6IC0tbGV2ZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZShwb3MgKyBsaW5rc1tsbl0udGV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudDogdGV4dCxcbiAgICAgICAgICAgIGxldmVsOiBsZXZlbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IG5vZGVcbiAgICAgICAgYmxvY2tUb2tlbnNbal0uY2hpbGRyZW4gPSB0b2tlbnMgPSBbXS5jb25jYXQodG9rZW5zLnNsaWNlKDAsIGkpLCBub2RlcywgdG9rZW5zLnNsaWNlKGkgKyAxKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfY29yZS9saW5raWZ5LmpzXG4gKiogbW9kdWxlIGlkID0gMjU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBJbmxpbmUgcGFyc2VyIHN0YXRlXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBTdGF0ZUlubGluZShzcmMsIHBhcnNlcklubGluZSwgb3B0aW9ucywgZW52LCBvdXRUb2tlbnMpIHtcbiAgdGhpcy5zcmMgPSBzcmM7XG4gIHRoaXMuZW52ID0gZW52O1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLnBhcnNlciA9IHBhcnNlcklubGluZTtcbiAgdGhpcy50b2tlbnMgPSBvdXRUb2tlbnM7XG4gIHRoaXMucG9zID0gMDtcbiAgdGhpcy5wb3NNYXggPSB0aGlzLnNyYy5sZW5ndGg7XG4gIHRoaXMubGV2ZWwgPSAwO1xuICB0aGlzLnBlbmRpbmcgPSAnJztcbiAgdGhpcy5wZW5kaW5nTGV2ZWwgPSAwO1xuXG4gIHRoaXMuY2FjaGUgPSBbXTsgICAgICAgIC8vIFN0b3JlcyB7IHN0YXJ0OiBlbmQgfSBwYWlycy4gVXNlZnVsIGZvciBiYWNrdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW1pemF0aW9uIG9mIHBhaXJzIHBhcnNlIChlbXBoYXNpcywgc3RyaWtlcykuXG5cbiAgLy8gTGluayBwYXJzZXIgc3RhdGUgdmFyc1xuXG4gIHRoaXMuaXNJbkxhYmVsID0gZmFsc2U7IC8vIFNldCB0cnVlIHdoZW4gc2VlayBsaW5rIGxhYmVsIC0gd2Ugc2hvdWxkIGRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJwYWlyZWRcIiBydWxlcyAoZW1waGFzaXMsIHN0cmlrZXMpIHRvIG5vdCBza2lwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhaWxpbmcgYF1gXG5cbiAgdGhpcy5saW5rTGV2ZWwgPSAwOyAgICAgLy8gSW5jcmVtZW50IGZvciBlYWNoIG5lc3RpbmcgbGluay4gVXNlZCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lc3RpbmcgaW4gZGVmaW5pdGlvbnNcblxuICB0aGlzLmxpbmtDb250ZW50ID0gJyc7ICAvLyBUZW1wb3Jhcnkgc3RvcmFnZSBmb3IgbGluayB1cmxcblxuICB0aGlzLmxhYmVsVW5tYXRjaGVkU2NvcGVzID0gMDsgLy8gVHJhY2sgdW5wYWlyZWQgYFtgIGZvciBsaW5rIGxhYmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGJhY2t0cmFjayBvcHRpbWl6YXRpb24pXG59XG5cblxuLy8gRmx1c2ggcGVuZGluZyB0ZXh0XG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLnB1c2hQZW5kaW5nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgY29udGVudDogdGhpcy5wZW5kaW5nLFxuICAgIGxldmVsOiB0aGlzLnBlbmRpbmdMZXZlbFxuICB9KTtcbiAgdGhpcy5wZW5kaW5nID0gJyc7XG59O1xuXG5cbi8vIFB1c2ggbmV3IHRva2VuIHRvIFwic3RyZWFtXCIuXG4vLyBJZiBwZW5kaW5nIHRleHQgZXhpc3RzIC0gZmx1c2ggaXQgYXMgdGV4dCB0b2tlblxuLy9cblN0YXRlSW5saW5lLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICB0aGlzLnB1c2hQZW5kaW5nKCk7XG4gIH1cblxuICB0aGlzLnRva2Vucy5wdXNoKHRva2VuKTtcbiAgdGhpcy5wZW5kaW5nTGV2ZWwgPSB0aGlzLmxldmVsO1xufTtcblxuXG4vLyBTdG9yZSB2YWx1ZSB0byBjYWNoZS5cbi8vICEhISBJbXBsZW1lbnRhdGlvbiBoYXMgcGFyc2VyLXNwZWNpZmljIG9wdGltaXphdGlvbnNcbi8vICEhISBrZXlzIE1VU1QgYmUgaW50ZWdlciwgPj0gMDsgdmFsdWVzIE1VU1QgYmUgaW50ZWdlciwgPiAwXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLmNhY2hlU2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSB0aGlzLmNhY2hlLmxlbmd0aDsgaSA8PSBrZXk7IGkrKykge1xuICAgIHRoaXMuY2FjaGUucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuY2FjaGVba2V5XSA9IHZhbDtcbn07XG5cblxuLy8gR2V0IGNhY2hlIHZhbHVlXG4vL1xuU3RhdGVJbmxpbmUucHJvdG90eXBlLmNhY2hlR2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5IDwgdGhpcy5jYWNoZS5sZW5ndGggPyB0aGlzLmNhY2hlW2tleV0gOiAwO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRlSW5saW5lO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL3N0YXRlX2lubGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gU2tpcCB0ZXh0IGNoYXJhY3RlcnMgZm9yIHRleHQgdG9rZW4sIHBsYWNlIHRob3NlIHRvIHBlbmRpbmcgYnVmZmVyXG4vLyBhbmQgaW5jcmVtZW50IGN1cnJlbnQgcG9zXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vLyBSdWxlIHRvIHNraXAgcHVyZSB0ZXh0XG4vLyAne30kJUB+Kz06JyByZXNlcnZlZCBmb3IgZXh0ZW50aW9uc1xuXG5mdW5jdGlvbiBpc1Rlcm1pbmF0b3JDaGFyKGNoKSB7XG4gIHN3aXRjaCAoY2gpIHtcbiAgICBjYXNlIDB4MEEvKiBcXG4gKi86XG4gICAgY2FzZSAweDVDLyogXFwgKi86XG4gICAgY2FzZSAweDYwLyogYCAqLzpcbiAgICBjYXNlIDB4MkEvKiAqICovOlxuICAgIGNhc2UgMHg1Ri8qIF8gKi86XG4gICAgY2FzZSAweDVFLyogXiAqLzpcbiAgICBjYXNlIDB4NUIvKiBbICovOlxuICAgIGNhc2UgMHg1RC8qIF0gKi86XG4gICAgY2FzZSAweDIxLyogISAqLzpcbiAgICBjYXNlIDB4MjYvKiAmICovOlxuICAgIGNhc2UgMHgzQy8qIDwgKi86XG4gICAgY2FzZSAweDNFLyogPiAqLzpcbiAgICBjYXNlIDB4N0IvKiB7ICovOlxuICAgIGNhc2UgMHg3RC8qIH0gKi86XG4gICAgY2FzZSAweDI0LyogJCAqLzpcbiAgICBjYXNlIDB4MjUvKiAlICovOlxuICAgIGNhc2UgMHg0MC8qIEAgKi86XG4gICAgY2FzZSAweDdFLyogfiAqLzpcbiAgICBjYXNlIDB4MkIvKiArICovOlxuICAgIGNhc2UgMHgzRC8qID0gKi86XG4gICAgY2FzZSAweDNBLyogOiAqLzpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXh0KHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHBvcyA9IHN0YXRlLnBvcztcblxuICB3aGlsZSAocG9zIDwgc3RhdGUucG9zTWF4ICYmICFpc1Rlcm1pbmF0b3JDaGFyKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykpKSB7XG4gICAgcG9zKys7XG4gIH1cblxuICBpZiAocG9zID09PSBzdGF0ZS5wb3MpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhdGUucG9zLCBwb3MpOyB9XG5cbiAgc3RhdGUucG9zID0gcG9zO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS90ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQcm9jZWVzcyAnXFxuJ1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbmV3bGluZShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBwbWF4LCBtYXgsIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSAhPT0gMHgwQS8qIFxcbiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwbWF4ID0gc3RhdGUucGVuZGluZy5sZW5ndGggLSAxO1xuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG5cbiAgLy8gJyAgXFxuJyAtPiBoYXJkYnJlYWtcbiAgLy8gTG9va3VwIGluIHBlbmRpbmcgY2hhcnMgaXMgYmFkIHByYWN0aWNlISBEb24ndCBjb3B5IHRvIG90aGVyIHJ1bGVzIVxuICAvLyBQZW5kaW5nIHN0cmluZyBpcyBzdG9yZWQgaW4gY29uY2F0IG1vZGUsIGluZGV4ZWQgbG9va3VwcyB3aWxsIGNhdXNlXG4gIC8vIGNvbnZlcnRpb24gdG8gZmxhdCBtb2RlLlxuICBpZiAoIXNpbGVudCkge1xuICAgIGlmIChwbWF4ID49IDAgJiYgc3RhdGUucGVuZGluZy5jaGFyQ29kZUF0KHBtYXgpID09PSAweDIwKSB7XG4gICAgICBpZiAocG1heCA+PSAxICYmIHN0YXRlLnBlbmRpbmcuY2hhckNvZGVBdChwbWF4IC0gMSkgPT09IDB4MjApIHtcbiAgICAgICAgc3RhdGUucGVuZGluZyA9IHN0YXRlLnBlbmRpbmcucmVwbGFjZSgvICskLywgJycpO1xuICAgICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnaGFyZGJyZWFrJyxcbiAgICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5wZW5kaW5nID0gc3RhdGUucGVuZGluZy5zbGljZSgwLCAtMSk7XG4gICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdzb2Z0YnJlYWsnLFxuICAgICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3NvZnRicmVhaycsXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcG9zKys7XG5cbiAgLy8gc2tpcCBoZWFkaW5nIHNwYWNlcyBmb3IgbmV4dCBsaW5lXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCkgeyBwb3MrKzsgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL25ld2xpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFByb2NlZXNzIGVzY2FwZWQgY2hhcnMgYW5kIGhhcmRicmVha3NcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVNDQVBFRCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7IEVTQ0FQRUQucHVzaCgwKTsgfVxuXG4nXFxcXCFcIiMkJSZcXCcoKSorLC4vOjs8PT4/QFtdXl9ge3x9fi0nXG4gIC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihjaCkgeyBFU0NBUEVEW2NoLmNoYXJDb2RlQXQoMCldID0gMTsgfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIHBvcyA9IHN0YXRlLnBvcywgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDVDLyogXFwgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zKys7XG5cbiAgaWYgKHBvcyA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICAgIGlmIChjaCA8IDI1NiAmJiBFU0NBUEVEW2NoXSAhPT0gMCkge1xuICAgICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmNbcG9zXTsgfVxuICAgICAgc3RhdGUucG9zICs9IDI7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2ggPT09IDB4MEEpIHtcbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdoYXJkYnJlYWsnLFxuICAgICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcG9zKys7XG4gICAgICAvLyBza2lwIGxlYWRpbmcgd2hpdGVzcGFjZXMgZnJvbSBuZXh0IGxpbmVcbiAgICAgIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyMCkgeyBwb3MrKzsgfVxuXG4gICAgICBzdGF0ZS5wb3MgPSBwb3M7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9ICdcXFxcJzsgfVxuICBzdGF0ZS5wb3MrKztcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2VzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUGFyc2UgYmFja3RpY2tzXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYWNrdGlja3Moc3RhdGUsIHNpbGVudCkge1xuICB2YXIgc3RhcnQsIG1heCwgbWFya2VyLCBtYXRjaFN0YXJ0LCBtYXRjaEVuZCxcbiAgICAgIHBvcyA9IHN0YXRlLnBvcyxcbiAgICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAoY2ggIT09IDB4NjAvKiBgICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXJ0ID0gcG9zO1xuICBwb3MrKztcbiAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHg2MC8qIGAgKi8pIHsgcG9zKys7IH1cblxuICBtYXJrZXIgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7XG5cbiAgbWF0Y2hTdGFydCA9IG1hdGNoRW5kID0gcG9zO1xuXG4gIHdoaWxlICgobWF0Y2hTdGFydCA9IHN0YXRlLnNyYy5pbmRleE9mKCdgJywgbWF0Y2hFbmQpKSAhPT0gLTEpIHtcbiAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyAxO1xuXG4gICAgd2hpbGUgKG1hdGNoRW5kIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KG1hdGNoRW5kKSA9PT0gMHg2MC8qIGAgKi8pIHsgbWF0Y2hFbmQrKzsgfVxuXG4gICAgaWYgKG1hdGNoRW5kIC0gbWF0Y2hTdGFydCA9PT0gbWFya2VyLmxlbmd0aCkge1xuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5zbGljZShwb3MsIG1hdGNoU3RhcnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvWyBcXG5dKy9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpLFxuICAgICAgICAgIGJsb2NrOiBmYWxzZSxcbiAgICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5wb3MgPSBtYXRjaEVuZDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gbWFya2VyOyB9XG4gIHN0YXRlLnBvcyArPSBtYXJrZXIubGVuZ3RoO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvYmFja3RpY2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMjY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQcm9jZXNzIH5+ZGVsZXRlZCB0ZXh0fn5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlbChzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIHBvcyxcbiAgICAgIHN0YWNrLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBsYXN0Q2hhcixcbiAgICAgIG5leHRDaGFyO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyA0ID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4N0UvKiB+ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuICBuZXh0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMik7XG5cbiAgaWYgKGxhc3RDaGFyID09PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXJ0ICsgMjtcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDdFLyogfiAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zID4gc3RhcnQgKyAzKSB7XG4gICAgLy8gc2VxdWVuY2Ugb2YgNCsgbWFya2VycyB0YWtpbmcgYXMgbGl0ZXJhbCwgc2FtZSBhcyBpbiBhIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zICs9IHBvcyAtIHN0YXJ0O1xuICAgIGlmICghc2lsZW50KSB7IHN0YXRlLnBlbmRpbmcgKz0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0LCBwb3MpOyB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG4gIHN0YWNrID0gMTtcblxuICB3aGlsZSAoc3RhdGUucG9zICsgMSA8IG1heCkge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MpID09PSAweDdFLyogfiAqLykge1xuICAgICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDEpID09PSAweDdFLyogfiAqLykge1xuICAgICAgICBsYXN0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyAtIDEpO1xuICAgICAgICBuZXh0Q2hhciA9IHN0YXRlLnBvcyArIDIgPCBtYXggPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAyKSA6IC0xO1xuICAgICAgICBpZiAobmV4dENoYXIgIT09IDB4N0UvKiB+ICovICYmIGxhc3RDaGFyICE9PSAweDdFLyogfiAqLykge1xuICAgICAgICAgIGlmIChsYXN0Q2hhciAhPT0gMHgyMCAmJiBsYXN0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gY2xvc2luZyAnfn4nXG4gICAgICAgICAgICBzdGFjay0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV4dENoYXIgIT09IDB4MjAgJiYgbmV4dENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIG9wZW5pbmcgJ35+J1xuICAgICAgICAgICAgc3RhY2srKztcbiAgICAgICAgICB9IC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gIC8vIHN0YW5kYWxvbmUgJyB+fiAnIGluZGVudGVkIHdpdGggc3BhY2VzXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgaWYgKHN0YWNrIDw9IDApIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCBlbmRpbmcgdGFnLCBzbyBpdCdzIG5vdCB2YWxpZCBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZGVsX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICBzdGF0ZS5wYXJzZXIudG9rZW5pemUoc3RhdGUpO1xuICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZGVsX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAyO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9kZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFByb2Nlc3MgKytpbnNlcnRlZCB0ZXh0KytcblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlucyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIHBvcyxcbiAgICAgIHN0YWNrLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBsYXN0Q2hhcixcbiAgICAgIG5leHRDaGFyO1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCkgIT09IDB4MkIvKiArICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuICBpZiAoc3RhcnQgKyA0ID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMSkgIT09IDB4MkIvKiArICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuICBuZXh0Q2hhciA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0ICsgMik7XG5cbiAgaWYgKGxhc3RDaGFyID09PSAweDJCLyogKyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDJCLyogKyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcyA9IHN0YXJ0ICsgMjtcbiAgd2hpbGUgKHBvcyA8IG1heCAmJiBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDJCLyogKyAqLykgeyBwb3MrKzsgfVxuICBpZiAocG9zICE9PSBzdGFydCArIDIpIHtcbiAgICAvLyBzZXF1ZW5jZSBvZiAzKyBtYXJrZXJzIHRha2luZyBhcyBsaXRlcmFsLCBzYW1lIGFzIGluIGEgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgKz0gcG9zIC0gc3RhcnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMjtcbiAgc3RhY2sgPSAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgKyAxIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4MkIvKiArICovKSB7XG4gICAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMSkgPT09IDB4MkIvKiArICovKSB7XG4gICAgICAgIGxhc3RDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zIC0gMSk7XG4gICAgICAgIG5leHRDaGFyID0gc3RhdGUucG9zICsgMiA8IG1heCA/IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcyArIDIpIDogLTE7XG4gICAgICAgIGlmIChuZXh0Q2hhciAhPT0gMHgyQi8qICsgKi8gJiYgbGFzdENoYXIgIT09IDB4MkIvKiArICovKSB7XG4gICAgICAgICAgaWYgKGxhc3RDaGFyICE9PSAweDIwICYmIGxhc3RDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBjbG9zaW5nICcrKydcbiAgICAgICAgICAgIHN0YWNrLS07XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciAhPT0gMHgyMCAmJiBuZXh0Q2hhciAhPT0gMHgwQSkge1xuICAgICAgICAgICAgLy8gb3BlbmluZyAnKysnXG4gICAgICAgICAgICBzdGFjaysrO1xuICAgICAgICAgIH0gLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgLy8gc3RhbmRhbG9uZSAnICsrICcgaW5kZW50ZWQgd2l0aCBzcGFjZXNcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoc3RhY2sgPD0gMCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnNraXBUb2tlbihzdGF0ZSk7XG4gIH1cblxuICBpZiAoIWZvdW5kKSB7XG4gICAgLy8gcGFyc2VyIGZhaWxlZCB0byBmaW5kIGVuZGluZyB0YWcsIHNvIGl0J3Mgbm90IHZhbGlkIGVtcGhhc2lzXG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdpbnNfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdpbnNfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDI7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2lucy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUHJvY2VzcyA9PWhpZ2hsaWdodGVkIHRleHQ9PVxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVsKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGZvdW5kLFxuICAgICAgcG9zLFxuICAgICAgc3RhY2ssXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcyxcbiAgICAgIGxhc3RDaGFyLFxuICAgICAgbmV4dENoYXI7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHgzRC8qID0gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDQgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAxKSAhPT0gMHgzRC8qID0gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGFzdENoYXIgPSBzdGFydCA+IDAgPyBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCAtIDEpIDogLTE7XG4gIG5leHRDaGFyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgKyAyKTtcblxuICBpZiAobGFzdENoYXIgPT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4M0QvKiA9ICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAobmV4dENoYXIgPT09IDB4MjAgfHwgbmV4dENoYXIgPT09IDB4MEEpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgcG9zID0gc3RhcnQgKyAyO1xuICB3aGlsZSAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4M0QvKiA9ICovKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgIT09IHN0YXJ0ICsgMikge1xuICAgIC8vIHNlcXVlbmNlIG9mIDMrIG1hcmtlcnMgdGFraW5nIGFzIGxpdGVyYWwsIHNhbWUgYXMgaW4gYSBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyArPSBwb3MgLSBzdGFydDtcbiAgICBpZiAoIXNpbGVudCkgeyBzdGF0ZS5wZW5kaW5nICs9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKTsgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAyO1xuICBzdGFjayA9IDE7XG5cbiAgd2hpbGUgKHN0YXRlLnBvcyArIDEgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gMHgzRC8qID0gKi8pIHtcbiAgICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgKyAxKSA9PT0gMHgzRC8qID0gKi8pIHtcbiAgICAgICAgbGFzdENoYXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGF0ZS5wb3MgLSAxKTtcbiAgICAgICAgbmV4dENoYXIgPSBzdGF0ZS5wb3MgKyAyIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zICsgMikgOiAtMTtcbiAgICAgICAgaWYgKG5leHRDaGFyICE9PSAweDNELyogPSAqLyAmJiBsYXN0Q2hhciAhPT0gMHgzRC8qID0gKi8pIHtcbiAgICAgICAgICBpZiAobGFzdENoYXIgIT09IDB4MjAgJiYgbGFzdENoYXIgIT09IDB4MEEpIHtcbiAgICAgICAgICAgIC8vIGNsb3NpbmcgJz09J1xuICAgICAgICAgICAgc3RhY2stLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5leHRDaGFyICE9PSAweDIwICYmIG5leHRDaGFyICE9PSAweDBBKSB7XG4gICAgICAgICAgICAvLyBvcGVuaW5nICc9PSdcbiAgICAgICAgICAgIHN0YWNrKys7XG4gICAgICAgICAgfSAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vICAvLyBzdGFuZGFsb25lICcgPT0gJyBpbmRlbnRlZCB3aXRoIHNwYWNlc1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIGlmIChzdGFjayA8PSAwKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgZW5kaW5nIHRhZywgc28gaXQncyBub3QgdmFsaWQgZW1waGFzaXNcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIDI7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ21hcmtfb3BlbicsIGxldmVsOiBzdGF0ZS5sZXZlbCsrIH0pO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUucHVzaCh7IHR5cGU6ICdtYXJrX2Nsb3NlJywgbGV2ZWw6IC0tc3RhdGUubGV2ZWwgfSk7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyAyO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9tYXJrLmpzXG4gKiogbW9kdWxlIGlkID0gMjY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQcm9jZXNzICp0aGlzKiBhbmQgX3RoYXRfXG5cbid1c2Ugc3RyaWN0JztcblxuXG5mdW5jdGlvbiBpc0FscGhhTnVtKGNvZGUpIHtcbiAgcmV0dXJuIChjb2RlID49IDB4MzAgLyogMCAqLyAmJiBjb2RlIDw9IDB4MzkgLyogOSAqLykgfHxcbiAgICAgICAgIChjb2RlID49IDB4NDEgLyogQSAqLyAmJiBjb2RlIDw9IDB4NUEgLyogWiAqLykgfHxcbiAgICAgICAgIChjb2RlID49IDB4NjEgLyogYSAqLyAmJiBjb2RlIDw9IDB4N0EgLyogeiAqLyk7XG59XG5cbi8vIHBhcnNlIHNlcXVlbmNlIG9mIGVtcGhhc2lzIG1hcmtlcnMsXG4vLyBcInN0YXJ0XCIgc2hvdWxkIHBvaW50IGF0IGEgdmFsaWQgbWFya2VyXG5mdW5jdGlvbiBzY2FuRGVsaW1zKHN0YXRlLCBzdGFydCkge1xuICB2YXIgcG9zID0gc3RhcnQsIGxhc3RDaGFyLCBuZXh0Q2hhciwgY291bnQsXG4gICAgICBjYW5fb3BlbiA9IHRydWUsXG4gICAgICBjYW5fY2xvc2UgPSB0cnVlLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGxhc3RDaGFyID0gc3RhcnQgPiAwID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQgLSAxKSA6IC0xO1xuXG4gIHdoaWxlIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gbWFya2VyKSB7IHBvcysrOyB9XG4gIGlmIChwb3MgPj0gbWF4KSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgY291bnQgPSBwb3MgLSBzdGFydDtcblxuICBpZiAoY291bnQgPj0gNCkge1xuICAgIC8vIHNlcXVlbmNlIG9mIGZvdXIgb3IgbW9yZSB1bmVzY2FwZWQgbWFya2VycyBjYW4ndCBzdGFydC9lbmQgYW4gZW1waGFzaXNcbiAgICBjYW5fb3BlbiA9IGNhbl9jbG9zZSA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIG5leHRDaGFyID0gcG9zIDwgbWF4ID8gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA6IC0xO1xuXG4gICAgLy8gY2hlY2sgd2hpdGVzcGFjZSBjb25kaXRpb25zXG4gICAgaWYgKG5leHRDaGFyID09PSAweDIwIHx8IG5leHRDaGFyID09PSAweDBBKSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgICBpZiAobGFzdENoYXIgPT09IDB4MjAgfHwgbGFzdENoYXIgPT09IDB4MEEpIHsgY2FuX2Nsb3NlID0gZmFsc2U7IH1cblxuICAgIGlmIChtYXJrZXIgPT09IDB4NUYgLyogXyAqLykge1xuICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlbid0IGluc2lkZSB0aGUgd29yZFxuICAgICAgaWYgKGlzQWxwaGFOdW0obGFzdENoYXIpKSB7IGNhbl9vcGVuID0gZmFsc2U7IH1cbiAgICAgIGlmIChpc0FscGhhTnVtKG5leHRDaGFyKSkgeyBjYW5fY2xvc2UgPSBmYWxzZTsgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2FuX29wZW46IGNhbl9vcGVuLFxuICAgIGNhbl9jbG9zZTogY2FuX2Nsb3NlLFxuICAgIGRlbGltczogY291bnRcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbXBoYXNpcyhzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBzdGFydENvdW50LFxuICAgICAgY291bnQsXG4gICAgICBmb3VuZCxcbiAgICAgIG9sZENvdW50LFxuICAgICAgbmV3Q291bnQsXG4gICAgICBzdGFjayxcbiAgICAgIHJlcyxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zLFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpO1xuXG4gIGlmIChtYXJrZXIgIT09IDB4NUYvKiBfICovICYmIG1hcmtlciAhPT0gMHgyQSAvKiAqICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc2lsZW50KSB7IHJldHVybiBmYWxzZTsgfSAvLyBkb24ndCBydW4gYW55IHBhaXJzIGluIHZhbGlkYXRpb24gbW9kZVxuXG4gIHJlcyA9IHNjYW5EZWxpbXMoc3RhdGUsIHN0YXJ0KTtcbiAgc3RhcnRDb3VudCA9IHJlcy5kZWxpbXM7XG4gIGlmICghcmVzLmNhbl9vcGVuKSB7XG4gICAgc3RhdGUucG9zICs9IHN0YXJ0Q291bnQ7XG4gICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHN0YXRlLnBvcyk7IH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyBzdGFydENvdW50O1xuICBzdGFjayA9IFsgc3RhcnRDb3VudCBdO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gbWFya2VyKSB7XG4gICAgICByZXMgPSBzY2FuRGVsaW1zKHN0YXRlLCBzdGF0ZS5wb3MpO1xuICAgICAgY291bnQgPSByZXMuZGVsaW1zO1xuICAgICAgaWYgKHJlcy5jYW5fY2xvc2UpIHtcbiAgICAgICAgb2xkQ291bnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgbmV3Q291bnQgPSBjb3VudDtcblxuICAgICAgICB3aGlsZSAob2xkQ291bnQgIT09IG5ld0NvdW50KSB7XG4gICAgICAgICAgaWYgKG5ld0NvdW50IDwgb2xkQ291bnQpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gob2xkQ291bnQgLSBuZXdDb3VudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhc3NlcnQobmV3Q291bnQgPiBvbGRDb3VudClcbiAgICAgICAgICBuZXdDb3VudCAtPSBvbGRDb3VudDtcblxuICAgICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDApIHsgYnJlYWs7IH1cbiAgICAgICAgICBzdGF0ZS5wb3MgKz0gb2xkQ291bnQ7XG4gICAgICAgICAgb2xkQ291bnQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBzdGFydENvdW50ID0gb2xkQ291bnQ7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBvcyArPSBjb3VudDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXMuY2FuX29wZW4pIHsgc3RhY2sucHVzaChjb3VudCk7IH1cbiAgICAgIHN0YXRlLnBvcyArPSBjb3VudDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCkge1xuICAgIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCBlbmRpbmcgdGFnLCBzbyBpdCdzIG5vdCB2YWxpZCBlbXBoYXNpc1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGZvdW5kIVxuICBzdGF0ZS5wb3NNYXggPSBzdGF0ZS5wb3M7XG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgc3RhcnRDb3VudDtcblxuICBpZiAoIXNpbGVudCkge1xuICAgIGlmIChzdGFydENvdW50ID09PSAyIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnc3Ryb25nX29wZW4nLCBsZXZlbDogc3RhdGUubGV2ZWwrKyB9KTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0Q291bnQgPT09IDEgfHwgc3RhcnRDb3VudCA9PT0gMykge1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdlbV9vcGVuJywgbGV2ZWw6IHN0YXRlLmxldmVsKysgfSk7XG4gICAgfVxuXG4gICAgc3RhdGUucGFyc2VyLnRva2VuaXplKHN0YXRlKTtcblxuICAgIGlmIChzdGFydENvdW50ID09PSAxIHx8IHN0YXJ0Q291bnQgPT09IDMpIHtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnZW1fY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0Q291bnQgPT09IDIgfHwgc3RhcnRDb3VudCA9PT0gMykge1xuICAgICAgc3RhdGUucHVzaCh7IHR5cGU6ICdzdHJvbmdfY2xvc2UnLCBsZXZlbDogLS1zdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGF0ZS5wb3NNYXggKyBzdGFydENvdW50O1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9lbXBoYXNpcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUHJvY2VzcyB+c3Vic2NyaXB0flxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIHNhbWUgYXMgVU5FU0NBUEVfTURfUkUgcGx1cyBhIHNwYWNlXG52YXIgVU5FU0NBUEVfUkUgPSAvXFxcXChbIFxcXFwhXCIjJCUmJygpKissLlxcLzo7PD0+P0BbXFxdXl9ge3x9fi1dKS9nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN1YihzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBmb3VuZCxcbiAgICAgIGNvbnRlbnQsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhcnQpICE9PSAweDdFLyogfiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHNpbGVudCkgeyByZXR1cm4gZmFsc2U7IH0gLy8gZG9uJ3QgcnVuIGFueSBwYWlycyBpbiB2YWxpZGF0aW9uIG1vZGVcbiAgaWYgKHN0YXJ0ICsgMiA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5sZXZlbCA+PSBzdGF0ZS5vcHRpb25zLm1heE5lc3RpbmcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuXG4gIHdoaWxlIChzdGF0ZS5wb3MgPCBtYXgpIHtcbiAgICBpZiAoc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKSA9PT0gMHg3RS8qIH4gKi8pIHtcbiAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKCFmb3VuZCB8fCBzdGFydCArIDEgPT09IHN0YXRlLnBvcykge1xuICAgIHN0YXRlLnBvcyA9IHN0YXJ0O1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnRlbnQgPSBzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAxLCBzdGF0ZS5wb3MpO1xuXG4gIC8vIGRvbid0IGFsbG93IHVuZXNjYXBlZCBzcGFjZXMvbmV3bGluZXMgaW5zaWRlXG4gIGlmIChjb250ZW50Lm1hdGNoKC8oXnxbXlxcXFxdKShcXFxcXFxcXCkqXFxzLykpIHtcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBmb3VuZCFcbiAgc3RhdGUucG9zTWF4ID0gc3RhdGUucG9zO1xuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHtcbiAgICAgIHR5cGU6ICdzdWInLFxuICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsLFxuICAgICAgY29udGVudDogY29udGVudC5yZXBsYWNlKFVORVNDQVBFX1JFLCAnJDEnKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUucG9zID0gc3RhdGUucG9zTWF4ICsgMTtcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvc3ViLmpzXG4gKiogbW9kdWxlIGlkID0gMjY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQcm9jZXNzIF5zdXBlcnNjcmlwdF5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBzYW1lIGFzIFVORVNDQVBFX01EX1JFIHBsdXMgYSBzcGFjZVxudmFyIFVORVNDQVBFX1JFID0gL1xcXFwoWyBcXFxcIVwiIyQlJicoKSorLC5cXC86Ozw9Pj9AW1xcXV5fYHt8fX4tXSkvZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdXAoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgZm91bmQsXG4gICAgICBjb250ZW50LFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1RS8qIF4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzaWxlbnQpIHsgcmV0dXJuIGZhbHNlOyB9IC8vIGRvbid0IHJ1biBhbnkgcGFpcnMgaW4gdmFsaWRhdGlvbiBtb2RlXG4gIGlmIChzdGFydCArIDIgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXJ0ICsgMTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXRlLnBvcykgPT09IDB4NUUvKiBeICovKSB7XG4gICAgICBmb3VuZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdGF0ZS5wYXJzZXIuc2tpcFRva2VuKHN0YXRlKTtcbiAgfVxuXG4gIGlmICghZm91bmQgfHwgc3RhcnQgKyAxID09PSBzdGF0ZS5wb3MpIHtcbiAgICBzdGF0ZS5wb3MgPSBzdGFydDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb250ZW50ID0gc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgc3RhdGUucG9zKTtcblxuICAvLyBkb24ndCBhbGxvdyB1bmVzY2FwZWQgc3BhY2VzL25ld2xpbmVzIGluc2lkZVxuICBpZiAoY29udGVudC5tYXRjaCgvKF58W15cXFxcXSkoXFxcXFxcXFwpKlxccy8pKSB7XG4gICAgc3RhdGUucG9zID0gc3RhcnQ7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gZm91bmQhXG4gIHN0YXRlLnBvc01heCA9IHN0YXRlLnBvcztcbiAgc3RhdGUucG9zID0gc3RhcnQgKyAxO1xuXG4gIGlmICghc2lsZW50KSB7XG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnc3VwJyxcbiAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbCxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQucmVwbGFjZShVTkVTQ0FQRV9SRSwgJyQxJylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHN0YXRlLnBvc01heCArIDE7XG4gIHN0YXRlLnBvc01heCA9IG1heDtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL3N1cC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUHJvY2VzcyBbbGlua3NdKDx0bz4gXCJzdHVmZlwiKVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwYXJzZUxpbmtMYWJlbCAgICAgICA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbCcpO1xudmFyIHBhcnNlTGlua0Rlc3RpbmF0aW9uID0gcmVxdWlyZSgnLi4vaGVscGVycy9wYXJzZV9saW5rX2Rlc3RpbmF0aW9uJyk7XG52YXIgcGFyc2VMaW5rVGl0bGUgICAgICAgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3BhcnNlX2xpbmtfdGl0bGUnKTtcbnZhciBub3JtYWxpemVSZWZlcmVuY2UgICA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvbm9ybWFsaXplX3JlZmVyZW5jZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbGlua3Moc3RhdGUsIHNpbGVudCkge1xuICB2YXIgbGFiZWxTdGFydCxcbiAgICAgIGxhYmVsRW5kLFxuICAgICAgbGFiZWwsXG4gICAgICBocmVmLFxuICAgICAgdGl0bGUsXG4gICAgICBwb3MsXG4gICAgICByZWYsXG4gICAgICBjb2RlLFxuICAgICAgaXNJbWFnZSA9IGZhbHNlLFxuICAgICAgb2xkUG9zID0gc3RhdGUucG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgc3RhcnQgPSBzdGF0ZS5wb3MsXG4gICAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCk7XG5cbiAgaWYgKG1hcmtlciA9PT0gMHgyMS8qICEgKi8pIHtcbiAgICBpc0ltYWdlID0gdHJ1ZTtcbiAgICBtYXJrZXIgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdCgrK3N0YXJ0KTtcbiAgfVxuXG4gIGlmIChtYXJrZXIgIT09IDB4NUIvKiBbICovKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoc3RhdGUubGV2ZWwgPj0gc3RhdGUub3B0aW9ucy5tYXhOZXN0aW5nKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxhYmVsU3RhcnQgPSBzdGFydCArIDE7XG4gIGxhYmVsRW5kID0gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXJ0KTtcblxuICAvLyBwYXJzZXIgZmFpbGVkIHRvIGZpbmQgJ10nLCBzbyBpdCdzIG5vdCBhIHZhbGlkIGxpbmtcbiAgaWYgKGxhYmVsRW5kIDwgMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBwb3MgPSBsYWJlbEVuZCArIDE7XG4gIGlmIChwb3MgPCBtYXggJiYgc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKSA9PT0gMHgyOC8qICggKi8pIHtcbiAgICAvL1xuICAgIC8vIElubGluZSBsaW5rXG4gICAgLy9cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgIHBvcysrO1xuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjb2RlICE9PSAweDIwICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG4gICAgaWYgKHBvcyA+PSBtYXgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAvLyBbbGlua10oICA8aHJlZj4gIFwidGl0bGVcIiAgKVxuICAgIC8vICAgICAgICAgIF5eXl5eXiBwYXJzaW5nIGxpbmsgZGVzdGluYXRpb25cbiAgICBzdGFydCA9IHBvcztcbiAgICBpZiAocGFyc2VMaW5rRGVzdGluYXRpb24oc3RhdGUsIHBvcykpIHtcbiAgICAgIGhyZWYgPSBzdGF0ZS5saW5rQ29udGVudDtcbiAgICAgIHBvcyA9IHN0YXRlLnBvcztcbiAgICB9IGVsc2Uge1xuICAgICAgaHJlZiA9ICcnO1xuICAgIH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgICAgICAgXl4gc2tpcHBpbmcgdGhlc2Ugc3BhY2VzXG4gICAgc3RhcnQgPSBwb3M7XG4gICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgICAgaWYgKGNvZGUgIT09IDB4MjAgJiYgY29kZSAhPT0gMHgwQSkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIC8vIFtsaW5rXSggIDxocmVmPiAgXCJ0aXRsZVwiICApXG4gICAgLy8gICAgICAgICAgICAgICAgICBeXl5eXl5eIHBhcnNpbmcgbGluayB0aXRsZVxuICAgIGlmIChwb3MgPCBtYXggJiYgc3RhcnQgIT09IHBvcyAmJiBwYXJzZUxpbmtUaXRsZShzdGF0ZSwgcG9zKSkge1xuICAgICAgdGl0bGUgPSBzdGF0ZS5saW5rQ29udGVudDtcbiAgICAgIHBvcyA9IHN0YXRlLnBvcztcblxuICAgICAgLy8gW2xpbmtdKCAgPGhyZWY+ICBcInRpdGxlXCIgIClcbiAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIF5eIHNraXBwaW5nIHRoZXNlIHNwYWNlc1xuICAgICAgZm9yICg7IHBvcyA8IG1heDsgcG9zKyspIHtcbiAgICAgICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG4gICAgICAgIGlmIChjb2RlICE9PSAweDIwICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAocG9zID49IG1heCB8fCBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDI5LyogKSAqLykge1xuICAgICAgc3RhdGUucG9zID0gb2xkUG9zO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBwb3MrKztcbiAgfSBlbHNlIHtcbiAgICAvL1xuICAgIC8vIExpbmsgcmVmZXJlbmNlXG4gICAgLy9cblxuICAgIC8vIGRvIG5vdCBhbGxvdyBuZXN0ZWQgcmVmZXJlbmNlIGxpbmtzXG4gICAgaWYgKHN0YXRlLmxpbmtMZXZlbCA+IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAvLyBbZm9vXSAgW2Jhcl1cbiAgICAvLyAgICAgIF5eIG9wdGlvbmFsIHdoaXRlc3BhY2UgKGNhbiBpbmNsdWRlIG5ld2xpbmVzKVxuICAgIGZvciAoOyBwb3MgPCBtYXg7IHBvcysrKSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjb2RlICE9PSAweDIwICYmIGNvZGUgIT09IDB4MEEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBpZiAocG9zIDwgbWF4ICYmIHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgPT09IDB4NUIvKiBbICovKSB7XG4gICAgICBzdGFydCA9IHBvcyArIDE7XG4gICAgICBwb3MgPSBwYXJzZUxpbmtMYWJlbChzdGF0ZSwgcG9zKTtcbiAgICAgIGlmIChwb3MgPj0gMCkge1xuICAgICAgICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCwgcG9zKyspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zID0gc3RhcnQgLSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvdmVycyBsYWJlbCA9PT0gJycgYW5kIGxhYmVsID09PSB1bmRlZmluZWRcbiAgICAvLyAoY29sbGFwc2VkIHJlZmVyZW5jZSBsaW5rIGFuZCBzaG9ydGN1dCByZWZlcmVuY2UgbGluayByZXNwZWN0aXZlbHkpXG4gICAgaWYgKCFsYWJlbCkgeyBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShsYWJlbFN0YXJ0LCBsYWJlbEVuZCk7IH1cblxuICAgIHJlZiA9IHN0YXRlLmVudi5yZWZlcmVuY2VzW25vcm1hbGl6ZVJlZmVyZW5jZShsYWJlbCldO1xuICAgIGlmICghcmVmKSB7XG4gICAgICBzdGF0ZS5wb3MgPSBvbGRQb3M7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhyZWYgPSByZWYuaHJlZjtcbiAgICB0aXRsZSA9IHJlZi50aXRsZTtcbiAgfVxuXG4gIC8vXG4gIC8vIFdlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmssIGFuZCBrbm93IGZvciBhIGZhY3QgaXQncyBhIHZhbGlkIGxpbms7XG4gIC8vIHNvIGFsbCB0aGF0J3MgbGVmdCB0byBkbyBpcyB0byBjYWxsIHRva2VuaXplci5cbiAgLy9cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wb3MgPSBsYWJlbFN0YXJ0O1xuICAgIHN0YXRlLnBvc01heCA9IGxhYmVsRW5kO1xuXG4gICAgaWYgKGlzSW1hZ2UpIHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICBzcmM6IGhyZWYsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgYWx0OiBzdGF0ZS5zcmMuc3Vic3RyKGxhYmVsU3RhcnQsIGxhYmVsRW5kIC0gbGFiZWxTdGFydCksXG4gICAgICAgIGxldmVsOiBzdGF0ZS5sZXZlbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlua19vcGVuJyxcbiAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWwrK1xuICAgICAgfSk7XG4gICAgICBzdGF0ZS5saW5rTGV2ZWwrKztcbiAgICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgICBzdGF0ZS5saW5rTGV2ZWwtLTtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnbGlua19jbG9zZScsIGxldmVsOiAtLXN0YXRlLmxldmVsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvbGlua3MuanNcbiAqKiBtb2R1bGUgaWQgPSAyNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFByb2Nlc3MgaW5saW5lIGZvb3Rub3RlcyAoXlsuLi5dKVxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwYXJzZUxpbmtMYWJlbCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcGFyc2VfbGlua19sYWJlbCcpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZm9vdG5vdGVfaW5saW5lKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIGxhYmVsU3RhcnQsXG4gICAgICBsYWJlbEVuZCxcbiAgICAgIGZvb3Rub3RlSWQsXG4gICAgICBvbGRMZW5ndGgsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBzdGFydCA9IHN0YXRlLnBvcztcblxuICBpZiAoc3RhcnQgKyAyID49IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1RS8qIF4gKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDVCLyogWyAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBsYWJlbFN0YXJ0ID0gc3RhcnQgKyAyO1xuICBsYWJlbEVuZCA9IHBhcnNlTGlua0xhYmVsKHN0YXRlLCBzdGFydCArIDEpO1xuXG4gIC8vIHBhcnNlciBmYWlsZWQgdG8gZmluZCAnXScsIHNvIGl0J3Mgbm90IGEgdmFsaWQgbm90ZVxuICBpZiAobGFiZWxFbmQgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIFdlIGZvdW5kIHRoZSBlbmQgb2YgdGhlIGxpbmssIGFuZCBrbm93IGZvciBhIGZhY3QgaXQncyBhIHZhbGlkIGxpbms7XG4gIC8vIHNvIGFsbCB0aGF0J3MgbGVmdCB0byBkbyBpcyB0byBjYWxsIHRva2VuaXplci5cbiAgLy9cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMpIHsgc3RhdGUuZW52LmZvb3Rub3RlcyA9IHt9OyB9XG4gICAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0ID0gW107IH1cbiAgICBmb290bm90ZUlkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0Lmxlbmd0aDtcblxuICAgIHN0YXRlLnBvcyA9IGxhYmVsU3RhcnQ7XG4gICAgc3RhdGUucG9zTWF4ID0gbGFiZWxFbmQ7XG5cbiAgICBzdGF0ZS5wdXNoKHtcbiAgICAgIHR5cGU6ICdmb290bm90ZV9yZWYnLFxuICAgICAgaWQ6IGZvb3Rub3RlSWQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgICBzdGF0ZS5saW5rTGV2ZWwrKztcbiAgICBvbGRMZW5ndGggPSBzdGF0ZS50b2tlbnMubGVuZ3RoO1xuICAgIHN0YXRlLnBhcnNlci50b2tlbml6ZShzdGF0ZSk7XG4gICAgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0W2Zvb3Rub3RlSWRdID0geyB0b2tlbnM6IHN0YXRlLnRva2Vucy5zcGxpY2Uob2xkTGVuZ3RoKSB9O1xuICAgIHN0YXRlLmxpbmtMZXZlbC0tO1xuICB9XG5cbiAgc3RhdGUucG9zID0gbGFiZWxFbmQgKyAxO1xuICBzdGF0ZS5wb3NNYXggPSBtYXg7XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9mb290bm90ZV9pbmxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAyNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIi8vIFByb2Nlc3MgZm9vdG5vdGUgcmVmZXJlbmNlcyAoW14uLi5dKVxuXG4ndXNlIHN0cmljdCc7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb290bm90ZV9yZWYoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgbGFiZWwsXG4gICAgICBwb3MsXG4gICAgICBmb290bm90ZUlkLFxuICAgICAgZm9vdG5vdGVTdWJJZCxcbiAgICAgIG1heCA9IHN0YXRlLnBvc01heCxcbiAgICAgIHN0YXJ0ID0gc3RhdGUucG9zO1xuXG4gIC8vIHNob3VsZCBiZSBhdCBsZWFzdCA0IGNoYXJzIC0gXCJbXnhdXCJcbiAgaWYgKHN0YXJ0ICsgMyA+IG1heCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAoIXN0YXRlLmVudi5mb290bm90ZXMgfHwgIXN0YXRlLmVudi5mb290bm90ZXMucmVmcykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHN0YXJ0KSAhPT0gMHg1Qi8qIFsgKi8pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChzdGFydCArIDEpICE9PSAweDVFLyogXiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHN0YXRlLmxldmVsID49IHN0YXRlLm9wdGlvbnMubWF4TmVzdGluZykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBmb3IgKHBvcyA9IHN0YXJ0ICsgMjsgcG9zIDwgbWF4OyBwb3MrKykge1xuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDIwKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDBBKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDVEIC8qIF0gKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwb3MgPT09IHN0YXJ0ICsgMikgeyByZXR1cm4gZmFsc2U7IH0gLy8gbm8gZW1wdHkgZm9vdG5vdGUgbGFiZWxzXG4gIGlmIChwb3MgPj0gbWF4KSB7IHJldHVybiBmYWxzZTsgfVxuICBwb3MrKztcblxuICBsYWJlbCA9IHN0YXRlLnNyYy5zbGljZShzdGFydCArIDIsIHBvcyAtIDEpO1xuICBpZiAodHlwZW9mIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGlmICghc2lsZW50KSB7XG4gICAgaWYgKCFzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3QpIHsgc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0ID0gW107IH1cblxuICAgIGlmIChzdGF0ZS5lbnYuZm9vdG5vdGVzLnJlZnNbJzonICsgbGFiZWxdIDwgMCkge1xuICAgICAgZm9vdG5vdGVJZCA9IHN0YXRlLmVudi5mb290bm90ZXMubGlzdC5sZW5ndGg7XG4gICAgICBzdGF0ZS5lbnYuZm9vdG5vdGVzLmxpc3RbZm9vdG5vdGVJZF0gPSB7IGxhYmVsOiBsYWJlbCwgY291bnQ6IDAgfTtcbiAgICAgIHN0YXRlLmVudi5mb290bm90ZXMucmVmc1snOicgKyBsYWJlbF0gPSBmb290bm90ZUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb290bm90ZUlkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5yZWZzWyc6JyArIGxhYmVsXTtcbiAgICB9XG5cbiAgICBmb290bm90ZVN1YklkID0gc3RhdGUuZW52LmZvb3Rub3Rlcy5saXN0W2Zvb3Rub3RlSWRdLmNvdW50O1xuICAgIHN0YXRlLmVudi5mb290bm90ZXMubGlzdFtmb290bm90ZUlkXS5jb3VudCsrO1xuXG4gICAgc3RhdGUucHVzaCh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGVfcmVmJyxcbiAgICAgIGlkOiBmb290bm90ZUlkLFxuICAgICAgc3ViSWQ6IGZvb3Rub3RlU3ViSWQsXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRlLnBvcyA9IHBvcztcbiAgc3RhdGUucG9zTWF4ID0gbWF4O1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvZm9vdG5vdGVfcmVmLmpzXG4gKiogbW9kdWxlIGlkID0gMjczXG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQcm9jZXNzIGF1dG9saW5rcyAnPHByb3RvY29sOi4uLj4nXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHVybF9zY2hlbWFzICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXJsX3NjaGVtYXMnKTtcbnZhciBub3JtYWxpemVMaW5rID0gcmVxdWlyZSgnLi4vaGVscGVycy9ub3JtYWxpemVfbGluaycpO1xuXG5cbi8qZXNsaW50IG1heC1sZW46MCovXG52YXIgRU1BSUxfUkUgICAgPSAvXjwoW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKik+LztcbnZhciBBVVRPTElOS19SRSA9IC9ePChbYS16QS1aLlxcLV17MSwyNX0pOihbXjw+XFx4MDAtXFx4MjBdKik+LztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGF1dG9saW5rKHN0YXRlLCBzaWxlbnQpIHtcbiAgdmFyIHRhaWwsIGxpbmtNYXRjaCwgZW1haWxNYXRjaCwgdXJsLCBmdWxsVXJsLCBwb3MgPSBzdGF0ZS5wb3M7XG5cbiAgaWYgKHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcykgIT09IDB4M0MvKiA8ICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHRhaWwgPSBzdGF0ZS5zcmMuc2xpY2UocG9zKTtcblxuICBpZiAodGFpbC5pbmRleE9mKCc+JykgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIGxpbmtNYXRjaCA9IHRhaWwubWF0Y2goQVVUT0xJTktfUkUpO1xuXG4gIGlmIChsaW5rTWF0Y2gpIHtcbiAgICBpZiAodXJsX3NjaGVtYXMuaW5kZXhPZihsaW5rTWF0Y2hbMV0udG9Mb3dlckNhc2UoKSkgPCAwKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgdXJsID0gbGlua01hdGNoWzBdLnNsaWNlKDEsIC0xKTtcbiAgICBmdWxsVXJsID0gbm9ybWFsaXplTGluayh1cmwpO1xuICAgIGlmICghc3RhdGUucGFyc2VyLnZhbGlkYXRlTGluayh1cmwpKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAnbGlua19vcGVuJyxcbiAgICAgICAgaHJlZjogZnVsbFVybCxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGNvbnRlbnQ6IHVybCxcbiAgICAgICAgbGV2ZWw6IHN0YXRlLmxldmVsICsgMVxuICAgICAgfSk7XG4gICAgICBzdGF0ZS5wdXNoKHsgdHlwZTogJ2xpbmtfY2xvc2UnLCBsZXZlbDogc3RhdGUubGV2ZWwgfSk7XG4gICAgfVxuXG4gICAgc3RhdGUucG9zICs9IGxpbmtNYXRjaFswXS5sZW5ndGg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBlbWFpbE1hdGNoID0gdGFpbC5tYXRjaChFTUFJTF9SRSk7XG5cbiAgaWYgKGVtYWlsTWF0Y2gpIHtcblxuICAgIHVybCA9IGVtYWlsTWF0Y2hbMF0uc2xpY2UoMSwgLTEpO1xuXG4gICAgZnVsbFVybCA9IG5vcm1hbGl6ZUxpbmsoJ21haWx0bzonICsgdXJsKTtcbiAgICBpZiAoIXN0YXRlLnBhcnNlci52YWxpZGF0ZUxpbmsoZnVsbFVybCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaW5rX29wZW4nLFxuICAgICAgICBocmVmOiBmdWxsVXJsLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICAgIH0pO1xuICAgICAgc3RhdGUucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgY29udGVudDogdXJsLFxuICAgICAgICBsZXZlbDogc3RhdGUubGV2ZWwgKyAxXG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnB1c2goeyB0eXBlOiAnbGlua19jbG9zZScsIGxldmVsOiBzdGF0ZS5sZXZlbCB9KTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wb3MgKz0gZW1haWxNYXRjaFswXS5sZW5ndGg7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvcnVsZXNfaW5saW5lL2F1dG9saW5rLmpzXG4gKiogbW9kdWxlIGlkID0gMjc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBQcm9jZXNzIGh0bWwgdGFnc1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIEhUTUxfVEFHX1JFID0gcmVxdWlyZSgnLi4vY29tbW9uL2h0bWxfcmUnKS5IVE1MX1RBR19SRTtcblxuXG5mdW5jdGlvbiBpc0xldHRlcihjaCkge1xuICAvKmVzbGludCBuby1iaXR3aXNlOjAqL1xuICB2YXIgbGMgPSBjaCB8IDB4MjA7IC8vIHRvIGxvd2VyIGNhc2VcbiAgcmV0dXJuIChsYyA+PSAweDYxLyogYSAqLykgJiYgKGxjIDw9IDB4N2EvKiB6ICovKTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGh0bWx0YWcoc3RhdGUsIHNpbGVudCkge1xuICB2YXIgY2gsIG1hdGNoLCBtYXgsIHBvcyA9IHN0YXRlLnBvcztcblxuICBpZiAoIXN0YXRlLm9wdGlvbnMuaHRtbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAvLyBDaGVjayBzdGFydFxuICBtYXggPSBzdGF0ZS5wb3NNYXg7XG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDNDLyogPCAqLyB8fFxuICAgICAgcG9zICsgMiA+PSBtYXgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBRdWljayBmYWlsIG9uIHNlY29uZCBjaGFyXG4gIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG4gIGlmIChjaCAhPT0gMHgyMS8qICEgKi8gJiZcbiAgICAgIGNoICE9PSAweDNGLyogPyAqLyAmJlxuICAgICAgY2ggIT09IDB4MkYvKiAvICovICYmXG4gICAgICAhaXNMZXR0ZXIoY2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChIVE1MX1RBR19SRSk7XG4gIGlmICghbWF0Y2gpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgaWYgKCFzaWxlbnQpIHtcbiAgICBzdGF0ZS5wdXNoKHtcbiAgICAgIHR5cGU6ICdodG1sdGFnJyxcbiAgICAgIGNvbnRlbnQ6IHN0YXRlLnNyYy5zbGljZShwb3MsIHBvcyArIG1hdGNoWzBdLmxlbmd0aCksXG4gICAgICBsZXZlbDogc3RhdGUubGV2ZWxcbiAgICB9KTtcbiAgfVxuICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9ydWxlc19pbmxpbmUvaHRtbHRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiLy8gUHJvY2VzcyBodG1sIGVudGl0eSAtICYjMTIzOywgJiN4QUY7LCAmcXVvdDssIC4uLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbnRpdGllcyAgICAgICAgICA9IHJlcXVpcmUoJy4uL2NvbW1vbi9lbnRpdGllcycpO1xudmFyIGhhcyAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaGFzO1xudmFyIGlzVmFsaWRFbnRpdHlDb2RlID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykuaXNWYWxpZEVudGl0eUNvZGU7XG52YXIgZnJvbUNvZGVQb2ludCAgICAgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5mcm9tQ29kZVBvaW50O1xuXG5cbnZhciBESUdJVEFMX1JFID0gL14mIygoPzp4W2EtZjAtOV17MSw4fXxbMC05XXsxLDh9KSk7L2k7XG52YXIgTkFNRURfUkUgICA9IC9eJihbYS16XVthLXowLTldezEsMzF9KTsvaTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVudGl0eShzdGF0ZSwgc2lsZW50KSB7XG4gIHZhciBjaCwgY29kZSwgbWF0Y2gsIHBvcyA9IHN0YXRlLnBvcywgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpICE9PSAweDI2LyogJiAqLykgeyByZXR1cm4gZmFsc2U7IH1cblxuICBpZiAocG9zICsgMSA8IG1heCkge1xuICAgIGNoID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zICsgMSk7XG5cbiAgICBpZiAoY2ggPT09IDB4MjMgLyogIyAqLykge1xuICAgICAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChESUdJVEFMX1JFKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgIGNvZGUgPSBtYXRjaFsxXVswXS50b0xvd2VyQ2FzZSgpID09PSAneCcgPyBwYXJzZUludChtYXRjaFsxXS5zbGljZSgxKSwgMTYpIDogcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICAgICAgICBzdGF0ZS5wZW5kaW5nICs9IGlzVmFsaWRFbnRpdHlDb2RlKGNvZGUpID8gZnJvbUNvZGVQb2ludChjb2RlKSA6IGZyb21Db2RlUG9pbnQoMHhGRkZEKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWF0Y2ggPSBzdGF0ZS5zcmMuc2xpY2UocG9zKS5tYXRjaChOQU1FRF9SRSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaWYgKGhhcyhlbnRpdGllcywgbWF0Y2hbMV0pKSB7XG4gICAgICAgICAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSBlbnRpdGllc1ttYXRjaFsxXV07IH1cbiAgICAgICAgICBzdGF0ZS5wb3MgKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaWxlbnQpIHsgc3RhdGUucGVuZGluZyArPSAnJic7IH1cbiAgc3RhdGUucG9zKys7XG4gIHJldHVybiB0cnVlO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL3J1bGVzX2lubGluZS9lbnRpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL34vbm9kZS1saWJzLWJyb3dzZXIvfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4gKiogbW9kdWxlIGlkID0gMjc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBMaXN0IG9mIHZhbGlkIGh0bWwgYmxvY2tzIG5hbWVzLCBhY2NvcnRpbmcgdG8gY29tbW9ubWFyayBzcGVjXG4vLyBodHRwOi8vamdtLmdpdGh1Yi5pby9Db21tb25NYXJrL3NwZWMuaHRtbCNodG1sLWJsb2Nrc1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBodG1sX2Jsb2NrcyA9IHt9O1xuXG5bXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2J1dHRvbicsXG4gICdibG9ja3F1b3RlJyxcbiAgJ2JvZHknLFxuICAnY2FudmFzJyxcbiAgJ2NhcHRpb24nLFxuICAnY29sJyxcbiAgJ2NvbGdyb3VwJyxcbiAgJ2RkJyxcbiAgJ2RpdicsXG4gICdkbCcsXG4gICdkdCcsXG4gICdlbWJlZCcsXG4gICdmaWVsZHNldCcsXG4gICdmaWdjYXB0aW9uJyxcbiAgJ2ZpZ3VyZScsXG4gICdmb290ZXInLFxuICAnZm9ybScsXG4gICdoMScsXG4gICdoMicsXG4gICdoMycsXG4gICdoNCcsXG4gICdoNScsXG4gICdoNicsXG4gICdoZWFkZXInLFxuICAnaGdyb3VwJyxcbiAgJ2hyJyxcbiAgJ2lmcmFtZScsXG4gICdsaScsXG4gICdtYXAnLFxuICAnb2JqZWN0JyxcbiAgJ29sJyxcbiAgJ291dHB1dCcsXG4gICdwJyxcbiAgJ3ByZScsXG4gICdwcm9ncmVzcycsXG4gICdzY3JpcHQnLFxuICAnc2VjdGlvbicsXG4gICdzdHlsZScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0ZXh0YXJlYScsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0cicsXG4gICd0aGVhZCcsXG4gICd1bCcsXG4gICd2aWRlbydcbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyBodG1sX2Jsb2Nrc1tuYW1lXSA9IHRydWU7IH0pO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gaHRtbF9ibG9ja3M7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9jb21tb24vaHRtbF9ibG9ja3MuanNcbiAqKiBtb2R1bGUgaWQgPSAyODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQYXJzZSBsaW5rIGxhYmVsc1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGZpcnN0IGNoYXJhY3RlciAoYFtgKSBhbHJlYWR5IG1hdGNoZXM7XG4gKiByZXR1cm5zIHRoZSBlbmQgb2YgdGhlIGxhYmVsLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSAge051bWJlcn0gc3RhcnRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VMaW5rTGFiZWwoc3RhdGUsIHN0YXJ0KSB7XG4gIHZhciBsZXZlbCwgZm91bmQsIG1hcmtlcixcbiAgICAgIGxhYmVsRW5kID0gLTEsXG4gICAgICBtYXggPSBzdGF0ZS5wb3NNYXgsXG4gICAgICBvbGRQb3MgPSBzdGF0ZS5wb3MsXG4gICAgICBvbGRGbGFnID0gc3RhdGUuaXNJbkxhYmVsO1xuXG4gIGlmIChzdGF0ZS5pc0luTGFiZWwpIHsgcmV0dXJuIC0xOyB9XG5cbiAgaWYgKHN0YXRlLmxhYmVsVW5tYXRjaGVkU2NvcGVzKSB7XG4gICAgc3RhdGUubGFiZWxVbm1hdGNoZWRTY29wZXMtLTtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBzdGF0ZS5wb3MgPSBzdGFydCArIDE7XG4gIHN0YXRlLmlzSW5MYWJlbCA9IHRydWU7XG4gIGxldmVsID0gMTtcblxuICB3aGlsZSAoc3RhdGUucG9zIDwgbWF4KSB7XG4gICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQoc3RhdGUucG9zKTtcbiAgICBpZiAobWFya2VyID09PSAweDVCIC8qIFsgKi8pIHtcbiAgICAgIGxldmVsKys7XG4gICAgfSBlbHNlIGlmIChtYXJrZXIgPT09IDB4NUQgLyogXSAqLykge1xuICAgICAgbGV2ZWwtLTtcbiAgICAgIGlmIChsZXZlbCA9PT0gMCkge1xuICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRlLnBhcnNlci5za2lwVG9rZW4oc3RhdGUpO1xuICB9XG5cbiAgaWYgKGZvdW5kKSB7XG4gICAgbGFiZWxFbmQgPSBzdGF0ZS5wb3M7XG4gICAgc3RhdGUubGFiZWxVbm1hdGNoZWRTY29wZXMgPSAwO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLmxhYmVsVW5tYXRjaGVkU2NvcGVzID0gbGV2ZWwgLSAxO1xuICB9XG5cbiAgLy8gcmVzdG9yZSBvbGQgc3RhdGVcbiAgc3RhdGUucG9zID0gb2xkUG9zO1xuICBzdGF0ZS5pc0luTGFiZWwgPSBvbGRGbGFnO1xuXG4gIHJldHVybiBsYWJlbEVuZDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfbGFiZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgbm9ybWFsaXplTGluayA9IHJlcXVpcmUoJy4vbm9ybWFsaXplX2xpbmsnKTtcbnZhciB1bmVzY2FwZU1kICAgID0gcmVxdWlyZSgnLi4vY29tbW9uL3V0aWxzJykudW5lc2NhcGVNZDtcblxuLyoqXG4gKiBQYXJzZSBsaW5rIGRlc3RpbmF0aW9uXG4gKlxuICogICAtIG9uIHN1Y2Nlc3MgaXQgcmV0dXJucyBhIHN0cmluZyBhbmQgdXBkYXRlcyBzdGF0ZS5wb3M7XG4gKiAgIC0gb24gZmFpbHVyZSBpdCByZXR1cm5zIG51bGxcbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHBvc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUxpbmtEZXN0aW5hdGlvbihzdGF0ZSwgcG9zKSB7XG4gIHZhciBjb2RlLCBsZXZlbCwgbGluayxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4O1xuXG4gIGlmIChzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpID09PSAweDNDIC8qIDwgKi8pIHtcbiAgICBwb3MrKztcbiAgICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgICBjb2RlID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcbiAgICAgIGlmIChjb2RlID09PSAweDBBIC8qIFxcbiAqLykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgIGlmIChjb2RlID09PSAweDNFIC8qID4gKi8pIHtcbiAgICAgICAgbGluayA9IG5vcm1hbGl6ZUxpbmsodW5lc2NhcGVNZChzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQgKyAxLCBwb3MpKSk7XG4gICAgICAgIGlmICghc3RhdGUucGFyc2VyLnZhbGlkYXRlTGluayhsaW5rKSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgc3RhdGUucG9zID0gcG9zICsgMTtcbiAgICAgICAgc3RhdGUubGlua0NvbnRlbnQgPSBsaW5rO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgICAgcG9zICs9IDI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwb3MrKztcbiAgICB9XG5cbiAgICAvLyBubyBjbG9zaW5nICc+J1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIHRoaXMgc2hvdWxkIGJlIC4uLiB9IGVsc2UgeyAuLi4gYnJhbmNoXG5cbiAgbGV2ZWwgPSAwO1xuICB3aGlsZSAocG9zIDwgbWF4KSB7XG4gICAgY29kZSA9IHN0YXRlLnNyYy5jaGFyQ29kZUF0KHBvcyk7XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyMCkgeyBicmVhazsgfVxuXG4gICAgLy8gYXNjaWkgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgaWYgKGNvZGUgPCAweDIwIHx8IGNvZGUgPT09IDB4N0YpIHsgYnJlYWs7IH1cblxuICAgIGlmIChjb2RlID09PSAweDVDIC8qIFxcICovICYmIHBvcyArIDEgPCBtYXgpIHtcbiAgICAgIHBvcyArPSAyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDB4MjggLyogKCAqLykge1xuICAgICAgbGV2ZWwrKztcbiAgICAgIGlmIChsZXZlbCA+IDEpIHsgYnJlYWs7IH1cbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gMHgyOSAvKiApICovKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsIDwgMCkgeyBicmVhazsgfVxuICAgIH1cblxuICAgIHBvcysrO1xuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSBwb3MpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgbGluayA9IG5vcm1hbGl6ZUxpbmsodW5lc2NhcGVNZChzdGF0ZS5zcmMuc2xpY2Uoc3RhcnQsIHBvcykpKTtcbiAgaWYgKCFzdGF0ZS5wYXJzZXIudmFsaWRhdGVMaW5rKGxpbmspKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHN0YXRlLmxpbmtDb250ZW50ID0gbGluaztcbiAgc3RhdGUucG9zID0gcG9zO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfZGVzdGluYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgdW5lc2NhcGVNZCA9IHJlcXVpcmUoJy4uL2NvbW1vbi91dGlscycpLnVuZXNjYXBlTWQ7XG5cbi8qKlxuICogUGFyc2UgbGluayB0aXRsZVxuICpcbiAqICAgLSBvbiBzdWNjZXNzIGl0IHJldHVybnMgYSBzdHJpbmcgYW5kIHVwZGF0ZXMgc3RhdGUucG9zO1xuICogICAtIG9uIGZhaWx1cmUgaXQgcmV0dXJucyBudWxsXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtICB7TnVtYmVyfSBwb3NcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VMaW5rVGl0bGUoc3RhdGUsIHBvcykge1xuICB2YXIgY29kZSxcbiAgICAgIHN0YXJ0ID0gcG9zLFxuICAgICAgbWF4ID0gc3RhdGUucG9zTWF4LFxuICAgICAgbWFya2VyID0gc3RhdGUuc3JjLmNoYXJDb2RlQXQocG9zKTtcblxuICBpZiAobWFya2VyICE9PSAweDIyIC8qIFwiICovICYmIG1hcmtlciAhPT0gMHgyNyAvKiAnICovICYmIG1hcmtlciAhPT0gMHgyOCAvKiAoICovKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIHBvcysrO1xuXG4gIC8vIGlmIG9wZW5pbmcgbWFya2VyIGlzIFwiKFwiLCBzd2l0Y2ggaXQgdG8gY2xvc2luZyBtYXJrZXIgXCIpXCJcbiAgaWYgKG1hcmtlciA9PT0gMHgyOCkgeyBtYXJrZXIgPSAweDI5OyB9XG5cbiAgd2hpbGUgKHBvcyA8IG1heCkge1xuICAgIGNvZGUgPSBzdGF0ZS5zcmMuY2hhckNvZGVBdChwb3MpO1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIHN0YXRlLnBvcyA9IHBvcyArIDE7XG4gICAgICBzdGF0ZS5saW5rQ29udGVudCA9IHVuZXNjYXBlTWQoc3RhdGUuc3JjLnNsaWNlKHN0YXJ0ICsgMSwgcG9zKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDB4NUMgLyogXFwgKi8gJiYgcG9zICsgMSA8IG1heCkge1xuICAgICAgcG9zICs9IDI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwb3MrKztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL3BhcnNlX2xpbmtfdGl0bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVSZWZlcmVuY2Uoc3RyKSB7XG4gIC8vIHVzZSAudG9VcHBlckNhc2UoKSBpbnN0ZWFkIG9mIC50b0xvd2VyQ2FzZSgpXG4gIC8vIGhlcmUgdG8gYXZvaWQgYSBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGVcbiAgLy8gbWVtYmVycyAobW9zdCBub3RhYmx5LCBgX19wcm90b19fYClcbiAgcmV0dXJuIHN0ci50cmltKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRvVXBwZXJDYXNlKCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvaGVscGVycy9ub3JtYWxpemVfcmVmZXJlbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBMaXN0IG9mIHZhbGlkIHVybCBzY2hlbWFzLCBhY2NvcnRpbmcgdG8gY29tbW9ubWFyayBzcGVjXG4vLyBodHRwOi8vamdtLmdpdGh1Yi5pby9Db21tb25NYXJrL3NwZWMuaHRtbCNhdXRvbGlua3NcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29hcCcsXG4gICdkb2knLFxuICAnamF2YXNjcmlwdCcsXG4gICdhYWEnLFxuICAnYWFhcycsXG4gICdhYm91dCcsXG4gICdhY2FwJyxcbiAgJ2NhcCcsXG4gICdjaWQnLFxuICAnY3JpZCcsXG4gICdkYXRhJyxcbiAgJ2RhdicsXG4gICdkaWN0JyxcbiAgJ2RucycsXG4gICdmaWxlJyxcbiAgJ2Z0cCcsXG4gICdnZW8nLFxuICAnZ28nLFxuICAnZ29waGVyJyxcbiAgJ2gzMjMnLFxuICAnaHR0cCcsXG4gICdodHRwcycsXG4gICdpYXgnLFxuICAnaWNhcCcsXG4gICdpbScsXG4gICdpbWFwJyxcbiAgJ2luZm8nLFxuICAnaXBwJyxcbiAgJ2lyaXMnLFxuICAnaXJpcy5iZWVwJyxcbiAgJ2lyaXMueHBjJyxcbiAgJ2lyaXMueHBjcycsXG4gICdpcmlzLmx3eicsXG4gICdsZGFwJyxcbiAgJ21haWx0bycsXG4gICdtaWQnLFxuICAnbXNycCcsXG4gICdtc3JwcycsXG4gICdtdHFwJyxcbiAgJ211cGRhdGUnLFxuICAnbmV3cycsXG4gICduZnMnLFxuICAnbmknLFxuICAnbmloJyxcbiAgJ25udHAnLFxuICAnb3BhcXVlbG9ja3Rva2VuJyxcbiAgJ3BvcCcsXG4gICdwcmVzJyxcbiAgJ3J0c3AnLFxuICAnc2VydmljZScsXG4gICdzZXNzaW9uJyxcbiAgJ3NodHRwJyxcbiAgJ3NpZXZlJyxcbiAgJ3NpcCcsXG4gICdzaXBzJyxcbiAgJ3NtcycsXG4gICdzbm1wJyxcbiAgJ3NvYXAuYmVlcCcsXG4gICdzb2FwLmJlZXBzJyxcbiAgJ3RhZycsXG4gICd0ZWwnLFxuICAndGVsbmV0JyxcbiAgJ3RmdHAnLFxuICAndGhpc21lc3NhZ2UnLFxuICAndG4zMjcwJyxcbiAgJ3RpcCcsXG4gICd0dicsXG4gICd1cm4nLFxuICAndmVtbWknLFxuICAnd3MnLFxuICAnd3NzJyxcbiAgJ3hjb24nLFxuICAneGNvbi11c2VyaWQnLFxuICAneG1scnBjLmJlZXAnLFxuICAneG1scnBjLmJlZXBzJyxcbiAgJ3htcHAnLFxuICAnejM5LjUwcicsXG4gICd6MzkuNTBzJyxcbiAgJ2FkaXVteHRyYScsXG4gICdhZnAnLFxuICAnYWZzJyxcbiAgJ2FpbScsXG4gICdhcHQnLFxuICAnYXR0YWNobWVudCcsXG4gICdhdycsXG4gICdiZXNoYXJlJyxcbiAgJ2JpdGNvaW4nLFxuICAnYm9sbycsXG4gICdjYWxsdG8nLFxuICAnY2hyb21lJyxcbiAgJ2Nocm9tZS1leHRlbnNpb24nLFxuICAnY29tLWV2ZW50YnJpdGUtYXR0ZW5kZWUnLFxuICAnY29udGVudCcsXG4gICdjdnMnLFxuICAnZGxuYS1wbGF5c2luZ2xlJyxcbiAgJ2RsbmEtcGxheWNvbnRhaW5lcicsXG4gICdkdG4nLFxuICAnZHZiJyxcbiAgJ2VkMmsnLFxuICAnZmFjZXRpbWUnLFxuICAnZmVlZCcsXG4gICdmaW5nZXInLFxuICAnZmlzaCcsXG4gICdnZycsXG4gICdnaXQnLFxuICAnZ2l6bW9wcm9qZWN0JyxcbiAgJ2d0YWxrJyxcbiAgJ2hjcCcsXG4gICdpY29uJyxcbiAgJ2lwbicsXG4gICdpcmMnLFxuICAnaXJjNicsXG4gICdpcmNzJyxcbiAgJ2l0bXMnLFxuICAnamFyJyxcbiAgJ2ptcycsXG4gICdrZXlwYXJjJyxcbiAgJ2xhc3RmbScsXG4gICdsZGFwcycsXG4gICdtYWduZXQnLFxuICAnbWFwcycsXG4gICdtYXJrZXQnLFxuICAnbWVzc2FnZScsXG4gICdtbXMnLFxuICAnbXMtaGVscCcsXG4gICdtc25pbScsXG4gICdtdW1ibGUnLFxuICAnbXZuJyxcbiAgJ25vdGVzJyxcbiAgJ29pZCcsXG4gICdwYWxtJyxcbiAgJ3BhcGFyYXp6aScsXG4gICdwbGF0Zm9ybScsXG4gICdwcm94eScsXG4gICdwc3ljJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3JlcycsXG4gICdyZXNvdXJjZScsXG4gICdybWknLFxuICAncnN5bmMnLFxuICAncnRtcCcsXG4gICdzZWNvbmRsaWZlJyxcbiAgJ3NmdHAnLFxuICAnc2duJyxcbiAgJ3NreXBlJyxcbiAgJ3NtYicsXG4gICdzb2xkYXQnLFxuICAnc3BvdGlmeScsXG4gICdzc2gnLFxuICAnc3RlYW0nLFxuICAnc3ZuJyxcbiAgJ3RlYW1zcGVhaycsXG4gICd0aGluZ3MnLFxuICAndWRwJyxcbiAgJ3VucmVhbCcsXG4gICd1dDIwMDQnLFxuICAndmVudHJpbG8nLFxuICAndmlldy1zb3VyY2UnLFxuICAnd2ViY2FsJyxcbiAgJ3d0YWknLFxuICAnd3ljaXd5ZycsXG4gICd4ZmlyZScsXG4gICd4cmknLFxuICAneW1zZ3InXG5dO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVtYXJrYWJsZS9saWIvY29tbW9uL3VybF9zY2hlbWFzLmpzXG4gKiogbW9kdWxlIGlkID0gMjg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlRW50aXRpZXMgPSByZXF1aXJlKCcuLi9jb21tb24vdXRpbHMnKS5yZXBsYWNlRW50aXRpZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplTGluayh1cmwpIHtcbiAgdmFyIG5vcm1hbGl6ZWQgPSByZXBsYWNlRW50aXRpZXModXJsKTtcbiAgLy8gV2Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIHJlc3VsdCBvZiBtYWxmb3JtZWQgVVJJcyxcbiAgLy8gYW5kIHNob3VsZCBub3QgdGhyb3cgYW4gZXhjZXB0aW9uLlxuICB0cnkge1xuICAgIG5vcm1hbGl6ZWQgPSBkZWNvZGVVUkkobm9ybWFsaXplZCk7XG4gIH0gY2F0Y2ggKGVycikge31cbiAgcmV0dXJuIGVuY29kZVVSSShub3JtYWxpemVkKTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL2xpYi9oZWxwZXJzL25vcm1hbGl6ZV9saW5rLmpzXG4gKiogbW9kdWxlIGlkID0gMjg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIvLyBSZWdleHBzIHRvIG1hdGNoIGh0bWwgZWxlbWVudHNcblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmZ1bmN0aW9uIHJlcGxhY2UocmVnZXgsIG9wdGlvbnMpIHtcbiAgcmVnZXggPSByZWdleC5zb3VyY2U7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8ICcnO1xuXG4gIHJldHVybiBmdW5jdGlvbiBzZWxmKG5hbWUsIHZhbCkge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB2YWwgPSB2YWwuc291cmNlIHx8IHZhbDtcbiAgICByZWdleCA9IHJlZ2V4LnJlcGxhY2UobmFtZSwgdmFsKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfTtcbn1cblxuXG52YXIgYXR0cl9uYW1lICAgICA9IC9bYS16QS1aXzpdW2EtekEtWjAtOTouXy1dKi87XG5cbnZhciB1bnF1b3RlZCAgICAgID0gL1teXCInPTw+YFxceDAwLVxceDIwXSsvO1xudmFyIHNpbmdsZV9xdW90ZWQgPSAvJ1teJ10qJy87XG52YXIgZG91YmxlX3F1b3RlZCA9IC9cIlteXCJdKlwiLztcblxuLyplc2xpbnQgbm8tc3BhY2VkLWZ1bmM6MCovXG52YXIgYXR0cl92YWx1ZSAgPSByZXBsYWNlKC8oPzp1bnF1b3RlZHxzaW5nbGVfcXVvdGVkfGRvdWJsZV9xdW90ZWQpLylcbiAgICAgICAgICAgICAgICAgICAgKCd1bnF1b3RlZCcsIHVucXVvdGVkKVxuICAgICAgICAgICAgICAgICAgICAoJ3NpbmdsZV9xdW90ZWQnLCBzaW5nbGVfcXVvdGVkKVxuICAgICAgICAgICAgICAgICAgICAoJ2RvdWJsZV9xdW90ZWQnLCBkb3VibGVfcXVvdGVkKVxuICAgICAgICAgICAgICAgICAgICAoKTtcblxudmFyIGF0dHJpYnV0ZSAgID0gcmVwbGFjZSgvKD86XFxzK2F0dHJfbmFtZSg/Olxccyo9XFxzKmF0dHJfdmFsdWUpPykvKVxuICAgICAgICAgICAgICAgICAgICAoJ2F0dHJfbmFtZScsIGF0dHJfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgKCdhdHRyX3ZhbHVlJywgYXR0cl92YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgKCk7XG5cbnZhciBvcGVuX3RhZyAgICA9IHJlcGxhY2UoLzxbQS1aYS16XVtBLVphLXowLTldKmF0dHJpYnV0ZSpcXHMqXFwvPz4vKVxuICAgICAgICAgICAgICAgICAgICAoJ2F0dHJpYnV0ZScsIGF0dHJpYnV0ZSlcbiAgICAgICAgICAgICAgICAgICAgKCk7XG5cbnZhciBjbG9zZV90YWcgICA9IC88XFwvW0EtWmEtel1bQS1aYS16MC05XSpcXHMqPi87XG52YXIgY29tbWVudCAgICAgPSAvPCEtLShbXi1dK3xbLV1bXi1dKykqLS0+LztcbnZhciBwcm9jZXNzaW5nICA9IC88Wz9dLio/Wz9dPi87XG52YXIgZGVjbGFyYXRpb24gPSAvPCFbQS1aXStcXHMrW14+XSo+LztcbnZhciBjZGF0YSAgICAgICA9IC88IVxcW0NEQVRBXFxbKFteXFxdXSt8XFxdW15cXF1dfFxcXVxcXVtePl0pKlxcXVxcXT4vO1xuXG52YXIgSFRNTF9UQUdfUkUgPSByZXBsYWNlKC9eKD86b3Blbl90YWd8Y2xvc2VfdGFnfGNvbW1lbnR8cHJvY2Vzc2luZ3xkZWNsYXJhdGlvbnxjZGF0YSkvKVxuICAoJ29wZW5fdGFnJywgb3Blbl90YWcpXG4gICgnY2xvc2VfdGFnJywgY2xvc2VfdGFnKVxuICAoJ2NvbW1lbnQnLCBjb21tZW50KVxuICAoJ3Byb2Nlc3NpbmcnLCBwcm9jZXNzaW5nKVxuICAoJ2RlY2xhcmF0aW9uJywgZGVjbGFyYXRpb24pXG4gICgnY2RhdGEnLCBjZGF0YSlcbiAgKCk7XG5cblxubW9kdWxlLmV4cG9ydHMuSFRNTF9UQUdfUkUgPSBIVE1MX1RBR19SRTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlbWFya2FibGUvbGliL2NvbW1vbi9odG1sX3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMjg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDFcbiAqKi8iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHJvb3RbJ0F1dG9saW5rZXInXSA9IGZhY3RvcnkoKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3RbJ0F1dG9saW5rZXInXSA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbi8qIVxuICogQXV0b2xpbmtlci5qc1xuICogMC4xNS4zXG4gKlxuICogQ29weXJpZ2h0KGMpIDIwMTUgR3JlZ29yeSBKYWNvYnMgPGdyZWdAZ3JlZy1qYWNvYnMuY29tPlxuICogTUlUIExpY2Vuc2VkLiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVnamFjb2JzL0F1dG9saW5rZXIuanNcbiAqL1xuLyoqXG4gKiBAY2xhc3MgQXV0b2xpbmtlclxuICogQGV4dGVuZHMgT2JqZWN0XG4gKiBcbiAqIFV0aWxpdHkgY2xhc3MgdXNlZCB0byBwcm9jZXNzIGEgZ2l2ZW4gc3RyaW5nIG9mIHRleHQsIGFuZCB3cmFwIHRoZSBVUkxzLCBlbWFpbCBhZGRyZXNzZXMsIGFuZCBUd2l0dGVyIGhhbmRsZXMgaW4gXG4gKiB0aGUgYXBwcm9wcmlhdGUgYW5jaG9yICgmbHQ7YSZndDspIHRhZ3MgdG8gdHVybiB0aGVtIGludG8gbGlua3MuXG4gKiBcbiAqIEFueSBvZiB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIG1heSBiZSBwcm92aWRlZCBpbiBhbiBPYmplY3QgKG1hcCkgcHJvdmlkZWQgdG8gdGhlIEF1dG9saW5rZXIgY29uc3RydWN0b3IsIHdoaWNoXG4gKiB3aWxsIGNvbmZpZ3VyZSBob3cgdGhlIHtAbGluayAjbGluayBsaW5rKCl9IG1ldGhvZCB3aWxsIHByb2Nlc3MgdGhlIGxpbmtzLlxuICogXG4gKiBGb3IgZXhhbXBsZTpcbiAqIFxuICogICAgIHZhciBhdXRvbGlua2VyID0gbmV3IEF1dG9saW5rZXIoIHtcbiAqICAgICAgICAgbmV3V2luZG93IDogZmFsc2UsXG4gKiAgICAgICAgIHRydW5jYXRlICA6IDMwXG4gKiAgICAgfSApO1xuICogICAgIFxuICogICAgIHZhciBodG1sID0gYXV0b2xpbmtlci5saW5rKCBcIkpvZSB3ZW50IHRvIHd3dy55YWhvby5jb21cIiApO1xuICogICAgIC8vIHByb2R1Y2VzOiAnSm9lIHdlbnQgdG8gPGEgaHJlZj1cImh0dHA6Ly93d3cueWFob28uY29tXCI+eWFob28uY29tPC9hPidcbiAqIFxuICogXG4gKiBUaGUge0BsaW5rICNzdGF0aWMtbGluayBzdGF0aWMgbGluaygpfSBtZXRob2QgbWF5IGFsc28gYmUgdXNlZCB0byBpbmxpbmUgb3B0aW9ucyBpbnRvIGEgc2luZ2xlIGNhbGwsIHdoaWNoIG1heVxuICogYmUgbW9yZSBjb252ZW5pZW50IGZvciBvbmUtb2ZmIHVzZXMuIEZvciBleGFtcGxlOlxuICogXG4gKiAgICAgdmFyIGh0bWwgPSBBdXRvbGlua2VyLmxpbmsoIFwiSm9lIHdlbnQgdG8gd3d3LnlhaG9vLmNvbVwiLCB7XG4gKiAgICAgICAgIG5ld1dpbmRvdyA6IGZhbHNlLFxuICogICAgICAgICB0cnVuY2F0ZSAgOiAzMFxuICogICAgIH0gKTtcbiAqICAgICAvLyBwcm9kdWNlczogJ0pvZSB3ZW50IHRvIDxhIGhyZWY9XCJodHRwOi8vd3d3LnlhaG9vLmNvbVwiPnlhaG9vLmNvbTwvYT4nXG4gKiBcbiAqIFxuICogIyMgQ3VzdG9tIFJlcGxhY2VtZW50cyBvZiBMaW5rc1xuICogXG4gKiBJZiB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGRvIG5vdCBwcm92aWRlIGVub3VnaCBmbGV4aWJpbGl0eSwgYSB7QGxpbmsgI3JlcGxhY2VGbn0gbWF5IGJlIHByb3ZpZGVkIHRvIGZ1bGx5IGN1c3RvbWl6ZVxuICogdGhlIG91dHB1dCBvZiBBdXRvbGlua2VyLiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbmNlIGZvciBlYWNoIFVSTC9FbWFpbC9Ud2l0dGVyIGhhbmRsZSBtYXRjaCB0aGF0IGlzIGVuY291bnRlcmVkLlxuICogXG4gKiBGb3IgZXhhbXBsZTpcbiAqIFxuICogICAgIHZhciBpbnB1dCA9IFwiLi4uXCI7ICAvLyBzdHJpbmcgd2l0aCBVUkxzLCBFbWFpbCBBZGRyZXNzZXMsIGFuZCBUd2l0dGVyIEhhbmRsZXNcbiAqICAgICBcbiAqICAgICB2YXIgbGlua2VkVGV4dCA9IEF1dG9saW5rZXIubGluayggaW5wdXQsIHtcbiAqICAgICAgICAgcmVwbGFjZUZuIDogZnVuY3Rpb24oIGF1dG9saW5rZXIsIG1hdGNoICkge1xuICogICAgICAgICAgICAgY29uc29sZS5sb2coIFwiaHJlZiA9IFwiLCBtYXRjaC5nZXRBbmNob3JIcmVmKCkgKTtcbiAqICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInRleHQgPSBcIiwgbWF0Y2guZ2V0QW5jaG9yVGV4dCgpICk7XG4gKiAgICAgICAgIFxuICogICAgICAgICAgICAgc3dpdGNoKCBtYXRjaC5nZXRUeXBlKCkgKSB7XG4gKiAgICAgICAgICAgICAgICAgY2FzZSAndXJsJyA6IFxuICogICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJ1cmw6IFwiLCBtYXRjaC5nZXRVcmwoKSApO1xuICogICAgICAgICAgICAgICAgICAgICBcbiAqICAgICAgICAgICAgICAgICAgICAgaWYoIG1hdGNoLmdldFVybCgpLmluZGV4T2YoICdteXNpdGUuY29tJyApID09PSAtMSApIHtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSBhdXRvbGlua2VyLmdldFRhZ0J1aWxkZXIoKS5idWlsZCggbWF0Y2ggKTsgIC8vIHJldHVybnMgYW4gYEF1dG9saW5rZXIuSHRtbFRhZ2AgaW5zdGFuY2UsIHdoaWNoIHByb3ZpZGVzIG11dGF0b3IgbWV0aG9kcyBmb3IgZWFzeSBjaGFuZ2VzXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICB0YWcuc2V0QXR0ciggJ3JlbCcsICdub2ZvbGxvdycgKTtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIHRhZy5hZGRDbGFzcyggJ2V4dGVybmFsLWxpbmsnICk7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWc7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAqICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOyAgLy8gbGV0IEF1dG9saW5rZXIgcGVyZm9ybSBpdHMgbm9ybWFsIGFuY2hvciB0YWcgcmVwbGFjZW1lbnRcbiAqICAgICAgICAgICAgICAgICAgICAgfVxuICogICAgICAgICAgICAgICAgICAgICBcbiAqICAgICAgICAgICAgICAgICBjYXNlICdlbWFpbCcgOlxuICogICAgICAgICAgICAgICAgICAgICB2YXIgZW1haWwgPSBtYXRjaC5nZXRFbWFpbCgpO1xuICogICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJlbWFpbDogXCIsIGVtYWlsICk7XG4gKiAgICAgICAgICAgICAgICAgICAgIFxuICogICAgICAgICAgICAgICAgICAgICBpZiggZW1haWwgPT09IFwibXlAb3duLmFkZHJlc3NcIiApIHtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgIC8vIGRvbid0IGF1dG8tbGluayB0aGlzIHBhcnRpY3VsYXIgZW1haWwgYWRkcmVzczsgbGVhdmUgYXMtaXNcbiAqICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgIC8vIG5vIHJldHVybiB2YWx1ZSB3aWxsIGhhdmUgQXV0b2xpbmtlciBwZXJmb3JtIGl0cyBub3JtYWwgYW5jaG9yIHRhZyByZXBsYWNlbWVudCAoc2FtZSBhcyByZXR1cm5pbmcgYHRydWVgKVxuICogICAgICAgICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICAgICAgICAgXG4gKiAgICAgICAgICAgICAgICAgY2FzZSAndHdpdHRlcicgOlxuICogICAgICAgICAgICAgICAgICAgICB2YXIgdHdpdHRlckhhbmRsZSA9IG1hdGNoLmdldFR3aXR0ZXJIYW5kbGUoKTtcbiAqICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHR3aXR0ZXJIYW5kbGUgKTtcbiAqICAgICAgICAgICAgICAgICAgICAgXG4gKiAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGEgaHJlZj1cImh0dHA6Ly9uZXdwbGFjZS50by5saW5rLnR3aXR0ZXIuaGFuZGxlcy50by9cIj4nICsgdHdpdHRlckhhbmRsZSArICc8L2E+JztcbiAqICAgICAgICAgICAgIH1cbiAqICAgICAgICAgfVxuICogICAgIH0gKTtcbiAqIFxuICogXG4gKiBUaGUgZnVuY3Rpb24gbWF5IHJldHVybiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAqIFxuICogLSBgdHJ1ZWAgKEJvb2xlYW4pOiBBbGxvdyBBdXRvbGlua2VyIHRvIHJlcGxhY2UgdGhlIG1hdGNoIGFzIGl0IG5vcm1hbGx5IHdvdWxkLlxuICogLSBgZmFsc2VgIChCb29sZWFuKTogRG8gbm90IHJlcGxhY2UgdGhlIGN1cnJlbnQgbWF0Y2ggYXQgYWxsIC0gbGVhdmUgYXMtaXMuXG4gKiAtIEFueSBTdHJpbmc6IElmIGEgc3RyaW5nIGlzIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uLCB0aGUgc3RyaW5nIHdpbGwgYmUgdXNlZCBkaXJlY3RseSBhcyB0aGUgcmVwbGFjZW1lbnQgSFRNTCBmb3JcbiAqICAgdGhlIG1hdGNoLlxuICogLSBBbiB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnfSBpbnN0YW5jZSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYnVpbGQvbW9kaWZ5IGFuIEhUTUwgdGFnIGJlZm9yZSB3cml0aW5nIG91dCBpdHMgSFRNTCB0ZXh0LlxuICogXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgQXV0b2xpbmtlciBpbnN0YW5jZSwgc3BlY2lmaWVkIGluIGFuIE9iamVjdCAobWFwKS5cbiAqL1xudmFyIEF1dG9saW5rZXIgPSBmdW5jdGlvbiggY2ZnICkge1xuXHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCB0aGlzLCBjZmcgKTsgIC8vIGFzc2lnbiB0aGUgcHJvcGVydGllcyBvZiBgY2ZnYCBvbnRvIHRoZSBBdXRvbGlua2VyIGluc3RhbmNlLiBQcm90b3R5cGUgcHJvcGVydGllcyB3aWxsIGJlIHVzZWQgZm9yIG1pc3NpbmcgY29uZmlncy5cbn07XG5cblxuQXV0b2xpbmtlci5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yIDogQXV0b2xpbmtlciwgIC8vIGZpeCBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuXHRcblx0LyoqXG5cdCAqIEBjZmcge0Jvb2xlYW59IHVybHNcblx0ICogXG5cdCAqIGB0cnVlYCBpZiBtaXNjZWxsYW5lb3VzIFVSTHMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgbGlua2VkLCBgZmFsc2VgIGlmIHRoZXkgc2hvdWxkIG5vdCBiZS5cblx0ICovXG5cdHVybHMgOiB0cnVlLFxuXHRcblx0LyoqXG5cdCAqIEBjZmcge0Jvb2xlYW59IGVtYWlsXG5cdCAqIFxuXHQgKiBgdHJ1ZWAgaWYgZW1haWwgYWRkcmVzc2VzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGxpbmtlZCwgYGZhbHNlYCBpZiB0aGV5IHNob3VsZCBub3QgYmUuXG5cdCAqL1xuXHRlbWFpbCA6IHRydWUsXG5cdFxuXHQvKipcblx0ICogQGNmZyB7Qm9vbGVhbn0gdHdpdHRlclxuXHQgKiBcblx0ICogYHRydWVgIGlmIFR3aXR0ZXIgaGFuZGxlcyAoXCJAZXhhbXBsZVwiKSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBsaW5rZWQsIGBmYWxzZWAgaWYgdGhleSBzaG91bGQgbm90IGJlLlxuXHQgKi9cblx0dHdpdHRlciA6IHRydWUsXG5cdFxuXHQvKipcblx0ICogQGNmZyB7Qm9vbGVhbn0gbmV3V2luZG93XG5cdCAqIFxuXHQgKiBgdHJ1ZWAgaWYgdGhlIGxpbmtzIHNob3VsZCBvcGVuIGluIGEgbmV3IHdpbmRvdywgYGZhbHNlYCBvdGhlcndpc2UuXG5cdCAqL1xuXHRuZXdXaW5kb3cgOiB0cnVlLFxuXHRcblx0LyoqXG5cdCAqIEBjZmcge0Jvb2xlYW59IHN0cmlwUHJlZml4XG5cdCAqIFxuXHQgKiBgdHJ1ZWAgaWYgJ2h0dHA6Ly8nIG9yICdodHRwczovLycgYW5kL29yIHRoZSAnd3d3Licgc2hvdWxkIGJlIHN0cmlwcGVkIGZyb20gdGhlIGJlZ2lubmluZyBvZiBVUkwgbGlua3MnIHRleHQsIFxuXHQgKiBgZmFsc2VgIG90aGVyd2lzZS5cblx0ICovXG5cdHN0cmlwUHJlZml4IDogdHJ1ZSxcblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtOdW1iZXJ9IHRydW5jYXRlXG5cdCAqIFxuXHQgKiBBIG51bWJlciBmb3IgaG93IG1hbnkgY2hhcmFjdGVycyBsb25nIFVSTHMvZW1haWxzL3R3aXR0ZXIgaGFuZGxlcyBzaG91bGQgYmUgdHJ1bmNhdGVkIHRvIGluc2lkZSB0aGUgdGV4dCBvZiBcblx0ICogYSBsaW5rLiBJZiB0aGUgVVJML2VtYWlsL3R3aXR0ZXIgaXMgb3ZlciB0aGlzIG51bWJlciBvZiBjaGFyYWN0ZXJzLCBpdCB3aWxsIGJlIHRydW5jYXRlZCB0byB0aGlzIGxlbmd0aCBieSBcblx0ICogYWRkaW5nIGEgdHdvIHBlcmlvZCBlbGxpcHNpcyAoJy4uJykgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuXHQgKiBcblx0ICogRm9yIGV4YW1wbGU6IEEgdXJsIGxpa2UgJ2h0dHA6Ly93d3cueWFob28uY29tL3NvbWUvbG9uZy9wYXRoL3RvL2EvZmlsZScgdHJ1bmNhdGVkIHRvIDI1IGNoYXJhY3RlcnMgbWlnaHQgbG9va1xuXHQgKiBzb21ldGhpbmcgbGlrZSB0aGlzOiAneWFob28uY29tL3NvbWUvbG9uZy9wYXQuLidcblx0ICovXG5cdHRydW5jYXRlIDogdW5kZWZpbmVkLFxuXHRcblx0LyoqXG5cdCAqIEBjZmcge1N0cmluZ30gY2xhc3NOYW1lXG5cdCAqIFxuXHQgKiBBIENTUyBjbGFzcyBuYW1lIHRvIGFkZCB0byB0aGUgZ2VuZXJhdGVkIGxpbmtzLiBUaGlzIGNsYXNzIHdpbGwgYmUgYWRkZWQgdG8gYWxsIGxpbmtzLCBhcyB3ZWxsIGFzIHRoaXMgY2xhc3Ncblx0ICogcGx1cyB1cmwvZW1haWwvdHdpdHRlciBzdWZmaXhlcyBmb3Igc3R5bGluZyB1cmwvZW1haWwvdHdpdHRlciBsaW5rcyBkaWZmZXJlbnRseS5cblx0ICogXG5cdCAqIEZvciBleGFtcGxlLCBpZiB0aGlzIGNvbmZpZyBpcyBwcm92aWRlZCBhcyBcIm15TGlua1wiLCB0aGVuOlxuXHQgKiBcblx0ICogLSBVUkwgbGlua3Mgd2lsbCBoYXZlIHRoZSBDU1MgY2xhc3NlczogXCJteUxpbmsgbXlMaW5rLXVybFwiXG5cdCAqIC0gRW1haWwgbGlua3Mgd2lsbCBoYXZlIHRoZSBDU1MgY2xhc3NlczogXCJteUxpbmsgbXlMaW5rLWVtYWlsXCIsIGFuZFxuXHQgKiAtIFR3aXR0ZXIgbGlua3Mgd2lsbCBoYXZlIHRoZSBDU1MgY2xhc3NlczogXCJteUxpbmsgbXlMaW5rLXR3aXR0ZXJcIlxuXHQgKi9cblx0Y2xhc3NOYW1lIDogXCJcIixcblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtGdW5jdGlvbn0gcmVwbGFjZUZuXG5cdCAqIFxuXHQgKiBBIGZ1bmN0aW9uIHRvIGluZGl2aWR1YWxseSBwcm9jZXNzIGVhY2ggVVJML0VtYWlsL1R3aXR0ZXIgbWF0Y2ggZm91bmQgaW4gdGhlIGlucHV0IHN0cmluZy5cblx0ICogXG5cdCAqIFNlZSB0aGUgY2xhc3MncyBkZXNjcmlwdGlvbiBmb3IgdXNhZ2UuXG5cdCAqIFxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcblx0ICogXG5cdCAqIEBjZmcge0F1dG9saW5rZXJ9IHJlcGxhY2VGbi5hdXRvbGlua2VyIFRoZSBBdXRvbGlua2VyIGluc3RhbmNlLCB3aGljaCBtYXkgYmUgdXNlZCB0byByZXRyaWV2ZSBjaGlsZCBvYmplY3RzIGZyb20gKHN1Y2hcblx0ICogICBhcyB0aGUgaW5zdGFuY2UncyB7QGxpbmsgI2dldFRhZ0J1aWxkZXIgdGFnIGJ1aWxkZXJ9KS5cblx0ICogQGNmZyB7QXV0b2xpbmtlci5tYXRjaC5NYXRjaH0gcmVwbGFjZUZuLm1hdGNoIFRoZSBNYXRjaCBpbnN0YW5jZSB3aGljaCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVcblx0ICogICB7QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5VcmwgVVJMfS97QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5FbWFpbCBlbWFpbH0ve0BsaW5rIEF1dG9saW5rZXIubWF0Y2guVHdpdHRlciBUd2l0dGVyfVxuXHQgKiAgIG1hdGNoIHRoYXQgdGhlIGByZXBsYWNlRm5gIGlzIGN1cnJlbnRseSBwcm9jZXNzaW5nLlxuXHQgKi9cblx0XG5cdFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHByb3BlcnR5IHtBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbFBhcnNlcn0gaHRtbFBhcnNlclxuXHQgKiBcblx0ICogVGhlIEh0bWxQYXJzZXIgaW5zdGFuY2UgdXNlZCB0byBza2lwIG92ZXIgSFRNTCB0YWdzLCB3aGlsZSBmaW5kaW5nIHRleHQgbm9kZXMgdG8gcHJvY2Vzcy4gVGhpcyBpcyBsYXppbHkgaW5zdGFudGlhdGVkXG5cdCAqIGluIHRoZSB7QGxpbmsgI2dldEh0bWxQYXJzZXJ9IG1ldGhvZC5cblx0ICovXG5cdGh0bWxQYXJzZXIgOiB1bmRlZmluZWQsXG5cdFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHByb3BlcnR5IHtBdXRvbGlua2VyLm1hdGNoUGFyc2VyLk1hdGNoUGFyc2VyfSBtYXRjaFBhcnNlclxuXHQgKiBcblx0ICogVGhlIE1hdGNoUGFyc2VyIGluc3RhbmNlIHVzZWQgdG8gZmluZCBVUkwvZW1haWwvVHdpdHRlciBtYXRjaGVzIGluIHRoZSB0ZXh0IG5vZGVzIG9mIGFuIGlucHV0IHN0cmluZyBwYXNzZWQgdG9cblx0ICoge0BsaW5rICNsaW5rfS4gVGhpcyBpcyBsYXppbHkgaW5zdGFudGlhdGVkIGluIHRoZSB7QGxpbmsgI2dldE1hdGNoUGFyc2VyfSBtZXRob2QuXG5cdCAqL1xuXHRtYXRjaFBhcnNlciA6IHVuZGVmaW5lZCxcblx0XG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcHJvcGVydHkge0F1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlcn0gdGFnQnVpbGRlclxuXHQgKiBcblx0ICogVGhlIEFuY2hvclRhZ0J1aWxkZXIgaW5zdGFuY2UgdXNlZCB0byBidWlsZCB0aGUgVVJML2VtYWlsL1R3aXR0ZXIgcmVwbGFjZW1lbnQgYW5jaG9yIHRhZ3MuIFRoaXMgaXMgbGF6aWx5IGluc3RhbnRpYXRlZFxuXHQgKiBpbiB0aGUge0BsaW5rICNnZXRUYWdCdWlsZGVyfSBtZXRob2QuXG5cdCAqL1xuXHR0YWdCdWlsZGVyIDogdW5kZWZpbmVkLFxuXHRcblx0XG5cdC8qKlxuXHQgKiBBdXRvbWF0aWNhbGx5IGxpbmtzIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyBmb3VuZCBpbiB0aGUgZ2l2ZW4gY2h1bmsgb2YgSFRNTC4gXG5cdCAqIERvZXMgbm90IGxpbmsgVVJMcyBmb3VuZCB3aXRoaW4gSFRNTCB0YWdzLlxuXHQgKiBcblx0ICogRm9yIGluc3RhbmNlLCBpZiBnaXZlbiB0aGUgdGV4dDogYFlvdSBzaG91bGQgZ28gdG8gaHR0cDovL3d3dy55YWhvby5jb21gLCB0aGVuIHRoZSByZXN1bHRcblx0ICogd2lsbCBiZSBgWW91IHNob3VsZCBnbyB0byAmbHQ7YSBocmVmPVwiaHR0cDovL3d3dy55YWhvby5jb21cIiZndDtodHRwOi8vd3d3LnlhaG9vLmNvbSZsdDsvYSZndDtgXG5cdCAqIFxuXHQgKiBUaGlzIG1ldGhvZCBmaW5kcyB0aGUgdGV4dCBhcm91bmQgYW55IEhUTUwgZWxlbWVudHMgaW4gdGhlIGlucHV0IGB0ZXh0T3JIdG1sYCwgd2hpY2ggd2lsbCBiZSB0aGUgdGV4dCB0aGF0IGlzIHByb2Nlc3NlZC5cblx0ICogQW55IG9yaWdpbmFsIEhUTUwgZWxlbWVudHMgd2lsbCBiZSBsZWZ0IGFzLWlzLCBhcyB3ZWxsIGFzIHRoZSB0ZXh0IHRoYXQgaXMgYWxyZWFkeSB3cmFwcGVkIGluIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWdzLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHRPckh0bWwgVGhlIEhUTUwgb3IgdGV4dCB0byBsaW5rIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyB3aXRoaW4gKGRlcGVuZGluZyBvbiBpZlxuXHQgKiAgIHRoZSB7QGxpbmsgI3VybHN9LCB7QGxpbmsgI2VtYWlsfSwgYW5kIHtAbGluayAjdHdpdHRlcn0gb3B0aW9ucyBhcmUgZW5hYmxlZCkuXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIEhUTUwsIHdpdGggVVJMcy9lbWFpbHMvVHdpdHRlciBoYW5kbGVzIGF1dG9tYXRpY2FsbHkgbGlua2VkLlxuXHQgKi9cblx0bGluayA6IGZ1bmN0aW9uKCB0ZXh0T3JIdG1sICkge1xuXHRcdHZhciBodG1sUGFyc2VyID0gdGhpcy5nZXRIdG1sUGFyc2VyKCksXG5cdFx0ICAgIGh0bWxOb2RlcyA9IGh0bWxQYXJzZXIucGFyc2UoIHRleHRPckh0bWwgKSxcblx0XHQgICAgYW5jaG9yVGFnU3RhY2tDb3VudCA9IDAsICAvLyB1c2VkIHRvIG9ubHkgcHJvY2VzcyB0ZXh0IGFyb3VuZCBhbmNob3IgdGFncywgYW5kIGFueSBpbm5lciB0ZXh0L2h0bWwgdGhleSBtYXkgaGF2ZVxuXHRcdCAgICByZXN1bHRIdG1sID0gW107XG5cdFx0XG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGh0bWxOb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdHZhciBub2RlID0gaHRtbE5vZGVzWyBpIF0sXG5cdFx0XHQgICAgbm9kZVR5cGUgPSBub2RlLmdldFR5cGUoKSxcblx0XHRcdCAgICBub2RlVGV4dCA9IG5vZGUuZ2V0VGV4dCgpO1xuXHRcdFx0XG5cdFx0XHRpZiggbm9kZVR5cGUgPT09ICdlbGVtZW50JyApIHtcblx0XHRcdFx0Ly8gUHJvY2VzcyBIVE1MIG5vZGVzIGluIHRoZSBpbnB1dCBgdGV4dE9ySHRtbGBcblx0XHRcdFx0aWYoIG5vZGUuZ2V0VGFnTmFtZSgpID09PSAnYScgKSB7XG5cdFx0XHRcdFx0aWYoICFub2RlLmlzQ2xvc2luZygpICkgeyAgLy8gaXQncyB0aGUgc3RhcnQgPGE+IHRhZ1xuXHRcdFx0XHRcdFx0YW5jaG9yVGFnU3RhY2tDb3VudCsrO1xuXHRcdFx0XHRcdH0gZWxzZSB7ICAgLy8gaXQncyB0aGUgZW5kIDwvYT4gdGFnXG5cdFx0XHRcdFx0XHRhbmNob3JUYWdTdGFja0NvdW50ID0gTWF0aC5tYXgoIGFuY2hvclRhZ1N0YWNrQ291bnQgLSAxLCAwICk7ICAvLyBhdHRlbXB0IHRvIGhhbmRsZSBleHRyYW5lb3VzIDwvYT4gdGFncyBieSBtYWtpbmcgc3VyZSB0aGUgc3RhY2sgY291bnQgbmV2ZXIgZ29lcyBiZWxvdyAwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJlc3VsdEh0bWwucHVzaCggbm9kZVRleHQgKTsgIC8vIG5vdyBhZGQgdGhlIHRleHQgb2YgdGhlIHRhZyBpdHNlbGYgdmVyYmF0aW1cblx0XHRcdFx0XG5cdFx0XHR9IGVsc2UgaWYoIG5vZGVUeXBlID09PSAnZW50aXR5JyApIHtcblx0XHRcdFx0cmVzdWx0SHRtbC5wdXNoKCBub2RlVGV4dCApOyAgLy8gYXBwZW5kIEhUTUwgZW50aXR5IG5vZGVzIChzdWNoIGFzICcmbmJzcDsnKSB2ZXJiYXRpbVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFByb2Nlc3MgdGV4dCBub2RlcyBpbiB0aGUgaW5wdXQgYHRleHRPckh0bWxgXG5cdFx0XHRcdGlmKCBhbmNob3JUYWdTdGFja0NvdW50ID09PSAwICkge1xuXHRcdFx0XHRcdC8vIElmIHdlJ3JlIG5vdCB3aXRoaW4gYW4gPGE+IHRhZywgcHJvY2VzcyB0aGUgdGV4dCBub2RlIHRvIGxpbmtpZnlcblx0XHRcdFx0XHR2YXIgbGlua2lmaWVkU3RyID0gdGhpcy5saW5raWZ5U3RyKCBub2RlVGV4dCApO1xuXHRcdFx0XHRcdHJlc3VsdEh0bWwucHVzaCggbGlua2lmaWVkU3RyICk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gYHRleHRgIGlzIHdpdGhpbiBhbiA8YT4gdGFnLCBzaW1wbHkgYXBwZW5kIHRoZSB0ZXh0IC0gd2UgZG8gbm90IHdhbnQgdG8gYXV0b2xpbmsgYW55dGhpbmcgXG5cdFx0XHRcdFx0Ly8gYWxyZWFkeSB3aXRoaW4gYW4gPGE+Li4uPC9hPiB0YWdcblx0XHRcdFx0XHRyZXN1bHRIdG1sLnB1c2goIG5vZGVUZXh0ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdEh0bWwuam9pbiggXCJcIiApO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBQcm9jZXNzIHRoZSB0ZXh0IHRoYXQgbGllcyBpbiBiZXR3ZWVuIEhUTUwgdGFncywgcGVyZm9ybWluZyB0aGUgYW5jaG9yIHRhZyByZXBsYWNlbWVudHMgZm9yIG1hdGNoZWQgXG5cdCAqIFVSTHMvZW1haWxzL1R3aXR0ZXIgaGFuZGxlcywgYW5kIHJldHVybnMgdGhlIHN0cmluZyB3aXRoIHRoZSByZXBsYWNlbWVudHMgbWFkZS4gXG5cdCAqIFxuXHQgKiBUaGlzIG1ldGhvZCBkb2VzIHRoZSBhY3R1YWwgd3JhcHBpbmcgb2YgVVJMcy9lbWFpbHMvVHdpdHRlciBoYW5kbGVzIHdpdGggYW5jaG9yIHRhZ3MuXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2YgdGV4dCB0byBhdXRvLWxpbmsuXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRleHQgd2l0aCBhbmNob3IgdGFncyBhdXRvLWZpbGxlZC5cblx0ICovXG5cdGxpbmtpZnlTdHIgOiBmdW5jdGlvbiggc3RyICkge1xuXHRcdHJldHVybiB0aGlzLmdldE1hdGNoUGFyc2VyKCkucmVwbGFjZSggc3RyLCB0aGlzLmNyZWF0ZU1hdGNoUmV0dXJuVmFsLCB0aGlzICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIHJldHVybiBzdHJpbmcgdmFsdWUgZm9yIGEgZ2l2ZW4gbWF0Y2ggaW4gdGhlIGlucHV0IHN0cmluZywgZm9yIHRoZSB7QGxpbmsgI3Byb2Nlc3NUZXh0Tm9kZX0gbWV0aG9kLlxuXHQgKiBcblx0ICogVGhpcyBtZXRob2QgaGFuZGxlcyB0aGUge0BsaW5rICNyZXBsYWNlRm59LCBpZiBvbmUgd2FzIHByb3ZpZGVkLlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBdXRvbGlua2VyLm1hdGNoLk1hdGNofSBtYXRjaCBUaGUgTWF0Y2ggb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgbWF0Y2guXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHN0cmluZyB0aGF0IHRoZSBgbWF0Y2hgIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoLiBUaGlzIGlzIHVzdWFsbHkgdGhlIGFuY2hvciB0YWcgc3RyaW5nLCBidXRcblx0ICogICBtYXkgYmUgdGhlIGBtYXRjaFN0cmAgaXRzZWxmIGlmIHRoZSBtYXRjaCBpcyBub3QgdG8gYmUgcmVwbGFjZWQuXG5cdCAqL1xuXHRjcmVhdGVNYXRjaFJldHVyblZhbCA6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHQvLyBIYW5kbGUgYSBjdXN0b20gYHJlcGxhY2VGbmAgYmVpbmcgcHJvdmlkZWRcblx0XHR2YXIgcmVwbGFjZUZuUmVzdWx0O1xuXHRcdGlmKCB0aGlzLnJlcGxhY2VGbiApIHtcblx0XHRcdHJlcGxhY2VGblJlc3VsdCA9IHRoaXMucmVwbGFjZUZuLmNhbGwoIHRoaXMsIHRoaXMsIG1hdGNoICk7ICAvLyBBdXRvbGlua2VyIGluc3RhbmNlIGlzIHRoZSBjb250ZXh0LCBhbmQgdGhlIGZpcnN0IGFyZ1xuXHRcdH1cblx0XHRcblx0XHRpZiggdHlwZW9mIHJlcGxhY2VGblJlc3VsdCA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHRyZXR1cm4gcmVwbGFjZUZuUmVzdWx0OyAgLy8gYHJlcGxhY2VGbmAgcmV0dXJuZWQgYSBzdHJpbmcsIHVzZSB0aGF0XG5cdFx0XHRcblx0XHR9IGVsc2UgaWYoIHJlcGxhY2VGblJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm4gbWF0Y2guZ2V0TWF0Y2hlZFRleHQoKTsgIC8vIG5vIHJlcGxhY2VtZW50IGZvciB0aGUgbWF0Y2hcblx0XHRcdFxuXHRcdH0gZWxzZSBpZiggcmVwbGFjZUZuUmVzdWx0IGluc3RhbmNlb2YgQXV0b2xpbmtlci5IdG1sVGFnICkge1xuXHRcdFx0cmV0dXJuIHJlcGxhY2VGblJlc3VsdC50b1N0cmluZygpO1xuXHRcdFxuXHRcdH0gZWxzZSB7ICAvLyByZXBsYWNlRm5SZXN1bHQgPT09IHRydWUsIG9yIG5vL3Vua25vd24gcmV0dXJuIHZhbHVlIGZyb20gZnVuY3Rpb25cblx0XHRcdC8vIFBlcmZvcm0gQXV0b2xpbmtlcidzIGRlZmF1bHQgYW5jaG9yIHRhZyBnZW5lcmF0aW9uXG5cdFx0XHR2YXIgdGFnQnVpbGRlciA9IHRoaXMuZ2V0VGFnQnVpbGRlcigpLFxuXHRcdFx0ICAgIGFuY2hvclRhZyA9IHRhZ0J1aWxkZXIuYnVpbGQoIG1hdGNoICk7ICAvLyByZXR1cm5zIGFuIEF1dG9saW5rZXIuSHRtbFRhZyBpbnN0YW5jZVxuXHRcdFx0XG5cdFx0XHRyZXR1cm4gYW5jaG9yVGFnLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBMYXppbHkgaW5zdGFudGlhdGVzIGFuZCByZXR1cm5zIHRoZSB7QGxpbmsgI2h0bWxQYXJzZXJ9IGluc3RhbmNlIGZvciB0aGlzIEF1dG9saW5rZXIgaW5zdGFuY2UuXG5cdCAqIFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sUGFyc2VyfVxuXHQgKi9cblx0Z2V0SHRtbFBhcnNlciA6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBodG1sUGFyc2VyID0gdGhpcy5odG1sUGFyc2VyO1xuXHRcdFxuXHRcdGlmKCAhaHRtbFBhcnNlciApIHtcblx0XHRcdGh0bWxQYXJzZXIgPSB0aGlzLmh0bWxQYXJzZXIgPSBuZXcgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxQYXJzZXIoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGh0bWxQYXJzZXI7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIExhemlseSBpbnN0YW50aWF0ZXMgYW5kIHJldHVybnMgdGhlIHtAbGluayAjbWF0Y2hQYXJzZXJ9IGluc3RhbmNlIGZvciB0aGlzIEF1dG9saW5rZXIgaW5zdGFuY2UuXG5cdCAqIFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIubWF0Y2hQYXJzZXIuTWF0Y2hQYXJzZXJ9XG5cdCAqL1xuXHRnZXRNYXRjaFBhcnNlciA6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBtYXRjaFBhcnNlciA9IHRoaXMubWF0Y2hQYXJzZXI7XG5cdFx0XG5cdFx0aWYoICFtYXRjaFBhcnNlciApIHtcblx0XHRcdG1hdGNoUGFyc2VyID0gdGhpcy5tYXRjaFBhcnNlciA9IG5ldyBBdXRvbGlua2VyLm1hdGNoUGFyc2VyLk1hdGNoUGFyc2VyKCB7XG5cdFx0XHRcdHVybHMgOiB0aGlzLnVybHMsXG5cdFx0XHRcdGVtYWlsIDogdGhpcy5lbWFpbCxcblx0XHRcdFx0dHdpdHRlciA6IHRoaXMudHdpdHRlcixcblx0XHRcdFx0c3RyaXBQcmVmaXggOiB0aGlzLnN0cmlwUHJlZml4XG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBtYXRjaFBhcnNlcjtcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogUmV0dXJucyB0aGUge0BsaW5rICN0YWdCdWlsZGVyfSBpbnN0YW5jZSBmb3IgdGhpcyBBdXRvbGlua2VyIGluc3RhbmNlLCBsYXppbHkgaW5zdGFudGlhdGluZyBpdFxuXHQgKiBpZiBpdCBkb2VzIG5vdCB5ZXQgZXhpc3QuXG5cdCAqIFxuXHQgKiBUaGlzIG1ldGhvZCBtYXkgYmUgdXNlZCBpbiBhIHtAbGluayAjcmVwbGFjZUZufSB0byBnZW5lcmF0ZSB0aGUge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZyBIdG1sVGFnfSBpbnN0YW5jZSB0aGF0IFxuXHQgKiBBdXRvbGlua2VyIHdvdWxkIG5vcm1hbGx5IGdlbmVyYXRlLCBhbmQgdGhlbiBhbGxvdyBmb3IgbW9kaWZpY2F0aW9ucyBiZWZvcmUgcmV0dXJuaW5nIGl0LiBGb3IgZXhhbXBsZTpcblx0ICogXG5cdCAqICAgICB2YXIgaHRtbCA9IEF1dG9saW5rZXIubGluayggXCJUZXN0IGdvb2dsZS5jb21cIiwge1xuXHQgKiAgICAgICAgIHJlcGxhY2VGbiA6IGZ1bmN0aW9uKCBhdXRvbGlua2VyLCBtYXRjaCApIHtcblx0ICogICAgICAgICAgICAgdmFyIHRhZyA9IGF1dG9saW5rZXIuZ2V0VGFnQnVpbGRlcigpLmJ1aWxkKCBtYXRjaCApOyAgLy8gcmV0dXJucyBhbiB7QGxpbmsgQXV0b2xpbmtlci5IdG1sVGFnfSBpbnN0YW5jZVxuXHQgKiAgICAgICAgICAgICB0YWcuc2V0QXR0ciggJ3JlbCcsICdub2ZvbGxvdycgKTtcblx0ICogICAgICAgICAgICAgXG5cdCAqICAgICAgICAgICAgIHJldHVybiB0YWc7XG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfSApO1xuXHQgKiAgICAgXG5cdCAqICAgICAvLyBnZW5lcmF0ZWQgaHRtbDpcblx0ICogICAgIC8vICAgVGVzdCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPmdvb2dsZS5jb208L2E+XG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkFuY2hvclRhZ0J1aWxkZXJ9XG5cdCAqL1xuXHRnZXRUYWdCdWlsZGVyIDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRhZ0J1aWxkZXIgPSB0aGlzLnRhZ0J1aWxkZXI7XG5cdFx0XG5cdFx0aWYoICF0YWdCdWlsZGVyICkge1xuXHRcdFx0dGFnQnVpbGRlciA9IHRoaXMudGFnQnVpbGRlciA9IG5ldyBBdXRvbGlua2VyLkFuY2hvclRhZ0J1aWxkZXIoIHtcblx0XHRcdFx0bmV3V2luZG93ICAgOiB0aGlzLm5ld1dpbmRvdyxcblx0XHRcdFx0dHJ1bmNhdGUgICAgOiB0aGlzLnRydW5jYXRlLFxuXHRcdFx0XHRjbGFzc05hbWUgICA6IHRoaXMuY2xhc3NOYW1lXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0YWdCdWlsZGVyO1xuXHR9XG5cbn07XG5cblxuLyoqXG4gKiBBdXRvbWF0aWNhbGx5IGxpbmtzIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyBmb3VuZCBpbiB0aGUgZ2l2ZW4gY2h1bmsgb2YgSFRNTC4gXG4gKiBEb2VzIG5vdCBsaW5rIFVSTHMgZm91bmQgd2l0aGluIEhUTUwgdGFncy5cbiAqIFxuICogRm9yIGluc3RhbmNlLCBpZiBnaXZlbiB0aGUgdGV4dDogYFlvdSBzaG91bGQgZ28gdG8gaHR0cDovL3d3dy55YWhvby5jb21gLCB0aGVuIHRoZSByZXN1bHRcbiAqIHdpbGwgYmUgYFlvdSBzaG91bGQgZ28gdG8gJmx0O2EgaHJlZj1cImh0dHA6Ly93d3cueWFob28uY29tXCImZ3Q7aHR0cDovL3d3dy55YWhvby5jb20mbHQ7L2EmZ3Q7YFxuICogXG4gKiBFeGFtcGxlOlxuICogXG4gKiAgICAgdmFyIGxpbmtlZFRleHQgPSBBdXRvbGlua2VyLmxpbmsoIFwiR28gdG8gZ29vZ2xlLmNvbVwiLCB7IG5ld1dpbmRvdzogZmFsc2UgfSApO1xuICogICAgIC8vIFByb2R1Y2VzOiBcIkdvIHRvIDxhIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiPmdvb2dsZS5jb208L2E+XCJcbiAqIFxuICogQHN0YXRpY1xuICogQHBhcmFtIHtTdHJpbmd9IHRleHRPckh0bWwgVGhlIEhUTUwgb3IgdGV4dCB0byBmaW5kIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcyB3aXRoaW4gKGRlcGVuZGluZyBvbiBpZlxuICogICB0aGUge0BsaW5rICN1cmxzfSwge0BsaW5rICNlbWFpbH0sIGFuZCB7QGxpbmsgI3R3aXR0ZXJ9IG9wdGlvbnMgYXJlIGVuYWJsZWQpLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBBbnkgb2YgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIEF1dG9saW5rZXIgY2xhc3MsIHNwZWNpZmllZCBpbiBhbiBPYmplY3QgKG1hcCkuXG4gKiAgIFNlZSB0aGUgY2xhc3MgZGVzY3JpcHRpb24gZm9yIGFuIGV4YW1wbGUgY2FsbC5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIEhUTUwgdGV4dCwgd2l0aCBVUkxzIGF1dG9tYXRpY2FsbHkgbGlua2VkXG4gKi9cbkF1dG9saW5rZXIubGluayA9IGZ1bmN0aW9uKCB0ZXh0T3JIdG1sLCBvcHRpb25zICkge1xuXHR2YXIgYXV0b2xpbmtlciA9IG5ldyBBdXRvbGlua2VyKCBvcHRpb25zICk7XG5cdHJldHVybiBhdXRvbGlua2VyLmxpbmsoIHRleHRPckh0bWwgKTtcbn07XG5cblxuLy8gQXV0b2xpbmtlciBOYW1lc3BhY2VzXG5BdXRvbGlua2VyLm1hdGNoID0ge307XG5BdXRvbGlua2VyLmh0bWxQYXJzZXIgPSB7fTtcbkF1dG9saW5rZXIubWF0Y2hQYXJzZXIgPSB7fTtcbi8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cbi8qanNoaW50IGVxbnVsbDp0cnVlLCBib3NzOnRydWUgKi9cbi8qKlxuICogQGNsYXNzIEF1dG9saW5rZXIuVXRpbFxuICogQHNpbmdsZXRvblxuICogXG4gKiBBIGZldyB1dGlsaXR5IG1ldGhvZHMgZm9yIEF1dG9saW5rZXIuXG4gKi9cbkF1dG9saW5rZXIuVXRpbCA9IHtcblx0XG5cdC8qKlxuXHQgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBhYnN0cmFjdE1ldGhvZFxuXHQgKiBcblx0ICogQSBmdW5jdGlvbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyBhbiBhYnN0cmFjdCBtZXRob2QuXG5cdCAqL1xuXHRhYnN0cmFjdE1ldGhvZCA6IGZ1bmN0aW9uKCkgeyB0aHJvdyBcImFic3RyYWN0XCI7IH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIEFzc2lnbnMgKHNoYWxsb3cgY29waWVzKSB0aGUgcHJvcGVydGllcyBvZiBgc3JjYCBvbnRvIGBkZXN0YC5cblx0ICogXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZXN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzcmMgVGhlIHNvdXJjZSBvYmplY3QuXG5cdCAqIEByZXR1cm4ge09iamVjdH0gVGhlIGRlc3RpbmF0aW9uIG9iamVjdCAoYGRlc3RgKVxuXHQgKi9cblx0YXNzaWduIDogZnVuY3Rpb24oIGRlc3QsIHNyYyApIHtcblx0XHRmb3IoIHZhciBwcm9wIGluIHNyYyApIHtcblx0XHRcdGlmKCBzcmMuaGFzT3duUHJvcGVydHkoIHByb3AgKSApIHtcblx0XHRcdFx0ZGVzdFsgcHJvcCBdID0gc3JjWyBwcm9wIF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBkZXN0O1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBFeHRlbmRzIGBzdXBlcmNsYXNzYCB0byBjcmVhdGUgYSBuZXcgc3ViY2xhc3MsIGFkZGluZyB0aGUgYHByb3RvUHJvcHNgIHRvIHRoZSBuZXcgc3ViY2xhc3MncyBwcm90b3R5cGUuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdXBlcmNsYXNzIFRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgdGhlIHN1cGVyY2xhc3MuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1Byb3BzIFRoZSBtZXRob2RzL3Byb3BlcnRpZXMgdG8gYWRkIHRvIHRoZSBzdWJjbGFzcydzIHByb3RvdHlwZS4gVGhpcyBtYXkgY29udGFpbiB0aGVcblx0ICogICBzcGVjaWFsIHByb3BlcnR5IGBjb25zdHJ1Y3RvcmAsIHdoaWNoIHdpbGwgYmUgdXNlZCBhcyB0aGUgbmV3IHN1YmNsYXNzJ3MgY29uc3RydWN0b3IgZnVuY3Rpb24uXG5cdCAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgbmV3IHN1YmNsYXNzIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZXh0ZW5kIDogZnVuY3Rpb24oIHN1cGVyY2xhc3MsIHByb3RvUHJvcHMgKSB7XG5cdFx0dmFyIHN1cGVyY2xhc3NQcm90byA9IHN1cGVyY2xhc3MucHJvdG90eXBlO1xuXHRcdFxuXHRcdHZhciBGID0gZnVuY3Rpb24oKSB7fTtcblx0XHRGLnByb3RvdHlwZSA9IHN1cGVyY2xhc3NQcm90bztcblx0XHRcblx0XHR2YXIgc3ViY2xhc3M7XG5cdFx0aWYoIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoICdjb25zdHJ1Y3RvcicgKSApIHtcblx0XHRcdHN1YmNsYXNzID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3Rvcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3ViY2xhc3MgPSBmdW5jdGlvbigpIHsgc3VwZXJjbGFzc1Byb3RvLmNvbnN0cnVjdG9yLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTsgfTtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIHN1YmNsYXNzUHJvdG8gPSBzdWJjbGFzcy5wcm90b3R5cGUgPSBuZXcgRigpOyAgLy8gc2V0IHVwIHByb3RvdHlwZSBjaGFpblxuXHRcdHN1YmNsYXNzUHJvdG8uY29uc3RydWN0b3IgPSBzdWJjbGFzczsgIC8vIGZpeCBjb25zdHJ1Y3RvciBwcm9wZXJ0eVxuXHRcdHN1YmNsYXNzUHJvdG8uc3VwZXJjbGFzcyA9IHN1cGVyY2xhc3NQcm90bztcblx0XHRcblx0XHRkZWxldGUgcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjsgIC8vIGRvbid0IHJlLWFzc2lnbiBjb25zdHJ1Y3RvciBwcm9wZXJ0eSB0byB0aGUgcHJvdG90eXBlLCBzaW5jZSBhIG5ldyBmdW5jdGlvbiBtYXkgaGF2ZSBiZWVuIGNyZWF0ZWQgKGBzdWJjbGFzc2ApLCB3aGljaCBpcyBub3cgYWxyZWFkeSB0aGVyZVxuXHRcdEF1dG9saW5rZXIuVXRpbC5hc3NpZ24oIHN1YmNsYXNzUHJvdG8sIHByb3RvUHJvcHMgKTtcblx0XHRcblx0XHRyZXR1cm4gc3ViY2xhc3M7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFRydW5jYXRlcyB0aGUgYHN0cmAgYXQgYGxlbiAtIGVsbGlwc2lzQ2hhcnMubGVuZ3RoYCwgYW5kIGFkZHMgdGhlIGBlbGxpcHNpc0NoYXJzYCB0byB0aGVcblx0ICogZW5kIG9mIHRoZSBzdHJpbmcgKGJ5IGRlZmF1bHQsIHR3byBwZXJpb2RzOiAnLi4nKS4gSWYgdGhlIGBzdHJgIGxlbmd0aCBkb2VzIG5vdCBleGNlZWQgXG5cdCAqIGBsZW5gLCB0aGUgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQgdW5jaGFuZ2VkLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHRydW5jYXRlIGFuZCBhZGQgYW4gZWxsaXBzaXMgdG8uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0cnVuY2F0ZUxlbiBUaGUgbGVuZ3RoIHRvIHRydW5jYXRlIHRoZSBzdHJpbmcgYXQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbZWxsaXBzaXNDaGFycz0uLl0gVGhlIGVsbGlwc2lzIGNoYXJhY3RlcihzKSB0byBhZGQgdG8gdGhlIGVuZCBvZiBgc3RyYFxuXHQgKiAgIHdoZW4gdHJ1bmNhdGVkLiBEZWZhdWx0cyB0byAnLi4nXG5cdCAqL1xuXHRlbGxpcHNpcyA6IGZ1bmN0aW9uKCBzdHIsIHRydW5jYXRlTGVuLCBlbGxpcHNpc0NoYXJzICkge1xuXHRcdGlmKCBzdHIubGVuZ3RoID4gdHJ1bmNhdGVMZW4gKSB7XG5cdFx0XHRlbGxpcHNpc0NoYXJzID0gKCBlbGxpcHNpc0NoYXJzID09IG51bGwgKSA/ICcuLicgOiBlbGxpcHNpc0NoYXJzO1xuXHRcdFx0c3RyID0gc3RyLnN1YnN0cmluZyggMCwgdHJ1bmNhdGVMZW4gLSBlbGxpcHNpc0NoYXJzLmxlbmd0aCApICsgZWxsaXBzaXNDaGFycztcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogU3VwcG9ydHMgYEFycmF5LnByb3RvdHlwZS5pbmRleE9mKClgIGZ1bmN0aW9uYWxpdHkgZm9yIG9sZCBJRSAoSUU4IGFuZCBiZWxvdykuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnIgVGhlIGFycmF5IHRvIGZpbmQgYW4gZWxlbWVudCBvZi5cblx0ICogQHBhcmFtIHsqfSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGZpbmQgaW4gdGhlIGFycmF5LCBhbmQgcmV0dXJuIHRoZSBpbmRleCBvZi5cblx0ICogQHJldHVybiB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGBlbGVtZW50YCwgb3IgLTEgaWYgaXQgd2FzIG5vdCBmb3VuZC5cblx0ICovXG5cdGluZGV4T2YgOiBmdW5jdGlvbiggYXJyLCBlbGVtZW50ICkge1xuXHRcdGlmKCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiApIHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZiggZWxlbWVudCApO1xuXHRcdFx0XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGlmKCBhcnJbIGkgXSA9PT0gZWxlbWVudCApIHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0fSxcblx0XG5cdFxuXHRcblx0LyoqXG5cdCAqIFBlcmZvcm1zIHRoZSBmdW5jdGlvbmFsaXR5IG9mIHdoYXQgbW9kZXJuIGJyb3dzZXJzIGRvIHdoZW4gYFN0cmluZy5wcm90b3R5cGUuc3BsaXQoKWAgaXMgY2FsbGVkXG5cdCAqIHdpdGggYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBjb250YWlucyBjYXB0dXJpbmcgcGFyZW50aGVzaXMuXG5cdCAqIFxuXHQgKiBGb3IgZXhhbXBsZTpcblx0ICogXG5cdCAqICAgICAvLyBNb2Rlcm4gYnJvd3NlcnM6IFxuXHQgKiAgICAgXCJhLGIsY1wiLnNwbGl0KCAvKCwpLyApOyAgLy8gLS0+IFsgJ2EnLCAnLCcsICdiJywgJywnLCAnYycgXVxuXHQgKiAgICAgXG5cdCAqICAgICAvLyBPbGQgSUUgKGluY2x1ZGluZyBJRTgpOlxuXHQgKiAgICAgXCJhLGIsY1wiLnNwbGl0KCAvKCwpLyApOyAgLy8gLS0+IFsgJ2EnLCAnYicsICdjJyBdXG5cdCAqICAgICBcblx0ICogVGhpcyBtZXRob2QgZW11bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgbW9kZXJuIGJyb3dzZXJzIGZvciB0aGUgb2xkIElFIGNhc2UuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc3BsaXQuXG5cdCAqIEBwYXJhbSB7UmVnRXhwfSBzcGxpdFJlZ2V4IFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gc3BsaXQgdGhlIGlucHV0IGBzdHJgIG9uLiBUaGUgc3BsaXR0aW5nXG5cdCAqICAgY2hhcmFjdGVyKHMpIHdpbGwgYmUgc3BsaWNlZCBpbnRvIHRoZSBhcnJheSwgYXMgaW4gdGhlIFwibW9kZXJuIGJyb3dzZXJzXCIgZXhhbXBsZSBpbiB0aGUgXG5cdCAqICAgZGVzY3JpcHRpb24gb2YgdGhpcyBtZXRob2QuIFxuXHQgKiAgIE5vdGUgIzE6IHRoZSBzdXBwbGllZCByZWd1bGFyIGV4cHJlc3Npb24gKiptdXN0KiogaGF2ZSB0aGUgJ2cnIGZsYWcgc3BlY2lmaWVkLlxuXHQgKiAgIE5vdGUgIzI6IGZvciBzaW1wbGljaXR5J3Mgc2FrZSwgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2VzIG5vdCBuZWVkIFxuXHQgKiAgIHRvIGNvbnRhaW4gY2FwdHVyaW5nIHBhcmVudGhlc2lzIC0gaXQgd2lsbCBiZSBhc3N1bWVkIHRoYXQgYW55IG1hdGNoIGhhcyB0aGVtLlxuXHQgKiBAcmV0dXJuIHtTdHJpbmdbXX0gVGhlIHNwbGl0IGFycmF5IG9mIHN0cmluZ3MsIHdpdGggdGhlIHNwbGl0dGluZyBjaGFyYWN0ZXIocykgaW5jbHVkZWQuXG5cdCAqL1xuXHRzcGxpdEFuZENhcHR1cmUgOiBmdW5jdGlvbiggc3RyLCBzcGxpdFJlZ2V4ICkge1xuXHRcdGlmKCAhc3BsaXRSZWdleC5nbG9iYWwgKSB0aHJvdyBuZXcgRXJyb3IoIFwiYHNwbGl0UmVnZXhgIG11c3QgaGF2ZSB0aGUgJ2cnIGZsYWcgc2V0XCIgKTtcblx0XHRcblx0XHR2YXIgcmVzdWx0ID0gW10sXG5cdFx0ICAgIGxhc3RJZHggPSAwLFxuXHRcdCAgICBtYXRjaDtcblx0XHRcblx0XHR3aGlsZSggbWF0Y2ggPSBzcGxpdFJlZ2V4LmV4ZWMoIHN0ciApICkge1xuXHRcdFx0cmVzdWx0LnB1c2goIHN0ci5zdWJzdHJpbmcoIGxhc3RJZHgsIG1hdGNoLmluZGV4ICkgKTtcblx0XHRcdHJlc3VsdC5wdXNoKCBtYXRjaFsgMCBdICk7ICAvLyBwdXNoIHRoZSBzcGxpdHRpbmcgY2hhcihzKVxuXHRcdFx0XG5cdFx0XHRsYXN0SWR4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFsgMCBdLmxlbmd0aDtcblx0XHR9XG5cdFx0cmVzdWx0LnB1c2goIHN0ci5zdWJzdHJpbmcoIGxhc3RJZHggKSApO1xuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG59O1xuLypnbG9iYWwgQXV0b2xpbmtlciAqL1xuLypqc2hpbnQgYm9zczp0cnVlICovXG4vKipcbiAqIEBjbGFzcyBBdXRvbGlua2VyLkh0bWxUYWdcbiAqIEBleHRlbmRzIE9iamVjdFxuICogXG4gKiBSZXByZXNlbnRzIGFuIEhUTUwgdGFnLCB3aGljaCBjYW4gYmUgdXNlZCB0byBlYXNpbHkgYnVpbGQvbW9kaWZ5IEhUTUwgdGFncyBwcm9ncmFtbWF0aWNhbGx5LlxuICogXG4gKiBBdXRvbGlua2VyIHVzZXMgdGhpcyBhYnN0cmFjdGlvbiB0byBjcmVhdGUgSFRNTCB0YWdzLCBhbmQgdGhlbiB3cml0ZSB0aGVtIG91dCBhcyBzdHJpbmdzLiBZb3UgbWF5IGFsc28gdXNlXG4gKiB0aGlzIGNsYXNzIGluIHlvdXIgY29kZSwgZXNwZWNpYWxseSB3aXRoaW4gYSB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufS5cbiAqIFxuICogIyMgRXhhbXBsZXNcbiAqIFxuICogRXhhbXBsZSBpbnN0YW50aWF0aW9uOlxuICogXG4gKiAgICAgdmFyIHRhZyA9IG5ldyBBdXRvbGlua2VyLkh0bWxUYWcoIHtcbiAqICAgICAgICAgdGFnTmFtZSA6ICdhJyxcbiAqICAgICAgICAgYXR0cnMgICA6IHsgJ2hyZWYnOiAnaHR0cDovL2dvb2dsZS5jb20nLCAnY2xhc3MnOiAnZXh0ZXJuYWwtbGluaycgfSxcbiAqICAgICAgICAgaW5uZXJIdG1sIDogJ0dvb2dsZSdcbiAqICAgICB9ICk7XG4gKiAgICAgXG4gKiAgICAgdGFnLnRvU3RyaW5nKCk7ICAvLyA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiBjbGFzcz1cImV4dGVybmFsLWxpbmtcIj5Hb29nbGU8L2E+XG4gKiAgICAgXG4gKiAgICAgLy8gSW5kaXZpZHVhbCBhY2Nlc3NvciBtZXRob2RzXG4gKiAgICAgdGFnLmdldFRhZ05hbWUoKTsgICAgICAgICAgICAgICAgIC8vICdhJ1xuICogICAgIHRhZy5nZXRBdHRyKCAnaHJlZicgKTsgICAgICAgICAgICAvLyAnaHR0cDovL2dvb2dsZS5jb20nXG4gKiAgICAgdGFnLmhhc0NsYXNzKCAnZXh0ZXJuYWwtbGluaycgKTsgIC8vIHRydWVcbiAqIFxuICogXG4gKiBVc2luZyBtdXRhdG9yIG1ldGhvZHMgKHdoaWNoIG1heSBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggaW5zdGFudGlhdGlvbiBjb25maWcgcHJvcGVydGllcyk6XG4gKiBcbiAqICAgICB2YXIgdGFnID0gbmV3IEF1dG9saW5rZXIuSHRtbFRhZygpO1xuICogICAgIHRhZy5zZXRUYWdOYW1lKCAnYScgKTtcbiAqICAgICB0YWcuc2V0QXR0ciggJ2hyZWYnLCAnaHR0cDovL2dvb2dsZS5jb20nICk7XG4gKiAgICAgdGFnLmFkZENsYXNzKCAnZXh0ZXJuYWwtbGluaycgKTtcbiAqICAgICB0YWcuc2V0SW5uZXJIdG1sKCAnR29vZ2xlJyApO1xuICogICAgIFxuICogICAgIHRhZy5nZXRUYWdOYW1lKCk7ICAgICAgICAgICAgICAgICAvLyAnYSdcbiAqICAgICB0YWcuZ2V0QXR0ciggJ2hyZWYnICk7ICAgICAgICAgICAgLy8gJ2h0dHA6Ly9nb29nbGUuY29tJ1xuICogICAgIHRhZy5oYXNDbGFzcyggJ2V4dGVybmFsLWxpbmsnICk7ICAvLyB0cnVlXG4gKiAgICAgXG4gKiAgICAgdGFnLnRvU3RyaW5nKCk7ICAvLyA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiBjbGFzcz1cImV4dGVybmFsLWxpbmtcIj5Hb29nbGU8L2E+XG4gKiAgICAgXG4gKiBcbiAqICMjIEV4YW1wbGUgdXNlIHdpdGhpbiBhIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59XG4gKiBcbiAqICAgICB2YXIgaHRtbCA9IEF1dG9saW5rZXIubGluayggXCJUZXN0IGdvb2dsZS5jb21cIiwge1xuICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XG4gKiAgICAgICAgICAgICB2YXIgdGFnID0gYXV0b2xpbmtlci5nZXRUYWdCdWlsZGVyKCkuYnVpbGQoIG1hdGNoICk7ICAvLyByZXR1cm5zIGFuIHtAbGluayBBdXRvbGlua2VyLkh0bWxUYWd9IGluc3RhbmNlLCBjb25maWd1cmVkIHdpdGggdGhlIE1hdGNoJ3MgaHJlZiBhbmQgYW5jaG9yIHRleHRcbiAqICAgICAgICAgICAgIHRhZy5zZXRBdHRyKCAncmVsJywgJ25vZm9sbG93JyApO1xuICogICAgICAgICAgICAgXG4gKiAgICAgICAgICAgICByZXR1cm4gdGFnO1xuICogICAgICAgICB9XG4gKiAgICAgfSApO1xuICogICAgIFxuICogICAgIC8vIGdlbmVyYXRlZCBodG1sOlxuICogICAgIC8vICAgVGVzdCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPmdvb2dsZS5jb208L2E+XG4gKiAgICAgXG4gKiAgICAgXG4gKiAjIyBFeGFtcGxlIHVzZSB3aXRoIGEgbmV3IHRhZyBmb3IgdGhlIHJlcGxhY2VtZW50XG4gKiBcbiAqICAgICB2YXIgaHRtbCA9IEF1dG9saW5rZXIubGluayggXCJUZXN0IGdvb2dsZS5jb21cIiwge1xuICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XG4gKiAgICAgICAgICAgICB2YXIgdGFnID0gbmV3IEF1dG9saW5rZXIuSHRtbFRhZygge1xuICogICAgICAgICAgICAgICAgIHRhZ05hbWUgOiAnYnV0dG9uJyxcbiAqICAgICAgICAgICAgICAgICBhdHRycyAgIDogeyAndGl0bGUnOiAnTG9hZCBVUkw6ICcgKyBtYXRjaC5nZXRBbmNob3JIcmVmKCkgfSxcbiAqICAgICAgICAgICAgICAgICBpbm5lckh0bWwgOiAnTG9hZCBVUkw6ICcgKyBtYXRjaC5nZXRBbmNob3JUZXh0KClcbiAqICAgICAgICAgICAgIH0gKTtcbiAqICAgICAgICAgICAgIFxuICogICAgICAgICAgICAgcmV0dXJuIHRhZztcbiAqICAgICAgICAgfVxuICogICAgIH0gKTtcbiAqICAgICBcbiAqICAgICAvLyBnZW5lcmF0ZWQgaHRtbDpcbiAqICAgICAvLyAgIFRlc3QgPGJ1dHRvbiB0aXRsZT1cIkxvYWQgVVJMOiBodHRwOi8vZ29vZ2xlLmNvbVwiPkxvYWQgVVJMOiBnb29nbGUuY29tPC9idXR0b24+XG4gKi9cbkF1dG9saW5rZXIuSHRtbFRhZyA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge1N0cmluZ30gdGFnTmFtZVxuXHQgKiBcblx0ICogVGhlIHRhZyBuYW1lLiBFeDogJ2EnLCAnYnV0dG9uJywgZXRjLlxuXHQgKiBcblx0ICogTm90IHJlcXVpcmVkIGF0IGluc3RhbnRpYXRpb24gdGltZSwgYnV0IHNob3VsZCBiZSBzZXQgdXNpbmcge0BsaW5rICNzZXRUYWdOYW1lfSBiZWZvcmUge0BsaW5rICN0b1N0cmluZ31cblx0ICogaXMgZXhlY3V0ZWQuXG5cdCAqL1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge09iamVjdC48U3RyaW5nLCBTdHJpbmc+fSBhdHRyc1xuXHQgKiBcblx0ICogQW4ga2V5L3ZhbHVlIE9iamVjdCAobWFwKSBvZiBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSB0aGUgdGFnIHdpdGguIFRoZSBrZXlzIGFyZSB0aGUgYXR0cmlidXRlIG5hbWVzLCBhbmQgdGhlXG5cdCAqIHZhbHVlcyBhcmUgdGhlIGF0dHJpYnV0ZSB2YWx1ZXMuXG5cdCAqL1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge1N0cmluZ30gaW5uZXJIdG1sXG5cdCAqIFxuXHQgKiBUaGUgaW5uZXIgSFRNTCBmb3IgdGhlIHRhZy4gXG5cdCAqIFxuXHQgKiBOb3RlIHRoZSBjYW1lbCBjYXNlIG5hbWUgb24gYGlubmVySHRtbGAuIEFjcm9ueW1zIGFyZSBjYW1lbENhc2VkIGluIHRoaXMgdXRpbGl0eSAoc3VjaCBhcyBub3QgdG8gcnVuIGludG8gdGhlIGFjcm9ueW0gXG5cdCAqIG5hbWluZyBpbmNvbnNpc3RlbmN5IHRoYXQgdGhlIERPTSBkZXZlbG9wZXJzIGNyZWF0ZWQgd2l0aCBgWE1MSHR0cFJlcXVlc3RgKS4gWW91IG1heSBhbHRlcm5hdGl2ZWx5IHVzZSB7QGxpbmsgI2lubmVySFRNTH1cblx0ICogaWYgeW91IHByZWZlciwgYnV0IHRoaXMgb25lIGlzIHJlY29tbWVuZGVkLlxuXHQgKi9cblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtTdHJpbmd9IGlubmVySFRNTFxuXHQgKiBcblx0ICogQWxpYXMgb2Yge0BsaW5rICNpbm5lckh0bWx9LCBhY2NlcHRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgYnJvd3NlciBET00gYXBpLCBidXQgcHJlZmVyIHRoZSBjYW1lbENhc2VkIHZlcnNpb25cblx0ICogZm9yIGFjcm9ueW0gbmFtZXMuXG5cdCAqL1xuXHRcblx0XG5cdC8qKlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSB3aGl0ZXNwYWNlUmVnZXhcblx0ICogXG5cdCAqIFJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIHdoaXRlc3BhY2UgaW4gYSBzdHJpbmcgb2YgQ1NTIGNsYXNzZXMuXG5cdCAqL1xuXHR3aGl0ZXNwYWNlUmVnZXggOiAvXFxzKy8sXG5cdFxuXHRcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW2NmZ10gVGhlIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBmb3IgdGhpcyBjbGFzcywgaW4gYW4gT2JqZWN0IChtYXApXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciA6IGZ1bmN0aW9uKCBjZmcgKSB7XG5cdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGhpcywgY2ZnICk7XG5cdFx0XG5cdFx0dGhpcy5pbm5lckh0bWwgPSB0aGlzLmlubmVySHRtbCB8fCB0aGlzLmlubmVySFRNTDsgIC8vIGFjY2VwdCBlaXRoZXIgdGhlIGNhbWVsQ2FzZWQgZm9ybSBvciB0aGUgZnVsbHkgY2FwaXRhbGl6ZWQgYWNyb255bVxuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSB0YWcgbmFtZSB0aGF0IHdpbGwgYmUgdXNlZCB0byBnZW5lcmF0ZSB0aGUgdGFnIHdpdGguXG5cdCAqIFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGFnTmFtZVxuXHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXG5cdCAqL1xuXHRzZXRUYWdOYW1lIDogZnVuY3Rpb24oIHRhZ05hbWUgKSB7XG5cdFx0dGhpcy50YWdOYW1lID0gdGFnTmFtZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB0YWcgbmFtZS5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldFRhZ05hbWUgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy50YWdOYW1lIHx8IFwiXCI7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFNldHMgYW4gYXR0cmlidXRlIG9uIHRoZSBIdG1sVGFnLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IGF0dHJOYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byBzZXQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyVmFsdWUgVGhlIGF0dHJpYnV0ZSB2YWx1ZSB0byBzZXQuXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cblx0ICovXG5cdHNldEF0dHIgOiBmdW5jdGlvbiggYXR0ck5hbWUsIGF0dHJWYWx1ZSApIHtcblx0XHR2YXIgdGFnQXR0cnMgPSB0aGlzLmdldEF0dHJzKCk7XG5cdFx0dGFnQXR0cnNbIGF0dHJOYW1lIF0gPSBhdHRyVmFsdWU7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFJldHJpZXZlcyBhbiBhdHRyaWJ1dGUgZnJvbSB0aGUgSHRtbFRhZy4gSWYgdGhlIGF0dHJpYnV0ZSBkb2VzIG5vdCBleGlzdCwgcmV0dXJucyBgdW5kZWZpbmVkYC5cblx0ICogXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBhdHRyaWJ1dGUgbmFtZSB0byByZXRyaWV2ZS5cblx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYXR0cmlidXRlJ3MgdmFsdWUsIG9yIGB1bmRlZmluZWRgIGlmIGl0IGRvZXMgbm90IGV4aXN0IG9uIHRoZSBIdG1sVGFnLlxuXHQgKi9cblx0Z2V0QXR0ciA6IGZ1bmN0aW9uKCBhdHRyTmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRBdHRycygpWyBhdHRyTmFtZSBdO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBTZXRzIG9uZSBvciBtb3JlIGF0dHJpYnV0ZXMgb24gdGhlIEh0bWxUYWcuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge09iamVjdC48U3RyaW5nLCBTdHJpbmc+fSBhdHRycyBBIGtleS92YWx1ZSBPYmplY3QgKG1hcCkgb2YgdGhlIGF0dHJpYnV0ZXMgdG8gc2V0LlxuXHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLkh0bWxUYWd9IFRoaXMgSHRtbFRhZyBpbnN0YW5jZSwgc28gdGhhdCBtZXRob2QgY2FsbHMgbWF5IGJlIGNoYWluZWQuXG5cdCAqL1xuXHRzZXRBdHRycyA6IGZ1bmN0aW9uKCBhdHRycyApIHtcblx0XHR2YXIgdGFnQXR0cnMgPSB0aGlzLmdldEF0dHJzKCk7XG5cdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGFnQXR0cnMsIGF0dHJzICk7XG5cdFx0XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgYXR0cmlidXRlcyBPYmplY3QgKG1hcCkgZm9yIHRoZSBIdG1sVGFnLlxuXHQgKiBcblx0ICogQHJldHVybiB7T2JqZWN0LjxTdHJpbmcsIFN0cmluZz59IEEga2V5L3ZhbHVlIG9iamVjdCBvZiB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIEh0bWxUYWcuXG5cdCAqL1xuXHRnZXRBdHRycyA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmF0dHJzIHx8ICggdGhpcy5hdHRycyA9IHt9ICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFNldHMgdGhlIHByb3ZpZGVkIGBjc3NDbGFzc2AsIG92ZXJ3cml0aW5nIGFueSBjdXJyZW50IENTUyBjbGFzc2VzIG9uIHRoZSBIdG1sVGFnLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBDU1MgY2xhc3NlcyB0byBzZXQgKG92ZXJ3cml0ZSkuXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cblx0ICovXG5cdHNldENsYXNzIDogZnVuY3Rpb24oIGNzc0NsYXNzICkge1xuXHRcdHJldHVybiB0aGlzLnNldEF0dHIoICdjbGFzcycsIGNzc0NsYXNzICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBhZGQgb25lIG9yIG1vcmUgQ1NTIGNsYXNzZXMgdG8gdGhlIEh0bWxUYWcuIFdpbGwgbm90IGFkZCBkdXBsaWNhdGUgQ1NTIGNsYXNzZXMuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gY3NzQ2xhc3MgT25lIG9yIG1vcmUgc3BhY2Utc2VwYXJhdGVkIENTUyBjbGFzc2VzIHRvIGFkZC5cblx0ICogQHJldHVybiB7QXV0b2xpbmtlci5IdG1sVGFnfSBUaGlzIEh0bWxUYWcgaW5zdGFuY2UsIHNvIHRoYXQgbWV0aG9kIGNhbGxzIG1heSBiZSBjaGFpbmVkLlxuXHQgKi9cblx0YWRkQ2xhc3MgOiBmdW5jdGlvbiggY3NzQ2xhc3MgKSB7XG5cdFx0dmFyIGNsYXNzQXR0ciA9IHRoaXMuZ2V0Q2xhc3MoKSxcblx0XHQgICAgd2hpdGVzcGFjZVJlZ2V4ID0gdGhpcy53aGl0ZXNwYWNlUmVnZXgsXG5cdFx0ICAgIGluZGV4T2YgPSBBdXRvbGlua2VyLlV0aWwuaW5kZXhPZiwgIC8vIHRvIHN1cHBvcnQgSUU4IGFuZCBiZWxvd1xuXHRcdCAgICBjbGFzc2VzID0gKCAhY2xhc3NBdHRyICkgPyBbXSA6IGNsYXNzQXR0ci5zcGxpdCggd2hpdGVzcGFjZVJlZ2V4ICksXG5cdFx0ICAgIG5ld0NsYXNzZXMgPSBjc3NDbGFzcy5zcGxpdCggd2hpdGVzcGFjZVJlZ2V4ICksXG5cdFx0ICAgIG5ld0NsYXNzO1xuXHRcdFxuXHRcdHdoaWxlKCBuZXdDbGFzcyA9IG5ld0NsYXNzZXMuc2hpZnQoKSApIHtcblx0XHRcdGlmKCBpbmRleE9mKCBjbGFzc2VzLCBuZXdDbGFzcyApID09PSAtMSApIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKCBuZXdDbGFzcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLmdldEF0dHJzKClbICdjbGFzcycgXSA9IGNsYXNzZXMuam9pbiggXCIgXCIgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSBvbmUgb3IgbW9yZSBDU1MgY2xhc3NlcyBmcm9tIHRoZSBIdG1sVGFnLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIE9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBDU1MgY2xhc3NlcyB0byByZW1vdmUuXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cblx0ICovXG5cdHJlbW92ZUNsYXNzIDogZnVuY3Rpb24oIGNzc0NsYXNzICkge1xuXHRcdHZhciBjbGFzc0F0dHIgPSB0aGlzLmdldENsYXNzKCksXG5cdFx0ICAgIHdoaXRlc3BhY2VSZWdleCA9IHRoaXMud2hpdGVzcGFjZVJlZ2V4LFxuXHRcdCAgICBpbmRleE9mID0gQXV0b2xpbmtlci5VdGlsLmluZGV4T2YsICAvLyB0byBzdXBwb3J0IElFOCBhbmQgYmVsb3dcblx0XHQgICAgY2xhc3NlcyA9ICggIWNsYXNzQXR0ciApID8gW10gOiBjbGFzc0F0dHIuc3BsaXQoIHdoaXRlc3BhY2VSZWdleCApLFxuXHRcdCAgICByZW1vdmVDbGFzc2VzID0gY3NzQ2xhc3Muc3BsaXQoIHdoaXRlc3BhY2VSZWdleCApLFxuXHRcdCAgICByZW1vdmVDbGFzcztcblx0XHRcblx0XHR3aGlsZSggY2xhc3Nlcy5sZW5ndGggJiYgKCByZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzZXMuc2hpZnQoKSApICkge1xuXHRcdFx0dmFyIGlkeCA9IGluZGV4T2YoIGNsYXNzZXMsIHJlbW92ZUNsYXNzICk7XG5cdFx0XHRpZiggaWR4ICE9PSAtMSApIHtcblx0XHRcdFx0Y2xhc3Nlcy5zcGxpY2UoIGlkeCwgMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHR0aGlzLmdldEF0dHJzKClbICdjbGFzcycgXSA9IGNsYXNzZXMuam9pbiggXCIgXCIgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBDU1MgY2xhc3MoZXMpIGZvciB0aGUgSHRtbFRhZywgd2hpY2ggd2lsbCBlYWNoIGJlIHNlcGFyYXRlZCBieSBzcGFjZXMgd2hlblxuXHQgKiB0aGVyZSBhcmUgbXVsdGlwbGUuXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRDbGFzcyA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJzKClbICdjbGFzcycgXSB8fCBcIlwiO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gY2hlY2sgaWYgdGhlIHRhZyBoYXMgYSBDU1MgY2xhc3Mgb3Igbm90LlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNzc0NsYXNzIFRoZSBDU1MgY2xhc3MgdG8gY2hlY2sgZm9yLlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIEh0bWxUYWcgaGFzIHRoZSBDU1MgY2xhc3MsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuXHQgKi9cblx0aGFzQ2xhc3MgOiBmdW5jdGlvbiggY3NzQ2xhc3MgKSB7XG5cdFx0cmV0dXJuICggJyAnICsgdGhpcy5nZXRDbGFzcygpICsgJyAnICkuaW5kZXhPZiggJyAnICsgY3NzQ2xhc3MgKyAnICcgKSAhPT0gLTE7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFNldHMgdGhlIGlubmVyIEhUTUwgZm9yIHRoZSB0YWcuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaHRtbCBUaGUgaW5uZXIgSFRNTCB0byBzZXQuXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhpcyBIdG1sVGFnIGluc3RhbmNlLCBzbyB0aGF0IG1ldGhvZCBjYWxscyBtYXkgYmUgY2hhaW5lZC5cblx0ICovXG5cdHNldElubmVySHRtbCA6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHRoaXMuaW5uZXJIdG1sID0gaHRtbDtcblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSBpbm5lciBIVE1MIGZvciB0aGUgdGFnLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0SW5uZXJIdG1sIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5uZXJIdG1sIHx8IFwiXCI7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIE92ZXJyaWRlIG9mIHN1cGVyY2xhc3MgbWV0aG9kIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIEhUTUwgc3RyaW5nIGZvciB0aGUgdGFnLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0dG9TdHJpbmcgOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGFnTmFtZSA9IHRoaXMuZ2V0VGFnTmFtZSgpLFxuXHRcdCAgICBhdHRyc1N0ciA9IHRoaXMuYnVpbGRBdHRyc1N0cigpO1xuXHRcdFxuXHRcdGF0dHJzU3RyID0gKCBhdHRyc1N0ciApID8gJyAnICsgYXR0cnNTdHIgOiAnJzsgIC8vIHByZXBlbmQgYSBzcGFjZSBpZiB0aGVyZSBhcmUgYWN0dWFsbHkgYXR0cmlidXRlc1xuXHRcdFxuXHRcdHJldHVybiBbICc8JywgdGFnTmFtZSwgYXR0cnNTdHIsICc+JywgdGhpcy5nZXRJbm5lckh0bWwoKSwgJzwvJywgdGFnTmFtZSwgJz4nIF0uam9pbiggXCJcIiApO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBTdXBwb3J0IG1ldGhvZCBmb3Ige0BsaW5rICN0b1N0cmluZ30sIHJldHVybnMgdGhlIHN0cmluZyBzcGFjZS1zZXBhcmF0ZWQga2V5PVwidmFsdWVcIiBwYWlycywgdXNlZCB0byBwb3B1bGF0ZSBcblx0ICogdGhlIHN0cmluZ2lmaWVkIEh0bWxUYWcuXG5cdCAqIFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gRXhhbXBsZSByZXR1cm46IGBhdHRyMT1cInZhbHVlMVwiIGF0dHIyPVwidmFsdWUyXCJgXG5cdCAqL1xuXHRidWlsZEF0dHJzU3RyIDogZnVuY3Rpb24oKSB7XG5cdFx0aWYoICF0aGlzLmF0dHJzICkgcmV0dXJuIFwiXCI7ICAvLyBubyBgYXR0cnNgIE9iamVjdCAobWFwKSBoYXMgYmVlbiBzZXQsIHJldHVybiBlbXB0eSBzdHJpbmdcblx0XHRcblx0XHR2YXIgYXR0cnMgPSB0aGlzLmdldEF0dHJzKCksXG5cdFx0ICAgIGF0dHJzQXJyID0gW107XG5cdFx0XG5cdFx0Zm9yKCB2YXIgcHJvcCBpbiBhdHRycyApIHtcblx0XHRcdGlmKCBhdHRycy5oYXNPd25Qcm9wZXJ0eSggcHJvcCApICkge1xuXHRcdFx0XHRhdHRyc0Fyci5wdXNoKCBwcm9wICsgJz1cIicgKyBhdHRyc1sgcHJvcCBdICsgJ1wiJyApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYXR0cnNBcnIuam9pbiggXCIgXCIgKTtcblx0fVxuXHRcbn0gKTtcbi8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cbi8qanNoaW50IHN1Yjp0cnVlICovXG4vKipcbiAqIEBwcm90ZWN0ZWRcbiAqIEBjbGFzcyBBdXRvbGlua2VyLkFuY2hvclRhZ0J1aWxkZXJcbiAqIEBleHRlbmRzIE9iamVjdFxuICogXG4gKiBCdWlsZHMgYW5jaG9yICgmbHQ7YSZndDspIHRhZ3MgZm9yIHRoZSBBdXRvbGlua2VyIHV0aWxpdHkgd2hlbiBhIG1hdGNoIGlzIGZvdW5kLlxuICogXG4gKiBOb3JtYWxseSB0aGlzIGNsYXNzIGlzIGluc3RhbnRpYXRlZCwgY29uZmlndXJlZCwgYW5kIHVzZWQgaW50ZXJuYWxseSBieSBhbiB7QGxpbmsgQXV0b2xpbmtlcn0gaW5zdGFuY2UsIGJ1dCBtYXkgXG4gKiBhY3R1YWxseSBiZSByZXRyaWV2ZWQgaW4gYSB7QGxpbmsgQXV0b2xpbmtlciNyZXBsYWNlRm4gcmVwbGFjZUZufSB0byBjcmVhdGUge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZyBIdG1sVGFnfSBpbnN0YW5jZXNcbiAqIHdoaWNoIG1heSBiZSBtb2RpZmllZCBiZWZvcmUgcmV0dXJuaW5nIGZyb20gdGhlIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59LiBGb3IgZXhhbXBsZTpcbiAqIFxuICogICAgIHZhciBodG1sID0gQXV0b2xpbmtlci5saW5rKCBcIlRlc3QgZ29vZ2xlLmNvbVwiLCB7XG4gKiAgICAgICAgIHJlcGxhY2VGbiA6IGZ1bmN0aW9uKCBhdXRvbGlua2VyLCBtYXRjaCApIHtcbiAqICAgICAgICAgICAgIHZhciB0YWcgPSBhdXRvbGlua2VyLmdldFRhZ0J1aWxkZXIoKS5idWlsZCggbWF0Y2ggKTsgIC8vIHJldHVybnMgYW4ge0BsaW5rIEF1dG9saW5rZXIuSHRtbFRhZ30gaW5zdGFuY2VcbiAqICAgICAgICAgICAgIHRhZy5zZXRBdHRyKCAncmVsJywgJ25vZm9sbG93JyApO1xuICogICAgICAgICAgICAgXG4gKiAgICAgICAgICAgICByZXR1cm4gdGFnO1xuICogICAgICAgICB9XG4gKiAgICAgfSApO1xuICogICAgIFxuICogICAgIC8vIGdlbmVyYXRlZCBodG1sOlxuICogICAgIC8vICAgVGVzdCA8YSBocmVmPVwiaHR0cDovL2dvb2dsZS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPmdvb2dsZS5jb208L2E+XG4gKi9cbkF1dG9saW5rZXIuQW5jaG9yVGFnQnVpbGRlciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge0Jvb2xlYW59IG5ld1dpbmRvd1xuXHQgKiBAaW5oZXJpdGRvYyBBdXRvbGlua2VyI25ld1dpbmRvd1xuXHQgKi9cblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtOdW1iZXJ9IHRydW5jYXRlXG5cdCAqIEBpbmhlcml0ZG9jIEF1dG9saW5rZXIjdHJ1bmNhdGVcblx0ICovXG5cdFxuXHQvKipcblx0ICogQGNmZyB7U3RyaW5nfSBjbGFzc05hbWVcblx0ICogQGluaGVyaXRkb2MgQXV0b2xpbmtlciNjbGFzc05hbWVcblx0ICovXG5cdFxuXHRcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge09iamVjdH0gW2NmZ10gVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIEFuY2hvclRhZ0J1aWxkZXIgaW5zdGFuY2UsIHNwZWNpZmllZCBpbiBhbiBPYmplY3QgKG1hcCkuXG5cdCAqL1xuXHRjb25zdHJ1Y3RvciA6IGZ1bmN0aW9uKCBjZmcgKSB7XG5cdFx0QXV0b2xpbmtlci5VdGlsLmFzc2lnbiggdGhpcywgY2ZnICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIEdlbmVyYXRlcyB0aGUgYWN0dWFsIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWcgdG8gdXNlIGluIHBsYWNlIG9mIHRoZSBtYXRjaGVkIFVSTC9lbWFpbC9Ud2l0dGVyIHRleHQsXG5cdCAqIHZpYSBpdHMgYG1hdGNoYCBvYmplY3QuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge0F1dG9saW5rZXIubWF0Y2guTWF0Y2h9IG1hdGNoIFRoZSBNYXRjaCBpbnN0YW5jZSB0byBnZW5lcmF0ZSBhbiBhbmNob3IgdGFnIGZyb20uXG5cdCAqIEByZXR1cm4ge0F1dG9saW5rZXIuSHRtbFRhZ30gVGhlIEh0bWxUYWcgaW5zdGFuY2UgZm9yIHRoZSBhbmNob3IgdGFnLlxuXHQgKi9cblx0YnVpbGQgOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0dmFyIHRhZyA9IG5ldyBBdXRvbGlua2VyLkh0bWxUYWcoIHtcblx0XHRcdHRhZ05hbWUgICA6ICdhJyxcblx0XHRcdGF0dHJzICAgICA6IHRoaXMuY3JlYXRlQXR0cnMoIG1hdGNoLmdldFR5cGUoKSwgbWF0Y2guZ2V0QW5jaG9ySHJlZigpICksXG5cdFx0XHRpbm5lckh0bWwgOiB0aGlzLnByb2Nlc3NBbmNob3JUZXh0KCBtYXRjaC5nZXRBbmNob3JUZXh0KCkgKVxuXHRcdH0gKTtcblx0XHRcblx0XHRyZXR1cm4gdGFnO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBPYmplY3QgKG1hcCkgb2YgdGhlIEhUTUwgYXR0cmlidXRlcyBmb3IgdGhlIGFuY2hvciAoJmx0O2EmZ3Q7KSB0YWcgYmVpbmcgZ2VuZXJhdGVkLlxuXHQgKiBcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1widXJsXCIvXCJlbWFpbFwiL1widHdpdHRlclwifSBtYXRjaFR5cGUgVGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCBhbiBhbmNob3IgdGFnIGlzIGJlaW5nIGdlbmVyYXRlZCBmb3IuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBocmVmIFRoZSBocmVmIGZvciB0aGUgYW5jaG9yIHRhZy5cblx0ICogQHJldHVybiB7T2JqZWN0fSBBIGtleS92YWx1ZSBPYmplY3QgKG1hcCkgb2YgdGhlIGFuY2hvciB0YWcncyBhdHRyaWJ1dGVzLiBcblx0ICovXG5cdGNyZWF0ZUF0dHJzIDogZnVuY3Rpb24oIG1hdGNoVHlwZSwgYW5jaG9ySHJlZiApIHtcblx0XHR2YXIgYXR0cnMgPSB7XG5cdFx0XHQnaHJlZicgOiBhbmNob3JIcmVmICAvLyB3ZSdsbCBhbHdheXMgaGF2ZSB0aGUgYGhyZWZgIGF0dHJpYnV0ZVxuXHRcdH07XG5cdFx0XG5cdFx0dmFyIGNzc0NsYXNzID0gdGhpcy5jcmVhdGVDc3NDbGFzcyggbWF0Y2hUeXBlICk7XG5cdFx0aWYoIGNzc0NsYXNzICkge1xuXHRcdFx0YXR0cnNbICdjbGFzcycgXSA9IGNzc0NsYXNzO1xuXHRcdH1cblx0XHRpZiggdGhpcy5uZXdXaW5kb3cgKSB7XG5cdFx0XHRhdHRyc1sgJ3RhcmdldCcgXSA9IFwiX2JsYW5rXCI7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBhdHRycztcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgQ1NTIGNsYXNzIHRoYXQgd2lsbCBiZSB1c2VkIGZvciBhIGdpdmVuIGFuY2hvciB0YWcsIGJhc2VkIG9uIHRoZSBgbWF0Y2hUeXBlYCBhbmQgdGhlIHtAbGluayAjY2xhc3NOYW1lfVxuXHQgKiBjb25maWcuXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1widXJsXCIvXCJlbWFpbFwiL1widHdpdHRlclwifSBtYXRjaFR5cGUgVGhlIHR5cGUgb2YgbWF0Y2ggdGhhdCBhbiBhbmNob3IgdGFnIGlzIGJlaW5nIGdlbmVyYXRlZCBmb3IuXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIENTUyBjbGFzcyBzdHJpbmcgZm9yIHRoZSBsaW5rLiBFeGFtcGxlIHJldHVybjogXCJteUxpbmsgbXlMaW5rLXVybFwiLiBJZiBubyB7QGxpbmsgI2NsYXNzTmFtZX1cblx0ICogICB3YXMgY29uZmlndXJlZCwgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXG5cdCAqL1xuXHRjcmVhdGVDc3NDbGFzcyA6IGZ1bmN0aW9uKCBtYXRjaFR5cGUgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuXHRcdFxuXHRcdGlmKCAhY2xhc3NOYW1lICkgXG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWUgKyBcIi1cIiArIG1hdGNoVHlwZTsgIC8vIGV4OiBcIm15TGluayBteUxpbmstdXJsXCIsIFwibXlMaW5rIG15TGluay1lbWFpbFwiLCBvciBcIm15TGluayBteUxpbmstdHdpdHRlclwiXG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFByb2Nlc3NlcyB0aGUgYGFuY2hvclRleHRgIGJ5IHRydW5jYXRpbmcgdGhlIHRleHQgYWNjb3JkaW5nIHRvIHRoZSB7QGxpbmsgI3RydW5jYXRlfSBjb25maWcuXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gYW5jaG9yVGV4dCBUaGUgYW5jaG9yIHRhZydzIHRleHQgKGkuZS4gd2hhdCB3aWxsIGJlIGRpc3BsYXllZCkuXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHByb2Nlc3NlZCBgYW5jaG9yVGV4dGAuXG5cdCAqL1xuXHRwcm9jZXNzQW5jaG9yVGV4dCA6IGZ1bmN0aW9uKCBhbmNob3JUZXh0ICkge1xuXHRcdGFuY2hvclRleHQgPSB0aGlzLmRvVHJ1bmNhdGUoIGFuY2hvclRleHQgKTtcblx0XHRcblx0XHRyZXR1cm4gYW5jaG9yVGV4dDtcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogUGVyZm9ybXMgdGhlIHRydW5jYXRpb24gb2YgdGhlIGBhbmNob3JUZXh0YCwgaWYgdGhlIGBhbmNob3JUZXh0YCBpcyBsb25nZXIgdGhhbiB0aGUge0BsaW5rICN0cnVuY2F0ZX0gb3B0aW9uLlxuXHQgKiBUcnVuY2F0ZXMgdGhlIHRleHQgdG8gMiBjaGFyYWN0ZXJzIGZld2VyIHRoYW4gdGhlIHtAbGluayAjdHJ1bmNhdGV9IG9wdGlvbiwgYW5kIGFkZHMgXCIuLlwiIHRvIHRoZSBlbmQuXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgYW5jaG9yIHRhZydzIHRleHQgKGkuZS4gd2hhdCB3aWxsIGJlIGRpc3BsYXllZCkuXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHRydW5jYXRlZCBhbmNob3IgdGV4dC5cblx0ICovXG5cdGRvVHJ1bmNhdGUgOiBmdW5jdGlvbiggYW5jaG9yVGV4dCApIHtcblx0XHRyZXR1cm4gQXV0b2xpbmtlci5VdGlsLmVsbGlwc2lzKCBhbmNob3JUZXh0LCB0aGlzLnRydW5jYXRlIHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSApO1xuXHR9XG5cdFxufSApO1xuLypnbG9iYWwgQXV0b2xpbmtlciAqL1xuLyoqXG4gKiBAcHJpdmF0ZVxuICogQGNsYXNzIEF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sUGFyc2VyXG4gKiBAZXh0ZW5kcyBPYmplY3RcbiAqIFxuICogQW4gSFRNTCBwYXJzZXIgaW1wbGVtZW50YXRpb24gd2hpY2ggc2ltcGx5IHdhbGtzIGFuIEhUTUwgc3RyaW5nIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIFxuICoge0BsaW5rIEF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sTm9kZSBIdG1sTm9kZXN9IHRoYXQgcmVwcmVzZW50IHRoZSBiYXNpYyBIVE1MIHN0cnVjdHVyZSBvZiB0aGUgaW5wdXQgc3RyaW5nLlxuICogXG4gKiBBdXRvbGlua2VyIHVzZXMgdGhpcyB0byBvbmx5IGxpbmsgVVJMcy9lbWFpbHMvVHdpdHRlciBoYW5kbGVzIHdpdGhpbiB0ZXh0IG5vZGVzLCBlZmZlY3RpdmVseSBpZ25vcmluZyAvIFwid2Fsa2luZ1xuICogYXJvdW5kXCIgSFRNTCB0YWdzLlxuICovXG5BdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbFBhcnNlciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xuXHRcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBodG1sUmVnZXhcblx0ICogXG5cdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBwdWxsIG91dCBIVE1MIHRhZ3MgZnJvbSBhIHN0cmluZy4gSGFuZGxlcyBuYW1lc3BhY2VkIEhUTUwgdGFncyBhbmRcblx0ICogYXR0cmlidXRlIG5hbWVzLCBhcyBzcGVjaWZpZWQgYnkgaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbC1tYXJrdXAvc3ludGF4Lmh0bWwuXG5cdCAqIFxuXHQgKiBDYXB0dXJpbmcgZ3JvdXBzOlxuXHQgKiBcblx0ICogMS4gVGhlIFwiIURPQ1RZUEVcIiB0YWcgbmFtZSwgaWYgYSB0YWcgaXMgYSAmbHQ7IURPQ1RZUEUmZ3Q7IHRhZy5cblx0ICogMi4gSWYgaXQgaXMgYW4gZW5kIHRhZywgdGhpcyBncm91cCB3aWxsIGhhdmUgdGhlICcvJy5cblx0ICogMy4gVGhlIHRhZyBuYW1lIGZvciBhbGwgdGFncyAob3RoZXIgdGhhbiB0aGUgJmx0OyFET0NUWVBFJmd0OyB0YWcpXG5cdCAqL1xuXHRodG1sUmVnZXggOiAoZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRhZ05hbWVSZWdleCA9IC9bMC05YS16QS1aXVswLTlhLXpBLVo6XSovLFxuXHRcdCAgICBhdHRyTmFtZVJlZ2V4ID0gL1teXFxzXFwwXCInPlxcLz1cXHgwMS1cXHgxRlxceDdGXSsvLCAgIC8vIHRoZSB1bmljb2RlIHJhbmdlIGFjY291bnRzIGZvciBleGNsdWRpbmcgY29udHJvbCBjaGFycywgYW5kIHRoZSBkZWxldGUgY2hhclxuXHRcdCAgICBhdHRyVmFsdWVSZWdleCA9IC8oPzpcIlteXCJdKj9cInwnW14nXSo/J3xbXidcIj08PmBcXHNdKykvLCAvLyBkb3VibGUgcXVvdGVkLCBzaW5nbGUgcXVvdGVkLCBvciB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0ICAgIG5hbWVFcXVhbHNWYWx1ZVJlZ2V4ID0gYXR0ck5hbWVSZWdleC5zb3VyY2UgKyAnKD86XFxcXHMqPVxcXFxzKicgKyBhdHRyVmFsdWVSZWdleC5zb3VyY2UgKyAnKT8nOyAgLy8gb3B0aW9uYWwgJz1bdmFsdWVdJ1xuXHRcdFxuXHRcdHJldHVybiBuZXcgUmVnRXhwKCBbXG5cdFx0XHQvLyBmb3IgPCFET0NUWVBFPiB0YWcuIEV4OiA8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgU3RyaWN0Ly9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtc3RyaWN0LmR0ZFwiPikgXG5cdFx0XHQnKD86Jyxcblx0XHRcdFx0JzwoIURPQ1RZUEUpJywgIC8vICoqKiBDYXB0dXJpbmcgR3JvdXAgMSAtIElmIGl0J3MgYSBkb2N0eXBlIHRhZ1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdC8vIFplcm8gb3IgbW9yZSBhdHRyaWJ1dGVzIGZvbGxvd2luZyB0aGUgdGFnIG5hbWVcblx0XHRcdFx0XHQnKD86Jyxcblx0XHRcdFx0XHRcdCdcXFxccysnLCAgLy8gb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFycyBiZWZvcmUgYW4gYXR0cmlidXRlXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8vIEVpdGhlcjpcblx0XHRcdFx0XHRcdC8vIEEuIGF0dHI9XCJ2YWx1ZVwiLCBvciBcblx0XHRcdFx0XHRcdC8vIEIuIFwidmFsdWVcIiBhbG9uZSAoVG8gY292ZXIgZXhhbXBsZSBkb2N0eXBlIHRhZzogPCFET0NUWVBFIGh0bWwgUFVCTElDIFwiLS8vVzNDLy9EVEQgWEhUTUwgMS4wIFN0cmljdC8vRU5cIiBcImh0dHA6Ly93d3cudzMub3JnL1RSL3hodG1sMS9EVEQveGh0bWwxLXN0cmljdC5kdGRcIj4pIFxuXHRcdFx0XHRcdFx0Jyg/OicsIG5hbWVFcXVhbHNWYWx1ZVJlZ2V4LCAnfCcsIGF0dHJWYWx1ZVJlZ2V4LnNvdXJjZSArICcpJyxcblx0XHRcdFx0XHQnKSonLFxuXHRcdFx0XHQnPicsXG5cdFx0XHQnKScsXG5cdFx0XHRcblx0XHRcdCd8Jyxcblx0XHRcdFxuXHRcdFx0Ly8gQWxsIG90aGVyIEhUTUwgdGFncyAoaS5lLiB0YWdzIHRoYXQgYXJlIG5vdCA8IURPQ1RZUEU+KVxuXHRcdFx0Jyg/OicsXG5cdFx0XHRcdCc8KC8pPycsICAvLyBCZWdpbm5pbmcgb2YgYSB0YWcuIEVpdGhlciAnPCcgZm9yIGEgc3RhcnQgdGFnLCBvciAnPC8nIGZvciBhbiBlbmQgdGFnLiBcblx0XHRcdFx0ICAgICAgICAgIC8vICoqKiBDYXB0dXJpbmcgR3JvdXAgMjogVGhlIHNsYXNoIG9yIGFuIGVtcHR5IHN0cmluZy4gU2xhc2ggKCcvJykgZm9yIGVuZCB0YWcsIGVtcHR5IHN0cmluZyBmb3Igc3RhcnQgb3Igc2VsZi1jbG9zaW5nIHRhZy5cblx0XHRcdFxuXHRcdFx0XHRcdC8vICoqKiBDYXB0dXJpbmcgR3JvdXAgMyAtIFRoZSB0YWcgbmFtZVxuXHRcdFx0XHRcdCcoJyArIHRhZ05hbWVSZWdleC5zb3VyY2UgKyAnKScsXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gWmVybyBvciBtb3JlIGF0dHJpYnV0ZXMgZm9sbG93aW5nIHRoZSB0YWcgbmFtZVxuXHRcdFx0XHRcdCcoPzonLFxuXHRcdFx0XHRcdFx0J1xcXFxzKycsICAgICAgICAgICAgICAgIC8vIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcnMgYmVmb3JlIGFuIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdFx0bmFtZUVxdWFsc1ZhbHVlUmVnZXgsICAvLyBhdHRyPVwidmFsdWVcIiAod2l0aCBvcHRpb25hbCA9XCJ2YWx1ZVwiIHBhcnQpXG5cdFx0XHRcdFx0JykqJyxcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQnXFxcXHMqLz8nLCAgLy8gYW55IHRyYWlsaW5nIHNwYWNlcyBhbmQgb3B0aW9uYWwgJy8nIGJlZm9yZSB0aGUgY2xvc2luZyAnPidcblx0XHRcdFx0Jz4nLFxuXHRcdFx0JyknXG5cdFx0XS5qb2luKCBcIlwiICksICdnaScgKTtcblx0fSApKCksXG5cdFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHByb3BlcnR5IHtSZWdFeHB9IGh0bWxDaGFyYWN0ZXJFbnRpdGllc1JlZ2V4XG5cdCAqXG5cdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIGNvbW1vbiBIVE1MIGNoYXJhY3RlciBlbnRpdGllcy5cblx0ICogXG5cdCAqIElnbm9yaW5nICZhbXA7IGFzIGl0IGNvdWxkIGJlIHBhcnQgb2YgYSBxdWVyeSBzdHJpbmcgLS0gaGFuZGxpbmcgaXQgc2VwYXJhdGVseS5cblx0ICovXG5cdGh0bWxDaGFyYWN0ZXJFbnRpdGllc1JlZ2V4OiAvKCZuYnNwO3wmIzE2MDt8Jmx0O3wmIzYwO3wmZ3Q7fCYjNjI7fCZxdW90O3wmIzM0O3wmIzM5OykvZ2ksXG5cdFxuXHRcblx0LyoqXG5cdCAqIFBhcnNlcyBhbiBIVE1MIHN0cmluZyBhbmQgcmV0dXJucyBhIHNpbXBsZSBhcnJheSBvZiB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxOb2RlIEh0bWxOb2Rlc30gdG8gcmVwcmVzZW50XG5cdCAqIHRoZSBIVE1MIHN0cnVjdHVyZSBvZiB0aGUgaW5wdXQgc3RyaW5nLiBcblx0ICogXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlLlxuXHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbE5vZGVbXX1cblx0ICovXG5cdHBhcnNlIDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGh0bWxSZWdleCA9IHRoaXMuaHRtbFJlZ2V4LFxuXHRcdCAgICBjdXJyZW50UmVzdWx0LFxuXHRcdCAgICBsYXN0SW5kZXggPSAwLFxuXHRcdCAgICB0ZXh0QW5kRW50aXR5Tm9kZXMsXG5cdFx0ICAgIG5vZGVzID0gW107ICAvLyB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlIG1ldGhvZFxuXHRcdFxuXHRcdHdoaWxlKCAoIGN1cnJlbnRSZXN1bHQgPSBodG1sUmVnZXguZXhlYyggaHRtbCApICkgIT09IG51bGwgKSB7XG5cdFx0XHR2YXIgdGFnVGV4dCA9IGN1cnJlbnRSZXN1bHRbIDAgXSxcblx0XHRcdCAgICB0YWdOYW1lID0gY3VycmVudFJlc3VsdFsgMSBdIHx8IGN1cnJlbnRSZXN1bHRbIDMgXSwgIC8vIFRoZSA8IURPQ1RZUEU+IHRhZyAoZXg6IFwiIURPQ1RZUEVcIiksIG9yIGFub3RoZXIgdGFnIChleDogXCJhXCIgb3IgXCJpbWdcIikgXG5cdFx0XHQgICAgaXNDbG9zaW5nVGFnID0gISFjdXJyZW50UmVzdWx0WyAyIF0sXG5cdFx0XHQgICAgaW5CZXR3ZWVuVGFnc1RleHQgPSBodG1sLnN1YnN0cmluZyggbGFzdEluZGV4LCBjdXJyZW50UmVzdWx0LmluZGV4ICk7XG5cdFx0XHRcblx0XHRcdC8vIFB1c2ggVGV4dE5vZGVzIGFuZCBFbnRpdHlOb2RlcyBmb3IgYW55IHRleHQgZm91bmQgYmV0d2VlbiB0YWdzXG5cdFx0XHRpZiggaW5CZXR3ZWVuVGFnc1RleHQgKSB7XG5cdFx0XHRcdHRleHRBbmRFbnRpdHlOb2RlcyA9IHRoaXMucGFyc2VUZXh0QW5kRW50aXR5Tm9kZXMoIGluQmV0d2VlblRhZ3NUZXh0ICk7XG5cdFx0XHRcdG5vZGVzLnB1c2guYXBwbHkoIG5vZGVzLCB0ZXh0QW5kRW50aXR5Tm9kZXMgKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gUHVzaCB0aGUgRWxlbWVudE5vZGVcblx0XHRcdG5vZGVzLnB1c2goIHRoaXMuY3JlYXRlRWxlbWVudE5vZGUoIHRhZ1RleHQsIHRhZ05hbWUsIGlzQ2xvc2luZ1RhZyApICk7XG5cdFx0XHRcblx0XHRcdGxhc3RJbmRleCA9IGN1cnJlbnRSZXN1bHQuaW5kZXggKyB0YWdUZXh0Lmxlbmd0aDtcblx0XHR9XG5cdFx0XG5cdFx0Ly8gUHJvY2VzcyBhbnkgcmVtYWluaW5nIHRleHQgYWZ0ZXIgdGhlIGxhc3QgSFRNTCBlbGVtZW50LiBXaWxsIHByb2Nlc3MgYWxsIG9mIHRoZSB0ZXh0IGlmIHRoZXJlIHdlcmUgbm8gSFRNTCBlbGVtZW50cy5cblx0XHRpZiggbGFzdEluZGV4IDwgaHRtbC5sZW5ndGggKSB7XG5cdFx0XHR2YXIgdGV4dCA9IGh0bWwuc3Vic3RyaW5nKCBsYXN0SW5kZXggKTtcblx0XHRcdFxuXHRcdFx0Ly8gUHVzaCBUZXh0Tm9kZXMgYW5kIEVudGl0eU5vZGVzIGZvciBhbnkgdGV4dCBmb3VuZCBiZXR3ZWVuIHRhZ3Ncblx0XHRcdGlmKCB0ZXh0ICkge1xuXHRcdFx0XHR0ZXh0QW5kRW50aXR5Tm9kZXMgPSB0aGlzLnBhcnNlVGV4dEFuZEVudGl0eU5vZGVzKCB0ZXh0ICk7XG5cdFx0XHRcdG5vZGVzLnB1c2guYXBwbHkoIG5vZGVzLCB0ZXh0QW5kRW50aXR5Tm9kZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIG5vZGVzO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBQYXJzZXMgdGV4dCBhbmQgSFRNTCBlbnRpdHkgbm9kZXMgZnJvbSBhIGdpdmVuIHN0cmluZy4gVGhlIGlucHV0IHN0cmluZyBzaG91bGQgbm90IGhhdmUgYW55IEhUTUwgdGFncyAoZWxlbWVudHMpXG5cdCAqIHdpdGhpbiBpdC5cblx0ICogXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIHBhcnNlLlxuXHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbE5vZGVbXX0gQW4gYXJyYXkgb2YgSHRtbE5vZGVzIHRvIHJlcHJlc2VudCB0aGUgXG5cdCAqICAge0BsaW5rIEF1dG9saW5rZXIuaHRtbFBhcnNlci5UZXh0Tm9kZSBUZXh0Tm9kZXN9IGFuZCB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkVudGl0eU5vZGUgRW50aXR5Tm9kZXN9IGZvdW5kLlxuXHQgKi9cblx0cGFyc2VUZXh0QW5kRW50aXR5Tm9kZXMgOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHR2YXIgbm9kZXMgPSBbXSxcblx0XHQgICAgdGV4dEFuZEVudGl0eVRva2VucyA9IEF1dG9saW5rZXIuVXRpbC5zcGxpdEFuZENhcHR1cmUoIHRleHQsIHRoaXMuaHRtbENoYXJhY3RlckVudGl0aWVzUmVnZXggKTsgIC8vIHNwbGl0IGF0IEhUTUwgZW50aXRpZXMsIGJ1dCBpbmNsdWRlIHRoZSBIVE1MIGVudGl0aWVzIGluIHRoZSByZXN1bHRzIGFycmF5XG5cdFx0XG5cdFx0Ly8gRXZlcnkgZXZlbiBudW1iZXJlZCB0b2tlbiBpcyBhIFRleHROb2RlLCBhbmQgZXZlcnkgb2RkIG51bWJlcmVkIHRva2VuIGlzIGFuIEVudGl0eU5vZGVcblx0XHQvLyBGb3IgZXhhbXBsZTogYW4gaW5wdXQgYHRleHRgIG9mIFwiVGVzdCAmcXVvdDt0aGlzJnF1b3Q7IHRvZGF5XCIgd291bGQgdHVybiBpbnRvIHRoZSBcblx0XHQvLyAgIGB0ZXh0QW5kRW50aXR5VG9rZW5zYDogWyAnVGVzdCAnLCAnJnF1b3Q7JywgJ3RoaXMnLCAnJnF1b3Q7JywgJyB0b2RheScgXVxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSB0ZXh0QW5kRW50aXR5VG9rZW5zLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyICkge1xuXHRcdFx0dmFyIHRleHRUb2tlbiA9IHRleHRBbmRFbnRpdHlUb2tlbnNbIGkgXSxcblx0XHRcdCAgICBlbnRpdHlUb2tlbiA9IHRleHRBbmRFbnRpdHlUb2tlbnNbIGkgKyAxIF07XG5cdFx0XHRcblx0XHRcdGlmKCB0ZXh0VG9rZW4gKSBub2Rlcy5wdXNoKCB0aGlzLmNyZWF0ZVRleHROb2RlKCB0ZXh0VG9rZW4gKSApO1xuXHRcdFx0aWYoIGVudGl0eVRva2VuICkgbm9kZXMucHVzaCggdGhpcy5jcmVhdGVFbnRpdHlOb2RlKCBlbnRpdHlUb2tlbiApICk7XG5cdFx0fVxuXHRcdHJldHVybiBub2Rlcztcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGFuIHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuRWxlbWVudE5vZGUgRWxlbWVudE5vZGV9LlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHRhZ1RleHQgVGhlIGZ1bGwgdGV4dCBvZiB0aGUgdGFnIChlbGVtZW50KSB0aGF0IHdhcyBtYXRjaGVkLCBpbmNsdWRpbmcgaXRzIGF0dHJpYnV0ZXMuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcuIEV4OiBBbiAmbHQ7aW1nJmd0OyB0YWcgd291bGQgYmUgcGFzc2VkIHRvIHRoaXMgbWV0aG9kIGFzIFwiaW1nXCIuXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNDbG9zaW5nVGFnIGB0cnVlYCBpZiBpdCdzIGEgY2xvc2luZyB0YWcsIGZhbHNlIG90aGVyd2lzZS5cblx0ICogQHJldHVybiB7QXV0b2xpbmtlci5odG1sUGFyc2VyLkVsZW1lbnROb2RlfVxuXHQgKi9cblx0Y3JlYXRlRWxlbWVudE5vZGUgOiBmdW5jdGlvbiggdGFnVGV4dCwgdGFnTmFtZSwgaXNDbG9zaW5nVGFnICkge1xuXHRcdHJldHVybiBuZXcgQXV0b2xpbmtlci5odG1sUGFyc2VyLkVsZW1lbnROb2RlKCB7XG5cdFx0XHR0ZXh0ICAgIDogdGFnVGV4dCxcblx0XHRcdHRhZ05hbWUgOiB0YWdOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRjbG9zaW5nIDogaXNDbG9zaW5nVGFnXG5cdFx0fSApO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkVudGl0eU5vZGUgRW50aXR5Tm9kZX0uXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCB0aGF0IHdhcyBtYXRjaGVkIGZvciB0aGUgSFRNTCBlbnRpdHkgKHN1Y2ggYXMgJyZhbXA7bmJzcDsnKS5cblx0ICogQHJldHVybiB7QXV0b2xpbmtlci5odG1sUGFyc2VyLkVudGl0eU5vZGV9XG5cdCAqL1xuXHRjcmVhdGVFbnRpdHlOb2RlIDogZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0cmV0dXJuIG5ldyBBdXRvbGlua2VyLmh0bWxQYXJzZXIuRW50aXR5Tm9kZSggeyB0ZXh0OiB0ZXh0IH0gKTtcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEge0BsaW5rIEF1dG9saW5rZXIuaHRtbFBhcnNlci5UZXh0Tm9kZSBUZXh0Tm9kZX0uXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCB0aGF0IHdhcyBtYXRjaGVkLlxuXHQgKiBAcmV0dXJuIHtBdXRvbGlua2VyLmh0bWxQYXJzZXIuVGV4dE5vZGV9XG5cdCAqL1xuXHRjcmVhdGVUZXh0Tm9kZSA6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdHJldHVybiBuZXcgQXV0b2xpbmtlci5odG1sUGFyc2VyLlRleHROb2RlKCB7IHRleHQ6IHRleHQgfSApO1xuXHR9XG5cdFxufSApO1xuLypnbG9iYWwgQXV0b2xpbmtlciAqL1xuLyoqXG4gKiBAYWJzdHJhY3RcbiAqIEBjbGFzcyBBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbE5vZGVcbiAqIFxuICogUmVwcmVzZW50cyBhbiBIVE1MIG5vZGUgZm91bmQgaW4gYW4gaW5wdXQgc3RyaW5nLiBBbiBIVE1MIG5vZGUgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmc6XG4gKiBcbiAqIDEuIEFuIHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuRWxlbWVudE5vZGUgRWxlbWVudE5vZGV9LCB3aGljaCByZXByZXNlbnRzIEhUTUwgdGFncy5cbiAqIDIuIEEge0BsaW5rIEF1dG9saW5rZXIuaHRtbFBhcnNlci5UZXh0Tm9kZSBUZXh0Tm9kZX0sIHdoaWNoIHJlcHJlc2VudHMgdGV4dCBvdXRzaWRlIG9yIHdpdGhpbiBIVE1MIHRhZ3MuXG4gKiAzLiBBIHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuRW50aXR5Tm9kZSBFbnRpdHlOb2RlfSwgd2hpY2ggcmVwcmVzZW50cyBvbmUgb2YgdGhlIGtub3duIEhUTUxcbiAqICAgIGVudGl0aWVzIHRoYXQgQXV0b2xpbmtlciBsb29rcyBmb3IuIFRoaXMgaW5jbHVkZXMgY29tbW9uIG9uZXMgc3VjaCBhcyAmYW1wO3F1b3Q7IGFuZCAmYW1wO25ic3A7XG4gKi9cbkF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sTm9kZSA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge1N0cmluZ30gdGV4dCAocmVxdWlyZWQpXG5cdCAqIFxuXHQgKiBUaGUgb3JpZ2luYWwgdGV4dCB0aGF0IHdhcyBtYXRjaGVkIGZvciB0aGUgSHRtbE5vZGUuIFxuXHQgKiBcblx0ICogLSBJbiB0aGUgY2FzZSBvZiBhbiB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkVsZW1lbnROb2RlIEVsZW1lbnROb2RlfSwgdGhpcyB3aWxsIGJlIHRoZSB0YWcnc1xuXHQgKiAgIHRleHQuXG5cdCAqIC0gSW4gdGhlIGNhc2Ugb2YgYSB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLlRleHROb2RlIFRleHROb2RlfSwgdGhpcyB3aWxsIGJlIHRoZSB0ZXh0IGl0c2VsZi5cblx0ICogLSBJbiB0aGUgY2FzZSBvZiBhIHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuRW50aXR5Tm9kZSBFbnRpdHlOb2RlfSwgdGhpcyB3aWxsIGJlIHRoZSB0ZXh0IG9mXG5cdCAqICAgdGhlIEhUTUwgZW50aXR5LlxuXHQgKi9cblx0dGV4dCA6IFwiXCIsXG5cdFxuXHRcblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0ge09iamVjdH0gY2ZnIFRoZSBjb25maWd1cmF0aW9uIHByb3BlcnRpZXMgZm9yIHRoZSBNYXRjaCBpbnN0YW5jZSwgc3BlY2lmaWVkIGluIGFuIE9iamVjdCAobWFwKS5cblx0ICovXG5cdGNvbnN0cnVjdG9yIDogZnVuY3Rpb24oIGNmZyApIHtcblx0XHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCB0aGlzLCBjZmcgKTtcblx0fSxcblxuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgYSBzdHJpbmcgbmFtZSBmb3IgdGhlIHR5cGUgb2Ygbm9kZSB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cblx0ICogXG5cdCAqIEBhYnN0cmFjdFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRUeXBlIDogQXV0b2xpbmtlci5VdGlsLmFic3RyYWN0TWV0aG9kLFxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIHtAbGluayAjdGV4dH0gZm9yIHRoZSBIdG1sTm9kZS5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldFRleHQgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHR9XG5cbn0gKTtcbi8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cbi8qKlxuICogQGNsYXNzIEF1dG9saW5rZXIuaHRtbFBhcnNlci5FbGVtZW50Tm9kZVxuICogQGV4dGVuZHMgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxOb2RlXG4gKiBcbiAqIFJlcHJlc2VudHMgYW4gSFRNTCBlbGVtZW50IG5vZGUgdGhhdCBoYXMgYmVlbiBwYXJzZWQgYnkgdGhlIHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbFBhcnNlcn0uXG4gKiBcbiAqIFNlZSB0aGlzIGNsYXNzJ3Mgc3VwZXJjbGFzcyAoe0BsaW5rIEF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sTm9kZX0pIGZvciBtb3JlIGRldGFpbHMuXG4gKi9cbkF1dG9saW5rZXIuaHRtbFBhcnNlci5FbGVtZW50Tm9kZSA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIEF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sTm9kZSwge1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge1N0cmluZ30gdGFnTmFtZSAocmVxdWlyZWQpXG5cdCAqIFxuXHQgKiBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgd2FzIG1hdGNoZWQuXG5cdCAqL1xuXHR0YWdOYW1lIDogJycsXG5cdFxuXHQvKipcblx0ICogQGNmZyB7Qm9vbGVhbn0gY2xvc2luZyAocmVxdWlyZWQpXG5cdCAqIFxuXHQgKiBgdHJ1ZWAgaWYgdGhlIGVsZW1lbnQgKHRhZykgaXMgYSBjbG9zaW5nIHRhZywgYGZhbHNlYCBpZiBpdHMgYW4gb3BlbmluZyB0YWcuXG5cdCAqL1xuXHRjbG9zaW5nIDogZmFsc2UsXG5cblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlIG9mIG5vZGUgdGhhdCB0aGlzIGNsYXNzIHJlcHJlc2VudHMuXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRUeXBlIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdlbGVtZW50Jztcblx0fSxcblx0XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIEhUTUwgZWxlbWVudCdzICh0YWcncykgbmFtZS4gRXg6IGZvciBhbiAmbHQ7aW1nJmd0OyB0YWcsIHJldHVybnMgXCJpbWdcIi5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldFRhZ05hbWUgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy50YWdOYW1lO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHRoZSBIVE1MIGVsZW1lbnQgKHRhZykgaXMgYSBjbG9zaW5nIHRhZy4gRXg6ICZsdDtkaXYmZ3Q7IHJldHVybnNcblx0ICogYGZhbHNlYCwgd2hpbGUgJmx0Oy9kaXYmZ3Q7IHJldHVybnMgYHRydWVgLlxuXHQgKiBcblx0ICogQHJldHVybiB7Qm9vbGVhbn1cblx0ICovXG5cdGlzQ2xvc2luZyA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmNsb3Npbmc7XG5cdH1cblx0XG59ICk7XG4vKmdsb2JhbCBBdXRvbGlua2VyICovXG4vKipcbiAqIEBjbGFzcyBBdXRvbGlua2VyLmh0bWxQYXJzZXIuRW50aXR5Tm9kZVxuICogQGV4dGVuZHMgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxOb2RlXG4gKiBcbiAqIFJlcHJlc2VudHMgYSBrbm93biBIVE1MIGVudGl0eSBub2RlIHRoYXQgaGFzIGJlZW4gcGFyc2VkIGJ5IHRoZSB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxQYXJzZXJ9LlxuICogRXg6ICcmYW1wO25ic3A7Jywgb3IgJyZhbXAjMTYwOycgKHdoaWNoIHdpbGwgYmUgcmV0cmlldmFibGUgZnJvbSB0aGUge0BsaW5rICNnZXRUZXh0fSBtZXRob2QuXG4gKiBcbiAqIE5vdGUgdGhhdCB0aGlzIGNsYXNzIHdpbGwgb25seSBiZSByZXR1cm5lZCBmcm9tIHRoZSBIdG1sUGFyc2VyIGZvciB0aGUgc2V0IG9mIGNoZWNrZWQgSFRNTCBlbnRpdHkgbm9kZXMgXG4gKiBkZWZpbmVkIGJ5IHRoZSB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxQYXJzZXIjaHRtbENoYXJhY3RlckVudGl0aWVzUmVnZXh9LlxuICogXG4gKiBTZWUgdGhpcyBjbGFzcydzIHN1cGVyY2xhc3MgKHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbE5vZGV9KSBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5BdXRvbGlua2VyLmh0bWxQYXJzZXIuRW50aXR5Tm9kZSA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIEF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sTm9kZSwge1xuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgYSBzdHJpbmcgbmFtZSBmb3IgdGhlIHR5cGUgb2Ygbm9kZSB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldFR5cGUgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ2VudGl0eSc7XG5cdH1cblx0XG59ICk7XG4vKmdsb2JhbCBBdXRvbGlua2VyICovXG4vKipcbiAqIEBjbGFzcyBBdXRvbGlua2VyLmh0bWxQYXJzZXIuVGV4dE5vZGVcbiAqIEBleHRlbmRzIEF1dG9saW5rZXIuaHRtbFBhcnNlci5IdG1sTm9kZVxuICogXG4gKiBSZXByZXNlbnRzIGEgdGV4dCBub2RlIHRoYXQgaGFzIGJlZW4gcGFyc2VkIGJ5IHRoZSB7QGxpbmsgQXV0b2xpbmtlci5odG1sUGFyc2VyLkh0bWxQYXJzZXJ9LlxuICogXG4gKiBTZWUgdGhpcyBjbGFzcydzIHN1cGVyY2xhc3MgKHtAbGluayBBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbE5vZGV9KSBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5BdXRvbGlua2VyLmh0bWxQYXJzZXIuVGV4dE5vZGUgPSBBdXRvbGlua2VyLlV0aWwuZXh0ZW5kKCBBdXRvbGlua2VyLmh0bWxQYXJzZXIuSHRtbE5vZGUsIHtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlIG9mIG5vZGUgdGhhdCB0aGlzIGNsYXNzIHJlcHJlc2VudHMuXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRUeXBlIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICd0ZXh0Jztcblx0fVxuXHRcbn0gKTtcbi8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cbi8qKlxuICogQHByaXZhdGVcbiAqIEBjbGFzcyBBdXRvbGlua2VyLm1hdGNoUGFyc2VyLk1hdGNoUGFyc2VyXG4gKiBAZXh0ZW5kcyBPYmplY3RcbiAqIFxuICogVXNlZCBieSBBdXRvbGlua2VyIHRvIHBhcnNlIHtAbGluayAjdXJscyBVUkxzfSwge0BsaW5rICNlbWFpbHMgZW1haWwgYWRkcmVzc2VzfSwgYW5kIHtAbGluayAjdHdpdHRlciBUd2l0dGVyIGhhbmRsZXN9LCBcbiAqIGdpdmVuIGFuIGlucHV0IHN0cmluZyBvZiB0ZXh0LlxuICogXG4gKiBUaGUgTWF0Y2hQYXJzZXIgaXMgZmVkIGEgbm9uLUhUTUwgc3RyaW5nIGluIG9yZGVyIHRvIHNlYXJjaCBvdXQgVVJMcywgZW1haWwgYWRkcmVzc2VzIGFuZCBUd2l0dGVyIGhhbmRsZXMuIEF1dG9saW5rZXJcbiAqIGZpcnN0IHVzZXMgdGhlIHtAbGluayBIdG1sUGFyc2VyfSB0byBcIndhbGsgYXJvdW5kXCIgSFRNTCB0YWdzLCBhbmQgdGhlbiB0aGUgdGV4dCBhcm91bmQgdGhlIEhUTUwgdGFncyBpcyBwYXNzZWQgaW50b1xuICogdGhlIE1hdGNoUGFyc2VyIGluIG9yZGVyIHRvIGZpbmQgdGhlIGFjdHVhbCBtYXRjaGVzLlxuICovXG5BdXRvbGlua2VyLm1hdGNoUGFyc2VyLk1hdGNoUGFyc2VyID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggT2JqZWN0LCB7XG5cdFxuXHQvKipcblx0ICogQGNmZyB7Qm9vbGVhbn0gdXJsc1xuXHQgKiBcblx0ICogYHRydWVgIGlmIG1pc2NlbGxhbmVvdXMgVVJMcyBzaG91bGQgYmUgYXV0b21hdGljYWxseSBsaW5rZWQsIGBmYWxzZWAgaWYgdGhleSBzaG91bGQgbm90IGJlLlxuXHQgKi9cblx0dXJscyA6IHRydWUsXG5cdFxuXHQvKipcblx0ICogQGNmZyB7Qm9vbGVhbn0gZW1haWxcblx0ICogXG5cdCAqIGB0cnVlYCBpZiBlbWFpbCBhZGRyZXNzZXMgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgbGlua2VkLCBgZmFsc2VgIGlmIHRoZXkgc2hvdWxkIG5vdCBiZS5cblx0ICovXG5cdGVtYWlsIDogdHJ1ZSxcblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtCb29sZWFufSB0d2l0dGVyXG5cdCAqIFxuXHQgKiBgdHJ1ZWAgaWYgVHdpdHRlciBoYW5kbGVzIChcIkBleGFtcGxlXCIpIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGxpbmtlZCwgYGZhbHNlYCBpZiB0aGV5IHNob3VsZCBub3QgYmUuXG5cdCAqL1xuXHR0d2l0dGVyIDogdHJ1ZSxcblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtCb29sZWFufSBzdHJpcFByZWZpeFxuXHQgKiBcblx0ICogYHRydWVgIGlmICdodHRwOi8vJyBvciAnaHR0cHM6Ly8nIGFuZC9vciB0aGUgJ3d3dy4nIHNob3VsZCBiZSBzdHJpcHBlZCBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgVVJMIGxpbmtzJyB0ZXh0XG5cdCAqIGluIHtAbGluayBBdXRvbGlua2VyLm1hdGNoLlVybCBVUkwgbWF0Y2hlc30sIGBmYWxzZWAgb3RoZXJ3aXNlLlxuXHQgKiBcblx0ICogVE9ETzogSGFuZGxlIHRoaXMgYmVmb3JlIGEgVVJMIE1hdGNoIG9iamVjdCBpcyBpbnN0YW50aWF0ZWQuXG5cdCAqL1xuXHRzdHJpcFByZWZpeCA6IHRydWUsXG5cdFxuXHRcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBtYXRjaGVyUmVnZXhcblx0ICogXG5cdCAqIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIFVSTHMsIGVtYWlsIGFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgaGFuZGxlcy5cblx0ICogXG5cdCAqIFRoaXMgcmVndWxhciBleHByZXNzaW9uIGhhcyB0aGUgZm9sbG93aW5nIGNhcHR1cmluZyBncm91cHM6XG5cdCAqIFxuXHQgKiAxLiBHcm91cCB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZXJlIGlzIGEgVHdpdHRlciBoYW5kbGUgbWF0Y2ggKGkuZS4gXFxAc29tZVR3aXR0ZXJVc2VyKS4gU2ltcGx5IGNoZWNrIGZvciBpdHMgXG5cdCAqICAgIGV4aXN0ZW5jZSB0byBkZXRlcm1pbmUgaWYgdGhlcmUgaXMgYSBUd2l0dGVyIGhhbmRsZSBtYXRjaC4gVGhlIG5leHQgY291cGxlIG9mIGNhcHR1cmluZyBncm91cHMgZ2l2ZSBpbmZvcm1hdGlvbiBcblx0ICogICAgYWJvdXQgdGhlIFR3aXR0ZXIgaGFuZGxlIG1hdGNoLlxuXHQgKiAyLiBUaGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSBcXEBzaWduIGluIGEgVHdpdHRlciBoYW5kbGUuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgdGhlcmUgYXJlIG5vIGxvb2tiZWhpbmRzIGluXG5cdCAqICAgIEpTIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGFuZCBjYW4gYmUgdXNlZCB0byByZWNvbnN0cnVjdCB0aGUgb3JpZ2luYWwgc3RyaW5nIGluIGEgcmVwbGFjZSgpLlxuXHQgKiAzLiBUaGUgVHdpdHRlciBoYW5kbGUgaXRzZWxmIGluIGEgVHdpdHRlciBtYXRjaC4gSWYgdGhlIG1hdGNoIGlzICdAc29tZVR3aXR0ZXJVc2VyJywgdGhlIGhhbmRsZSBpcyAnc29tZVR3aXR0ZXJVc2VyJy5cblx0ICogNC4gR3JvdXAgdGhhdCBtYXRjaGVzIGFuIGVtYWlsIGFkZHJlc3MuIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBtYXRjaCBpcyBhbiBlbWFpbCBhZGRyZXNzLCBhcyB3ZWxsIGFzIGhvbGRpbmcgdGhlIGZ1bGwgXG5cdCAqICAgIGFkZHJlc3MuIEV4OiAnbWVAbXkuY29tJ1xuXHQgKiA1LiBHcm91cCB0aGF0IG1hdGNoZXMgYSBVUkwgaW4gdGhlIGlucHV0IHRleHQuIEV4OiAnaHR0cDovL2dvb2dsZS5jb20nLCAnd3d3Lmdvb2dsZS5jb20nLCBvciBqdXN0ICdnb29nbGUuY29tJy5cblx0ICogICAgVGhpcyBhbHNvIGluY2x1ZGVzIGEgcGF0aCwgdXJsIHBhcmFtZXRlcnMsIG9yIGhhc2ggYW5jaG9ycy4gRXg6IGdvb2dsZS5jb20vcGF0aC90by9maWxlP3ExPTEmcTI9MiNteUFuY2hvclxuXHQgKiA2LiBHcm91cCB0aGF0IG1hdGNoZXMgYSBwcm90b2NvbCBVUkwgKGkuZS4gJ2h0dHA6Ly9nb29nbGUuY29tJykuIFRoaXMgaXMgdXNlZCB0byBtYXRjaCBwcm90b2NvbCBVUkxzIHdpdGgganVzdCBhIHNpbmdsZVxuXHQgKiAgICB3b3JkLCBsaWtlICdodHRwOi8vbG9jYWxob3N0Jywgd2hlcmUgd2Ugd29uJ3QgZG91YmxlIGNoZWNrIHRoYXQgdGhlIGRvbWFpbiBuYW1lIGhhcyBhdCBsZWFzdCBvbmUgJy4nIGluIGl0LlxuXHQgKiA3LiBBIHByb3RvY29sLXJlbGF0aXZlICgnLy8nKSBtYXRjaCBmb3IgdGhlIGNhc2Ugb2YgYSAnd3d3LicgcHJlZml4ZWQgVVJMLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBub3QgYSBcblx0ICogICAgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2guIFdlIG5lZWQgdG8ga25vdyB0aGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgJy8vJyBpbiBvcmRlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgYSB2YWxpZCBtYXRjaFxuXHQgKiAgICBvciB0aGUgLy8gd2FzIGluIGEgc3RyaW5nIHdlIGRvbid0IHdhbnQgdG8gYXV0by1saW5rLlxuXHQgKiA4LiBBIHByb3RvY29sLXJlbGF0aXZlICgnLy8nKSBtYXRjaCBmb3IgdGhlIGNhc2Ugb2YgYSBrbm93biBUTEQgcHJlZml4ZWQgVVJMLiBXaWxsIGJlIGFuIGVtcHR5IHN0cmluZyBpZiBpdCBpcyBub3QgYSBcblx0ICogICAgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2guIFNlZSAjNiBmb3IgbW9yZSBpbmZvLiBcblx0ICovXG5cdG1hdGNoZXJSZWdleCA6IChmdW5jdGlvbigpIHtcblx0XHR2YXIgdHdpdHRlclJlZ2V4ID0gLyhefFteXFx3XSlAKFxcd3sxLDE1fSkvLCAgICAgICAgICAgICAgLy8gRm9yIG1hdGNoaW5nIGEgdHdpdHRlciBoYW5kbGUuIEV4OiBAZ3JlZ29yeV9qYWNvYnNcblx0XHQgICAgXG5cdFx0ICAgIGVtYWlsUmVnZXggPSAvKD86W1xcLTs6Jj1cXCtcXCQsXFx3XFwuXStAKS8sICAgICAgICAgICAgIC8vIHNvbWV0aGluZ0AgZm9yIGVtYWlsIGFkZHJlc3NlcyAoYS5rLmEuIGxvY2FsLXBhcnQpXG5cdFx0ICAgIFxuXHRcdCAgICBwcm90b2NvbFJlZ2V4ID0gLyg/OltBLVphLXpdWy0uK0EtWmEtejAtOV0rOig/IVtBLVphLXpdWy0uK0EtWmEtejAtOV0rOlxcL1xcLykoPyFcXGQrXFwvPykoPzpcXC9cXC8pPykvLCAgLy8gbWF0Y2ggcHJvdG9jb2wsIGFsbG93IGluIGZvcm1hdCBcImh0dHA6Ly9cIiBvciBcIm1haWx0bzpcIi4gSG93ZXZlciwgZG8gbm90IG1hdGNoIHRoZSBmaXJzdCBwYXJ0IG9mIHNvbWV0aGluZyBsaWtlICdsaW5rOmh0dHA6Ly93d3cuZ29vZ2xlLmNvbScgKGkuZS4gZG9uJ3QgbWF0Y2ggXCJsaW5rOlwiKS4gQWxzbywgbWFrZSBzdXJlIHdlIGRvbid0IGludGVycHJldCAnZ29vZ2xlLmNvbTo4MDAwJyBhcyBpZiAnZ29vZ2xlLmNvbScgd2FzIGEgcHJvdG9jb2wgaGVyZSAoaS5lLiBpZ25vcmUgYSB0cmFpbGluZyBwb3J0IG51bWJlciBpbiB0aGlzIHJlZ2V4KVxuXHRcdCAgICB3d3dSZWdleCA9IC8oPzp3d3dcXC4pLywgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0aW5nIHdpdGggJ3d3dy4nXG5cdFx0ICAgIGRvbWFpbk5hbWVSZWdleCA9IC9bQS1aYS16MC05XFwuXFwtXSpbQS1aYS16MC05XFwtXS8sICAvLyBhbnl0aGluZyBsb29raW5nIGF0IGFsbCBsaWtlIGEgZG9tYWluLCBub24tdW5pY29kZSBkb21haW5zLCBub3QgZW5kaW5nIGluIGEgcGVyaW9kXG5cdFx0ICAgIHRsZFJlZ2V4ID0gL1xcLig/OmludGVybmF0aW9uYWx8Y29uc3RydWN0aW9ufGNvbnRyYWN0b3JzfGVudGVycHJpc2VzfHBob3RvZ3JhcGh5fHByb2R1Y3Rpb25zfGZvdW5kYXRpb258aW1tb2JpbGllbnxpbmR1c3RyaWVzfG1hbmFnZW1lbnR8cHJvcGVydGllc3x0ZWNobm9sb2d5fGNocmlzdG1hc3xjb21tdW5pdHl8ZGlyZWN0b3J5fGVkdWNhdGlvbnxlcXVpcG1lbnR8aW5zdGl0dXRlfG1hcmtldGluZ3xzb2x1dGlvbnN8dmFjYXRpb25zfGJhcmdhaW5zfGJvdXRpcXVlfGJ1aWxkZXJzfGNhdGVyaW5nfGNsZWFuaW5nfGNsb3RoaW5nfGNvbXB1dGVyfGRlbW9jcmF0fGRpYW1vbmRzfGdyYXBoaWNzfGhvbGRpbmdzfGxpZ2h0aW5nfHBhcnRuZXJzfHBsdW1iaW5nfHN1cHBsaWVzfHRyYWluaW5nfHZlbnR1cmVzfGFjYWRlbXl8Y2FyZWVyc3xjb21wYW55fGNydWlzZXN8ZG9tYWluc3xleHBvc2VkfGZsaWdodHN8ZmxvcmlzdHxnYWxsZXJ5fGd1aXRhcnN8aG9saWRheXxraXRjaGVufG5ldXN0YXJ8b2tpbmF3YXxyZWNpcGVzfHJlbnRhbHN8cmV2aWV3c3xzaGlrc2hhfHNpbmdsZXN8c3VwcG9ydHxzeXN0ZW1zfGFnZW5jeXxiZXJsaW58Y2FtZXJhfGNlbnRlcnxjb2ZmZWV8Y29uZG9zfGRhdGluZ3xlc3RhdGV8ZXZlbnRzfGV4cGVydHxmdXRib2x8a2F1ZmVufGx1eHVyeXxtYWlzb258bW9uYXNofG11c2V1bXxuYWdveWF8cGhvdG9zfHJlcGFpcnxyZXBvcnR8c29jaWFsfHN1cHBseXx0YXR0b298dGllbmRhfHRyYXZlbHx2aWFqZXN8dmlsbGFzfHZpc2lvbnx2b3Rpbmd8dm95YWdlfGFjdG9yfGJ1aWxkfGNhcmRzfGNoZWFwfGNvZGVzfGRhbmNlfGVtYWlsfGdsYXNzfGhvdXNlfG1hbmdvfG5pbmphfHBhcnRzfHBob3RvfHNob2VzfHNvbGFyfHRvZGF5fHRva3lvfHRvb2xzfHdhdGNofHdvcmtzfGFlcm98YXJwYXxhc2lhfGJlc3R8YmlrZXxibHVlfGJ1enp8Y2FtcHxjbHVifGNvb2x8Y29vcHxmYXJtfGZpc2h8Z2lmdHxndXJ1fGluZm98am9ic3xraXdpfGtyZWR8bGFuZHxsaW1vfGxpbmt8bWVudXxtb2JpfG1vZGF8bmFtZXxwaWNzfHBpbmt8cG9zdHxxcG9ufHJpY2h8cnVocnxzZXh5fHRpcHN8dm90ZXx2b3RvfHdhbmd8d2llbnx3aWtpfHpvbmV8YmFyfGJpZHxiaXp8Y2FifGNhdHxjZW98Y29tfGVkdXxnb3Z8aW50fGtpbXxtaWx8bmV0fG9ubHxvcmd8cHJvfHB1YnxyZWR8dGVsfHVub3x3ZWR8eHh4fHh5enxhY3xhZHxhZXxhZnxhZ3xhaXxhbHxhbXxhbnxhb3xhcXxhcnxhc3xhdHxhdXxhd3xheHxhenxiYXxiYnxiZHxiZXxiZnxiZ3xiaHxiaXxianxibXxibnxib3xicnxic3xidHxidnxid3xieXxienxjYXxjY3xjZHxjZnxjZ3xjaHxjaXxja3xjbHxjbXxjbnxjb3xjcnxjdXxjdnxjd3xjeHxjeXxjenxkZXxkanxka3xkbXxkb3xkenxlY3xlZXxlZ3xlcnxlc3xldHxldXxmaXxmanxma3xmbXxmb3xmcnxnYXxnYnxnZHxnZXxnZnxnZ3xnaHxnaXxnbHxnbXxnbnxncHxncXxncnxnc3xndHxndXxnd3xneXxoa3xobXxobnxocnxodHxodXxpZHxpZXxpbHxpbXxpbnxpb3xpcXxpcnxpc3xpdHxqZXxqbXxqb3xqcHxrZXxrZ3xraHxraXxrbXxrbnxrcHxrcnxrd3xreXxrenxsYXxsYnxsY3xsaXxsa3xscnxsc3xsdHxsdXxsdnxseXxtYXxtY3xtZHxtZXxtZ3xtaHxta3xtbHxtbXxtbnxtb3xtcHxtcXxtcnxtc3xtdHxtdXxtdnxtd3xteHxteXxtenxuYXxuY3xuZXxuZnxuZ3xuaXxubHxub3xucHxucnxudXxuenxvbXxwYXxwZXxwZnxwZ3xwaHxwa3xwbHxwbXxwbnxwcnxwc3xwdHxwd3xweXxxYXxyZXxyb3xyc3xydXxyd3xzYXxzYnxzY3xzZHxzZXxzZ3xzaHxzaXxzanxza3xzbHxzbXxzbnxzb3xzcnxzdHxzdXxzdnxzeHxzeXxzenx0Y3x0ZHx0Znx0Z3x0aHx0anx0a3x0bHx0bXx0bnx0b3x0cHx0cnx0dHx0dnx0d3x0enx1YXx1Z3x1a3x1c3x1eXx1enx2YXx2Y3x2ZXx2Z3x2aXx2bnx2dXx3Znx3c3x5ZXx5dHx6YXx6bXx6dylcXGIvLCAgIC8vIG1hdGNoIG91ciBrbm93biB0b3AgbGV2ZWwgZG9tYWlucyAoVExEcylcblx0XHQgICAgXG5cdFx0ICAgIC8vIEFsbG93IG9wdGlvbmFsIHBhdGgsIHF1ZXJ5IHN0cmluZywgYW5kIGhhc2ggYW5jaG9yLCBub3QgZW5kaW5nIGluIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyczogXCI/ITosLjtcIlxuXHRcdCAgICAvLyBodHRwOi8vYmxvZy5jb2Rpbmdob3Jyb3IuY29tL3RoZS1wcm9ibGVtLXdpdGgtdXJscy9cblx0XHQgICAgdXJsU3VmZml4UmVnZXggPSAvW1xcLUEtWmEtejAtOSsmQCNcXC8lPX5fKCl8JyQqXFxbXFxdPyE6LC47XSpbXFwtQS1aYS16MC05KyZAI1xcLyU9fl8oKXwnJCpcXFtcXF1dLztcblx0XHRcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cCggW1xuXHRcdFx0JygnLCAgLy8gKioqIENhcHR1cmluZyBncm91cCAkMSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY2hlY2sgZm9yIGEgdHdpdHRlciBoYW5kbGUgbWF0Y2guIFVzZSBncm91cCAkMyBmb3IgdGhlIGFjdHVhbCB0d2l0dGVyIGhhbmRsZSB0aG91Z2guICQyIG1heSBiZSB1c2VkIHRvIHJlY29uc3RydWN0IHRoZSBvcmlnaW5hbCBzdHJpbmcgaW4gYSByZXBsYWNlKCkgXG5cdFx0XHRcdC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDIsIHdoaWNoIG1hdGNoZXMgdGhlIHdoaXRlc3BhY2UgY2hhcmFjdGVyIGJlZm9yZSB0aGUgJ0AnIHNpZ24gKG5lZWRlZCBiZWNhdXNlIG9mIG5vIGxvb2tiZWhpbmRzKSwgYW5kIFxuXHRcdFx0XHQvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQzLCB3aGljaCBtYXRjaGVzIHRoZSBhY3R1YWwgdHdpdHRlciBoYW5kbGVcblx0XHRcdFx0dHdpdHRlclJlZ2V4LnNvdXJjZSxcblx0XHRcdCcpJyxcblx0XHRcdFxuXHRcdFx0J3wnLFxuXHRcdFx0XG5cdFx0XHQnKCcsICAvLyAqKiogQ2FwdHVyaW5nIGdyb3VwICQ0LCB3aGljaCBpcyB1c2VkIHRvIGRldGVybWluZSBhbiBlbWFpbCBtYXRjaFxuXHRcdFx0XHRlbWFpbFJlZ2V4LnNvdXJjZSxcblx0XHRcdFx0ZG9tYWluTmFtZVJlZ2V4LnNvdXJjZSxcblx0XHRcdFx0dGxkUmVnZXguc291cmNlLFxuXHRcdFx0JyknLFxuXHRcdFx0XG5cdFx0XHQnfCcsXG5cdFx0XHRcblx0XHRcdCcoJywgIC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDUsIHdoaWNoIGlzIHVzZWQgdG8gbWF0Y2ggYSBVUkxcblx0XHRcdFx0Jyg/OicsIC8vIHBhcmVucyB0byBjb3ZlciBtYXRjaCBmb3IgcHJvdG9jb2wgKG9wdGlvbmFsKSwgYW5kIGRvbWFpblxuXHRcdFx0XHRcdCcoJywgIC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDYsIGZvciBhIHByb3RvY29sLXByZWZpeGVkIHVybCAoZXg6IGh0dHA6Ly9nb29nbGUuY29tKVxuXHRcdFx0XHRcdFx0cHJvdG9jb2xSZWdleC5zb3VyY2UsXG5cdFx0XHRcdFx0XHRkb21haW5OYW1lUmVnZXguc291cmNlLFxuXHRcdFx0XHRcdCcpJyxcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQnfCcsXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Jyg/OicsICAvLyBub24tY2FwdHVyaW5nIHBhcmVuIGZvciBhICd3d3cuJyBwcmVmaXhlZCB1cmwgKGV4OiB3d3cuZ29vZ2xlLmNvbSlcblx0XHRcdFx0XHRcdCcoLj8vLyk/JywgIC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDcgZm9yIGFuIG9wdGlvbmFsIHByb3RvY29sLXJlbGF0aXZlIFVSTC4gTXVzdCBiZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcgb3Igc3RhcnQgd2l0aCBhIG5vbi13b3JkIGNoYXJhY3RlclxuXHRcdFx0XHRcdFx0d3d3UmVnZXguc291cmNlLFxuXHRcdFx0XHRcdFx0ZG9tYWluTmFtZVJlZ2V4LnNvdXJjZSxcblx0XHRcdFx0XHQnKScsXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0J3wnLFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdCcoPzonLCAgLy8gbm9uLWNhcHR1cmluZyBwYXJlbiBmb3Iga25vd24gYSBUTEQgdXJsIChleDogZ29vZ2xlLmNvbSlcblx0XHRcdFx0XHRcdCcoLj8vLyk/JywgIC8vICoqKiBDYXB0dXJpbmcgZ3JvdXAgJDggZm9yIGFuIG9wdGlvbmFsIHByb3RvY29sLXJlbGF0aXZlIFVSTC4gTXVzdCBiZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBzdHJpbmcgb3Igc3RhcnQgd2l0aCBhIG5vbi13b3JkIGNoYXJhY3RlclxuXHRcdFx0XHRcdFx0ZG9tYWluTmFtZVJlZ2V4LnNvdXJjZSxcblx0XHRcdFx0XHRcdHRsZFJlZ2V4LnNvdXJjZSxcblx0XHRcdFx0XHQnKScsXG5cdFx0XHRcdCcpJyxcblx0XHRcdFx0XG5cdFx0XHRcdCcoPzonICsgdXJsU3VmZml4UmVnZXguc291cmNlICsgJyk/JywgIC8vIG1hdGNoIGZvciBwYXRoLCBxdWVyeSBzdHJpbmcsIGFuZC9vciBoYXNoIGFuY2hvciAtIG9wdGlvbmFsXG5cdFx0XHQnKSdcblx0XHRdLmpvaW4oIFwiXCIgKSwgJ2dpJyApO1xuXHR9ICkoKSxcblx0XG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gY2hhckJlZm9yZVByb3RvY29sUmVsTWF0Y2hSZWdleFxuXHQgKiBcblx0ICogVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIHJldHJpZXZlIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcHJvdG9jb2wtcmVsYXRpdmUgVVJMIG1hdGNoLlxuXHQgKiBcblx0ICogVGhpcyBpcyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlIHtAbGluayAjbWF0Y2hlclJlZ2V4fSwgd2hpY2ggbmVlZHMgdG8gZ3JhYiB0aGUgY2hhcmFjdGVyIGJlZm9yZSBhIHByb3RvY29sLXJlbGF0aXZlXG5cdCAqICcvLycgZHVlIHRvIHRoZSBsYWNrIG9mIGEgbmVnYXRpdmUgbG9vay1iZWhpbmQgaW4gSmF2YVNjcmlwdCByZWd1bGFyIGV4cHJlc3Npb25zLiBUaGUgY2hhcmFjdGVyIGJlZm9yZSB0aGUgbWF0Y2ggaXMgc3RyaXBwZWRcblx0ICogZnJvbSB0aGUgVVJMLlxuXHQgKi9cblx0Y2hhckJlZm9yZVByb3RvY29sUmVsTWF0Y2hSZWdleCA6IC9eKC4pP1xcL1xcLy8sXG5cdFxuXHQvKipcblx0ICogQHByaXZhdGVcblx0ICogQHByb3BlcnR5IHtBdXRvbGlua2VyLk1hdGNoVmFsaWRhdG9yfSBtYXRjaFZhbGlkYXRvclxuXHQgKiBcblx0ICogVGhlIE1hdGNoVmFsaWRhdG9yIG9iamVjdCwgdXNlZCB0byBmaWx0ZXIgb3V0IGFueSBmYWxzZSBwb3NpdGl2ZXMgZnJvbSB0aGUge0BsaW5rICNtYXRjaGVyUmVnZXh9LiBTZWVcblx0ICoge0BsaW5rIEF1dG9saW5rZXIuTWF0Y2hWYWxpZGF0b3J9IGZvciBkZXRhaWxzLlxuXHQgKi9cblx0XG5cdFxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbY2ZnXSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgQW5jaG9yVGFnQnVpbGRlciBpbnN0YW5jZSwgc3BlY2lmaWVkIGluIGFuIE9iamVjdCAobWFwKS5cblx0ICovXG5cdGNvbnN0cnVjdG9yIDogZnVuY3Rpb24oIGNmZyApIHtcblx0XHRBdXRvbGlua2VyLlV0aWwuYXNzaWduKCB0aGlzLCBjZmcgKTtcblx0XG5cdFx0dGhpcy5tYXRjaFZhbGlkYXRvciA9IG5ldyBBdXRvbGlua2VyLk1hdGNoVmFsaWRhdG9yKCk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFBhcnNlcyB0aGUgaW5wdXQgYHRleHRgIHRvIHNlYXJjaCBmb3IgVVJMcy9lbWFpbHMvVHdpdHRlciBoYW5kbGVzLCBhbmQgY2FsbHMgdGhlIGByZXBsYWNlRm5gXG5cdCAqIHRvIGFsbG93IHJlcGxhY2VtZW50cyBvZiB0aGUgbWF0Y2hlcy4gUmV0dXJucyB0aGUgYHRleHRgIHdpdGggbWF0Y2hlcyByZXBsYWNlZC5cblx0ICogXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IFRoZSB0ZXh0IHRvIHNlYXJjaCBhbmQgcmVwYWNlIG1hdGNoZXMgaW4uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IHJlcGxhY2VGbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSByZXBsYWNlbWVudHMuIFRoZSBmdW5jdGlvbiB0YWtlcyBhXG5cdCAqICAgc2luZ2xlIGFyZ3VtZW50LCBhIHtAbGluayBBdXRvbGlua2VyLm1hdGNoLk1hdGNofSBvYmplY3QsIGFuZCBzaG91bGQgcmV0dXJuIHRoZSB0ZXh0IHRoYXQgc2hvdWxkXG5cdCAqICAgbWFrZSB0aGUgcmVwbGFjZW1lbnQuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dE9iaj13aW5kb3ddIFRoZSBjb250ZXh0IG9iamVjdCAoXCJzY29wZVwiKSB0byBydW4gdGhlIGByZXBsYWNlRm5gIGluLlxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRyZXBsYWNlIDogZnVuY3Rpb24oIHRleHQsIHJlcGxhY2VGbiwgY29udGV4dE9iaiApIHtcblx0XHR2YXIgbWUgPSB0aGlzOyAgLy8gZm9yIGNsb3N1cmVcblx0XHRcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKCB0aGlzLm1hdGNoZXJSZWdleCwgZnVuY3Rpb24oIG1hdGNoU3RyLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDggKSB7XG5cdFx0XHR2YXIgbWF0Y2hEZXNjT2JqID0gbWUucHJvY2Vzc0NhbmRpZGF0ZU1hdGNoKCBtYXRjaFN0ciwgJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4ICk7ICAvLyBcIm1hdGNoIGRlc2NyaXB0aW9uXCIgb2JqZWN0XG5cdFx0XHRcblx0XHRcdC8vIFJldHVybiBvdXQgd2l0aCBubyBjaGFuZ2VzIGZvciBtYXRjaCB0eXBlcyB0aGF0IGFyZSBkaXNhYmxlZCAodXJsLCBlbWFpbCwgdHdpdHRlciksIG9yIGZvciBtYXRjaGVzIHRoYXQgYXJlIFxuXHRcdFx0Ly8gaW52YWxpZCAoZmFsc2UgcG9zaXRpdmVzIGZyb20gdGhlIG1hdGNoZXJSZWdleCwgd2hpY2ggY2FuJ3QgdXNlIGxvb2stYmVoaW5kcyBzaW5jZSB0aGV5IGFyZSB1bmF2YWlsYWJsZSBpbiBKUykuXG5cdFx0XHRpZiggIW1hdGNoRGVzY09iaiApIHtcblx0XHRcdFx0cmV0dXJuIG1hdGNoU3RyO1xuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEdlbmVyYXRlIHJlcGxhY2VtZW50IHRleHQgZm9yIHRoZSBtYXRjaCBmcm9tIHRoZSBgcmVwbGFjZUZuYFxuXHRcdFx0XHR2YXIgcmVwbGFjZVN0ciA9IHJlcGxhY2VGbi5jYWxsKCBjb250ZXh0T2JqLCBtYXRjaERlc2NPYmoubWF0Y2ggKTtcblx0XHRcdFx0cmV0dXJuIG1hdGNoRGVzY09iai5wcmVmaXhTdHIgKyByZXBsYWNlU3RyICsgbWF0Y2hEZXNjT2JqLnN1ZmZpeFN0cjtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFByb2Nlc3NlcyBhIGNhbmRpZGF0ZSBtYXRjaCBmcm9tIHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0uIFxuXHQgKiBcblx0ICogTm90IGFsbCBtYXRjaGVzIGZvdW5kIGJ5IHRoZSByZWdleCBhcmUgYWN0dWFsIFVSTC9lbWFpbC9Ud2l0dGVyIG1hdGNoZXMsIGFzIGRldGVybWluZWQgYnkgdGhlIHtAbGluayAjbWF0Y2hWYWxpZGF0b3J9LiBJblxuXHQgKiB0aGlzIGNhc2UsIHRoZSBtZXRob2QgcmV0dXJucyBgbnVsbGAuIE90aGVyd2lzZSwgYSB2YWxpZCBPYmplY3Qgd2l0aCBgcHJlZml4U3RyYCwgYG1hdGNoYCwgYW5kIGBzdWZmaXhTdHJgIGlzIHJldHVybmVkLlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1hdGNoU3RyIFRoZSBmdWxsIG1hdGNoIHRoYXQgd2FzIGZvdW5kIGJ5IHRoZSB7QGxpbmsgI21hdGNoZXJSZWdleH0uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0d2l0dGVyTWF0Y2ggVGhlIG1hdGNoZWQgdGV4dCBvZiBhIFR3aXR0ZXIgaGFuZGxlLCBpZiB0aGUgbWF0Y2ggaXMgYSBUd2l0dGVyIG1hdGNoLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHdpdHRlckhhbmRsZVByZWZpeFdoaXRlc3BhY2VDaGFyIFRoZSB3aGl0ZXNwYWNlIGNoYXIgYmVmb3JlIHRoZSBAIHNpZ24gaW4gYSBUd2l0dGVyIGhhbmRsZSBtYXRjaC4gVGhpcyBcblx0ICogICBpcyBuZWVkZWQgYmVjYXVzZSBvZiBubyBsb29rYmVoaW5kcyBpbiBKUyByZWdleGVzLCBhbmQgaXMgbmVlZCB0byByZS1pbmNsdWRlIHRoZSBjaGFyYWN0ZXIgZm9yIHRoZSBhbmNob3IgdGFnIHJlcGxhY2VtZW50LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHdpdHRlckhhbmRsZSBUaGUgYWN0dWFsIFR3aXR0ZXIgdXNlciAoaS5lIHRoZSB3b3JkIGFmdGVyIHRoZSBAIHNpZ24gaW4gYSBUd2l0dGVyIG1hdGNoKS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGVtYWlsQWRkcmVzc01hdGNoIFRoZSBtYXRjaGVkIGVtYWlsIGFkZHJlc3MgZm9yIGFuIGVtYWlsIGFkZHJlc3MgbWF0Y2guXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmxNYXRjaCBUaGUgbWF0Y2hlZCBVUkwgc3RyaW5nIGZvciBhIFVSTCBtYXRjaC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0byBtYXRjaFxuXHQgKiAgIHNvbWV0aGluZyBsaWtlICdodHRwOi8vbG9jYWxob3N0Jywgd2hlcmUgd2Ugd29uJ3QgZG91YmxlIGNoZWNrIHRoYXQgdGhlIGRvbWFpbiBuYW1lIGhhcyBhdCBsZWFzdCBvbmUgJy4nIGluIGl0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gd3d3UHJvdG9jb2xSZWxhdGl2ZU1hdGNoIFRoZSAnLy8nIGZvciBhIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoIGZyb20gYSAnd3d3JyB1cmwsIHdpdGggdGhlIGNoYXJhY3RlciB0aGF0IFxuXHQgKiAgIGNvbWVzIGJlZm9yZSB0aGUgJy8vJy5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHRsZFByb3RvY29sUmVsYXRpdmVNYXRjaCBUaGUgJy8vJyBmb3IgYSBwcm90b2NvbC1yZWxhdGl2ZSBtYXRjaCBmcm9tIGEgVExEICh0b3AgbGV2ZWwgZG9tYWluKSBtYXRjaCwgd2l0aCBcblx0ICogICB0aGUgY2hhcmFjdGVyIHRoYXQgY29tZXMgYmVmb3JlIHRoZSAnLy8nLlxuXHQgKiAgIFxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IEEgXCJtYXRjaCBkZXNjcmlwdGlvbiBvYmplY3RcIi4gVGhpcyB3aWxsIGJlIGBudWxsYCBpZiB0aGUgbWF0Y2ggd2FzIGludmFsaWQsIG9yIGlmIGEgbWF0Y2ggdHlwZSBpcyBkaXNhYmxlZC5cblx0ICogICBPdGhlcndpc2UsIHRoaXMgd2lsbCBiZSBhbiBPYmplY3QgKG1hcCkgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG5cdCAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuLnByZWZpeFN0ciBUaGUgY2hhcihzKSB0aGF0IHNob3VsZCBiZSBwcmVwZW5kZWQgdG8gdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gVGhlc2UgYXJlIGNoYXIocykgdGhhdFxuXHQgKiAgIHdlcmUgbmVlZGVkIHRvIGJlIGluY2x1ZGVkIGZyb20gdGhlIHJlZ2V4IG1hdGNoIHRoYXQgd2VyZSBpZ25vcmVkIGJ5IHByb2Nlc3NpbmcgY29kZSwgYW5kIHNob3VsZCBiZSByZS1pbnNlcnRlZCBpbnRvIFxuXHQgKiAgIHRoZSByZXBsYWNlbWVudCBzdHJlYW0uXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJuLnN1ZmZpeFN0ciBUaGUgY2hhcihzKSB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nLiBUaGVzZSBhcmUgY2hhcihzKSB0aGF0XG5cdCAqICAgd2VyZSBuZWVkZWQgdG8gYmUgaW5jbHVkZWQgZnJvbSB0aGUgcmVnZXggbWF0Y2ggdGhhdCB3ZXJlIGlnbm9yZWQgYnkgcHJvY2Vzc2luZyBjb2RlLCBhbmQgc2hvdWxkIGJlIHJlLWluc2VydGVkIGludG8gXG5cdCAqICAgdGhlIHJlcGxhY2VtZW50IHN0cmVhbS5cblx0ICogQHJldHVybiB7QXV0b2xpbmtlci5tYXRjaC5NYXRjaH0gcmV0dXJuLm1hdGNoIFRoZSBNYXRjaCBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBtYXRjaCB0aGF0IHdhcyBmb3VuZC5cblx0ICovXG5cdHByb2Nlc3NDYW5kaWRhdGVNYXRjaCA6IGZ1bmN0aW9uKCBcblx0XHRtYXRjaFN0ciwgdHdpdHRlck1hdGNoLCB0d2l0dGVySGFuZGxlUHJlZml4V2hpdGVzcGFjZUNoYXIsIHR3aXR0ZXJIYW5kbGUsIFxuXHRcdGVtYWlsQWRkcmVzc01hdGNoLCB1cmxNYXRjaCwgcHJvdG9jb2xVcmxNYXRjaCwgd3d3UHJvdG9jb2xSZWxhdGl2ZU1hdGNoLCB0bGRQcm90b2NvbFJlbGF0aXZlTWF0Y2hcblx0KSB7XG5cdFx0Ly8gTm90ZTogVGhlIGBtYXRjaFN0cmAgdmFyaWFibGUgd2lsIGJlIGZpeGVkIHVwIHRvIHJlbW92ZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vIGxvbmdlciBuZWVkZWQgKHdoaWNoIHdpbGwgXG5cdFx0Ly8gYmUgYWRkZWQgdG8gYHByZWZpeFN0cmAgYW5kIGBzdWZmaXhTdHJgKS5cblx0XHRcblx0XHR2YXIgcHJvdG9jb2xSZWxhdGl2ZU1hdGNoID0gd3d3UHJvdG9jb2xSZWxhdGl2ZU1hdGNoIHx8IHRsZFByb3RvY29sUmVsYXRpdmVNYXRjaCxcblx0XHQgICAgbWF0Y2gsICAvLyBXaWxsIGJlIGFuIEF1dG9saW5rZXIubWF0Y2guTWF0Y2ggb2JqZWN0XG5cdFx0ICAgIFxuXHRcdCAgICBwcmVmaXhTdHIgPSBcIlwiLCAgICAgICAvLyBBIHN0cmluZyB0byB1c2UgdG8gcHJlZml4IHRoZSBhbmNob3IgdGFnIHRoYXQgaXMgY3JlYXRlZC4gVGhpcyBpcyBuZWVkZWQgZm9yIHRoZSBUd2l0dGVyIGhhbmRsZSBtYXRjaFxuXHRcdCAgICBzdWZmaXhTdHIgPSBcIlwiOyAgICAgICAvLyBBIHN0cmluZyB0byBzdWZmaXggdGhlIGFuY2hvciB0YWcgdGhhdCBpcyBjcmVhdGVkLiBUaGlzIGlzIHVzZWQgaWYgdGhlcmUgaXMgYSB0cmFpbGluZyBwYXJlbnRoZXNpcyB0aGF0IHNob3VsZCBub3QgYmUgYXV0by1saW5rZWQuXG5cdFx0ICAgIFxuXHRcdFxuXHRcdC8vIFJldHVybiBvdXQgd2l0aCBgbnVsbGAgZm9yIG1hdGNoIHR5cGVzIHRoYXQgYXJlIGRpc2FibGVkICh1cmwsIGVtYWlsLCB0d2l0dGVyKSwgb3IgZm9yIG1hdGNoZXMgdGhhdCBhcmUgXG5cdFx0Ly8gaW52YWxpZCAoZmFsc2UgcG9zaXRpdmVzIGZyb20gdGhlIG1hdGNoZXJSZWdleCwgd2hpY2ggY2FuJ3QgdXNlIGxvb2stYmVoaW5kcyBzaW5jZSB0aGV5IGFyZSB1bmF2YWlsYWJsZSBpbiBKUykuXG5cdFx0aWYoXG5cdFx0XHQoIHR3aXR0ZXJNYXRjaCAmJiAhdGhpcy50d2l0dGVyICkgfHwgKCBlbWFpbEFkZHJlc3NNYXRjaCAmJiAhdGhpcy5lbWFpbCApIHx8ICggdXJsTWF0Y2ggJiYgIXRoaXMudXJscyApIHx8XG5cdFx0XHQhdGhpcy5tYXRjaFZhbGlkYXRvci5pc1ZhbGlkTWF0Y2goIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoLCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSBcblx0XHQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRcblx0XHQvLyBIYW5kbGUgYSBjbG9zaW5nIHBhcmVudGhlc2lzIGF0IHRoZSBlbmQgb2YgdGhlIG1hdGNoLCBhbmQgZXhjbHVkZSBpdCBpZiB0aGVyZSBpcyBub3QgYSBtYXRjaGluZyBvcGVuIHBhcmVudGhlc2lzXG5cdFx0Ly8gaW4gdGhlIG1hdGNoIGl0c2VsZi4gXG5cdFx0aWYoIHRoaXMubWF0Y2hIYXNVbmJhbGFuY2VkQ2xvc2luZ1BhcmVuKCBtYXRjaFN0ciApICkge1xuXHRcdFx0bWF0Y2hTdHIgPSBtYXRjaFN0ci5zdWJzdHIoIDAsIG1hdGNoU3RyLmxlbmd0aCAtIDEgKTsgIC8vIHJlbW92ZSB0aGUgdHJhaWxpbmcgXCIpXCJcblx0XHRcdHN1ZmZpeFN0ciA9IFwiKVwiOyAgLy8gdGhpcyB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBnZW5lcmF0ZWQgPGE+IHRhZ1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHRpZiggZW1haWxBZGRyZXNzTWF0Y2ggKSB7XG5cdFx0XHRtYXRjaCA9IG5ldyBBdXRvbGlua2VyLm1hdGNoLkVtYWlsKCB7IG1hdGNoZWRUZXh0OiBtYXRjaFN0ciwgZW1haWw6IGVtYWlsQWRkcmVzc01hdGNoIH0gKTtcblx0XHRcdFxuXHRcdH0gZWxzZSBpZiggdHdpdHRlck1hdGNoICkge1xuXHRcdFx0Ly8gZml4IHVwIHRoZSBgbWF0Y2hTdHJgIGlmIHRoZXJlIHdhcyBhIHByZWNlZGluZyB3aGl0ZXNwYWNlIGNoYXIsIHdoaWNoIHdhcyBuZWVkZWQgdG8gZGV0ZXJtaW5lIHRoZSBtYXRjaCBcblx0XHRcdC8vIGl0c2VsZiAoc2luY2UgdGhlcmUgYXJlIG5vIGxvb2stYmVoaW5kcyBpbiBKUyByZWdleGVzKVxuXHRcdFx0aWYoIHR3aXR0ZXJIYW5kbGVQcmVmaXhXaGl0ZXNwYWNlQ2hhciApIHtcblx0XHRcdFx0cHJlZml4U3RyID0gdHdpdHRlckhhbmRsZVByZWZpeFdoaXRlc3BhY2VDaGFyO1xuXHRcdFx0XHRtYXRjaFN0ciA9IG1hdGNoU3RyLnNsaWNlKCAxICk7ICAvLyByZW1vdmUgdGhlIHByZWZpeGVkIHdoaXRlc3BhY2UgY2hhciBmcm9tIHRoZSBtYXRjaFxuXHRcdFx0fVxuXHRcdFx0bWF0Y2ggPSBuZXcgQXV0b2xpbmtlci5tYXRjaC5Ud2l0dGVyKCB7IG1hdGNoZWRUZXh0OiBtYXRjaFN0ciwgdHdpdHRlckhhbmRsZTogdHdpdHRlckhhbmRsZSB9ICk7XG5cdFx0XHRcblx0XHR9IGVsc2UgeyAgLy8gdXJsIG1hdGNoXG5cdFx0XHQvLyBJZiBpdCdzIGEgcHJvdG9jb2wtcmVsYXRpdmUgJy8vJyBtYXRjaCwgcmVtb3ZlIHRoZSBjaGFyYWN0ZXIgYmVmb3JlIHRoZSAnLy8nICh3aGljaCB0aGUgbWF0Y2hlclJlZ2V4IG5lZWRlZFxuXHRcdFx0Ly8gdG8gbWF0Y2ggZHVlIHRvIHRoZSBsYWNrIG9mIGEgbmVnYXRpdmUgbG9vay1iZWhpbmQgaW4gSmF2YVNjcmlwdCByZWd1bGFyIGV4cHJlc3Npb25zKVxuXHRcdFx0aWYoIHByb3RvY29sUmVsYXRpdmVNYXRjaCApIHtcblx0XHRcdFx0dmFyIGNoYXJCZWZvcmVNYXRjaCA9IHByb3RvY29sUmVsYXRpdmVNYXRjaC5tYXRjaCggdGhpcy5jaGFyQmVmb3JlUHJvdG9jb2xSZWxNYXRjaFJlZ2V4IClbIDEgXSB8fCBcIlwiO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoIGNoYXJCZWZvcmVNYXRjaCApIHsgIC8vIGZpeCB1cCB0aGUgYG1hdGNoU3RyYCBpZiB0aGVyZSB3YXMgYSBwcmVjZWRpbmcgY2hhciBiZWZvcmUgYSBwcm90b2NvbC1yZWxhdGl2ZSBtYXRjaCwgd2hpY2ggd2FzIG5lZWRlZCB0byBkZXRlcm1pbmUgdGhlIG1hdGNoIGl0c2VsZiAoc2luY2UgdGhlcmUgYXJlIG5vIGxvb2stYmVoaW5kcyBpbiBKUyByZWdleGVzKVxuXHRcdFx0XHRcdHByZWZpeFN0ciA9IGNoYXJCZWZvcmVNYXRjaDtcblx0XHRcdFx0XHRtYXRjaFN0ciA9IG1hdGNoU3RyLnNsaWNlKCAxICk7ICAvLyByZW1vdmUgdGhlIHByZWZpeGVkIGNoYXIgZnJvbSB0aGUgbWF0Y2hcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRtYXRjaCA9IG5ldyBBdXRvbGlua2VyLm1hdGNoLlVybCgge1xuXHRcdFx0XHRtYXRjaGVkVGV4dCA6IG1hdGNoU3RyLFxuXHRcdFx0XHR1cmwgOiBtYXRjaFN0cixcblx0XHRcdFx0cHJvdG9jb2xVcmxNYXRjaCA6ICEhcHJvdG9jb2xVcmxNYXRjaCxcblx0XHRcdFx0cHJvdG9jb2xSZWxhdGl2ZU1hdGNoIDogISFwcm90b2NvbFJlbGF0aXZlTWF0Y2gsXG5cdFx0XHRcdHN0cmlwUHJlZml4IDogdGhpcy5zdHJpcFByZWZpeFxuXHRcdFx0fSApO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJlZml4U3RyIDogcHJlZml4U3RyLFxuXHRcdFx0c3VmZml4U3RyIDogc3VmZml4U3RyLFxuXHRcdFx0bWF0Y2ggICAgIDogbWF0Y2hcblx0XHR9O1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIGEgbWF0Y2ggZm91bmQgaGFzIGFuIHVubWF0Y2hlZCBjbG9zaW5nIHBhcmVudGhlc2lzLiBJZiBzbywgdGhpcyBwYXJlbnRoZXNpcyB3aWxsIGJlIHJlbW92ZWRcblx0ICogZnJvbSB0aGUgbWF0Y2ggaXRzZWxmLCBhbmQgYXBwZW5kZWQgYWZ0ZXIgdGhlIGdlbmVyYXRlZCBhbmNob3IgdGFnIGluIHtAbGluayAjcHJvY2Vzc1RleHROb2RlfS5cblx0ICogXG5cdCAqIEEgbWF0Y2ggbWF5IGhhdmUgYW4gZXh0cmEgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCB0aGUgZW5kIG9mIHRoZSBtYXRjaCBiZWNhdXNlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gbXVzdCBpbmNsdWRlIHBhcmVudGhlc2lzXG5cdCAqIGZvciBVUkxzIHN1Y2ggYXMgXCJ3aWtpcGVkaWEuY29tL3NvbWV0aGluZ18oZGlzYW1iaWd1YXRpb24pXCIsIHdoaWNoIHNob3VsZCBiZSBhdXRvLWxpbmtlZC4gXG5cdCAqIFxuXHQgKiBIb3dldmVyLCBhbiBleHRyYSBwYXJlbnRoZXNpcyAqd2lsbCogYmUgaW5jbHVkZWQgd2hlbiB0aGUgVVJMIGl0c2VsZiBpcyB3cmFwcGVkIGluIHBhcmVudGhlc2lzLCBzdWNoIGFzIGluIHRoZSBjYXNlIG9mXG5cdCAqIFwiKHdpa2lwZWRpYS5jb20vc29tZXRoaW5nXyhkaXNhbWJpZ3VhdGlvbikpXCIuIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgY2xvc2luZyBwYXJlbnRoZXNpcyBzaG91bGQgKm5vdCogYmUgcGFydCBvZiB0aGUgVVJMIFxuXHQgKiBpdHNlbGYsIGFuZCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBgdHJ1ZWAuXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hTdHIgVGhlIGZ1bGwgbWF0Y2ggc3RyaW5nIGZyb20gdGhlIHtAbGluayAjbWF0Y2hlclJlZ2V4fS5cblx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZXJlIGlzIGFuIHVuYmFsYW5jZWQgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCB0aGUgZW5kIG9mIHRoZSBgbWF0Y2hTdHJgLCBgZmFsc2VgIG90aGVyd2lzZS5cblx0ICovXG5cdG1hdGNoSGFzVW5iYWxhbmNlZENsb3NpbmdQYXJlbiA6IGZ1bmN0aW9uKCBtYXRjaFN0ciApIHtcblx0XHR2YXIgbGFzdENoYXIgPSBtYXRjaFN0ci5jaGFyQXQoIG1hdGNoU3RyLmxlbmd0aCAtIDEgKTtcblx0XHRcblx0XHRpZiggbGFzdENoYXIgPT09ICcpJyApIHtcblx0XHRcdHZhciBvcGVuUGFyZW5zTWF0Y2ggPSBtYXRjaFN0ci5tYXRjaCggL1xcKC9nICksXG5cdFx0XHQgICAgY2xvc2VQYXJlbnNNYXRjaCA9IG1hdGNoU3RyLm1hdGNoKCAvXFwpL2cgKSxcblx0XHRcdCAgICBudW1PcGVuUGFyZW5zID0gKCBvcGVuUGFyZW5zTWF0Y2ggJiYgb3BlblBhcmVuc01hdGNoLmxlbmd0aCApIHx8IDAsXG5cdFx0XHQgICAgbnVtQ2xvc2VQYXJlbnMgPSAoIGNsb3NlUGFyZW5zTWF0Y2ggJiYgY2xvc2VQYXJlbnNNYXRjaC5sZW5ndGggKSB8fCAwO1xuXHRcdFx0XG5cdFx0XHRpZiggbnVtT3BlblBhcmVucyA8IG51bUNsb3NlUGFyZW5zICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxufSApO1xuLypnbG9iYWwgQXV0b2xpbmtlciAqL1xuLypqc2hpbnQgc2NyaXB0dXJsOnRydWUgKi9cbi8qKlxuICogQHByaXZhdGVcbiAqIEBjbGFzcyBBdXRvbGlua2VyLk1hdGNoVmFsaWRhdG9yXG4gKiBAZXh0ZW5kcyBPYmplY3RcbiAqIFxuICogVXNlZCBieSBBdXRvbGlua2VyIHRvIGZpbHRlciBvdXQgZmFsc2UgcG9zaXRpdmVzIGZyb20gdGhlIHtAbGluayBBdXRvbGlua2VyI21hdGNoZXJSZWdleH0uXG4gKiBcbiAqIER1ZSB0byB0aGUgbGltaXRhdGlvbnMgb2YgcmVndWxhciBleHByZXNzaW9ucyAoaW5jbHVkaW5nIHRoZSBtaXNzaW5nIGZlYXR1cmUgb2YgbG9vay1iZWhpbmRzIGluIEpTIHJlZ3VsYXIgZXhwcmVzc2lvbnMpLFxuICogd2UgY2Fubm90IGFsd2F5cyBkZXRlcm1pbmUgdGhlIHZhbGlkaXR5IG9mIGEgZ2l2ZW4gbWF0Y2guIFRoaXMgY2xhc3MgYXBwbGllcyBhIGJpdCBvZiBhZGRpdGlvbmFsIGxvZ2ljIHRvIGZpbHRlciBvdXQgYW55XG4gKiBmYWxzZSBwb3NpdGl2ZXMgdGhhdCBoYXZlIGJlZW4gbWF0Y2hlZCBieSB0aGUge0BsaW5rIEF1dG9saW5rZXIjbWF0Y2hlclJlZ2V4fS5cbiAqL1xuQXV0b2xpbmtlci5NYXRjaFZhbGlkYXRvciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIE9iamVjdCwge1xuXHRcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBpbnZhbGlkUHJvdG9jb2xSZWxNYXRjaFJlZ2V4XG5cdCAqIFxuXHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gY2hlY2sgYSBwb3RlbnRpYWwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMIG1hdGNoLCBjb21pbmcgZnJvbSB0aGUgXG5cdCAqIHtAbGluayBBdXRvbGlua2VyI21hdGNoZXJSZWdleH0uIEEgcHJvdG9jb2wtcmVsYXRpdmUgVVJMIGlzLCBmb3IgZXhhbXBsZSwgXCIvL3lhaG9vLmNvbVwiXG5cdCAqIFxuXHQgKiBUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjaGVja3MgdG8gc2VlIGlmIHRoZXJlIGlzIGEgd29yZCBjaGFyYWN0ZXIgYmVmb3JlIHRoZSAnLy8nIG1hdGNoIGluIG9yZGVyIHRvIGRldGVybWluZSBpZiBcblx0ICogd2Ugc2hvdWxkIGFjdHVhbGx5IGF1dG9saW5rIGEgcHJvdG9jb2wtcmVsYXRpdmUgVVJMLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZXJlIGlzIG5vIG5lZ2F0aXZlIGxvb2stYmVoaW5kIGluIFxuXHQgKiBKYXZhU2NyaXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnMuIFxuXHQgKiBcblx0ICogRm9yIGluc3RhbmNlLCB3ZSB3YW50IHRvIGF1dG9saW5rIHNvbWV0aGluZyBsaWtlIFwiR28gdG86IC8vZ29vZ2xlLmNvbVwiLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBhdXRvbGluayBzb21ldGhpbmcgXG5cdCAqIGxpa2UgXCJhYmMvL2dvb2dsZS5jb21cIlxuXHQgKi9cblx0aW52YWxpZFByb3RvY29sUmVsTWF0Y2hSZWdleCA6IC9eW1xcd11cXC9cXC8vLFxuXHRcblx0LyoqXG5cdCAqIFJlZ2V4IHRvIHRlc3QgZm9yIGEgZnVsbCBwcm90b2NvbCwgd2l0aCB0aGUgdHdvIHRyYWlsaW5nIHNsYXNoZXMuIEV4OiAnaHR0cDovLydcblx0ICogXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSBoYXNGdWxsUHJvdG9jb2xSZWdleFxuXHQgKi9cblx0aGFzRnVsbFByb3RvY29sUmVnZXggOiAvXltBLVphLXpdWy0uK0EtWmEtejAtOV0rOlxcL1xcLy8sXG5cdFxuXHQvKipcblx0ICogUmVnZXggdG8gZmluZCB0aGUgVVJJIHNjaGVtZSwgc3VjaCBhcyAnbWFpbHRvOicuXG5cdCAqIFxuXHQgKiBUaGlzIGlzIHVzZWQgdG8gZmlsdGVyIG91dCAnamF2YXNjcmlwdDonIGFuZCAndmJzY3JpcHQ6JyBzY2hlbWVzLlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHByb3BlcnR5IHtSZWdFeHB9IHVyaVNjaGVtZVJlZ2V4XG5cdCAqL1xuXHR1cmlTY2hlbWVSZWdleCA6IC9eW0EtWmEtel1bLS4rQS1aYS16MC05XSs6Lyxcblx0XG5cdC8qKlxuXHQgKiBSZWdleCB0byBkZXRlcm1pbmUgaWYgYXQgbGVhc3Qgb25lIHdvcmQgY2hhciBleGlzdHMgYWZ0ZXIgdGhlIHByb3RvY29sIChpLmUuIGFmdGVyIHRoZSAnOicpXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gaGFzV29yZENoYXJBZnRlclByb3RvY29sUmVnZXhcblx0ICovXG5cdGhhc1dvcmRDaGFyQWZ0ZXJQcm90b2NvbFJlZ2V4IDogLzpbXlxcc10qP1tBLVphLXpdLyxcblx0XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyBpZiBhIGdpdmVuIG1hdGNoIGZvdW5kIGJ5IHtAbGluayBBdXRvbGlua2VyI3Byb2Nlc3NUZXh0Tm9kZX0gaXMgdmFsaWQuIFdpbGwgcmV0dXJuIGBmYWxzZWAgZm9yOlxuXHQgKiBcblx0ICogMSkgVVJMIG1hdGNoZXMgd2hpY2ggZG8gbm90IGhhdmUgYXQgbGVhc3QgaGF2ZSBvbmUgcGVyaW9kICgnLicpIGluIHRoZSBkb21haW4gbmFtZSAoZWZmZWN0aXZlbHkgc2tpcHBpbmcgb3ZlciBcblx0ICogICAgbWF0Y2hlcyBsaWtlIFwiYWJjOmRlZlwiKS4gSG93ZXZlciwgVVJMIG1hdGNoZXMgd2l0aCBhIHByb3RvY29sIHdpbGwgYmUgYWxsb3dlZCAoZXg6ICdodHRwOi8vbG9jYWxob3N0Jylcblx0ICogMikgVVJMIG1hdGNoZXMgd2hpY2ggZG8gbm90IGhhdmUgYXQgbGVhc3Qgb25lIHdvcmQgY2hhcmFjdGVyIGluIHRoZSBkb21haW4gbmFtZSAoZWZmZWN0aXZlbHkgc2tpcHBpbmcgb3ZlclxuXHQgKiAgICBtYXRjaGVzIGxpa2UgXCJnaXQ6MS4wXCIpLlxuXHQgKiAzKSBBIHByb3RvY29sLXJlbGF0aXZlIHVybCBtYXRjaCAoYSBVUkwgYmVnaW5uaW5nIHdpdGggJy8vJykgd2hvc2UgcHJldmlvdXMgY2hhcmFjdGVyIGlzIGEgd29yZCBjaGFyYWN0ZXIgXG5cdCAqICAgIChlZmZlY3RpdmVseSBza2lwcGluZyBvdmVyIHN0cmluZ3MgbGlrZSBcImFiYy8vZ29vZ2xlLmNvbVwiKVxuXHQgKiBcblx0ICogT3RoZXJ3aXNlLCByZXR1cm5zIGB0cnVlYC5cblx0ICogXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB1cmxNYXRjaCBUaGUgbWF0Y2hlZCBVUkwsIGlmIHRoZXJlIHdhcyBvbmUuIFdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nIGlmIHRoZSBtYXRjaCBpcyBub3QgYSBVUkwgbWF0Y2guXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFVybE1hdGNoIFRoZSBtYXRjaCBVUkwgc3RyaW5nIGZvciBhIHByb3RvY29sIG1hdGNoLiBFeDogJ2h0dHA6Ly95YWhvby5jb20nLiBUaGlzIGlzIHVzZWQgdG8gbWF0Y2hcblx0ICogICBzb21ldGhpbmcgbGlrZSAnaHR0cDovL2xvY2FsaG9zdCcsIHdoZXJlIHdlIHdvbid0IGRvdWJsZSBjaGVjayB0aGF0IHRoZSBkb21haW4gbmFtZSBoYXMgYXQgbGVhc3Qgb25lICcuJyBpbiBpdC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sUmVsYXRpdmVNYXRjaCBUaGUgcHJvdG9jb2wtcmVsYXRpdmUgc3RyaW5nIGZvciBhIFVSTCBtYXRjaCAoaS5lLiAnLy8nKSwgcG9zc2libHkgd2l0aCBhIHByZWNlZGluZ1xuXHQgKiAgIGNoYXJhY3RlciAoZXgsIGEgc3BhY2UsIHN1Y2ggYXM6ICcgLy8nLCBvciBhIGxldHRlciwgc3VjaCBhczogJ2EvLycpLiBUaGUgbWF0Y2ggaXMgaW52YWxpZCBpZiB0aGVyZSBpcyBhIHdvcmQgY2hhcmFjdGVyXG5cdCAqICAgcHJlY2VkaW5nIHRoZSAnLy8nLlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIG1hdGNoIGdpdmVuIGlzIHZhbGlkIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBvciBgZmFsc2VgIGlmIHRoZSBtYXRjaCBpcyBpbnZhbGlkIGFuZC9vciBcblx0ICogICBzaG91bGQganVzdCBub3QgYmUgcHJvY2Vzc2VkLlxuXHQgKi9cblx0aXNWYWxpZE1hdGNoIDogZnVuY3Rpb24oIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoLCBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSB7XG5cdFx0aWYoXG5cdFx0XHQoIHByb3RvY29sVXJsTWF0Y2ggJiYgIXRoaXMuaXNWYWxpZFVyaVNjaGVtZSggcHJvdG9jb2xVcmxNYXRjaCApICkgfHxcblx0XHRcdHRoaXMudXJsTWF0Y2hEb2VzTm90SGF2ZVByb3RvY29sT3JEb3QoIHVybE1hdGNoLCBwcm90b2NvbFVybE1hdGNoICkgfHwgICAgICAgLy8gQXQgbGVhc3Qgb25lIHBlcmlvZCAoJy4nKSBtdXN0IGV4aXN0IGluIHRoZSBVUkwgbWF0Y2ggZm9yIHVzIHRvIGNvbnNpZGVyIGl0IGFuIGFjdHVhbCBVUkwsICp1bmxlc3MqIGl0IHdhcyBhIGZ1bGwgcHJvdG9jb2wgbWF0Y2ggKGxpa2UgJ2h0dHA6Ly9sb2NhbGhvc3QnKVxuXHRcdFx0dGhpcy51cmxNYXRjaERvZXNOb3RIYXZlQXRMZWFzdE9uZVdvcmRDaGFyKCB1cmxNYXRjaCwgcHJvdG9jb2xVcmxNYXRjaCApIHx8ICAvLyBBdCBsZWFzdCBvbmUgbGV0dGVyIGNoYXJhY3RlciBtdXN0IGV4aXN0IGluIHRoZSBkb21haW4gbmFtZSBhZnRlciBhIHByb3RvY29sIG1hdGNoLiBFeDogc2tpcCBvdmVyIHNvbWV0aGluZyBsaWtlIFwiZ2l0OjEuMFwiXG5cdFx0XHR0aGlzLmlzSW52YWxpZFByb3RvY29sUmVsYXRpdmVNYXRjaCggcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkgICAgICAgICAgICAgICAgIC8vIEEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggd2hpY2ggaGFzIGEgd29yZCBjaGFyYWN0ZXIgaW4gZnJvbnQgb2YgaXQgKHNvIHdlIGNhbiBza2lwIHNvbWV0aGluZyBsaWtlIFwiYWJjLy9nb29nbGUuY29tXCIpXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHRoZSBVUkkgc2NoZW1lIGlzIGEgdmFsaWQgc2NoZW1lIHRvIGJlIGF1dG9saW5rZWQuIFJldHVybnMgYGZhbHNlYCBpZiB0aGUgc2NoZW1lIGlzIFxuXHQgKiAnamF2YXNjcmlwdDonIG9yICd2YnNjcmlwdDonXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdXJpU2NoZW1lTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgZnVsbCBVUkkgc2NoZW1lIG1hdGNoLiBFeDogJ2h0dHA6Ly95YWhvby5jb20nIFxuXHQgKiAgIG9yICdtYWlsdG86YUBhLmNvbScuXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgc2NoZW1lIGlzIGEgdmFsaWQgb25lLCBgZmFsc2VgIG90aGVyd2lzZS5cblx0ICovXG5cdGlzVmFsaWRVcmlTY2hlbWUgOiBmdW5jdGlvbiggdXJpU2NoZW1lTWF0Y2ggKSB7XG5cdFx0dmFyIHVyaVNjaGVtZSA9IHVyaVNjaGVtZU1hdGNoLm1hdGNoKCB0aGlzLnVyaVNjaGVtZVJlZ2V4IClbIDAgXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFxuXHRcdHJldHVybiAoIHVyaVNjaGVtZSAhPT0gJ2phdmFzY3JpcHQ6JyAmJiB1cmlTY2hlbWUgIT09ICd2YnNjcmlwdDonICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgYSBVUkwgbWF0Y2ggZG9lcyBub3QgaGF2ZSBlaXRoZXI6XG5cdCAqIFxuXHQgKiBhKSBhIGZ1bGwgcHJvdG9jb2wgKGkuZS4gJ2h0dHA6Ly8nKSwgb3Jcblx0ICogYikgYXQgbGVhc3Qgb25lIGRvdCAoJy4nKSBpbiB0aGUgZG9tYWluIG5hbWUgKGZvciBhIG5vbi1mdWxsLXByb3RvY29sIG1hdGNoKS5cblx0ICogXG5cdCAqIEVpdGhlciBzaXR1YXRpb24gaXMgY29uc2lkZXJlZCBhbiBpbnZhbGlkIFVSTCAoZXg6ICdnaXQ6ZCcgZG9lcyBub3QgaGF2ZSBlaXRoZXIgdGhlICc6Ly8nIHBhcnQsIG9yIGF0IGxlYXN0IG9uZSBkb3Rcblx0ICogaW4gdGhlIGRvbWFpbiBuYW1lLiBJZiB0aGUgbWF0Y2ggd2FzICdnaXQ6YWJjLmNvbScsIHdlIHdvdWxkIGNvbnNpZGVyIHRoaXMgdmFsaWQuKVxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHVybE1hdGNoIFRoZSBtYXRjaGVkIFVSTCwgaWYgdGhlcmUgd2FzIG9uZS4gV2lsbCBiZSBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIG1hdGNoIGlzIG5vdCBhIFVSTCBtYXRjaC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0byBtYXRjaFxuXHQgKiAgIHNvbWV0aGluZyBsaWtlICdodHRwOi8vbG9jYWxob3N0Jywgd2hlcmUgd2Ugd29uJ3QgZG91YmxlIGNoZWNrIHRoYXQgdGhlIGRvbWFpbiBuYW1lIGhhcyBhdCBsZWFzdCBvbmUgJy4nIGluIGl0LlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgdGhlIFVSTCBtYXRjaCBkb2VzIG5vdCBoYXZlIGEgZnVsbCBwcm90b2NvbCwgb3IgYXQgbGVhc3Qgb25lIGRvdCAoJy4nKSBpbiBhIG5vbi1mdWxsLXByb3RvY29sXG5cdCAqICAgbWF0Y2guXG5cdCAqL1xuXHR1cmxNYXRjaERvZXNOb3RIYXZlUHJvdG9jb2xPckRvdCA6IGZ1bmN0aW9uKCB1cmxNYXRjaCwgcHJvdG9jb2xVcmxNYXRjaCApIHtcblx0XHRyZXR1cm4gKCAhIXVybE1hdGNoICYmICggIXByb3RvY29sVXJsTWF0Y2ggfHwgIXRoaXMuaGFzRnVsbFByb3RvY29sUmVnZXgudGVzdCggcHJvdG9jb2xVcmxNYXRjaCApICkgJiYgdXJsTWF0Y2guaW5kZXhPZiggJy4nICkgPT09IC0xICk7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgYSBVUkwgbWF0Y2ggZG9lcyBub3QgaGF2ZSBhdCBsZWFzdCBvbmUgd29yZCBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIHByb3RvY29sIChpLmUuIGluIHRoZSBkb21haW4gbmFtZSkuXG5cdCAqIFxuXHQgKiBBdCBsZWFzdCBvbmUgbGV0dGVyIGNoYXJhY3RlciBtdXN0IGV4aXN0IGluIHRoZSBkb21haW4gbmFtZSBhZnRlciBhIHByb3RvY29sIG1hdGNoLiBFeDogc2tpcCBvdmVyIHNvbWV0aGluZyBcblx0ICogbGlrZSBcImdpdDoxLjBcIlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHVybE1hdGNoIFRoZSBtYXRjaGVkIFVSTCwgaWYgdGhlcmUgd2FzIG9uZS4gV2lsbCBiZSBhbiBlbXB0eSBzdHJpbmcgaWYgdGhlIG1hdGNoIGlzIG5vdCBhIFVSTCBtYXRjaC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHByb3RvY29sVXJsTWF0Y2ggVGhlIG1hdGNoIFVSTCBzdHJpbmcgZm9yIGEgcHJvdG9jb2wgbWF0Y2guIEV4OiAnaHR0cDovL3lhaG9vLmNvbScuIFRoaXMgaXMgdXNlZCB0b1xuXHQgKiAgIGtub3cgd2hldGhlciBvciBub3Qgd2UgaGF2ZSBhIHByb3RvY29sIGluIHRoZSBVUkwgc3RyaW5nLCBpbiBvcmRlciB0byBjaGVjayBmb3IgYSB3b3JkIGNoYXJhY3RlciBhZnRlciB0aGUgcHJvdG9jb2xcblx0ICogICBzZXBhcmF0b3IgKCc6JykuXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgVVJMIG1hdGNoIGRvZXMgbm90IGhhdmUgYXQgbGVhc3Qgb25lIHdvcmQgY2hhcmFjdGVyIGluIGl0IGFmdGVyIHRoZSBwcm90b2NvbCwgYGZhbHNlYFxuXHQgKiAgIG90aGVyd2lzZS5cblx0ICovXG5cdHVybE1hdGNoRG9lc05vdEhhdmVBdExlYXN0T25lV29yZENoYXIgOiBmdW5jdGlvbiggdXJsTWF0Y2gsIHByb3RvY29sVXJsTWF0Y2ggKSB7XG5cdFx0aWYoIHVybE1hdGNoICYmIHByb3RvY29sVXJsTWF0Y2ggKSB7XG5cdFx0XHRyZXR1cm4gIXRoaXMuaGFzV29yZENoYXJBZnRlclByb3RvY29sUmVnZXgudGVzdCggdXJsTWF0Y2ggKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogRGV0ZXJtaW5lcyBpZiBhIHByb3RvY29sLXJlbGF0aXZlIG1hdGNoIGlzIGFuIGludmFsaWQgb25lLiBUaGlzIG1ldGhvZCByZXR1cm5zIGB0cnVlYCBpZiB0aGVyZSBpcyBhIGBwcm90b2NvbFJlbGF0aXZlTWF0Y2hgLFxuXHQgKiBhbmQgdGhhdCBtYXRjaCBjb250YWlucyBhIHdvcmQgY2hhcmFjdGVyIGJlZm9yZSB0aGUgJy8vJyAoaS5lLiBpdCBtdXN0IGNvbnRhaW4gd2hpdGVzcGFjZSBvciBub3RoaW5nIGJlZm9yZSB0aGUgJy8vJyBpblxuXHQgKiBvcmRlciB0byBiZSBjb25zaWRlcmVkIHZhbGlkKS5cblx0ICogXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFJlbGF0aXZlTWF0Y2ggVGhlIHByb3RvY29sLXJlbGF0aXZlIHN0cmluZyBmb3IgYSBVUkwgbWF0Y2ggKGkuZS4gJy8vJyksIHBvc3NpYmx5IHdpdGggYSBwcmVjZWRpbmdcblx0ICogICBjaGFyYWN0ZXIgKGV4LCBhIHNwYWNlLCBzdWNoIGFzOiAnIC8vJywgb3IgYSBsZXR0ZXIsIHN1Y2ggYXM6ICdhLy8nKS4gVGhlIG1hdGNoIGlzIGludmFsaWQgaWYgdGhlcmUgaXMgYSB3b3JkIGNoYXJhY3RlclxuXHQgKiAgIHByZWNlZGluZyB0aGUgJy8vJy5cblx0ICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGl0IGlzIGFuIGludmFsaWQgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2gsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuXHQgKi9cblx0aXNJbnZhbGlkUHJvdG9jb2xSZWxhdGl2ZU1hdGNoIDogZnVuY3Rpb24oIHByb3RvY29sUmVsYXRpdmVNYXRjaCApIHtcblx0XHRyZXR1cm4gKCAhIXByb3RvY29sUmVsYXRpdmVNYXRjaCAmJiB0aGlzLmludmFsaWRQcm90b2NvbFJlbE1hdGNoUmVnZXgudGVzdCggcHJvdG9jb2xSZWxhdGl2ZU1hdGNoICkgKTtcblx0fVxuXG59ICk7XG4vKmdsb2JhbCBBdXRvbGlua2VyICovXG4vKipcbiAqIEBhYnN0cmFjdFxuICogQGNsYXNzIEF1dG9saW5rZXIubWF0Y2guTWF0Y2hcbiAqIFxuICogUmVwcmVzZW50cyBhIG1hdGNoIGZvdW5kIGluIGFuIGlucHV0IHN0cmluZyB3aGljaCBzaG91bGQgYmUgQXV0b2xpbmtlZC4gQSBNYXRjaCBvYmplY3QgaXMgd2hhdCBpcyBwcm92aWRlZCBpbiBhIFxuICoge0BsaW5rIEF1dG9saW5rZXIjcmVwbGFjZUZuIHJlcGxhY2VGbn0sIGFuZCBtYXkgYmUgdXNlZCB0byBxdWVyeSBmb3IgZGV0YWlscyBhYm91dCB0aGUgbWF0Y2guXG4gKiBcbiAqIEZvciBleGFtcGxlOlxuICogXG4gKiAgICAgdmFyIGlucHV0ID0gXCIuLi5cIjsgIC8vIHN0cmluZyB3aXRoIFVSTHMsIEVtYWlsIEFkZHJlc3NlcywgYW5kIFR3aXR0ZXIgSGFuZGxlc1xuICogICAgIFxuICogICAgIHZhciBsaW5rZWRUZXh0ID0gQXV0b2xpbmtlci5saW5rKCBpbnB1dCwge1xuICogICAgICAgICByZXBsYWNlRm4gOiBmdW5jdGlvbiggYXV0b2xpbmtlciwgbWF0Y2ggKSB7XG4gKiAgICAgICAgICAgICBjb25zb2xlLmxvZyggXCJocmVmID0gXCIsIG1hdGNoLmdldEFuY2hvckhyZWYoKSApO1xuICogICAgICAgICAgICAgY29uc29sZS5sb2coIFwidGV4dCA9IFwiLCBtYXRjaC5nZXRBbmNob3JUZXh0KCkgKTtcbiAqICAgICAgICAgXG4gKiAgICAgICAgICAgICBzd2l0Y2goIG1hdGNoLmdldFR5cGUoKSApIHtcbiAqICAgICAgICAgICAgICAgICBjYXNlICd1cmwnIDogXG4gKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInVybDogXCIsIG1hdGNoLmdldFVybCgpICk7XG4gKiAgICAgICAgICAgICAgICAgICAgIFxuICogICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImVtYWlsOiBcIiwgbWF0Y2guZ2V0RW1haWwoKSApO1xuICogICAgICAgICAgICAgICAgICAgICBcbiAqICAgICAgICAgICAgICAgICBjYXNlICd0d2l0dGVyJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcInR3aXR0ZXI6IFwiLCBtYXRjaC5nZXRUd2l0dGVySGFuZGxlKCkgKTtcbiAqICAgICAgICAgICAgIH1cbiAqICAgICAgICAgfVxuICogICAgIH0gKTtcbiAqICAgICBcbiAqIFNlZSB0aGUge0BsaW5rIEF1dG9saW5rZXJ9IGNsYXNzIGZvciBtb3JlIGRldGFpbHMgb24gdXNpbmcgdGhlIHtAbGluayBBdXRvbGlua2VyI3JlcGxhY2VGbiByZXBsYWNlRm59LlxuICovXG5BdXRvbGlua2VyLm1hdGNoLk1hdGNoID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggT2JqZWN0LCB7XG5cdFxuXHQvKipcblx0ICogQGNmZyB7U3RyaW5nfSBtYXRjaGVkVGV4dCAocmVxdWlyZWQpXG5cdCAqIFxuXHQgKiBUaGUgb3JpZ2luYWwgdGV4dCB0aGF0IHdhcyBtYXRjaGVkLlxuXHQgKi9cblx0XG5cdFxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgVGhlIGNvbmZpZ3VyYXRpb24gcHJvcGVydGllcyBmb3IgdGhlIE1hdGNoIGluc3RhbmNlLCBzcGVjaWZpZWQgaW4gYW4gT2JqZWN0IChtYXApLlxuXHQgKi9cblx0Y29uc3RydWN0b3IgOiBmdW5jdGlvbiggY2ZnICkge1xuXHRcdEF1dG9saW5rZXIuVXRpbC5hc3NpZ24oIHRoaXMsIGNmZyApO1xuXHR9LFxuXG5cdFxuXHQvKipcblx0ICogUmV0dXJucyBhIHN0cmluZyBuYW1lIGZvciB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cblx0ICogXG5cdCAqIEBhYnN0cmFjdFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRUeXBlIDogQXV0b2xpbmtlci5VdGlsLmFic3RyYWN0TWV0aG9kLFxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCB0ZXh0IHRoYXQgd2FzIG1hdGNoZWQuXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRNYXRjaGVkVGV4dCA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoZWRUZXh0O1xuXHR9LFxuXHRcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW5jaG9yIGhyZWYgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXG5cdCAqIFxuXHQgKiBAYWJzdHJhY3Rcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0QW5jaG9ySHJlZiA6IEF1dG9saW5rZXIuVXRpbC5hYnN0cmFjdE1ldGhvZCxcblx0XG5cdFxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW5jaG9yIHRleHQgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXG5cdCAqIFxuXHQgKiBAYWJzdHJhY3Rcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0QW5jaG9yVGV4dCA6IEF1dG9saW5rZXIuVXRpbC5hYnN0cmFjdE1ldGhvZFxuXG59ICk7XG4vKmdsb2JhbCBBdXRvbGlua2VyICovXG4vKipcbiAqIEBjbGFzcyBBdXRvbGlua2VyLm1hdGNoLkVtYWlsXG4gKiBAZXh0ZW5kcyBBdXRvbGlua2VyLm1hdGNoLk1hdGNoXG4gKiBcbiAqIFJlcHJlc2VudHMgYSBFbWFpbCBtYXRjaCBmb3VuZCBpbiBhbiBpbnB1dCBzdHJpbmcgd2hpY2ggc2hvdWxkIGJlIEF1dG9saW5rZWQuXG4gKiBcbiAqIFNlZSB0aGlzIGNsYXNzJ3Mgc3VwZXJjbGFzcyAoe0BsaW5rIEF1dG9saW5rZXIubWF0Y2guTWF0Y2h9KSBmb3IgbW9yZSBkZXRhaWxzLlxuICovXG5BdXRvbGlua2VyLm1hdGNoLkVtYWlsID0gQXV0b2xpbmtlci5VdGlsLmV4dGVuZCggQXV0b2xpbmtlci5tYXRjaC5NYXRjaCwge1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge1N0cmluZ30gZW1haWwgKHJlcXVpcmVkKVxuXHQgKiBcblx0ICogVGhlIGVtYWlsIGFkZHJlc3MgdGhhdCB3YXMgbWF0Y2hlZC5cblx0ICovXG5cdFxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgdGhpcyBjbGFzcyByZXByZXNlbnRzLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0VHlwZSA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAnZW1haWwnO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBlbWFpbCBhZGRyZXNzIHRoYXQgd2FzIG1hdGNoZWQuXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRFbWFpbCA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVtYWlsO1xuXHR9LFxuXHRcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW5jaG9yIGhyZWYgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRBbmNob3JIcmVmIDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdtYWlsdG86JyArIHRoaXMuZW1haWw7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGFuY2hvciB0ZXh0IHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0QW5jaG9yVGV4dCA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVtYWlsO1xuXHR9XG5cdFxufSApO1xuLypnbG9iYWwgQXV0b2xpbmtlciAqL1xuLyoqXG4gKiBAY2xhc3MgQXV0b2xpbmtlci5tYXRjaC5Ud2l0dGVyXG4gKiBAZXh0ZW5kcyBBdXRvbGlua2VyLm1hdGNoLk1hdGNoXG4gKiBcbiAqIFJlcHJlc2VudHMgYSBUd2l0dGVyIG1hdGNoIGZvdW5kIGluIGFuIGlucHV0IHN0cmluZyB3aGljaCBzaG91bGQgYmUgQXV0b2xpbmtlZC5cbiAqIFxuICogU2VlIHRoaXMgY2xhc3MncyBzdXBlcmNsYXNzICh7QGxpbmsgQXV0b2xpbmtlci5tYXRjaC5NYXRjaH0pIGZvciBtb3JlIGRldGFpbHMuXG4gKi9cbkF1dG9saW5rZXIubWF0Y2guVHdpdHRlciA9IEF1dG9saW5rZXIuVXRpbC5leHRlbmQoIEF1dG9saW5rZXIubWF0Y2guTWF0Y2gsIHtcblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtTdHJpbmd9IHR3aXR0ZXJIYW5kbGUgKHJlcXVpcmVkKVxuXHQgKiBcblx0ICogVGhlIFR3aXR0ZXIgaGFuZGxlIHRoYXQgd2FzIG1hdGNoZWQuXG5cdCAqL1xuXHRcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldFR5cGUgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ3R3aXR0ZXInO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgc3RyaW5nIG5hbWUgZm9yIHRoZSB0eXBlIG9mIG1hdGNoIHRoYXQgdGhpcyBjbGFzcyByZXByZXNlbnRzLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0VHdpdHRlckhhbmRsZSA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnR3aXR0ZXJIYW5kbGU7XG5cdH0sXG5cdFxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBhbmNob3IgaHJlZiB0aGF0IHNob3VsZCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSBtYXRjaC5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldEFuY2hvckhyZWYgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHRoaXMudHdpdHRlckhhbmRsZTtcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW5jaG9yIHRleHQgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRBbmNob3JUZXh0IDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICdAJyArIHRoaXMudHdpdHRlckhhbmRsZTtcblx0fVxuXHRcbn0gKTtcbi8qZ2xvYmFsIEF1dG9saW5rZXIgKi9cbi8qKlxuICogQGNsYXNzIEF1dG9saW5rZXIubWF0Y2guVXJsXG4gKiBAZXh0ZW5kcyBBdXRvbGlua2VyLm1hdGNoLk1hdGNoXG4gKiBcbiAqIFJlcHJlc2VudHMgYSBVcmwgbWF0Y2ggZm91bmQgaW4gYW4gaW5wdXQgc3RyaW5nIHdoaWNoIHNob3VsZCBiZSBBdXRvbGlua2VkLlxuICogXG4gKiBTZWUgdGhpcyBjbGFzcydzIHN1cGVyY2xhc3MgKHtAbGluayBBdXRvbGlua2VyLm1hdGNoLk1hdGNofSkgZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuQXV0b2xpbmtlci5tYXRjaC5VcmwgPSBBdXRvbGlua2VyLlV0aWwuZXh0ZW5kKCBBdXRvbGlua2VyLm1hdGNoLk1hdGNoLCB7XG5cdFxuXHQvKipcblx0ICogQGNmZyB7U3RyaW5nfSB1cmwgKHJlcXVpcmVkKVxuXHQgKiBcblx0ICogVGhlIHVybCB0aGF0IHdhcyBtYXRjaGVkLlxuXHQgKi9cblx0XG5cdC8qKlxuXHQgKiBAY2ZnIHtCb29sZWFufSBwcm90b2NvbFVybE1hdGNoIChyZXF1aXJlZClcblx0ICogXG5cdCAqIGB0cnVlYCBpZiB0aGUgVVJMIGlzIGEgbWF0Y2ggd2hpY2ggYWxyZWFkeSBoYXMgYSBwcm90b2NvbCAoaS5lLiAnaHR0cDovLycpLCBgZmFsc2VgIGlmIHRoZSBtYXRjaCB3YXMgZnJvbSBhICd3d3cnIG9yXG5cdCAqIGtub3duIFRMRCBtYXRjaC5cblx0ICovXG5cdFxuXHQvKipcblx0ICogQGNmZyB7Qm9vbGVhbn0gcHJvdG9jb2xSZWxhdGl2ZU1hdGNoIChyZXF1aXJlZClcblx0ICogXG5cdCAqIGB0cnVlYCBpZiB0aGUgVVJMIGlzIGEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2guIEEgcHJvdG9jb2wtcmVsYXRpdmUgbWF0Y2ggaXMgYSBVUkwgdGhhdCBzdGFydHMgd2l0aCAnLy8nLFxuXHQgKiBhbmQgd2lsbCBiZSBlaXRoZXIgaHR0cDovLyBvciBodHRwczovLyBiYXNlZCBvbiB0aGUgcHJvdG9jb2wgdGhhdCB0aGUgc2l0ZSBpcyBsb2FkZWQgdW5kZXIuXG5cdCAqL1xuXHRcblx0LyoqXG5cdCAqIEBjZmcge0Jvb2xlYW59IHN0cmlwUHJlZml4IChyZXF1aXJlZClcblx0ICogQGluaGVyaXRkb2MgQXV0b2xpbmtlciNzdHJpcFByZWZpeFxuXHQgKi9cblx0XG5cblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwcm9wZXJ0eSB7UmVnRXhwfSB1cmxQcmVmaXhSZWdleFxuXHQgKiBcblx0ICogQSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byByZW1vdmUgdGhlICdodHRwOi8vJyBvciAnaHR0cHM6Ly8nIGFuZC9vciB0aGUgJ3d3dy4nIGZyb20gVVJMcy5cblx0ICovXG5cdHVybFByZWZpeFJlZ2V4OiAvXihodHRwcz86XFwvXFwvKT8od3d3XFwuKT8vaSxcblx0XG5cdC8qKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcHJvcGVydHkge1JlZ0V4cH0gcHJvdG9jb2xSZWxhdGl2ZVJlZ2V4XG5cdCAqIFxuXHQgKiBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcmVtb3ZlIHRoZSBwcm90b2NvbC1yZWxhdGl2ZSAnLy8nIGZyb20gdGhlIHtAbGluayAjdXJsfSBzdHJpbmcsIGZvciBwdXJwb3Nlc1xuXHQgKiBvZiB7QGxpbmsgI2dldEFuY2hvclRleHR9LiBBIHByb3RvY29sLXJlbGF0aXZlIFVSTCBpcywgZm9yIGV4YW1wbGUsIFwiLy95YWhvby5jb21cIlxuXHQgKi9cblx0cHJvdG9jb2xSZWxhdGl2ZVJlZ2V4IDogL15cXC9cXC8vLFxuXHRcblx0LyoqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcHJvdG9jb2xQcmVwZW5kZWRcblx0ICogXG5cdCAqIFdpbGwgYmUgc2V0IHRvIGB0cnVlYCBpZiB0aGUgJ2h0dHA6Ly8nIHByb3RvY29sIGhhcyBiZWVuIHByZXBlbmRlZCB0byB0aGUge0BsaW5rICN1cmx9IChiZWNhdXNlIHRoZVxuXHQgKiB7QGxpbmsgI3VybH0gZGlkIG5vdCBoYXZlIGEgcHJvdG9jb2wpXG5cdCAqL1xuXHRwcm90b2NvbFByZXBlbmRlZCA6IGZhbHNlLFxuXHRcblxuXHQvKipcblx0ICogUmV0dXJucyBhIHN0cmluZyBuYW1lIGZvciB0aGUgdHlwZSBvZiBtYXRjaCB0aGF0IHRoaXMgY2xhc3MgcmVwcmVzZW50cy5cblx0ICogXG5cdCAqIEByZXR1cm4ge1N0cmluZ31cblx0ICovXG5cdGdldFR5cGUgOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gJ3VybCc7XG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHVybCB0aGF0IHdhcyBtYXRjaGVkLCBhc3N1bWluZyB0aGUgcHJvdG9jb2wgdG8gYmUgJ2h0dHA6Ly8nIGlmIHRoZSBvcmlnaW5hbFxuXHQgKiBtYXRjaCB3YXMgbWlzc2luZyBhIHByb3RvY29sLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0VXJsIDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVybCA9IHRoaXMudXJsO1xuXHRcdFxuXHRcdC8vIGlmIHRoZSB1cmwgc3RyaW5nIGRvZXNuJ3QgYmVnaW4gd2l0aCBhIHByb3RvY29sLCBhc3N1bWUgJ2h0dHA6Ly8nXG5cdFx0aWYoICF0aGlzLnByb3RvY29sUmVsYXRpdmVNYXRjaCAmJiAhdGhpcy5wcm90b2NvbFVybE1hdGNoICYmICF0aGlzLnByb3RvY29sUHJlcGVuZGVkICkge1xuXHRcdFx0dXJsID0gdGhpcy51cmwgPSAnaHR0cDovLycgKyB1cmw7XG5cdFx0XHRcblx0XHRcdHRoaXMucHJvdG9jb2xQcmVwZW5kZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gdXJsO1xuXHR9LFxuXHRcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYW5jaG9yIGhyZWYgdGhhdCBzaG91bGQgYmUgZ2VuZXJhdGVkIGZvciB0aGUgbWF0Y2guXG5cdCAqIFxuXHQgKiBAcmV0dXJuIHtTdHJpbmd9XG5cdCAqL1xuXHRnZXRBbmNob3JIcmVmIDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHVybCA9IHRoaXMuZ2V0VXJsKCk7XG5cdFx0XG5cdFx0cmV0dXJuIHVybC5yZXBsYWNlKCAvJmFtcDsvZywgJyYnICk7ICAvLyBhbnkgJmFtcDsncyBpbiB0aGUgVVJMIHNob3VsZCBiZSBjb252ZXJ0ZWQgYmFjayB0byAnJicgaWYgdGhleSB3ZXJlIGRpc3BsYXllZCBhcyAmYW1wOyBpbiB0aGUgc291cmNlIGh0bWwgXG5cdH0sXG5cdFxuXHRcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGFuY2hvciB0ZXh0IHRoYXQgc2hvdWxkIGJlIGdlbmVyYXRlZCBmb3IgdGhlIG1hdGNoLlxuXHQgKiBcblx0ICogQHJldHVybiB7U3RyaW5nfVxuXHQgKi9cblx0Z2V0QW5jaG9yVGV4dCA6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhbmNob3JUZXh0ID0gdGhpcy5nZXRVcmwoKTtcblx0XHRcblx0XHRpZiggdGhpcy5wcm90b2NvbFJlbGF0aXZlTWF0Y2ggKSB7XG5cdFx0XHQvLyBTdHJpcCBvZmYgYW55IHByb3RvY29sLXJlbGF0aXZlICcvLycgZnJvbSB0aGUgYW5jaG9yIHRleHRcblx0XHRcdGFuY2hvclRleHQgPSB0aGlzLnN0cmlwUHJvdG9jb2xSZWxhdGl2ZVByZWZpeCggYW5jaG9yVGV4dCApO1xuXHRcdH1cblx0XHRpZiggdGhpcy5zdHJpcFByZWZpeCApIHtcblx0XHRcdGFuY2hvclRleHQgPSB0aGlzLnN0cmlwVXJsUHJlZml4KCBhbmNob3JUZXh0ICk7XG5cdFx0fVxuXHRcdGFuY2hvclRleHQgPSB0aGlzLnJlbW92ZVRyYWlsaW5nU2xhc2goIGFuY2hvclRleHQgKTsgIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaCwgaWYgdGhlcmUgaXMgb25lXG5cdFx0XG5cdFx0cmV0dXJuIGFuY2hvclRleHQ7XG5cdH0sXG5cdFxuXHRcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFxuXHQvLyBVdGlsaXR5IEZ1bmN0aW9uYWxpdHlcblx0XG5cdC8qKlxuXHQgKiBTdHJpcHMgdGhlIFVSTCBwcmVmaXggKHN1Y2ggYXMgXCJodHRwOi8vXCIgb3IgXCJodHRwczovL1wiKSBmcm9tIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHRleHQgVGhlIHRleHQgb2YgdGhlIGFuY2hvciB0aGF0IGlzIGJlaW5nIGdlbmVyYXRlZCwgZm9yIHdoaWNoIHRvIHN0cmlwIG9mZiB0aGVcblx0ICogICB1cmwgcHJlZml4IChzdWNoIGFzIHN0cmlwcGluZyBvZmYgXCJodHRwOi8vXCIpXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gVGhlIGBhbmNob3JUZXh0YCwgd2l0aCB0aGUgcHJlZml4IHN0cmlwcGVkLlxuXHQgKi9cblx0c3RyaXBVcmxQcmVmaXggOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKCB0aGlzLnVybFByZWZpeFJlZ2V4LCAnJyApO1xuXHR9LFxuXHRcblx0XG5cdC8qKlxuXHQgKiBTdHJpcHMgYW55IHByb3RvY29sLXJlbGF0aXZlICcvLycgZnJvbSB0aGUgYW5jaG9yIHRleHQuXG5cdCAqIFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dCBUaGUgdGV4dCBvZiB0aGUgYW5jaG9yIHRoYXQgaXMgYmVpbmcgZ2VuZXJhdGVkLCBmb3Igd2hpY2ggdG8gc3RyaXAgb2ZmIHRoZVxuXHQgKiAgIHByb3RvY29sLXJlbGF0aXZlIHByZWZpeCAoc3VjaCBhcyBzdHJpcHBpbmcgb2ZmIFwiLy9cIilcblx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYGFuY2hvclRleHRgLCB3aXRoIHRoZSBwcm90b2NvbC1yZWxhdGl2ZSBwcmVmaXggc3RyaXBwZWQuXG5cdCAqL1xuXHRzdHJpcFByb3RvY29sUmVsYXRpdmVQcmVmaXggOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKCB0aGlzLnByb3RvY29sUmVsYXRpdmVSZWdleCwgJycgKTtcblx0fSxcblx0XG5cdFxuXHQvKipcblx0ICogUmVtb3ZlcyBhbnkgdHJhaWxpbmcgc2xhc2ggZnJvbSB0aGUgZ2l2ZW4gYGFuY2hvclRleHRgLCBpbiBwcmVwYXJhdGlvbiBmb3IgdGhlIHRleHQgdG8gYmUgZGlzcGxheWVkLlxuXHQgKiBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGFuY2hvclRleHQgVGhlIHRleHQgb2YgdGhlIGFuY2hvciB0aGF0IGlzIGJlaW5nIGdlbmVyYXRlZCwgZm9yIHdoaWNoIHRvIHJlbW92ZSBhbnkgdHJhaWxpbmdcblx0ICogICBzbGFzaCAoJy8nKSB0aGF0IG1heSBleGlzdC5cblx0ICogQHJldHVybiB7U3RyaW5nfSBUaGUgYGFuY2hvclRleHRgLCB3aXRoIHRoZSB0cmFpbGluZyBzbGFzaCByZW1vdmVkLlxuXHQgKi9cblx0cmVtb3ZlVHJhaWxpbmdTbGFzaCA6IGZ1bmN0aW9uKCBhbmNob3JUZXh0ICkge1xuXHRcdGlmKCBhbmNob3JUZXh0LmNoYXJBdCggYW5jaG9yVGV4dC5sZW5ndGggLSAxICkgPT09ICcvJyApIHtcblx0XHRcdGFuY2hvclRleHQgPSBhbmNob3JUZXh0LnNsaWNlKCAwLCAtMSApO1xuXHRcdH1cblx0XHRyZXR1cm4gYW5jaG9yVGV4dDtcblx0fVxuXHRcbn0gKTtcbnJldHVybiBBdXRvbGlua2VyO1xuXG59KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZW1hcmthYmxlL34vYXV0b2xpbmtlci9kaXN0L0F1dG9saW5rZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=