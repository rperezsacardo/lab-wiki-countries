import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class CountryDetail extends Component {
  render() {
    const ContriesList = this.props.list;
    console.log();
    const Contries = this.props.list.filter((country) => {
      return country.cca3 === this.props.match.params.id;
    });
    const singleCountry = Contries[0];
    console.log(singleCountry);
    return (
      <div>
        <h1>{singleCountry.name.common}</h1>
        <h3>{singleCountry.region}</h3>
        <ul>
          {singleCountry.borders.map((el) => {
            return (
              <li>
                <Link to={el}>{el}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;
