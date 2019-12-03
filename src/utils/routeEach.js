import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Cookies from "js-cookie"
import Layout from "layout"
export default (routes) => {

    function isLayout(item) {
        if (item.meta.flag) {
            return <Layout><item.component /></Layout>
        } else {
            return <item.component />
        }
    }


    function isLogin(item) {
       
        if (item.path !== "/login" && item.meta.requiredAuth) {
          

            if (Cookies.get("token")) {
                return isLayout(item)
            } else {
                return <Redirect to="/login" />
            }
        } else {
            
            return isLayout(item)
        }
    }


    function childrenMap(childNodes) {
        return (
            <Route path={childNodes.path} key={childNodes.key} render={() => (
                <Switch>
                    {
                        childNodes.children.map((child) => (
                            <Route path={child.path} key={child.key} render={() => {
                                if (child.children) {
                                    return childrenMap(child);
                                } else {
                                    return isLogin(child)
                                }
                            }} />
                        ))
                    }
                    <Redirect to={childNodes.children[0].path} />
                </Switch>
            )} />
        )
    }



    return routes.map((item) => {
        if (item.children) {
            return childrenMap(item)
        } else {

            return (
                <Route path={item.path} key={item.path} render={() => {
                    return isLogin(item)
                }} />
            )

        }
    })
}