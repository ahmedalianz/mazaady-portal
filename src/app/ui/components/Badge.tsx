import {classes} from '@/app/lib/constants';
import Image from 'next/image';
import React, {FC} from 'react';
interface BadgeProps {
  icon: any;
  title: string;
  subtitle?: string;
  bold?: boolean;
  miniLabel?: string;
}
export const Badge: FC<BadgeProps> = ({
  icon,
  title,
  subtitle,
  miniLabel,
  bold,
}) => {
  return (
    <div className="rounded-[18px] bg-orange1 px-3 py-[18px] flex items-center gap-2">
      {icon && <Image src={icon} alt="badge-icon" className={classes.icon} />}
      <div>
        <div className="flex gap-1">
          <p
            className={`text-gray1 ${
              bold ? 'text-sm font-bold' : 'text-xs font-normal'
            }`}>
            {title}
          </p>
          {miniLabel && (
            <p className="text-gray3 text-[10px] font-normal leading-4">
              {miniLabel}
            </p>
          )}
        </div>
        {subtitle && (
          <p className="text-secondary text-xs font-normal">{subtitle}</p>
        )}
      </div>
    </div>
  );
};
