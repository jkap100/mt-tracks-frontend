import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewUserForm({ onNewUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onNewUser({
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="container is-flex-wrap-wrap">
      <form className="box" onSubmit={handleSubmit}>
        <div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>
        <div className="block mt-3">
          <div className="field is-grouped">
            <p className="control">
              <button className="button is-dark is-responsive" type="submit">
                Create User
              </button>
            </p>
            <p className="control">
              <Link to="/">
                <button className="button is-light is-responsive">
                  Cancel
                </button>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;
