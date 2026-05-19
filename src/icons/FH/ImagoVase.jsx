import React from 'react';

export const iconData = {
  "id": "ImagoVase",
  "name": "ImagoVase",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.70 9.88 L 14.70 9.88"
      }
    ],
    [
      "path",
      {
        "d": "M 14.49 11.93 L 12.49 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 10.81 14.19 L 8.81 10.72"
      }
    ]
  ]
};

export const ImagoVase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.70 9.88 L 14.70 9.88" />
      <path d="M 14.49 11.93 L 12.49 15.40" />
      <path d="M 10.81 14.19 L 8.81 10.72" />
      {children}
    </svg>
  );
});

export default ImagoVase;
