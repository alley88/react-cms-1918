import React, { Component } from 'react'
import { Table, Button,Modal,message} from 'antd';
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
import BooksModify from "components/booksModify"
import {booksListDel} from "api/books"


@connect(mapStateToProps,mapDispatchToProps)
class BooksList extends Component {
    constructor(){
        super();
        this.state = {
            isShow:false,
            modifyData:{},
            columns: [
                {
                    title:"作者名称",
                    dataIndex:"booksAuth",
                    key:"booksAuth",
                    render:text=><a>{text}</a>
                },
                {
                    title:"书籍名称",
                    dataIndex:"booksName",
                    key:"booksName",
                    render:text=><a>{text}</a>
                },
                {
                    title:"书籍封面",
                    dataIndex:"booksLogo",
                    key:"booksLogo",
                    render:url=><img src={url} style={{width:"60px",height:'100px'}}/>
                },
                {
                    title:"书籍价格",
                    dataIndex:"booksPrice",
                    key:"booksPrice",  
                },
                {
                    title:"书籍状态",
                    dataIndex:"booksStatus",
                    key:"booksStatus"
                },
                {
                    title:"操作",
                    width:180,
                    render:(item)=>(
                        <div>
                            <Button type="link" onClick={this.handleDel.bind(this,item)}>删除</Button>
                            <Button type="link" onClick={this.handleisShow.bind(this,item)}>修改</Button>
                        </div>
                    )
                }
            ]
        }
    }
    render() {
       let data = this.props.booksList;
       let {modifyData} = this.state;
        return (
            <div>
                <Table 
                    rowKey={(item)=>item._id}
                    columns={this.state.columns} dataSource={data} pagination={{
                    total:100,
                    onChange:this.handleOnchange.bind(this)
                }}/>
                <Modal
                title="书籍修改"
                visible={this.state.isShow}
                footer={null}
                onCancel={this.handleHide.bind(this)}
                >
                    <BooksModify modifyData={modifyData} handleSucc={this.handleSuccBooks.bind(this)}/>
                </Modal>
            </div>
        )
    }
    handleDel(item){
        Modal.info({
            content:`您确定要删除${item.booksName}这本书籍吗？`,
            onOk:async ()=>{
                let data = await booksListDel(item._id);
               if(data.data.status == 1){
                    message.success("删除成功");
                    this.props.handleGetBooksList(this.page,this.limit)
               }else{
                     message.error("删除失败")
               }
            },

        })
    }
    handleSuccBooks(){
       this.setState({
         isShow:false
       },()=>{
           
            this.props.handleGetBooksList(this.page,this.limit)
       }) 
       
    }
    handleHide(){
        this.setState({
            isShow:false
        })
    }
    handleisShow(data){
        
        this.setState({
            isShow:true,
            modifyData:data
        })
    }
    handleOnchange(page,limit){
        this.page = page;
        this.limit = limit;
        this.props.handleGetBooksList(page,limit)
    }
    componentDidMount(){
        this.props.handleGetBooksList(1,10)
    }
}

export default BooksList