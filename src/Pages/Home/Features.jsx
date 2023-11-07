import { Link } from "react-router-dom";


const Features = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div  className="text-center my-8">
                <h2 className="text-[40px]  font-bold">Enhance Your  <span className="text-red-600">Learning</span></h2>

            </div>
            <div className="grid  lg:grid-cols-3 gap-6 ">
                <Link to="/liveclass">
                    <div className="bg-white rounded-sm px-4 py-2 cursor-pointer">
                        <img className="w-full rounded-md h-[350px]" src="https://i.ibb.co/sH0Fms7/live-class.jpg" alt="" />
                        <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Live Classes</h1>
                       
                    </div>
                </Link>
                <Link to="/courses">
                    <div className="bg-white rounded-sm px-4 py-2 cursor-pointer">
                        <img className="w-full rounded-md h-[350px]" src="https://i.ibb.co/2SHD9w0/online-course.jpg" alt="" />
                        <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Online Courses</h1>
                    </div>
                </Link>

                <Link to="/resource">
                    <div className="bg-white rounded-sm px-4 py-2 cursor-pointer">
                        <img className="w-full rounded-md h-[350px]" src="https://i.ibb.co/6WBztrH/library.jpg" alt="" />
                        <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Resource Library</h1>
                    </div>
                </Link>

                <Link to="/support">
                    <div className="bg-white rounded-sm px-4 py-2 cursor-pointer">
                        <img className="w-full rounded-md h-[350px]" src="https://i.ibb.co/Hx1tyCm/support.jpg" alt="" />
                        <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Instructor Support</h1>
                    </div>
                </Link>

                <Link to="/certificates">
                    <div className="bg-white rounded-sm px-4 py-2 cursor-pointer">
                        <img className="w-full rounded-md h-[350px]" src="https://i.ibb.co/yhWL5kf/cretificate.jpg" alt="" />
                        <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Certificates</h1>
                    </div>
                </Link>
                <Link to="/payment ">
                    <div className="bg-white rounded-sm px-4 py-2 cursor-pointer">
                        <img className="w-full rounded-md h-[350px]" src="https://i.ibb.co/CtrRm1q/payment.jpg" alt="" />
                        <h1 className="text-4xl font-semibold text-center mt-2 mb-2">Payment</h1>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Features;