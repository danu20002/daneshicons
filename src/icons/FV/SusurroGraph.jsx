import React from 'react';

export const iconData = {
  "id": "SusurroGraph",
  "name": "SusurroGraph",
  "category": "FV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 12.00 a 5.05 5.05 0 1 0 10.11 0 a 5.05 5.05 0 1 0 -10.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0"
      }
    ]
  ]
};

export const SusurroGraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 12.00 a 2.10 2.10 0 1 0 4.20 0 a 2.10 2.10 0 1 0 -4.20 0" />
      <path d="M 6.95 12.00 a 5.05 5.05 0 1 0 10.11 0 a 5.05 5.05 0 1 0 -10.11 0" />
      <path d="M 4.18 12.00 a 7.82 7.82 0 1 0 15.64 0 a 7.82 7.82 0 1 0 -15.64 0" />
      {children}
    </svg>
  );
});

export default SusurroGraph;
