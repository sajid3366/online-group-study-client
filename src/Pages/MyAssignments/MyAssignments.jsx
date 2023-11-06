import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyAssignments = () => {

    const { user } = useContext(AuthContext)
    const [assignments, setAssignments] = useState([])
    console.log(assignments);

    useEffect(() => {
        fetch(`http://localhost:5000/myassignment/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAssignments(data);
            })
    }, [user.email])

    return (
        <div className="overflow-x-auto my-12">
            <h1 className="text-4xl font-semibold text-center mb-5">All of my assignments</h1>
            <hr className="mt-1 max-w-xl mx-auto mb-8" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl font-bold text-black">
                            <th>Title</th>
                            <th>Examene Name</th>
                            <th>Mark</th>
                            <th>Status</th>
                            <th>Obtain Mark</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            assignments.map(assignment => <tr className="font-semibold" key={assignment._id}>
                                <td>{assignment.title}</td>
                                <td>{assignment.name}</td>
                                <td>{assignment.mark}</td>
                                <td>{assignment.status}</td>
                                <td>{assignment.obtainedMark}</td>
                                <td>{assignment.feedback}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssignments;