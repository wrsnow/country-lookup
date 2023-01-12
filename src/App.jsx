import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import "./App.css";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

function App() {
  const { data, isLoading, error } = useQuery("countriesData", async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");

    return res.data;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("DarkMode")) {
      return JSON.parse(localStorage.getItem("DarkMode"));
    }
    return false;
  });
  const [condition, setCondition] = useState("");

  const regionsList = [
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Africa",
    "Antarctic",
  ];

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

  const titleRef = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const startIndex = currentPage * itemsPerPage - itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const FilterArr =
    condition.length > 0
      ? data.filter((el) => {
          if (regionsList.some((el) => el === condition)) {
            return el.region === condition;
          } else {
            return el.name.common.toLowerCase().includes(condition);
          }
        })
      : [];

  return (
    <div className="App">
      <Header
        headerRef={titleRef}
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
              .slice(startIndex, endIndex)
              .map((country) => {
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
      {condition.length <= 0 && (
        <Pagination
          setCurrentPage={setCurrentPage}
          scrollToTop={handleBackClick}
        />
      )}
    </div>
  );
}

export default App;
