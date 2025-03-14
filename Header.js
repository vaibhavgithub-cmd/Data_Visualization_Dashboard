import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: 'cyan' }}
        >
          <div className="container-fluid">
            <select
              className="form-select form-select-lg "
              aria-label=".form-select-lg example"
              name="selectCoin"
              style={{ width: 'fit-content' }}
              onChange={this.props.handle_Submit}
            >
              <option value="Dashboard">Filters</option>
              <option value="intensity">Intensity</option>
              <option value="binancecoin">Relevance</option>
              <option value="bitcoin">Likelihood </option>
              <option value="cardano">country</option>
            </select>

            <a
              className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
              style={{ fontFamily: 'NHaasGroteskDSPro-65Md' }}
              href="/"
            >
              Data Visualization Dashboard
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
