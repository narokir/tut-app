import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import useAxiosGet from '../Hooks/HttpRequests';

function Product() {
  const { id } = useParams();
  const url = `https://5f16959ba346a00016739000.mockapi.io/products/${id}`;

  let content = null;
  let product = useAxiosGet(url);

  if (product.error) {
    content = <p>There has been an error</p>;
  }

  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className='mb-3 font-bold text-2xl'>{product.data.title}</h1>
        <div>
          <img
            className='w-full rounded'
            src={product.data.images[0].imgurl}
            alt={product.data.title}
          />
        </div>
        <span className='text-xl font-bold mb-3'>${product.data.price}</span>
        <p className='mb-3'>{product.data.description}</p>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
