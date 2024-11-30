import PropTypes from 'prop-types';
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "../pages/Home"
import { DcComics } from "../pages/DcComics"
import { Login } from "../pages/Login"
import { Marvel } from "../pages/Marvel"
import { FooterComponent } from "../components/FooterComponent"
import { NavbarComponent } from "../components/NavbarComponent"
import { Register } from '../pages/Register';
import { SliderComponent } from '../components/SliderComponent';
 import { DetailsPage } from '../pages/DetailsPage';
import Contact from '../pages/Contact';
import About from '../pages/About';
 import Cart from '../pages/Cart';
 import Checkout from '../pages/Checkout';
 import OrderConfirmation from '../pages/OrderConfirmation';

 import { PrivateRoute } from "../services/PrivateRoute";



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
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/dc_comics" element={<Layout><DcComics /></Layout>} />
        <Route path="/marvel" element={<Layout><Marvel /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/detail_product" element={<Layout><DetailsPage /></Layout>} />
        <Route path="/Contact" element={<Layout><Contact /></Layout>} />
        <Route path="/About" element={<Layout><About /></Layout>} />
        <Route path="/Cart" element={<Layout><Cart /></Layout>} />
        <Route path="/Checkout" element={<PrivateRoute><Layout><Checkout /></Layout></PrivateRoute>} />
        <Route path="/Confirm" element={<Layout><OrderConfirmation /></Layout>} />
    </Routes>
  )
}
