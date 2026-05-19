import React from 'react';

export const iconData = {
  "id": "LithoStrange",
  "name": "LithoStrange",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 12.00 a 2.49 2.49 0 1 0 4.98 0 a 2.49 2.49 0 1 0 -4.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.11 0 a 4.06 4.06 0 1 0 -8.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.78 12.00 a 5.22 5.22 0 1 0 10.45 0 a 5.22 5.22 0 1 0 -10.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 12.00 a 7.23 7.23 0 1 0 14.46 0 a 7.23 7.23 0 1 0 -14.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0",
        "stroke-dasharray": "4 2"
      }
    ]
  ]
};

export const LithoStrange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 12.00 a 2.49 2.49 0 1 0 4.98 0 a 2.49 2.49 0 1 0 -4.98 0" />
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.11 0 a 4.06 4.06 0 1 0 -8.11 0" />
      <path d="M 6.78 12.00 a 5.22 5.22 0 1 0 10.45 0 a 5.22 5.22 0 1 0 -10.45 0" />
      <path d="M 4.77 12.00 a 7.23 7.23 0 1 0 14.46 0 a 7.23 7.23 0 1 0 -14.46 0" />
      <path d="M 3.33 12.00 a 8.67 8.67 0 1 0 17.34 0 a 8.67 8.67 0 1 0 -17.34 0" stroke-dasharray="4 2" />
      {children}
    </svg>
  );
});

export default LithoStrange;
