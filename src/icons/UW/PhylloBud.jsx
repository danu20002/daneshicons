import React from 'react';

export const iconData = {
  "id": "PhylloBud",
  "name": "PhylloBud",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.42 6.11 L 20.58 6.11 L 20.58 17.89 L 3.42 17.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 6.11 L 6.76 2.77 L 23.92 2.77 L 20.58 6.11"
      }
    ],
    [
      "path",
      {
        "d": "M 20.58 6.11 L 23.92 2.77 L 23.92 14.55 L 20.58 17.89"
      }
    ]
  ]
};

export const PhylloBud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.42 6.11 L 20.58 6.11 L 20.58 17.89 L 3.42 17.89 Z" />
      <path d="M 3.42 6.11 L 6.76 2.77 L 23.92 2.77 L 20.58 6.11" />
      <path d="M 20.58 6.11 L 23.92 2.77 L 23.92 14.55 L 20.58 17.89" />
      {children}
    </svg>
  );
});

export default PhylloBud;
