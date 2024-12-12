import React from 'react'
import img from '../assets/error.png'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h2>404</h2>
      <img src={img} alt="" />
      <h1>Look Like You're Lost</h1>
      <p>The page your looking for is not available</p>
      <Link to={'/'} className="btn btn-warning">Go To Home</Link>

    </div>
  )
}

export default Pnf
