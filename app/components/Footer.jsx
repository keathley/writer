var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="footer__credits">
          <span>
            Created by Chris Keathley
          </span>
        </div>
      </footer>
    );
  }

});

module.exports = Footer;