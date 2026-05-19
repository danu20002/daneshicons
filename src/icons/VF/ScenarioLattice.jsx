import React from 'react';

export const iconData = {
  "id": "ScenarioLattice",
  "name": "ScenarioLattice",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.91 6.81 C 17.84 14.81, 18.42 15.64, 16.70 16.02"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 7.02 C 4.98 8.75, 5.32 8.01, 20.41 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.94 9.22 C 8.95 7.10, 17.58 5.15, 16.17 16.38"
      }
    ],
    [
      "path",
      {
        "d": "M 7.75 7.69 C 7.40 17.98, 4.31 8.02, 15.39 18.07"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 4.59 C 4.85 4.67, 4.89 7.32, 14.41 14.35"
      }
    ],
    [
      "path",
      {
        "d": "M 4.33 8.11 C 16.72 15.09, 5.24 14.25, 18.45 16.48"
      }
    ]
  ]
};

export const ScenarioLattice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.91 6.81 C 17.84 14.81, 18.42 15.64, 16.70 16.02" />
      <path d="M 6.77 7.02 C 4.98 8.75, 5.32 8.01, 20.41 18.58" />
      <path d="M 9.94 9.22 C 8.95 7.10, 17.58 5.15, 16.17 16.38" />
      <path d="M 7.75 7.69 C 7.40 17.98, 4.31 8.02, 15.39 18.07" />
      <path d="M 5.09 4.59 C 4.85 4.67, 4.89 7.32, 14.41 14.35" />
      <path d="M 4.33 8.11 C 16.72 15.09, 5.24 14.25, 18.45 16.48" />
      {children}
    </svg>
  );
});

export default ScenarioLattice;
