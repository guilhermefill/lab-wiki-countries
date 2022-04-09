import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetails = () => {
  let { id } = useParams();
  let [country, setCountry] = useState('country');
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => {
        setCountry(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="col">
      {isLoading ? 'loading' : <p>{country.name.common}</p>}
    </div>
  );
};

export default CountryDetails;
