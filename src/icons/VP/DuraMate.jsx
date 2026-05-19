import React from 'react';

export const iconData = {
  "id": "DuraMate",
  "name": "DuraMate",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 5.25 L 19.83 5.25 L 19.83 18.75 L 4.17 18.75 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 5.25 L 7.42 2.00 L 23.08 2.00 L 19.83 5.25"
      }
    ],
    [
      "path",
      {
        "d": "M 19.83 5.25 L 23.08 2.00 L 23.08 15.50 L 19.83 18.75"
      }
    ]
  ]
};

export const DuraMate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 5.25 L 19.83 5.25 L 19.83 18.75 L 4.17 18.75 Z" />
      <path d="M 4.17 5.25 L 7.42 2.00 L 23.08 2.00 L 19.83 5.25" />
      <path d="M 19.83 5.25 L 23.08 2.00 L 23.08 15.50 L 19.83 18.75" />
      {children}
    </svg>
  );
});

export default DuraMate;
