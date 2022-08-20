import React from "react";

function App() {
  return (
    <div className="container">
      <h1>Your Details</h1>
      <form>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <input name="collegeName" placeholder="College Name" />
        <input name="collegeCity" placeholder="College City" />
        <input name="phoneNumber" placeholder="Phone number" />
        <button type="submit">Update Details</button>
        <br />
        <button>Logout</button>
      </form>
      <img
        className="logo"
        src="Techkriti_logo_White 1.png"
        alt="hello"
      ></img>
    </div>
  );
}

export default App;
