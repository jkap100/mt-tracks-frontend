import React from "react";

function Mountain({ mtObj, handleClick }) {
  return (
    <div className="box">
      <div>
        <div>
          <p>
            <h3>
              {mtObj.name} -- {mtObj.location}, {mtObj.country}
            </h3>
          </p>
        </div>
        {/* <div className="card-image">
          <figure>
            <img className="thumbnail" src={mtObj.image} alt="mountain" />
          </figure>
        </div> */}

        {/* <div className="card-content">
          <h4>Location: {mtObj.location}</h4>
          <h5>Country: {mtObj.country}</h5>
          <h6>Vertical feet: {mtObj.vert}</h6>
        </div> */}

        <div className="card-footer">
          <button
            className="mt-2 mb-2 button is-dark is-outlined is-responsive is-small"
            onClick={() => handleClick(mtObj)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mountain;
