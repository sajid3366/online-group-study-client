import { useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";
import AllAssignments from "./AllAssignments";

const Assignments = () => {

    const assignments = useLoaderData();
    console.log(assignments);

    return (
        <div className="mt-12">
            <div className="flex gap-8">
                <div className="flex-[1]">
                <Sidebar></Sidebar>
                </div>

                <div className="flex-[3]">
                    {
                        assignments.map(assignment => <AllAssignments key={assignment._id} assignment={assignment}></AllAssignments>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Assignments;