import React from 'react';

export const iconData = {
  "id": "MelanoDoor",
  "name": "MelanoDoor",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 5.99 L 19.32 5.99 L 19.32 18.01 L 4.68 18.01 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.68 5.99 L 9.68 1.00 L 24.31 1.00 L 19.32 5.99"
      }
    ],
    [
      "path",
      {
        "d": "M 19.32 5.99 L 24.31 1.00 L 24.31 13.02 L 19.32 18.01"
      }
    ]
  ]
};

export const MelanoDoor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 5.99 L 19.32 5.99 L 19.32 18.01 L 4.68 18.01 Z" />
      <path d="M 4.68 5.99 L 9.68 1.00 L 24.31 1.00 L 19.32 5.99" />
      <path d="M 19.32 5.99 L 24.31 1.00 L 24.31 13.02 L 19.32 18.01" />
      {children}
    </svg>
  );
});

export default MelanoDoor;
