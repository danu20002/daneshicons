import React from 'react';

export const iconData = {
  "id": "HyperJuice",
  "name": "HyperJuice",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 12.98 L 6.49 19.58 L 8.19 3.43 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 14.85 L 6.78 15.35 L 11.71 5.80 Z"
      }
    ]
  ]
};

export const HyperJuice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 12.98 L 6.49 19.58 L 8.19 3.43 Z" />
      <path d="M 17.51 14.85 L 6.78 15.35 L 11.71 5.80 Z" />
      {children}
    </svg>
  );
});

export default HyperJuice;
