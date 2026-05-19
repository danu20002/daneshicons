import React from 'react';

export const iconData = {
  "id": "CaeloReduce",
  "name": "CaeloReduce",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.76 12.51 L 16.64 15.01 L 16.44 20.71 L 11.71 17.52 L 6.68 20.20 L 7.08 14.51 L 2.24 11.49 L 7.36 8.99 L 7.56 3.29 L 12.29 6.48 L 17.32 3.80 L 16.92 9.49 Z"
      }
    ]
  ]
};

export const CaeloReduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.76 12.51 L 16.64 15.01 L 16.44 20.71 L 11.71 17.52 L 6.68 20.20 L 7.08 14.51 L 2.24 11.49 L 7.36 8.99 L 7.56 3.29 L 12.29 6.48 L 17.32 3.80 L 16.92 9.49 Z" />
      {children}
    </svg>
  );
});

export default CaeloReduce;
