import React from 'react';

export const iconData = {
  "id": "StatoHarsh",
  "name": "StatoHarsh",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.52 6.40 L 19.48 6.40 L 19.48 17.60 L 4.52 17.60 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.52 6.40 L 9.34 1.59 L 24.29 1.59 L 19.48 6.40"
      }
    ],
    [
      "path",
      {
        "d": "M 19.48 6.40 L 24.29 1.59 L 24.29 12.78 L 19.48 17.60"
      }
    ]
  ]
};

export const StatoHarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.52 6.40 L 19.48 6.40 L 19.48 17.60 L 4.52 17.60 Z" />
      <path d="M 4.52 6.40 L 9.34 1.59 L 24.29 1.59 L 19.48 6.40" />
      <path d="M 19.48 6.40 L 24.29 1.59 L 24.29 12.78 L 19.48 17.60" />
      {children}
    </svg>
  );
});

export default StatoHarsh;
