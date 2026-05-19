import React from 'react';

export const iconData = {
  "id": "GastroSock",
  "name": "GastroSock",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 6.23 L 20.30 6.23 L 20.30 17.77 L 3.70 17.77 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 6.23 L 7.23 2.70 L 23.82 2.70 L 20.30 6.23"
      }
    ],
    [
      "path",
      {
        "d": "M 20.30 6.23 L 23.82 2.70 L 23.82 14.24 L 20.30 17.77"
      }
    ]
  ]
};

export const GastroSock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 6.23 L 20.30 6.23 L 20.30 17.77 L 3.70 17.77 Z" />
      <path d="M 3.70 6.23 L 7.23 2.70 L 23.82 2.70 L 20.30 6.23" />
      <path d="M 20.30 6.23 L 23.82 2.70 L 23.82 14.24 L 20.30 17.77" />
      {children}
    </svg>
  );
});

export default GastroSock;
