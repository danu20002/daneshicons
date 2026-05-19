import React from 'react';

export const iconData = {
  "id": "TabulaCheckout",
  "name": "TabulaCheckout",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.58 6.85 L 12.58 6.85"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 11.61 L 16.17 15.08"
      }
    ],
    [
      "path",
      {
        "d": "M 9.25 17.54 L 7.25 14.07"
      }
    ]
  ]
};

export const TabulaCheckout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.58 6.85 L 12.58 6.85" />
      <path d="M 18.17 11.61 L 16.17 15.08" />
      <path d="M 9.25 17.54 L 7.25 14.07" />
      {children}
    </svg>
  );
});

export default TabulaCheckout;
