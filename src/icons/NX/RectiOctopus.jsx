import React from 'react';

export const iconData = {
  "id": "RectiOctopus",
  "name": "RectiOctopus",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.22 4.51 C 7.38 5.69, 10.37 12.72, 18.09 20.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.93 7.10 C 13.53 8.26, 8.19 6.21, 20.40 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 9.22 2.15 C 16.82 15.15, 12.10 18.88, 16.40 21.30"
      }
    ],
    [
      "path",
      {
        "d": "M 4.73 7.11 C 19.75 13.06, 19.17 14.50, 15.11 18.10"
      }
    ]
  ]
};

export const RectiOctopus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.22 4.51 C 7.38 5.69, 10.37 12.72, 18.09 20.33" />
      <path d="M 8.93 7.10 C 13.53 8.26, 8.19 6.21, 20.40 16.80" />
      <path d="M 9.22 2.15 C 16.82 15.15, 12.10 18.88, 16.40 21.30" />
      <path d="M 4.73 7.11 C 19.75 13.06, 19.17 14.50, 15.11 18.10" />
      {children}
    </svg>
  );
});

export default RectiOctopus;
