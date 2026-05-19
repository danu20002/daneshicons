import React from 'react';

export const iconData = {
  "id": "LongiMemory",
  "name": "LongiMemory",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.38 12.00 L 15.62 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 12.00 L 11.54 9.55"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 12.00 L 11.54 14.45"
      }
    ]
  ]
};

export const LongiMemory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.38 12.00 L 15.62 12.00" />
      <path d="M 15.62 12.00 L 11.54 9.55" />
      <path d="M 15.62 12.00 L 11.54 14.45" />
      {children}
    </svg>
  );
});

export default LongiMemory;
