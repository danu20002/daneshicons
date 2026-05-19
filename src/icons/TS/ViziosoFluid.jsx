import React from 'react';

export const iconData = {
  "id": "ViziosoFluid",
  "name": "ViziosoFluid",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 12.00 a 4.50 4.50 0 1 0 9.00 0 a 4.50 4.50 0 1 0 -9.00 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 12.00 a 6.28 6.28 0 1 0 12.57 0 a 6.28 6.28 0 1 0 -12.57 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0",
        "stroke-dasharray": "3 2"
      }
    ]
  ]
};

export const ViziosoFluid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.52 12.00 a 2.48 2.48 0 1 0 4.95 0 a 2.48 2.48 0 1 0 -4.95 0" />
      <path d="M 7.50 12.00 a 4.50 4.50 0 1 0 9.00 0 a 4.50 4.50 0 1 0 -9.00 0" stroke-dasharray="2 2" />
      <path d="M 5.72 12.00 a 6.28 6.28 0 1 0 12.57 0 a 6.28 6.28 0 1 0 -12.57 0" />
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.04 0 a 8.02 8.02 0 1 0 -16.04 0" stroke-dasharray="3 2" />
      {children}
    </svg>
  );
});

export default ViziosoFluid;
