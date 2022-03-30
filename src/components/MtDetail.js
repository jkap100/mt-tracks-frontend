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
}) {
  const r = mountainDetail.runs.map((runObj) => (
    <Run key={runObj.id} runObj={runObj} handleClick={onAddToMyRuns} />
  ));

  const ur = userRuns.map((runObj) => (
    <UserRun key={runObj.id} runObj={runObj} handleClick={onRemoveRun} />
  ));

  console.log(mountainDetail.runs);
  return (
    <div>
      <h1>{mountainDetail.name}</h1>
      <img className="largeImage" src={mountainDetail.image} alt="mountain" />
      <img className="largeImage" src={mountainDetail.map} alt="map" />
      <div id="card-bottom">
        <h4>{mountainDetail.location}</h4>
        <h5>{mountainDetail.country}</h5>
        <h6>Vertical feet: {mountainDetail.vert}</h6>
      </div>
      <div>
        <h4>{mountainDetail.name} Runs </h4>
        <ul>{r}</ul>
      </div>
      <div>
        <h4>My runs at {mountainDetail.name}</h4>
        <ul>{ur}</ul>
      </div>
      <Link to={`/user_mts_list/${id}`}>
        <button>My Mountains</button>
      </Link>
    </div>
  );
}

export default MtDetail;
