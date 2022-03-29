import React, { useEffect, useState } from "react";
import User from "./User";
import { Link } from "react-router-dom";
// import Select from "react-select";

function UserList({ users, onUserChange, selectUser }) {
  const user = users.map((u) => <User key={u.id} userObj={u} />);

  return (
    <div>
      <label>
        Select your username:
        <select value={selectUser} onChange={onUserChange}>
          <option value="" disabled>
            Select a User
          </option>
          {user}
        </select>
      </label>
      <p>
        <Link to={`/user_mts_list/${selectUser}`}>
          <button>Go to My Mountains</button>
        </Link>
      </p>
      <div>
        <p>
          <Link to="/new_user_form">
            <button>Create New User</button>
          </Link>
        </p>
        <p>
          <Link to="/edit_user_form">
            <button>Edit User</button>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserList;
