import { createBrowserRouter, Navigate } from "react-router-dom";
import MainHome from "../Layouts/MainHome";

import MainContents from "../Components/MainContents";
import Auth from "../Layouts/Auth";
import Login from "../Components/Login";
import Register from "../Components/Register";
import SecureRoutes from "./SecureRoutes";
import News from "../Layouts/News";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <MainContents></MainContents>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <SecureRoutes>
        <News></News>
      </SecureRoutes>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <Auth></Auth>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
