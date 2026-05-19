import React from 'react';

export const iconData = {
  "id": "ZonzoCrucible",
  "name": "ZonzoCrucible",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 5.49 L 20.17 5.49 L 20.17 18.51 L 3.83 18.51 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.83 5.49 L 8.38 0.93 L 24.73 0.93 L 20.17 5.49"
      }
    ],
    [
      "path",
      {
        "d": "M 20.17 5.49 L 24.73 0.93 L 24.73 13.96 L 20.17 18.51"
      }
    ]
  ]
};

export const ZonzoCrucible = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 5.49 L 20.17 5.49 L 20.17 18.51 L 3.83 18.51 Z" />
      <path d="M 3.83 5.49 L 8.38 0.93 L 24.73 0.93 L 20.17 5.49" />
      <path d="M 20.17 5.49 L 24.73 0.93 L 24.73 13.96 L 20.17 18.51" />
      {children}
    </svg>
  );
});

export default ZonzoCrucible;
