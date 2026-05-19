import React from 'react';

export const iconData = {
  "id": "YellowRivet",
  "name": "YellowRivet",
  "category": "UL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 12.00 a 4.98 4.98 0 1 0 9.96 0 a 4.98 4.98 0 1 0 -9.96 0",
        "stroke-dasharray": "6 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.59 12.00 a 7.41 7.41 0 1 0 14.82 0 a 7.41 7.41 0 1 0 -14.82 0"
      }
    ]
  ]
};

export const YellowRivet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.60 12.00 a 2.40 2.40 0 1 0 4.80 0 a 2.40 2.40 0 1 0 -4.80 0" />
      <path d="M 7.02 12.00 a 4.98 4.98 0 1 0 9.96 0 a 4.98 4.98 0 1 0 -9.96 0" stroke-dasharray="6 2" />
      <path d="M 4.59 12.00 a 7.41 7.41 0 1 0 14.82 0 a 7.41 7.41 0 1 0 -14.82 0" />
      {children}
    </svg>
  );
});

export default YellowRivet;
