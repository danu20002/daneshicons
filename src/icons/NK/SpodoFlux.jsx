import React from 'react';

export const iconData = {
  "id": "SpodoFlux",
  "name": "SpodoFlux",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.66 12.00 L 17.34 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 12.00 L 13.54 9.72"
      }
    ],
    [
      "path",
      {
        "d": "M 17.34 12.00 L 13.54 14.28"
      }
    ]
  ]
};

export const SpodoFlux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.66 12.00 L 17.34 12.00" />
      <path d="M 17.34 12.00 L 13.54 9.72" />
      <path d="M 17.34 12.00 L 13.54 14.28" />
      {children}
    </svg>
  );
});

export default SpodoFlux;
