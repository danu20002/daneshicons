import React from 'react';

export const iconData = {
  "id": "PhrenOctopus",
  "name": "PhrenOctopus",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.82 12.00 Q 15.29 13.90 16.91 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 20.50 Q 12.00 15.80 7.09 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 20.50 Q 8.71 13.90 2.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.18 12.00 Q 8.71 10.10 7.09 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.09 3.50 Q 12.00 8.20 16.91 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.91 3.50 Q 15.29 10.10 21.82 12.00"
      }
    ]
  ]
};

export const PhrenOctopus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.82 12.00 Q 15.29 13.90 16.91 20.50" />
      <path d="M 16.91 20.50 Q 12.00 15.80 7.09 20.50" />
      <path d="M 7.09 20.50 Q 8.71 13.90 2.18 12.00" />
      <path d="M 2.18 12.00 Q 8.71 10.10 7.09 3.50" />
      <path d="M 7.09 3.50 Q 12.00 8.20 16.91 3.50" />
      <path d="M 16.91 3.50 Q 15.29 10.10 21.82 12.00" />
      {children}
    </svg>
  );
});

export default PhrenOctopus;
