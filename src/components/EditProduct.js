import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const EditProduct = ({products,setProducts}) => {
    const { id } = useParams()
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const navigate = useNavigate();
    // console.log(id)
 
    const finded_product = products.find( product =>{
        // console.log("product.id",product.id)
        return (product.id).toString() === id
    })
    // console.log("finded_product",finded_product)

    useEffect(() => {
        if (finded_product) {
            settitle(finded_product.title)
            setprice(finded_product.price)
            setdescription(finded_product.description)
        }
    }, [finded_product,settitle,setprice,setdescription]);
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const update = {id,title,description,price}
        console.log(update)
        
        const updatedData = products.map(product => {
            return (product.id) === id? update: product
        })
        setProducts(updatedData)
        navigate("/")
    }
  return (
    <div>
    <h1>Edit Product</h1>
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
    {products.id}
</div>
);
};

export default EditProduct