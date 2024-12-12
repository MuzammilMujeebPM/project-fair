import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
<div className="container border border-dark rounded">
<div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:'400px'}}>
            <h5> <i className="fa-solid fa-music me-2"></i>Project Fair</h5>
            <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}>Home</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'black'}}>Login</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'black'}}>Register</Link>
        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{textDecoration:'none',color:'black'}} href=''>React</a>
          <a style={{textDecoration:'none',color:'black'}} href=''>React Router</a>
          <a style={{textDecoration:'none',color:'black'}} href=''>React Bootstrap</a>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='Enter Your Email!!' type="text" className='form-control me-2'/>
            <button className="btn btn-info"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="https://x.com/?lang=en" target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="https://x.com/?lang=en" target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/?lang=en" target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/?lang=en" target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="https://x.com/?lang=en" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/?lang=en" target='_blank'><i className="fa-brands fa-phone"></i></a>
         </div>
        </div>
      </div>
      <p className="text-center mt-3">copyright &copy; July Batch, Project Fair. Built With React</p>
    </div>
</div>
    </>
  )
}

export default Footer
