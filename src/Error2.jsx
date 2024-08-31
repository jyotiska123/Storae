import React from "react";
import { Link } from "react-router-dom";
const Error2 = () => {
  return (
    <div>
      <h1>Error 500!</h1>
      <p>Internal Server Error. Please try again in some time.</p>
      <p>
        <Link to="/">Take me back to home</Link>
      </p>
    </div>
  );
};

export default Error2;
