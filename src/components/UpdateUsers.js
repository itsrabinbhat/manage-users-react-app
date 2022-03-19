import React from "react";
import { Link } from "react-router-dom";

const UpdateUsers = () => {
  return (
    <div>
      <h2>Update User:</h2>
      <form>
        <input type="text" placeholder="New Name" />
        <input type="text" placeholder="New Address" />
        <button type="submit">Update</button>
      </form>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </div>
  );
};

export default UpdateUsers;
