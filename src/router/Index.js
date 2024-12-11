import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import EditProduct from '../components/EditProduct';
import NewProduct from '../components/NewProduct';

const Index = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const res = await fetch("https://fakestoreapi.com/products")
    //         const data = await res.json()
    //         setProducts(data)
    //     }
    //     fetchdata()
    // }, []);

    

    
    
  return (
    <div className='p-2'>
     

      <Routes>
        <Route path="/" element={<HomePage 
          products = {products}
          setProducts = {setProducts}
        />} />

        <Route path="/newProduct" element={<NewProduct 
          products = {products}
          setProducts = {setProducts}
        /> } />
        <Route path="/edit/:id" element={<EditProduct 
          products = {products}
          setProducts = {setProducts}
        />} />
        
      </Routes>
    </div>
  )
}

export default Index