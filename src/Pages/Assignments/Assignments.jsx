import { useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";
import AllAssignments from "./AllAssignments";
import { useState } from "react";

const Assignments = () => {

    const loadedAssignments = useLoaderData();
    console.log(loadedAssignments);
    const [assignments, setAssignments] = useState(loadedAssignments)

    return (
        <div className="mt-12">
            <div className="flex gap-8">
                <div className="flex-[1]">
                <Sidebar></Sidebar>
                </div>

                <div className="flex-[3]">
                    {
                        assignments.map(assignment => <AllAssignments key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></AllAssignments>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Assignments;