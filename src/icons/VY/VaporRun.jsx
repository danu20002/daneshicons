import React from 'react';

export const iconData = {
  "id": "VaporRun",
  "name": "VaporRun",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.50 8.25 C 15.84 4.04, 19.55 18.03, 19.69 19.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 9.39 C 9.24 19.75, 13.51 18.05, 14.99 20.65"
      }
    ],
    [
      "path",
      {
        "d": "M 7.89 3.31 C 6.70 15.38, 6.25 19.89, 14.05 19.90"
      }
    ]
  ]
};

export const VaporRun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.50 8.25 C 15.84 4.04, 19.55 18.03, 19.69 19.52" />
      <path d="M 5.88 9.39 C 9.24 19.75, 13.51 18.05, 14.99 20.65" />
      <path d="M 7.89 3.31 C 6.70 15.38, 6.25 19.89, 14.05 19.90" />
      {children}
    </svg>
  );
});

export default VaporRun;
