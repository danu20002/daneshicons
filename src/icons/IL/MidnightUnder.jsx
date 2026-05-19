import React from 'react';

export const iconData = {
  "id": "MidnightUnder",
  "name": "MidnightUnder",
  "category": "IL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.64 6.98 L 20.36 6.98 L 20.36 17.02 L 3.64 17.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.64 6.98 L 8.49 2.13 L 25.21 2.13 L 20.36 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 20.36 6.98 L 25.21 2.13 L 25.21 12.17 L 20.36 17.02"
      }
    ]
  ]
};

export const MidnightUnder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.64 6.98 L 20.36 6.98 L 20.36 17.02 L 3.64 17.02 Z" />
      <path d="M 3.64 6.98 L 8.49 2.13 L 25.21 2.13 L 20.36 6.98" />
      <path d="M 20.36 6.98 L 25.21 2.13 L 25.21 12.17 L 20.36 17.02" />
      {children}
    </svg>
  );
});

export default MidnightUnder;
