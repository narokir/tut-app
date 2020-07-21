import React from 'react';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import useAxiosGet from '../Hooks/HttpRequests';

function Home() {
  const url = `https://5f16959ba346a00016739000.mockapi.io/products?page=1&limit=5`;

  let content = null;
  let products = useAxiosGet(url);

  if (products.error) {
    content = <p>There has been an error</p>;
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div>
      <h1 className='font-bold text-2xl mb-2'>The Best Products</h1>
      {content}
    </div>
  );
}

export default Home;
