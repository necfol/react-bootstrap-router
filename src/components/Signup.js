import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

let Signup = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem
          label="账户：">
          <Input placeholder="请输入账户名"
            {...getFieldProps('userName')} />
        </FormItem>
        <FormItem
          label="密码：">
          <Input type="password" placeholder="请输入密码"
            {...getFieldProps('password')} />
        </FormItem>
        <FormItem>
          <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  },
});

Signup = Form.create()(Signup);
module.exports = Signup;

