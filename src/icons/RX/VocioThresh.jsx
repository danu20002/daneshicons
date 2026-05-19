import React from 'react';

export const iconData = {
  "id": "VocioThresh",
  "name": "VocioThresh",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 12.00 a 9.34 9.34 0 1 0 18.68 0 a 9.34 9.34 0 1 0 -18.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.66 12.00 a 9.34 2.8025406036525964 0 1 0 18.68 0 a 9.34 2.8025406036525964 0 1 0 -18.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.66 A 2 2 0 0 0 12.00 21.34"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.66 A 2 2 0 0 1 12.00 21.34"
      }
    ]
  ]
};

export const VocioThresh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 12.00 a 9.34 9.34 0 1 0 18.68 0 a 9.34 9.34 0 1 0 -18.68 0" />
      <path d="M 2.66 12.00 a 9.34 2.8025406036525964 0 1 0 18.68 0 a 9.34 2.8025406036525964 0 1 0 -18.68 0" />
      <path d="M 12.00 2.66 A 2 2 0 0 0 12.00 21.34" />
      <path d="M 12.00 2.66 A 2 2 0 0 1 12.00 21.34" />
      {children}
    </svg>
  );
});

export default VocioThresh;
