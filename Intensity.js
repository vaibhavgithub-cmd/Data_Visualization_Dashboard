import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Intensity Chart',
    },
  },
};

const Chart = () => {
  const [data, setData] = useState({
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(128, 0, 128,0.5)',
      },
    ],
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000';
      // const labelSet = [];
      const dataSet1 = [];

      await fetch(url)
        .then((data) => {
          console.log('Api data', data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log('ressss', res);
          for (const val of res) {
            dataSet1.push(val.intensity);
            // labelSet.push(val.topic);
          }

          setData({
            datasets: [
              {
                label: 'Intensity',
                data: dataSet1,
                borderColor: 'rgba(0, 0, 0,0.6)',
                backgroundColor: 'rgba(128, 0, 128,0.5)',
              },
            ],
            labels: [
              'gas',
              'oil',
              'consumption',
              'market',
              'gdp',
              'war',
              'production',
              'export',
              'battery',
              'biofuel',
              'policy',
              'economy',
              'robot',
              'strategy',
              'growth',
              'economic',
              'energy',
              ' ',
            ],
          });
          //   console.log('arrData', dataSet1);
        })
        .catch((e) => {
          console.log('error', e);
        });
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '800px', height: '800px' }}>
      {/* {console.log('dataaaaaaaa', data)} */}
      <Bar data={data} options={options} />
      <h4>Intensity Visualization</h4>
    </div>
  );
};
export default Chart;
