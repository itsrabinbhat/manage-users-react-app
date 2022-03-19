import React from "react";
import { Link } from "react-router-dom";

const FetchUsers = () => {
  return (
    <>
      <div id="fetch-users">
        <button>Fetch Users</button>

        <div className="users">
          <div className="user">
            <p>Name: John Doe</p>
            <p>Address: Nepal</p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button id="goto-home">Go to home</button>
      </Link>
    </>
  );
};

export default FetchUsers;
