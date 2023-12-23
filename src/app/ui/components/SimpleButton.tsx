import {bounce2Variants} from '@/app/lib/utils/motion';
import {motion} from 'framer-motion';
import {FC} from 'react';

interface SimpleButtonProps {
  title: string;
  active?: boolean;
  onClick?: (title: string) => void;
}
export const SimpleButton: FC<SimpleButtonProps> = ({
  title = '',
  active,
  onClick,
}) => {
  return (
    <motion.div
      variants={bounce2Variants}
      initial="initial"
      whileHover="animate">
      <button
        onClick={() => onClick && onClick(title)}
        className={`h-[35px] ${
          active ? 'bg-orange1 border-secondary' : 'bg-white border-gray5'
        } border-[1px] rounded-[14px] flex items-center justify-center px-6 py-3 gap-1`}>
        <p
          className={`text-sm font-normal md:text-base md:font-bold ${
            active ? 'text-secondary' : 'text-gray3'
          }`}>
          {title}
        </p>
      </button>
    </motion.div>
  );
};
