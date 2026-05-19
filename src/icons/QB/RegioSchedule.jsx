import React from 'react';

export const iconData = {
  "id": "RegioSchedule",
  "name": "RegioSchedule",
  "category": "QB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.94 12.00 a 2.06 2.06 0 1 0 4.13 0 a 2.06 2.06 0 1 0 -4.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 12.00 a 3.69 3.69 0 1 0 7.38 0 a 3.69 3.69 0 1 0 -7.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0",
        "stroke-dasharray": "5 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0"
      }
    ]
  ]
};

export const RegioSchedule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.94 12.00 a 2.06 2.06 0 1 0 4.13 0 a 2.06 2.06 0 1 0 -4.13 0" />
      <path d="M 8.31 12.00 a 3.69 3.69 0 1 0 7.38 0 a 3.69 3.69 0 1 0 -7.38 0" />
      <path d="M 6.38 12.00 a 5.62 5.62 0 1 0 11.24 0 a 5.62 5.62 0 1 0 -11.24 0" stroke-dasharray="5 2" />
      <path d="M 5.05 12.00 a 6.95 6.95 0 1 0 13.90 0 a 6.95 6.95 0 1 0 -13.90 0" />
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" />
      {children}
    </svg>
  );
});

export default RegioSchedule;
