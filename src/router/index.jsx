import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UnauthorizedPage from "../pages/403";
import ErrorPage from "../pages/404";
import LoginForm from "../pages/Login/LoginForm";
import HomePage from "../pages/Home";
import DefaultLayout from "../components/Layout/DefaultLayout";
import RequireAuth from "../components/Auth/RequireAuth";

const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        // Public routes
        { index: true, element: <HomePage /> },
        { path: "unauthorized", element: <UnauthorizedPage /> },
        {
          path: "login",
          element: <LoginForm />,
        },
        { path: "*", element: <ErrorPage /> },
        {
          element: <RequireAuth />,
          children: [
            {
              path: "admin",
              children: [
                {
                  index: true,
                  element: <HomePage />,
                },
                {
                  path: "edit/:id",
                  element: <h1>Hi</h1>,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <RouterProvider fallbackElement={<h1>Loading...</h1>} router={router} />
  );
};

export default RouterComponent;
