import React from 'react';

export const iconData = {
  "id": "TactoRice",
  "name": "TactoRice",
  "category": "UX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 12.00 a 7.83 7.83 0 1 0 15.67 0 a 7.83 7.83 0 1 0 -15.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.78 12.00 a 6.22 6.22 0 1 1 12.44 0 a 6.22 6.22 0 1 1 -12.44 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.33 12.00 L 21.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.62 16.71 L 19.15 18.00"
      }
    ],
    [
      "path",
      {
        "d": "M 13.27 19.22 L 13.62 21.19"
      }
    ],
    [
      "path",
      {
        "d": "M 8.33 18.35 L 7.33 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 14.51 L 3.23 15.19"
      }
    ],
    [
      "path",
      {
        "d": "M 5.11 9.49 L 3.23 8.81"
      }
    ],
    [
      "path",
      {
        "d": "M 8.33 5.65 L 7.33 3.92"
      }
    ],
    [
      "path",
      {
        "d": "M 13.27 4.78 L 13.62 2.81"
      }
    ],
    [
      "path",
      {
        "d": "M 17.62 7.29 L 19.15 6.00"
      }
    ]
  ]
};

export const TactoRice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 12.00 a 7.83 7.83 0 1 0 15.67 0 a 7.83 7.83 0 1 0 -15.67 0" />
      <path d="M 5.78 12.00 a 6.22 6.22 0 1 1 12.44 0 a 6.22 6.22 0 1 1 -12.44 0" />
      <path d="M 19.33 12.00 L 21.33 12.00" />
      <path d="M 17.62 16.71 L 19.15 18.00" />
      <path d="M 13.27 19.22 L 13.62 21.19" />
      <path d="M 8.33 18.35 L 7.33 20.08" />
      <path d="M 5.11 14.51 L 3.23 15.19" />
      <path d="M 5.11 9.49 L 3.23 8.81" />
      <path d="M 8.33 5.65 L 7.33 3.92" />
      <path d="M 13.27 4.78 L 13.62 2.81" />
      <path d="M 17.62 7.29 L 19.15 6.00" />
      {children}
    </svg>
  );
});

export default TactoRice;
