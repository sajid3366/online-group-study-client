import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllAssignments = ({ assignment, assignments, setAssignments }) => {
    const { _id, title, photo, mark, difficulty } = assignment;


    const handleDeleteAssignment = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {


                    fetch(`http://localhost:5000/assignment/${id}`, {
                        method: "DELETE",

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your coffee has been deleted.',
                                    'success'
                                )
                                const remaining = assignments.filter(assignment => assignment._id !== id);
                                setAssignments(remaining);
                            }
                        })
                }
            })
    }

    return (
        <div>
            <div className="bg-gray-100 rounded-lg mb-8 px-5 py-3 lg:flex gap-8">
                <img className="w-[450px] rounded-lg h-[250px]" src={photo} alt="" />
                <div className="lg:w-1/2">
                    <h2 className="text-2xl mt-5  mb-3 lg:mt-5 font-semibold">Title : {title}</h2>
                    <p className="text-xl mb-3">Difficuly : {difficulty}</p>
                    <p className="text-lg font-semibold">Mark : {mark}</p>
                    <div className="mt-10 lg:mt-14 flex gap-5 w-full">
                        <Link to={`/viewdetails/${_id}`}><p className="bg-red-600 text-xl font-semibold  text-white px-4 py-2 rounded-sm cursor-pointer">View Assignment</p></Link>
                        <Link to={`/update/${_id}`}>
                            <p className="border-red-600 border-2 text-xl font-semibold rounded-sm text-red-600 px-4 py-2  cursor-pointer">Update</p>
                        </Link>
                        <div onClick={() => handleDeleteAssignment(_id)} className="text-4xl ml-12 cursor-pointer ">
                            <MdDelete></MdDelete>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAssignments;