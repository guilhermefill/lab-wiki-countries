import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  }, [id]);

  return (
    <div className="col">
      {isLoading ? (
        'loading'
      ) : (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />
          <p>{country.name.common}</p>
        </div>
      )}
      <Link to="/">Back To list</Link>
    </div>
  );
};

export default CountryDetails;
