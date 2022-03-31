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
  onRemoveMt,
  searchTerm,
  setSearchTerm,
}) {
  const uMt = userMts.map((um) => (
    <UserMt
      key={um.id}
      userMtObj={um}
      handleClick={onViewMt}
      handleRemove={onRemoveMt}
    />
  ));
  const mt = mountains.map((mt) => (
    <Mountain key={mt.id} mtObj={mt} handleClick={onAddToMyMts} />
  ));

  return (
    <div className="container">
      <div>
        <div>
          {!addMtVisible && (
            <div>
              <div className="box">
                <h1 className="title is-2 header">My Mountains</h1>
              </div>
              <div className="columns is-multiline">{uMt}</div>
            </div>
          )}
        </div>

        <hr></hr>

        <div>
          {addMtVisible && (
            <div>
              <div>
                <div className="Card">{mt}</div>

                <form>
                  <div>
                    <input
                      className="input is-dark is-focused"
                      id="search"
                      value={searchTerm}
                      type="text"
                      placeholder="Search Mts"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
          <div>
            <p>
              <button
                className="mb-2 mt-4 button is-dark is-responsive is-outlined"
                onClick={onAddMtChange}
              >
                {addMtVisible ? "My Mountains" : "Add Mountains"}
              </button>
            </p>
          </div>
        </div>
      </div>
      <p>
        <Link to="/">
          <button className="mt-2 mb-6 button is-dark is-focused">
            Log Out
          </button>
        </Link>
      </p>
    </div>
  );
}

export default UserMtsList;
