import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import * as React from "react";
import Error from "./Error";
import Error2 from "./Error2";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Layout from "./Layout";
import Auth from "./Auth";
import SignUp from "./Auth/Signup";
import SignIn from "./Auth/Signin";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/products/:id",
          element: <Products />,
        },
        { path: "/product/:id", element: <Product /> },
        // { path: "/auth/signin", element: <SignIn /> },
        // { path: "/auth/signup", element: <SignUp /> },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        { path: "/auth/signin", element: <SignIn /> },
        { path: "/auth/signup", element: <SignUp /> },
      ],
    },
    {
      path: "/error",
      element: <Error />,
      children: [{ path: "/error/400", element: <Error2 /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
