import React, { Component } from 'react';

import countries from './../countries.json';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [...countries],
      country: this.props.match.params.id,
    };
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    const prev = prevProps.match.params.id;
    const actual = this.props.match.params.id;
    if (prev !== actual) {
      const Contries = countries.filter((country) => {
        return country.cca3 === this.props.match.params.id;
      });
      console.log('here', Contries);

      this.setState({
        country: Contries[0].cca3,
      });
    }
  }

  render() {
    const singleCountry = this.state.countries.filter((el) => {
      return el.cca3 === this.state.country;
    })[0];

    return (
      <div>
        <h1>{singleCountry.name.common}</h1>
        <h3>{singleCountry.region}</h3>
        <h4>{singleCountry.capital}</h4>
        <ul>
          {singleCountry.borders.map((el) => {
            return (
              <li>
                <Link to={el}>{el}</Link>
              </li>
            );
          })}
        </ul>
        <h1>list:</h1>
      </div>
    );
  }
}

export default CountryDetail;
