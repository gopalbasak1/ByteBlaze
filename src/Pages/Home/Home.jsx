import Hero from "../../components/Hero/Hero";
import wave from '../../../src/assets/wave.svg'

const Home = () => {
    return (
        <div className='flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]'>
           <Hero/>
        <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </div>
    );
};

export default Home;