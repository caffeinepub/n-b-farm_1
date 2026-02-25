import React from 'react';

interface RangoliDividerProps {
  className?: string;
  flip?: boolean;
}

const RangoliDivider: React.FC<RangoliDividerProps> = ({ className = '', flip = false }) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <img
        src="/assets/generated/rangoli-divider.dim_1200x120.png"
        alt="Decorative rangoli pattern divider"
        className="w-full h-auto max-h-20 object-cover"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default RangoliDivider;
