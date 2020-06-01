import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

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
          <Route
            path="/"
            exact
            render={() => <CountriesList list={countries} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
