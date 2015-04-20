var React = require('react')
  , Router = require('react-router')
  , Reflux = require('reflux')

var Document = require('./components/Document.jsx')
  , Footer   = require('./components/Footer.jsx')

require('./styles/index.scss')

var App = React.createClass({
  render() {
    return (
      <main className="main">
        <Router.RouteHandler {...this.props} />
        <Footer />
      </main>
    )
  }
});

var routes = (
  <Router.Route name="app" path="/" handler={App}>
    <Router.DefaultRoute handler={Document} />
  </Router.Route>
);

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler/>, document.body);
})
