import React from "react";
import { Icon, Menu } from "antd"
const { SubMenu } = Menu;

export default (routes) => {

    function childrenMap(childNodes) {
        return (
            <SubMenu
                key={childNodes.key}
                title={
                    <span>
                        <Icon type="user" />
                        {childNodes.text}
                    </span>
                }
            >
                {
                    childNodes.children.map((child)=>(
                        <Menu.Item key={child.key}>
                             <Icon type="home"/>
                             <span className="nav-text">{child.text}</span>
                        </Menu.Item>
                    ))
                }
                
                
            </SubMenu>
        )
    }



    return routes.map((item, index) => {
        if (item.children) {
            return childrenMap(item)
        } else {
            return (
                <Menu.Item key={item.key}>
                    <Icon type="home" />
                    <span className="nav-text">{item.text}</span>
                </Menu.Item>
            )
        }
    })

}

