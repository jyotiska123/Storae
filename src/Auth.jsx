import React from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Auth = () => {
  return (
    <div>
      {/* <div>
        Already a customer?
        <Link className="link" to="/auth/signin">
          <button>Sign In</button>
        </Link>
      </div>
      <div>
        New to the store?
        <Link className="link" to="/auth/signup">
          <button>Sign Up</button>
        </Link>
      </div> */}
      <Outlet />
    </div>
  );
};

export default Auth;
