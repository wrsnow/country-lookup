import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, img, population, region, capital }) {
  const [isVisible, setIsVisible] = useState(true);

  const observer = useRef();
  const currentEl = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("is visible");
          setIsVisible(true);
        } else {
          setIsVisible(false);

          console.log("is not visible");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "500px",
      }
    );
    if (node) observer.current.observe(node);
  });

  const cardStyle = {
    visibility: isVisible ? "visible" : "hidden",
  };

  return (
    <div style={cardStyle} className="country-card" ref={currentEl}>
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
