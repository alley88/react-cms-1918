import React from "react";
import { Container } from "./styled"
import echarts from "echarts";
class EchartsInfo extends React.Component {
    render() {
        return (
            <Container ref="content"></Container>
        )
    }
    componentDidMount() {
        this.echarts = echarts.init(this.refs.content);
        var option = {
            //环形图的颜色
            //color:["#f6f6f6","#3385ff"],
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            //环形图中央的数据显示
                            // formatter:function(){
                            //     return "注册量"
                            // },
                            textStyle:{
                                color:""
                            }
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    //数据
                    // data: [
                    //     { value: 30, name: '直接访问' },
                    //     { value: 310, name: '邮件营销' },
                    // ]
                }
            ]
        };

        let {options} = this.props;
        option.color = options.color;
        option.series[0].label.normal.formatter = options.formatter;
        option.series[0].label.normal.textStyle.color = options.fontColor;
        option.series[0].data = options.data;

        this.echarts.setOption(option)
    }
}



export default EchartsInfo