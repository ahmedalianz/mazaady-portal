import {FC} from 'react';
interface SimpleBadgeProps {
  title?: string;
  subtitle?: string;
}
export const SimpleBadge: FC<SimpleBadgeProps> = ({title, subtitle}) => {
  return (
    <div className="rounded-[18px] bg-orange1 py-[6px] px-[12px] flex items-center gap-1">
      {title && (
        <p className="text-secondary text-xs md:text-xl font-bold">{title}</p>
      )}
      {subtitle && (
        <p className="text-secondary text-[8px] md:text-sm font-bold">
          {subtitle}
        </p>
      )}
    </div>
  );
};
