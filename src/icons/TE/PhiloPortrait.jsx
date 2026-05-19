import React from 'react';

export const iconData = {
  "id": "PhiloPortrait",
  "name": "PhiloPortrait",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.34 10.87 L 11.34 10.87"
      }
    ],
    [
      "path",
      {
        "d": "M 11.63 7.22 L 12.87 11.02"
      }
    ],
    [
      "path",
      {
        "d": "M 16.44 10.17 L 13.20 12.53"
      }
    ],
    [
      "path",
      {
        "d": "M 15.11 15.66 L 11.87 13.30"
      }
    ],
    [
      "path",
      {
        "d": "M 9.48 16.09 L 10.72 12.28"
      }
    ]
  ]
};

export const PhiloPortrait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.34 10.87 L 11.34 10.87" />
      <path d="M 11.63 7.22 L 12.87 11.02" />
      <path d="M 16.44 10.17 L 13.20 12.53" />
      <path d="M 15.11 15.66 L 11.87 13.30" />
      <path d="M 9.48 16.09 L 10.72 12.28" />
      {children}
    </svg>
  );
});

export default PhiloPortrait;
