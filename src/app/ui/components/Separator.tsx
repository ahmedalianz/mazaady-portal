import React, {FC} from 'react';
interface SeparatorProps {
  color?: string;
  gap?: string;
}
export const Separator: FC<SeparatorProps> = ({
  color = 'bg-gray5',
  gap = 'mx-[9px]',
}) => {
  return <span className={`w-[1px] h-full ${color} ${gap}`} />;
};
