import React from "react";
import { Form, Button, Input, Select, message } from "antd"
import Upload from "../upload"
import http from "utils/request";
const { Option } = Select;

@Form.create()
class BooksModify extends React.Component {
    render() {
        let { modifyData } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleUpdate.bind(this)}>
                <Form.Item label="书籍作者">
                    {
                        getFieldDecorator("booksAuth", {
                            initialValue: modifyData.booksAuth
                        })(
                            <Input type="text" />
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍名称">
                    {
                        getFieldDecorator("booksName", {
                            initialValue: modifyData.booksName
                        })(
                            <Input type="text" />
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍状态">
                    {
                        getFieldDecorator("booksStatus", {
                            initialValue: modifyData.booksStatus,
                        })(
                            <Select>
                                <Option value="连载中">连载中</Option>
                                <Option value="已完结">已完结</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍价格">
                    {
                        getFieldDecorator("booksPrice", {
                            initialValue: modifyData.booksPrice
                        })(
                            <Input type="number" />
                        )
                    }
                </Form.Item>
                <Form.Item label="书籍封面">
                    {
                        getFieldDecorator("booksLogo", {
                            initialValue: modifyData.booksLogo
                        })(
                            <Upload />
                        )
                    }
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit">修改</Button>
                </Form.Item>
            </Form>
        )
    }
    handleUpdate(e) {
        e.preventDefault();
        let { modifyData } = this.props;
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let data = await http.post({
                    url: "/ajax/books/modify",
                    method: "post",
                    data: {
                        id: modifyData._id,
                        ...values
                    }
                })

                if (data.data.status == 1) {
                    //成功
                    message.success(data.data.info, 1.5)
                    setTimeout(() => {
                        this.props.handleSucc();
                    })
                } else {
                    //失败
                    message.error(data.data.info, 1.5)
                    setTimeout(() => {
                        this.props.handleSucc();
                    })
                }


            }
        })
    }
}

export default BooksModify;