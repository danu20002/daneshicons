import React from 'react';

export const iconData = {
  "id": "VerduraOnly",
  "name": "VerduraOnly",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.73 11.29 L 11.73 11.29"
      }
    ],
    [
      "path",
      {
        "d": "M 14.75 8.65 L 12.75 12.12"
      }
    ],
    [
      "path",
      {
        "d": "M 13.53 16.05 L 11.53 12.59"
      }
    ]
  ]
};

export const VerduraOnly = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.73 11.29 L 11.73 11.29" />
      <path d="M 14.75 8.65 L 12.75 12.12" />
      <path d="M 13.53 16.05 L 11.53 12.59" />
      {children}
    </svg>
  );
});

export default VerduraOnly;
