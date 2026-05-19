import React from 'react';

export const iconData = {
  "id": "SeptiJupiter",
  "name": "SeptiJupiter",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.92 6.85 L 14.27 2.29 L 11.95 2.82 L 2.95 10.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.90 20.08 A 5.81 6.46 127 0 0 21.82 10.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 11.69 Q 10.81 18.52 12.67 3.97"
      }
    ]
  ]
};

export const SeptiJupiter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.92 6.85 L 14.27 2.29 L 11.95 2.82 L 2.95 10.95" />
      <path d="M 13.90 20.08 A 5.81 6.46 127 0 0 21.82 10.01" />
      <path d="M 5.80 11.69 Q 10.81 18.52 12.67 3.97" />
      {children}
    </svg>
  );
});

export default SeptiJupiter;
