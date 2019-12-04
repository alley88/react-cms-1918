import styled from "styled-components";
import bg from "static/bg.jpg";
export const LoginContainer = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    background-image:url(${bg});
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    .loginContent{
        width:340px;
        height:440px;
        padding:10px;
        border-radius:10px;
        background:rgba(255,255,255,.4);
    }
    .logo{
        width:100%;
        height:70px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:20px;
        margin-top:15px;
        img{
            width:100%;
            height:100%;
        }
    }
    .ant-form-item{
        margin-bottom:0;
    }
    .loginBtn{
        margin-top:20px;
    }
`