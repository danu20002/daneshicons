import React from 'react';

export const iconData = {
  "id": "UngePuzzle",
  "name": "UngePuzzle",
  "category": "CF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.49 4.13 C 8.51 6.36, 16.14 11.73, 19.47 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 4.31 5.96 C 7.75 11.96, 17.66 14.62, 14.72 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.56 7.48 C 17.56 18.76, 16.11 17.82, 15.00 14.75"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 2.13 C 8.45 10.48, 10.40 6.51, 14.03 21.66"
      }
    ]
  ]
};

export const UngePuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.49 4.13 C 8.51 6.36, 16.14 11.73, 19.47 20.97" />
      <path d="M 4.31 5.96 C 7.75 11.96, 17.66 14.62, 14.72 19.87" />
      <path d="M 9.56 7.48 C 17.56 18.76, 16.11 17.82, 15.00 14.75" />
      <path d="M 4.49 2.13 C 8.45 10.48, 10.40 6.51, 14.03 21.66" />
      {children}
    </svg>
  );
});

export default UngePuzzle;
