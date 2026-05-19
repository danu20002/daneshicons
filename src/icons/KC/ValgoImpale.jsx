import React from 'react';

export const iconData = {
  "id": "ValgoImpale",
  "name": "ValgoImpale",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.89 8.82 L 16.78 12.87 L 19.20 18.11 L 13.64 16.57 L 10.31 21.29 L 8.86 15.70 L 3.11 15.18 L 7.22 11.13 L 4.80 5.89 L 10.36 7.43 L 13.69 2.71 L 15.14 8.30 Z"
      }
    ]
  ]
};

export const ValgoImpale = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.89 8.82 L 16.78 12.87 L 19.20 18.11 L 13.64 16.57 L 10.31 21.29 L 8.86 15.70 L 3.11 15.18 L 7.22 11.13 L 4.80 5.89 L 10.36 7.43 L 13.69 2.71 L 15.14 8.30 Z" />
      {children}
    </svg>
  );
});

export default ValgoImpale;
