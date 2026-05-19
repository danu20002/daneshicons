import React from 'react';

export const iconData = {
  "id": "PaleoGrowl",
  "name": "PaleoGrowl",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.53 3.22 L 20.00 7.58 L 20.78 14.53 L 16.42 20.00 L 9.47 20.78 L 4.00 16.42 L 3.22 9.47 L 7.58 4.00 Z"
      }
    ]
  ]
};

export const PaleoGrowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.53 3.22 L 20.00 7.58 L 20.78 14.53 L 16.42 20.00 L 9.47 20.78 L 4.00 16.42 L 3.22 9.47 L 7.58 4.00 Z" />
      {children}
    </svg>
  );
});

export default PaleoGrowl;
