import React from 'react';

export const iconData = {
  "id": "QuantStation",
  "name": "QuantStation",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.17 7.99 C 5.55 12.92, 6.58 13.30, 20.30 19.95"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 7.51 C 9.85 16.00, 19.12 4.55, 19.33 16.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.20 8.75 C 8.53 9.28, 18.55 19.84, 21.69 15.71"
      }
    ]
  ]
};

export const QuantStation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.17 7.99 C 5.55 12.92, 6.58 13.30, 20.30 19.95" />
      <path d="M 2.81 7.51 C 9.85 16.00, 19.12 4.55, 19.33 16.61" />
      <path d="M 4.20 8.75 C 8.53 9.28, 18.55 19.84, 21.69 15.71" />
      {children}
    </svg>
  );
});

export default QuantStation;
