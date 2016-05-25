var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('./components/Main');
var App = require('./components/App');
var Hello = require('./components/Hello');
var Signup = require('./components/Signup');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Signup} />
      <Route path='/app' component={App}>
        <Route path='/hello' component={Hello} />
      </Route>
    </Route>
  </Router>
);

module.exports = routes;