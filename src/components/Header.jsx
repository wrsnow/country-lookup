import React, { useEffect, useState } from "react";
import FilterCountries from "./FilterCountries";
import HeaderBar from "../components/Custom Elements/HeaderBar";

function Header({ setCondition, isDarkMode, setIsDarkMode, setSearch }) {
  function changeTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <HeaderBar darkMode={isDarkMode}>
      <button onClick={changeTheme}>
        <span>
          <i
            className={`${isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}`}
          ></i>
        </span>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
      <input
        onChange={(e) => setCondition(e.target.value.toLowerCase())}
        type="text"
        placeholder="Country Name..."
      />
      <FilterCountries setCondition={setCondition} />
    </HeaderBar>
  );
}

export default Header;
