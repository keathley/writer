var AppActions = require('../actions/AppActions');
var Reflux = require('reflux');

var DocumentStore = Reflux.createStore({
  init: function() {
    this.listenTo(AppActions.textUpdate, this.onTextUpdate);
  },
  getInitialState: function() {
    this._text = '';
  },
  onTextUpdate: function(text) {
    this._text = text;
    this.trigger(text);
  }
});