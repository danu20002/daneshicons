import React from 'react';

export const iconData = {
  "id": "MetaSocial",
  "name": "MetaSocial",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.99 6.82 C 5.60 14.01, 4.64 7.77, 16.06 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.27 C 17.01 7.19, 4.72 5.78, 16.72 16.74"
      }
    ],
    [
      "path",
      {
        "d": "M 9.82 5.19 C 13.68 8.46, 6.35 16.46, 16.79 21.97"
      }
    ]
  ]
};

export const MetaSocial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.99 6.82 C 5.60 14.01, 4.64 7.77, 16.06 15.40" />
      <path d="M 7.84 4.27 C 17.01 7.19, 4.72 5.78, 16.72 16.74" />
      <path d="M 9.82 5.19 C 13.68 8.46, 6.35 16.46, 16.79 21.97" />
      {children}
    </svg>
  );
});

export default MetaSocial;
