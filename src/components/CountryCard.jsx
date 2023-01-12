import { Link } from "react-router-dom";

function CountryCard({ name, img, population, region, capital }) {
  return (
    <div className="country-card">
      <Link to={`/${name}`}>
        <img src={img} alt={name} />
      </Link>

      <div className="country-info">
        <h3>{name}</h3>
        <span>
          <strong>Population:</strong> {population}
        </span>
        <br />
        <span>
          <strong>Region:</strong> {region}
        </span>
        <br />
        <span>
          <strong>Capital:</strong> {capital}
        </span>
        <br />
      </div>
    </div>
  );
}

export default CountryCard;
