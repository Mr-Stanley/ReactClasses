import SignUp from "../auth/SignUp";

import Layout from "../layout/layout";

import Login from "../auth/Login";





const ROUTES = [
    {
        path: '/',
        element: <SignUp/>
    },

    {
        path: '/Login',
        element: <Login/>
    },

    {
        path : "/Movie",
        element: <Layout/>,
        children :[
            
        ]
    }

]

export default ROUTES;