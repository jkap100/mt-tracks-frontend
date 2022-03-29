import React, { useState, useEffect } from "react";

function Users({ userObj }) {
  //

  return (
    <option value={userObj.id}>
      {userObj.first_name} {userObj.last_name}
    </option>
  );
}

export default Users;
