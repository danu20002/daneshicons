import React from 'react';

export const iconData = {
  "id": "ElitePotato",
  "name": "ElitePotato",
  "category": "FN",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.87 6.40 L 20.13 6.40 L 20.13 17.60 L 3.87 17.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 6.40 L 7.46 2.81 L 23.73 2.81 L 20.13 6.40"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 6.40 L 23.73 2.81 L 23.73 14.00 L 20.13 17.60"
      }
    ]
  ]
};

export const ElitePotato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.87 6.40 L 20.13 6.40 L 20.13 17.60 L 3.87 17.60 Z" />
      <path d="M 3.87 6.40 L 7.46 2.81 L 23.73 2.81 L 20.13 6.40" />
      <path d="M 20.13 6.40 L 23.73 2.81 L 23.73 14.00 L 20.13 17.60" />
      {children}
    </svg>
  );
});

export default ElitePotato;
