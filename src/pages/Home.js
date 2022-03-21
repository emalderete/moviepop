import cinema from '../img/cinema.svg';
import Navbar from '../components/Navbar';
import '../App.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mainContainer'>
                <div className='mainIcon'>
                    <img className='mainIconSvg' src={cinema} alt=""></img>
                </div>
                <h1 className='mainIconTitle'>MoviePop!</h1>
            </div>
        </div>
    );
};

export default Home;