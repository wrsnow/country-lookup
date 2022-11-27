import { useState, useRef, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("DarkMode")) {
      return JSON.parse(localStorage.getItem("DarkMode"));
    }
    return false;
  });
  const regex = /[A-Z]/g;
  const [condition, setCondition] = useState("");
  const { data, isLoading, error } = useQuery("countriesData", async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");

    return res.data;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("DarkMode", isDarkMode);
  }, [isDarkMode]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1 style={{ textAlign: "center" }}>Whoops... Something went wrong.</h1>
      </div>
    );
  }

  const FilterArr =
    condition.length > 0
      ? data.filter((el) => {
          if (regex.test(condition[0])) {
            return el.region === condition;
          } else {
            return el.name.common.toLowerCase().includes(condition);
          }
        })
      : [];

  return (
    <div className="App">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        setCondition={setCondition}
      />
      <div className="cards-container">
        {condition.length > 0
          ? FilterArr?.sort((a, b) =>
              a.name.common > b.name.common ? 1 : -1
            )?.map((country) => {
              return (
                <CountryCard
                  key={country?.name.common}
                  name={country?.name.common}
                  img={country?.flags.svg}
                  population={country?.population}
                  region={country?.region}
                  capital={country?.capital}
                />
              );
            })
          : data
              ?.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
              ?.map((country) => {
                return (
                  <CountryCard
                    key={country?.name.common}
                    name={country?.name.common}
                    img={country?.flags.svg}
                    population={country?.population}
                    region={country?.region}
                    capital={country?.capital}
                  />
                );
              })}
      </div>
    </div>
  );
}

export default App;
