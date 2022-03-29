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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <p>
          <button type="submit">Create User</button>
        </p>
      </form>
      <p>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </p>
    </div>
  );
}

export default NewUserForm;
