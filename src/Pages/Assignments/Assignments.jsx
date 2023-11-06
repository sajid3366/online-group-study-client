import { useLoaderData } from "react-router-dom";
import AllAssignments from "./AllAssignments";
import { useState } from "react";
import axios from "axios";

const Assignments = () => {

    const loadedAssignments = useLoaderData();
    console.log(loadedAssignments);
    const [assignments, setAssignments] = useState(loadedAssignments)

    const handleDifficultyLevel = (e) => {
        e.preventDefault();
        const form = e.target;
        const difficulty = form.difficulty.value;
        axios.get(`http://localhost:5000/assignmentlevel/${difficulty}`)
        .then(result => {
            setAssignments(result.data);
        })
    }

    return (
        <div className="mt-12">
            <div className="flex gap-8">
                <div className="flex-[1]">
                    <div className='bg-base-200 px-5 py-3 rounded-md text-center h-screen'>
                        <h1 className="text-xl mb-3 mt-5">You can filter based on difficuly level</h1>
                        <form onSubmit={handleDifficultyLevel}>
                            <select name="difficulty" className="select max-w-xs text-lg border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]">
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                            {/* <p className="bg-gray-200 px-4 py-2 rounded-md flex justify-center text-xl font-semibold mt-3 cursor-pointer">Search</p> */}
                            <input className='btn btn-block mt-3 text-lg bg-slate-300' type="submit" value="Search" />

                        </form>
                    </div>
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