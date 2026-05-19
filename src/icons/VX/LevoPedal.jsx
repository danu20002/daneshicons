import React from 'react';

export const iconData = {
  "id": "LevoPedal",
  "name": "LevoPedal",
  "category": "VX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.64 12.00 a 2.36 2.36 0 1 0 4.73 0 a 2.36 2.36 0 1 0 -4.73 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 12.00 a 3.71 3.71 0 1 0 7.42 0 a 3.71 3.71 0 1 0 -7.42 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 12.00 a 5.33 5.33 0 1 0 10.65 0 a 5.33 5.33 0 1 0 -10.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 0 13.88 0 a 6.94 6.94 0 1 0 -13.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0"
      }
    ]
  ]
};

export const LevoPedal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.64 12.00 a 2.36 2.36 0 1 0 4.73 0 a 2.36 2.36 0 1 0 -4.73 0" stroke-dasharray="2 2" />
      <path d="M 8.29 12.00 a 3.71 3.71 0 1 0 7.42 0 a 3.71 3.71 0 1 0 -7.42 0" />
      <path d="M 6.67 12.00 a 5.33 5.33 0 1 0 10.65 0 a 5.33 5.33 0 1 0 -10.65 0" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 0 13.88 0 a 6.94 6.94 0 1 0 -13.88 0" />
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.75 0 a 8.87 8.87 0 1 0 -17.75 0" />
      {children}
    </svg>
  );
});

export default LevoPedal;
