import React from 'react';

export const iconData = {
  "id": "PseudoGraph",
  "name": "PseudoGraph",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.29 9.45 C 11.67 6.72, 4.21 17.86, 14.31 15.32"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 3.89 C 17.78 6.60, 17.22 18.28, 14.50 16.72"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 6.63 C 12.05 17.62, 12.31 19.98, 17.59 17.98"
      }
    ]
  ]
};

export const PseudoGraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.29 9.45 C 11.67 6.72, 4.21 17.86, 14.31 15.32" />
      <path d="M 5.61 3.89 C 17.78 6.60, 17.22 18.28, 14.50 16.72" />
      <path d="M 4.81 6.63 C 12.05 17.62, 12.31 19.98, 17.59 17.98" />
      {children}
    </svg>
  );
});

export default PseudoGraph;
