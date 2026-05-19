import React from 'react';

export const iconData = {
  "id": "PolarisReduce",
  "name": "PolarisReduce",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.47 3.43 L 20.86 9.37 L 19.58 17.29 L 12.59 21.22 L 5.16 18.21 L 2.88 10.53 L 7.46 3.95 Z"
      }
    ]
  ]
};

export const PolarisReduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.47 3.43 L 20.86 9.37 L 19.58 17.29 L 12.59 21.22 L 5.16 18.21 L 2.88 10.53 L 7.46 3.95 Z" />
      {children}
    </svg>
  );
});

export default PolarisReduce;
