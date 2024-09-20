import React from 'react';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import ReservaForm from './Components/ReservaForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <header className="hero text-center text-white" id="inicio">
        <div className="container">
          <h1 className="display-4">Bienvenido a Restaurante Gourmet</h1>
          <p className="lead">Disfruta de la mejor cocina en un ambiente acogedor.</p>
        </div>
      </header>

      <Menu />

      <ReservaForm/>

      <Footer/>
    </>
  );
}

export default App;
