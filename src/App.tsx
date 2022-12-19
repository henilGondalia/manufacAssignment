import ECharts from './component/Echarts';
import { wineData } from './data/wineData';

function App() {
  const ScatterOption = {
    xAxis: {
      type: 'category',
      data: wineData.map((data: any)=> Number(data['Color intensity'])),
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

  // To find how many alcohol category is there
  const AlcoholCategory = Array.from(new Set<any>(wineData.map((data: any)=> data['Alcohol'])))

  // To get the avrage of every category's Malic Acid
  let  MalicAcidAvg:number[] = [];
  AlcoholCategory.forEach((category: number)=> {
    const maicAcidArray = wineData.filter((data: any)=> category == data['Alcohol']).map((object: any)=> object['Malic Acid'])
    const sum = maicAcidArray.reduce((a:number,b:number)=>a+b);
    const avg = Number((sum/maicAcidArray.length).toFixed(2))
    MalicAcidAvg.push(avg);
  })
  
  const BarOptions = {
    xAxis: {
      type: 'category',
      data: AlcoholCategory,
      name: 'Alcohol'
    },
    yAxis: {
      type: 'value',
      name: 'Malic Acid'
    },
    series: [
      {
        data: MalicAcidAvg,
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
