import './Components.css';
import cinema from '../img/cinema.svg';

const MoviesContainer = () => {
    return (
        <div>
            <h6 className='movieTitle'>Películas</h6>
            <hr/>
            <div className='movieContainer'>
                <div className='movieSlab'>
                    <div>
                        <img className='img' src={cinema} alt=''></img>
                    </div>
                </div>
                <div className='movieSlab'>
                    <div>
                        <img className='img' src={cinema} alt=''></img>
                    </div>
                </div>
                <div className='movieSlab'>
                    <div>
                        <img className='img' src={cinema} alt=''></img>
                    </div>
                </div>
                <div className='movieSlab'>
                    <div>
                        <img className='img' src={cinema} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesContainer;