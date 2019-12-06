import styled from "styled-components";

export const UploaderContainer = styled.div`
    width:110px;
    height:110px;
    position:relative;
    border:1px dashed #ccc;
    input{
        width:100%;
        height:100%;
        opacity:0;
        position:absolute;
        z-index:2;
    }
    .imgBox{
        padding:5px;
        width:100%;
        height:100%;
        position:absolute;
        z-index:1;
        display:flex;
        justify-content:center;
        align-items:center;
    img{
        width:100%;
        height:100%;
        border:0;
    }
}
`
