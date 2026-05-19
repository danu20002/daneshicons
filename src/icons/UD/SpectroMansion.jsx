import React from 'react';

export const iconData = {
  "id": "SpectroMansion",
  "name": "SpectroMansion",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 5.60 L 19.26 5.60 L 19.26 18.40 L 4.74 18.40 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.60 L 8.49 1.86 L 23.00 1.86 L 19.26 5.60"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 5.60 L 23.00 1.86 L 23.00 14.66 L 19.26 18.40"
      }
    ]
  ]
};

export const SpectroMansion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 5.60 L 19.26 5.60 L 19.26 18.40 L 4.74 18.40 Z" />
      <path d="M 4.74 5.60 L 8.49 1.86 L 23.00 1.86 L 19.26 5.60" />
      <path d="M 19.26 5.60 L 23.00 1.86 L 23.00 14.66 L 19.26 18.40" />
      {children}
    </svg>
  );
});

export default SpectroMansion;
