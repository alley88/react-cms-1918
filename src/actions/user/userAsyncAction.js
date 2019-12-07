import { userLoginTypes,userListTypes } from "./usersTypes";
import { loginApi,userListApi} from "api/user";
import { createAction } from "redux-actions"
import { message } from "antd";
export const userLoginAsyncAction = (username, password) => {
    let userLoginAction = createAction(userLoginTypes, data => data);

    return async (dispatch) => {
        let data = await loginApi(username, password);

        if (data.data.code == 1) {
            message.success(data.data.info,1.5)
            localStorage.setItem("userInfo", JSON.stringify({
                name: data.data.data.name,
                urlPic: data.data.data.urlPic
            }))
            dispatch(userLoginAction(data.data.data))

            //在异步中做了一个return返回
            return data.data.code;
        } else {
            message.error(data.data.info)
        }


    }
}


export const UserListAsyncAction = ()=>{
    let userListAction = createAction(userListTypes,data=>data)

    return async (dispatch)=>{
        let data = await userListApi();
        if(data.data.data){
            sessionStorage.setItem("total",data.data.data[1])
            sessionStorage.setItem("userList",JSON.stringify(data.data.data[0]))
            dispatch(userListAction({list:data.data.data[0],total:data.data.data[1]}))
        }else{
            message.error("获取数据失败")
        }
        
    }
}