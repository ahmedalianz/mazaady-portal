import {classes, icons} from '@/app/lib/constants';
import Image from 'next/image';
import React, {FC, useState} from 'react';
import {motion} from 'framer-motion';
import {SimpleBadge} from './SimpleBadge';
import {bounceVariants} from '../../lib/utils/motion';

interface ProductProps {
  image: any;
  name: string;
  price: number;
  days?: string;
  hours?: string;
  mins?: string;
  onLove?: () => void;
  label?: string;
  labelColor?: string;
}
export const Product: FC<ProductProps> = ({
  image,
  name,
  price,
  days,
  hours,
  mins,
  onLove,
  label,
  labelColor,
}) => {
  const [loved, setLoved] = useState(false);

  return (
    <div className="p-2 flex items-start justify-between gap-2">
      <div className="flex gap-4">
        <div className="relative w-[87px] h-[73px] md:w-[145px]  md:h-[124px]">
          <Image
            src={image}
            alt="product-image"
            className="w-[87px] h-[73px] md:w-[145px] md:h-[124px] rounded-[15px] md:rounded-[28px]"
          />
          {label && (
            <span
              className={`${labelColor} angled-radius px-[5px] py-[5px] md:px-[10px] w-2/3 text-center absolute bottom-0 right-0 font-normal text-[5px] sm:text-[8px] md:text-xs`}>
              {label}
            </span>
          )}
          <motion.div
            variants={bounceVariants}
            initial="initial"
            whileTap="animate"
            className="cursor-pointer md:hidden absolute top-1 left-1"
            onClick={() => {
              setLoved(prev => !prev);
              onLove && onLove();
            }}>
            <Image
              src={loved ? icons.heartColored : icons.heart}
              alt="product-image"
              className={classes.miniIcon + ' bg-white rounded-full p-[3px]'}
            />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray1 text-xs md:text-lg font-normal text-pretty">
            {name.length > 48 ? name.substring(0, 48) + ' ...' : name}
          </p>
          <div className="flex gap-2 my-2 items-center">
            <p className="text-gray3 text-xs md:text-lg font-normal">
              Starting Price
            </p>
            <p className="text-gray1 text-xs md:text-2xl font-bold">
              {price} EGP
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            <p className="text-gray3 text-xs md:text-lg font-normal">
              Lot Starts In
            </p>
            <div className="flex gap-4 flex-wrap">
              <SimpleBadge title={days} subtitle="Days" />
              <SimpleBadge title={hours} subtitle="Hours" />
              <SimpleBadge title={mins} subtitle="Minutes" />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        variants={bounceVariants}
        initial="initial"
        whileHover="animate"
        className="cursor-pointer md:block hidden"
        onClick={() => {
          setLoved(prev => !prev);
          onLove && onLove();
        }}>
        <Image
          src={loved ? icons.heartColored : icons.heart}
          alt="product-image"
          className={classes.icon}
        />
      </motion.div>
    </div>
  );
};
