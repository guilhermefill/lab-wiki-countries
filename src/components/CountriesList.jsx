import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  render() {
    return (
      <div key={this.props.country.alpha3Code}>
        <Link to={`${this.props.country.alpha3Code}`}>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${this.props.country.alpha2Code.toLowerCase()}.png`}
                alt={this.props.country.name.common}
              />
              <p>{this.props.country.name.common}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
