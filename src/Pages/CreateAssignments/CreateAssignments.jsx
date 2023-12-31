import { useContext, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";

const CreateAssignments = () => {
    const {user}= useContext(AuthContext)
    const [startDate, setStartDate] = useState();
    const [error, setError] = useState('');


    const handleCreateAssignment = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const difficulty = form.difficulty.value;
        const mark = parseInt(form.mark.value);
        const date = form.date.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const email = user.email;
        console.log(mark);
        
        setError('')

        if (isNaN(mark)) {
            return setError('Mark should be a number ');
        }
        if ( mark <=0) {
            return setError('Mark should be  greter than zero');
        }

        const newAssignment = {email, title, difficulty, mark, date, description, photo };
        console.log(newAssignment);

        

        fetch('https://online-group-study-server-gamma.vercel.app/assignment', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className='bg-white px-2 lg:px-[140px] py-12 mt-12 mb-12 rounded-md'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Create A New Assignment</h1>

            <form onSubmit={handleCreateAssignment}>
                <div className="flex gap-4 mb-8">
                    <div className='w-1/2'>
                        <p>Assignment Title</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Assignment Name' required type="text" name="title" id="" />

                    </div>
                    <div className='w-1/2'>
                        <p>Difficulty Level</p>
                        <select name="difficulty" required className="select max-w-xs border-gray-300 border-2 mt-2 rounded-md px-4 border-solid w-full h-[50px]">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>

                </div>

                <div className='flex gap-4 mb-8'>
                    <div className='w-1/2'>
                        <p>Mark</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='Mark' type="text" required name="mark" id="" />
                        <label className="label">
                        
                        <p>
                            {
                                error? <span className='text-red-600'>{error}</span> :""
                            }
                        </p>
                    </label>
                    </div>

                    <div className='w-1/2'>
                        <p>Due Date</p>
                        <DatePicker  required className="border-2 rounded-md mt-2 px-4 border-solid w-[200px] md:w-[370px] lg:w-[490px] h-[50px]"  name="date" placeholderText="Due Date" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>

                </div>
                <div className='flex gap-4 mb-8'>
                    <div className='w-1/2'>
                        <p>Thumbnail Image URL</p>
                        <input className='border-2 px-4 rounded-md mt-2 border-solid w-full h-[50px]' placeholder='Thumbnail Image URL' required type="text" name="photo" id="" />

                    </div>
                    <div className='w-1/2'>
                        <p>Description</p>
                        <input className='border-2  rounded-md px-4 mt-2 border-solid w-full h-[50px]' placeholder='Description' required type="text" name="description" id="" />

                    </div>


                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Creat Assignment" />
            </form>

        </div>
    );
};

export default CreateAssignments;