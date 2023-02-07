import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/index.js";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Error404 from "../pages/PageError/Error.js";
import ListUser from "../pages/User/index.js";
import UsersRegistered from "../pages/UserSingle/index.js";
import RegisterUser from "../pages/Register/RegisterUse.js";

const routerPages = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error404></Error404>,
    },
    {
        path: "/Signup",
        element: <Signup></Signup>,
    },
    {
        path: "/Signin",
        element: <Signin></Signin>,
    },
    {
        path: "/Users",
        element: <ListUser></ListUser>,
    },
    {
        path: "/register",
        element: <RegisterUser></RegisterUser>,
    },
    {
        // dynamic route
        path: "/Users/user/:id",
        element: <UsersRegistered></UsersRegistered>,
    },
]);

const RoutesApp = () => {
    return <RouterProvider router={routerPages}></RouterProvider>;
};

export default RoutesApp;
