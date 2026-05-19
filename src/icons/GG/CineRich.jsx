import React from 'react';

export const iconData = {
  "id": "CineRich",
  "name": "CineRich",
  "category": "GG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.01 5.70 L 19.99 5.70 L 19.99 18.30 L 4.01 18.30 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.01 5.70 L 7.18 2.53 L 23.17 2.53 L 19.99 5.70"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 5.70 L 23.17 2.53 L 23.17 15.12 L 19.99 18.30"
      }
    ]
  ]
};

export const CineRich = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.01 5.70 L 19.99 5.70 L 19.99 18.30 L 4.01 18.30 Z" />
      <path d="M 4.01 5.70 L 7.18 2.53 L 23.17 2.53 L 19.99 5.70" />
      <path d="M 19.99 5.70 L 23.17 2.53 L 23.17 15.12 L 19.99 18.30" />
      {children}
    </svg>
  );
});

export default CineRich;
