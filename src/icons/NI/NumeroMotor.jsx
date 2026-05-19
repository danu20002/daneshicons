import React from 'react';

export const iconData = {
  "id": "NumeroMotor",
  "name": "NumeroMotor",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 12.00 Q 16.20 14.42 16.63 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 20.03 Q 12.00 16.84 7.37 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 20.03 Q 7.80 14.42 2.73 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 12.00 Q 7.80 9.58 7.37 3.97"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 3.97 Q 12.00 7.16 16.63 3.97"
      }
    ],
    [
      "path",
      {
        "d": "M 16.63 3.97 Q 16.20 9.58 21.27 12.00"
      }
    ]
  ]
};

export const NumeroMotor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 12.00 Q 16.20 14.42 16.63 20.03" />
      <path d="M 16.63 20.03 Q 12.00 16.84 7.37 20.03" />
      <path d="M 7.37 20.03 Q 7.80 14.42 2.73 12.00" />
      <path d="M 2.73 12.00 Q 7.80 9.58 7.37 3.97" />
      <path d="M 7.37 3.97 Q 12.00 7.16 16.63 3.97" />
      <path d="M 16.63 3.97 Q 16.20 9.58 21.27 12.00" />
      {children}
    </svg>
  );
});

export default NumeroMotor;
