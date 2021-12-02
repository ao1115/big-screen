import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts'
import { px } from '../shared/px';

export const Chart6 = () => {
    const divRef = useRef(null)
    const colors = { '青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE' };
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption({})
    }, [])
    return (
        <div className="地图 bordered">
            <h2>犯罪人员籍贯分布地</h2>
            <div className="chart" ref={divRef}>
            </div>
            <div>此地图仅显示了中国的部分区域</div>
        </div>
    )
}