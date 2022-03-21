import '../components/Components.css';
import cinema from '../img/cinema.svg';
import BackArrow from '../components/BackArrow';

const Details = () => {
    return (
        <div>
            <BackArrow></BackArrow>
            <section>
                <div className='detailsImgMainContainer'>
                    <div className='detailsImgContainer'>
                        <img className='detailsImg' src={cinema} alt=''></img>
                        <div className='starScore'>
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='detailsTitle'>Titulo</h4>
                    <div>
                        <ul className='detailsList'>
                            <li>Lenguaje:</li>
                            <li>Género:</li>
                            <li>Fecha de estreno:</li>
                        </ul>
                    </div>
                    <h4 className='detailsTitle'>Sinopsis</h4>
                    <p className='detailsText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi veniam ab quidem voluptatem dolorem odio rem 
                        impedit iusto expedita, aspernatur fugiat modi necessitatibus, ullam quam corrupti non minima eum cum sapiente 
                        ea dolores ipsam! Ducimus iure velit commodi corporis veritatis.</p>
                </div>
            </section>
        </div>
    );
};

export default Details;