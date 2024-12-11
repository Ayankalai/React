import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AllProduct = ({ product, HandleDelete }) => {
  return (
    <Col md={4} sm={6} xs={12}>

        <div className="card mb-3 mt-3">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                <div className="d-flex justify-content-between">
                <button className="btn btn-danger" onClick={() => HandleDelete(product.id)}>
                    Delete 
                </button>
                <Link to={`/edit/${product?.id}`} className="btn btn-warning">
                    Edit 
                </Link>
                </div>
            </div>
            </div>
    
    </Col>
  )
}

export default AllProduct
