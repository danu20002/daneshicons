import React from 'react';

export const iconData = {
  "id": "TriangEra",
  "name": "TriangEra",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 5.30 L 19.18 5.30 L 19.18 18.70 L 4.82 18.70 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 5.30 L 8.78 1.34 L 23.13 1.34 L 19.18 5.30"
      }
    ],
    [
      "path",
      {
        "d": "M 19.18 5.30 L 23.13 1.34 L 23.13 14.75 L 19.18 18.70"
      }
    ]
  ]
};

export const TriangEra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 5.30 L 19.18 5.30 L 19.18 18.70 L 4.82 18.70 Z" />
      <path d="M 4.82 5.30 L 8.78 1.34 L 23.13 1.34 L 19.18 5.30" />
      <path d="M 19.18 5.30 L 23.13 1.34 L 23.13 14.75 L 19.18 18.70" />
      {children}
    </svg>
  );
});

export default TriangEra;
