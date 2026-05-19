import React from 'react';

export const iconData = {
  "id": "TweedColumn",
  "name": "TweedColumn",
  "category": "ND",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.33 0 a 2.16 2.16 0 1 0 -4.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 12.00 a 5.02 5.02 0 1 0 10.05 0 a 5.02 5.02 0 1 0 -10.05 0",
        "stroke-dasharray": "3 3"
      }
    ],
    [
      "path",
      {
        "d": "M 4.42 12.00 a 7.58 7.58 0 1 0 15.15 0 a 7.58 7.58 0 1 0 -15.15 0"
      }
    ]
  ]
};

export const TweedColumn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.33 0 a 2.16 2.16 0 1 0 -4.33 0" />
      <path d="M 6.98 12.00 a 5.02 5.02 0 1 0 10.05 0 a 5.02 5.02 0 1 0 -10.05 0" stroke-dasharray="3 3" />
      <path d="M 4.42 12.00 a 7.58 7.58 0 1 0 15.15 0 a 7.58 7.58 0 1 0 -15.15 0" />
      {children}
    </svg>
  );
});

export default TweedColumn;
