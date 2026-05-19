import React from 'react';

export const iconData = {
  "id": "UndosoCold",
  "name": "UndosoCold",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.82 7.07 C 6.76 19.81, 17.85 5.68, 16.19 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.31 3.44 C 14.29 12.17, 11.21 8.05, 20.31 18.68"
      }
    ],
    [
      "path",
      {
        "d": "M 4.92 2.38 C 4.01 10.97, 12.76 8.67, 14.58 19.16"
      }
    ],
    [
      "path",
      {
        "d": "M 8.98 3.93 C 9.88 6.17, 15.90 13.66, 17.77 20.31"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 4.95 C 6.40 7.08, 4.71 18.84, 21.99 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.63 5.56 C 19.42 16.85, 10.09 12.53, 21.90 14.04"
      }
    ]
  ]
};

export const UndosoCold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.82 7.07 C 6.76 19.81, 17.85 5.68, 16.19 20.65" />
      <path d="M 5.31 3.44 C 14.29 12.17, 11.21 8.05, 20.31 18.68" />
      <path d="M 4.92 2.38 C 4.01 10.97, 12.76 8.67, 14.58 19.16" />
      <path d="M 8.98 3.93 C 9.88 6.17, 15.90 13.66, 17.77 20.31" />
      <path d="M 6.45 4.95 C 6.40 7.08, 4.71 18.84, 21.99 20.79" />
      <path d="M 6.63 5.56 C 19.42 16.85, 10.09 12.53, 21.90 14.04" />
      {children}
    </svg>
  );
});

export default UndosoCold;
