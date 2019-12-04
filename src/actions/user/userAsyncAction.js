import { userLoginTypes } from "./usersTypes";
import { loginApi } from "api/user";
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