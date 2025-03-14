// import { useEffect, useState } from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// import { Bar } from 'react-chartjs-2';
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const options = {
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 1,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Intensity Chart',
//     },
//   },
// };

// const Chart = () => {
//   const [data, setData] = useState({

//     labels: [
//       'Sunday',
//       'Monday',
//       'Tuesday',
//       'Wednesday',
//       'Thursday',
//       'Friday',
//       'Saturday',
//     ],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(128, 0, 128,0.5)',
//       },
//       {
//         label: 'Dataset 1',
//         data: [],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(128, 0, 128,0.5)',
//       },
//     ],
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       const url = 'http://localhost:3000';
//       const labelSet = [];
//       const dataSet1 = [];
//       const dataSet2 = [];

//       await fetch(url)
//         .then((data) => {
//           console.log('Api data', data);
//           const res = data.json();
//           return res;
//         })
//         .then((res) => {
//           console.log('ressss', res);
//           for (const val of res) {
//             dataSet1.push(val.start_year);
//             dataSet2.push(val.end_year);
//             labelSet.push(val._id);
//           }

//           setData({
//             datasets: [
//               {
//                 label: 'Dataset ID1',
//                 data: dataSet1,
//                 borderColor: 'red',
//                 backgroundColor: 'red',
//               },
//               {
//                 label: 'Dataset ID2',
//                 data: dataSet2,
//                 borderColor: 'blue',
//                 backgroundColor: 'blue',
//               },
//             ],
//             labels: ['2015', '2016', '2017', '2018', '2019', '2021', '2022'],
//           });
//           //   console.log('arrData', dataSet1);
//         })
//         .catch((e) => {
//           console.log('error', e);
//         });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div style={{ width: '500px', height: '50%' }}>
//       {/* {console.log('dataaaaaaaa', data)} */}
//       <Bar data={data} options={options} />
//     </div>
//   );
// };
// export default Chart;

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

var options = {
  responsive: true,
  title: {
    display: true,
    position: 'top',
    text: 'he',
    fontSize: 18,
    fontColor: '#111',
  },
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: '#333',
      fontSize: 16,
    },
  },
};
const LineChart = () => {
  const [data, setData] = useState({
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
            dataSet1.push(val.end_year);
            dataSet2.push(val.start_year);
          }

          setData({
            datasets: [
              {
                label: 'Start Year',
                data: dataSet1,
                backgroundColor: 'pink',
                borderColor: 'grey',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true,
              },
              {
                label: 'End Year',
                data: dataSet2,
                backgroundColor: 'white',
                borderColor: 'black',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'red',
                pointBackgroundColor: '#fff',
                showLine: true,
              },
            ],
            labels: ['2015', '2016', '2017', '2018', '2019', '2021', '2022'],
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
    <div className="App" style={{ width: '500px', height: '500px' }}>
      <Line data={data} options={options}>
      </Line>
      <h4>Year Comparison</h4>
    </div>
  );
};

export default LineChart;
