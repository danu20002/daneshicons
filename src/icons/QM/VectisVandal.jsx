import React from 'react';

export const iconData = {
  "id": "VectisVandal",
  "name": "VectisVandal",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 5.76 L 19.84 5.76 L 19.84 18.24 L 4.16 18.24 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.16 5.76 L 8.38 1.54 L 24.06 1.54 L 19.84 5.76"
      }
    ],
    [
      "path",
      {
        "d": "M 19.84 5.76 L 24.06 1.54 L 24.06 14.02 L 19.84 18.24"
      }
    ]
  ]
};

export const VectisVandal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 5.76 L 19.84 5.76 L 19.84 18.24 L 4.16 18.24 Z" />
      <path d="M 4.16 5.76 L 8.38 1.54 L 24.06 1.54 L 19.84 5.76" />
      <path d="M 19.84 5.76 L 24.06 1.54 L 24.06 14.02 L 19.84 18.24" />
      {children}
    </svg>
  );
});

export default VectisVandal;
