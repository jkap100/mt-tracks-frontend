import React, { useState, useEffect } from "react";
import UserMt from "./UserMt";
import { Link } from "react-router-dom";
import Mountain from "./Mountain";

function UserMtsList({
  userMts,
  onAddMtChange,
  addMtVisible,
  mountains,
  onAddToMyMts,
  onViewMt,
}) {
  const uMt = userMts.map((um) => (
    <UserMt key={um.id} userMtObj={um} handleClick={onViewMt} />
  ));
  const mt = mountains.map((mt) => (
    <Mountain key={mt.id} mtObj={mt} handleClick={onAddToMyMts} />
  ));

  return (
    <div>
      <h1>My Mountains</h1>
      <ul>{uMt}</ul>
      <div>
        <p>
          <button onClick={onAddMtChange}>
            {addMtVisible ? "Hide Mountains" : "Add Mountains"}
          </button>
        </p>
      </div>
      <div>{addMtVisible && <div>{mt}</div>}</div>
      <p>
        <Link to="/">
          <button>Log Out</button>
        </Link>
      </p>
    </div>
  );
}

export default UserMtsList;
