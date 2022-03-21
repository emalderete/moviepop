import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from './pages/Movies';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Details from './pages/Details';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/user' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/details' element={<Details></Details>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
