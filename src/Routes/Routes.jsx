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


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
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
                element: <PrivateRoute><Assignments></Assignments></PrivateRoute>
            },
            {
                path: "submittedassignments",
                element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>
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
            }

        ]
    }
])

export default router;