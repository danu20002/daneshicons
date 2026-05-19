import React from 'react';

export const iconData = {
  "id": "OdontoSapphire",
  "name": "OdontoSapphire",
  "category": "UW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 5.50 L 20.28 5.50 L 20.28 18.50 L 3.72 18.50 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.72 5.50 L 7.70 1.51 L 24.27 1.51 L 20.28 5.50"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 5.50 L 24.27 1.51 L 24.27 14.52 L 20.28 18.50"
      }
    ]
  ]
};

export const OdontoSapphire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 5.50 L 20.28 5.50 L 20.28 18.50 L 3.72 18.50 Z" />
      <path d="M 3.72 5.50 L 7.70 1.51 L 24.27 1.51 L 20.28 5.50" />
      <path d="M 20.28 5.50 L 24.27 1.51 L 24.27 14.52 L 20.28 18.50" />
      {children}
    </svg>
  );
});

export default OdontoSapphire;
