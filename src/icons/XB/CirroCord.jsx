import React from 'react';

export const iconData = {
  "id": "CirroCord",
  "name": "CirroCord",
  "category": "XB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.21 6.79 L 20.79 6.79 L 20.79 17.21 L 3.21 17.21 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.21 6.79 L 7.23 2.78 L 24.80 2.78 L 20.79 6.79"
      }
    ],
    [
      "path",
      {
        "d": "M 20.79 6.79 L 24.80 2.78 L 24.80 13.19 L 20.79 17.21"
      }
    ]
  ]
};

export const CirroCord = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.21 6.79 L 20.79 6.79 L 20.79 17.21 L 3.21 17.21 Z" />
      <path d="M 3.21 6.79 L 7.23 2.78 L 24.80 2.78 L 20.79 6.79" />
      <path d="M 20.79 6.79 L 24.80 2.78 L 24.80 13.19 L 20.79 17.21" />
      {children}
    </svg>
  );
});

export default CirroCord;
