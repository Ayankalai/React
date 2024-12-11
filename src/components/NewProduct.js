import React, { useState } from 'react'
import { useNavigate } from 'react-router';


const NewProduct = ({ products, setProducts}) => {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const id = products.length ? products[products.length -1].id + 1: 1
        const newproduct =  { id, title, description, price };
        const allProduct =  [...products, newproduct]
        setProducts(allProduct)
        setprice('')
        setdescription('')
        settitle('')
        localStorage.setItem("products",JSON.stringify(allProduct))
        navigate("/")

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <input type="text"
            name='title'
            value={title}
            onChange={(e) => settitle(e.target.value)} />
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input
                type="number"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
            />
        </div>
        <div>
            <button type="submit">Save Changes</button>
        </div>
    </form>

    {/* <h3>Product List:</h3>
            {products.map((p) => (
                <div key={p.id}>
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                    <p>Price: ${p.price}</p>
                </div>
            ))} */}
    </div>
  )
}

export default NewProduct