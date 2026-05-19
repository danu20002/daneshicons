import React from 'react';

export const iconData = {
  "id": "UredoDial",
  "name": "UredoDial",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.13 12.00 L 18.87 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.13 L 12.00 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 7.19 L 16.81 16.81"
      }
    ],
    [
      "path",
      {
        "d": "M 7.19 16.81 L 16.81 7.19"
      }
    ],
    [
      "path",
      {
        "d": "M 1.01 12.00 a 10.99 10.99 0 1 0 21.97 0 a 10.99 10.99 0 1 0 -21.97 0"
      }
    ]
  ]
};

export const UredoDial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.13 12.00 L 18.87 12.00" />
      <path d="M 12.00 5.13 L 12.00 18.87" />
      <path d="M 7.19 7.19 L 16.81 16.81" />
      <path d="M 7.19 16.81 L 16.81 7.19" />
      <path d="M 1.01 12.00 a 10.99 10.99 0 1 0 21.97 0 a 10.99 10.99 0 1 0 -21.97 0" />
      {children}
    </svg>
  );
});

export default UredoDial;
