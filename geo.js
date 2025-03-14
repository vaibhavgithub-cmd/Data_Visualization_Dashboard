import React, { Component } from 'react';
import Chart from 'react-google-charts';
const geoData = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
];
class GeoChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Country</h2>
        <Chart
          width={'700px'}
          height={'320px'}
          chartType="GeoChart"
          data={geoData}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="https://localhost:3000"
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
export default GeoChart;

