import React from 'react';

export const iconData = {
  "id": "TurrisToss",
  "name": "TurrisToss",
  "category": "TS",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 12.00 a 2.19 2.19 0 1 0 4.38 0 a 2.19 2.19 0 1 0 -4.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.93 12.00 a 5.07 5.07 0 1 0 10.15 0 a 5.07 5.07 0 1 0 -10.15 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 4.39 12.00 a 7.61 7.61 0 1 0 15.21 0 a 7.61 7.61 0 1 0 -15.21 0"
      }
    ]
  ]
};

export const TurrisToss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 12.00 a 2.19 2.19 0 1 0 4.38 0 a 2.19 2.19 0 1 0 -4.38 0" />
      <path d="M 6.93 12.00 a 5.07 5.07 0 1 0 10.15 0 a 5.07 5.07 0 1 0 -10.15 0" stroke-dasharray="5 1" />
      <path d="M 4.39 12.00 a 7.61 7.61 0 1 0 15.21 0 a 7.61 7.61 0 1 0 -15.21 0" />
      {children}
    </svg>
  );
});

export default TurrisToss;
