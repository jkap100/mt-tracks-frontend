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
    <div className="container">
      <form className="box-form" onSubmit={handleSubmit}>
        <div>
          <div className="field">
            <label className="label">Edit Email</label>
            <div className="control">
              <input
                className="input"
                value={updateEmail}
                onChange={(e) => setUpdateEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="field is-grouped">
            <p className="control">
              <button className="button is-dark" type="submit">
                Edit Email
              </button>
            </p>
            <p className="control">
              <Link to="/">
                <button className="button is-light">Cancel</button>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;
