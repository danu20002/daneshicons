import React from 'react';

export const iconData = {
  "id": "MarinoSlug",
  "name": "MarinoSlug",
  "category": "GU",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.34 20.60 A 6.48 5.64 50 0 0 21.09 8.86"
      }
    ],
    [
      "path",
      {
        "d": "M 6.66 16.08 L 18.81 14.37"
      }
    ],
    [
      "path",
      {
        "d": "M 20.86 19.81 C 20.18 19.59, 8.95 17.07, 13.69 4.26"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 18.97 C 12.96 6.37, 3.20 20.50, 8.42 8.11"
      }
    ]
  ]
};

export const MarinoSlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.34 20.60 A 6.48 5.64 50 0 0 21.09 8.86" />
      <path d="M 6.66 16.08 L 18.81 14.37" />
      <path d="M 20.86 19.81 C 20.18 19.59, 8.95 17.07, 13.69 4.26" />
      <path d="M 3.04 18.97 C 12.96 6.37, 3.20 20.50, 8.42 8.11" />
      {children}
    </svg>
  );
});

export default MarinoSlug;
