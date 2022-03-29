import React from "react";
import { Link } from "react-router-dom";

function UserMt({ userMtObj, handleClick }) {
  return (
    <div>
      <div>
        <div className="card">
          <h3>{userMtObj.name}</h3>
          <img className="thumbnail" src={userMtObj.image} alt="mountain" />
        </div>
        <div id="card-bottom">
          <h4>{userMtObj.location}</h4>
          <h5>{userMtObj.country}</h5>
          <h6>Vertical feet: {userMtObj.vert}</h6>
        </div>
        <div>
          <Link to="/mountain_detail">
            <button onClick={() => handleClick(userMtObj)}>
              View Mountain
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserMt;
