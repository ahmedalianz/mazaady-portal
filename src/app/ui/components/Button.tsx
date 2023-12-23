import Image from 'next/image';
import React, {FC} from 'react';
interface ButtonProps {
  title: string;
  icon?: any;
}
export const Button: FC<ButtonProps> = ({title = '', icon}) => {
  return (
    <button className="h-[42px] red-orange-gradient rounded-[10px] flex items-center justify-center px-[16.5px] py-[10.5px] gap-1">
      {icon && (
        <Image
          src={icon}
          alt="button-icon"
          className="w-[18px] h-[18px] object-contain"
        />
      )}
      <p className="text-base font-bold">{title}</p>
    </button>
  );
};
