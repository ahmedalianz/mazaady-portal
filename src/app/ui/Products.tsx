'use client';

import {useState} from 'react';
import {images} from '../lib/constants';
import {Product} from './components';
import {SimpleButton} from './components/SimpleButton';

export const Products = () => {
  const [active, setActive] = useState('Products');

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
        <p className="text-gray3 font-normal text-sm">( 12 )</p>
      </div>
      <Product
        name="Six-piece clothing set (blouse - pants - hat and dqwd qwdqwd dqwd qwd qwddq w"
        price={23}
        image={images.user}
        label={'Live auction'}
        labelColor="bg-primary"
        days="2"
        hours="10"
        mins="50"
      />
    </div>
  );
};
