import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router';
import axios from 'axios';

function App() {
  let [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        // console.log(response.data);
        setCountriesList(
          response.data
            .reverse()
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <Routes>
              <Route
                path="/"
                element={countriesList.map((country) => {
                  return (
                    <CountriesList country={country} key={country.latlng} />
                  );
                })}
              />
              <Route path="/:id" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
