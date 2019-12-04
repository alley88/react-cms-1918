import {Modal} from "antd";
import {userLoginAsyncAction} from "actions/user/userAsyncAction"
export const mapStateToProps = (state)=>({

})


export const mapDispatchToProps = (dispatch)=>({
    handleLogin(e) {
        //阻止浏览器的默认事件
        e.preventDefault();
        //获取表单中的数据
        this.props.form.validateFields( async (err, values) => {
            if (!err) {
              let data = await dispatch(userLoginAsyncAction(values.username,values.password));
             if(data == 1){
                 //跳转
                setTimeout(()=>{
                    this.props.history.push("/home");
                },1500)
             }
            }else{
                Modal.error({
                    content:"用户名或密码有误请重新填写"
                })
            }
        });
    }
})