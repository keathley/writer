var React = require('react');

var Editor  = require('./Editor.jsx')
  , Preview = require('./Preview.jsx')

var Document = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Editor />
        <Preview />
      </div>
    );
  }
});

module.exports = Document;