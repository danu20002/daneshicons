import React from 'react';

export const iconData = {
  "id": "RectiElude",
  "name": "RectiElude",
  "category": "CE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.29 12.00 a 4.71 4.71 0 1 0 9.42 0 a 4.71 4.71 0 1 0 -9.42 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 12.00 a 7.50 7.50 0 1 0 15.00 0 a 7.50 7.50 0 1 0 -15.00 0",
        "stroke-dasharray": "2 1"
      }
    ]
  ]
};

export const RectiElude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.06 0 a 2.03 2.03 0 1 0 -4.06 0" />
      <path d="M 7.29 12.00 a 4.71 4.71 0 1 0 9.42 0 a 4.71 4.71 0 1 0 -9.42 0" stroke-dasharray="4 2" />
      <path d="M 4.50 12.00 a 7.50 7.50 0 1 0 15.00 0 a 7.50 7.50 0 1 0 -15.00 0" stroke-dasharray="2 1" />
      {children}
    </svg>
  );
});

export default RectiElude;
