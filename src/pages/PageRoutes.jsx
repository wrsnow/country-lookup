import React from "react";
import axios from "axios";
import App from "../App";
import Error from "./Error";
import { useQuery } from "react-query";
import CountryPage from "./CountryPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function PageRoutes() {
  const { data, isLoading, error } = useQuery("countriesData", async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");

    return res.data;
  });

  const renderRoutes = data?.map((el) => {
    return (
      <Route
        key={el.name.common}
        path={`/${el.name.common}`}
        element={<CountryPage data={el} />}
      />
    );
  });

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        {renderRoutes}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/countrypage" element={<CountryPage />} />
      </Routes>
    </HashRouter>
  );
}

export default PageRoutes;
