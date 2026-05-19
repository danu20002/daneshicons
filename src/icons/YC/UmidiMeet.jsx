import React from 'react';

export const iconData = {
  "id": "UmidiMeet",
  "name": "UmidiMeet",
  "category": "YC",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 12.00 a 4.83 4.83 0 1 0 9.67 0 a 4.83 4.83 0 1 0 -9.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.46 12.00 a 7.54 7.54 0 1 0 15.08 0 a 7.54 7.54 0 1 0 -15.08 0"
      }
    ]
  ]
};

export const UmidiMeet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.99 12.00 a 2.01 2.01 0 1 0 4.02 0 a 2.01 2.01 0 1 0 -4.02 0" />
      <path d="M 7.17 12.00 a 4.83 4.83 0 1 0 9.67 0 a 4.83 4.83 0 1 0 -9.67 0" />
      <path d="M 4.46 12.00 a 7.54 7.54 0 1 0 15.08 0 a 7.54 7.54 0 1 0 -15.08 0" />
      {children}
    </svg>
  );
});

export default UmidiMeet;
