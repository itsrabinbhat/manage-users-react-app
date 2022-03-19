import React from "react";
import { Link } from "react-router-dom";

const RemoveUsers = () => {
  return (
    <div>
      <h2>Remove User:</h2>
      <form>
        <input type="text" placeholder="Your User ID" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </div>
  );
};

export default RemoveUsers;
