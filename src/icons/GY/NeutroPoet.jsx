import React from 'react';

export const iconData = {
  "id": "NeutroPoet",
  "name": "NeutroPoet",
  "category": "GY",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 12.00 a 8.15 2.444104999070987 0 1 0 16.29 0 a 8.15 2.444104999070987 0 1 0 -16.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 4.94 A 2 2 0 0 0 16.07 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 16.07 4.94 A 2 2 0 0 1 16.07 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 4.94 A 2 2 0 0 0 7.93 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 7.93 4.94 A 2 2 0 0 1 7.93 19.06"
      }
    ]
  ]
};

export const NeutroPoet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 12.00 a 8.15 8.15 0 1 0 16.29 0 a 8.15 8.15 0 1 0 -16.29 0" />
      <path d="M 3.85 12.00 a 8.15 2.444104999070987 0 1 0 16.29 0 a 8.15 2.444104999070987 0 1 0 -16.29 0" />
      <path d="M 16.07 4.94 A 2 2 0 0 0 16.07 19.06" />
      <path d="M 16.07 4.94 A 2 2 0 0 1 16.07 19.06" />
      <path d="M 7.93 4.94 A 2 2 0 0 0 7.93 19.06" />
      <path d="M 7.93 4.94 A 2 2 0 0 1 7.93 19.06" />
      {children}
    </svg>
  );
});

export default NeutroPoet;
