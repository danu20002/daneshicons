import React from 'react';

export const iconData = {
  "id": "GenoGnome",
  "name": "GenoGnome",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 6.62 L 20.30 6.62 L 20.30 17.38 L 3.70 17.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 6.62 L 7.62 2.71 L 24.21 2.71 L 20.30 6.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.30 6.62 L 24.21 2.71 L 24.21 13.47 L 20.30 17.38"
      }
    ]
  ]
};

export const GenoGnome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 6.62 L 20.30 6.62 L 20.30 17.38 L 3.70 17.38 Z" />
      <path d="M 3.70 6.62 L 7.62 2.71 L 24.21 2.71 L 20.30 6.62" />
      <path d="M 20.30 6.62 L 24.21 2.71 L 24.21 13.47 L 20.30 17.38" />
      {children}
    </svg>
  );
});

export default GenoGnome;
