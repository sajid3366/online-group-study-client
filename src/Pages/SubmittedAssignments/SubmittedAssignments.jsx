import { Link, useLoaderData } from "react-router-dom";

const SubmittedAssignments = () => {

    const assignments = useLoaderData()
    console.log(assignments);


    return (
        <div className="my-12 px-3">
            <div className="">
                <h1 className="text-center mb-10 text-3xl font-semibold">All the pending assignments</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        assignments.map((assignment, idx) =>
                            <div className="bg-base-300 space-y-3 px-5 py-4 rounded-md" key={idx}>
                                <h1 className="font-semibold text-xl">Assignment Title : {assignment.title}</h1>
                                <p className="text-lg font-medium">Mark : {assignment.mark}</p>
                                <p>Assignment Status : {assignment.status}</p>
                                <p className="text-xl ">Examinee Name : {assignment.name}</p>

                                <Link to={`/givemark/${assignment._id}`}>
                                    <button className="btn btn-outline btn-accent mt-8">Give Mark</button>

                                </Link>
                                
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SubmittedAssignments;