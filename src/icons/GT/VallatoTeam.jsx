import React from 'react';

export const iconData = {
  "id": "VallatoTeam",
  "name": "VallatoTeam",
  "category": "GT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.46 12.00 Q 16.34 13.41 18.85 16.97"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 16.97 Q 14.68 15.69 14.61 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 20.05 Q 12.00 16.57 9.39 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 20.05 Q 9.32 15.69 5.15 16.97"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 16.97 Q 7.66 13.41 3.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 Q 7.66 10.59 5.15 7.03"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 7.03 Q 9.32 8.31 9.39 3.95"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 3.95 Q 12.00 7.43 14.61 3.95"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 3.95 Q 14.68 8.31 18.85 7.03"
      }
    ],
    [
      "path",
      {
        "d": "M 18.85 7.03 Q 16.34 10.59 20.46 12.00"
      }
    ]
  ]
};

export const VallatoTeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.46 12.00 Q 16.34 13.41 18.85 16.97" />
      <path d="M 18.85 16.97 Q 14.68 15.69 14.61 20.05" />
      <path d="M 14.61 20.05 Q 12.00 16.57 9.39 20.05" />
      <path d="M 9.39 20.05 Q 9.32 15.69 5.15 16.97" />
      <path d="M 5.15 16.97 Q 7.66 13.41 3.54 12.00" />
      <path d="M 3.54 12.00 Q 7.66 10.59 5.15 7.03" />
      <path d="M 5.15 7.03 Q 9.32 8.31 9.39 3.95" />
      <path d="M 9.39 3.95 Q 12.00 7.43 14.61 3.95" />
      <path d="M 14.61 3.95 Q 14.68 8.31 18.85 7.03" />
      <path d="M 18.85 7.03 Q 16.34 10.59 20.46 12.00" />
      {children}
    </svg>
  );
});

export default VallatoTeam;
