import React from 'react';

export const iconData = {
  "id": "PlastoSock",
  "name": "PlastoSock",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.31 16.31 C 5.69 5.21, 9.97 21.71, 8.60 12.19"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 18.00 L 5.65 2.02"
      }
    ]
  ]
};

export const PlastoSock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.31 16.31 C 5.69 5.21, 9.97 21.71, 8.60 12.19" />
      <path d="M 7.64 18.00 L 5.65 2.02" />
      {children}
    </svg>
  );
});

export default PlastoSock;
