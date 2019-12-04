import React, { Component } from 'react'
import { LoginContainer } from "./styled.js"
import { Form, Input, Button, Checkbox } from "antd";
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
@Form.create()
class Login extends Component {
    render() {
        //表单的校验及双数据绑定
        const { getFieldDecorator } = this.props.form;
        return (
            <LoginContainer>
                <div className="loginContent">
                    <div className="logo">
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
                    </div>
                    <Form onSubmit={this.props.handleLogin.bind(this)}>
                        <Form.Item label="用户名">
                            {
                                getFieldDecorator('username', {
                                    //正则的校验
                                    rules: [
                                        { pattern: /^\w{4,8}$/, message: "请规范填写用户名" }
                                    ],
                                    //初始默认值
                                    initialValue: "alley"
                                    // valuePropName: 'checked',
                                    // initialValue: true,
                                })(
                                    <Input type="text" />
                                )
                            }

                        </Form.Item>

                        <Form.Item label="密码">
                            {
                                getFieldDecorator('password', {
                                    initialValue: "alley"
                                })(
                                    <Input type="password" />
                                )
                            }

                        </Form.Item>

                        <Form.Item className="loginBtn">
                            <Button type="primary" block htmlType="submit">登陆</Button>
                        </Form.Item>
                    </Form>
                </div>

            </LoginContainer>
        )
    }
    
}

export default Login;

/*
    Form表单有一个高阶组件的方法  Form.create()

    this.props.form
        validateFields:获取表单中所有的数据
        getFieldDecorator：表单的校验以及数据绑定





   
    initialValue 初始默认值 注意只能给组件拥有value属性的使用

    非value属性的组件需要指定initialValue赋值给哪个属性  valuePropName

    
*/