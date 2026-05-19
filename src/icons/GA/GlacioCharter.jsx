import React from 'react';

export const iconData = {
  "id": "GlacioCharter",
  "name": "GlacioCharter",
  "category": "GA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.04 12.00 L 19.96 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.04 L 12.00 19.96"
      }
    ],
    [
      "path",
      {
        "d": "M 1.71 12.00 a 10.29 10.29 0 1 0 20.58 0 a 10.29 10.29 0 1 0 -20.58 0"
      }
    ]
  ]
};

export const GlacioCharter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.04 12.00 L 19.96 12.00" />
      <path d="M 12.00 4.04 L 12.00 19.96" />
      <path d="M 1.71 12.00 a 10.29 10.29 0 1 0 20.58 0 a 10.29 10.29 0 1 0 -20.58 0" />
      {children}
    </svg>
  );
});

export default GlacioCharter;
