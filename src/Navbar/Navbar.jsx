import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogout = () => {
        logOut()
    }
    return (
        <nav className=" lg:flex justify-between items-center px-4 h-[100%] ">
            <div>
                <Link to="/">
                    <img className='w-full lg:w-[200px] cursor-pointer' src="https://i.ibb.co/JQLmnhr/logo-carhant.png" alt="" />
                </Link>
            </div>
            <div className='flex'>
                <ul className="flex justify-center mt-5 lg:mt-0 lg:ml-12 items-center gap-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                            }>
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/createassignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Create Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/assignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/myassignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            My Assignments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/submittedassignments" className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline font-bold" : isPending ? "pending" : ""
                        }>
                            Submitted Assignments
                        </NavLink>
                    </li>

                </ul>
                <div className="mt-5 lg:ml-10 flex justify-center items-center gap-2 lg:mt-0 py-2">

                    <div>
                        {
                            user ? <>

                                <div className="flex gap-2 items-center">

                                    {/* <p className="text-xl w-full flex  font-semibold">{user.displayName}</p> */}
                                    <img className={` w-[40px] h-[40px] rounded-full`} src={user.photoURL} alt="" />
                                    <div>
                                        <button onClick={handleLogout} className="  ml-2 bg-slate-300 rounded-sm  text-black px-4 py-2">Logout</button>
                                    </div>

                                </div>
                            </>
                                : <div className="w-1/3  items-center">
                                    <NavLink to='/login'><button className="bg-slate-300 rounded-sm text-black  px-4 py-2">Login</button></NavLink>
                                </div>
                        }
                    </div>



                </div>
            </div>


        </nav>
    );
};

export default Navbar;