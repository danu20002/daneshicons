import React from 'react';

export const iconData = {
  "id": "InfraPear",
  "name": "InfraPear",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.03 8.49 L 12.03 8.49"
      }
    ],
    [
      "path",
      {
        "d": "M 13.05 6.81 L 15.05 10.27"
      }
    ],
    [
      "path",
      {
        "d": "M 17.02 10.31 L 15.02 13.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 15.51 L 11.97 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 10.95 17.19 L 8.95 13.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 13.69 L 8.98 10.22"
      }
    ]
  ]
};

export const InfraPear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.03 8.49 L 12.03 8.49" />
      <path d="M 13.05 6.81 L 15.05 10.27" />
      <path d="M 17.02 10.31 L 15.02 13.78" />
      <path d="M 15.97 15.51 L 11.97 15.51" />
      <path d="M 10.95 17.19 L 8.95 13.73" />
      <path d="M 6.98 13.69 L 8.98 10.22" />
      {children}
    </svg>
  );
});

export default InfraPear;
