var React = require('react');
import { Router, Link, Route ,browserHistory} from 'react-router';
var App = React.createClass({
  render: function() {
    return (
      <div className="app-container">
      	<Link to="/hello" className="hellolink">hello</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;