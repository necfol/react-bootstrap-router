var React = require('react');
import { Col, Row } from 'antd';
var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container col-xs-6 col-md-4">
		<Row type="flex" justify="center" align="middle">
        	{this.props.children}
      	</Row>
      </div>
    )
  }
});

module.exports = Main;