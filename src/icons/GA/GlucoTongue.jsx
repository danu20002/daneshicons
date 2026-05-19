import React from 'react';

export const iconData = {
  "id": "GlucoTongue",
  "name": "GlucoTongue",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.87 10.93 L 11.87 10.93"
      }
    ],
    [
      "path",
      {
        "d": "M 11.74 7.74 L 12.98 11.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 10.44 L 12.73 12.79"
      }
    ],
    [
      "path",
      {
        "d": "M 14.71 15.29 L 11.48 12.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 15.60 L 10.94 11.79"
      }
    ]
  ]
};

export const GlucoTongue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.87 10.93 L 11.87 10.93" />
      <path d="M 11.74 7.74 L 12.98 11.55" />
      <path d="M 15.97 10.44 L 12.73 12.79" />
      <path d="M 14.71 15.29 L 11.48 12.94" />
      <path d="M 9.71 15.60 L 10.94 11.79" />
      {children}
    </svg>
  );
});

export default GlucoTongue;
