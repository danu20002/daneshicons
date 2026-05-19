import React from 'react';

export const iconData = {
  "id": "VileLand",
  "name": "VileLand",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.09 4.53 C 5.92 3.47, 6.26 17.06, 13.85 4.05"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 18.61 L 17.32 7.89"
      }
    ],
    [
      "path",
      {
        "d": "M 18.93 19.35 A 6.93 4.70 171 0 0 15.50 16.99"
      }
    ]
  ]
};

export const VileLand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.09 4.53 C 5.92 3.47, 6.26 17.06, 13.85 4.05" />
      <path d="M 19.01 18.61 L 17.32 7.89" />
      <path d="M 18.93 19.35 A 6.93 4.70 171 0 0 15.50 16.99" />
      {children}
    </svg>
  );
});

export default VileLand;
