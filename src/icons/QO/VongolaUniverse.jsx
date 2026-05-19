import React from 'react';

export const iconData = {
  "id": "VongolaUniverse",
  "name": "VongolaUniverse",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 7.46 L 9.55 3.14 L 16.54 4.00 L 20.86 9.55 L 20.00 16.54 L 14.45 20.86 L 7.46 20.00 L 3.14 14.45 Z"
      }
    ]
  ]
};

export const VongolaUniverse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 4.00 7.46 L 9.55 3.14 L 16.54 4.00 L 20.86 9.55 L 20.00 16.54 L 14.45 20.86 L 7.46 20.00 L 3.14 14.45 Z" />
      {children}
    </svg>
  );
});

export default VongolaUniverse;
