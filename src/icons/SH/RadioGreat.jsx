import React from 'react';

export const iconData = {
  "id": "RadioGreat",
  "name": "RadioGreat",
  "category": "SH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.02 6.64 C 12.18 10.20, 10.41 18.01, 15.64 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 5.14 C 16.91 19.52, 6.81 9.17, 21.52 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 7.65 C 4.14 13.24, 17.63 7.28, 21.76 20.17"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 4.35 C 12.34 14.98, 5.09 9.46, 21.13 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 6.47 7.01 C 8.86 4.51, 9.04 14.52, 17.53 14.53"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 8.28 C 19.20 10.34, 16.03 12.82, 21.01 19.91"
      }
    ]
  ]
};

export const RadioGreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.02 6.64 C 12.18 10.20, 10.41 18.01, 15.64 20.50" />
      <path d="M 3.75 5.14 C 16.91 19.52, 6.81 9.17, 21.52 15.03" />
      <path d="M 8.28 7.65 C 4.14 13.24, 17.63 7.28, 21.76 20.17" />
      <path d="M 7.40 4.35 C 12.34 14.98, 5.09 9.46, 21.13 17.04" />
      <path d="M 6.47 7.01 C 8.86 4.51, 9.04 14.52, 17.53 14.53" />
      <path d="M 3.95 8.28 C 19.20 10.34, 16.03 12.82, 21.01 19.91" />
      {children}
    </svg>
  );
});

export default RadioGreat;
