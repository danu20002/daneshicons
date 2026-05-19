import React from 'react';

export const iconData = {
  "id": "PotoLow",
  "name": "PotoLow",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.50 10.27 L 14.50 10.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.25 11.56 L 12.25 15.03"
      }
    ],
    [
      "path",
      {
        "d": "M 11.25 14.17 L 9.25 10.70"
      }
    ]
  ]
};

export const PotoLow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.50 10.27 L 14.50 10.27" />
      <path d="M 14.25 11.56 L 12.25 15.03" />
      <path d="M 11.25 14.17 L 9.25 10.70" />
      {children}
    </svg>
  );
});

export default PotoLow;
