import React from 'react';

export const iconData = {
  "id": "GyroRed",
  "name": "GyroRed",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.07 12.00 a 9.93 9.93 0 1 0 19.85 0 a 9.93 9.93 0 1 0 -19.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.07 12.00 a 9.93 2.9781836874783036 0 1 0 19.85 0 a 9.93 2.9781836874783036 0 1 0 -19.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.40 A 2 2 0 0 0 16.96 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 16.96 3.40 A 2 2 0 0 1 16.96 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.40 A 2 2 0 0 0 7.04 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 3.40 A 2 2 0 0 1 7.04 20.60"
      }
    ]
  ]
};

export const GyroRed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.07 12.00 a 9.93 9.93 0 1 0 19.85 0 a 9.93 9.93 0 1 0 -19.85 0" />
      <path d="M 2.07 12.00 a 9.93 2.9781836874783036 0 1 0 19.85 0 a 9.93 2.9781836874783036 0 1 0 -19.85 0" />
      <path d="M 16.96 3.40 A 2 2 0 0 0 16.96 20.60" />
      <path d="M 16.96 3.40 A 2 2 0 0 1 16.96 20.60" />
      <path d="M 7.04 3.40 A 2 2 0 0 0 7.04 20.60" />
      <path d="M 7.04 3.40 A 2 2 0 0 1 7.04 20.60" />
      {children}
    </svg>
  );
});

export default GyroRed;
