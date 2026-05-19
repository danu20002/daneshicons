import React from 'react';

export const iconData = {
  "id": "GraphoHeir",
  "name": "GraphoHeir",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.82 6.78 C 5.49 9.38, 11.97 4.60, 17.22 15.28"
      }
    ],
    [
      "path",
      {
        "d": "M 7.40 6.95 C 17.84 10.26, 4.06 9.11, 15.94 16.44"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 3.12 C 6.73 15.63, 10.73 11.26, 14.55 15.17"
      }
    ]
  ]
};

export const GraphoHeir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.82 6.78 C 5.49 9.38, 11.97 4.60, 17.22 15.28" />
      <path d="M 7.40 6.95 C 17.84 10.26, 4.06 9.11, 15.94 16.44" />
      <path d="M 6.21 3.12 C 6.73 15.63, 10.73 11.26, 14.55 15.17" />
      {children}
    </svg>
  );
});

export default GraphoHeir;
