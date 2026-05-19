import React from 'react';

export const iconData = {
  "id": "VertebraWood",
  "name": "VertebraWood",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 2.24 C 11.49 5.02, 5.96 7.23, 19.09 21.48"
      }
    ],
    [
      "path",
      {
        "d": "M 2.15 7.83 C 13.91 19.37, 19.21 4.34, 21.01 14.73"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 3.85 C 14.92 5.55, 15.40 5.33, 21.82 14.07"
      }
    ],
    [
      "path",
      {
        "d": "M 2.21 2.29 C 11.32 18.90, 10.65 7.49, 14.39 17.32"
      }
    ],
    [
      "path",
      {
        "d": "M 3.74 9.21 C 5.51 13.75, 17.80 12.83, 20.16 18.80"
      }
    ],
    [
      "path",
      {
        "d": "M 7.24 9.82 C 15.97 9.16, 16.04 10.63, 14.94 16.84"
      }
    ]
  ]
};

export const VertebraWood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 2.24 C 11.49 5.02, 5.96 7.23, 19.09 21.48" />
      <path d="M 2.15 7.83 C 13.91 19.37, 19.21 4.34, 21.01 14.73" />
      <path d="M 8.55 3.85 C 14.92 5.55, 15.40 5.33, 21.82 14.07" />
      <path d="M 2.21 2.29 C 11.32 18.90, 10.65 7.49, 14.39 17.32" />
      <path d="M 3.74 9.21 C 5.51 13.75, 17.80 12.83, 20.16 18.80" />
      <path d="M 7.24 9.82 C 15.97 9.16, 16.04 10.63, 14.94 16.84" />
      {children}
    </svg>
  );
});

export default VertebraWood;
