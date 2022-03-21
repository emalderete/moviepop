import { useEffect, useState } from 'react';
import './Components.css';
import cinema from '../img/cinema.svg';
import { Link } from 'react-router-dom';

const MoviesContainer = () => {

    const tvMaze = 'http://api.tvmaze.com/search/shows?q=star%20wars';

    const fetchAPI = async () => {
        const response = await fetch(tvMaze);
        
    }

    useEffect(()=>{
        fetchAPI();
    });

    return (
        <div>
            <h6 className='movieTitle'>Películas</h6>
            <hr/>
            <div className='movieContainer'>
                <div className='movieSlab'>
                    <Link to='/details'>
                        <div>
                            <img className='img' src={cinema} alt=''></img>
                        </div>
                        <h4 className='movieSlabTitle'>Título</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MoviesContainer;