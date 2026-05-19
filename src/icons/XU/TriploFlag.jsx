import React from 'react';

export const iconData = {
  "id": "TriploFlag",
  "name": "TriploFlag",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.42 5.99 L 19.58 5.99 L 19.58 18.01 L 4.42 18.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 5.99 L 8.67 1.74 L 23.83 1.74 L 19.58 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 19.58 5.99 L 23.83 1.74 L 23.83 13.76 L 19.58 18.01"
      }
    ]
  ]
};

export const TriploFlag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.42 5.99 L 19.58 5.99 L 19.58 18.01 L 4.42 18.01 Z" />
      <path d="M 4.42 5.99 L 8.67 1.74 L 23.83 1.74 L 19.58 5.99" />
      <path d="M 19.58 5.99 L 23.83 1.74 L 23.83 13.76 L 19.58 18.01" />
      {children}
    </svg>
  );
});

export default TriploFlag;
