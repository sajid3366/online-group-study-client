import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    console.log(detail);
    useEffect(() => {
        const findAssignmentDetail = details.find(assignment => assignment._id == id);
        setDetail(findAssignmentDetail);
    }, [details, id])

    


    return (
        <div className='max-w-6xl md:flex gap-12 mx-auto mb-16 mt-12 px-3'>
            <img className='rounded-lg md:w-1/2 h-[50%]' src={detail.photo} alt="" />
            <div>

                <h1 className='text-4xl font-bold mt-4'>Title : {detail.title}</h1>
                <p className='text-xl font-semibold mt-3 mb-3'>Difficulty Level : {detail.difficulty}</p>
                <p className="mb-5 font-semibold">Assignment Mark : {detail.mark}</p>
                <p>{detail.description}</p>
                <Link to={`/submitassignment/${id}`}>
                    <p className='bg-red-600 text-white cursor-pointer  px-4 py-2 mt-[20px] w-[190px] rounded-md text-xl font-semibold'>Take Assignment</p>
                </Link>
            </div>
        </div>
    );
};

export default ViewDetails;