import React from 'react';

export const iconData = {
  "id": "TritoCap",
  "name": "TritoCap",
  "category": "RZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.46 12.00 a 7.54 7.54 0 1 0 15.08 0 a 7.54 7.54 0 1 0 -15.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.03 12.00 a 4.97 4.97 0 1 1 9.93 0 a 4.97 4.97 0 1 1 -9.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.04 12.00 L 21.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 17.50 L 17.64 19.07"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 18.86 L 9.99 20.81"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 15.05 L 3.85 15.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.66 8.95 L 3.85 8.08"
      }
    ],
    [
      "path",
      {
        "d": "M 10.43 5.14 L 9.99 3.19"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 6.50 L 17.64 4.93"
      }
    ]
  ]
};

export const TritoCap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.46 12.00 a 7.54 7.54 0 1 0 15.08 0 a 7.54 7.54 0 1 0 -15.08 0" />
      <path d="M 7.03 12.00 a 4.97 4.97 0 1 1 9.93 0 a 4.97 4.97 0 1 1 -9.93 0" />
      <path d="M 19.04 12.00 L 21.04 12.00" />
      <path d="M 16.39 17.50 L 17.64 19.07" />
      <path d="M 10.43 18.86 L 9.99 20.81" />
      <path d="M 5.66 15.05 L 3.85 15.92" />
      <path d="M 5.66 8.95 L 3.85 8.08" />
      <path d="M 10.43 5.14 L 9.99 3.19" />
      <path d="M 16.39 6.50 L 17.64 4.93" />
      {children}
    </svg>
  );
});

export default TritoCap;
