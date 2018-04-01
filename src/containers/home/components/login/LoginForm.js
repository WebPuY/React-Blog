import React, { Component } from 'react'
import { Input, Form, Icon, Button } from 'antd'
import './style.css'

const FormItem = Form.Item;

class LoginFormCom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.userName, values.password)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleLogin} className="loginFormStyle">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password"
              placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button className="loginLoginButton" type="primary" htmlType="submit">
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const LoginForm = Form.create()(LoginFormCom);

export default LoginForm