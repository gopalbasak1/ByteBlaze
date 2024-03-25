import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className=" h-16">
                <Navbar/>
            </div>
                 <Outlet/>
        </div>
    );
};

export default MainLayout;