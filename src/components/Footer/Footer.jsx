import React from 'react'
import footerImg from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <div maxW='1320px'>
      <div className='foOter'>
        <footer>
          <div className="footer-container">
            <Link to={"/"}>
              <img src={footerImg} alt="" width='65px' height='50px' />
            </Link>
            <span>&copy; 2023 Tomas Bianco</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer