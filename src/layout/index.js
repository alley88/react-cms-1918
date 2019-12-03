import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
import sliderEach from "utils/sliderEach"
import { LayoutRoutes } from "router"
import {withRouter} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
@withRouter
class Wrapper extends Component {
    render() {
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
    handleToggle({key}){
       this.props.history.push(key);
    }
}
export default  Wrapper
