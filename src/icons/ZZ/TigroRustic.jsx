import React from 'react';

export const iconData = {
  "id": "TigroRustic",
  "name": "TigroRustic",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 5.63 L 20.84 5.63 L 20.84 18.37 L 3.16 18.37 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.16 5.63 L 7.56 1.23 L 25.24 1.23 L 20.84 5.63"
      }
    ],
    [
      "path",
      {
        "d": "M 20.84 5.63 L 25.24 1.23 L 25.24 13.97 L 20.84 18.37"
      }
    ]
  ]
};

export const TigroRustic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 5.63 L 20.84 5.63 L 20.84 18.37 L 3.16 18.37 Z" />
      <path d="M 3.16 5.63 L 7.56 1.23 L 25.24 1.23 L 20.84 5.63" />
      <path d="M 20.84 5.63 L 25.24 1.23 L 25.24 13.97 L 20.84 18.37" />
      {children}
    </svg>
  );
});

export default TigroRustic;
