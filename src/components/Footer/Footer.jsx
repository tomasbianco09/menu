import React from 'react'
import footerImg from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h3>Redes</h3>
        <div className="row">
          <a href="#"><i class='bx bxl-instagram' ></i></a>
          <a href="#"><i class='bx bxl-whatsapp' ></i></a>
        </div>
        <h3>Sucursales</h3>
        <div className="row">
          <ul>
            <li><i class='bx bx-map-pin'></i><a href="#">NoirburgerJoint - Mendoza</a></li>
            <li><i class='bx bx-map-pin'></i><a href="#">NoirburgerJoint - Cordoba</a></li>
            <li><i class='bx bx-map-pin'></i><a href="#">NoirburgerJoint - Buenos Aires</a></li>
            {/* <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li> */}
          </ul>
        </div>

        <div className="row">
        &copy; 2023 Tomas Bianco
        </div>
      </div>
    </footer>
  )
}

export default Footer