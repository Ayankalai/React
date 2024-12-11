import React from 'react'
import AllProduct from './AllProduct';
import { Link } from 'react-router';
import { Row } from 'react-bootstrap'

const HomePage = ({products,setProducts}) => {

  
    const HandleDelete = (id) =>{
        console.log(id)
        const newdata = products.filter(product => product.id !== id)
        console.log(newdata)
        setProducts(newdata)
    }
    

  return (
    <div>
        <Link to={"/newProduct"} >
          <button className="btn btn-success" >New Product</button>
        </Link>
         <Row>
         {products.map(product => (
            
            <AllProduct 
                key={product.id}
                product={product} 
                HandleDelete= {HandleDelete}
            />

         ))}
         </Row>
         
    </div>
  )
}

export default HomePage