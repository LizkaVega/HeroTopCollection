import PropTypes from 'prop-types';
import { FooterComponent } from '../components/FooterComponent'
import { NavbarComponent } from '../components/NavBarComponent'
import { SliderComponent } from '../components/SliderComponent'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { DcComics } from '../pages/DcComics';


// se crea una estructura donde tengo la base de que se mostrara en cada pagina 
const Layout = ({ children }) => {
    const location = useLocation();
  
    return (
      <>
        <div className="min-h-screen w-full flex flex-col">
          <NavbarComponent />
          {location.pathname === '/' && <SliderComponent />}
          <main className="flex flex-grow items-center justify-center">{children}</main>
          <FooterComponent />
        </div>
      </>
    );
  };
  // Validación de props con PropTypes
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };





export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/dc_comics" element={<Layout><DcComics/></Layout>} />
        
    </Routes>
  )
}
