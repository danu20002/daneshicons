import React from 'react';

export const iconData = {
  "id": "EmeraldNoon",
  "name": "EmeraldNoon",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.73 12.00 L 16.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 12.00 L 12.72 9.87"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 12.00 L 12.72 14.13"
      }
    ]
  ]
};

export const EmeraldNoon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.73 12.00 L 16.27 12.00" />
      <path d="M 16.27 12.00 L 12.72 9.87" />
      <path d="M 16.27 12.00 L 12.72 14.13" />
      {children}
    </svg>
  );
});

export default EmeraldNoon;
