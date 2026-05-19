import React from 'react';

export const iconData = {
  "id": "VerdeJoy",
  "name": "VerdeJoy",
  "category": "ML",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 9.91 C 17.64 11.20, 13.90 12.30, 18.29 16.69"
      }
    ],
    [
      "path",
      {
        "d": "M 6.96 3.94 C 8.06 16.92, 13.92 18.31, 19.42 18.40"
      }
    ],
    [
      "path",
      {
        "d": "M 2.35 5.01 C 10.10 17.79, 14.06 8.82, 14.54 17.28"
      }
    ],
    [
      "path",
      {
        "d": "M 8.47 5.41 C 19.85 6.31, 8.86 15.46, 21.49 18.04"
      }
    ],
    [
      "path",
      {
        "d": "M 3.40 9.65 C 11.94 15.71, 7.89 13.64, 16.92 17.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.75 3.39 C 14.50 7.96, 10.17 14.10, 17.56 19.43"
      }
    ]
  ]
};

export const VerdeJoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 9.91 C 17.64 11.20, 13.90 12.30, 18.29 16.69" />
      <path d="M 6.96 3.94 C 8.06 16.92, 13.92 18.31, 19.42 18.40" />
      <path d="M 2.35 5.01 C 10.10 17.79, 14.06 8.82, 14.54 17.28" />
      <path d="M 8.47 5.41 C 19.85 6.31, 8.86 15.46, 21.49 18.04" />
      <path d="M 3.40 9.65 C 11.94 15.71, 7.89 13.64, 16.92 17.22" />
      <path d="M 6.75 3.39 C 14.50 7.96, 10.17 14.10, 17.56 19.43" />
      {children}
    </svg>
  );
});

export default VerdeJoy;
