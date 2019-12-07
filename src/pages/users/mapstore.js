import {UserListAsyncAction} from "actions/user/userAsyncAction"
export const mapStateToProps = (state)=>({
    total: sessionStorage.getItem("total") || state.user.total,
    userList:JSON.parse(sessionStorage.getItem('userList')) || state.user.userList
})

export const mapDispatchToProps = (dispatch)=>({
    handleUserList(){
        dispatch(UserListAsyncAction())
    }
})