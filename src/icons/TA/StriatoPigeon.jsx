import React from 'react';

export const iconData = {
  "id": "StriatoPigeon",
  "name": "StriatoPigeon",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.86 8.59 C 7.77 15.99, 18.18 15.75, 20.82 18.70"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 3.38 C 12.62 12.85, 4.90 18.24, 15.52 14.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.61 7.56 C 9.72 8.81, 10.24 14.05, 21.19 17.09"
      }
    ]
  ]
};

export const StriatoPigeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.86 8.59 C 7.77 15.99, 18.18 15.75, 20.82 18.70" />
      <path d="M 4.10 3.38 C 12.62 12.85, 4.90 18.24, 15.52 14.15" />
      <path d="M 2.61 7.56 C 9.72 8.81, 10.24 14.05, 21.19 17.09" />
      {children}
    </svg>
  );
});

export default StriatoPigeon;
