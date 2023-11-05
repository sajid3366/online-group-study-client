import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    console.log(detail);
    useEffect(() => {
        const findCarDetail = details.find(car => car._id == id);
        setDetail(findCarDetail);
    }, [details, id])
    return (
        <div className='max-w-6xl flex gap-12 mx-auto mb-16 mt-12 px-3'>
            <img className='rounded-lg w-1/2 h-[50%]' src={detail.photo} alt="" />
            <div>

                <h1 className='text-4xl font-bold mt-4'>Title : {detail.title}</h1>
                <p className='text-xl font-semibold mt-3 mb-5'>Difficulty Level : {detail.difficulty}</p>
                <p>Assignment Mark : {detail.mark}</p>
                <p>{detail.description}</p>
                <p className='bg-red-600 text-white cursor-pointer  px-4 py-2 mt-[120px] rounded-md text-xl font-semibold'>Take Assignment</p>
            </div>
        </div>
    );
};

export default ViewDetails;