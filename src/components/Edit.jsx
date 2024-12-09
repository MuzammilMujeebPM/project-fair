import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import uploadProjectImage from '../assets/uploadimage.png'

const Edit = () => { 
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn">
       <i className="fa-solid fa-edit"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg' centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row align-items-center">
          <div className="col-lg-4">
            <label>
              <input style={{display:'none'}} type="file" />
              <img src={uploadProjectImage} alt="" className='img-fluid'/>
            </label>
            <div className="text-warning fw-bolder">
              "Upload only the following file types (jpeg, jpg, png) here!!"
            </div>
          </div>

          <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Title'/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Langueges'/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Overview'/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project github link'/>
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project website link'/>
              </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
