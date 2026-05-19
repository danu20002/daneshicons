import React from 'react';

export const iconData = {
  "id": "StridoJune",
  "name": "StridoJune",
  "category": "PJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.58 5.72 C 18.39 14.29, 16.22 13.66, 15.85 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 6.50 7.80 C 10.09 13.91, 10.99 19.08, 14.52 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 5.83 C 14.50 13.45, 17.99 4.79, 15.18 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.48 2.69 C 16.88 13.49, 18.28 10.11, 16.28 21.31"
      }
    ]
  ]
};

export const StridoJune = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.58 5.72 C 18.39 14.29, 16.22 13.66, 15.85 16.92" />
      <path d="M 6.50 7.80 C 10.09 13.91, 10.99 19.08, 14.52 21.49" />
      <path d="M 3.60 5.83 C 14.50 13.45, 17.99 4.79, 15.18 18.78" />
      <path d="M 6.48 2.69 C 16.88 13.49, 18.28 10.11, 16.28 21.31" />
      {children}
    </svg>
  );
});

export default StridoJune;
