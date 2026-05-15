/*
import React, { useState } from "react";

export default function ProfileCard() {
  const [showDetails, setShowDetails] = useState(false);
  const [name, setName] = useState("");

  return (
    <section>
      <section data-testid="profile-card-component"></section>
      <h1>Student Profile</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />

      {name && <p>Hello, {name}</p>}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && <p>Student is learning React Testing</p>}
    </section>
  );
}
*/
