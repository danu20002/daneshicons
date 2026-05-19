import React from 'react';

export const iconData = {
  "id": "TraumaMango",
  "name": "TraumaMango",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 8.66 0 1 0 17.31 0 a 8.66 8.66 0 1 0 -17.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 7.67 a 7.50 2.2489451780111396 0 1 0 14.99 0 a 7.50 2.2489451780111396 0 1 0 -14.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 12.00 a 8.66 2.5968582078348845 0 1 0 17.31 0 a 8.66 2.5968582078348845 0 1 0 -17.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 16.33 a 7.50 2.2489451780111396 0 1 0 14.99 0 a 7.50 2.2489451780111396 0 1 0 -14.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.33 4.50 A 2 2 0 0 0 16.33 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.33 4.50 A 2 2 0 0 1 16.33 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 4.50 A 2 2 0 0 0 7.67 19.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 4.50 A 2 2 0 0 1 7.67 19.50"
      }
    ]
  ]
};

export const TraumaMango = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 12.00 a 8.66 8.66 0 1 0 17.31 0 a 8.66 8.66 0 1 0 -17.31 0" />
      <path d="M 4.50 7.67 a 7.50 2.2489451780111396 0 1 0 14.99 0 a 7.50 2.2489451780111396 0 1 0 -14.99 0" />
      <path d="M 3.34 12.00 a 8.66 2.5968582078348845 0 1 0 17.31 0 a 8.66 2.5968582078348845 0 1 0 -17.31 0" />
      <path d="M 4.50 16.33 a 7.50 2.2489451780111396 0 1 0 14.99 0 a 7.50 2.2489451780111396 0 1 0 -14.99 0" />
      <path d="M 16.33 4.50 A 2 2 0 0 0 16.33 19.50" />
      <path d="M 16.33 4.50 A 2 2 0 0 1 16.33 19.50" />
      <path d="M 7.67 4.50 A 2 2 0 0 0 7.67 19.50" />
      <path d="M 7.67 4.50 A 2 2 0 0 1 7.67 19.50" />
      {children}
    </svg>
  );
});

export default TraumaMango;
