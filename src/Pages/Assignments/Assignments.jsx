import { useLoaderData } from "react-router-dom";
import AllAssignments from "./AllAssignments";
import { useEffect, useState } from "react";
import axios from "axios";

const Assignments = () => {

    const loadedAssignments = useLoaderData();
    console.log(loadedAssignments);
    const [assignments, setAssignments] = useState(loadedAssignments)
    const [assignmentsPerPage, setAssignmentsPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0);
    const [count, setCount] = useState(0);
    const numOfPages = Math.ceil(count / assignmentsPerPage);
    console.log(numOfPages);

    const pages = [...Array(numOfPages).keys()]
    console.log(pages);

    const handleDifficultyLevel = (e) => {
        e.preventDefault();
        const form = e.target;
        const difficulty = form.difficulty.value;
        axios.get(`http://localhost:5000/assignmentlevel/${difficulty}`)
            .then(result => {
                setAssignments(result.data);
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/countAssignment`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/assignment?page=${currentPage}&size=${assignmentsPerPage}`)
            .then(res => res.json())
            .then(data => setAssignments(data))
    }, [currentPage, assignmentsPerPage]);

    const handlePagination = e => {
        const val = parseInt(e.target.value)
        console.log(val);
        setAssignmentsPerPage(val);
        setCurrentPage(0)
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }



    return (
        <div className="mt-12">
            <div className="flex gap-8">
                <div className="flex-[1]">
                    <div className='bg-base-300 px-5 py-3 rounded-md text-center h-screen'>
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
            <div className='text-center'>
                <p >Current page{currentPage}</p>
                <button onClick={handlePrevPage} className="btn  border-2 mr-2 border-gray-200" >Prev</button>
                {
                    pages.map(page => <button
                        onClick={()=> setCurrentPage(page)}
                        className={`w-12 rounded-md h-12 bg-gray-200 border-2 mr-2 border-gray-200 ${currentPage === page ? "bg-orange-400" : undefined} `} key={page}>
                        {page}
                    </button>)
                }
                <button onClick={handleNextPage} className="btn border-2 border-gray-200">Next</button>
                <select className="ml-2 w-14 h-12 rounded-md" value={assignmentsPerPage} onChange={handlePagination} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>

        </div>
    );
};

export default Assignments;