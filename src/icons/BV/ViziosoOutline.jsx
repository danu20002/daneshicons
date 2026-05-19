import React from 'react';

export const iconData = {
  "id": "ViziosoOutline",
  "name": "ViziosoOutline",
  "category": "BV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.57 12.00 a 8.43 2.5304834250826387 0 1 0 16.87 0 a 8.43 2.5304834250826387 0 1 0 -16.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 4.70 A 2 2 0 0 0 16.22 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 16.22 4.70 A 2 2 0 0 1 16.22 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.70 A 2 2 0 0 0 7.78 19.30"
      }
    ],
    [
      "path",
      {
        "d": "M 7.78 4.70 A 2 2 0 0 1 7.78 19.30"
      }
    ]
  ]
};

export const ViziosoOutline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.57 12.00 a 8.43 8.43 0 1 0 16.87 0 a 8.43 8.43 0 1 0 -16.87 0" />
      <path d="M 3.57 12.00 a 8.43 2.5304834250826387 0 1 0 16.87 0 a 8.43 2.5304834250826387 0 1 0 -16.87 0" />
      <path d="M 16.22 4.70 A 2 2 0 0 0 16.22 19.30" />
      <path d="M 16.22 4.70 A 2 2 0 0 1 16.22 19.30" />
      <path d="M 7.78 4.70 A 2 2 0 0 0 7.78 19.30" />
      <path d="M 7.78 4.70 A 2 2 0 0 1 7.78 19.30" />
      {children}
    </svg>
  );
});

export default ViziosoOutline;
