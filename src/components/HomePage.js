import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Manage Users:</h2>
      <div className="btn-container">
        <Link to="./components/AddUsers">
          <button>Add user</button>
        </Link>
        <Link to="./components/UpdateUsers">
          <button>Update user</button>
        </Link>
        <Link to="./components/RemoveUsers">
          <button>Remove user</button>
        </Link>
        <Link to="./components/FetchUsers">
          <button>Fetch user</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
