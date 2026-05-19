import React from 'react';

export const iconData = {
  "id": "SerenoHarsh",
  "name": "SerenoHarsh",
  "category": "SG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0",
        "stroke-dasharray": "6 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 12.00 a 4.88 4.88 0 1 0 9.76 0 a 4.88 4.88 0 1 0 -9.76 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.34 12.00 a 7.66 7.66 0 1 0 15.32 0 a 7.66 7.66 0 1 0 -15.32 0"
      }
    ]
  ]
};

export const SerenoHarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.24 0 a 2.12 2.12 0 1 0 -4.24 0" stroke-dasharray="6 3" />
      <path d="M 7.12 12.00 a 4.88 4.88 0 1 0 9.76 0 a 4.88 4.88 0 1 0 -9.76 0" />
      <path d="M 4.34 12.00 a 7.66 7.66 0 1 0 15.32 0 a 7.66 7.66 0 1 0 -15.32 0" />
      {children}
    </svg>
  );
});

export default SerenoHarsh;
