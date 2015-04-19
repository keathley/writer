var React = require('react');
var Reflux = require('reflux');
var Remarkable = require('remarkable')
var md = new Remarkable('commonmark')

var DocumentStore = require('../stores/DocumentStore.js')

var Preview = React.createClass({
  init: function(text) {
    this.setState({text: text})
  },
  componentDidMount: function() {
    this.unsubscribe = DocumentStore.listen(this.onTextChange, this.init)
  },
  componentWillUnmount: function() {
    this.unsubscribe()
  },
  onTextChange: function(newText) {
    this.setState({
      text: newText
    })
  },
  render: function() {
    var text = this.state.text

    return (
      <div className="preview">
        {md.render(text)}
      </div>
    );
  }
});

module.exports = Preview;