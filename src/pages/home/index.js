import React, { Component } from 'react'
import { Row, Col } from "antd";
import EchartsInfo from "components/echartsInfo"
class Home extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                    <EchartsInfo options={{
                        color: ["#3385ff","#f6f6f6"],
                        data: [{value:200},{value:1000}],
                        formatter: this.handleformatter.bind(this, "注册量"),
                        fontColor:"#3385ff"
                    }}></EchartsInfo>
                </Col>

                <Col className="gutter-row" span={8}>
                    <EchartsInfo
                        options={{
                            color: ["#f54545","#f6f6f6"],
                            data: [{value:300},{value:800}],
                            fontColor:"#f54545",
                            formatter: this.handleformatter.bind(this, "阅读量")
                        }}
                    ></EchartsInfo>
                </Col>

                <Col className="gutter-row" span={8}>
                    <EchartsInfo
                        options={{
                            color: ["#ffac38","#f6f6f6"],
                            data: [{value:70},{value:100}],
                            fontColor:"#ffac38",
                            formatter: this.handleformatter.bind(this, "访问量")
                        }}
                    ></EchartsInfo>
                </Col>
            </Row>
        )
    }
    handleformatter(info){
        return info;
    }
}

export default Home