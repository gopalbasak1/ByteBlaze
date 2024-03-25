import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <div className=" h-16">
                <Navbar/>
            </div>
                 <div className=''>
                 <Outlet/>
                 </div>
                 <Footer></Footer>
        </div>
    );
};

export default MainLayout;