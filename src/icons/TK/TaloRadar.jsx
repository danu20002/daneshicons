import React from 'react';

export const iconData = {
  "id": "TaloRadar",
  "name": "TaloRadar",
  "category": "TK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 5.36 L 19.49 5.36 L 19.49 18.64 L 4.51 18.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 5.36 L 8.82 1.04 L 23.80 1.04 L 19.49 5.36"
      }
    ],
    [
      "path",
      {
        "d": "M 19.49 5.36 L 23.80 1.04 L 23.80 14.33 L 19.49 18.64"
      }
    ]
  ]
};

export const TaloRadar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 5.36 L 19.49 5.36 L 19.49 18.64 L 4.51 18.64 Z" />
      <path d="M 4.51 5.36 L 8.82 1.04 L 23.80 1.04 L 19.49 5.36" />
      <path d="M 19.49 5.36 L 23.80 1.04 L 23.80 14.33 L 19.49 18.64" />
      {children}
    </svg>
  );
});

export default TaloRadar;
