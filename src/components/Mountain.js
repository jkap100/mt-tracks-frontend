import React from "react";

function Mountain({ mtObj, handleClick }) {
  return (
    <div>
      <div>
        <div className="card">
          <h3>{mtObj.name}</h3>
          <img className="thumbnail" src={mtObj.image} alt="mountain" />
        </div>
        <div id="card-bottom">
          <h4>{mtObj.location}</h4>
          <h5>{mtObj.country}</h5>
          <h6>Vertical feet: {mtObj.vert}</h6>
        </div>
        <div>
          <button onClick={() => handleClick(mtObj)}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Mountain;
