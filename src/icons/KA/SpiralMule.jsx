import React from 'react';

export const iconData = {
  "id": "SpiralMule",
  "name": "SpiralMule",
  "category": "KA",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.30 3.61 L 19.37 7.79 L 19.89 15.14 L 14.47 20.13 L 7.18 19.00 L 3.53 12.60 L 6.25 5.75 Z"
      }
    ]
  ]
};

export const SpiralMule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.30 3.61 L 19.37 7.79 L 19.89 15.14 L 14.47 20.13 L 7.18 19.00 L 3.53 12.60 L 6.25 5.75 Z" />
      {children}
    </svg>
  );
});

export default SpiralMule;
