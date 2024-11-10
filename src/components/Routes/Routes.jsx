import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import CreateAccont from "../CreateAccount/CreateAccont";
import Login from "../Login/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/createAccount",
                element: <CreateAccont></CreateAccont>
            },
            {
                path: "/Login",
                element: <Login></Login>
            }
        ]
    }
])

export default router;