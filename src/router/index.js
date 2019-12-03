import {
    Home,
    Login,
    BooksList,
    AddBooks,
    UserList,
    UserInfo
} from "pages"


export const LayoutRoutes = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true,
            requiredAuth:true
        },
        key:"/home",
        icon:"",
        text:"系统首页"
    },
    {
        path:"/books",
        meta:{
            flag:true,
            requiredAuth:true
        },
        children:[
            {
                path:"/books/booksList",
                component:BooksList,
                meta:{
                    flag:true,
                    requiredAuth:true
                },
                key:"/books/booksList",
                icon:"",
                text:"书籍列表"
            },
            {
                path:"/books/addBooks",
                component:AddBooks,
                meta:{
                    flag:true,
                    requiredAuth:true
                },
                key:"/books/addBooks",
                icon:"",
                text:"添加书籍"
            }
        ],
        key:"/books",
        icon:"",
        text:"书籍管理"
    },
    {
        path:"/user",
        meta:{
            flag:true,
            requiredAuth:true
        },
        key:"/user",
        children:[
            {
                path:"/user/userList",
                component:UserList,
                key:"/user/userList",
                icon:"",
                text:"用户列表",
                meta:{
                    flag:true,
                    requiredAuth:true
                },
                
            },
            {
                path:"/user/userInfo",
                component:UserInfo,
                key:"/user/userInfo",
                icon:"",
                text:"个人中心",
                meta:{
                    flag:true,
                    requiredAuth:true
                },
                
            }
        ],
        icon:"",
        text:"用户管理"
    }
]

export const NoLayoutRoutes = [
        {
            path:"/login",
            component:Login,
            meta:{}
        }
]

export const RouteConfig = LayoutRoutes.concat(NoLayoutRoutes);