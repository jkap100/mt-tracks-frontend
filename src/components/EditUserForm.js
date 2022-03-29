import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditUserForm({ onEditUser }) {
  const [updateEmail, setUpdateEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onEditUser({
      email: updateEmail,
    });
    setUpdateEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <button type="submit">Edit Email</button>
      </form>
      <p>
        <Link to="/">Cancel</Link>
      </p>
    </div>
  );
}

export default EditUserForm;
