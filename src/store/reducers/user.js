import {handleActions} from "redux-actions";
import {userLoginTypes} from "actions/user/usersTypes"
const defaultState = {
    userInfo:{}
}


export default handleActions({
    [userLoginTypes]:(state,action)=>{
        let userState = Object.assign({},state);
        userState.userInfo = action.payload;
        return userState;
    }
},defaultState);