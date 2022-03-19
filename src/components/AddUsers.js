import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

const AddUsers = () => {
  return (
    <div>
      <h2>Add User:</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Address" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </div>
  );
};

export default AddUsers;
