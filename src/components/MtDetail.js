import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Run from "./Run";
import UserRun from "./UserRun";

function MtDetail({ mountainDetail, id, onAddToMyRuns, userRuns }) {
  const r = mountainDetail[0].runs.map((runObj) => (
    <Run key={runObj.id} runObj={runObj} handleClick={onAddToMyRuns} />
  ));

  const ur = userRuns.map((runObj) => (
    <UserRun key={runObj.id} runObj={runObj} />
  ));

  console.log(mountainDetail[0].runs);
  return (
    <div>
      <h1>{mountainDetail[0].name}</h1>
      <img
        className="largeImage"
        src={mountainDetail[0].image}
        alt="mountain"
      />
      <img className="largeImage" src={mountainDetail[0].map} alt="map" />
      <div id="card-bottom">
        <h4>{mountainDetail[0].location}</h4>
        <h5>{mountainDetail[0].country}</h5>
        <h6>Vertical feet: {mountainDetail[0].vert}</h6>
      </div>
      <div>
        <h4>{mountainDetail[0].name} Runs </h4>
        <ul>{r}</ul>
      </div>
      <div>
        <h4>My runs at {mountainDetail[0].name}</h4>
        <ul>{ur}</ul>
      </div>
      <Link to={`/user_mts_list/${id}`}>
        <button>My Mountains</button>
      </Link>
    </div>
  );
}

export default MtDetail;
