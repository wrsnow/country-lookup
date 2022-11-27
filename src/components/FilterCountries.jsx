import React from "react";

function FilterCountries({ setCondition }) {
  function handleFilter(e) {
    setCondition(e.target.value);
  }

  return (
    <>
      <select onChange={handleFilter} name="" id="">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </>
  );
}

export default FilterCountries;
