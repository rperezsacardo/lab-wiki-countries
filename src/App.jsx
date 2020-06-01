import React from 'react';

import './App.css';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import countries from './countries.json';

import CountriesList from './views/CountriesList';

import CountryDetail from './views/CountryDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/:id"
            exact
            render={(props) => <CountryDetail {...props} list={countries} />}
          />
        </Switch>
        <nav>
          <aside>
            <CountriesList list={countries} />
          </aside>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
