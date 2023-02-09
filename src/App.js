
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Main from './components/Main';
import Menu from './components/Menu';
import BookTable from './components/BookTable';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import lemon from './assets/little_lemon_logo.png';


function App() {

  useEffect (() => { document.title = "Little Lemon" },[]);

  return (
    <>
    <ChakraProvider>
    <div className='mainDiv'>
    <nav className='nawigacja'>
            <Link to="/"><img className="lemonImage" src={lemon} alt="lemon"></img></Link>
            <Link to="/specials" className="nav-item">Specials</Link>
            <Link to="/bookTable" className="nav-item">Book Table</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
    </nav>
    <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/specials" element={<Main />} />
                <Route path="/bookTable" element={<BookTable />} />
                <Route path="/menu" element={<Menu />} />
    </Routes>
    <Footer />
    </div>
    </ChakraProvider>
    </>
  );
}

export default App;
