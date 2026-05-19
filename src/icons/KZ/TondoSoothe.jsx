import React from 'react';

export const iconData = {
  "id": "TondoSoothe",
  "name": "TondoSoothe",
  "category": "KZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.37 3.77 C 13.27 8.91, 12.78 17.92, 18.87 15.02"
      }
    ],
    [
      "path",
      {
        "d": "M 2.19 9.24 C 5.39 10.44, 8.33 4.01, 20.13 15.14"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 2.43 C 4.28 14.40, 15.12 18.30, 18.90 16.85"
      }
    ]
  ]
};

export const TondoSoothe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.37 3.77 C 13.27 8.91, 12.78 17.92, 18.87 15.02" />
      <path d="M 2.19 9.24 C 5.39 10.44, 8.33 4.01, 20.13 15.14" />
      <path d="M 8.14 2.43 C 4.28 14.40, 15.12 18.30, 18.90 16.85" />
      {children}
    </svg>
  );
});

export default TondoSoothe;
