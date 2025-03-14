import React from 'react';
import Chart from './components/Intensity';
import LineChart from './components/Relevance';
import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PieChart from './components/PieChart';
import GeoChart from './components/geo';

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  handleSubmit = async (event) => {
    console.log(event.target.value);
    await this.setState({ Id: event.target.value, Data: this.state.Data });
    this.fetchData();
  };

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{' '}
        </div>
      );

    return (
      <div className="App">
        {/* <h1> Data Visualization Dashboard </h1> */}
        <Header handle_Submit={this.handleSubmit} />
        <div>
          <Chart />
        </div>
        <div>
          <LineChart />
        </div>
        <PieChart />
        <GeoChart />

        {/* {items?.length > 0 &&
          items?.map((item) => (
            <ol key={item._id}>
              topic: {item.topic}, sector: {item.sector}, country:
              {item.country}
            </ol>
          ))} */}
      </div>
    );
  }
}

export default App;
