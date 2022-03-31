import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Run from "./Run";
import UserRun from "./UserRun";

function MtDetail({
  mountainDetail,
  id,
  onAddToMyRuns,
  userRuns,
  onRemoveRun,
  handleClickMap,
}) {
  const r = mountainDetail.runs.map((runObj) => (
    <Run key={runObj.id} runObj={runObj} handleClick={onAddToMyRuns} />
  ));

  const ur = userRuns.map((runObj) => (
    <UserRun key={runObj.id} runObj={runObj} handleClick={onRemoveRun} />
  ));

  console.log(mountainDetail.runs);
  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-dark">
                <img src={mountainDetail.image} alt="mountain" />
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-light">
                {/* <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p> */}
                <figure className="image">
                  <Link to="/map">
                    <img
                      onClick={() => handleClickMap(mountainDetail)}
                      src={mountainDetail.map}
                      alt="mountain"
                    />
                  </Link>

                  <p className="subtitle">Click to View Map</p>
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-light">
              <p className="title">My Runs at {mountainDetail.name}</p>

              <div className="content">{ur}</div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark">
            <div className="content">
              <p className="title">{mountainDetail.name} Runs</p>
              <p className="subtitle">
                Vertical feet: {mountainDetail.vert} --{" "}
                {mountainDetail.location}, {mountainDetail.country}
              </p>
              <div className="content">{r}</div>
            </div>
          </article>
        </div>
      </div>
      <div className="field is-grouped">
        <Link to={`/user_mts_list/${id}`}>
          <button className="mt-4 mb-6 mr-4 button is-dark is-responsive is-outlined">
            My Mountains
          </button>
        </Link>
        <Link to="/runs">
          <button className="mt-4 mb-6 mr-4 button is-dark is-focused is-outlined">
            All Runs
          </button>
        </Link>
        <p>
          <Link to="/">
            <button className="mt-4 mb-6 button is-dark is-focused is-outlined">
              Log Out
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default MtDetail;
