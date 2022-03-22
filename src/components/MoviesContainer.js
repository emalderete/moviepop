import { useEffect, useState } from 'react';
import './Components.css';
import { Link } from 'react-router-dom';

const tvMaze = 'http://api.tvmaze.com/search/shows?q=star%20wars';

const MoviesContainer = () => {

    const [movies, setMovies] = useState(0);

        useEffect( async ()=>{
                const response = await fetch(tvMaze);
                if (response.status === 200) {
                    const data = await response.json();
                    setMovies(...data);
                }

                
        }, []);

        const mappingData = movies.map((movie, index)=>(
            <Link to='/details' key={index}>
                <div>
                    <img className='img' src={movie.show.image.medium} alt=''></img>
                </div>
                <h4 className='movieSlabTitle'>{movie.show.name}</h4>
            </Link>
            ));

    return(
        <div>
            <h6 className='movieTitle'>Películas</h6>
            <hr/>
            <div className='movieContainer'>
                <div className='movieSlab'>
                    {mappingData}
                </div>
            </div>
        </div>
    );
        
};

export default MoviesContainer;