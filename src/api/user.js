import http from "utils/request.js";

export const loginApi = (username,password)=>http.post({
    url:"/ajax/users/login",
    data:{
            username,
            password
        },
    method:"POST"
})

export const userListApi = _=>http.get({
    method:"get",
    url:"/ajax/users/userList"
})