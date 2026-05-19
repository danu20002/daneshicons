import React from 'react';

export const iconData = {
  "id": "TrajectoVague",
  "name": "TrajectoVague",
  "category": "HH",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.04 12.00 a 3.96 3.96 0 1 0 7.92 0 a 3.96 3.96 0 1 0 -7.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.79 12.00 a 5.21 5.21 0 1 0 10.42 0 a 5.21 5.21 0 1 0 -10.42 0",
        "stroke-dasharray": "3 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0",
        "stroke-dasharray": "5 3"
      }
    ]
  ]
};

export const TrajectoVague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 12.00 a 2.31 2.31 0 1 0 4.62 0 a 2.31 2.31 0 1 0 -4.62 0" />
      <path d="M 8.04 12.00 a 3.96 3.96 0 1 0 7.92 0 a 3.96 3.96 0 1 0 -7.92 0" />
      <path d="M 6.79 12.00 a 5.21 5.21 0 1 0 10.42 0 a 5.21 5.21 0 1 0 -10.42 0" stroke-dasharray="3 2" />
      <path d="M 4.96 12.00 a 7.04 7.04 0 1 0 14.08 0 a 7.04 7.04 0 1 0 -14.08 0" />
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" stroke-dasharray="5 3" />
      {children}
    </svg>
  );
});

export default TrajectoVague;
