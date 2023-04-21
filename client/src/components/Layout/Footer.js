import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <h2 className='text-center'>
        All Right Reserverd © E-commerce </h2>
        <p className="text-center mt-">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
  )
}

export default Footer