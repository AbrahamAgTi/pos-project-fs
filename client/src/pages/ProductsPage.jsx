import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function ProductsPage() {

    const getAllProducts = () => {
        // Get the token from the localStorage
        const storedToken = localStorage.getItem("authToken");

        // Send the token through the request "Authorization" Headers
        axios
            .get(
                `${API_URL}/products`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    };

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className='products-page'>
            <h1>Available Products</h1>

            <ul className='products-list'>
                {products.map((product) => (
                    <li className='product' key={product._id}>
                        <Link to={`/products/${product._id}`}> {product.name} </Link>
                        <div className='actions'>
                            <button>See Details</button>
                            <button>Add To Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsPage