import React from 'react';
import data from '../data';
import { Link, useParams } from 'react-router-dom';

const ProductScreen = (props) => {
  const params =  useParams();
  const { id } = params;
  console.log(id)
  const product = data.products.find(x => (x._id) === id)
  console.log(data.products)
  console.log(`Type of id: ${typeof id}`); // Should be string
  console.log(`Type of product._id: ${typeof product?._id}`); // Should be string


  return (
    <div >
      <div className='back-to-result'>
        <Link to='/'>Back to results</Link>
      </div>
      <div className='details'>
        <div className='details.image'>
          <img src={product.image} alt='product' />
        </div>
        <div className='details-info'>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ( {product.numReviews} Reviews)
            </li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>
                {product.description}
              </div>
            </li>
          </ul>
        </div>
        <div className='details-action'>
          <ul>
            <li>
              Price: {product.price}
            </li>
            <li>
              Status: {product.status}
            </li>
            <li>
              Qty: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className='add-to-cart'>Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductScreen