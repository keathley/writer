var React = require('react');
var Reflux = require('reflux');
var Remarkable = require('remarkable')
var md = new Remarkable('commonmark')

var DocumentStore = require('../stores/DocumentStore.js')

var Preview = React.createClass({
  mixins: [Reflux.connect(DocumentStore, "text")],
  render: function() {
    var text = this.state.text

    return (
      <div className="preview">
        <span dangerouslySetInnerHTML={{__html: md.render(text)}} />
      </div>
    );
  }
});

module.exports = Preview;