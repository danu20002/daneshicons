import React from 'react';

export const iconData = {
  "id": "VescicaResearch",
  "name": "VescicaResearch",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.50 10.48 C 12.24 16.81, 3.83 2.12, 8.82 10.72"
      }
    ],
    [
      "path",
      {
        "d": "M 14.94 17.44 L 6.42 4.20 L 9.92 16.29 L 17.85 21.86 L 19.05 13.19 L 13.59 13.29 L 17.88 16.31"
      }
    ]
  ]
};

export const VescicaResearch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.50 10.48 C 12.24 16.81, 3.83 2.12, 8.82 10.72" />
      <path d="M 14.94 17.44 L 6.42 4.20 L 9.92 16.29 L 17.85 21.86 L 19.05 13.19 L 13.59 13.29 L 17.88 16.31" />
      {children}
    </svg>
  );
});

export default VescicaResearch;
