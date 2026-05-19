import React from 'react';

export const iconData = {
  "id": "TurcheseLot",
  "name": "TurcheseLot",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.91 4.08 C 14.87 10.82, 19.64 16.99, 17.97 20.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.02 5.92 C 18.74 11.28, 4.77 18.28, 19.66 18.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 8.55 C 15.92 12.54, 11.94 16.35, 18.27 16.14"
      }
    ]
  ]
};

export const TurcheseLot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.91 4.08 C 14.87 10.82, 19.64 16.99, 17.97 20.24" />
      <path d="M 2.02 5.92 C 18.74 11.28, 4.77 18.28, 19.66 18.86" />
      <path d="M 7.72 8.55 C 15.92 12.54, 11.94 16.35, 18.27 16.14" />
      {children}
    </svg>
  );
});

export default TurcheseLot;
