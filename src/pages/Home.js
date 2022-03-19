import cinema from '../img/cinema.svg';
import '../App.css';

const Home = () => {
    return (
        <div className='mainContainer'>
            <div className='mainIcon'>
                <img className='mainIconSvg' src={cinema}></img>
            </div>
            <h1 className='mainIconTitle'>MoviePop!</h1>
        </div>
    );
};

export default Home;