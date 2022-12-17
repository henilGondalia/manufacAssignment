import React from "react";
import ReactECharts from 'echarts-for-react';

interface EChartsProps {
    option: any;
}

const ECharts: React.FC<EChartsProps> = ({
    option
}) => {
    return (
        <div style={{height:'50%',width:'100%'}}>
            <ReactECharts option={option} />
        </div>
    )
}

export default ECharts;
