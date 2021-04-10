import { React, useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [weather, setWeather] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleClick = (event) => {
    event.preventDefault();
    handleSearch(event);
    console.log(event);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(countries.concat(response.data));
    });
  }, []);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    if (filteredCountries.length === 1) {
      const capital = filteredCountries.map((country) => country.capital);
      console.log(capital);

      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
        )
        .then((response) => {
          console.log(response.data);
          setWeather(response.data.current);
        });
    }
  }, [filteredCountries]);

  console.log(filteredCountries);

  return (
    <>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries
        search={search}
        filteredCountries={filteredCountries}
        handleClick={handleClick}
        weather={weather}
      />
    </>
  );
};

export default App;
