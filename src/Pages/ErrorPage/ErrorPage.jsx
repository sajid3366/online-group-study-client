import Navbar from '../../Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className='mt-12 mb-12 text-center '>
                    <h2 className="text-8xl my-4">404</h2>
                    <h2 className='text-3xl my-4'>SORRY WE CAN'T FIND THAT PAGE!</h2>
                    <NavLink to='/'><button className='btn btn-primary'>Go Home</button></NavLink>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;