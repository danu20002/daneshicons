import React from 'react';

export const iconData = {
  "id": "ValutaQuite",
  "name": "ValutaQuite",
  "category": "JN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.23 3.55 C 5.66 12.59, 13.35 7.46, 14.43 16.18"
      }
    ],
    [
      "path",
      {
        "d": "M 7.65 7.91 C 19.21 6.68, 10.61 11.89, 16.99 21.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.50 3.97 C 7.35 4.80, 11.32 5.88, 15.33 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 6.31 C 14.67 18.96, 6.37 12.57, 21.68 15.79"
      }
    ]
  ]
};

export const ValutaQuite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.23 3.55 C 5.66 12.59, 13.35 7.46, 14.43 16.18" />
      <path d="M 7.65 7.91 C 19.21 6.68, 10.61 11.89, 16.99 21.28" />
      <path d="M 8.50 3.97 C 7.35 4.80, 11.32 5.88, 15.33 17.04" />
      <path d="M 4.92 6.31 C 14.67 18.96, 6.37 12.57, 21.68 15.79" />
      {children}
    </svg>
  );
});

export default ValutaQuite;
