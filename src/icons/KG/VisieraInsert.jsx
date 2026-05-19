import React from 'react';

export const iconData = {
  "id": "VisieraInsert",
  "name": "VisieraInsert",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.25 2.75 C 16.70 7.69, 18.24 12.91, 17.05 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.08 4.12 C 19.51 10.14, 9.29 5.13, 14.03 14.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 9.45 C 8.13 6.84, 8.64 4.34, 17.87 16.02"
      }
    ],
    [
      "path",
      {
        "d": "M 2.37 9.28 C 18.05 12.53, 13.88 19.32, 18.60 14.18"
      }
    ]
  ]
};

export const VisieraInsert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.25 2.75 C 16.70 7.69, 18.24 12.91, 17.05 21.76" />
      <path d="M 6.08 4.12 C 19.51 10.14, 9.29 5.13, 14.03 14.70" />
      <path d="M 6.39 9.45 C 8.13 6.84, 8.64 4.34, 17.87 16.02" />
      <path d="M 2.37 9.28 C 18.05 12.53, 13.88 19.32, 18.60 14.18" />
      {children}
    </svg>
  );
});

export default VisieraInsert;
