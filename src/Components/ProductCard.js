import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <div className='rounded overflow-hidden shadow-lg mb-4'>
      <Link to={`/products/${props.product.id}`}>
        <img
          className='w-full'
          src={props.product.images[0].imgurl}
          alt={props.product.title}
        />
      </Link>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{props.product.title}</div>
        <p className='text-gray-700 text-base'>{props.product.description}</p>
        <Link to={`/products/${props.product.id}`}>
          <div className='w-full rounded justify-center bg-blue-600 flex text-white p-2'>
            View
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
