import * as d3 from 'd3';
import { data } from 'jquery';

const width = 900;
const height = 900;

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);


const g = svg.append('g');
d3.json('http://localhost:3000').then(data => {
    const countries = topojson.feature(data,data.objects.countries);
    g.selectAll('path').data(country)
});
