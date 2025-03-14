import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChart = () => {
  const [data, setData] = useState({
    labels: [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'First Data',
        data: [],
        // backgroundColor: 'white',
        borderColor: 'blue',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true,
      },
      {
        label: 'Second Data',
        data: [],
        // backgroundColor: 'white',
        borderColor: 'black',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'red',
        pointBackgroundColor: '#fff',
        showLine: true,
      },
    ],
  });
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3000';
      // const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];

      await fetch(url)
        .then((data) => {
          console.log('Api data', data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log('ressss', res);
          for (const val of res) {
            dataSet1.push(val.relevance);
            dataSet2.push(val.likelihood);
          }

          setData({
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
            datasets: [
              {
                label: 'Relevance Chart',
                data: dataSet1,
                // backgroundColor: 'white',
                borderColor: 'grey',
                tension: 0,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true,
              },
              {
                label: 'likelihood Chart',
                data: dataSet2,
                //backgroundColor: 'white',
                borderColor: 'purple',
                tension: 0,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'red',
                pointBackgroundColor: '#fff',
                showLine: true,
              },
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
    <div className="App" style={{ width: '800px', height: '800px' }}>
      <Line data={data}>Hello</Line>
      <h4>Relevance-Likelihood Relationship</h4>
    </div>
  );
};

export default LineChart;
