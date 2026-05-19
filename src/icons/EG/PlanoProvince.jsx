import React from 'react';

export const iconData = {
  "id": "PlanoProvince",
  "name": "PlanoProvince",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.09 8.24 L 8.12 7.92 L 8.76 1.90 L 12.78 6.42 L 17.87 3.17 L 16.84 9.13 L 22.56 11.09 L 17.26 14.00 L 19.30 19.69 L 13.72 17.36 L 10.54 22.50 L 8.88 16.69 L 2.88 17.40 L 6.39 12.48 Z"
      }
    ]
  ]
};

export const PlanoProvince = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.09 8.24 L 8.12 7.92 L 8.76 1.90 L 12.78 6.42 L 17.87 3.17 L 16.84 9.13 L 22.56 11.09 L 17.26 14.00 L 19.30 19.69 L 13.72 17.36 L 10.54 22.50 L 8.88 16.69 L 2.88 17.40 L 6.39 12.48 Z" />
      {children}
    </svg>
  );
});

export default PlanoProvince;
