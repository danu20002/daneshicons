import React from 'react';

export const iconData = {
  "id": "RegulaFennel",
  "name": "RegulaFennel",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.13 5.05 A 3.15 4.84 170 0 1 19.96 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 3.04 Q 8.98 20.73 10.65 8.89"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 16.20 C 7.52 3.32, 7.93 17.97, 11.86 20.24"
      }
    ]
  ]
};

export const RegulaFennel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.13 5.05 A 3.15 4.84 170 0 1 19.96 16.50" />
      <path d="M 14.15 3.04 Q 8.98 20.73 10.65 8.89" />
      <path d="M 5.38 16.20 C 7.52 3.32, 7.93 17.97, 11.86 20.24" />
      {children}
    </svg>
  );
});

export default RegulaFennel;
