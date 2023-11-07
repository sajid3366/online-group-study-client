import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../Pages/Assignments/Assignments";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import SubmitAssignment from "../Pages/ViewDetails/SubmitAssignment";
import GiveMark from "../Pages/SubmittedAssignments/GiveMark";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "createassignments",
                element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
            },
            {
                path: "assignments",
                element: <Assignments></Assignments>,
                loader: () => fetch(`http://localhost:5000/assignment`)
            },
            {
                path: "myassignments",
                element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
                // loader : () => fetch(`http://localhost:5000/myassignment`)
            },
            {
                path: "submittedassignments",
                element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/pendingassignment/Pending`)
            },
            {
                path: '/viewdetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/assignment`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/assignment/update/${params.id}`)
            },
            {
                path: "/submitassignment/:id",
                element: <SubmitAssignment></SubmitAssignment>,
                loader : () => fetch(`http://localhost:5000/assignment`)
                
            },
            {
                path: "/givemark/:id",
                element: <GiveMark></GiveMark>,
                loader: ({params}) => fetch(`http://localhost:5000/myassignment/givemark/${params.id}`)
            }


        ]
    }
])

export default router;