import React from 'react';
import ECharts from './component/Echarts';
import { wineData } from './data/wineData';

function App() {
  const ScatterOption = {
    xAxis: {
      type: 'category',
      data: wineData.map((data: any)=> data['Color intensity']),
      name: 'color intensity'
    },
    yAxis: {
      type: 'value',
      name: 'Hue'
    },
    series: [
      {
        data: wineData.map((data: any)=> data['Hue']),
        type: 'scatter'
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  const BarOptions = {
    xAxis: {
      type: 'category',
      data:  wineData.map((data: any)=> data['Alcohol']),
      name: 'Alcohol',
      axisLabel: {interval: 5}
    },
    yAxis: {
      type: 'value',
      name: 'Malic Acid'
    },
    series: [
      {
        data: wineData.map((data: any)=> data['Malic Acid']),
        type: 'bar',
        
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  
  return (
    <div className="App">
        {/* Scatter plot */}
        <ECharts option={ScatterOption} />
        {/* Bar chart */}
        <ECharts option={BarOptions} />
    </div>
  );
}

export default App;
