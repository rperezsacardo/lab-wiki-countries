import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
class CountriesList extends Component {
  render() {
    const list = this.props.list;

    return (
      <section>
        <aside>
          <ul>
            {list.map((country) => {
              return (
                <li>
                  <Link to={country.cca3}>{country.name.common}</Link>
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
