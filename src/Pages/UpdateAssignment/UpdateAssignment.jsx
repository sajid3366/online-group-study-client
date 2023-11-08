import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateAssignment = () => {
    const { user } = useContext(AuthContext)
    const assignment = useLoaderData();
    console.log(assignment);

    const { id } = useParams();
    console.log(id);
    const [startDate, setStartDate] = useState();


    const handleUpdateAssignment = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const difficulty = form.difficulty.value;
        const mark = form.mark.value;
        const date = form.date.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const email = user.email;

        const updateAssignment = { email, title, difficulty, mark, date, description, photo , status: "ok" };
        console.log(updateAssignment);
        fetch(`https://online-group-study-server-gamma.vercel.app/assignment/${assignment._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAssignment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })

                }
            })
    }

    return (
        <div className='bg-[#F4F3F0] px-2 lg:px-[140px] py-12 mt-12 mb-12 rounded-md'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Update the Assignment</h1>

            <form onSubmit={handleUpdateAssignment}>
                <div className="flex gap-4 mb-8">
                    <div className='w-1/2'>
                        <p>Assignment Title</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Assignment Name' defaultValue={assignment.title} type="text" name="title" id="" />

                    </div>
                    <div className='w-1/2'>
                        <p>Difficulty Level</p>

                        <select name="difficulty" defaultValue={assignment.difficulty} className="select max-w-xs border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                </div>

                <div className='flex gap-4 mb-8'>
                    <div className='w-1/2'>
                        <p>Mark</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Mark' defaultValue={assignment.mark} type="text" name="mark" id="" />

                    </div>

                    <div className='w-1/2'>
                        <p>Due Date</p>
                        <DatePicker
                            className="border-2 rounded-md mt-2 px-4 border-solid  w-[200px] md:w-[370px] lg:w-[490px] h-[50px]" name="date" placeholderText="Due Date" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>

                </div>
                <div className='flex gap-4 mb-8'>
                    <div className='w-1/2'>
                        <p>Thumbnail Image URL</p>
                        <input className='border-2 px-4 rounded-md mt-2 border-solid w-full h-[50px]' placeholder='Thumbnail Image URL' defaultValue={assignment.photo} type="text" name="photo" id="" />

                    </div>
                    <div className='w-1/2'>
                        <p>Description</p>
                        <input className='border-2 rounded-md px-4 mt-2 border-solid w-full h-[50px]' placeholder='Description' defaultValue={assignment.description} type="text" name="description" id="" />

                    </div>


                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Update Assignment" />
            </form>

        </div>
    );
};

export default UpdateAssignment;