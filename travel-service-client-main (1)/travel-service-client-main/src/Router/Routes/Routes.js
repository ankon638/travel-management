import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Home/Services/AddService";
import AllServices from "../../Pages/Home/Home/Services/AllServices";
import Service from "../../Pages/Home/Home/Services/Service";
import Services from "../../Pages/Home/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Update from "../../Pages/MyReviews/Update";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-service-server-zeta.vercel.app/services/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,

            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-service-server-zeta.vercel.app/reviews/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },

            { path: '*', element: <div>This route is not found</div> }
        ]
    }
]);

export default router;