'use client';

import {useState} from 'react';
import {images} from '../lib/constants';
import {Product} from './components';
import {SimpleButton} from './components/SimpleButton';

export const Products = () => {
  const [active, setActive] = useState('Products');
  const products = [
    {
      name: 'Six-piece clothing set (blouse - pants - hat and ...',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 1,
      image: images.product1,
    },
    {
      name: 'Six-piece clothing set (blouse - pants - hat and ...',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 2,
      image: images.product2,
    },
    {
      name: 'Jeep Car, new, used for only one time',
      price: 1000,
      label: 'Hot sale',
      labelColor: 'bg-secondary',
      id: 3,
      image: images.product3,
    },
    {
      name: 'Six-piece clothing set (blouse - pants - hat and ...',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 4,
      image: images.product4,
    },
    {
      name: 'Jeep Car, new, used for only one time',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 5,
      image: images.product5,
    },
    {
      name: 'Six-piece clothing set (blouse - pants - hat and ...',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 6,
      image: images.product1,
    },
    {
      name: 'Six-piece clothing set (blouse - pants - hat and ...',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 7,
      image: images.product2,
    },
    {
      name: 'Jeep Car, new, used for only one time',
      price: 1000,
      label: 'Hot sale',
      labelColor: 'bg-secondary',
      id: 8,
      image: images.product3,
    },
    {
      name: 'Six-piece clothing set (blouse - pants - hat and ...',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 9,
      image: images.product4,
    },
    {
      name: 'Jeep Car, new, used for only one time',
      price: 1000,
      label: 'Live auction',
      labelColor: 'bg-primary',
      id: 10,
      image: images.product5,
    },
  ];
  return (
    <div className="bg-white w-full flex flex-col p-6 my-6  rounded-3xl xl:container">
      <div className="flex gap-[10px] flex-wrap">
        <SimpleButton
          title="Products"
          active={active === 'Products'}
          onClick={setActive}
        />
        <SimpleButton
          title="Articles"
          active={active === 'Articles'}
          onClick={setActive}
        />
        <SimpleButton
          title="Reviews"
          active={active === 'Reviews'}
          onClick={setActive}
        />
      </div>
      <div className="flex items-center gap-2 mb-[13px] mt-3 md:mt-6">
        <h1 className="text-gray1 font-extrabold text-[32px]">Products</h1>
        <p className="text-gray3 font-normal text-sm">( {products.length} )</p>
      </div>
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          label={product.label}
          labelColor={product.labelColor}
          days="2"
          hours="10"
          mins="50"
        />
      ))}
    </div>
  );
};
