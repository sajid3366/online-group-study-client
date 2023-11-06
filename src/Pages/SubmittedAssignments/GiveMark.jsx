import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {

    const assignment = useLoaderData()
    console.log(assignment);
    const { link, mark, note } = assignment;
    const handleGiveMark = e => {
        e.preventDefault();

        const form = e.target;
        const feedback = form.feedback.value;
        const obtainedMark = form.mark.value;


        const assignmentMark = { feedback, obtainedMark, status: "Completed" }
        console.log(assignmentMark);

        fetch(`http://localhost:5000/myassignment/givemark/${assignment._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentMark)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Mark Given Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'

                    })

                }
            })

    }

    return (
        <div className='bg-white px-2 lg:px-[140px] py-12 mt-12 mb-12 rounded-md'>
            <h1 className='text-2xl font-semibold mb-8 text-center'>Assignment Marking</h1>
            <div className="mb-8">
                <h1 className="font-semibold mb-2 text-black text-lg">PDF Link : <span className="font-normal text-base">{link}</span></h1>
                <p className="font-semibold mb-2 text-black text-lg">Quick Note : <span className="font-normal text-base">{note}</span></p>
            </div>
            <form onSubmit={handleGiveMark}>
                <div className=" mb-4">
                    {/* <div className='md:w-1/2 mb-5'>
                        <p>Assignment PDF Link</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder='PDF' defaultValue={link} type="text" name="link" id="" />

                    </div> */}

                    <div className='w-full'>
                        <p>Mark</p>
                        <input className='border-2 rounded-md mt-2 border-solid px-4 w-full h-[50px]' placeholder={`Give Mark out of ${mark}`} type="text" name="mark" id="" />

                    </div>
                </div>

                <div className=' mb-8'>
                    <div className=''>
                        <p>Feedback</p>
                        <textarea placeholder="Feedback" className="border-2 border-solid px-4 py-1 rounded-md mt-2" name="feedback" id="" cols="129" rows="10"></textarea>
                    </div>
                </div>

                <input className='btn btn-block bg-slate-300' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default GiveMark;