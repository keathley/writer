var React = require('react');

var AppActions = require('../actions/AppActions')

var Editor = React.createClass({
  getInitialState: function() {
    return { value: '' }
  },
  handleChange: function(e) {
    var newText = e.target.value
    this.setState({ value: newText })
    AppActions.textUpdate(newText)
  },
  render: function() {
    var value = this.state.value;

    return (
      <div className="editor">
        <textarea value={value} onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = Editor;