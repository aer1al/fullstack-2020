import React from "react";

const Filter = ({ search, handleSearch }) => {
  return (
    <>
      find countries
      <input value={search} onChange={handleSearch} />
    </>
  );
};

export default Filter;
