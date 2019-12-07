import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon, Row, Col,Modal} from 'antd';
import sliderEach from "utils/sliderEach"
import { LayoutRoutes } from "router"
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {mapStateToProps} from './mapstore';
import Cookies from "js-cookie"

const { Header, Content, Footer, Sider } = Layout;
@connect(mapStateToProps)
@withRouter
class Wrapper extends Component {
    render() {
        const menu = (
            <Menu onClick={this.handleMenu.bind(this)}>
                <Menu.Item key="userInfo">
                    个人中心
                </Menu.Item>
                <Menu.Item key="logout">
                    退出登录
                </Menu.Item>
                
            </Menu>
        );
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" style={{ height: "64px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img
                            style={{ width: "60px", height: "60px" }}
                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['/home']}
                        onClick={this.handleToggle.bind(this)}
                    >
                        {sliderEach(LayoutRoutes)}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    {/* 右侧头部 */}
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Row>
                            <Col span={8}>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ lineHeight: '64px' }}
                                >
                                    <Menu.Item key="1">教学管理</Menu.Item>
                                    <Menu.Item key="2">招生管理</Menu.Item>
                                    <Menu.Item key="3">就业管理</Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={8} offset={8} style={{display:'flex',justifyContent:'flex-end',paddingRight:10}}>
                                <Dropdown overlay={menu}>
                                    <span> {this.props.userInfo.name} <Icon type="down" /></span>
                                </Dropdown>
                            </Col>
                        </Row>

                        {/* 个人信息 */}



                    </Header>

                    {/* 内容区 */}
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}
                        </div>
                    </Content>

                    {/* 底部 */}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
    handleToggle({ key }) {
        this.props.history.push(key);
    }
    handleMenu({key}){
       if(key == "userInfo"){
        this.props.history.push(key);
       }else{
           //清空token
           
           Modal.info({
               content:"您确定要退出吗?",
               onOk:()=>{
                    Cookies.remove("token");
                    this.props.history.push("/login")
               }
           })
          
       }
    }
}
export default Wrapper
