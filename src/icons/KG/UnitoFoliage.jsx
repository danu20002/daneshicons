import React from 'react';

export const iconData = {
  "id": "UnitoFoliage",
  "name": "UnitoFoliage",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.69 4.63 C 8.62 18.33, 13.83 14.32, 15.71 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 3.48 C 4.55 15.57, 4.89 18.23, 18.34 14.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.01 9.03 C 14.86 12.50, 19.47 14.21, 15.42 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.64 8.02 C 17.15 11.86, 8.14 13.44, 14.75 18.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.99 2.11 C 7.43 11.33, 17.92 19.87, 18.31 20.54"
      }
    ],
    [
      "path",
      {
        "d": "M 8.80 6.49 C 6.49 9.22, 6.95 5.76, 14.52 19.79"
      }
    ]
  ]
};

export const UnitoFoliage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.69 4.63 C 8.62 18.33, 13.83 14.32, 15.71 20.77" />
      <path d="M 3.72 3.48 C 4.55 15.57, 4.89 18.23, 18.34 14.55" />
      <path d="M 5.01 9.03 C 14.86 12.50, 19.47 14.21, 15.42 20.09" />
      <path d="M 2.64 8.02 C 17.15 11.86, 8.14 13.44, 14.75 18.21" />
      <path d="M 8.99 2.11 C 7.43 11.33, 17.92 19.87, 18.31 20.54" />
      <path d="M 8.80 6.49 C 6.49 9.22, 6.95 5.76, 14.52 19.79" />
      {children}
    </svg>
  );
});

export default UnitoFoliage;
