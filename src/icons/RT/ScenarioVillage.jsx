import React from 'react';

export const iconData = {
  "id": "ScenarioVillage",
  "name": "ScenarioVillage",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 2.85 A 5.91 6.44 45 0 0 6.10 13.99"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 5.49 L 3.22 12.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.45 8.87 C 13.58 2.05, 16.95 13.10, 14.20 2.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 3.20 C 6.76 12.43, 18.51 12.90, 15.58 7.24"
      }
    ]
  ]
};

export const ScenarioVillage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 2.85 A 5.91 6.44 45 0 0 6.10 13.99" />
      <path d="M 17.79 5.49 L 3.22 12.11" />
      <path d="M 9.45 8.87 C 13.58 2.05, 16.95 13.10, 14.20 2.87" />
      <path d="M 7.91 3.20 C 6.76 12.43, 18.51 12.90, 15.58 7.24" />
      {children}
    </svg>
  );
});

export default ScenarioVillage;
