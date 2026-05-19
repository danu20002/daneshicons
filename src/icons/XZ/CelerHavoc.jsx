import React from 'react';

export const iconData = {
  "id": "CelerHavoc",
  "name": "CelerHavoc",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.51 1.69 L 14.50 7.41 L 20.39 5.97 L 17.14 11.09 L 21.94 14.80 L 15.92 15.46 L 16.01 21.52 L 11.74 17.22 L 7.06 21.07 L 7.76 15.05 L 1.83 13.79 L 6.97 10.59 L 4.26 5.17 L 9.97 7.19 Z"
      }
    ]
  ]
};

export const CelerHavoc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.51 1.69 L 14.50 7.41 L 20.39 5.97 L 17.14 11.09 L 21.94 14.80 L 15.92 15.46 L 16.01 21.52 L 11.74 17.22 L 7.06 21.07 L 7.76 15.05 L 1.83 13.79 L 6.97 10.59 L 4.26 5.17 L 9.97 7.19 Z" />
      {children}
    </svg>
  );
});

export default CelerHavoc;
