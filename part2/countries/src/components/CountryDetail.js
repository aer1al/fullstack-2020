import React from "react";

const CountryDetail = ({ filteredCountry, weather }) => {
  return (
    <>
      {filteredCountry.map((country) => (
        <>
          <h1>{country.name}</h1>
          <ul style={{ "list-style-type": "none", padding: "0" }}>
            <li>capital {country.capital}</li>
            <li>population {country.population}</li>
          </ul>
          <h3>Spoken languages</h3>
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name} </li>
            ))}
          </ul>
          <img
            style={{
              height: "64px",
            }}
            src={country.flag}
            alt=""
          />
          <h3>Weather in {country.capital}</h3>
          <p>
            <strong>temperature: </strong>
            {weather.temperature} Celsius
          </p>
          <img src={weather.weather_icons} alt="" />
          <p>
            <strong>wind: </strong>
            {weather.wind_speed} mph direction {weather.wind_dir}
          </p>
        </>
      ))}
    </>
  );
};

export default CountryDetail;
