import { useEffect, useState } from 'react';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style.css';

ChartJs.register(Tooltip, Title, ArcElement, Legend);

function PieChart() {
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
    labels: ['Red', 'Yellow', 'Blue'],
  });
  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:3000')
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log('resss', res);

          const data = [];
          for (var i of res) {
            data.push(i.intensity);
          }
          setData({
            datasets: [
              {
                data: data,
                backgroundColor: [
                  'red',
                  'blue',
                  'yellow',
                  'green',
                  'cyan',
                  'grey',
                  'purple',
                  'sky blue',
                  'orange',
                  'voilet',
                  'Pink',
                  'Brown',
                  'LightSalmon',
                  'PeachPuff',
                  'Orchid',
                  'GreenYellow',
                  'Teal',
                  'Gray',
                  'MistyRose',
                ],
              },
            ],
            labels: [
              'Northern America',
              'Central America',
              'World',
              'Western Africa',
              'Western Asia',
              'Eastern Europe',
              'Central Africa',
              'Northern Africa',
              'Southern Africa',
              'Southern Asia',
              'Western Asia',
              'Eastern Europe',
              'Central Asia',
              'Eastern Asia',
              'South America',
              'Eastern Africa',
              'South-Eastern Asia',
              ' ',
            ],
          });
        })
        .catch((e) => {
          console.log('error', e);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App" style={{ width: '800px', height: '800px' }}>
      <Doughnut data={data} />
      <h4>Region-Intensity Visualization</h4>
    </div>
  );
}

export default PieChart;
