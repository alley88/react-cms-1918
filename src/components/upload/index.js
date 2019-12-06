import React from "react";
import { UploaderContainer } from "./styled";
import { Icon,message } from "antd";
import {fetch as fetchPro} from "whatwg-fetch"

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ""
        }

        if (this.props.value) {
            this.state.imgUrl = this.props.value;
        }


        console.log(this.props)
    }
    render() {
        return (
            <UploaderContainer>
                <input type="file" onChange={this.handleUpload.bind(this)} ref="file" />
                <div className="imgBox">
                    {this.state.imgUrl ? <img src={this.state.imgUrl} /> : <Icon type="plus" style={{ fontSize: 20 }} />}
                </div>
            </UploaderContainer>
        )
    }
    async handleUpload() {
        let imgFile = this.refs.file.files[0];
        let formData = new FormData();
        formData.append("filesImg", imgFile);
        
       let data = await fetchPro("/ajax/upload/files",{
            method:"post",
            body:formData
        }).then(res=>res.json())

        if(data.data.urlPath){
            this.setState({
                imgUrl:data.data.urlPath
            })


            this.props.onChange(data.data.urlPath)
        }else{
            message.error(data.data.info)
        }

    }
}

export default Upload;