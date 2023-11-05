import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const AllAssignments = ({assignment}) => {
    const {_id, title, photo, mark, difficulty} = assignment;
    return (
        <div>
            <div className="bg-gray-100 rounded-lg mb-8 px-5 py-3 lg:flex gap-12">
                        <img className="w-[450px] rounded-lg h-[250px]" src={photo} alt="" />
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl mt-5  mb-3 lg:mt-5 font-semibold">Title : {title}</h2>
                            <p className="text-xl mb-3">Difficuly : {difficulty}</p>
                            <p className="text-lg font-semibold">Mark : {mark}</p>
                            <div className="mt-10 lg:mt-14 flex gap-5 w-full">
                                <Link to={`/viewdetails/${_id}`}><p className="bg-red-600 text-xl font-semibold  text-white px-4 py-2 rounded-sm cursor-pointer">View Assignment</p></Link>
                                <Link to={`/update/${_id}`}>
                                    <p className="border-red-600 border-2 text-xl font-semibold rounded-sm text-red-600 px-4 py-2  cursor-pointer">Update</p>
                                </Link>
                                <div className="text-4xl ml-12 cursor-pointer ">
                                <MdDelete></MdDelete>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default AllAssignments;