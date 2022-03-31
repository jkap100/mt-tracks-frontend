import React from "react";
import { Link } from "react-router-dom";

function UserMt({ userMtObj, handleClick, handleRemove }) {
  return (
    <div className="column is-one-quarter">
      <div className="card mx-2">
        <div className="card-header">
          <p className="card-header-title level is-centered is-size-5">
            <h3 className="has-text-weight-bold level">{userMtObj.name}</h3>
          </p>
        </div>

        <div className="card-image has-image-centered">
          <div className="">
            <div className="">
              <figure className="">
                <img
                  className="thumbnail"
                  src={userMtObj.image}
                  alt="mountain"
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="card-content">
          <h4>Location: {userMtObj.location}</h4>
          <h5>Country: {userMtObj.country}</h5>
          <h6>Vertical feet: {userMtObj.vert}</h6>
        </div>

        <div className="card-footer is-centered">
          <Link to="/mountain_detail">
            <button
              className="mt-2 mb-2 button is-dark is-responsive"
              onClick={() => handleClick(userMtObj)}
            >
              View Mountain
            </button>
          </Link>
          {/* <button
            className="button is-light is-responsive"
            onClick={() => handleRemove(userMtObj)}
          >
            <span>Remove</span>
            <span className="icon is-small">
              <i className="fas fa-times"></i>
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default UserMt;
