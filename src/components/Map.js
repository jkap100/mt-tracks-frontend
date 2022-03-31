import React from "react";
import { Link } from "react-router-dom";

function Map({ map }) {
  return (
    <div className="container">
      <div>
        <img className="mapImg" src={map} alt="map" />
      </div>
      <div className="field is-grouped">
        <Link to={`/mountain_detail/`}>
          <button className="mt-4 mb-6 mr-4 button is-dark is-responsive is-outlined">
            Mountain Detail
          </button>
        </Link>
        <p>
          <Link to="/">
            <button className="mt-4 mb-6 button is-dark is-focused">
              Log Out
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Map;
