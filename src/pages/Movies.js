import SearchingField from "../components/SearchingField";
import MoviesContainer from "../components/MoviesContainer";
import Navbar from "../components/Navbar";

const Movies = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchingField></SearchingField>
            <MoviesContainer></MoviesContainer>
        </div>
    );
};

export default Movies;