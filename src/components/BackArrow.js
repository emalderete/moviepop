import './Components.css'
import { Link } from 'react-router-dom';

const BackArrow = () => {
    return (
        <div>
            <div className='navigation'>
                <Link to='/movies'><i className="icons fa-solid fa-arrow-left"></i></Link>
            </div>
        </div>
    );
};

export default BackArrow;