import React from 'react';

export const iconData = {
  "id": "ClinoRamp",
  "name": "ClinoRamp",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 12.00 a 2.45 2.45 0 1 0 4.91 0 a 2.45 2.45 0 1 0 -4.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 12.00 a 5.10 5.10 0 1 0 10.21 0 a 5.10 5.10 0 1 0 -10.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.62 12.00 a 7.38 7.38 0 1 0 14.75 0 a 7.38 7.38 0 1 0 -14.75 0"
      }
    ]
  ]
};

export const ClinoRamp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 12.00 a 2.45 2.45 0 1 0 4.91 0 a 2.45 2.45 0 1 0 -4.91 0" />
      <path d="M 6.90 12.00 a 5.10 5.10 0 1 0 10.21 0 a 5.10 5.10 0 1 0 -10.21 0" />
      <path d="M 4.62 12.00 a 7.38 7.38 0 1 0 14.75 0 a 7.38 7.38 0 1 0 -14.75 0" />
      {children}
    </svg>
  );
});

export default ClinoRamp;
