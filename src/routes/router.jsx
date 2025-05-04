import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "../Provider/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <div className='flex justify-center min-h-screen'>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "/news/details/:id",
    element: <PrivateRouter>
      <NewsDetails></NewsDetails>
    </PrivateRouter>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <div className='flex justify-center min-h-screen'>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
