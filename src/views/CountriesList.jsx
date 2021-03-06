import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom';
import countries from './../countries.json';

class CountriesList extends Component {
  render() {
    const list = this.props.list;

    return (
      <section>
        <aside>
          <ul>
            {list.map((country) => {
              return (
                <li key={country.cca3}>
                  <Link to={country.cca3}> {country.name.common} </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </section>
    );
  }
}

export default CountriesList;
