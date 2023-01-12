import React from "react";
import "./CountryPage.css";
import { Link } from "react-router-dom";
import HeaderBar from "../components/Custom Elements/HeaderBar";

function CountryPage({ data }) {
  const isDarkMode = JSON.parse(localStorage.getItem("DarkMode"));

  const nativeName = Object.values(data?.name?.nativeName ?? "4");
  const Languages = Object.values(data?.languages || "Not found");
  const Currency = Object.values(data?.currencies || "Not found");

  return (
    <div className="country-page">
      <HeaderBar darkMode={isDarkMode}>
        <Link to="/">
          <button>RETURN</button>
        </Link>
      </HeaderBar>
      <div className="country-image">
        <img loading="lazy" src={data?.flags.svg} alt={data?.name.common} />
      </div>
      <div className="country-infos">
        <h1>
          <strong>Name:</strong> {data?.name.common}
        </h1>
        <h3>
          <strong>Native Name:</strong> {nativeName[0].common || "Not found"}
        </h3>
        <h3>
          <strong>Population:</strong> ~{data?.population || "Not found"}
        </h3>
        <h3>
          <strong>Region:</strong> {data?.region || "Not found"}
        </h3>
        <h3>
          <strong>Subregion:</strong> {data?.subregion || "Not found"}
        </h3>
        <div className="languages">
          <h3>
            <strong>Languages:</strong> {Languages.join(", ")}
          </h3>
        </div>
        <h3>
          <strong>Currency Name: </strong> {Currency[0].name || "Not found"}
        </h3>
        <h3>
          <strong>Currency Symbol: </strong>
          <em>{Currency[0].symbol || "Not found"}</em>
        </h3>
      </div>
    </div>
  );
}

export default CountryPage;
