import React from 'react';

export const iconData = {
  "id": "GravitoEdge",
  "name": "GravitoEdge",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.97 16.18 L 6.89 17.01 L 4.35 19.88 L 4.54 22.04 L 2.82 21.36 L 4.53 19.57 L 2.06 19.58 L 4.78 20.94 L 3.76 19.23 L 5.16 16.35 L 2.47 15.80 L 4.62 17.39 L 4.29 17.92 L 5.64 18.60 L 2.98 20.07 L 5.47 17.09 L 4.85 17.22 L 3.58 18.97 L 5.31 17.19 L 6.58 19.87 L 5.11 19.51 L 4.05 18.21"
      }
    ]
  ]
};

export const GravitoEdge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.97 16.18 L 6.89 17.01 L 4.35 19.88 L 4.54 22.04 L 2.82 21.36 L 4.53 19.57 L 2.06 19.58 L 4.78 20.94 L 3.76 19.23 L 5.16 16.35 L 2.47 15.80 L 4.62 17.39 L 4.29 17.92 L 5.64 18.60 L 2.98 20.07 L 5.47 17.09 L 4.85 17.22 L 3.58 18.97 L 5.31 17.19 L 6.58 19.87 L 5.11 19.51 L 4.05 18.21" />
      {children}
    </svg>
  );
});

export default GravitoEdge;
