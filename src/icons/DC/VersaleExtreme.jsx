import React from 'react';

export const iconData = {
  "id": "VersaleExtreme",
  "name": "VersaleExtreme",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.75 12.00 Q 15.94 14.28 16.87 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 20.44 Q 12.00 16.55 7.13 20.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 20.44 Q 8.06 14.28 2.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.25 12.00 Q 8.06 9.72 7.13 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 7.13 3.56 Q 12.00 7.45 16.87 3.56"
      }
    ],
    [
      "path",
      {
        "d": "M 16.87 3.56 Q 15.94 9.72 21.75 12.00"
      }
    ]
  ]
};

export const VersaleExtreme = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.75 12.00 Q 15.94 14.28 16.87 20.44" />
      <path d="M 16.87 20.44 Q 12.00 16.55 7.13 20.44" />
      <path d="M 7.13 20.44 Q 8.06 14.28 2.25 12.00" />
      <path d="M 2.25 12.00 Q 8.06 9.72 7.13 3.56" />
      <path d="M 7.13 3.56 Q 12.00 7.45 16.87 3.56" />
      <path d="M 16.87 3.56 Q 15.94 9.72 21.75 12.00" />
      {children}
    </svg>
  );
});

export default VersaleExtreme;
