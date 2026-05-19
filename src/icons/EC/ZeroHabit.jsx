import React from 'react';

export const iconData = {
  "id": "ZeroHabit",
  "name": "ZeroHabit",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.75 12.00 a 7.25 7.25 0 1 0 14.49 0 a 7.25 7.25 0 1 0 -14.49 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.69 12.00 a 4.31 4.31 0 1 1 8.63 0 a 4.31 4.31 0 1 1 -8.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.75 12.00 L 20.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 17.84 L 16.37 19.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 17.84 L 7.63 19.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.25 12.00 L 3.25 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.63 6.16 L 7.63 4.43"
      }
    ],
    [
      "path",
      {
        "d": "M 15.37 6.16 L 16.37 4.43"
      }
    ]
  ]
};

export const ZeroHabit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.75 12.00 a 7.25 7.25 0 1 0 14.49 0 a 7.25 7.25 0 1 0 -14.49 0" />
      <path d="M 7.69 12.00 a 4.31 4.31 0 1 1 8.63 0 a 4.31 4.31 0 1 1 -8.63 0" />
      <path d="M 18.75 12.00 L 20.75 12.00" />
      <path d="M 15.37 17.84 L 16.37 19.57" />
      <path d="M 8.63 17.84 L 7.63 19.57" />
      <path d="M 5.25 12.00 L 3.25 12.00" />
      <path d="M 8.63 6.16 L 7.63 4.43" />
      <path d="M 15.37 6.16 L 16.37 4.43" />
      {children}
    </svg>
  );
});

export default ZeroHabit;
