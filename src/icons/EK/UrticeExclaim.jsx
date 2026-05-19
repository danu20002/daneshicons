import React from 'react';

export const iconData = {
  "id": "UrticeExclaim",
  "name": "UrticeExclaim",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 6.75 C 10.60 4.67, 15.24 12.73, 19.68 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 9.93 2.92 C 9.40 19.12, 16.92 7.89, 19.89 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 7.80 2.59 C 16.12 4.80, 10.87 18.33, 15.12 21.82"
      }
    ]
  ]
};

export const UrticeExclaim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 6.75 C 10.60 4.67, 15.24 12.73, 19.68 19.06" />
      <path d="M 9.93 2.92 C 9.40 19.12, 16.92 7.89, 19.89 16.48" />
      <path d="M 7.80 2.59 C 16.12 4.80, 10.87 18.33, 15.12 21.82" />
      {children}
    </svg>
  );
});

export default UrticeExclaim;
