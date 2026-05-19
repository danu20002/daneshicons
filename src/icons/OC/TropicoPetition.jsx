import React from 'react';

export const iconData = {
  "id": "TropicoPetition",
  "name": "TropicoPetition",
  "category": "OC",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.68 16.06 L 2.94 21.72 L 17.78 16.40 L 4.41 21.66 L 18.96 10.97 L 6.42 3.56 L 13.62 12.90"
      }
    ],
    [
      "path",
      {
        "d": "M 8.85 11.52 A 4.94 2.37 92 0 1 12.36 5.97"
      }
    ],
    [
      "path",
      {
        "d": "M 6.17 18.09 L 7.02 9.81 L 8.02 11.98 L 2.04 21.81 L 4.39 4.25 L 2.35 5.55 L 18.97 10.00"
      }
    ],
    [
      "path",
      {
        "d": "M 11.35 18.96 A 4.56 4.81 165 0 1 4.59 14.44"
      }
    ]
  ]
};

export const TropicoPetition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.68 16.06 L 2.94 21.72 L 17.78 16.40 L 4.41 21.66 L 18.96 10.97 L 6.42 3.56 L 13.62 12.90" />
      <path d="M 8.85 11.52 A 4.94 2.37 92 0 1 12.36 5.97" />
      <path d="M 6.17 18.09 L 7.02 9.81 L 8.02 11.98 L 2.04 21.81 L 4.39 4.25 L 2.35 5.55 L 18.97 10.00" />
      <path d="M 11.35 18.96 A 4.56 4.81 165 0 1 4.59 14.44" />
      {children}
    </svg>
  );
});

export default TropicoPetition;
