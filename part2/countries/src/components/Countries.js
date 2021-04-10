import React from "react";
import CountryDetail from "./CountryDetail";

const Countries = ({ search, filteredCountries, handleClick, weather }) => {
  const length = filteredCountries.length;

  return (
    <>
      {search && length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : length < 10 && length > 1 ? (
        <ul style={{ "list-style-type": "none", padding: "0" }}>
          {filteredCountries.map((country) => (
            <>
              <form style={{ display: "flex" }}>
                <li key={country.name}>{country.name}</li>
                <button value={country.name} onClick={handleClick}>
                  show
                </button>
              </form>
            </>
          ))}
        </ul>
      ) : length === 1 ? (
        <CountryDetail filteredCountry={filteredCountries} weather={weather} />
      ) : null}
    </>
  );
};

export default Countries;
