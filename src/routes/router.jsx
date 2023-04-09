import { createBrowserRouter } from "react-router-dom";
import User from "../components/User";
import UserForm from "../components/UserForm";
import UsersPage from "../pages/UsersPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <UsersPage />,
  },
  {
    path: "/users/:userId",
    element: <User />,
  },
  {
    path: "/create-user",
    element: <UserForm/>
  },
]);
