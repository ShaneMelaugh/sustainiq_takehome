import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart: React.FC = () => {

function number() {
    return Math.floor(Math.random() * 150) + 1;
    }
    
const data = [];
const startDate = new Date(Date.UTC(2024, 10, 8));

for (let i = 0; i < 15; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);
  data.push([date.getTime(), number()]); 
}

  const options: Highcharts.Options = {
    chart: {
      type: 'line',
      height: '400px',
      width: null,
      style: {
        fontFamily: 'Commissioner, sans-serif',
      },
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
    },
    yAxis: {
      title: {
        text: 'Value',
      },
    },
    series: [
      {
        type: 'line',
        name: 'Statisic over time',
        data: data
      },
    ],
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow pt-8 my-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
