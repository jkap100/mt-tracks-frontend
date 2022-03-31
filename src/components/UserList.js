import React, { useEffect, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
// import Select from "react-select";

function UserList({ users, onUserChange, selectUser }) {
  const user = users.map((u) => <User key={u.id} userObj={u} />);

  return (
    <div className="container">
      <form className="box">
        <div className="field">
          <label className="label">Select your username:</label>
          <div className="control">
            <div className="select">
              <select value={selectUser} onChange={onUserChange}>
                <option value="" disabled>
                  Select a User
                </option>
                {user}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <p className="control">
            <Link to={`/user_mts_list/${selectUser}`}>
              <button className="button is-dark">Go to My Mountains</button>
            </Link>
          </p>
        </div>

        <div className="block">
          <div className="field is-grouped">
            <p className="control">
              <Link to="/new_user_form">
                <button className="button is-dark is-outlined">
                  Create New User
                </button>
              </Link>
            </p>
            <p className="control">
              <Link to="/edit_user_form">
                <button className="button is-dark is-outlined">
                  Edit User
                </button>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserList;
