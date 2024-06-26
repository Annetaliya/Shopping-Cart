import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const HomeScreen = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/products/');
            if (response.status !== 200) {
              throw new Error(`HTTP error! ${response.status}`);
            }
            const results = response.data;
            setProducts(results);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchData();
      }, []);
  return (
    <div>
        <ul className="products">

            {products.map((product) => (
                <li>
                    <div className="product" key={product._id}>
                        <Link to={'/product/' + product._id}>
                            <img src={product.image} alt=""/>
                        </Link>
                        
                        <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                            
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">${product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>

                    </div>
                </li>

            ))}
                      
        </ul>
    </div>
  )
}

export default HomeScreen