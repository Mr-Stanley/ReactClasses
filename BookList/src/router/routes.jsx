import Login from "../auth/login";
import SignUp from "../auth/SignUp"
import BookListPage from "../component/BookListPage";

const routes = [
    {
        path: "/login",
        element: <Login/>
    },

    {
        path: "/SignUp",
        element: <SignUp/>
    },
    {
        path: "/",
        element: <SignUp/>
    },
    {
        path : "/BookListPage",
        element : <BookListPage/>
    },
]

export default routes;