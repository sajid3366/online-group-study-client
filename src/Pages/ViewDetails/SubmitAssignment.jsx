import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useParams } from "react-router-dom";

const SubmitAssignment = () => {

    const loadedAssignments = useLoaderData()
    console.log(loadedAssignments);
    const { user } = useContext(AuthContext)
    console.log(user);
    const { id } = useParams();

    const [assignments, setAssignments] = useState({});
    console.log(assignments);
    useEffect(() =>{
        const findCarDetail = loadedAssignments.find(assignment => assignment._id == id);
        setAssignments(findCarDetail);
    },[loadedAssignments, id])

    const handleSubmitAssignment = e => {
        e.preventDefault();

        const form = e.target;
        const link = form.link.value;
        const note = form.note.value;
        const email = user.email;
        const name = user.displayName;
        const mark = assignments.mark;
        const title = assignments.title;

        const submitAssignment = {
           name, title, email, link, note, mark, status: "Pending"
        }
        console.log(submitAssignment);

        fetch('http://localhost:5000/myassignment', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitAssignment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submited Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className='bg-white px-2 lg:px-[140px] py-12 mt-12 mb-12 rounded-md'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Submit The Assignment</h1>

            <form onSubmit={handleSubmitAssignment}>
                <div className="">
                    <div className='mb-5'>
                        <p>Assignment PDF Link</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='PDF' type="text" name="link" id="" />

                    </div>
                    <div>
                        <p>Quick Note</p>
                        <textarea placeholder="A message about the assignment" className="border-2 border-solid w-[410px] md:w-full lg:w-full px-4 py-1 rounded-md mt-2" name="note" id="" cols="129" rows="10"></textarea>
                    </div>

                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Submit Assignment" />
            </form>

        </div>
    );
};

export default SubmitAssignment;