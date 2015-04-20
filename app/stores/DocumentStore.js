var AppActions = require('../actions/AppActions');
var Reflux = require('reflux');

var DocumentStore = Reflux.createStore({
  listenables: AppActions,

  onTextUpdate: function(text) {
    this._text = text;
    this.trigger(text);
  }
});

module.exports = DocumentStore;
