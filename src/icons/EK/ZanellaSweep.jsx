import React from 'react';

export const iconData = {
  "id": "ZanellaSweep",
  "name": "ZanellaSweep",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.51 2.55 C 4.95 14.61, 10.77 16.90, 17.25 19.97"
      }
    ],
    [
      "path",
      {
        "d": "M 8.44 2.77 C 18.35 6.36, 16.39 18.72, 14.90 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.17 6.92 C 5.48 19.99, 14.09 7.98, 21.17 17.21"
      }
    ]
  ]
};

export const ZanellaSweep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.51 2.55 C 4.95 14.61, 10.77 16.90, 17.25 19.97" />
      <path d="M 8.44 2.77 C 18.35 6.36, 16.39 18.72, 14.90 20.30" />
      <path d="M 4.17 6.92 C 5.48 19.99, 14.09 7.98, 21.17 17.21" />
      {children}
    </svg>
  );
});

export default ZanellaSweep;
